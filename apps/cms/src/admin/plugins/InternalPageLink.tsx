import { Plugin, ButtonView, View, toWidget } from 'ckeditor5';

const internalLinkIcon =
	'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0771 15L12.0681 13.584C12.1246 13.5033 12.1964 13.4345 12.2794 13.3816C12.3625 13.3286 12.4552 13.2926 12.5522 13.2754C12.6491 13.2583 12.7486 13.2604 12.8447 13.2817C12.9409 13.303 13.0319 13.343 13.1126 13.3995C13.1933 13.456 13.2621 13.5278 13.315 13.6108C13.368 13.6939 13.4041 13.7865 13.4212 13.8835C13.4383 13.9805 13.4362 14.0799 13.4149 14.1761C13.3936 14.2723 13.3536 14.3633 13.2971 14.444L12.1491 16.084C12.0914 16.1666 12.0176 16.2366 11.9321 16.29C11.0649 17.197 9.90159 17.7635 8.65281 17.8868C7.40403 18.0101 6.15237 17.6821 5.12451 16.9623C4.09666 16.2424 3.36057 15.1783 3.04957 13.9626C2.73857 12.7469 2.87321 11.46 3.42912 10.335C3.45008 10.2365 3.49091 10.1432 3.54912 10.061L4.69612 8.422C4.75107 8.33778 4.8224 8.26548 4.90587 8.20938C4.98933 8.15329 5.08322 8.11456 5.18195 8.09548C5.28069 8.07641 5.38225 8.07738 5.4806 8.09835C5.57895 8.11932 5.67208 8.15985 5.75445 8.21754C5.83682 8.27522 5.90674 8.34888 5.96007 8.43414C6.0134 8.51939 6.04904 8.6145 6.06487 8.71381C6.0807 8.81312 6.07639 8.91459 6.05221 9.0122C6.02803 9.10981 5.98447 9.20156 5.92412 9.282L4.93312 10.7L4.93912 10.703C4.44022 11.5172 4.27072 12.491 4.46517 13.4259C4.65963 14.3608 5.20339 15.1863 5.98557 15.734C6.76775 16.2817 7.72941 16.5104 8.67442 16.3735C9.61943 16.2365 10.4766 15.7442 11.0711 14.997L11.0771 15.001V15ZM16.5711 9.665C16.55 9.76348 16.5092 9.85667 16.4511 9.939L15.3041 11.578C15.2492 11.6622 15.1778 11.7345 15.0944 11.7906C15.0109 11.8467 14.917 11.8854 14.8183 11.9045C14.7195 11.9236 14.618 11.9226 14.5196 11.9016C14.4213 11.8807 14.3282 11.8401 14.2458 11.7825C14.1634 11.7248 14.0935 11.6511 14.0402 11.5659C13.9868 11.4806 13.9512 11.3855 13.9354 11.2862C13.9195 11.1869 13.9238 11.0854 13.948 10.9878C13.9722 10.8902 14.0158 10.7984 14.0761 10.718L14.9361 9.488C15.4983 8.67301 15.7154 7.66875 15.54 6.69432C15.3646 5.71989 14.811 4.85436 13.9999 4.28656C13.1888 3.71876 12.186 3.49477 11.2104 3.66346C10.2348 3.83215 9.36548 4.37982 8.79212 5.187L7.93212 6.416C7.81808 6.57897 7.64396 6.68997 7.44808 6.72457C7.2522 6.75917 7.05059 6.71454 6.88762 6.6005C6.72464 6.48645 6.61365 6.31234 6.57905 6.11646C6.54444 5.92058 6.58908 5.71897 6.70312 5.556L7.85112 3.916C7.90884 3.83342 7.98265 3.76335 8.06812 3.71C8.93531 2.803 10.0986 2.23654 11.3474 2.11321C12.5962 1.98989 13.8479 2.31785 14.8757 3.0377C15.9036 3.75754 16.6397 4.82168 16.9507 6.03739C17.2617 7.2531 17.127 8.53999 16.5711 9.665Z" fill="black"/><mask id="mask0_8_5345" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="6" y="5" width="8" height="9"><rect x="14" y="13.5195" width="8" height="8" transform="rotate(-180 14 13.5195)" fill="#D9D9D9"/></mask><g mask="url(#mask0_8_5345)"><path d="M9.05837 9.99453L11.5667 9.99453L11.5667 7.09453C11.5667 6.95009 11.6181 6.82648 11.7209 6.7237C11.8236 6.62092 11.9473 6.56953 12.0917 6.56953C12.2361 6.56953 12.3598 6.62092 12.4625 6.7237C12.5653 6.82648 12.6167 6.95009 12.6167 7.09453L12.6167 9.99453C12.6167 10.289 12.5153 10.5376 12.3125 10.7404C12.1098 10.9431 11.8611 11.0445 11.5667 11.0445L9.05837 11.0445L9.70837 11.6945C9.81392 11.8001 9.8667 11.9223 9.8667 12.0612C9.8667 12.2001 9.81392 12.3223 9.70837 12.4279C9.60281 12.5334 9.4792 12.5862 9.33753 12.5862C9.19587 12.5862 9.07226 12.5334 8.9667 12.4279L7.42503 10.8945C7.37503 10.8445 7.33614 10.7862 7.30837 10.7195C7.28059 10.6529 7.2667 10.5862 7.2667 10.5195C7.2667 10.4529 7.28059 10.3862 7.30837 10.3195C7.33614 10.2529 7.37503 10.1945 7.42503 10.1445L8.9667 8.60286C9.07226 8.49731 9.19448 8.44592 9.33337 8.4487C9.47226 8.45148 9.59448 8.50564 9.70003 8.6112C9.80559 8.71675 9.85837 8.84036 9.85837 8.98203C9.85837 9.1237 9.80559 9.24731 9.70003 9.35286L9.05837 9.99453Z" fill="black"/></g></svg>';
class InternalPageLink extends Plugin {
	injectCustomStyles() {
		const styleElement = document.createElement('style');
		styleElement.textContent = `
		.ck.ck-reset_all .ck-dropdown.ck-typeahead {
			display: flex;
			flex-direction: column;
			padding: 16px;
			background: white;
			border: 1px solid #ccc;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
			width: 300px;
			border-radius: 4px;
		}
		.ck.ck-reset_all .ck-typeahead-title {
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 8px;
		}
		.ck.ck-reset_all .ck-typeahead-description {
			font-size: 14px;
			color: #666;
			margin-bottom: 12px;
			white-space: normal !important;
		}
		.ck.ck-reset_all .ck-typeahead-input {
			padding: 8px;
			margin-bottom: 8px;
			border: 1px solid #ccc;
			border-radius: 4px;
			width: calc(100% - 16px);
		}
		.ck.ck-reset_all .ck-typeahead-list {
			list-style: none;
			padding: 0;
			margin: 0;
			max-height: 200px;
			overflow-y: auto;
			border-top: 1px solid #eee;
		}
		.ck.ck-reset_all .ck-typeahead-item {
			padding: 8px;
			cursor: pointer;
			border-bottom: 1px solid #eee;
		}
		.ck.ck-reset_all .ck-typeahead-item:hover {
			background: #f0f0f0;
		}
	`;
		document.head.appendChild(styleElement);
	}

	init() {
		this.injectCustomStyles();

		const editor = this.editor;

		editor.ui.componentFactory.add('internalPageLink', () => {
			const button = new ButtonView();

			button.set({
				label: 'Select internal website page',
				tooltip: true,
				icon: internalLinkIcon,
				isEnabled: false,
			});

			editor.model.document.selection.on('change:range', () => {
				const selection = editor.model.document.selection;

				// Enable the button if there's a valid text selection
				button.isEnabled = !selection.isCollapsed;
			});

			button.on('execute', async () => {
				try {
					// Fetch routes from the API
					const response = await fetch('/api/link/routes');
					if (!response.ok) throw new Error('Failed to fetch routes');
					const { data } = await response.json();

					// Transform the routes
					const routes = Object.entries(data.routes).flatMap(([locale, routes]) =>
						routes.map((route) => ({
							locale,
							title: route.title,
							label: `${route.title} (${route.route})`,
							value: `${route.uid}/${route.documentId}/${locale}`,
						}))
					);

					// Display dropdown with type-ahead functionality
					this.showTypeaheadDropdown(editor, routes);
				} catch (err) {
					console.error('Error fetching routes:', err);
				}
			});

			return button;
		});
	}

	getToolbarButtonElement(editor, tooltipText) {
		// Find the toolbar element
		const toolbarElement = editor.ui.view.toolbar.element;

		// Look for the button with the matching data-cke-tooltip-text attribute
		const button = toolbarElement.querySelector(`[data-cke-tooltip-text="${tooltipText}"]`);

		if (!button) {
			console.error(`Toolbar button with tooltip "${tooltipText}" not found.`);
		}

		return button || toolbarElement; // Fallback to toolbar if button is not found
	}

	showTypeaheadDropdown(editor, routes) {
		const balloon = editor.plugins.get('ContextualBalloon');
		const dropdownView = this.createTypeaheadDropdownView(routes);

		const target = this.getToolbarButtonElement(editor, 'Select internal website page');

		if (!target) {
			console.error('Cannot position dropdown: target element not found.');
			return;
		}

		if (!balloon.hasView(dropdownView)) {
			balloon.add({
				view: dropdownView,
				position: {
					target: target,
				},
			});
		} else {
			balloon.remove(dropdownView);
		}
	}

	createTypeaheadDropdownView(routes) {
		const dropdownView = new View();

		dropdownView.setTemplate({
			tag: 'div',
			attributes: { class: 'ck-dropdown ck-typeahead' },
			children: [
				{
					tag: 'input',
					attributes: {
						class: 'ck-typeahead-input',
						placeholder: 'Search routes...',
						type: 'text',
					},
				},
				{
					tag: 'ul',
					attributes: { class: 'ck-typeahead-list' },
				},
			],
		});

		dropdownView.on('render', () => {
			const inputElement = dropdownView.element.querySelector('.ck-typeahead-input');
			const listElement = dropdownView.element.querySelector('.ck-typeahead-list');

			// Populate the initial list
			this.renderRoutesList(routes, listElement);

			// Add filtering functionality
			inputElement.addEventListener('input', (event) => {
				const query = event.target.value.toLowerCase();
				const filteredRoutes = routes.filter((route) => route.label.toLowerCase().includes(query));
				this.renderRoutesList(filteredRoutes, listElement);
			});

			// Handle item selection
			listElement.addEventListener('click', (event) => {
				const target = event.target.closest('[data-value]');
				if (!target) return;

				const selectedRoute = routes.find((route) => route.value === target.dataset.value);
				if (selectedRoute) {
					this.insertLink(selectedRoute);
				}
			});
		});

		return dropdownView;
	}

	renderRoutesList(routes, listElement) {
		// Clear existing items
		listElement.innerHTML = '';

		// Add new items
		routes.forEach((route) => {
			const listItem = document.createElement('li');
			listItem.className = 'ck-typeahead-item';
			listItem.textContent = route.label;
			listItem.dataset.value = route.value;

			// Add a click event listener to each list item
			listItem.addEventListener('click', (event) => {
				const selectedValue = event.currentTarget.dataset.value;
				const selectedRoute = routes.find((route) => route.value === selectedValue);

				if (selectedRoute) {
					this.insertLink(selectedRoute); // Insert the link on click
					this.closeDropdown(); // Close the dropdown after selection
				}
			});

			listElement.appendChild(listItem);
		});
	}

	closeDropdown() {
		const balloon = this.editor.plugins.get('ContextualBalloon');
		balloon.view.hide();
	}

	insertLink(route) {
		const editor = this.editor;
		const selection = editor.model.document.selection;

		editor.model.change((writer) => {
			// Check if text is selected
			if (!selection || selection.isCollapsed) {
				return; // No action if there's no selection
			}

			const range = selection.getFirstRange();
			if (range) {
				// Apply the linkHref attribute to the selected range
				writer.setAttribute('linkHref', `${route.value}`, range);
			}
		});
	}
}

export { InternalPageLink };
