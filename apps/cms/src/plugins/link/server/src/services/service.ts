//@ts-nocheck
import type { Core, Schema } from '@strapi/strapi';
import pluralize from 'pluralize';

export type Route = {
  slug: string;
  locale?: string;
  id?: number;
  title?: string;
  parent?: any;
  uid: string;
  kind?: string;
  route: string;
};

export type Routes = Record<string, Route[]>;

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async routes(ctx) {
    return await fetchRoutes(
      strapi.config.contentTypes,
      strapi,
      ctx.request ? ctx.request.query : {}
    );
  },
});

export const fetchRoutes = async (
  collectionTypes: any[],
  strapi: any,
  params?: {
    locale?: string;
    slug?: string;
    title?: string;
    route?: string;
    status?: string;
    documentId?: string;
  }
) => {
  const searchParams: any = {
    status: params.status || 'published',
    where: {},
    fields: ['slug', 'locale', 'title', 'documentId', 'id'],
  };

  if (params) {
    if (params.id) {
      searchParams.where.id = { $eq: params.id };
    }

    if (params.documentId) {
      searchParams.where.documentId = params.documentId;
    }

    if (params.locale) {
      searchParams.where.locale = params.locale;
    }

    if (params.slug) {
      searchParams.where.slug = params.slug;
    }
    if (params.title) {
      searchParams.where.title = { $contains: params.title };
    }
    if (params.route) {
      searchParams.where.route = params.route;
    }
  }

  const promises = collectionTypes.map(async (collectionType) => {
    if (collectionType.uid === 'api::home-page.home-page') {
      if (params.slug) {
        return;
      }

      const where: any = { locale: params.locale ?? 'nl' };

      if (params.title) {
        where.title = { $contains: params.title };
      }

      const homepage = await strapi.documents(collectionType.uid).findFirst({
        status: searchParams.status || 'published',
        where,
        fields: ['locale', 'title', 'documentId', 'id'],
      });

      if (!homepage || params.id) {
        return {};
      }

      return {
        [collectionType.uid]: [
          {
            ...homepage,
            isHome: true,
            slug: '',
            kind: collectionType.kind,
          },
        ],
      };
    }

    let givenSlugs = [];
    const { parent, parentUid, childrenUid } = collectionType.attributes;

    if (parent) {
      givenSlugs = await strapi
        .documents(collectionType.uid)
        .findMany({ ...searchParams, populate: 'parent' });
    } else if (parentUid) {
      givenSlugs = await strapi.documents(collectionType.uid).findMany({
        ...searchParams,
        fields: ['slug', 'locale', 'title', 'documentId', 'parentUid'],
      });
    } else if (childrenUid) {
      givenSlugs = await strapi.documents(collectionType.uid).findMany({
        ...searchParams,
        fields: ['slug', 'locale', 'title', 'documentId', 'childrenUid'],
      });
    } else {
      givenSlugs = await strapi.documents(collectionType.uid).findMany(searchParams);
    }

    if (!givenSlugs) {
      return {};
    }

    return {
      [collectionType.uid]: givenSlugs.map((slug: any) => ({ ...slug, kind: collectionType.kind })),
    };
  });

  const results = await Promise.all(promises);

  const routes = results.reduce((acc, result) => {
    return { ...acc, ...result };
  }, {});

  const routesWithSlugs = await Promise.all(
    Object.entries(routes).map(async ([uid, routeArray]) => {
      const updatedRoutes = await Promise.all(
        routeArray.map(async (route) => {
          let fullSlug = route.slug ? `/${route.locale}/${route.slug}` : `/${route.locale}`;

          if (route.parent) {
            fullSlug = `/${route.locale}/${route.parent.slug}/${route.slug}`;
            route.parent = { ...route.parent, route: `/${route.locale}/${route.parent.slug}` };
          }

          if (route.parentUid) {
            const parent = await strapi.documents(route.parentUid).findFirst({
              status: 'published',
              fields: ['slug', 'locale', 'title', 'childrenUid'],
            });

            route.parent = {
              ...parent,
              route: `/${route.locale}/${parent.slug}`,
            };

            if (parent.length === 0) {
              fullSlug = `/${route.locale}/${route.slug}`;
            } else {
              fullSlug = `/${route.locale}/${parent.slug}/${route.slug}`;
            }
          }

          if (route.childrenUid) {
            route.endpoint = convertUidToEndpoint(route.childrenUid);
          }

          return { ...route, uid, slug: route.slug, route: fullSlug };
        })
      );

      return { [uid]: updatedRoutes };
    })
  );

  const flattenedRoutesWithSlugs = routesWithSlugs.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  return groupRoutesByLocale(flattenedRoutesWithSlugs);
};

export const groupRoutesByLocale = (routes: Record<string, Route[]>): Record<string, Route[]> => {
  const groupedRoutes: Record<string, Route[]> = {};

  for (const [uid, routeArray] of Object.entries(routes)) {
    routeArray.forEach((route) => {
      if (!groupedRoutes[route.locale]) {
        groupedRoutes[route.locale] = [];
      }

      groupedRoutes[route.locale].push(route);
    });
  }

  return groupedRoutes;
};

export default service;

export const convertUidToEndpoint = (uid: string) => {
  if (!uid) {
    return;
  }

  const match = uid.match(/^api::([\w-]+)\.[\w-]+$/);

  if (match) {
    const name = match[1];
    //@eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return `api/${pluralize(name)}`;
  }
};
