import{rB as q,rC as y,rD as yt,rE as de,rF as qr,rG as Dn,rH as Lr,rI as $n,rJ as Tr,rK as Ir,rL as Rr,rM as Mr,i2 as Dr,r as _,d1 as We,ak as Nn,rN as $r,dO as De,ct as pe,dt as Bn,dU as Pe,g1 as Nr,dV as zn,bf as ie,j as l,aC as it,dz as Z,dW as G,rO as Pn,rP as Br,s as qt,dH as $,dw as F,gt as me,fZ as B,aY as zr,rQ as Pr,an as Or,b1 as Fr,dD as Ur,dE as Vr,k$ as Hr,gu as Me,rR as Gr,dN as Zr,dM as W,rS as Wr,eq as Kr,fU as K,gJ as Lt,gv as Ke,gm as re,rT as _t,rU as Ht,rV as Y,dQ as ue,J as L,du as On,dv as Fn,ft as Un,rW as He,rX as X,fI as wt,eY as Ct,e4 as Et,dK as he,ga as we,eb as Vn,fF as Hn,rY as Gn,rZ as Tt,fv as Zn,eA as Wn,eS as Kn,er as Jn,r_ as St,fd as Qn,r$ as Yn,ad as Jr,ev as Qr,s0 as Yr,s1 as Xr,s2 as oe,s3 as eo,s4 as to,s5 as no,s6 as ro,s7 as oo,s8 as so,s9 as co,sa as io,sb as ao,ch as lo,sc as Gt,sd as Je,se as uo,sf as Qe,sg as po,sh as Zt,si as at,sj as ho,sk as Wt,sl as fo,sm as go,sn as mo,so as bo,sp as xo,sq as ko,sr as vo,ss as Ae,st as Xn,su as er,sv as yo,cL as Ee,dX as _o,sw as wo,sx as Kt,dZ as Co,sy as Eo,sz as So,sA as Ao,dP as jo,gi as qo}from"./strapi-BzDuHlVM.js";import{M as Lo,u as It,C as Rt}from"./Relations-CdwpXmkU-HCM4PvEA.js";import{a as lt,C as To}from"./ComponentIcon-u4bIXTFY-DSsBHRpC.js";import{u as Mt,I as Dt,a as Jt}from"./useDragAndDrop-DJ6jqvZN-tuVDES0C.js";import{p as Ge}from"./objects-D6yBsdmx-B8hK47ef.js";import{a as Io,p as tr,u as Ro}from"./useDebounce-DmuSJIF3-Dxs_fF6M.js";import{g as nr}from"./getEmptyImage-CjqolaH3.js";var Mo={isHistory(t){return qr(t)&&Array.isArray(t.redos)&&Array.isArray(t.undos)&&(t.redos.length===0||yt.isOperationList(t.redos[0].operations))&&(t.undos.length===0||yt.isOperationList(t.undos[0].operations))}},ut=new WeakMap,dt=new WeakMap,ye={isHistoryEditor(t){return Mo.isHistory(t.history)&&y.isEditor(t)},isMerging(t){return dt.get(t)},isSaving(t){return ut.get(t)},redo(t){t.redo()},undo(t){t.undo()},withoutMerging(t,e){var n=ye.isMerging(t);dt.set(t,!1),e(),dt.set(t,n)},withoutSaving(t,e){var n=ye.isSaving(t);ut.set(t,!1),e(),ut.set(t,n)}},Do=t=>{var e=t,{apply:n}=e;return e.history={undos:[],redos:[]},e.redo=()=>{var{history:r}=e,{redos:s}=r;if(s.length>0){var o=s[s.length-1];o.selectionBefore&&q.setSelection(e,o.selectionBefore),ye.withoutSaving(e,()=>{y.withoutNormalizing(e,()=>{for(var c of o.operations)e.apply(c)})}),r.redos.pop(),e.writeHistory("undos",o)}},e.undo=()=>{var{history:r}=e,{undos:s}=r;if(s.length>0){var o=s[s.length-1];ye.withoutSaving(e,()=>{y.withoutNormalizing(e,()=>{var c=o.operations.map(yt.inverse).reverse();for(var i of c)e.apply(i);o.selectionBefore&&q.setSelection(e,o.selectionBefore)})}),e.writeHistory("redos",o),r.undos.pop()}},e.apply=r=>{var{operations:s,history:o}=e,{undos:c}=o,i=c[c.length-1],a=i&&i.operations[i.operations.length-1],u=ye.isSaving(e),d=ye.isMerging(e);if(u==null&&(u=No(r)),u){if(d==null&&(i==null?d=!1:s.length!==0?d=!0:d=$o(r,a)),i&&d)i.operations.push(r);else{var p={operations:[r],selectionBefore:e.selection};e.writeHistory("undos",p)}for(;c.length>100;)c.shift();o.redos=[]}n(r)},e.writeHistory=(r,s)=>{e.history[r].push(s)},e},$o=(t,e)=>!!(e&&t.type==="insert_text"&&e.type==="insert_text"&&t.offset===e.offset+e.text.length&&de.equals(t.path,e.path)||e&&t.type==="remove_text"&&e.type==="remove_text"&&t.offset+t.text.length===e.offset&&de.equals(t.path,e.path)),No=(t,e)=>t.type!=="set_selection",P={};const Bo="Á",zo="á",Po="Ă",Oo="ă",Fo="∾",Uo="∿",Vo="∾̳",Ho="Â",Go="â",Zo="´",Wo="А",Ko="а",Jo="Æ",Qo="æ",Yo="⁡",Xo="𝔄",es="𝔞",ts="À",ns="à",rs="ℵ",os="ℵ",ss="Α",cs="α",is="Ā",as="ā",ls="⨿",us="&",ds="&",ps="⩕",hs="⩓",fs="∧",gs="⩜",ms="⩘",bs="⩚",xs="∠",ks="⦤",vs="∠",ys="⦨",_s="⦩",ws="⦪",Cs="⦫",Es="⦬",Ss="⦭",As="⦮",js="⦯",qs="∡",Ls="∟",Ts="⊾",Is="⦝",Rs="∢",Ms="Å",Ds="⍼",$s="Ą",Ns="ą",Bs="𝔸",zs="𝕒",Ps="⩯",Os="≈",Fs="⩰",Us="≊",Vs="≋",Hs="'",Gs="⁡",Zs="≈",Ws="≊",Ks="Å",Js="å",Qs="𝒜",Ys="𝒶",Xs="≔",ec="*",tc="≈",nc="≍",rc="Ã",oc="ã",sc="Ä",cc="ä",ic="∳",ac="⨑",lc="≌",uc="϶",dc="‵",pc="∽",hc="⋍",fc="∖",gc="⫧",mc="⊽",bc="⌅",xc="⌆",kc="⌅",vc="⎵",yc="⎶",_c="≌",wc="Б",Cc="б",Ec="„",Sc="∵",Ac="∵",jc="∵",qc="⦰",Lc="϶",Tc="ℬ",Ic="ℬ",Rc="Β",Mc="β",Dc="ℶ",$c="≬",Nc="𝔅",Bc="𝔟",zc="⋂",Pc="◯",Oc="⋃",Fc="⨀",Uc="⨁",Vc="⨂",Hc="⨆",Gc="★",Zc="▽",Wc="△",Kc="⨄",Jc="⋁",Qc="⋀",Yc="⤍",Xc="⧫",ei="▪",ti="▴",ni="▾",ri="◂",oi="▸",si="␣",ci="▒",ii="░",ai="▓",li="█",ui="=⃥",di="≡⃥",pi="⫭",hi="⌐",fi="𝔹",gi="𝕓",mi="⊥",bi="⊥",xi="⋈",ki="⧉",vi="┐",yi="╕",_i="╖",wi="╗",Ci="┌",Ei="╒",Si="╓",Ai="╔",ji="─",qi="═",Li="┬",Ti="╤",Ii="╥",Ri="╦",Mi="┴",Di="╧",$i="╨",Ni="╩",Bi="⊟",zi="⊞",Pi="⊠",Oi="┘",Fi="╛",Ui="╜",Vi="╝",Hi="└",Gi="╘",Zi="╙",Wi="╚",Ki="│",Ji="║",Qi="┼",Yi="╪",Xi="╫",ea="╬",ta="┤",na="╡",ra="╢",oa="╣",sa="├",ca="╞",ia="╟",aa="╠",la="‵",ua="˘",da="˘",pa="¦",ha="𝒷",fa="ℬ",ga="⁏",ma="∽",ba="⋍",xa="⧅",ka="\\",va="⟈",ya="•",_a="•",wa="≎",Ca="⪮",Ea="≏",Sa="≎",Aa="≏",ja="Ć",qa="ć",La="⩄",Ta="⩉",Ia="⩋",Ra="∩",Ma="⋒",Da="⩇",$a="⩀",Na="ⅅ",Ba="∩︀",za="⁁",Pa="ˇ",Oa="ℭ",Fa="⩍",Ua="Č",Va="č",Ha="Ç",Ga="ç",Za="Ĉ",Wa="ĉ",Ka="∰",Ja="⩌",Qa="⩐",Ya="Ċ",Xa="ċ",el="¸",tl="¸",nl="⦲",rl="¢",ol="·",sl="·",cl="𝔠",il="ℭ",al="Ч",ll="ч",ul="✓",dl="✓",pl="Χ",hl="χ",fl="ˆ",gl="≗",ml="↺",bl="↻",xl="⊛",kl="⊚",vl="⊝",yl="⊙",_l="®",wl="Ⓢ",Cl="⊖",El="⊕",Sl="⊗",Al="○",jl="⧃",ql="≗",Ll="⨐",Tl="⫯",Il="⧂",Rl="∲",Ml="”",Dl="’",$l="♣",Nl="♣",Bl=":",zl="∷",Pl="⩴",Ol="≔",Fl="≔",Ul=",",Vl="@",Hl="∁",Gl="∘",Zl="∁",Wl="ℂ",Kl="≅",Jl="⩭",Ql="≡",Yl="∮",Xl="∯",eu="∮",tu="𝕔",nu="ℂ",ru="∐",ou="∐",su="©",cu="©",iu="℗",au="∳",lu="↵",uu="✗",du="⨯",pu="𝒞",hu="𝒸",fu="⫏",gu="⫑",mu="⫐",bu="⫒",xu="⋯",ku="⤸",vu="⤵",yu="⋞",_u="⋟",wu="↶",Cu="⤽",Eu="⩈",Su="⩆",Au="≍",ju="∪",qu="⋓",Lu="⩊",Tu="⊍",Iu="⩅",Ru="∪︀",Mu="↷",Du="⤼",$u="⋞",Nu="⋟",Bu="⋎",zu="⋏",Pu="¤",Ou="↶",Fu="↷",Uu="⋎",Vu="⋏",Hu="∲",Gu="∱",Zu="⌭",Wu="†",Ku="‡",Ju="ℸ",Qu="↓",Yu="↡",Xu="⇓",ed="‐",td="⫤",nd="⊣",rd="⤏",od="˝",sd="Ď",cd="ď",id="Д",ad="д",ld="‡",ud="⇊",dd="ⅅ",pd="ⅆ",hd="⤑",fd="⩷",gd="°",md="∇",bd="Δ",xd="δ",kd="⦱",vd="⥿",yd="𝔇",_d="𝔡",wd="⥥",Cd="⇃",Ed="⇂",Sd="´",Ad="˙",jd="˝",qd="`",Ld="˜",Td="⋄",Id="⋄",Rd="⋄",Md="♦",Dd="♦",$d="¨",Nd="ⅆ",Bd="ϝ",zd="⋲",Pd="÷",Od="÷",Fd="⋇",Ud="⋇",Vd="Ђ",Hd="ђ",Gd="⌞",Zd="⌍",Wd="$",Kd="𝔻",Jd="𝕕",Qd="¨",Yd="˙",Xd="⃜",ep="≐",tp="≑",np="≐",rp="∸",op="∔",sp="⊡",cp="⌆",ip="∯",ap="¨",lp="⇓",up="⇐",dp="⇔",pp="⫤",hp="⟸",fp="⟺",gp="⟹",mp="⇒",bp="⊨",xp="⇑",kp="⇕",vp="∥",yp="⤓",_p="↓",wp="↓",Cp="⇓",Ep="⇵",Sp="̑",Ap="⇊",jp="⇃",qp="⇂",Lp="⥐",Tp="⥞",Ip="⥖",Rp="↽",Mp="⥟",Dp="⥗",$p="⇁",Np="↧",Bp="⊤",zp="⤐",Pp="⌟",Op="⌌",Fp="𝒟",Up="𝒹",Vp="Ѕ",Hp="ѕ",Gp="⧶",Zp="Đ",Wp="đ",Kp="⋱",Jp="▿",Qp="▾",Yp="⇵",Xp="⥯",eh="⦦",th="Џ",nh="џ",rh="⟿",oh="É",sh="é",ch="⩮",ih="Ě",ah="ě",lh="Ê",uh="ê",dh="≖",ph="≕",hh="Э",fh="э",gh="⩷",mh="Ė",bh="ė",xh="≑",kh="ⅇ",vh="≒",yh="𝔈",_h="𝔢",wh="⪚",Ch="È",Eh="è",Sh="⪖",Ah="⪘",jh="⪙",qh="∈",Lh="⏧",Th="ℓ",Ih="⪕",Rh="⪗",Mh="Ē",Dh="ē",$h="∅",Nh="∅",Bh="◻",zh="∅",Ph="▫",Oh=" ",Fh=" ",Uh=" ",Vh="Ŋ",Hh="ŋ",Gh=" ",Zh="Ę",Wh="ę",Kh="𝔼",Jh="𝕖",Qh="⋕",Yh="⧣",Xh="⩱",ef="ε",tf="Ε",nf="ε",rf="ϵ",of="≖",sf="≕",cf="≂",af="⪖",lf="⪕",uf="⩵",df="=",pf="≂",hf="≟",ff="⇌",gf="≡",mf="⩸",bf="⧥",xf="⥱",kf="≓",vf="ℯ",yf="ℰ",_f="≐",wf="⩳",Cf="≂",Ef="Η",Sf="η",Af="Ð",jf="ð",qf="Ë",Lf="ë",Tf="€",If="!",Rf="∃",Mf="∃",Df="ℰ",$f="ⅇ",Nf="ⅇ",Bf="≒",zf="Ф",Pf="ф",Of="♀",Ff="ﬃ",Uf="ﬀ",Vf="ﬄ",Hf="𝔉",Gf="𝔣",Zf="ﬁ",Wf="◼",Kf="▪",Jf="fj",Qf="♭",Yf="ﬂ",Xf="▱",eg="ƒ",tg="𝔽",ng="𝕗",rg="∀",og="∀",sg="⋔",cg="⫙",ig="ℱ",ag="⨍",lg="½",ug="⅓",dg="¼",pg="⅕",hg="⅙",fg="⅛",gg="⅔",mg="⅖",bg="¾",xg="⅗",kg="⅜",vg="⅘",yg="⅚",_g="⅝",wg="⅞",Cg="⁄",Eg="⌢",Sg="𝒻",Ag="ℱ",jg="ǵ",qg="Γ",Lg="γ",Tg="Ϝ",Ig="ϝ",Rg="⪆",Mg="Ğ",Dg="ğ",$g="Ģ",Ng="Ĝ",Bg="ĝ",zg="Г",Pg="г",Og="Ġ",Fg="ġ",Ug="≥",Vg="≧",Hg="⪌",Gg="⋛",Zg="≥",Wg="≧",Kg="⩾",Jg="⪩",Qg="⩾",Yg="⪀",Xg="⪂",em="⪄",tm="⋛︀",nm="⪔",rm="𝔊",om="𝔤",sm="≫",cm="⋙",im="⋙",am="ℷ",lm="Ѓ",um="ѓ",dm="⪥",pm="≷",hm="⪒",fm="⪤",gm="⪊",mm="⪊",bm="⪈",xm="≩",km="⪈",vm="≩",ym="⋧",_m="𝔾",wm="𝕘",Cm="`",Em="≥",Sm="⋛",Am="≧",jm="⪢",qm="≷",Lm="⩾",Tm="≳",Im="𝒢",Rm="ℊ",Mm="≳",Dm="⪎",$m="⪐",Nm="⪧",Bm="⩺",zm=">",Pm=">",Om="≫",Fm="⋗",Um="⦕",Vm="⩼",Hm="⪆",Gm="⥸",Zm="⋗",Wm="⋛",Km="⪌",Jm="≷",Qm="≳",Ym="≩︀",Xm="≩︀",eb="ˇ",tb=" ",nb="½",rb="ℋ",ob="Ъ",sb="ъ",cb="⥈",ib="↔",ab="⇔",lb="↭",ub="^",db="ℏ",pb="Ĥ",hb="ĥ",fb="♥",gb="♥",mb="…",bb="⊹",xb="𝔥",kb="ℌ",vb="ℋ",yb="⤥",_b="⤦",wb="⇿",Cb="∻",Eb="↩",Sb="↪",Ab="𝕙",jb="ℍ",qb="―",Lb="─",Tb="𝒽",Ib="ℋ",Rb="ℏ",Mb="Ħ",Db="ħ",$b="≎",Nb="≏",Bb="⁃",zb="‐",Pb="Í",Ob="í",Fb="⁣",Ub="Î",Vb="î",Hb="И",Gb="и",Zb="İ",Wb="Е",Kb="е",Jb="¡",Qb="⇔",Yb="𝔦",Xb="ℑ",ex="Ì",tx="ì",nx="ⅈ",rx="⨌",ox="∭",sx="⧜",cx="℩",ix="Ĳ",ax="ĳ",lx="Ī",ux="ī",dx="ℑ",px="ⅈ",hx="ℐ",fx="ℑ",gx="ı",mx="ℑ",bx="⊷",xx="Ƶ",kx="⇒",vx="℅",yx="∞",_x="⧝",wx="ı",Cx="⊺",Ex="∫",Sx="∬",Ax="ℤ",jx="∫",qx="⊺",Lx="⋂",Tx="⨗",Ix="⨼",Rx="⁣",Mx="⁢",Dx="Ё",$x="ё",Nx="Į",Bx="į",zx="𝕀",Px="𝕚",Ox="Ι",Fx="ι",Ux="⨼",Vx="¿",Hx="𝒾",Gx="ℐ",Zx="∈",Wx="⋵",Kx="⋹",Jx="⋴",Qx="⋳",Yx="∈",Xx="⁢",ek="Ĩ",tk="ĩ",nk="І",rk="і",ok="Ï",sk="ï",ck="Ĵ",ik="ĵ",ak="Й",lk="й",uk="𝔍",dk="𝔧",pk="ȷ",hk="𝕁",fk="𝕛",gk="𝒥",mk="𝒿",bk="Ј",xk="ј",kk="Є",vk="є",yk="Κ",_k="κ",wk="ϰ",Ck="Ķ",Ek="ķ",Sk="К",Ak="к",jk="𝔎",qk="𝔨",Lk="ĸ",Tk="Х",Ik="х",Rk="Ќ",Mk="ќ",Dk="𝕂",$k="𝕜",Nk="𝒦",Bk="𝓀",zk="⇚",Pk="Ĺ",Ok="ĺ",Fk="⦴",Uk="ℒ",Vk="Λ",Hk="λ",Gk="⟨",Zk="⟪",Wk="⦑",Kk="⟨",Jk="⪅",Qk="ℒ",Yk="«",Xk="⇤",ev="⤟",tv="←",nv="↞",rv="⇐",ov="⤝",sv="↩",cv="↫",iv="⤹",av="⥳",lv="↢",uv="⤙",dv="⤛",pv="⪫",hv="⪭",fv="⪭︀",gv="⤌",mv="⤎",bv="❲",xv="{",kv="[",vv="⦋",yv="⦏",_v="⦍",wv="Ľ",Cv="ľ",Ev="Ļ",Sv="ļ",Av="⌈",jv="{",qv="Л",Lv="л",Tv="⤶",Iv="“",Rv="„",Mv="⥧",Dv="⥋",$v="↲",Nv="≤",Bv="≦",zv="⟨",Pv="⇤",Ov="←",Fv="←",Uv="⇐",Vv="⇆",Hv="↢",Gv="⌈",Zv="⟦",Wv="⥡",Kv="⥙",Jv="⇃",Qv="⌊",Yv="↽",Xv="↼",e0="⇇",t0="↔",n0="↔",r0="⇔",o0="⇆",s0="⇋",c0="↭",i0="⥎",a0="↤",l0="⊣",u0="⥚",d0="⋋",p0="⧏",h0="⊲",f0="⊴",g0="⥑",m0="⥠",b0="⥘",x0="↿",k0="⥒",v0="↼",y0="⪋",_0="⋚",w0="≤",C0="≦",E0="⩽",S0="⪨",A0="⩽",j0="⩿",q0="⪁",L0="⪃",T0="⋚︀",I0="⪓",R0="⪅",M0="⋖",D0="⋚",$0="⪋",N0="⋚",B0="≦",z0="≶",P0="≶",O0="⪡",F0="≲",U0="⩽",V0="≲",H0="⥼",G0="⌊",Z0="𝔏",W0="𝔩",K0="≶",J0="⪑",Q0="⥢",Y0="↽",X0="↼",ey="⥪",ty="▄",ny="Љ",ry="љ",oy="⇇",sy="≪",cy="⋘",iy="⌞",ay="⇚",ly="⥫",uy="◺",dy="Ŀ",py="ŀ",hy="⎰",fy="⎰",gy="⪉",my="⪉",by="⪇",xy="≨",ky="⪇",vy="≨",yy="⋦",_y="⟬",wy="⇽",Cy="⟦",Ey="⟵",Sy="⟵",Ay="⟸",jy="⟷",qy="⟷",Ly="⟺",Ty="⟼",Iy="⟶",Ry="⟶",My="⟹",Dy="↫",$y="↬",Ny="⦅",By="𝕃",zy="𝕝",Py="⨭",Oy="⨴",Fy="∗",Uy="_",Vy="↙",Hy="↘",Gy="◊",Zy="◊",Wy="⧫",Ky="(",Jy="⦓",Qy="⇆",Yy="⌟",Xy="⇋",e_="⥭",t_="‎",n_="⊿",r_="‹",o_="𝓁",s_="ℒ",c_="↰",i_="↰",a_="≲",l_="⪍",u_="⪏",d_="[",p_="‘",h_="‚",f_="Ł",g_="ł",m_="⪦",b_="⩹",x_="<",k_="<",v_="≪",y_="⋖",__="⋋",w_="⋉",C_="⥶",E_="⩻",S_="◃",A_="⊴",j_="◂",q_="⦖",L_="⥊",T_="⥦",I_="≨︀",R_="≨︀",M_="¯",D_="♂",$_="✠",N_="✠",B_="↦",z_="↦",P_="↧",O_="↤",F_="↥",U_="▮",V_="⨩",H_="М",G_="м",Z_="—",W_="∺",K_="∡",J_=" ",Q_="ℳ",Y_="𝔐",X_="𝔪",ew="℧",tw="µ",nw="*",rw="⫰",ow="∣",sw="·",cw="⊟",iw="−",aw="∸",lw="⨪",uw="∓",dw="⫛",pw="…",hw="∓",fw="⊧",gw="𝕄",mw="𝕞",bw="∓",xw="𝓂",kw="ℳ",vw="∾",yw="Μ",_w="μ",ww="⊸",Cw="⊸",Ew="∇",Sw="Ń",Aw="ń",jw="∠⃒",qw="≉",Lw="⩰̸",Tw="≋̸",Iw="ŉ",Rw="≉",Mw="♮",Dw="ℕ",$w="♮",Nw=" ",Bw="≎̸",zw="≏̸",Pw="⩃",Ow="Ň",Fw="ň",Uw="Ņ",Vw="ņ",Hw="≇",Gw="⩭̸",Zw="⩂",Ww="Н",Kw="н",Jw="–",Qw="⤤",Yw="↗",Xw="⇗",eC="↗",tC="≠",nC="≐̸",rC="​",oC="​",sC="​",cC="​",iC="≢",aC="⤨",lC="≂̸",uC="≫",dC="≪",pC=`
`,hC="∄",fC="∄",gC="𝔑",mC="𝔫",bC="≧̸",xC="≱",kC="≱",vC="≧̸",yC="⩾̸",_C="⩾̸",wC="⋙̸",CC="≵",EC="≫⃒",SC="≯",AC="≯",jC="≫̸",qC="↮",LC="⇎",TC="⫲",IC="∋",RC="⋼",MC="⋺",DC="∋",$C="Њ",NC="њ",BC="↚",zC="⇍",PC="‥",OC="≦̸",FC="≰",UC="↚",VC="⇍",HC="↮",GC="⇎",ZC="≰",WC="≦̸",KC="⩽̸",JC="⩽̸",QC="≮",YC="⋘̸",XC="≴",e1="≪⃒",t1="≮",n1="⋪",r1="⋬",o1="≪̸",s1="∤",c1="⁠",i1=" ",a1="𝕟",l1="ℕ",u1="⫬",d1="¬",p1="≢",h1="≭",f1="∦",g1="∉",m1="≠",b1="≂̸",x1="∄",k1="≯",v1="≱",y1="≧̸",_1="≫̸",w1="≹",C1="⩾̸",E1="≵",S1="≎̸",A1="≏̸",j1="∉",q1="⋵̸",L1="⋹̸",T1="∉",I1="⋷",R1="⋶",M1="⧏̸",D1="⋪",$1="⋬",N1="≮",B1="≰",z1="≸",P1="≪̸",O1="⩽̸",F1="≴",U1="⪢̸",V1="⪡̸",H1="∌",G1="∌",Z1="⋾",W1="⋽",K1="⊀",J1="⪯̸",Q1="⋠",Y1="∌",X1="⧐̸",eE="⋫",tE="⋭",nE="⊏̸",rE="⋢",oE="⊐̸",sE="⋣",cE="⊂⃒",iE="⊈",aE="⊁",lE="⪰̸",uE="⋡",dE="≿̸",pE="⊃⃒",hE="⊉",fE="≁",gE="≄",mE="≇",bE="≉",xE="∤",kE="∦",vE="∦",yE="⫽⃥",_E="∂̸",wE="⨔",CE="⊀",EE="⋠",SE="⊀",AE="⪯̸",jE="⪯̸",qE="⤳̸",LE="↛",TE="⇏",IE="↝̸",RE="↛",ME="⇏",DE="⋫",$E="⋭",NE="⊁",BE="⋡",zE="⪰̸",PE="𝒩",OE="𝓃",FE="∤",UE="∦",VE="≁",HE="≄",GE="≄",ZE="∤",WE="∦",KE="⋢",JE="⋣",QE="⊄",YE="⫅̸",XE="⊈",eS="⊂⃒",tS="⊈",nS="⫅̸",rS="⊁",oS="⪰̸",sS="⊅",cS="⫆̸",iS="⊉",aS="⊃⃒",lS="⊉",uS="⫆̸",dS="≹",pS="Ñ",hS="ñ",fS="≸",gS="⋪",mS="⋬",bS="⋫",xS="⋭",kS="Ν",vS="ν",yS="#",_S="№",wS=" ",CS="≍⃒",ES="⊬",SS="⊭",AS="⊮",jS="⊯",qS="≥⃒",LS=">⃒",TS="⤄",IS="⧞",RS="⤂",MS="≤⃒",DS="<⃒",$S="⊴⃒",NS="⤃",BS="⊵⃒",zS="∼⃒",PS="⤣",OS="↖",FS="⇖",US="↖",VS="⤧",HS="Ó",GS="ó",ZS="⊛",WS="Ô",KS="ô",JS="⊚",QS="О",YS="о",XS="⊝",eA="Ő",tA="ő",nA="⨸",rA="⊙",oA="⦼",sA="Œ",cA="œ",iA="⦿",aA="𝔒",lA="𝔬",uA="˛",dA="Ò",pA="ò",hA="⧁",fA="⦵",gA="Ω",mA="∮",bA="↺",xA="⦾",kA="⦻",vA="‾",yA="⧀",_A="Ō",wA="ō",CA="Ω",EA="ω",SA="Ο",AA="ο",jA="⦶",qA="⊖",LA="𝕆",TA="𝕠",IA="⦷",RA="“",MA="‘",DA="⦹",$A="⊕",NA="↻",BA="⩔",zA="∨",PA="⩝",OA="ℴ",FA="ℴ",UA="ª",VA="º",HA="⊶",GA="⩖",ZA="⩗",WA="⩛",KA="Ⓢ",JA="𝒪",QA="ℴ",YA="Ø",XA="ø",ej="⊘",tj="Õ",nj="õ",rj="⨶",oj="⨷",sj="⊗",cj="Ö",ij="ö",aj="⌽",lj="‾",uj="⏞",dj="⎴",pj="⏜",hj="¶",fj="∥",gj="∥",mj="⫳",bj="⫽",xj="∂",kj="∂",vj="П",yj="п",_j="%",wj=".",Cj="‰",Ej="⊥",Sj="‱",Aj="𝔓",jj="𝔭",qj="Φ",Lj="φ",Tj="ϕ",Ij="ℳ",Rj="☎",Mj="Π",Dj="π",$j="⋔",Nj="ϖ",Bj="ℏ",zj="ℎ",Pj="ℏ",Oj="⨣",Fj="⊞",Uj="⨢",Vj="+",Hj="∔",Gj="⨥",Zj="⩲",Wj="±",Kj="±",Jj="⨦",Qj="⨧",Yj="±",Xj="ℌ",eq="⨕",tq="𝕡",nq="ℙ",rq="£",oq="⪷",sq="⪻",cq="≺",iq="≼",aq="⪷",lq="≺",uq="≼",dq="≺",pq="⪯",hq="≼",fq="≾",gq="⪯",mq="⪹",bq="⪵",xq="⋨",kq="⪯",vq="⪳",yq="≾",_q="′",wq="″",Cq="ℙ",Eq="⪹",Sq="⪵",Aq="⋨",jq="∏",qq="∏",Lq="⌮",Tq="⌒",Iq="⌓",Rq="∝",Mq="∝",Dq="∷",$q="∝",Nq="≾",Bq="⊰",zq="𝒫",Pq="𝓅",Oq="Ψ",Fq="ψ",Uq=" ",Vq="𝔔",Hq="𝔮",Gq="⨌",Zq="𝕢",Wq="ℚ",Kq="⁗",Jq="𝒬",Qq="𝓆",Yq="ℍ",Xq="⨖",eL="?",tL="≟",nL='"',rL='"',oL="⇛",sL="∽̱",cL="Ŕ",iL="ŕ",aL="√",lL="⦳",uL="⟩",dL="⟫",pL="⦒",hL="⦥",fL="⟩",gL="»",mL="⥵",bL="⇥",xL="⤠",kL="⤳",vL="→",yL="↠",_L="⇒",wL="⤞",CL="↪",EL="↬",SL="⥅",AL="⥴",jL="⤖",qL="↣",LL="↝",TL="⤚",IL="⤜",RL="∶",ML="ℚ",DL="⤍",$L="⤏",NL="⤐",BL="❳",zL="}",PL="]",OL="⦌",FL="⦎",UL="⦐",VL="Ř",HL="ř",GL="Ŗ",ZL="ŗ",WL="⌉",KL="}",JL="Р",QL="р",YL="⤷",XL="⥩",eT="”",tT="”",nT="↳",rT="ℜ",oT="ℛ",sT="ℜ",cT="ℝ",iT="ℜ",aT="▭",lT="®",uT="®",dT="∋",pT="⇋",hT="⥯",fT="⥽",gT="⌋",mT="𝔯",bT="ℜ",xT="⥤",kT="⇁",vT="⇀",yT="⥬",_T="Ρ",wT="ρ",CT="ϱ",ET="⟩",ST="⇥",AT="→",jT="→",qT="⇒",LT="⇄",TT="↣",IT="⌉",RT="⟧",MT="⥝",DT="⥕",$T="⇂",NT="⌋",BT="⇁",zT="⇀",PT="⇄",OT="⇌",FT="⇉",UT="↝",VT="↦",HT="⊢",GT="⥛",ZT="⋌",WT="⧐",KT="⊳",JT="⊵",QT="⥏",YT="⥜",XT="⥔",eI="↾",tI="⥓",nI="⇀",rI="˚",oI="≓",sI="⇄",cI="⇌",iI="‏",aI="⎱",lI="⎱",uI="⫮",dI="⟭",pI="⇾",hI="⟧",fI="⦆",gI="𝕣",mI="ℝ",bI="⨮",xI="⨵",kI="⥰",vI=")",yI="⦔",_I="⨒",wI="⇉",CI="⇛",EI="›",SI="𝓇",AI="ℛ",jI="↱",qI="↱",LI="]",TI="’",II="’",RI="⋌",MI="⋊",DI="▹",$I="⊵",NI="▸",BI="⧎",zI="⧴",PI="⥨",OI="℞",FI="Ś",UI="ś",VI="‚",HI="⪸",GI="Š",ZI="š",WI="⪼",KI="≻",JI="≽",QI="⪰",YI="⪴",XI="Ş",eR="ş",tR="Ŝ",nR="ŝ",rR="⪺",oR="⪶",sR="⋩",cR="⨓",iR="≿",aR="С",lR="с",uR="⊡",dR="⋅",pR="⩦",hR="⤥",fR="↘",gR="⇘",mR="↘",bR="§",xR=";",kR="⤩",vR="∖",yR="∖",_R="✶",wR="𝔖",CR="𝔰",ER="⌢",SR="♯",AR="Щ",jR="щ",qR="Ш",LR="ш",TR="↓",IR="←",RR="∣",MR="∥",DR="→",$R="↑",NR="­",BR="Σ",zR="σ",PR="ς",OR="ς",FR="∼",UR="⩪",VR="≃",HR="≃",GR="⪞",ZR="⪠",WR="⪝",KR="⪟",JR="≆",QR="⨤",YR="⥲",XR="←",eM="∘",tM="∖",nM="⨳",rM="⧤",oM="∣",sM="⌣",cM="⪪",iM="⪬",aM="⪬︀",lM="Ь",uM="ь",dM="⌿",pM="⧄",hM="/",fM="𝕊",gM="𝕤",mM="♠",bM="♠",xM="∥",kM="⊓",vM="⊓︀",yM="⊔",_M="⊔︀",wM="√",CM="⊏",EM="⊑",SM="⊏",AM="⊑",jM="⊐",qM="⊒",LM="⊐",TM="⊒",IM="□",RM="□",MM="⊓",DM="⊏",$M="⊑",NM="⊐",BM="⊒",zM="⊔",PM="▪",OM="□",FM="▪",UM="→",VM="𝒮",HM="𝓈",GM="∖",ZM="⌣",WM="⋆",KM="⋆",JM="☆",QM="★",YM="ϵ",XM="ϕ",eD="¯",tD="⊂",nD="⋐",rD="⪽",oD="⫅",sD="⊆",cD="⫃",iD="⫁",aD="⫋",lD="⊊",uD="⪿",dD="⥹",pD="⊂",hD="⋐",fD="⊆",gD="⫅",mD="⊆",bD="⊊",xD="⫋",kD="⫇",vD="⫕",yD="⫓",_D="⪸",wD="≻",CD="≽",ED="≻",SD="⪰",AD="≽",jD="≿",qD="⪰",LD="⪺",TD="⪶",ID="⋩",RD="≿",MD="∋",DD="∑",$D="∑",ND="♪",BD="¹",zD="²",PD="³",OD="⊃",FD="⋑",UD="⪾",VD="⫘",HD="⫆",GD="⊇",ZD="⫄",WD="⊃",KD="⊇",JD="⟉",QD="⫗",YD="⥻",XD="⫂",e$="⫌",t$="⊋",n$="⫀",r$="⊃",o$="⋑",s$="⊇",c$="⫆",i$="⊋",a$="⫌",l$="⫈",u$="⫔",d$="⫖",p$="⤦",h$="↙",f$="⇙",g$="↙",m$="⤪",b$="ß",x$="	",k$="⌖",v$="Τ",y$="τ",_$="⎴",w$="Ť",C$="ť",E$="Ţ",S$="ţ",A$="Т",j$="т",q$="⃛",L$="⌕",T$="𝔗",I$="𝔱",R$="∴",M$="∴",D$="∴",$$="Θ",N$="θ",B$="ϑ",z$="ϑ",P$="≈",O$="∼",F$="  ",U$=" ",V$=" ",H$="≈",G$="∼",Z$="Þ",W$="þ",K$="˜",J$="∼",Q$="≃",Y$="≅",X$="≈",eN="⨱",tN="⊠",nN="×",rN="⨰",oN="∭",sN="⤨",cN="⌶",iN="⫱",aN="⊤",lN="𝕋",uN="𝕥",dN="⫚",pN="⤩",hN="‴",fN="™",gN="™",mN="▵",bN="▿",xN="◃",kN="⊴",vN="≜",yN="▹",_N="⊵",wN="◬",CN="≜",EN="⨺",SN="⃛",AN="⨹",jN="⧍",qN="⨻",LN="⏢",TN="𝒯",IN="𝓉",RN="Ц",MN="ц",DN="Ћ",$N="ћ",NN="Ŧ",BN="ŧ",zN="≬",PN="↞",ON="↠",FN="Ú",UN="ú",VN="↑",HN="↟",GN="⇑",ZN="⥉",WN="Ў",KN="ў",JN="Ŭ",QN="ŭ",YN="Û",XN="û",eB="У",tB="у",nB="⇅",rB="Ű",oB="ű",sB="⥮",cB="⥾",iB="𝔘",aB="𝔲",lB="Ù",uB="ù",dB="⥣",pB="↿",hB="↾",fB="▀",gB="⌜",mB="⌜",bB="⌏",xB="◸",kB="Ū",vB="ū",yB="¨",_B="_",wB="⏟",CB="⎵",EB="⏝",SB="⋃",AB="⊎",jB="Ų",qB="ų",LB="𝕌",TB="𝕦",IB="⤒",RB="↑",MB="↑",DB="⇑",$B="⇅",NB="↕",BB="↕",zB="⇕",PB="⥮",OB="↿",FB="↾",UB="⊎",VB="↖",HB="↗",GB="υ",ZB="ϒ",WB="ϒ",KB="Υ",JB="υ",QB="↥",YB="⊥",XB="⇈",e2="⌝",t2="⌝",n2="⌎",r2="Ů",o2="ů",s2="◹",c2="𝒰",i2="𝓊",a2="⋰",l2="Ũ",u2="ũ",d2="▵",p2="▴",h2="⇈",f2="Ü",g2="ü",m2="⦧",b2="⦜",x2="ϵ",k2="ϰ",v2="∅",y2="ϕ",_2="ϖ",w2="∝",C2="↕",E2="⇕",S2="ϱ",A2="ς",j2="⊊︀",q2="⫋︀",L2="⊋︀",T2="⫌︀",I2="ϑ",R2="⊲",M2="⊳",D2="⫨",$2="⫫",N2="⫩",B2="В",z2="в",P2="⊢",O2="⊨",F2="⊩",U2="⊫",V2="⫦",H2="⊻",G2="∨",Z2="⋁",W2="≚",K2="⋮",J2="|",Q2="‖",Y2="|",X2="‖",ez="∣",tz="|",nz="❘",rz="≀",oz=" ",sz="𝔙",cz="𝔳",iz="⊲",az="⊂⃒",lz="⊃⃒",uz="𝕍",dz="𝕧",pz="∝",hz="⊳",fz="𝒱",gz="𝓋",mz="⫋︀",bz="⊊︀",xz="⫌︀",kz="⊋︀",vz="⊪",yz="⦚",_z="Ŵ",wz="ŵ",Cz="⩟",Ez="∧",Sz="⋀",Az="≙",jz="℘",qz="𝔚",Lz="𝔴",Tz="𝕎",Iz="𝕨",Rz="℘",Mz="≀",Dz="≀",$z="𝒲",Nz="𝓌",Bz="⋂",zz="◯",Pz="⋃",Oz="▽",Fz="𝔛",Uz="𝔵",Vz="⟷",Hz="⟺",Gz="Ξ",Zz="ξ",Wz="⟵",Kz="⟸",Jz="⟼",Qz="⋻",Yz="⨀",Xz="𝕏",eP="𝕩",tP="⨁",nP="⨂",rP="⟶",oP="⟹",sP="𝒳",cP="𝓍",iP="⨆",aP="⨄",lP="△",uP="⋁",dP="⋀",pP="Ý",hP="ý",fP="Я",gP="я",mP="Ŷ",bP="ŷ",xP="Ы",kP="ы",vP="¥",yP="𝔜",_P="𝔶",wP="Ї",CP="ї",EP="𝕐",SP="𝕪",AP="𝒴",jP="𝓎",qP="Ю",LP="ю",TP="ÿ",IP="Ÿ",RP="Ź",MP="ź",DP="Ž",$P="ž",NP="З",BP="з",zP="Ż",PP="ż",OP="ℨ",FP="​",UP="Ζ",VP="ζ",HP="𝔷",GP="ℨ",ZP="Ж",WP="ж",KP="⇝",JP="𝕫",QP="ℤ",YP="𝒵",XP="𝓏",eO="‍",tO="‌",nO={Aacute:Bo,aacute:zo,Abreve:Po,abreve:Oo,ac:Fo,acd:Uo,acE:Vo,Acirc:Ho,acirc:Go,acute:Zo,Acy:Wo,acy:Ko,AElig:Jo,aelig:Qo,af:Yo,Afr:Xo,afr:es,Agrave:ts,agrave:ns,alefsym:rs,aleph:os,Alpha:ss,alpha:cs,Amacr:is,amacr:as,amalg:ls,amp:us,AMP:ds,andand:ps,And:hs,and:fs,andd:gs,andslope:ms,andv:bs,ang:xs,ange:ks,angle:vs,angmsdaa:ys,angmsdab:_s,angmsdac:ws,angmsdad:Cs,angmsdae:Es,angmsdaf:Ss,angmsdag:As,angmsdah:js,angmsd:qs,angrt:Ls,angrtvb:Ts,angrtvbd:Is,angsph:Rs,angst:Ms,angzarr:Ds,Aogon:$s,aogon:Ns,Aopf:Bs,aopf:zs,apacir:Ps,ap:Os,apE:Fs,ape:Us,apid:Vs,apos:Hs,ApplyFunction:Gs,approx:Zs,approxeq:Ws,Aring:Ks,aring:Js,Ascr:Qs,ascr:Ys,Assign:Xs,ast:ec,asymp:tc,asympeq:nc,Atilde:rc,atilde:oc,Auml:sc,auml:cc,awconint:ic,awint:ac,backcong:lc,backepsilon:uc,backprime:dc,backsim:pc,backsimeq:hc,Backslash:fc,Barv:gc,barvee:mc,barwed:bc,Barwed:xc,barwedge:kc,bbrk:vc,bbrktbrk:yc,bcong:_c,Bcy:wc,bcy:Cc,bdquo:Ec,becaus:Sc,because:Ac,Because:jc,bemptyv:qc,bepsi:Lc,bernou:Tc,Bernoullis:Ic,Beta:Rc,beta:Mc,beth:Dc,between:$c,Bfr:Nc,bfr:Bc,bigcap:zc,bigcirc:Pc,bigcup:Oc,bigodot:Fc,bigoplus:Uc,bigotimes:Vc,bigsqcup:Hc,bigstar:Gc,bigtriangledown:Zc,bigtriangleup:Wc,biguplus:Kc,bigvee:Jc,bigwedge:Qc,bkarow:Yc,blacklozenge:Xc,blacksquare:ei,blacktriangle:ti,blacktriangledown:ni,blacktriangleleft:ri,blacktriangleright:oi,blank:si,blk12:ci,blk14:ii,blk34:ai,block:li,bne:ui,bnequiv:di,bNot:pi,bnot:hi,Bopf:fi,bopf:gi,bot:mi,bottom:bi,bowtie:xi,boxbox:ki,boxdl:vi,boxdL:yi,boxDl:_i,boxDL:wi,boxdr:Ci,boxdR:Ei,boxDr:Si,boxDR:Ai,boxh:ji,boxH:qi,boxhd:Li,boxHd:Ti,boxhD:Ii,boxHD:Ri,boxhu:Mi,boxHu:Di,boxhU:$i,boxHU:Ni,boxminus:Bi,boxplus:zi,boxtimes:Pi,boxul:Oi,boxuL:Fi,boxUl:Ui,boxUL:Vi,boxur:Hi,boxuR:Gi,boxUr:Zi,boxUR:Wi,boxv:Ki,boxV:Ji,boxvh:Qi,boxvH:Yi,boxVh:Xi,boxVH:ea,boxvl:ta,boxvL:na,boxVl:ra,boxVL:oa,boxvr:sa,boxvR:ca,boxVr:ia,boxVR:aa,bprime:la,breve:ua,Breve:da,brvbar:pa,bscr:ha,Bscr:fa,bsemi:ga,bsim:ma,bsime:ba,bsolb:xa,bsol:ka,bsolhsub:va,bull:ya,bullet:_a,bump:wa,bumpE:Ca,bumpe:Ea,Bumpeq:Sa,bumpeq:Aa,Cacute:ja,cacute:qa,capand:La,capbrcup:Ta,capcap:Ia,cap:Ra,Cap:Ma,capcup:Da,capdot:$a,CapitalDifferentialD:Na,caps:Ba,caret:za,caron:Pa,Cayleys:Oa,ccaps:Fa,Ccaron:Ua,ccaron:Va,Ccedil:Ha,ccedil:Ga,Ccirc:Za,ccirc:Wa,Cconint:Ka,ccups:Ja,ccupssm:Qa,Cdot:Ya,cdot:Xa,cedil:el,Cedilla:tl,cemptyv:nl,cent:rl,centerdot:ol,CenterDot:sl,cfr:cl,Cfr:il,CHcy:al,chcy:ll,check:ul,checkmark:dl,Chi:pl,chi:hl,circ:fl,circeq:gl,circlearrowleft:ml,circlearrowright:bl,circledast:xl,circledcirc:kl,circleddash:vl,CircleDot:yl,circledR:_l,circledS:wl,CircleMinus:Cl,CirclePlus:El,CircleTimes:Sl,cir:Al,cirE:jl,cire:ql,cirfnint:Ll,cirmid:Tl,cirscir:Il,ClockwiseContourIntegral:Rl,CloseCurlyDoubleQuote:Ml,CloseCurlyQuote:Dl,clubs:$l,clubsuit:Nl,colon:Bl,Colon:zl,Colone:Pl,colone:Ol,coloneq:Fl,comma:Ul,commat:Vl,comp:Hl,compfn:Gl,complement:Zl,complexes:Wl,cong:Kl,congdot:Jl,Congruent:Ql,conint:Yl,Conint:Xl,ContourIntegral:eu,copf:tu,Copf:nu,coprod:ru,Coproduct:ou,copy:su,COPY:cu,copysr:iu,CounterClockwiseContourIntegral:au,crarr:lu,cross:uu,Cross:du,Cscr:pu,cscr:hu,csub:fu,csube:gu,csup:mu,csupe:bu,ctdot:xu,cudarrl:ku,cudarrr:vu,cuepr:yu,cuesc:_u,cularr:wu,cularrp:Cu,cupbrcap:Eu,cupcap:Su,CupCap:Au,cup:ju,Cup:qu,cupcup:Lu,cupdot:Tu,cupor:Iu,cups:Ru,curarr:Mu,curarrm:Du,curlyeqprec:$u,curlyeqsucc:Nu,curlyvee:Bu,curlywedge:zu,curren:Pu,curvearrowleft:Ou,curvearrowright:Fu,cuvee:Uu,cuwed:Vu,cwconint:Hu,cwint:Gu,cylcty:Zu,dagger:Wu,Dagger:Ku,daleth:Ju,darr:Qu,Darr:Yu,dArr:Xu,dash:ed,Dashv:td,dashv:nd,dbkarow:rd,dblac:od,Dcaron:sd,dcaron:cd,Dcy:id,dcy:ad,ddagger:ld,ddarr:ud,DD:dd,dd:pd,DDotrahd:hd,ddotseq:fd,deg:gd,Del:md,Delta:bd,delta:xd,demptyv:kd,dfisht:vd,Dfr:yd,dfr:_d,dHar:wd,dharl:Cd,dharr:Ed,DiacriticalAcute:Sd,DiacriticalDot:Ad,DiacriticalDoubleAcute:jd,DiacriticalGrave:qd,DiacriticalTilde:Ld,diam:Td,diamond:Id,Diamond:Rd,diamondsuit:Md,diams:Dd,die:$d,DifferentialD:Nd,digamma:Bd,disin:zd,div:Pd,divide:Od,divideontimes:Fd,divonx:Ud,DJcy:Vd,djcy:Hd,dlcorn:Gd,dlcrop:Zd,dollar:Wd,Dopf:Kd,dopf:Jd,Dot:Qd,dot:Yd,DotDot:Xd,doteq:ep,doteqdot:tp,DotEqual:np,dotminus:rp,dotplus:op,dotsquare:sp,doublebarwedge:cp,DoubleContourIntegral:ip,DoubleDot:ap,DoubleDownArrow:lp,DoubleLeftArrow:up,DoubleLeftRightArrow:dp,DoubleLeftTee:pp,DoubleLongLeftArrow:hp,DoubleLongLeftRightArrow:fp,DoubleLongRightArrow:gp,DoubleRightArrow:mp,DoubleRightTee:bp,DoubleUpArrow:xp,DoubleUpDownArrow:kp,DoubleVerticalBar:vp,DownArrowBar:yp,downarrow:_p,DownArrow:wp,Downarrow:Cp,DownArrowUpArrow:Ep,DownBreve:Sp,downdownarrows:Ap,downharpoonleft:jp,downharpoonright:qp,DownLeftRightVector:Lp,DownLeftTeeVector:Tp,DownLeftVectorBar:Ip,DownLeftVector:Rp,DownRightTeeVector:Mp,DownRightVectorBar:Dp,DownRightVector:$p,DownTeeArrow:Np,DownTee:Bp,drbkarow:zp,drcorn:Pp,drcrop:Op,Dscr:Fp,dscr:Up,DScy:Vp,dscy:Hp,dsol:Gp,Dstrok:Zp,dstrok:Wp,dtdot:Kp,dtri:Jp,dtrif:Qp,duarr:Yp,duhar:Xp,dwangle:eh,DZcy:th,dzcy:nh,dzigrarr:rh,Eacute:oh,eacute:sh,easter:ch,Ecaron:ih,ecaron:ah,Ecirc:lh,ecirc:uh,ecir:dh,ecolon:ph,Ecy:hh,ecy:fh,eDDot:gh,Edot:mh,edot:bh,eDot:xh,ee:kh,efDot:vh,Efr:yh,efr:_h,eg:wh,Egrave:Ch,egrave:Eh,egs:Sh,egsdot:Ah,el:jh,Element:qh,elinters:Lh,ell:Th,els:Ih,elsdot:Rh,Emacr:Mh,emacr:Dh,empty:$h,emptyset:Nh,EmptySmallSquare:Bh,emptyv:zh,EmptyVerySmallSquare:Ph,emsp13:Oh,emsp14:Fh,emsp:Uh,ENG:Vh,eng:Hh,ensp:Gh,Eogon:Zh,eogon:Wh,Eopf:Kh,eopf:Jh,epar:Qh,eparsl:Yh,eplus:Xh,epsi:ef,Epsilon:tf,epsilon:nf,epsiv:rf,eqcirc:of,eqcolon:sf,eqsim:cf,eqslantgtr:af,eqslantless:lf,Equal:uf,equals:df,EqualTilde:pf,equest:hf,Equilibrium:ff,equiv:gf,equivDD:mf,eqvparsl:bf,erarr:xf,erDot:kf,escr:vf,Escr:yf,esdot:_f,Esim:wf,esim:Cf,Eta:Ef,eta:Sf,ETH:Af,eth:jf,Euml:qf,euml:Lf,euro:Tf,excl:If,exist:Rf,Exists:Mf,expectation:Df,exponentiale:$f,ExponentialE:Nf,fallingdotseq:Bf,Fcy:zf,fcy:Pf,female:Of,ffilig:Ff,fflig:Uf,ffllig:Vf,Ffr:Hf,ffr:Gf,filig:Zf,FilledSmallSquare:Wf,FilledVerySmallSquare:Kf,fjlig:Jf,flat:Qf,fllig:Yf,fltns:Xf,fnof:eg,Fopf:tg,fopf:ng,forall:rg,ForAll:og,fork:sg,forkv:cg,Fouriertrf:ig,fpartint:ag,frac12:lg,frac13:ug,frac14:dg,frac15:pg,frac16:hg,frac18:fg,frac23:gg,frac25:mg,frac34:bg,frac35:xg,frac38:kg,frac45:vg,frac56:yg,frac58:_g,frac78:wg,frasl:Cg,frown:Eg,fscr:Sg,Fscr:Ag,gacute:jg,Gamma:qg,gamma:Lg,Gammad:Tg,gammad:Ig,gap:Rg,Gbreve:Mg,gbreve:Dg,Gcedil:$g,Gcirc:Ng,gcirc:Bg,Gcy:zg,gcy:Pg,Gdot:Og,gdot:Fg,ge:Ug,gE:Vg,gEl:Hg,gel:Gg,geq:Zg,geqq:Wg,geqslant:Kg,gescc:Jg,ges:Qg,gesdot:Yg,gesdoto:Xg,gesdotol:em,gesl:tm,gesles:nm,Gfr:rm,gfr:om,gg:sm,Gg:cm,ggg:im,gimel:am,GJcy:lm,gjcy:um,gla:dm,gl:pm,glE:hm,glj:fm,gnap:gm,gnapprox:mm,gne:bm,gnE:xm,gneq:km,gneqq:vm,gnsim:ym,Gopf:_m,gopf:wm,grave:Cm,GreaterEqual:Em,GreaterEqualLess:Sm,GreaterFullEqual:Am,GreaterGreater:jm,GreaterLess:qm,GreaterSlantEqual:Lm,GreaterTilde:Tm,Gscr:Im,gscr:Rm,gsim:Mm,gsime:Dm,gsiml:$m,gtcc:Nm,gtcir:Bm,gt:zm,GT:Pm,Gt:Om,gtdot:Fm,gtlPar:Um,gtquest:Vm,gtrapprox:Hm,gtrarr:Gm,gtrdot:Zm,gtreqless:Wm,gtreqqless:Km,gtrless:Jm,gtrsim:Qm,gvertneqq:Ym,gvnE:Xm,Hacek:eb,hairsp:tb,half:nb,hamilt:rb,HARDcy:ob,hardcy:sb,harrcir:cb,harr:ib,hArr:ab,harrw:lb,Hat:ub,hbar:db,Hcirc:pb,hcirc:hb,hearts:fb,heartsuit:gb,hellip:mb,hercon:bb,hfr:xb,Hfr:kb,HilbertSpace:vb,hksearow:yb,hkswarow:_b,hoarr:wb,homtht:Cb,hookleftarrow:Eb,hookrightarrow:Sb,hopf:Ab,Hopf:jb,horbar:qb,HorizontalLine:Lb,hscr:Tb,Hscr:Ib,hslash:Rb,Hstrok:Mb,hstrok:Db,HumpDownHump:$b,HumpEqual:Nb,hybull:Bb,hyphen:zb,Iacute:Pb,iacute:Ob,ic:Fb,Icirc:Ub,icirc:Vb,Icy:Hb,icy:Gb,Idot:Zb,IEcy:Wb,iecy:Kb,iexcl:Jb,iff:Qb,ifr:Yb,Ifr:Xb,Igrave:ex,igrave:tx,ii:nx,iiiint:rx,iiint:ox,iinfin:sx,iiota:cx,IJlig:ix,ijlig:ax,Imacr:lx,imacr:ux,image:dx,ImaginaryI:px,imagline:hx,imagpart:fx,imath:gx,Im:mx,imof:bx,imped:xx,Implies:kx,incare:vx,in:"∈",infin:yx,infintie:_x,inodot:wx,intcal:Cx,int:Ex,Int:Sx,integers:Ax,Integral:jx,intercal:qx,Intersection:Lx,intlarhk:Tx,intprod:Ix,InvisibleComma:Rx,InvisibleTimes:Mx,IOcy:Dx,iocy:$x,Iogon:Nx,iogon:Bx,Iopf:zx,iopf:Px,Iota:Ox,iota:Fx,iprod:Ux,iquest:Vx,iscr:Hx,Iscr:Gx,isin:Zx,isindot:Wx,isinE:Kx,isins:Jx,isinsv:Qx,isinv:Yx,it:Xx,Itilde:ek,itilde:tk,Iukcy:nk,iukcy:rk,Iuml:ok,iuml:sk,Jcirc:ck,jcirc:ik,Jcy:ak,jcy:lk,Jfr:uk,jfr:dk,jmath:pk,Jopf:hk,jopf:fk,Jscr:gk,jscr:mk,Jsercy:bk,jsercy:xk,Jukcy:kk,jukcy:vk,Kappa:yk,kappa:_k,kappav:wk,Kcedil:Ck,kcedil:Ek,Kcy:Sk,kcy:Ak,Kfr:jk,kfr:qk,kgreen:Lk,KHcy:Tk,khcy:Ik,KJcy:Rk,kjcy:Mk,Kopf:Dk,kopf:$k,Kscr:Nk,kscr:Bk,lAarr:zk,Lacute:Pk,lacute:Ok,laemptyv:Fk,lagran:Uk,Lambda:Vk,lambda:Hk,lang:Gk,Lang:Zk,langd:Wk,langle:Kk,lap:Jk,Laplacetrf:Qk,laquo:Yk,larrb:Xk,larrbfs:ev,larr:tv,Larr:nv,lArr:rv,larrfs:ov,larrhk:sv,larrlp:cv,larrpl:iv,larrsim:av,larrtl:lv,latail:uv,lAtail:dv,lat:pv,late:hv,lates:fv,lbarr:gv,lBarr:mv,lbbrk:bv,lbrace:xv,lbrack:kv,lbrke:vv,lbrksld:yv,lbrkslu:_v,Lcaron:wv,lcaron:Cv,Lcedil:Ev,lcedil:Sv,lceil:Av,lcub:jv,Lcy:qv,lcy:Lv,ldca:Tv,ldquo:Iv,ldquor:Rv,ldrdhar:Mv,ldrushar:Dv,ldsh:$v,le:Nv,lE:Bv,LeftAngleBracket:zv,LeftArrowBar:Pv,leftarrow:Ov,LeftArrow:Fv,Leftarrow:Uv,LeftArrowRightArrow:Vv,leftarrowtail:Hv,LeftCeiling:Gv,LeftDoubleBracket:Zv,LeftDownTeeVector:Wv,LeftDownVectorBar:Kv,LeftDownVector:Jv,LeftFloor:Qv,leftharpoondown:Yv,leftharpoonup:Xv,leftleftarrows:e0,leftrightarrow:t0,LeftRightArrow:n0,Leftrightarrow:r0,leftrightarrows:o0,leftrightharpoons:s0,leftrightsquigarrow:c0,LeftRightVector:i0,LeftTeeArrow:a0,LeftTee:l0,LeftTeeVector:u0,leftthreetimes:d0,LeftTriangleBar:p0,LeftTriangle:h0,LeftTriangleEqual:f0,LeftUpDownVector:g0,LeftUpTeeVector:m0,LeftUpVectorBar:b0,LeftUpVector:x0,LeftVectorBar:k0,LeftVector:v0,lEg:y0,leg:_0,leq:w0,leqq:C0,leqslant:E0,lescc:S0,les:A0,lesdot:j0,lesdoto:q0,lesdotor:L0,lesg:T0,lesges:I0,lessapprox:R0,lessdot:M0,lesseqgtr:D0,lesseqqgtr:$0,LessEqualGreater:N0,LessFullEqual:B0,LessGreater:z0,lessgtr:P0,LessLess:O0,lesssim:F0,LessSlantEqual:U0,LessTilde:V0,lfisht:H0,lfloor:G0,Lfr:Z0,lfr:W0,lg:K0,lgE:J0,lHar:Q0,lhard:Y0,lharu:X0,lharul:ey,lhblk:ty,LJcy:ny,ljcy:ry,llarr:oy,ll:sy,Ll:cy,llcorner:iy,Lleftarrow:ay,llhard:ly,lltri:uy,Lmidot:dy,lmidot:py,lmoustache:hy,lmoust:fy,lnap:gy,lnapprox:my,lne:by,lnE:xy,lneq:ky,lneqq:vy,lnsim:yy,loang:_y,loarr:wy,lobrk:Cy,longleftarrow:Ey,LongLeftArrow:Sy,Longleftarrow:Ay,longleftrightarrow:jy,LongLeftRightArrow:qy,Longleftrightarrow:Ly,longmapsto:Ty,longrightarrow:Iy,LongRightArrow:Ry,Longrightarrow:My,looparrowleft:Dy,looparrowright:$y,lopar:Ny,Lopf:By,lopf:zy,loplus:Py,lotimes:Oy,lowast:Fy,lowbar:Uy,LowerLeftArrow:Vy,LowerRightArrow:Hy,loz:Gy,lozenge:Zy,lozf:Wy,lpar:Ky,lparlt:Jy,lrarr:Qy,lrcorner:Yy,lrhar:Xy,lrhard:e_,lrm:t_,lrtri:n_,lsaquo:r_,lscr:o_,Lscr:s_,lsh:c_,Lsh:i_,lsim:a_,lsime:l_,lsimg:u_,lsqb:d_,lsquo:p_,lsquor:h_,Lstrok:f_,lstrok:g_,ltcc:m_,ltcir:b_,lt:x_,LT:k_,Lt:v_,ltdot:y_,lthree:__,ltimes:w_,ltlarr:C_,ltquest:E_,ltri:S_,ltrie:A_,ltrif:j_,ltrPar:q_,lurdshar:L_,luruhar:T_,lvertneqq:I_,lvnE:R_,macr:M_,male:D_,malt:$_,maltese:N_,Map:"⤅",map:B_,mapsto:z_,mapstodown:P_,mapstoleft:O_,mapstoup:F_,marker:U_,mcomma:V_,Mcy:H_,mcy:G_,mdash:Z_,mDDot:W_,measuredangle:K_,MediumSpace:J_,Mellintrf:Q_,Mfr:Y_,mfr:X_,mho:ew,micro:tw,midast:nw,midcir:rw,mid:ow,middot:sw,minusb:cw,minus:iw,minusd:aw,minusdu:lw,MinusPlus:uw,mlcp:dw,mldr:pw,mnplus:hw,models:fw,Mopf:gw,mopf:mw,mp:bw,mscr:xw,Mscr:kw,mstpos:vw,Mu:yw,mu:_w,multimap:ww,mumap:Cw,nabla:Ew,Nacute:Sw,nacute:Aw,nang:jw,nap:qw,napE:Lw,napid:Tw,napos:Iw,napprox:Rw,natural:Mw,naturals:Dw,natur:$w,nbsp:Nw,nbump:Bw,nbumpe:zw,ncap:Pw,Ncaron:Ow,ncaron:Fw,Ncedil:Uw,ncedil:Vw,ncong:Hw,ncongdot:Gw,ncup:Zw,Ncy:Ww,ncy:Kw,ndash:Jw,nearhk:Qw,nearr:Yw,neArr:Xw,nearrow:eC,ne:tC,nedot:nC,NegativeMediumSpace:rC,NegativeThickSpace:oC,NegativeThinSpace:sC,NegativeVeryThinSpace:cC,nequiv:iC,nesear:aC,nesim:lC,NestedGreaterGreater:uC,NestedLessLess:dC,NewLine:pC,nexist:hC,nexists:fC,Nfr:gC,nfr:mC,ngE:bC,nge:xC,ngeq:kC,ngeqq:vC,ngeqslant:yC,nges:_C,nGg:wC,ngsim:CC,nGt:EC,ngt:SC,ngtr:AC,nGtv:jC,nharr:qC,nhArr:LC,nhpar:TC,ni:IC,nis:RC,nisd:MC,niv:DC,NJcy:$C,njcy:NC,nlarr:BC,nlArr:zC,nldr:PC,nlE:OC,nle:FC,nleftarrow:UC,nLeftarrow:VC,nleftrightarrow:HC,nLeftrightarrow:GC,nleq:ZC,nleqq:WC,nleqslant:KC,nles:JC,nless:QC,nLl:YC,nlsim:XC,nLt:e1,nlt:t1,nltri:n1,nltrie:r1,nLtv:o1,nmid:s1,NoBreak:c1,NonBreakingSpace:i1,nopf:a1,Nopf:l1,Not:u1,not:d1,NotCongruent:p1,NotCupCap:h1,NotDoubleVerticalBar:f1,NotElement:g1,NotEqual:m1,NotEqualTilde:b1,NotExists:x1,NotGreater:k1,NotGreaterEqual:v1,NotGreaterFullEqual:y1,NotGreaterGreater:_1,NotGreaterLess:w1,NotGreaterSlantEqual:C1,NotGreaterTilde:E1,NotHumpDownHump:S1,NotHumpEqual:A1,notin:j1,notindot:q1,notinE:L1,notinva:T1,notinvb:I1,notinvc:R1,NotLeftTriangleBar:M1,NotLeftTriangle:D1,NotLeftTriangleEqual:$1,NotLess:N1,NotLessEqual:B1,NotLessGreater:z1,NotLessLess:P1,NotLessSlantEqual:O1,NotLessTilde:F1,NotNestedGreaterGreater:U1,NotNestedLessLess:V1,notni:H1,notniva:G1,notnivb:Z1,notnivc:W1,NotPrecedes:K1,NotPrecedesEqual:J1,NotPrecedesSlantEqual:Q1,NotReverseElement:Y1,NotRightTriangleBar:X1,NotRightTriangle:eE,NotRightTriangleEqual:tE,NotSquareSubset:nE,NotSquareSubsetEqual:rE,NotSquareSuperset:oE,NotSquareSupersetEqual:sE,NotSubset:cE,NotSubsetEqual:iE,NotSucceeds:aE,NotSucceedsEqual:lE,NotSucceedsSlantEqual:uE,NotSucceedsTilde:dE,NotSuperset:pE,NotSupersetEqual:hE,NotTilde:fE,NotTildeEqual:gE,NotTildeFullEqual:mE,NotTildeTilde:bE,NotVerticalBar:xE,nparallel:kE,npar:vE,nparsl:yE,npart:_E,npolint:wE,npr:CE,nprcue:EE,nprec:SE,npreceq:AE,npre:jE,nrarrc:qE,nrarr:LE,nrArr:TE,nrarrw:IE,nrightarrow:RE,nRightarrow:ME,nrtri:DE,nrtrie:$E,nsc:NE,nsccue:BE,nsce:zE,Nscr:PE,nscr:OE,nshortmid:FE,nshortparallel:UE,nsim:VE,nsime:HE,nsimeq:GE,nsmid:ZE,nspar:WE,nsqsube:KE,nsqsupe:JE,nsub:QE,nsubE:YE,nsube:XE,nsubset:eS,nsubseteq:tS,nsubseteqq:nS,nsucc:rS,nsucceq:oS,nsup:sS,nsupE:cS,nsupe:iS,nsupset:aS,nsupseteq:lS,nsupseteqq:uS,ntgl:dS,Ntilde:pS,ntilde:hS,ntlg:fS,ntriangleleft:gS,ntrianglelefteq:mS,ntriangleright:bS,ntrianglerighteq:xS,Nu:kS,nu:vS,num:yS,numero:_S,numsp:wS,nvap:CS,nvdash:ES,nvDash:SS,nVdash:AS,nVDash:jS,nvge:qS,nvgt:LS,nvHarr:TS,nvinfin:IS,nvlArr:RS,nvle:MS,nvlt:DS,nvltrie:$S,nvrArr:NS,nvrtrie:BS,nvsim:zS,nwarhk:PS,nwarr:OS,nwArr:FS,nwarrow:US,nwnear:VS,Oacute:HS,oacute:GS,oast:ZS,Ocirc:WS,ocirc:KS,ocir:JS,Ocy:QS,ocy:YS,odash:XS,Odblac:eA,odblac:tA,odiv:nA,odot:rA,odsold:oA,OElig:sA,oelig:cA,ofcir:iA,Ofr:aA,ofr:lA,ogon:uA,Ograve:dA,ograve:pA,ogt:hA,ohbar:fA,ohm:gA,oint:mA,olarr:bA,olcir:xA,olcross:kA,oline:vA,olt:yA,Omacr:_A,omacr:wA,Omega:CA,omega:EA,Omicron:SA,omicron:AA,omid:jA,ominus:qA,Oopf:LA,oopf:TA,opar:IA,OpenCurlyDoubleQuote:RA,OpenCurlyQuote:MA,operp:DA,oplus:$A,orarr:NA,Or:BA,or:zA,ord:PA,order:OA,orderof:FA,ordf:UA,ordm:VA,origof:HA,oror:GA,orslope:ZA,orv:WA,oS:KA,Oscr:JA,oscr:QA,Oslash:YA,oslash:XA,osol:ej,Otilde:tj,otilde:nj,otimesas:rj,Otimes:oj,otimes:sj,Ouml:cj,ouml:ij,ovbar:aj,OverBar:lj,OverBrace:uj,OverBracket:dj,OverParenthesis:pj,para:hj,parallel:fj,par:gj,parsim:mj,parsl:bj,part:xj,PartialD:kj,Pcy:vj,pcy:yj,percnt:_j,period:wj,permil:Cj,perp:Ej,pertenk:Sj,Pfr:Aj,pfr:jj,Phi:qj,phi:Lj,phiv:Tj,phmmat:Ij,phone:Rj,Pi:Mj,pi:Dj,pitchfork:$j,piv:Nj,planck:Bj,planckh:zj,plankv:Pj,plusacir:Oj,plusb:Fj,pluscir:Uj,plus:Vj,plusdo:Hj,plusdu:Gj,pluse:Zj,PlusMinus:Wj,plusmn:Kj,plussim:Jj,plustwo:Qj,pm:Yj,Poincareplane:Xj,pointint:eq,popf:tq,Popf:nq,pound:rq,prap:oq,Pr:sq,pr:cq,prcue:iq,precapprox:aq,prec:lq,preccurlyeq:uq,Precedes:dq,PrecedesEqual:pq,PrecedesSlantEqual:hq,PrecedesTilde:fq,preceq:gq,precnapprox:mq,precneqq:bq,precnsim:xq,pre:kq,prE:vq,precsim:yq,prime:_q,Prime:wq,primes:Cq,prnap:Eq,prnE:Sq,prnsim:Aq,prod:jq,Product:qq,profalar:Lq,profline:Tq,profsurf:Iq,prop:Rq,Proportional:Mq,Proportion:Dq,propto:$q,prsim:Nq,prurel:Bq,Pscr:zq,pscr:Pq,Psi:Oq,psi:Fq,puncsp:Uq,Qfr:Vq,qfr:Hq,qint:Gq,qopf:Zq,Qopf:Wq,qprime:Kq,Qscr:Jq,qscr:Qq,quaternions:Yq,quatint:Xq,quest:eL,questeq:tL,quot:nL,QUOT:rL,rAarr:oL,race:sL,Racute:cL,racute:iL,radic:aL,raemptyv:lL,rang:uL,Rang:dL,rangd:pL,range:hL,rangle:fL,raquo:gL,rarrap:mL,rarrb:bL,rarrbfs:xL,rarrc:kL,rarr:vL,Rarr:yL,rArr:_L,rarrfs:wL,rarrhk:CL,rarrlp:EL,rarrpl:SL,rarrsim:AL,Rarrtl:jL,rarrtl:qL,rarrw:LL,ratail:TL,rAtail:IL,ratio:RL,rationals:ML,rbarr:DL,rBarr:$L,RBarr:NL,rbbrk:BL,rbrace:zL,rbrack:PL,rbrke:OL,rbrksld:FL,rbrkslu:UL,Rcaron:VL,rcaron:HL,Rcedil:GL,rcedil:ZL,rceil:WL,rcub:KL,Rcy:JL,rcy:QL,rdca:YL,rdldhar:XL,rdquo:eT,rdquor:tT,rdsh:nT,real:rT,realine:oT,realpart:sT,reals:cT,Re:iT,rect:aT,reg:lT,REG:uT,ReverseElement:dT,ReverseEquilibrium:pT,ReverseUpEquilibrium:hT,rfisht:fT,rfloor:gT,rfr:mT,Rfr:bT,rHar:xT,rhard:kT,rharu:vT,rharul:yT,Rho:_T,rho:wT,rhov:CT,RightAngleBracket:ET,RightArrowBar:ST,rightarrow:AT,RightArrow:jT,Rightarrow:qT,RightArrowLeftArrow:LT,rightarrowtail:TT,RightCeiling:IT,RightDoubleBracket:RT,RightDownTeeVector:MT,RightDownVectorBar:DT,RightDownVector:$T,RightFloor:NT,rightharpoondown:BT,rightharpoonup:zT,rightleftarrows:PT,rightleftharpoons:OT,rightrightarrows:FT,rightsquigarrow:UT,RightTeeArrow:VT,RightTee:HT,RightTeeVector:GT,rightthreetimes:ZT,RightTriangleBar:WT,RightTriangle:KT,RightTriangleEqual:JT,RightUpDownVector:QT,RightUpTeeVector:YT,RightUpVectorBar:XT,RightUpVector:eI,RightVectorBar:tI,RightVector:nI,ring:rI,risingdotseq:oI,rlarr:sI,rlhar:cI,rlm:iI,rmoustache:aI,rmoust:lI,rnmid:uI,roang:dI,roarr:pI,robrk:hI,ropar:fI,ropf:gI,Ropf:mI,roplus:bI,rotimes:xI,RoundImplies:kI,rpar:vI,rpargt:yI,rppolint:_I,rrarr:wI,Rrightarrow:CI,rsaquo:EI,rscr:SI,Rscr:AI,rsh:jI,Rsh:qI,rsqb:LI,rsquo:TI,rsquor:II,rthree:RI,rtimes:MI,rtri:DI,rtrie:$I,rtrif:NI,rtriltri:BI,RuleDelayed:zI,ruluhar:PI,rx:OI,Sacute:FI,sacute:UI,sbquo:VI,scap:HI,Scaron:GI,scaron:ZI,Sc:WI,sc:KI,sccue:JI,sce:QI,scE:YI,Scedil:XI,scedil:eR,Scirc:tR,scirc:nR,scnap:rR,scnE:oR,scnsim:sR,scpolint:cR,scsim:iR,Scy:aR,scy:lR,sdotb:uR,sdot:dR,sdote:pR,searhk:hR,searr:fR,seArr:gR,searrow:mR,sect:bR,semi:xR,seswar:kR,setminus:vR,setmn:yR,sext:_R,Sfr:wR,sfr:CR,sfrown:ER,sharp:SR,SHCHcy:AR,shchcy:jR,SHcy:qR,shcy:LR,ShortDownArrow:TR,ShortLeftArrow:IR,shortmid:RR,shortparallel:MR,ShortRightArrow:DR,ShortUpArrow:$R,shy:NR,Sigma:BR,sigma:zR,sigmaf:PR,sigmav:OR,sim:FR,simdot:UR,sime:VR,simeq:HR,simg:GR,simgE:ZR,siml:WR,simlE:KR,simne:JR,simplus:QR,simrarr:YR,slarr:XR,SmallCircle:eM,smallsetminus:tM,smashp:nM,smeparsl:rM,smid:oM,smile:sM,smt:cM,smte:iM,smtes:aM,SOFTcy:lM,softcy:uM,solbar:dM,solb:pM,sol:hM,Sopf:fM,sopf:gM,spades:mM,spadesuit:bM,spar:xM,sqcap:kM,sqcaps:vM,sqcup:yM,sqcups:_M,Sqrt:wM,sqsub:CM,sqsube:EM,sqsubset:SM,sqsubseteq:AM,sqsup:jM,sqsupe:qM,sqsupset:LM,sqsupseteq:TM,square:IM,Square:RM,SquareIntersection:MM,SquareSubset:DM,SquareSubsetEqual:$M,SquareSuperset:NM,SquareSupersetEqual:BM,SquareUnion:zM,squarf:PM,squ:OM,squf:FM,srarr:UM,Sscr:VM,sscr:HM,ssetmn:GM,ssmile:ZM,sstarf:WM,Star:KM,star:JM,starf:QM,straightepsilon:YM,straightphi:XM,strns:eD,sub:tD,Sub:nD,subdot:rD,subE:oD,sube:sD,subedot:cD,submult:iD,subnE:aD,subne:lD,subplus:uD,subrarr:dD,subset:pD,Subset:hD,subseteq:fD,subseteqq:gD,SubsetEqual:mD,subsetneq:bD,subsetneqq:xD,subsim:kD,subsub:vD,subsup:yD,succapprox:_D,succ:wD,succcurlyeq:CD,Succeeds:ED,SucceedsEqual:SD,SucceedsSlantEqual:AD,SucceedsTilde:jD,succeq:qD,succnapprox:LD,succneqq:TD,succnsim:ID,succsim:RD,SuchThat:MD,sum:DD,Sum:$D,sung:ND,sup1:BD,sup2:zD,sup3:PD,sup:OD,Sup:FD,supdot:UD,supdsub:VD,supE:HD,supe:GD,supedot:ZD,Superset:WD,SupersetEqual:KD,suphsol:JD,suphsub:QD,suplarr:YD,supmult:XD,supnE:e$,supne:t$,supplus:n$,supset:r$,Supset:o$,supseteq:s$,supseteqq:c$,supsetneq:i$,supsetneqq:a$,supsim:l$,supsub:u$,supsup:d$,swarhk:p$,swarr:h$,swArr:f$,swarrow:g$,swnwar:m$,szlig:b$,Tab:x$,target:k$,Tau:v$,tau:y$,tbrk:_$,Tcaron:w$,tcaron:C$,Tcedil:E$,tcedil:S$,Tcy:A$,tcy:j$,tdot:q$,telrec:L$,Tfr:T$,tfr:I$,there4:R$,therefore:M$,Therefore:D$,Theta:$$,theta:N$,thetasym:B$,thetav:z$,thickapprox:P$,thicksim:O$,ThickSpace:F$,ThinSpace:U$,thinsp:V$,thkap:H$,thksim:G$,THORN:Z$,thorn:W$,tilde:K$,Tilde:J$,TildeEqual:Q$,TildeFullEqual:Y$,TildeTilde:X$,timesbar:eN,timesb:tN,times:nN,timesd:rN,tint:oN,toea:sN,topbot:cN,topcir:iN,top:aN,Topf:lN,topf:uN,topfork:dN,tosa:pN,tprime:hN,trade:fN,TRADE:gN,triangle:mN,triangledown:bN,triangleleft:xN,trianglelefteq:kN,triangleq:vN,triangleright:yN,trianglerighteq:_N,tridot:wN,trie:CN,triminus:EN,TripleDot:SN,triplus:AN,trisb:jN,tritime:qN,trpezium:LN,Tscr:TN,tscr:IN,TScy:RN,tscy:MN,TSHcy:DN,tshcy:$N,Tstrok:NN,tstrok:BN,twixt:zN,twoheadleftarrow:PN,twoheadrightarrow:ON,Uacute:FN,uacute:UN,uarr:VN,Uarr:HN,uArr:GN,Uarrocir:ZN,Ubrcy:WN,ubrcy:KN,Ubreve:JN,ubreve:QN,Ucirc:YN,ucirc:XN,Ucy:eB,ucy:tB,udarr:nB,Udblac:rB,udblac:oB,udhar:sB,ufisht:cB,Ufr:iB,ufr:aB,Ugrave:lB,ugrave:uB,uHar:dB,uharl:pB,uharr:hB,uhblk:fB,ulcorn:gB,ulcorner:mB,ulcrop:bB,ultri:xB,Umacr:kB,umacr:vB,uml:yB,UnderBar:_B,UnderBrace:wB,UnderBracket:CB,UnderParenthesis:EB,Union:SB,UnionPlus:AB,Uogon:jB,uogon:qB,Uopf:LB,uopf:TB,UpArrowBar:IB,uparrow:RB,UpArrow:MB,Uparrow:DB,UpArrowDownArrow:$B,updownarrow:NB,UpDownArrow:BB,Updownarrow:zB,UpEquilibrium:PB,upharpoonleft:OB,upharpoonright:FB,uplus:UB,UpperLeftArrow:VB,UpperRightArrow:HB,upsi:GB,Upsi:ZB,upsih:WB,Upsilon:KB,upsilon:JB,UpTeeArrow:QB,UpTee:YB,upuparrows:XB,urcorn:e2,urcorner:t2,urcrop:n2,Uring:r2,uring:o2,urtri:s2,Uscr:c2,uscr:i2,utdot:a2,Utilde:l2,utilde:u2,utri:d2,utrif:p2,uuarr:h2,Uuml:f2,uuml:g2,uwangle:m2,vangrt:b2,varepsilon:x2,varkappa:k2,varnothing:v2,varphi:y2,varpi:_2,varpropto:w2,varr:C2,vArr:E2,varrho:S2,varsigma:A2,varsubsetneq:j2,varsubsetneqq:q2,varsupsetneq:L2,varsupsetneqq:T2,vartheta:I2,vartriangleleft:R2,vartriangleright:M2,vBar:D2,Vbar:$2,vBarv:N2,Vcy:B2,vcy:z2,vdash:P2,vDash:O2,Vdash:F2,VDash:U2,Vdashl:V2,veebar:H2,vee:G2,Vee:Z2,veeeq:W2,vellip:K2,verbar:J2,Verbar:Q2,vert:Y2,Vert:X2,VerticalBar:ez,VerticalLine:tz,VerticalSeparator:nz,VerticalTilde:rz,VeryThinSpace:oz,Vfr:sz,vfr:cz,vltri:iz,vnsub:az,vnsup:lz,Vopf:uz,vopf:dz,vprop:pz,vrtri:hz,Vscr:fz,vscr:gz,vsubnE:mz,vsubne:bz,vsupnE:xz,vsupne:kz,Vvdash:vz,vzigzag:yz,Wcirc:_z,wcirc:wz,wedbar:Cz,wedge:Ez,Wedge:Sz,wedgeq:Az,weierp:jz,Wfr:qz,wfr:Lz,Wopf:Tz,wopf:Iz,wp:Rz,wr:Mz,wreath:Dz,Wscr:$z,wscr:Nz,xcap:Bz,xcirc:zz,xcup:Pz,xdtri:Oz,Xfr:Fz,xfr:Uz,xharr:Vz,xhArr:Hz,Xi:Gz,xi:Zz,xlarr:Wz,xlArr:Kz,xmap:Jz,xnis:Qz,xodot:Yz,Xopf:Xz,xopf:eP,xoplus:tP,xotime:nP,xrarr:rP,xrArr:oP,Xscr:sP,xscr:cP,xsqcup:iP,xuplus:aP,xutri:lP,xvee:uP,xwedge:dP,Yacute:pP,yacute:hP,YAcy:fP,yacy:gP,Ycirc:mP,ycirc:bP,Ycy:xP,ycy:kP,yen:vP,Yfr:yP,yfr:_P,YIcy:wP,yicy:CP,Yopf:EP,yopf:SP,Yscr:AP,yscr:jP,YUcy:qP,yucy:LP,yuml:TP,Yuml:IP,Zacute:RP,zacute:MP,Zcaron:DP,zcaron:$P,Zcy:NP,zcy:BP,Zdot:zP,zdot:PP,zeetrf:OP,ZeroWidthSpace:FP,Zeta:UP,zeta:VP,zfr:HP,Zfr:GP,ZHcy:ZP,zhcy:WP,zigrarr:KP,zopf:JP,Zopf:QP,Zscr:YP,zscr:XP,zwj:eO,zwnj:tO};var rr=nO;(function(t){function e(E){return Object.prototype.toString.call(E)}function n(E){return e(E)==="[object String]"}var r=Object.prototype.hasOwnProperty;function s(E,z){return r.call(E,z)}function o(E){var z=Array.prototype.slice.call(arguments,1);return z.forEach(function(I){if(I){if(typeof I!="object")throw new TypeError(I+"must be object");Object.keys(I).forEach(function(V){E[V]=I[V]})}}),E}function c(E,z,I){return[].concat(E.slice(0,z),I,E.slice(z+1))}function i(E){return!(E>=55296&&E<=57343||E>=64976&&E<=65007||(E&65535)===65535||(E&65535)===65534||E>=0&&E<=8||E===11||E>=14&&E<=31||E>=127&&E<=159||E>1114111)}function a(E){if(E>65535){E-=65536;var z=55296+(E>>10),I=56320+(E&1023);return String.fromCharCode(z,I)}return String.fromCharCode(E)}var u=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,d=/&([a-z#][a-z0-9]{1,31});/gi,p=new RegExp(u.source+"|"+d.source,"gi"),h=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,f=rr;function x(E,z){var I=0;return s(f,z)?f[z]:z.charCodeAt(0)===35&&h.test(z)&&(I=z[1].toLowerCase()==="x"?parseInt(z.slice(2),16):parseInt(z.slice(1),10),i(I))?a(I):E}function m(E){return E.indexOf("\\")<0?E:E.replace(u,"$1")}function w(E){return E.indexOf("\\")<0&&E.indexOf("&")<0?E:E.replace(p,function(z,I,V){return I||x(z,V)})}var C=/[&<>"]/,v=/[&<>"]/g,k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function j(E){return k[E]}function A(E){return C.test(E)?E.replace(v,j):E}var g=/[.?*+^$[\]\\(){}|-]/g;function M(E){return E.replace(g,"\\$&")}function b(E){switch(E){case 9:case 32:return!0}return!1}function D(E){if(E>=8192&&E<=8202)return!0;switch(E){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var S=$n;function T(E){return S.test(E)}function U(E){switch(E){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function J(E){return E=E.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(E=E.replace(/ẞ/g,"ß")),E.toLowerCase().toUpperCase()}t.lib={},t.lib.mdurl=Dn,t.lib.ucmicro=Lr(),t.assign=o,t.isString=n,t.has=s,t.unescapeMd=m,t.unescapeAll=w,t.isValidEntityCode=i,t.fromCodePoint=a,t.escapeHtml=A,t.arrayReplaceAt=c,t.isSpace=b,t.isWhiteSpace=D,t.isMdAsciiPunct=U,t.isPunctChar=T,t.escapeRE=M,t.normalizeReference=J})(P);var Ye={},rO=function(e,n,r){var s,o,c,i,a=-1,u=e.posMax,d=e.pos;for(e.pos=n+1,s=1;e.pos<u;){if(c=e.src.charCodeAt(e.pos),c===93&&(s--,s===0)){o=!0;break}if(i=e.pos,e.md.inline.skipToken(e),c===91){if(i===e.pos-1)s++;else if(r)return e.pos=d,-1}}return o&&(a=e.pos),e.pos=d,a},Qt=P.unescapeAll,oO=function(e,n,r){var s,o,c=0,i=n,a={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(n)===60){for(n++;n<r;){if(s=e.charCodeAt(n),s===10||s===60)return a;if(s===62)return a.pos=n+1,a.str=Qt(e.slice(i+1,n)),a.ok=!0,a;if(s===92&&n+1<r){n+=2;continue}n++}return a}for(o=0;n<r&&(s=e.charCodeAt(n),!(s===32||s<32||s===127));){if(s===92&&n+1<r){if(e.charCodeAt(n+1)===32)break;n+=2;continue}if(s===40&&(o++,o>32))return a;if(s===41){if(o===0)break;o--}n++}return i===n||o!==0||(a.str=Qt(e.slice(i,n)),a.lines=c,a.pos=n,a.ok=!0),a},sO=P.unescapeAll,cO=function(e,n,r){var s,o,c=0,i=n,a={ok:!1,pos:0,lines:0,str:""};if(n>=r||(o=e.charCodeAt(n),o!==34&&o!==39&&o!==40))return a;for(n++,o===40&&(o=41);n<r;){if(s=e.charCodeAt(n),s===o)return a.pos=n+1,a.lines=c,a.str=sO(e.slice(i+1,n)),a.ok=!0,a;if(s===40&&o===41)return a;s===10?c++:s===92&&n+1<r&&(n++,e.charCodeAt(n)===10&&c++),n++}return a};Ye.parseLinkLabel=rO;Ye.parseLinkDestination=oO;Ye.parseLinkTitle=cO;var iO=P.assign,aO=P.unescapeAll,be=P.escapeHtml,ae={};ae.code_inline=function(t,e,n,r,s){var o=t[e];return"<code"+s.renderAttrs(o)+">"+be(t[e].content)+"</code>"};ae.code_block=function(t,e,n,r,s){var o=t[e];return"<pre"+s.renderAttrs(o)+"><code>"+be(t[e].content)+`</code></pre>
`};ae.fence=function(t,e,n,r,s){var o=t[e],c=o.info?aO(o.info).trim():"",i="",a="",u,d,p,h,f;return c&&(p=c.split(/(\s+)/g),i=p[0],a=p.slice(2).join("")),n.highlight?u=n.highlight(o.content,i,a)||be(o.content):u=be(o.content),u.indexOf("<pre")===0?u+`
`:c?(d=o.attrIndex("class"),h=o.attrs?o.attrs.slice():[],d<0?h.push(["class",n.langPrefix+i]):(h[d]=h[d].slice(),h[d][1]+=" "+n.langPrefix+i),f={attrs:h},"<pre><code"+s.renderAttrs(f)+">"+u+`</code></pre>
`):"<pre><code"+s.renderAttrs(o)+">"+u+`</code></pre>
`};ae.image=function(t,e,n,r,s){var o=t[e];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,n,r),s.renderToken(t,e,n)};ae.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};ae.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};ae.text=function(t,e){return be(t[e].content)};ae.html_block=function(t,e){return t[e].content};ae.html_inline=function(t,e){return t[e].content};function je(){this.rules=iO({},ae)}je.prototype.renderAttrs=function(e){var n,r,s;if(!e.attrs)return"";for(s="",n=0,r=e.attrs.length;n<r;n++)s+=" "+be(e.attrs[n][0])+'="'+be(e.attrs[n][1])+'"';return s};je.prototype.renderToken=function(e,n,r){var s,o="",c=!1,i=e[n];return i.hidden?"":(i.block&&i.nesting!==-1&&n&&e[n-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(o+=" /"),i.block&&(c=!0,i.nesting===1&&n+1<e.length&&(s=e[n+1],(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===i.tag)&&(c=!1))),o+=c?`>
`:">",o)};je.prototype.renderInline=function(t,e,n){for(var r,s="",o=this.rules,c=0,i=t.length;c<i;c++)r=t[c].type,typeof o[r]<"u"?s+=o[r](t,c,e,n,this):s+=this.renderToken(t,c,e);return s};je.prototype.renderInlineAsText=function(t,e,n){for(var r="",s=0,o=t.length;s<o;s++)t[s].type==="text"?r+=t[s].content:t[s].type==="image"?r+=this.renderInlineAsText(t[s].children,e,n):t[s].type==="softbreak"&&(r+=`
`);return r};je.prototype.render=function(t,e,n){var r,s,o,c="",i=this.rules;for(r=0,s=t.length;r<s;r++)o=t[r].type,o==="inline"?c+=this.renderInline(t[r].children,e,n):typeof i[o]<"u"?c+=i[t[r].type](t,r,e,n,this):c+=this.renderToken(t,r,e,n);return c};var lO=je;function se(){this.__rules__=[],this.__cache__=null}se.prototype.__find__=function(t){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};se.prototype.__compile__=function(){var t=this,e=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(r){r.enabled&&(n&&r.alt.indexOf(n)<0||t.__cache__[n].push(r.fn))})})};se.prototype.at=function(t,e,n){var r=this.__find__(t),s=n||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__[r].fn=e,this.__rules__[r].alt=s.alt||[],this.__cache__=null};se.prototype.before=function(t,e,n,r){var s=this.__find__(t),o=r||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s,0,{name:e,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};se.prototype.after=function(t,e,n,r){var s=this.__find__(t),o=r||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s+1,0,{name:e,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};se.prototype.push=function(t,e,n){var r=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};se.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!0,n.push(r)},this),this.__cache__=null,n};se.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};se.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(r){var s=this.__find__(r);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!1,n.push(r)},this),this.__cache__=null,n};se.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};var $t=se,uO=/\r\n?|\n/g,dO=/\0/g,pO=function(e){var n;n=e.src.replace(uO,`
`),n=n.replace(dO,"�"),e.src=n},hO=function(e){var n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},fO=function(e){var n=e.tokens,r,s,o;for(s=0,o=n.length;s<o;s++)r=n[s],r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)},gO=P.arrayReplaceAt;function mO(t){return/^<a[>\s]/i.test(t)}function bO(t){return/^<\/a\s*>/i.test(t)}var xO=function(e){var n,r,s,o,c,i,a,u,d,p,h,f,x,m,w,C,v=e.tokens,k;if(e.md.options.linkify){for(r=0,s=v.length;r<s;r++)if(!(v[r].type!=="inline"||!e.md.linkify.pretest(v[r].content)))for(o=v[r].children,x=0,n=o.length-1;n>=0;n--){if(i=o[n],i.type==="link_close"){for(n--;o[n].level!==i.level&&o[n].type!=="link_open";)n--;continue}if(i.type==="html_inline"&&(mO(i.content)&&x>0&&x--,bO(i.content)&&x++),!(x>0)&&i.type==="text"&&e.md.linkify.test(i.content)){for(d=i.content,k=e.md.linkify.match(d),a=[],f=i.level,h=0,u=0;u<k.length;u++)m=k[u].url,w=e.md.normalizeLink(m),e.md.validateLink(w)&&(C=k[u].text,k[u].schema?k[u].schema==="mailto:"&&!/^mailto:/i.test(C)?C=e.md.normalizeLinkText("mailto:"+C).replace(/^mailto:/,""):C=e.md.normalizeLinkText(C):C=e.md.normalizeLinkText("http://"+C).replace(/^http:\/\//,""),p=k[u].index,p>h&&(c=new e.Token("text","",0),c.content=d.slice(h,p),c.level=f,a.push(c)),c=new e.Token("link_open","a",1),c.attrs=[["href",w]],c.level=f++,c.markup="linkify",c.info="auto",a.push(c),c=new e.Token("text","",0),c.content=C,c.level=f,a.push(c),c=new e.Token("link_close","a",-1),c.level=--f,c.markup="linkify",c.info="auto",a.push(c),h=k[u].lastIndex);h<d.length&&(c=new e.Token("text","",0),c.content=d.slice(h),c.level=f,a.push(c)),v[r].children=o=gO(o,n,a)}}}},or=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,kO=/\((c|tm|r|p)\)/i,vO=/\((c|tm|r|p)\)/ig,yO={c:"©",r:"®",p:"§",tm:"™"};function _O(t,e){return yO[e.toLowerCase()]}function wO(t){var e,n,r=0;for(e=t.length-1;e>=0;e--)n=t[e],n.type==="text"&&!r&&(n.content=n.content.replace(vO,_O)),n.type==="link_open"&&n.info==="auto"&&r--,n.type==="link_close"&&n.info==="auto"&&r++}function CO(t){var e,n,r=0;for(e=t.length-1;e>=0;e--)n=t[e],n.type==="text"&&!r&&or.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&r--,n.type==="link_close"&&n.info==="auto"&&r++}var EO=function(e){var n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(kO.test(e.tokens[n].content)&&wO(e.tokens[n].children),or.test(e.tokens[n].content)&&CO(e.tokens[n].children))},Yt=P.isWhiteSpace,Xt=P.isPunctChar,en=P.isMdAsciiPunct,SO=/['"]/,tn=/['"]/g,nn="’";function Oe(t,e,n){return t.substr(0,e)+n+t.substr(e+1)}function AO(t,e){var n,r,s,o,c,i,a,u,d,p,h,f,x,m,w,C,v,k,j,A,g;for(j=[],n=0;n<t.length;n++){for(r=t[n],a=t[n].level,v=j.length-1;v>=0&&!(j[v].level<=a);v--);if(j.length=v+1,r.type==="text"){s=r.content,c=0,i=s.length;e:for(;c<i&&(tn.lastIndex=c,o=tn.exec(s),!!o);){if(w=C=!0,c=o.index+1,k=o[0]==="'",d=32,o.index-1>=0)d=s.charCodeAt(o.index-1);else for(v=n-1;v>=0&&!(t[v].type==="softbreak"||t[v].type==="hardbreak");v--)if(t[v].content){d=t[v].content.charCodeAt(t[v].content.length-1);break}if(p=32,c<i)p=s.charCodeAt(c);else for(v=n+1;v<t.length&&!(t[v].type==="softbreak"||t[v].type==="hardbreak");v++)if(t[v].content){p=t[v].content.charCodeAt(0);break}if(h=en(d)||Xt(String.fromCharCode(d)),f=en(p)||Xt(String.fromCharCode(p)),x=Yt(d),m=Yt(p),m?w=!1:f&&(x||h||(w=!1)),x?C=!1:h&&(m||f||(C=!1)),p===34&&o[0]==='"'&&d>=48&&d<=57&&(C=w=!1),w&&C&&(w=h,C=f),!w&&!C){k&&(r.content=Oe(r.content,o.index,nn));continue}if(C){for(v=j.length-1;v>=0&&(u=j[v],!(j[v].level<a));v--)if(u.single===k&&j[v].level===a){u=j[v],k?(A=e.md.options.quotes[2],g=e.md.options.quotes[3]):(A=e.md.options.quotes[0],g=e.md.options.quotes[1]),r.content=Oe(r.content,o.index,g),t[u.token].content=Oe(t[u.token].content,u.pos,A),c+=g.length-1,u.token===n&&(c+=A.length-1),s=r.content,i=s.length,j.length=v;continue e}}w?j.push({token:n,pos:o.index,single:k,level:a}):C&&k&&(r.content=Oe(r.content,o.index,nn))}}}}var jO=function(e){var n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!SO.test(e.tokens[n].content)||AO(e.tokens[n].children,e)};function qe(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}qe.prototype.attrIndex=function(e){var n,r,s;if(!this.attrs)return-1;for(n=this.attrs,r=0,s=n.length;r<s;r++)if(n[r][0]===e)return r;return-1};qe.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};qe.prototype.attrSet=function(e,n){var r=this.attrIndex(e),s=[e,n];r<0?this.attrPush(s):this.attrs[r]=s};qe.prototype.attrGet=function(e){var n=this.attrIndex(e),r=null;return n>=0&&(r=this.attrs[n][1]),r};qe.prototype.attrJoin=function(e,n){var r=this.attrIndex(e);r<0?this.attrPush([e,n]):this.attrs[r][1]=this.attrs[r][1]+" "+n};var Nt=qe,qO=Nt;function sr(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}sr.prototype.Token=qO;var LO=sr,TO=$t,pt=[["normalize",pO],["block",hO],["inline",fO],["linkify",xO],["replacements",EO],["smartquotes",jO]];function Bt(){this.ruler=new TO;for(var t=0;t<pt.length;t++)this.ruler.push(pt[t][0],pt[t][1])}Bt.prototype.process=function(t){var e,n,r;for(r=this.ruler.getRules(""),e=0,n=r.length;e<n;e++)r[e](t)};Bt.prototype.State=LO;var IO=Bt,ht=P.isSpace;function ft(t,e){var n=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];return t.src.substr(n,r-n)}function rn(t){var e=[],n=0,r=t.length,s,o=!1,c=0,i="";for(s=t.charCodeAt(n);n<r;)s===124&&(o?(i+=t.substring(c,n-1),c=n):(e.push(i+t.substring(c,n)),i="",c=n+1)),o=s===92,n++,s=t.charCodeAt(n);return e.push(i+t.substring(c)),e}var RO=function(e,n,r,s){var o,c,i,a,u,d,p,h,f,x,m,w,C,v,k,j,A,g;if(n+2>r||(d=n+1,e.sCount[d]<e.blkIndent)||e.sCount[d]-e.blkIndent>=4||(i=e.bMarks[d]+e.tShift[d],i>=e.eMarks[d])||(A=e.src.charCodeAt(i++),A!==124&&A!==45&&A!==58)||i>=e.eMarks[d]||(g=e.src.charCodeAt(i++),g!==124&&g!==45&&g!==58&&!ht(g))||A===45&&ht(g))return!1;for(;i<e.eMarks[d];){if(o=e.src.charCodeAt(i),o!==124&&o!==45&&o!==58&&!ht(o))return!1;i++}for(c=ft(e,n+1),p=c.split("|"),x=[],a=0;a<p.length;a++){if(m=p[a].trim(),!m){if(a===0||a===p.length-1)continue;return!1}if(!/^:?-+:?$/.test(m))return!1;m.charCodeAt(m.length-1)===58?x.push(m.charCodeAt(0)===58?"center":"right"):m.charCodeAt(0)===58?x.push("left"):x.push("")}if(c=ft(e,n).trim(),c.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4||(p=rn(c),p.length&&p[0]===""&&p.shift(),p.length&&p[p.length-1]===""&&p.pop(),h=p.length,h===0||h!==x.length))return!1;if(s)return!0;for(v=e.parentType,e.parentType="table",j=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),f.map=w=[n,0],f=e.push("thead_open","thead",1),f.map=[n,n+1],f=e.push("tr_open","tr",1),f.map=[n,n+1],a=0;a<p.length;a++)f=e.push("th_open","th",1),x[a]&&(f.attrs=[["style","text-align:"+x[a]]]),f=e.push("inline","",0),f.content=p[a].trim(),f.children=[],f=e.push("th_close","th",-1);for(f=e.push("tr_close","tr",-1),f=e.push("thead_close","thead",-1),d=n+2;d<r&&!(e.sCount[d]<e.blkIndent);d++){for(k=!1,a=0,u=j.length;a<u;a++)if(j[a](e,d,r,!0)){k=!0;break}if(k||(c=ft(e,d).trim(),!c)||e.sCount[d]-e.blkIndent>=4)break;for(p=rn(c),p.length&&p[0]===""&&p.shift(),p.length&&p[p.length-1]===""&&p.pop(),d===n+2&&(f=e.push("tbody_open","tbody",1),f.map=C=[n+2,0]),f=e.push("tr_open","tr",1),f.map=[d,d+1],a=0;a<h;a++)f=e.push("td_open","td",1),x[a]&&(f.attrs=[["style","text-align:"+x[a]]]),f=e.push("inline","",0),f.content=p[a]?p[a].trim():"",f.children=[],f=e.push("td_close","td",-1);f=e.push("tr_close","tr",-1)}return C&&(f=e.push("tbody_close","tbody",-1),C[1]=d),f=e.push("table_close","table",-1),w[1]=d,e.parentType=v,e.line=d,!0},MO=function(e,n,r){var s,o,c;if(e.sCount[n]-e.blkIndent<4)return!1;for(o=s=n+1;s<r;){if(e.isEmpty(s)){s++;continue}if(e.sCount[s]-e.blkIndent>=4){s++,o=s;continue}break}return e.line=o,c=e.push("code_block","code",0),c.content=e.getLines(n,o,4+e.blkIndent,!1)+`
`,c.map=[n,e.line],!0},DO=function(e,n,r,s){var o,c,i,a,u,d,p,h=!1,f=e.bMarks[n]+e.tShift[n],x=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||f+3>x||(o=e.src.charCodeAt(f),o!==126&&o!==96)||(u=f,f=e.skipChars(f,o),c=f-u,c<3)||(p=e.src.slice(u,f),i=e.src.slice(f,x),o===96&&i.indexOf(String.fromCharCode(o))>=0))return!1;if(s)return!0;for(a=n;a++,!(a>=r||(f=u=e.bMarks[a]+e.tShift[a],x=e.eMarks[a],f<x&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(f)===o&&!(e.sCount[a]-e.blkIndent>=4)&&(f=e.skipChars(f,o),!(f-u<c)&&(f=e.skipSpaces(f),!(f<x)))){h=!0;break}return c=e.sCount[n],e.line=a+(h?1:0),d=e.push("fence","code",0),d.info=i,d.content=e.getLines(n+1,a,c,!0),d.markup=p,d.map=[n,e.line],!0},on=P.isSpace,$O=function(e,n,r,s){var o,c,i,a,u,d,p,h,f,x,m,w,C,v,k,j,A,g,M,b,D=e.lineMax,S=e.bMarks[n]+e.tShift[n],T=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(S++)!==62)return!1;if(s)return!0;for(a=f=e.sCount[n]+1,e.src.charCodeAt(S)===32?(S++,a++,f++,o=!1,j=!0):e.src.charCodeAt(S)===9?(j=!0,(e.bsCount[n]+f)%4===3?(S++,a++,f++,o=!1):o=!0):j=!1,x=[e.bMarks[n]],e.bMarks[n]=S;S<T&&(c=e.src.charCodeAt(S),on(c));){c===9?f+=4-(f+e.bsCount[n]+(o?1:0))%4:f++;S++}for(m=[e.bsCount[n]],e.bsCount[n]=e.sCount[n]+1+(j?1:0),d=S>=T,v=[e.sCount[n]],e.sCount[n]=f-a,k=[e.tShift[n]],e.tShift[n]=S-e.bMarks[n],g=e.md.block.ruler.getRules("blockquote"),C=e.parentType,e.parentType="blockquote",h=n+1;h<r&&(b=e.sCount[h]<e.blkIndent,S=e.bMarks[h]+e.tShift[h],T=e.eMarks[h],!(S>=T));h++){if(e.src.charCodeAt(S++)===62&&!b){for(a=f=e.sCount[h]+1,e.src.charCodeAt(S)===32?(S++,a++,f++,o=!1,j=!0):e.src.charCodeAt(S)===9?(j=!0,(e.bsCount[h]+f)%4===3?(S++,a++,f++,o=!1):o=!0):j=!1,x.push(e.bMarks[h]),e.bMarks[h]=S;S<T&&(c=e.src.charCodeAt(S),on(c));){c===9?f+=4-(f+e.bsCount[h]+(o?1:0))%4:f++;S++}d=S>=T,m.push(e.bsCount[h]),e.bsCount[h]=e.sCount[h]+1+(j?1:0),v.push(e.sCount[h]),e.sCount[h]=f-a,k.push(e.tShift[h]),e.tShift[h]=S-e.bMarks[h];continue}if(d)break;for(A=!1,i=0,u=g.length;i<u;i++)if(g[i](e,h,r,!0)){A=!0;break}if(A){e.lineMax=h,e.blkIndent!==0&&(x.push(e.bMarks[h]),m.push(e.bsCount[h]),k.push(e.tShift[h]),v.push(e.sCount[h]),e.sCount[h]-=e.blkIndent);break}x.push(e.bMarks[h]),m.push(e.bsCount[h]),k.push(e.tShift[h]),v.push(e.sCount[h]),e.sCount[h]=-1}for(w=e.blkIndent,e.blkIndent=0,M=e.push("blockquote_open","blockquote",1),M.markup=">",M.map=p=[n,0],e.md.block.tokenize(e,n,h),M=e.push("blockquote_close","blockquote",-1),M.markup=">",e.lineMax=D,e.parentType=C,p[1]=e.line,i=0;i<k.length;i++)e.bMarks[i+n]=x[i],e.tShift[i+n]=k[i],e.sCount[i+n]=v[i],e.bsCount[i+n]=m[i];return e.blkIndent=w,!0},NO=P.isSpace,BO=function(e,n,r,s){var o,c,i,a,u=e.bMarks[n]+e.tShift[n],d=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||(o=e.src.charCodeAt(u++),o!==42&&o!==45&&o!==95))return!1;for(c=1;u<d;){if(i=e.src.charCodeAt(u++),i!==o&&!NO(i))return!1;i===o&&c++}return c<3?!1:(s||(e.line=n+1,a=e.push("hr","hr",0),a.map=[n,e.line],a.markup=Array(c+1).join(String.fromCharCode(o))),!0)},cr=P.isSpace;function sn(t,e){var n,r,s,o;return r=t.bMarks[e]+t.tShift[e],s=t.eMarks[e],n=t.src.charCodeAt(r++),n!==42&&n!==45&&n!==43||r<s&&(o=t.src.charCodeAt(r),!cr(o))?-1:r}function cn(t,e){var n,r=t.bMarks[e]+t.tShift[e],s=r,o=t.eMarks[e];if(s+1>=o||(n=t.src.charCodeAt(s++),n<48||n>57))return-1;for(;;){if(s>=o)return-1;if(n=t.src.charCodeAt(s++),n>=48&&n<=57){if(s-r>=10)return-1;continue}if(n===41||n===46)break;return-1}return s<o&&(n=t.src.charCodeAt(s),!cr(n))?-1:s}function zO(t,e){var n,r,s=t.level+2;for(n=e+2,r=t.tokens.length-2;n<r;n++)t.tokens[n].level===s&&t.tokens[n].type==="paragraph_open"&&(t.tokens[n+2].hidden=!0,t.tokens[n].hidden=!0,n+=2)}var PO=function(e,n,r,s){var o,c,i,a,u,d,p,h,f,x,m,w,C,v,k,j,A,g,M,b,D,S,T,U,J,E,z,I,V=!1,R=!0;if(e.sCount[n]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[n]-e.listIndent>=4&&e.sCount[n]<e.blkIndent)return!1;if(s&&e.parentType==="paragraph"&&e.sCount[n]>=e.blkIndent&&(V=!0),(T=cn(e,n))>=0){if(p=!0,J=e.bMarks[n]+e.tShift[n],C=Number(e.src.slice(J,T-1)),V&&C!==1)return!1}else if((T=sn(e,n))>=0)p=!1;else return!1;if(V&&e.skipSpaces(T)>=e.eMarks[n])return!1;if(w=e.src.charCodeAt(T-1),s)return!0;for(m=e.tokens.length,p?(I=e.push("ordered_list_open","ol",1),C!==1&&(I.attrs=[["start",C]])):I=e.push("bullet_list_open","ul",1),I.map=x=[n,0],I.markup=String.fromCharCode(w),k=n,U=!1,z=e.md.block.ruler.getRules("list"),g=e.parentType,e.parentType="list";k<r;){for(S=T,v=e.eMarks[k],d=j=e.sCount[k]+T-(e.bMarks[n]+e.tShift[n]);S<v;){if(o=e.src.charCodeAt(S),o===9)j+=4-(j+e.bsCount[k])%4;else if(o===32)j++;else break;S++}if(c=S,c>=v?u=1:u=j-d,u>4&&(u=1),a=d+u,I=e.push("list_item_open","li",1),I.markup=String.fromCharCode(w),I.map=h=[n,0],p&&(I.info=e.src.slice(J,T-1)),D=e.tight,b=e.tShift[n],M=e.sCount[n],A=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=a,e.tight=!0,e.tShift[n]=c-e.bMarks[n],e.sCount[n]=j,c>=v&&e.isEmpty(n+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,n,r,!0),(!e.tight||U)&&(R=!1),U=e.line-n>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=A,e.tShift[n]=b,e.sCount[n]=M,e.tight=D,I=e.push("list_item_close","li",-1),I.markup=String.fromCharCode(w),k=n=e.line,h[1]=k,c=e.bMarks[n],k>=r||e.sCount[k]<e.blkIndent||e.sCount[n]-e.blkIndent>=4)break;for(E=!1,i=0,f=z.length;i<f;i++)if(z[i](e,k,r,!0)){E=!0;break}if(E)break;if(p){if(T=cn(e,k),T<0)break;J=e.bMarks[k]+e.tShift[k]}else if(T=sn(e,k),T<0)break;if(w!==e.src.charCodeAt(T-1))break}return p?I=e.push("ordered_list_close","ol",-1):I=e.push("bullet_list_close","ul",-1),I.markup=String.fromCharCode(w),x[1]=k,e.line=k,e.parentType=g,R&&zO(e,m),!0},OO=P.normalizeReference,Fe=P.isSpace,FO=function(e,n,r,s){var o,c,i,a,u,d,p,h,f,x,m,w,C,v,k,j,A=0,g=e.bMarks[n]+e.tShift[n],M=e.eMarks[n],b=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(g)!==91)return!1;for(;++g<M;)if(e.src.charCodeAt(g)===93&&e.src.charCodeAt(g-1)!==92){if(g+1===M||e.src.charCodeAt(g+1)!==58)return!1;break}for(a=e.lineMax,k=e.md.block.ruler.getRules("reference"),x=e.parentType,e.parentType="reference";b<a&&!e.isEmpty(b);b++)if(!(e.sCount[b]-e.blkIndent>3)&&!(e.sCount[b]<0)){for(v=!1,d=0,p=k.length;d<p;d++)if(k[d](e,b,a,!0)){v=!0;break}if(v)break}for(C=e.getLines(n,b,e.blkIndent,!1).trim(),M=C.length,g=1;g<M;g++){if(o=C.charCodeAt(g),o===91)return!1;if(o===93){f=g;break}else o===10?A++:o===92&&(g++,g<M&&C.charCodeAt(g)===10&&A++)}if(f<0||C.charCodeAt(f+1)!==58)return!1;for(g=f+2;g<M;g++)if(o=C.charCodeAt(g),o===10)A++;else if(!Fe(o))break;if(m=e.md.helpers.parseLinkDestination(C,g,M),!m.ok||(u=e.md.normalizeLink(m.str),!e.md.validateLink(u)))return!1;for(g=m.pos,A+=m.lines,c=g,i=A,w=g;g<M;g++)if(o=C.charCodeAt(g),o===10)A++;else if(!Fe(o))break;for(m=e.md.helpers.parseLinkTitle(C,g,M),g<M&&w!==g&&m.ok?(j=m.str,g=m.pos,A+=m.lines):(j="",g=c,A=i);g<M&&(o=C.charCodeAt(g),!!Fe(o));)g++;if(g<M&&C.charCodeAt(g)!==10&&j)for(j="",g=c,A=i;g<M&&(o=C.charCodeAt(g),!!Fe(o));)g++;return g<M&&C.charCodeAt(g)!==10||(h=OO(C.slice(1,f)),!h)?!1:(s||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[h]>"u"&&(e.env.references[h]={title:j,href:u}),e.parentType=x,e.line=n+A+1),!0)},UO=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Xe={},VO="[a-zA-Z_:][a-zA-Z0-9:._-]*",HO="[^\"'=<>`\\x00-\\x20]+",GO="'[^']*'",ZO='"[^"]*"',WO="(?:"+HO+"|"+GO+"|"+ZO+")",KO="(?:\\s+"+VO+"(?:\\s*=\\s*"+WO+")?)",ir="<[A-Za-z][A-Za-z0-9\\-]*"+KO+"*\\s*\\/?>",ar="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",JO="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",QO="<[?][\\s\\S]*?[?]>",YO="<![A-Z]+\\s+[^>]*>",XO="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",eF=new RegExp("^(?:"+ir+"|"+ar+"|"+JO+"|"+QO+"|"+YO+"|"+XO+")"),tF=new RegExp("^(?:"+ir+"|"+ar+")");Xe.HTML_TAG_RE=eF;Xe.HTML_OPEN_CLOSE_TAG_RE=tF;var nF=UO,rF=Xe.HTML_OPEN_CLOSE_TAG_RE,ke=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+nF.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(rF.source+"\\s*$"),/^$/,!1]],oF=function(e,n,r,s){var o,c,i,a,u=e.bMarks[n]+e.tShift[n],d=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(u)!==60)return!1;for(a=e.src.slice(u,d),o=0;o<ke.length&&!ke[o][0].test(a);o++);if(o===ke.length)return!1;if(s)return ke[o][2];if(c=n+1,!ke[o][1].test(a)){for(;c<r&&!(e.sCount[c]<e.blkIndent);c++)if(u=e.bMarks[c]+e.tShift[c],d=e.eMarks[c],a=e.src.slice(u,d),ke[o][1].test(a)){a.length!==0&&c++;break}}return e.line=c,i=e.push("html_block","",0),i.map=[n,c],i.content=e.getLines(n,c,e.blkIndent,!0),!0},an=P.isSpace,sF=function(e,n,r,s){var o,c,i,a,u=e.bMarks[n]+e.tShift[n],d=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||(o=e.src.charCodeAt(u),o!==35||u>=d))return!1;for(c=1,o=e.src.charCodeAt(++u);o===35&&u<d&&c<=6;)c++,o=e.src.charCodeAt(++u);return c>6||u<d&&!an(o)?!1:(s||(d=e.skipSpacesBack(d,u),i=e.skipCharsBack(d,35,u),i>u&&an(e.src.charCodeAt(i-1))&&(d=i),e.line=n+1,a=e.push("heading_open","h"+String(c),1),a.markup="########".slice(0,c),a.map=[n,e.line],a=e.push("inline","",0),a.content=e.src.slice(u,d).trim(),a.map=[n,e.line],a.children=[],a=e.push("heading_close","h"+String(c),-1),a.markup="########".slice(0,c)),!0)},cF=function(e,n,r){var s,o,c,i,a,u,d,p,h,f=n+1,x,m=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;for(x=e.parentType,e.parentType="paragraph";f<r&&!e.isEmpty(f);f++)if(!(e.sCount[f]-e.blkIndent>3)){if(e.sCount[f]>=e.blkIndent&&(u=e.bMarks[f]+e.tShift[f],d=e.eMarks[f],u<d&&(h=e.src.charCodeAt(u),(h===45||h===61)&&(u=e.skipChars(u,h),u=e.skipSpaces(u),u>=d)))){p=h===61?1:2;break}if(!(e.sCount[f]<0)){for(o=!1,c=0,i=m.length;c<i;c++)if(m[c](e,f,r,!0)){o=!0;break}if(o)break}}return p?(s=e.getLines(n,f,e.blkIndent,!1).trim(),e.line=f+1,a=e.push("heading_open","h"+String(p),1),a.markup=String.fromCharCode(h),a.map=[n,e.line],a=e.push("inline","",0),a.content=s,a.map=[n,e.line-1],a.children=[],a=e.push("heading_close","h"+String(p),-1),a.markup=String.fromCharCode(h),e.parentType=x,!0):!1},iF=function(e,n){var r,s,o,c,i,a,u=n+1,d=e.md.block.ruler.getRules("paragraph"),p=e.lineMax;for(a=e.parentType,e.parentType="paragraph";u<p&&!e.isEmpty(u);u++)if(!(e.sCount[u]-e.blkIndent>3)&&!(e.sCount[u]<0)){for(s=!1,o=0,c=d.length;o<c;o++)if(d[o](e,u,p,!0)){s=!0;break}if(s)break}return r=e.getLines(n,u,e.blkIndent,!1).trim(),e.line=u,i=e.push("paragraph_open","p",1),i.map=[n,e.line],i=e.push("inline","",0),i.content=r,i.map=[n,e.line],i.children=[],i=e.push("paragraph_close","p",-1),e.parentType=a,!0},lr=Nt,et=P.isSpace;function le(t,e,n,r){var s,o,c,i,a,u,d,p;for(this.src=t,this.md=e,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",o=this.src,p=!1,c=i=u=d=0,a=o.length;i<a;i++){if(s=o.charCodeAt(i),!p)if(et(s)){u++,s===9?d+=4-d%4:d++;continue}else p=!0;(s===10||i===a-1)&&(s!==10&&i++,this.bMarks.push(c),this.eMarks.push(i),this.tShift.push(u),this.sCount.push(d),this.bsCount.push(0),p=!1,u=0,d=0,c=i+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}le.prototype.push=function(t,e,n){var r=new lr(t,e,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r};le.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};le.prototype.skipEmptyLines=function(e){for(var n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};le.prototype.skipSpaces=function(e){for(var n,r=this.src.length;e<r&&(n=this.src.charCodeAt(e),!!et(n));e++);return e};le.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!et(this.src.charCodeAt(--e)))return e+1;return e};le.prototype.skipChars=function(e,n){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===n;e++);return e};le.prototype.skipCharsBack=function(e,n,r){if(e<=r)return e;for(;e>r;)if(n!==this.src.charCodeAt(--e))return e+1;return e};le.prototype.getLines=function(e,n,r,s){var o,c,i,a,u,d,p,h=e;if(e>=n)return"";for(d=new Array(n-e),o=0;h<n;h++,o++){for(c=0,p=a=this.bMarks[h],h+1<n||s?u=this.eMarks[h]+1:u=this.eMarks[h];a<u&&c<r;){if(i=this.src.charCodeAt(a),et(i))i===9?c+=4-(c+this.bsCount[h])%4:c++;else if(a-p<this.tShift[h])c++;else break;a++}c>r?d[o]=new Array(c-r+1).join(" ")+this.src.slice(a,u):d[o]=this.src.slice(a,u)}return d.join("")};le.prototype.Token=lr;var aF=le,lF=$t,Ue=[["table",RO,["paragraph","reference"]],["code",MO],["fence",DO,["paragraph","reference","blockquote","list"]],["blockquote",$O,["paragraph","reference","blockquote","list"]],["hr",BO,["paragraph","reference","blockquote","list"]],["list",PO,["paragraph","reference","blockquote"]],["reference",FO],["html_block",oF,["paragraph","reference","blockquote"]],["heading",sF,["paragraph","reference","blockquote"]],["lheading",cF],["paragraph",iF]];function tt(){this.ruler=new lF;for(var t=0;t<Ue.length;t++)this.ruler.push(Ue[t][0],Ue[t][1],{alt:(Ue[t][2]||[]).slice()})}tt.prototype.tokenize=function(t,e,n){for(var r,s,o=this.ruler.getRules(""),c=o.length,i=e,a=!1,u=t.md.options.maxNesting;i<n&&(t.line=i=t.skipEmptyLines(i),!(i>=n||t.sCount[i]<t.blkIndent));){if(t.level>=u){t.line=n;break}for(s=0;s<c&&(r=o[s](t,i,n,!1),!r);s++);t.tight=!a,t.isEmpty(t.line-1)&&(a=!0),i=t.line,i<n&&t.isEmpty(i)&&(a=!0,i++,t.line=i)}};tt.prototype.parse=function(t,e,n,r){var s;t&&(s=new this.State(t,e,n,r),this.tokenize(s,s.line,s.lineMax))};tt.prototype.State=aF;var uF=tt;function dF(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}var pF=function(e,n){for(var r=e.pos;r<e.posMax&&!dF(e.src.charCodeAt(r));)r++;return r===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)},hF=P.isSpace,fF=function(e,n){var r,s,o,c=e.pos;if(e.src.charCodeAt(c)!==10)return!1;if(r=e.pending.length-1,s=e.posMax,!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){for(o=r-1;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(c++;c<s&&hF(e.src.charCodeAt(c));)c++;return e.pos=c,!0},gF=P.isSpace,zt=[];for(var ln=0;ln<256;ln++)zt.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){zt[t.charCodeAt(0)]=1});var mF=function(e,n){var r,s=e.pos,o=e.posMax;if(e.src.charCodeAt(s)!==92)return!1;if(s++,s<o){if(r=e.src.charCodeAt(s),r<256&&zt[r]!==0)return n||(e.pending+=e.src[s]),e.pos+=2,!0;if(r===10){for(n||e.push("hardbreak","br",0),s++;s<o&&(r=e.src.charCodeAt(s),!!gF(r));)s++;return e.pos=s,!0}}return n||(e.pending+="\\"),e.pos++,!0},bF=function(e,n){var r,s,o,c,i,a,u,d,p=e.pos,h=e.src.charCodeAt(p);if(h!==96)return!1;for(r=p,p++,s=e.posMax;p<s&&e.src.charCodeAt(p)===96;)p++;if(o=e.src.slice(r,p),u=o.length,e.backticksScanned&&(e.backticks[u]||0)<=r)return n||(e.pending+=o),e.pos+=u,!0;for(i=a=p;(i=e.src.indexOf("`",a))!==-1;){for(a=i+1;a<s&&e.src.charCodeAt(a)===96;)a++;if(d=a-i,d===u)return n||(c=e.push("code_inline","code",0),c.markup=o,c.content=e.src.slice(p,i).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=a,!0;e.backticks[d]=i}return e.backticksScanned=!0,n||(e.pending+=o),e.pos+=u,!0},nt={};nt.tokenize=function(e,n){var r,s,o,c,i,a=e.pos,u=e.src.charCodeAt(a);if(n||u!==126||(s=e.scanDelims(e.pos,!0),c=s.length,i=String.fromCharCode(u),c<2))return!1;for(c%2&&(o=e.push("text","",0),o.content=i,c--),r=0;r<c;r+=2)o=e.push("text","",0),o.content=i+i,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function un(t,e){var n,r,s,o,c,i=[],a=e.length;for(n=0;n<a;n++)s=e[n],s.marker===126&&s.end!==-1&&(o=e[s.end],c=t.tokens[s.token],c.type="s_open",c.tag="s",c.nesting=1,c.markup="~~",c.content="",c=t.tokens[o.token],c.type="s_close",c.tag="s",c.nesting=-1,c.markup="~~",c.content="",t.tokens[o.token-1].type==="text"&&t.tokens[o.token-1].content==="~"&&i.push(o.token-1));for(;i.length;){for(n=i.pop(),r=n+1;r<t.tokens.length&&t.tokens[r].type==="s_close";)r++;r--,n!==r&&(c=t.tokens[r],t.tokens[r]=t.tokens[n],t.tokens[n]=c)}}nt.postProcess=function(e){var n,r=e.tokens_meta,s=e.tokens_meta.length;for(un(e,e.delimiters),n=0;n<s;n++)r[n]&&r[n].delimiters&&un(e,r[n].delimiters)};var rt={};rt.tokenize=function(e,n){var r,s,o,c=e.pos,i=e.src.charCodeAt(c);if(n||i!==95&&i!==42)return!1;for(s=e.scanDelims(e.pos,i===42),r=0;r<s.length;r++)o=e.push("text","",0),o.content=String.fromCharCode(i),e.delimiters.push({marker:i,length:s.length,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0};function dn(t,e){var n,r,s,o,c,i,a=e.length;for(n=a-1;n>=0;n--)r=e[n],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(s=e[r.end],i=n>0&&e[n-1].end===r.end+1&&e[n-1].marker===r.marker&&e[n-1].token===r.token-1&&e[r.end+1].token===s.token+1,c=String.fromCharCode(r.marker),o=t.tokens[r.token],o.type=i?"strong_open":"em_open",o.tag=i?"strong":"em",o.nesting=1,o.markup=i?c+c:c,o.content="",o=t.tokens[s.token],o.type=i?"strong_close":"em_close",o.tag=i?"strong":"em",o.nesting=-1,o.markup=i?c+c:c,o.content="",i&&(t.tokens[e[n-1].token].content="",t.tokens[e[r.end+1].token].content="",n--))}rt.postProcess=function(e){var n,r=e.tokens_meta,s=e.tokens_meta.length;for(dn(e,e.delimiters),n=0;n<s;n++)r[n]&&r[n].delimiters&&dn(e,r[n].delimiters)};var xF=P.normalizeReference,gt=P.isSpace,kF=function(e,n){var r,s,o,c,i,a,u,d,p,h="",f="",x=e.pos,m=e.posMax,w=e.pos,C=!0;if(e.src.charCodeAt(e.pos)!==91||(i=e.pos+1,c=e.md.helpers.parseLinkLabel(e,e.pos,!0),c<0))return!1;if(a=c+1,a<m&&e.src.charCodeAt(a)===40){for(C=!1,a++;a<m&&(s=e.src.charCodeAt(a),!(!gt(s)&&s!==10));a++);if(a>=m)return!1;if(w=a,u=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),u.ok){for(h=e.md.normalizeLink(u.str),e.md.validateLink(h)?a=u.pos:h="",w=a;a<m&&(s=e.src.charCodeAt(a),!(!gt(s)&&s!==10));a++);if(u=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<m&&w!==a&&u.ok)for(f=u.str,a=u.pos;a<m&&(s=e.src.charCodeAt(a),!(!gt(s)&&s!==10));a++);}(a>=m||e.src.charCodeAt(a)!==41)&&(C=!0),a++}if(C){if(typeof e.env.references>"u")return!1;if(a<m&&e.src.charCodeAt(a)===91?(w=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?o=e.src.slice(w,a++):a=c+1):a=c+1,o||(o=e.src.slice(i,c)),d=e.env.references[xF(o)],!d)return e.pos=x,!1;h=d.href,f=d.title}return n||(e.pos=i,e.posMax=c,p=e.push("link_open","a",1),p.attrs=r=[["href",h]],f&&r.push(["title",f]),e.md.inline.tokenize(e),p=e.push("link_close","a",-1)),e.pos=a,e.posMax=m,!0},vF=P.normalizeReference,mt=P.isSpace,yF=function(e,n){var r,s,o,c,i,a,u,d,p,h,f,x,m,w="",C=e.pos,v=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(a=e.pos+2,i=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),i<0))return!1;if(u=i+1,u<v&&e.src.charCodeAt(u)===40){for(u++;u<v&&(s=e.src.charCodeAt(u),!(!mt(s)&&s!==10));u++);if(u>=v)return!1;for(m=u,p=e.md.helpers.parseLinkDestination(e.src,u,e.posMax),p.ok&&(w=e.md.normalizeLink(p.str),e.md.validateLink(w)?u=p.pos:w=""),m=u;u<v&&(s=e.src.charCodeAt(u),!(!mt(s)&&s!==10));u++);if(p=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<v&&m!==u&&p.ok)for(h=p.str,u=p.pos;u<v&&(s=e.src.charCodeAt(u),!(!mt(s)&&s!==10));u++);else h="";if(u>=v||e.src.charCodeAt(u)!==41)return e.pos=C,!1;u++}else{if(typeof e.env.references>"u")return!1;if(u<v&&e.src.charCodeAt(u)===91?(m=u+1,u=e.md.helpers.parseLinkLabel(e,u),u>=0?c=e.src.slice(m,u++):u=i+1):u=i+1,c||(c=e.src.slice(a,i)),d=e.env.references[vF(c)],!d)return e.pos=C,!1;w=d.href,h=d.title}return n||(o=e.src.slice(a,i),e.md.inline.parse(o,e.md,e.env,x=[]),f=e.push("image","img",0),f.attrs=r=[["src",w],["alt",""]],f.children=x,f.content=o,h&&r.push(["title",h])),e.pos=u,e.posMax=v,!0},_F=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,wF=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,CF=function(e,n){var r,s,o,c,i,a,u=e.pos;if(e.src.charCodeAt(u)!==60)return!1;for(i=e.pos,a=e.posMax;;){if(++u>=a||(c=e.src.charCodeAt(u),c===60))return!1;if(c===62)break}return r=e.src.slice(i+1,u),wF.test(r)?(s=e.md.normalizeLink(r),e.md.validateLink(s)?(n||(o=e.push("link_open","a",1),o.attrs=[["href",s]],o.markup="autolink",o.info="auto",o=e.push("text","",0),o.content=e.md.normalizeLinkText(r),o=e.push("link_close","a",-1),o.markup="autolink",o.info="auto"),e.pos+=r.length+2,!0):!1):_F.test(r)?(s=e.md.normalizeLink("mailto:"+r),e.md.validateLink(s)?(n||(o=e.push("link_open","a",1),o.attrs=[["href",s]],o.markup="autolink",o.info="auto",o=e.push("text","",0),o.content=e.md.normalizeLinkText(r),o=e.push("link_close","a",-1),o.markup="autolink",o.info="auto"),e.pos+=r.length+2,!0):!1):!1},EF=Xe.HTML_TAG_RE;function SF(t){var e=t|32;return e>=97&&e<=122}var AF=function(e,n){var r,s,o,c,i=e.pos;return!e.md.options.html||(o=e.posMax,e.src.charCodeAt(i)!==60||i+2>=o)||(r=e.src.charCodeAt(i+1),r!==33&&r!==63&&r!==47&&!SF(r))||(s=e.src.slice(i).match(EF),!s)?!1:(n||(c=e.push("html_inline","",0),c.content=e.src.slice(i,i+s[0].length)),e.pos+=s[0].length,!0)},pn=rr,jF=P.has,qF=P.isValidEntityCode,hn=P.fromCodePoint,LF=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,TF=/^&([a-z][a-z0-9]{1,31});/i,IF=function(e,n){var r,s,o,c=e.pos,i=e.posMax;if(e.src.charCodeAt(c)!==38)return!1;if(c+1<i){if(r=e.src.charCodeAt(c+1),r===35){if(o=e.src.slice(c).match(LF),o)return n||(s=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),e.pending+=qF(s)?hn(s):hn(65533)),e.pos+=o[0].length,!0}else if(o=e.src.slice(c).match(TF),o&&jF(pn,o[1]))return n||(e.pending+=pn[o[1]]),e.pos+=o[0].length,!0}return n||(e.pending+="&"),e.pos++,!0};function fn(t,e){var n,r,s,o,c,i,a,u,d={},p=e.length;if(p){var h=0,f=-2,x=[];for(n=0;n<p;n++)if(s=e[n],x.push(0),(e[h].marker!==s.marker||f!==s.token-1)&&(h=n),f=s.token,s.length=s.length||0,!!s.close){for(d.hasOwnProperty(s.marker)||(d[s.marker]=[-1,-1,-1,-1,-1,-1]),c=d[s.marker][(s.open?3:0)+s.length%3],r=h-x[h]-1,i=r;r>c;r-=x[r]+1)if(o=e[r],o.marker===s.marker&&o.open&&o.end<0&&(a=!1,(o.close||s.open)&&(o.length+s.length)%3===0&&(o.length%3!==0||s.length%3!==0)&&(a=!0),!a)){u=r>0&&!e[r-1].open?x[r-1]+1:0,x[n]=n-r+u,x[r]=u,s.open=!1,o.end=n,o.close=!1,i=-1,f=-2;break}i!==-1&&(d[s.marker][(s.open?3:0)+(s.length||0)%3]=i)}}}var RF=function(e){var n,r=e.tokens_meta,s=e.tokens_meta.length;for(fn(e,e.delimiters),n=0;n<s;n++)r[n]&&r[n].delimiters&&fn(e,r[n].delimiters)},MF=function(e){var n,r,s=0,o=e.tokens,c=e.tokens.length;for(n=r=0;n<c;n++)o[n].nesting<0&&s--,o[n].level=s,o[n].nesting>0&&s++,o[n].type==="text"&&n+1<c&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==r&&(o[r]=o[n]),r++);n!==r&&(o.length=r)},Pt=Nt,gn=P.isWhiteSpace,mn=P.isPunctChar,bn=P.isMdAsciiPunct;function $e(t,e,n,r){this.src=t,this.env=n,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}$e.prototype.pushPending=function(){var t=new Pt("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};$e.prototype.push=function(t,e,n){this.pending&&this.pushPending();var r=new Pt(t,e,n),s=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(s),r};$e.prototype.scanDelims=function(t,e){var n=t,r,s,o,c,i,a,u,d,p,h=!0,f=!0,x=this.posMax,m=this.src.charCodeAt(t);for(r=t>0?this.src.charCodeAt(t-1):32;n<x&&this.src.charCodeAt(n)===m;)n++;return o=n-t,s=n<x?this.src.charCodeAt(n):32,u=bn(r)||mn(String.fromCharCode(r)),p=bn(s)||mn(String.fromCharCode(s)),a=gn(r),d=gn(s),d?h=!1:p&&(a||u||(h=!1)),a?f=!1:u&&(d||p||(f=!1)),e?(c=h,i=f):(c=h&&(!f||u),i=f&&(!h||p)),{can_open:c,can_close:i,length:o}};$e.prototype.Token=Pt;var DF=$e,xn=$t,bt=[["text",pF],["newline",fF],["escape",mF],["backticks",bF],["strikethrough",nt.tokenize],["emphasis",rt.tokenize],["link",kF],["image",yF],["autolink",CF],["html_inline",AF],["entity",IF]],xt=[["balance_pairs",RF],["strikethrough",nt.postProcess],["emphasis",rt.postProcess],["text_collapse",MF]];function Ne(){var t;for(this.ruler=new xn,t=0;t<bt.length;t++)this.ruler.push(bt[t][0],bt[t][1]);for(this.ruler2=new xn,t=0;t<xt.length;t++)this.ruler2.push(xt[t][0],xt[t][1])}Ne.prototype.skipToken=function(t){var e,n,r=t.pos,s=this.ruler.getRules(""),o=s.length,c=t.md.options.maxNesting,i=t.cache;if(typeof i[r]<"u"){t.pos=i[r];return}if(t.level<c)for(n=0;n<o&&(t.level++,e=s[n](t,!0),t.level--,!e);n++);else t.pos=t.posMax;e||t.pos++,i[r]=t.pos};Ne.prototype.tokenize=function(t){for(var e,n,r=this.ruler.getRules(""),s=r.length,o=t.posMax,c=t.md.options.maxNesting;t.pos<o;){if(t.level<c)for(n=0;n<s&&(e=r[n](t,!1),!e);n++);if(e){if(t.pos>=o)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};Ne.prototype.parse=function(t,e,n,r){var s,o,c,i=new this.State(t,e,n,r);for(this.tokenize(i),o=this.ruler2.getRules(""),c=o.length,s=0;s<c;s++)o[s](i)};Ne.prototype.State=DF;var $F=Ne,kt,kn;function NF(){return kn||(kn=1,kt=function(t){var e={};e.src_Any=Tr().source,e.src_Cc=Ir().source,e.src_Z=Rr().source,e.src_P=$n.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><｜]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(t&&t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+").|;(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}),kt}function At(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){n&&Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function ot(t){return Object.prototype.toString.call(t)}function BF(t){return ot(t)==="[object String]"}function zF(t){return ot(t)==="[object Object]"}function PF(t){return ot(t)==="[object RegExp]"}function vn(t){return ot(t)==="[object Function]"}function OF(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var ur={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function FF(t){return Object.keys(t||{}).reduce(function(e,n){return e||ur.hasOwnProperty(n)},!1)}var UF={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},VF="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",HF="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function GF(t){t.__index__=-1,t.__text_cache__=""}function ZF(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function yn(){return function(t,e){e.normalize(t)}}function Ze(t){var e=t.re=NF()(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(VF),n.push(e.src_xn),e.src_tlds=n.join("|");function r(i){return i.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];t.__compiled__={};function o(i,a){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+a)}Object.keys(t.__schemas__).forEach(function(i){var a=t.__schemas__[i];if(a!==null){var u={validate:null,link:null};if(t.__compiled__[i]=u,zF(a)){PF(a.validate)?u.validate=ZF(a.validate):vn(a.validate)?u.validate=a.validate:o(i,a),vn(a.normalize)?u.normalize=a.normalize:a.normalize?o(i,a):u.normalize=yn();return}if(BF(a)){s.push(i);return}o(i,a)}}),s.forEach(function(i){t.__compiled__[t.__schemas__[i]]&&(t.__compiled__[i].validate=t.__compiled__[t.__schemas__[i]].validate,t.__compiled__[i].normalize=t.__compiled__[t.__schemas__[i]].normalize)}),t.__compiled__[""]={validate:null,normalize:yn()};var c=Object.keys(t.__compiled__).filter(function(i){return i.length>0&&t.__compiled__[i]}).map(OF).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+c+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+c+")","ig"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),GF(t)}function WF(t,e){var n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function _n(t,e){var n=new WF(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function ee(t,e){if(!(this instanceof ee))return new ee(t,e);e||FF(t)&&(e=t,t={}),this.__opts__=At({},ur,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=At({},UF,t),this.__compiled__={},this.__tlds__=HF,this.__tlds_replaced__=!1,this.re={},Ze(this)}ee.prototype.add=function(e,n){return this.__schemas__[e]=n,Ze(this),this};ee.prototype.set=function(e){return this.__opts__=At(this.__opts__,e),this};ee.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,s,o,c,i,a,u,d;if(this.re.schema_test.test(e)){for(a=this.re.schema_search,a.lastIndex=0;(n=a.exec(e))!==null;)if(o=this.testSchemaAt(e,n[2],a.lastIndex),o){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(u=e.search(this.re.host_fuzzy_test),u>=0&&(this.__index__<0||u<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(c=r.index+r[1].length,(this.__index__<0||c<this.__index__)&&(this.__schema__="",this.__index__=c,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=e.indexOf("@"),d>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(c=s.index+s[1].length,i=s.index+s[0].length,(this.__index__<0||c<this.__index__||c===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=c,this.__last_index__=i))),this.__index__>=0};ee.prototype.pretest=function(e){return this.re.pretest.test(e)};ee.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};ee.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(_n(this,n)),n=this.__last_index__);for(var s=n?e.slice(n):e;this.test(s);)r.push(_n(this,n)),s=s.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};ee.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,o){return r!==o[s-1]}).reverse(),Ze(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Ze(this),this)};ee.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};ee.prototype.onCompile=function(){};var KF=ee,JF={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},QF={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},YF={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},Re=P,XF=Ye,eU=lO,tU=IO,nU=uF,rU=$F,oU=KF,ge=Dn,dr=Mr,sU={default:JF,zero:QF,commonmark:YF},cU=/^(vbscript|javascript|file|data):/,iU=/^data:image\/(gif|png|jpeg|webp);/;function aU(t){var e=t.trim().toLowerCase();return cU.test(e)?!!iU.test(e):!0}var pr=["http:","https:","mailto:"];function lU(t){var e=ge.parse(t,!0);if(e.hostname&&(!e.protocol||pr.indexOf(e.protocol)>=0))try{e.hostname=dr.toASCII(e.hostname)}catch{}return ge.encode(ge.format(e))}function uU(t){var e=ge.parse(t,!0);if(e.hostname&&(!e.protocol||pr.indexOf(e.protocol)>=0))try{e.hostname=dr.toUnicode(e.hostname)}catch{}return ge.decode(ge.format(e),ge.decode.defaultChars+"%")}function te(t,e){if(!(this instanceof te))return new te(t,e);e||Re.isString(t)||(e=t||{},t="default"),this.inline=new rU,this.block=new nU,this.core=new tU,this.renderer=new eU,this.linkify=new oU,this.validateLink=aU,this.normalizeLink=lU,this.normalizeLinkText=uU,this.utils=Re,this.helpers=Re.assign({},XF),this.options={},this.configure(t),e&&this.set(e)}te.prototype.set=function(t){return Re.assign(this.options,t),this};te.prototype.configure=function(t){var e=this,n;if(Re.isString(t)&&(n=t,t=sU[n],!t))throw new Error('Wrong `markdown-it` preset "'+n+'", check name');if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(r){t.components[r].rules&&e[r].ruler.enableOnly(t.components[r].rules),t.components[r].rules2&&e[r].ruler2.enableOnly(t.components[r].rules2)}),this};te.prototype.enable=function(t,e){var n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(s){n=n.concat(this[s].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));var r=t.filter(function(s){return n.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};te.prototype.disable=function(t,e){var n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(s){n=n.concat(this[s].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));var r=t.filter(function(s){return n.indexOf(s)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};te.prototype.use=function(t){var e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};te.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");var n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};te.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};te.prototype.parseInline=function(t,e){var n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};te.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};var dU=te,pU=dU;const hU=Dr(pU),fU=["__component","__temp_key__"],Ot=(t,e)=>(n,r={})=>(s={})=>{const o=(c,i)=>Object.entries(c).reduce((a,[u,d])=>{const p=i[u];if(fU.includes(u)||d===null||d===void 0)return a[u]=d,a;if(p.type==="component")if(p.repeatable){const h=t(p,d)?e(d,p):d;a[u]=h.map(f=>o(f,r[p.component]?.attributes??{}))}else{const h=t(p,d)?e(d,p):d;a[u]=o(h,r[p.component]?.attributes??{})}else if(p.type==="dynamiczone"){const h=t(p,d)?e(d,p):d;a[u]=h.map(f=>o(f,r[f.__component]?.attributes??{}))}else t(p,d)?a[u]=e(d,p):a[u]=d;return a},{});return o(s,n.attributes)},gU=t=>Ot(e=>t.includes(e.type),()=>""),mU=Ot(t=>t.type==="relation",()=>({connect:[],disconnect:[]})),bU=Ot(t=>t.type==="component"&&t.repeatable||t.type==="dynamiczone",t=>{if(Array.isArray(t)&&t.length>0){const e=Co(void 0,void 0,t.length);return t.map((n,r)=>({...n,__temp_key__:e[r]}))}return t}),xU=t=>e=>{const n=Object.keys(t.attributes);return[...Object.keys(e).filter(c=>!n.includes(c)),...$r].reduce((c,i)=>(delete c[i],c),structuredClone(e))},kU=t=>Object.entries(t).reduce((e,[n,r])=>(r===null||(e[n]=r),e),{}),Ft=(t,e={})=>n=>Nn(xU(t),gU(["password"])(t,e),kU,mU(t,e),bU(t,e))(n),Le=new Map,vU=(t=[])=>{const[e,n]=_.useState(Object.fromEntries(Le)),r=t.filter(a=>!Le.get(a)),[s,o]=_.useState(()=>!!r.length),c=We("useLazyComponents",a=>a.customFields.get);_.useEffect(()=>{const a=d=>{n(d),o(!1)},u=async(d,p)=>{const h=await Promise.all(p);d.forEach((f,x)=>{Le.set(f,h[x].default)}),a(Object.fromEntries(Le))};if(r.length>0){o(!0);const d=r.reduce((p,h)=>{const f=c(h);return f&&p.push(f.components.Input()),p},[]);d.length>0&&u(r,d)}},[r,c]);const i=_.useCallback(()=>{Le.clear(),n({})},[]);return{isLazyLoading:s,lazyComponentStore:e,cleanup:i}},hr=[{value:"asm",label:"Assembly",decorate:"asmatmel"},{value:"bash",label:"Bash"},{value:"c",label:"C"},{value:"clojure",label:"Clojure"},{value:"cobol",label:"COBOL"},{value:"cpp",label:"C++"},{value:"csharp",label:"C#"},{value:"css",label:"CSS"},{value:"dart",label:"Dart"},{value:"dockerfile",label:"Dockerfile",decorate:"docker"},{value:"elixir",label:"Elixir"},{value:"erlang",label:"Erlang"},{value:"fortran",label:"Fortran"},{value:"fsharp",label:"F#"},{value:"go",label:"Go"},{value:"graphql",label:"GraphQL"},{value:"groovy",label:"Groovy"},{value:"haskell",label:"Haskell"},{value:"haxe",label:"Haxe"},{value:"html",label:"HTML"},{value:"ini",label:"INI"},{value:"java",label:"Java"},{value:"javascript",label:"JavaScript"},{value:"jsx",label:"JavaScript (React)"},{value:"json",label:"JSON"},{value:"julia",label:"Julia"},{value:"kotlin",label:"Kotlin"},{value:"latex",label:"LaTeX"},{value:"lua",label:"Lua"},{value:"markdown",label:"Markdown"},{value:"matlab",label:"MATLAB"},{value:"makefile",label:"Makefile"},{value:"objectivec",label:"Objective-C"},{value:"perl",label:"Perl"},{value:"php",label:"PHP"},{value:"plaintext",label:"Plain text"},{value:"powershell",label:"PowerShell"},{value:"python",label:"Python"},{value:"r",label:"R"},{value:"ruby",label:"Ruby"},{value:"rust",label:"Rust"},{value:"sas",label:"SAS"},{value:"scala",label:"Scala"},{value:"scheme",label:"Scheme"},{value:"shell",label:"Shell"},{value:"sql",label:"SQL"},{value:"stata",label:"Stata"},{value:"swift",label:"Swift"},{value:"typescript",label:"TypeScript",decorate:"ts"},{value:"tsx",label:"TypeScript (React)"},{value:"vbnet",label:"VB.NET"},{value:"xml",label:"XML"},{value:"yaml",label:"YAML",decorate:"yml"}],Be=(t,e)=>{const[n,r]=y.last(t,[]);q.unwrapNodes(t,{match:a=>!y.isEditor(a)&&a.type==="list",split:!0,at:t.selection??r});const[,s]=y.last(t,[]),o=y.above(t,{match:a=>!y.isEditor(a)&&a.type!=="text"&&a.type!=="link",at:t.selection??s});if(!o||y.isEditor(o[0]))return;const[c,i]=o;return q.setNodes(t,{...yU(c),...e},{at:i}),i},yU=t=>{const{children:e,type:n,...r}=t;return Object.keys(r).reduce((o,c)=>({...o,[c]:null}),{})},_U=t=>Ae.isNode(t)&&!y.isEditor(t)&&t.type==="text",fr=t=>{const e=y.above(t,{match:i=>!y.isEditor(i)&&!["link","text"].includes(i.type)});if(!e||!t.selection)return;const[n,r]=e,s=y.isEnd(t,t.selection.anchor,r),o=n.children.at(-1),c=_U(o)&&o.text.endsWith(`
`);if(s&&c){q.delete(t,{distance:1,unit:"character",reverse:!0}),q.insertNodes(t,{type:"paragraph",children:[{type:"text",text:""}]});return}q.insertText(t,`
`),s&&["bold","italic","underline","strikethrough","code"].forEach(i=>{y.removeMark(t,i)})},wU=([t,e])=>{const n=[];if(!Qe.isElement(t)||t.type!=="code")return n;const r=Ae.string(t),s=hr.find(u=>u.value===t.language),o=s?.decorate??s?.value,c=Kt.languages[o||"plaintext"],i=Kt.tokenize(r,c);let a=0;for(const u of i){const d=u.length,p=a+d;typeof u!="string"&&n.push({anchor:{path:e,offset:a},focus:{path:e,offset:p},className:`token ${u.type}`}),a=p}return n},CU=L.pre`
  border-radius: ${({theme:t})=>t.borderRadius};
  background-color: ${({theme:t})=>t.colors.neutral100};
  max-width: 100%;
  overflow: auto;
  padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
  flex-shrink: 1;

  & > code {
    font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
      monospace;
    color: ${({theme:t})=>t.colors.neutral800};
    overflow: auto;
    max-width: 100%;
  }
`,EU=t=>{const{editor:e}=ce("ImageDialog"),n=Xn(),r=er(),{formatMessage:s}=Z(),[o,c]=_.useState(!1),i=n&&r||o;return l.jsxs(F,{position:"relative",width:"100%",children:[l.jsx(CU,{...t.attributes,children:l.jsx("code",{children:t.children})}),i&&l.jsx(F,{position:"absolute",background:"neutral0",borderColor:"neutral150",borderStyle:"solid",borderWidth:"0.5px",shadow:"tableShadow",top:"100%",marginTop:1,right:0,padding:1,hasRadius:!0,children:l.jsx(He,{onChange:a=>{q.setNodes(e,{language:a.toString()},{match:u=>!y.isEditor(u)&&u.type==="code"})},value:t.element.type==="code"&&t.element.language||"plaintext",onOpenChange:a=>{c(a),a||oe.focus(e)},onCloseAutoFocus:a=>a.preventDefault(),"aria-label":s({id:"components.Blocks.blocks.code.languageLabel",defaultMessage:"Select a language"}),children:hr.map(({value:a,label:u})=>l.jsx(X,{value:a,children:u},a))})})]})},SU={code:{renderElement:t=>l.jsx(EU,{...t}),icon:to,label:{id:"components.Blocks.blocks.code",defaultMessage:"Code block"},matchNode:t=>t.type==="code",isInBlocksSelector:!0,handleConvert(t){Be(t,{type:"code",language:"plaintext"})},handleEnterKey(t){fr(t)},snippets:["```"]}},AU=L(W).attrs({tag:"h1"})`
  font-size: 4.2rem;
  line-height: ${({theme:t})=>t.lineHeights[1]};
`,jU=L(W).attrs({tag:"h2"})`
  font-size: 3.5rem;
  line-height: ${({theme:t})=>t.lineHeights[1]};
`,qU=L(W).attrs({tag:"h3"})`
  font-size: 2.9rem;
  line-height: ${({theme:t})=>t.lineHeights[1]};
`,LU=L(W).attrs({tag:"h4"})`
  font-size: 2.4rem;
  line-height: ${({theme:t})=>t.lineHeights[1]};
`,TU=L(W).attrs({tag:"h5"})`
  font-size: 2rem;
  line-height: ${({theme:t})=>t.lineHeights[1]};
`,IU=L(W).attrs({tag:"h6"})`
  font-size: 1.6rem;
  line-height: ${({theme:t})=>t.lineHeights[1]};
`,ve=(t,e)=>{Be(t,{type:"heading",level:e})},RU={"heading-one":{renderElement:t=>l.jsx(AU,{...t.attributes,children:t.children}),icon:io,label:{id:"components.Blocks.blocks.heading1",defaultMessage:"Heading 1"},handleConvert:t=>ve(t,1),matchNode:t=>t.type==="heading"&&t.level===1,isInBlocksSelector:!0,snippets:["#"],dragHandleTopMargin:"14px"},"heading-two":{renderElement:t=>l.jsx(jU,{...t.attributes,children:t.children}),icon:co,label:{id:"components.Blocks.blocks.heading2",defaultMessage:"Heading 2"},handleConvert:t=>ve(t,2),matchNode:t=>t.type==="heading"&&t.level===2,isInBlocksSelector:!0,snippets:["##"],dragHandleTopMargin:"10px"},"heading-three":{renderElement:t=>l.jsx(qU,{...t.attributes,children:t.children}),icon:so,label:{id:"components.Blocks.blocks.heading3",defaultMessage:"Heading 3"},handleConvert:t=>ve(t,3),matchNode:t=>t.type==="heading"&&t.level===3,isInBlocksSelector:!0,snippets:["###"],dragHandleTopMargin:"7px"},"heading-four":{renderElement:t=>l.jsx(LU,{...t.attributes,children:t.children}),icon:oo,label:{id:"components.Blocks.blocks.heading4",defaultMessage:"Heading 4"},handleConvert:t=>ve(t,4),matchNode:t=>t.type==="heading"&&t.level===4,isInBlocksSelector:!0,snippets:["####"],dragHandleTopMargin:"4px"},"heading-five":{renderElement:t=>l.jsx(TU,{...t.attributes,children:t.children}),icon:ro,label:{id:"components.Blocks.blocks.heading5",defaultMessage:"Heading 5"},handleConvert:t=>ve(t,5),matchNode:t=>t.type==="heading"&&t.level===5,isInBlocksSelector:!0,snippets:["#####"]},"heading-six":{renderElement:t=>l.jsx(IU,{...t.attributes,children:t.children}),icon:no,label:{id:"components.Blocks.blocks.heading6",defaultMessage:"Heading 6"},handleConvert:t=>ve(t,6),matchNode:t=>t.type==="heading"&&t.level===6,isInBlocksSelector:!0,snippets:["######"],dragHandleTopMargin:"-2px"}},MU=L($)`
  transition-property: box-shadow;
  transition-duration: 0.2s;
  ${t=>t.$isFocused&&Ee`
      box-shadow: ${t.theme.colors.primary600} 0px 0px 0px 3px;
    `}

  & > img {
    height: auto;
    // The max-height is decided with the design team, the 56px is the height of the toolbar
    max-height: calc(512px - 56px);
    max-width: 100%;
    object-fit: contain;
  }
`,DU=["name","alternativeText","url","caption","width","height","formats","hash","ext","mime","size","previewUrl","provider","provider_metadata","createdAt","updatedAt"],$U=(t,e)=>{const n=e.map(r=>[r,t[r]]);return Object.fromEntries(n)},NU=t=>t.type==="image",BU=({attributes:t,children:e,element:n})=>{const r=Xn(),s=er();if(!NU(n))return null;const{url:o,alternativeText:c,width:i,height:a}=n.image;return l.jsxs(F,{...t,children:[e,l.jsx(MU,{background:"neutral100",contentEditable:!1,justifyContent:"center",$isFocused:r&&s,hasRadius:!0,children:l.jsx("img",{src:o,alt:c,width:i,height:a})})]})},zU=()=>{const[t,e]=_.useState(!0),{editor:n}=ce("ImageDialog"),r=We("ImageDialog",i=>i.components);if(!r||!t)return null;const s=r["media-library"],o=i=>{q.unwrapNodes(n,{match:p=>!y.isEditor(p)&&p.type==="list",split:!0});const a=y.above(n,{match(p){return y.isEditor(p)?!1:!["text","link"].includes(p.type)}});if(!a)return;const[,u]=a;q.removeNodes(n);const d=i.map(p=>({type:"image",image:p,children:[{type:"text",text:""}]}));q.insertNodes(n,d,{at:u}),q.select(n,u)},c=i=>{const a=i.map(u=>{const d=$U(u,DU);return{...d,alternativeText:d.alternativeText||d.name,url:tr(u.url)}});o(a),e(!1)};return l.jsx(s,{allowedTypes:["images"],onClose:()=>e(!1),onSelectAssets:c})},PU={image:{renderElement:t=>l.jsx(BU,{...t}),icon:Wn,label:{id:"components.Blocks.blocks.image",defaultMessage:"Image"},matchNode:t=>t.type==="image",isInBlocksSelector:!0,handleBackspaceKey(t){t.children.length===1?q.setNodes(t,{type:"paragraph",image:null,children:[{type:"text",text:""}]}):q.removeNodes(t)},handleEnterKey(t){q.insertNodes(t,{type:"paragraph",children:[{type:"text",text:""}]})},handleConvert:()=>()=>l.jsx(zU,{}),snippets:["!["]}},wn=t=>{q.unwrapNodes(t,{match:e=>!y.isEditor(e)&&Qe.isElement(e)&&e.type==="link"})},gr=(t,{url:e})=>{if(t.selection)if(Array.from(y.nodes(t,{at:t.selection,match:r=>!y.isEditor(r)&&r.type==="link"})).forEach(([,r])=>{q.unwrapNodes(t,{at:r})}),Je.isCollapsed(t.selection)){const r={type:"link",url:e??"",children:[{type:"text",text:e}]};q.insertNodes(t,r)}else q.wrapNodes(t,{type:"link",url:e??""},{split:!0})},OU=(t,e)=>{const{url:n,text:r}=e;if(!t.selection)return;const s=y.above(t,{match:o=>!y.isEditor(o)&&o.type==="link"});if(s){const[,o]=s;q.setNodes(t,{url:n},{at:o}),r!==""&&r!==y.string(t,o)&&(Array.from(Ae.children(t,o,{reverse:!0})).forEach(([,i])=>{q.removeNodes(t,{at:i})}),q.insertNodes(t,[{type:"text",text:r}],{at:o.concat(0)}))}},mr=t=>Object.entries(t),FU=t=>Object.keys(t),br=t=>t.type==="link",Se=t=>t.type==="list",UU=L(Eo)`
  text-decoration: none;
`,VU=L(he)`
  visibility: ${t=>t.$visible?"visible":"hidden"};
`,HU=_.forwardRef(({link:t,children:e,attributes:n},r)=>{const{formatMessage:s}=Z(),{editor:o}=ce("Link"),c=oe.findPath(o,t),[i,a]=_.useState(o.lastInsertedLinkPath?de.equals(c,o.lastInsertedLinkPath):!1),u=t.children.map(g=>g.text).join(""),[d,p]=_.useState(u),[h,f]=_.useState(t.url),x=_.useRef(null),m=o.lastInsertedLinkPath?!de.equals(c,o.lastInsertedLinkPath):!0,[w,C]=_.useState(!1),v=g=>{C(!1),f(g.target.value);try{new URL(g.target.value?.startsWith("/")?`https://strapi.io${g.target.value}`:g.target.value)}catch{C(!0)}},k=g=>{if(g.stopPropagation(),o.selection&&Je.isCollapsed(o.selection)){const[,M]=y.parent(o,o.selection.focus?.path);q.select(o,M)}OU(o,{url:h,text:d}),a(!1),o.lastInsertedLinkPath=null,oe.focus(o)},j=()=>{t.url===""&&wn(o),a(!1),oe.focus(o)};_.useEffect(()=>{i&&x.current?.focus()},[i]);const A=!d||!h||t.url&&t.url===h&&u&&u===d;return l.jsxs(we.Root,{open:i,children:[l.jsx(we.Trigger,{children:l.jsx(UU,{...n,ref:r,href:t.url,onClick:()=>a(!0),color:"primary600",children:e})}),l.jsx(we.Content,{onPointerDownOutside:j,children:l.jsxs($,{padding:4,direction:"column",gap:4,children:[l.jsx(G.Root,{width:"368px",children:l.jsxs($,{direction:"column",gap:1,alignItems:"stretch",children:[l.jsx(G.Label,{children:s({id:"components.Blocks.popover.text",defaultMessage:"Text"})}),l.jsx(G.Input,{name:"text",placeholder:s({id:"components.Blocks.popover.text.placeholder",defaultMessage:"Enter link text"}),value:d,onChange:g=>{p(g.target.value)}})]})}),l.jsx(G.Root,{width:"368px",children:l.jsxs($,{direction:"column",gap:1,alignItems:"stretch",children:[l.jsx(G.Label,{children:s({id:"components.Blocks.popover.link",defaultMessage:"Link"})}),l.jsx(G.Input,{ref:x,name:"url",placeholder:s({id:"components.Blocks.popover.link.placeholder",defaultMessage:"Paste link"}),value:h,onChange:v})]})}),l.jsxs($,{justifyContent:"space-between",width:"100%",children:[l.jsx(VU,{variant:"danger-light",onClick:()=>wn(o),$visible:m,children:s({id:"components.Blocks.popover.remove",defaultMessage:"Remove"})}),l.jsxs($,{gap:2,children:[l.jsx(he,{variant:"tertiary",onClick:j,children:s({id:"global.cancel",defaultMessage:"Cancel"})}),l.jsx(he,{disabled:!!A||w,onClick:k,children:s({id:"global.save",defaultMessage:"Save"})})]})]})]})})]})}),GU=_.forwardRef((t,e)=>br(t.element)?l.jsx(HU,{...t,link:t.element,ref:e}):null),ZU={link:{renderElement:t=>l.jsx(GU,{element:t.element,attributes:t.attributes,children:t.children}),matchNode:t=>t.type==="link",isInBlocksSelector:!1}},xr=Ee`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spaces[2]};
  margin-inline-start: ${({theme:t})=>t.spaces[0]};
  margin-inline-end: ${({theme:t})=>t.spaces[0]};
  padding-inline-start: ${({theme:t})=>t.spaces[2]};

  ol,
  ul {
    margin-block-start: ${({theme:t})=>t.spaces[0]};
    margin-block-end: ${({theme:t})=>t.spaces[0]};
  }

  li {
    margin-inline-start: ${({theme:t})=>t.spaces[3]};
  }
`,WU=L.ol`
  list-style-type: ${t=>t.$listStyleType};
  ${xr}
`,KU=L.ul`
  list-style-type: ${t=>t.$listStyleType};
  ${xr}
`,JU=["decimal","lower-alpha","upper-roman"],QU=["disc","circle","square"],Cn=({attributes:t,children:e,element:n})=>{if(!Se(n))return null;const r=n.format==="ordered"?JU:QU,s=(n.indentLevel||0)%r.length,o=r[s];return n.format==="ordered"?l.jsx(WU,{$listStyleType:o,...t,children:e}):l.jsx(KU,{$listStyleType:o,...t,children:e})},kr=(t,e)=>{q.removeNodes(t,{at:e}),e[0]===0&&(q.insertNodes(t,{type:"paragraph",children:[{type:"text",text:""}]},{at:e}),q.select(t,e))},_e=t=>Ae.isNode(t)&&!y.isEditor(t)&&t.type==="text",En=(t,e)=>{if(!t.selection)return;const[n,r]=y.parent(t,t.selection.anchor),[s,o]=y.parent(t,r),c=s.children.length===1&&_e(n.children[0])&&n.children[0].text==="",i=n.children.length===1&&_e(n.children[0])&&n.children[0].text==="",a=t.selection.focus.offset===0&&t.selection.focus.path.at(-2)===0;if(c)y.above(t,{at:o,match:d=>!y.isEditor(d)&&d.type==="list"})||(e.preventDefault(),kr(t,o));else if(a)q.liftNodes(t,{match:u=>!y.isEditor(u)&&u.type==="list-item"}),q.setNodes(t,{type:"paragraph"});else if(i){const u=y.previous(t,{at:r}),d=y.next(t,{at:r});if(u&&d){e.preventDefault(),q.removeNodes(t,{at:r});const[p]=u,[h]=d;!y.isEditor(p)&&!_e(p)&&Se(p)&&!y.isEditor(h)&&!_e(h)&&Se(h)&&p.type==="list"&&h.type==="list"&&p.format===h.format&&p.indentLevel===h.indentLevel&&q.mergeNodes(t,{at:r})}}},Sn=t=>{const e=y.above(t,{match:u=>!y.isEditor(u)&&u.type==="list-item"});if(!e||!t.selection)return;const[n,r]=e,[s,o]=y.parent(t,r),c=s.children.length===1&&_e(n.children[0])&&n.children[0].text==="",i=n.children.length===1&&_e(n.children[0])&&n.children[0].text==="",a=t.selection.focus.offset===0&&t.selection.focus.path.at(-1)===0;if(c)kr(t,o);else if(a&&!i){const u=y.above(t,{at:t.selection.anchor});if(q.insertNodes(t,{type:"list-item",children:[{type:"text",text:""}]}),u){const d=u[1],p=[...d.slice(0,-1),d[d.length-1]+1];q.select(t,{anchor:{path:p.concat(0),offset:0},focus:{path:p.concat(0),offset:0}})}}else if(i){if(!y.isEditor(s)&&Se(s)&&s?.indentLevel&&s.indentLevel>0){const d=s.indentLevel-1;if(y.above(t,{match:h=>!y.isEditor(h)&&h.type==="list"&&(h.indentLevel||0)===d})){const h=r.slice(0,-1);h.length>0&&(h[h.length-1]+=1),q.moveNodes(t,{at:r,to:h});return}}q.removeNodes(t,{at:r});const u=de.next(o);q.insertNodes(t,{type:"paragraph",children:[{type:"text",text:""}]},{at:u}),q.select(t,u)}else y.isEnd(t,t.selection.anchor,r)?q.insertNodes(t,{type:"list-item",children:[{type:"text",text:""}]}):q.splitNodes(t)},An=(t,e)=>{const n=Be(t,{type:"list-item"});n&&q.wrapNodes(t,{type:"list",format:e,children:[]},{at:n})},jn=t=>{const e=y.above(t,{match:i=>!y.isEditor(i)&&i.type==="list-item"});if(!e||!t.selection)return;const[n,r]=e,[s]=y.parent(t,r);if(n===s.children[0])return;const o=s.children.findIndex(i=>i===n),c=s.children[o-1];if(c.type==="list"){const i=oe.findPath(t,c),a=c.children.length;q.moveNodes(t,{at:r,to:i.concat(a)});return}!y.isEditor(s)&&Se(s)&&q.wrapNodes(t,{type:"list",format:s.format,indentLevel:(s.indentLevel||0)+1,children:[]})},YU={"list-ordered":{renderElement:t=>l.jsx(Cn,{...t}),label:{id:"components.Blocks.blocks.orderedList",defaultMessage:"Numbered list"},icon:Gn,matchNode:t=>t.type==="list"&&t.format==="ordered",isInBlocksSelector:!0,handleConvert:t=>An(t,"ordered"),handleEnterKey:Sn,handleBackspaceKey:En,handleTab:jn,snippets:["1."]},"list-unordered":{renderElement:t=>l.jsx(Cn,{...t}),label:{id:"components.Blocks.blocks.unorderedList",defaultMessage:"Bulleted list"},icon:Hn,matchNode:t=>t.type==="list"&&t.format==="unordered",isInBlocksSelector:!0,handleConvert:t=>An(t,"unordered"),handleEnterKey:Sn,handleBackspaceKey:En,handleTab:jn,snippets:["-","*","+"]},"list-item":{renderElement:t=>l.jsx(W,{tag:"li",...t.attributes,children:t.children}),matchNode:t=>t.type==="list-item",isInBlocksSelector:!1,dragHandleTopMargin:"-2px"}},XU={paragraph:{renderElement:t=>l.jsx(W,{tag:"p",variant:"omega",...t.attributes,children:t.children}),icon:ao,label:{id:"components.Blocks.blocks.text",defaultMessage:"Text"},matchNode:t=>t.type==="paragraph",isInBlocksSelector:!0,dragHandleTopMargin:"-2px",handleConvert(t){Be(t,{type:"paragraph"})},handleEnterKey(t){if(!t.selection)return;const e=t.selection.anchor.path;q.splitNodes(t,{always:!0});const n=y.above(t,{match:i=>!y.isEditor(i)&&i.type!=="text"});if(!n)return;const[,r]=n,s=y.isEnd(t,t.selection.anchor,r),[o]=y.parent(t,t.selection.anchor.path);q.removeNodes(t);const c=t.children.length-e[0]>1;q.insertNodes(t,{type:"paragraph",children:s?[{type:"text",text:""}]:o.children},{at:c?[e[0]+1]:[t.children.length]}),q.select(t,t.start([e[0]+1]))}}},eV=L.blockquote.attrs({role:"blockquote"})`
  font-weight: ${({theme:t})=>t.fontWeights.regular};
  border-left: ${({theme:t})=>`${t.spaces[1]} solid ${t.colors.neutral200}`};
  padding: ${({theme:t})=>t.spaces[2]} ${({theme:t})=>t.spaces[4]};
  color: ${({theme:t})=>t.colors.neutral600};
`,tV={quote:{renderElement:t=>l.jsx("div",{children:l.jsx(eV,{...t.attributes,children:t.children})}),icon:Jn,label:{id:"components.Blocks.blocks.quote",defaultMessage:"Quote"},matchNode:t=>t.type==="quote",isInBlocksSelector:!0,handleConvert(t){Be(t,{type:"quote"})},handleEnterKey(t){fr(t)},snippets:[">"]}},nV=L($)`
  &[aria-disabled='true'] {
    cursor: not-allowed;
    background: ${({theme:t})=>t.colors.neutral150};
  }
`,qn=L(So)`
  background: ${({theme:t})=>t.colors.neutral150};
  width: 1px;
  height: 2.4rem;
`,rV=L($)`
  // Inherit the not-allowed cursor from ToolbarWrapper when disabled
  &[aria-disabled] {
    cursor: not-allowed;
  }

  &[aria-disabled='false'] {
    cursor: pointer;

    // Only apply hover styles if the button is enabled
    &:hover {
      background: ${({theme:t})=>t.colors.primary100};
    }
  }
`,oV=L(F)`
  // Styling changes to SingleSelect component don't work, so adding wrapper to target SingleSelect
  div[role='combobox'] {
    border: none;
    cursor: pointer;
    min-height: unset;
    padding-top: 6px;
    padding-bottom: 6px;

    &[aria-disabled='false']:hover {
      cursor: pointer;
      background: ${({theme:t})=>t.colors.primary100};
    }

    &[aria-disabled] {
      background: transparent;
      cursor: inherit;

      // Select text and icons should also have disabled color
      span {
        color: ${({theme:t})=>t.colors.neutral600};
      }
    }
  }
`;function vr(){const[t,e]=_.useState(null);return{modalElement:t,handleConversionResult:r=>{r&&e(_.cloneElement(r(),{key:Date.now()}))}}}const Ut=({icon:t,name:e,label:n,isActive:r,disabled:s,handleClick:o})=>{const{editor:c}=ce("ToolbarButton"),{formatMessage:i}=Z(),a=i(n),u=r?"primary600":"neutral600";return l.jsx(_o,{description:a,children:l.jsx(wo,{value:e,"data-state":r?"on":"off",onMouseDown:d=>{d.preventDefault(),o(),oe.focus(c)},"aria-disabled":s,disabled:s,"aria-label":a,asChild:!0,children:l.jsx(rV,{tag:"button",background:r?"primary100":"",alignItems:"center",justifyContent:"center",width:7,height:7,hasRadius:!0,children:l.jsx(t,{fill:s?"neutral300":u})})})})},sV=()=>{const{editor:t,blocks:e,disabled:n}=ce("BlocksDropdown"),{formatMessage:r}=Z(),{modalElement:s,handleConversionResult:o}=vr(),c=mr(e).reduce((h,f)=>{const[x,m]=f;return m.isInBlocksSelector?[...h,x]:h},[]),[i,a]=_.useState("paragraph"),u=h=>{if(!IV(h))return;const f=t.children.length===1&&y.isEmpty(t,t.children[0]);!t.selection&&!f?q.insertNodes(t,{type:"quote",children:[{type:"text",text:""}]},{select:!0}):!t.selection&&f&&q.select(t,y.start(t,[0,0]));const x=y.above(t,{match:w=>!y.isEditor(w)&&w.type==="list"});if(x&&["list-ordered","list-unordered"].includes(h)){const[w,C]=x,v=h==="list-ordered"?"ordered":"unordered";!y.isEditor(w)&&jt(w)&&w.format!==v&&q.setNodes(t,{format:v},{at:C});return}const m=e[h].handleConvert?.(t);o(m),a(h),oe.focus(t)},d=h=>h.preventDefault();_.useEffect(()=>{if(t.selection){let h;const f=y.above(t,{match:m=>!y.isEditor(m)&&m.type==="list",at:t.selection.anchor});if(f){const[m]=f;h=m}else{const[m]=y.parent(t,t.selection.anchor,{edge:"start",depth:2});m.type==="list-item"?(q.setNodes(t,{type:"paragraph"}),h={...m,type:"paragraph"}):h=m}const x=FU(e).find(m=>!y.isEditor(h)&&e[m].matchNode(h));x&&x!==i&&a(x)}},[t.selection,t,e,i]);const p=e[i].icon;return l.jsxs(l.Fragment,{children:[l.jsx(oV,{children:l.jsx(He,{startIcon:l.jsx(p,{}),onChange:u,placeholder:r(e[i].label),value:i,onCloseAutoFocus:d,"aria-label":r({id:"components.Blocks.blocks.selectBlock",defaultMessage:"Select a block"}),disabled:n,children:c.map(h=>l.jsx(cV,{value:h,label:e[h].label,icon:e[h].icon,blockSelected:i},h))})}),s]})},cV=({value:t,icon:e,label:n,blockSelected:r})=>{const{formatMessage:s}=Z(),o=t===r;return l.jsx(X,{startIcon:l.jsx(e,{fill:o?"primary600":"neutral600"}),value:t,children:s(n)})},jt=t=>Ae.isNode(t)&&!y.isEditor(t)&&t.type==="list",Ln=({block:t,format:e})=>{const{editor:n,disabled:r,blocks:s}=ce("ListButton"),o=()=>{if(!n.selection)return!1;const a=y.above(n,{match:u=>!y.isEditor(u)&&u.type==="list",at:n.selection.anchor});if(a){const[u]=a;if(!y.isEditor(u)&&jt(u)&&u.format===e)return!0}return!1},c=()=>{if(r)return!0;if(!n.selection)return!1;const a=y.above(n,{at:n.selection.anchor,match:d=>!y.isEditor(d)&&d.type!=="text"}),u=y.above(n,{at:n.selection.focus,match:d=>!y.isEditor(d)&&d.type!=="text"});return!a||!u?!1:a[0]!==u[0]},i=a=>{let u;if(n.selection)u=y.above(n,{match:h=>!y.isEditor(h)&&h.type==="list"});else{const[h,f]=y.last(n,[]);u=y.above(n,{match:x=>!y.isEditor(x)&&x.type==="list",at:f})}if(!u){s[`list-${a}`].handleConvert(n);return}const[d,p]=u;!y.isEditor(d)&&jt(d)&&(d.format!==a?q.setNodes(n,{format:a},{at:p}):s.paragraph.handleConvert(n))};return l.jsx(Ut,{icon:t.icon,name:e,label:t.label,isActive:o(),disabled:c(),handleClick:()=>i(e)})},iV=({disabled:t})=>{const{editor:e}=ce("LinkButton"),n=()=>{const{selection:o}=e;if(!o)return!1;const[c]=Array.from(y.nodes(e,{at:y.unhangRange(e,o),match:i=>Qe.isElement(i)&&i.type==="link"}));return!!c},r=()=>{if(t)return!0;if(!e.selection)return!1;const o=y.above(e,{at:e.selection.anchor,match:i=>!y.isEditor(i)&&i.type!=="text"}),c=y.above(e,{at:e.selection.focus,match:i=>!y.isEditor(i)&&i.type!=="text"});return!o||!c?!1:o[0]!==c[0]},s=()=>{e.shouldSaveLinkPath=!0,gr(e,{url:""})};return l.jsx(Ut,{icon:Kn,name:"link",label:{id:"components.Blocks.link",defaultMessage:"Link"},isActive:n(),handleClick:s,disabled:r()})},aV=()=>{const{editor:t,blocks:e,modifiers:n,disabled:r}=ce("BlocksToolbar"),o=(()=>{if(r)return!0;if(!t.selection)return!1;const c=t.children[t.selection.anchor.path[0]];return!!["image","code"].includes(c.type)})();return l.jsx(po,{"aria-disabled":r,asChild:!0,children:l.jsxs(nV,{gap:2,padding:2,width:"100%",children:[l.jsx(sV,{}),l.jsx(qn,{}),l.jsx(Zt,{type:"multiple",asChild:!0,children:l.jsxs($,{gap:1,children:[Object.entries(n).map(([c,i])=>l.jsx(Ut,{name:c,icon:i.icon,label:i.label,isActive:i.checkIsActive(t),handleClick:()=>i.handleToggle(t),disabled:o},c)),l.jsx(iV,{disabled:o})]})}),l.jsx(qn,{}),l.jsx(Zt,{type:"single",asChild:!0,children:l.jsxs($,{gap:1,children:[l.jsx(Ln,{block:e["list-unordered"],format:"unordered"}),l.jsx(Ln,{block:e["list-ordered"],format:"ordered"})]})})]})})},lV=L(Ao)`
  // The outline style is set on the wrapper with :focus-within
  outline: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spaces[3]};
  height: 100%;
  // For fullscreen align input in the center with fixed width
  width: ${t=>t.isExpandedMode?"512px":"100%"};
  margin: auto;

  > *:last-child {
    padding-bottom: ${({theme:t})=>t.spaces[3]};
  }
`,uV=L(F)`
  position: ${({isOverDropTarget:t})=>t&&"relative"};
`,dV=L(F)`
  position: absolute;
  right: 0;

  // Show drop placeholder 8px above or below the drop target
  ${({dragDirection:t,theme:e,placeholderMargin:n})=>Ee`
    top: ${t===Jt.UPWARD&&`-${e.spaces[n]}`};
    bottom: ${t===Jt.DOWNWARD&&`-${e.spaces[n]}`};
  `}
`,yr=L($)`
  // Style each block rendered using renderElement()
  & > [data-slate-node='element'] {
    width: 100%;
    opacity: inherit;
  }

  // Set the visibility of drag button
  [role='button'] {
    visibility: ${t=>t.$dragVisibility};
    opacity: inherit;
  }
  &[aria-disabled='true'] {
    user-drag: none;
  }
`,_r=L(K)`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius};
  padding-left: ${({theme:t})=>t.spaces[0]};
  padding-right: ${({theme:t})=>t.spaces[0]};
  padding-top: ${({theme:t})=>t.spaces[1]};
  padding-bottom: ${({theme:t})=>t.spaces[1]};
  visibility: hidden;
  cursor: grab;
  opacity: inherit;
  margin-top: ${t=>t.$dragHandleTopMargin??0};

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
  }
  &:active {
    cursor: grabbing;
    background: ${({theme:t})=>t.colors.neutral150};
  }
  &[aria-disabled='true'] {
    visibility: hidden;
  }
  svg {
    min-width: ${({theme:t})=>t.spaces[3]};

    path {
      fill: ${({theme:t})=>t.colors.neutral500};
    }
  }
`,pV=({children:t,index:e,setDragDirection:n,dragDirection:r,dragHandleTopMargin:s})=>{const{editor:o,disabled:c,name:i,setLiveText:a}=ce("drag-and-drop"),{formatMessage:u}=Z(),[d,p]=_.useState("hidden"),h=_.useCallback((A,g)=>{q.moveNodes(o,{at:g,to:A});const M=[g[0]+1,...g.slice(1)],b=[A[0]+1,...A.slice(1)];a(u({id:B("components.Blocks.dnd.reorder"),defaultMessage:"{item}, moved. New position in the editor: {position}."},{item:`${i}.${M.join(",")}`,position:`${b.join(",")} of ${o.children.length}`}))},[o,u,i,a]),[{handlerId:f,isDragging:x,isOverDropTarget:m,direction:w},C,v,k]=Mt(!c,{type:`${Dt.BLOCKS}_${i}`,index:e,item:{index:e,displayedValue:t},onDropItem(A,g){g&&h(g,A)}}),j=Me(C,v);return _.useEffect(()=>{w&&n(w)},[w,n]),_.useEffect(()=>{p("hidden")},[o.selection]),l.jsxs(uV,{ref:j,isOverDropTarget:m,children:[m&&l.jsx(dV,{borderStyle:"solid",borderColor:"secondary200",borderWidth:"2px",width:"calc(100% - 24px)",marginLeft:"auto",dragDirection:r,placeholderMargin:t.props.as&&t.props.as==="li"?1:2}),x?l.jsx(hV,{dragHandleTopMargin:s,children:t}):l.jsxs(yr,{ref:k,"data-handler-id":f,gap:2,paddingLeft:2,alignItems:"start",onDragStart:A=>{const g=A.target,M=A.currentTarget;g.getAttribute("role")!=="button"?A.preventDefault():M.style.opacity="0.5"},onDragEnd:A=>{const g=A.currentTarget;g.style.opacity="1"},onMouseMove:()=>p("visible"),onSelect:()=>p("visible"),onMouseLeave:()=>p("hidden"),"aria-disabled":c,$dragVisibility:d,children:[l.jsx(_r,{tag:"div",contentEditable:!1,role:"button",tabIndex:0,withTooltip:!1,label:u({id:B("components.DragHandle-label"),defaultMessage:"Drag"}),onClick:A=>A.stopPropagation(),"aria-disabled":c,disabled:c,draggable:!0,$dragHandleTopMargin:s,children:l.jsx(Ke,{color:"primary500"})}),t]})]})},hV=({children:t,dragHandleTopMargin:e})=>{const{formatMessage:n}=Z();return l.jsxs(yr,{gap:2,paddingLeft:2,alignItems:"start",$dragVisibility:"visible",children:[l.jsx(_r,{tag:"div",role:"button",withTooltip:!1,label:n({id:B("components.DragHandle-label"),defaultMessage:"Drag"}),$dragHandleTopMargin:e,children:l.jsx(Ke,{color:"neutral600"})}),t]})},fV=(t,e)=>{const n=mr(e).reduce((r,s)=>{const[o,c]=s;return t.leaf[o]?c.renderLeaf(r):r},t.children);return l.jsx("span",{...t.attributes,className:t.leaf.className,children:n})},gV=({props:t,blocks:e,editor:n,setDragDirection:r,dragDirection:s})=>{const{element:o}=t,i=Object.values(e).find(u=>u.matchNode(o))||e.paragraph,a=oe.findPath(n,o);return br(o)||Se(o)&&o.indentLevel&&o.indentLevel>0||o.type==="list-item"?i.renderElement(t):l.jsx(pV,{index:a,setDragDirection:r,dragDirection:s,dragHandleTopMargin:i.dragHandleTopMargin,children:i.renderElement(t)})},mV=({placeholder:t,ariaLabelId:e})=>{const{editor:n,disabled:r,blocks:s,modifiers:o,setLiveText:c,isExpandedMode:i}=ce("BlocksContent"),a=_.useRef(null),{formatMessage:u}=Z(),[d,p]=_.useState(null),{modalElement:h,handleConversionResult:f}=vr(),x=_.useCallback(b=>fV(b,o),[o]),m=(b,D)=>{if(!b.selection)return;const T=[Je.start(b.selection).path[0]];let U=0;D.key==="ArrowUp"?U=T[0]>0?T[0]-1:T[0]:U=T[0]<b.children.length-1?T[0]+1:T[0];const J=[U];U!==T[0]&&(q.moveNodes(b,{at:T,to:J}),c(u({id:B("components.Blocks.dnd.reorder"),defaultMessage:"{item}, moved. New position in the editor: {position}."},{item:`${name}.${T[0]+1}`,position:`${J[0]+1} of ${b.children.length}`})),D.preventDefault())},w=_.useCallback(b=>gV({props:b,blocks:s,editor:n,dragDirection:d,setDragDirection:p}),[s,n,d,p]),C=b=>{if(!n.selection)return;const[D,S]=y.node(n,n.selection.anchor.path);if(y.isEditor(D)||D.type!=="text"||S.at(-1)!==0)return;const T=Object.values(s).find(U=>U.snippets?.includes(D.text));if(T?.handleConvert){b.preventDefault(),q.delete(n,{distance:D.text.length,unit:"character",reverse:!0});const U=T.handleConvert(n);f(U)}},v=b=>{if(!n.selection)return;const D=n.children[n.selection.anchor.path[0]],S=Object.values(s).find(T=>T.matchNode(D));if(S){if(b.shiftKey&&D.type!=="image"){q.insertText(n,`
`);return}S.handleEnterKey?S.handleEnterKey(n):s.paragraph.handleEnterKey(n)}},k=b=>{if(!n.selection)return;const D=n.children[n.selection.anchor.path[0]],S=Object.values(s).find(T=>T.matchNode(D));S&&S.handleBackspaceKey&&S.handleBackspaceKey(n,b)},j=b=>{if(!n.selection)return;const D=n.children[n.selection.anchor.path[0]],S=Object.values(s).find(T=>T.matchNode(D));S&&S.handleTab&&(b.preventDefault(),S.handleTab(n))},A=b=>{(b.metaKey||b.ctrlKey)&&(Object.values(o).forEach(S=>{if(S.isValidEventKey(b)){S.handleToggle(n);return}}),b.shiftKey&&["ArrowUp","ArrowDown"].includes(b.key)&&m(n,b))},g=b=>{switch(b.key){case"Enter":return b.preventDefault(),v(b);case"Backspace":return k(b);case"Tab":return j(b);case"Escape":return oe.blur(n)}A(b),b.key===" "&&C(b)},M=()=>{if(!n.selection)return;const D=oe.toDOMRange(n,n.selection).getBoundingClientRect(),S=a.current;if(!S)return;const T=S.getBoundingClientRect();(D.top<T.top||D.bottom>T.bottom)&&S.scrollBy({top:28,behavior:"smooth"})};return l.jsxs(F,{ref:a,grow:1,width:"100%",overflow:"auto",fontSize:2,background:"neutral0",color:"neutral800",lineHeight:6,paddingRight:7,paddingTop:6,paddingBottom:3,children:[l.jsx(lV,{"aria-labelledby":e,readOnly:r,placeholder:t,isExpandedMode:i,decorate:wU,renderElement:w,renderLeaf:x,onKeyDown:g,scrollSelectionIntoView:M,onDrop:()=>!0,onDragStart:()=>!0}),h]})},bV=L(K)`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
`,xV=L($)`
  // Background with 20% opacity
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,kV=({children:t,error:e,disabled:n,onCollapse:r,ariaDescriptionId:s})=>{const{formatMessage:o}=Z(),{isExpandedMode:c}=ce("editorLayout");return _.useEffect(()=>(c&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[c]),c?l.jsx(On,{role:"dialog","aria-modal":!1,children:l.jsx(Fn,{onEscape:r,children:l.jsx(xV,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:r,children:l.jsx(F,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"90%",height:"90%",onClick:i=>i.stopPropagation(),"aria-describedby":s,position:"relative",children:l.jsxs($,{height:"100%",alignItems:"flex-start",direction:"column",children:[t,l.jsx(bV,{label:o({id:B("components.Blocks.collapse"),defaultMessage:"Collapse"}),onClick:r,children:l.jsx(Un,{})})]})})})})}):l.jsx(vV,{direction:"column",alignItems:"flex-start",height:"512px",$disabled:n,$hasError:!!e,style:{overflow:"hidden"},"aria-describedby":s,position:"relative",children:t})},vV=L($)`
  border: 1px solid
    ${({theme:t,$hasError:e})=>e?t.colors.danger600:t.colors.neutral200};
  border-radius: ${({theme:t})=>t.borderRadius};
  background: ${({theme:t})=>t.colors.neutral0};

  ${({theme:t,$hasError:e=!1})=>Ee`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    &:focus-within {
      border: 1px solid ${e?t.colors.danger600:t.colors.primary600};
      box-shadow: ${e?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `}

  ${({theme:t,$disabled:e})=>e?Ee`
          color: ${t.colors.neutral600};
          background: ${t.colors.neutral150};
        `:void 0}
`,st=Ee`
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`,yV=L(W).attrs({fontWeight:"bold"})`
  ${st}
`,_V=L(W)`
  font-style: italic;
  ${st}
`,wV=L(W).attrs({textDecoration:"underline"})`
  ${st}
`,CV=L(W).attrs({textDecoration:"line-through"})`
  ${st}
`,EV=L.code`
  background-color: ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  padding: ${({theme:t})=>`0 ${t.spaces[2]}`};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
    monospace;
  color: inherit;
`,Te=(t,e)=>{const n=y.marks(t);return n?!!n[e]:!1},Ie=(t,e)=>{const n=y.marks(t);if(!t.selection){const r=y.end(t,[]);q.select(t,r)}n?.[e]?y.removeMark(t,e):y.addMark(t,e,!0)},SV={bold:{icon:wt,isValidEventKey:t=>t.key==="b",label:{id:"components.Blocks.modifiers.bold",defaultMessage:"Bold"},checkIsActive:t=>Te(t,"bold"),handleToggle:t=>Ie(t,"bold"),renderLeaf:t=>l.jsx(yV,{children:t})},italic:{icon:Ct,isValidEventKey:t=>t.key==="i",label:{id:"components.Blocks.modifiers.italic",defaultMessage:"Italic"},checkIsActive:t=>Te(t,"italic"),handleToggle:t=>Ie(t,"italic"),renderLeaf:t=>l.jsx(_V,{children:t})},underline:{icon:Et,isValidEventKey:t=>t.key==="u",label:{id:"components.Blocks.modifiers.underline",defaultMessage:"Underline"},checkIsActive:t=>Te(t,"underline"),handleToggle:t=>Ie(t,"underline"),renderLeaf:t=>l.jsx(wV,{children:t})},strikethrough:{icon:Vn,isValidEventKey:t=>t.key==="S"&&t.shiftKey,label:{id:"components.Blocks.modifiers.strikethrough",defaultMessage:"Strikethrough"},checkIsActive:t=>Te(t,"strikethrough"),handleToggle:t=>Ie(t,"strikethrough"),renderLeaf:t=>l.jsx(CV,{children:t})},code:{icon:Zn,isValidEventKey:t=>t.key==="e",label:{id:"components.Blocks.modifiers.code",defaultMessage:"Inline code"},checkIsActive:t=>Te(t,"code"),handleToggle:t=>Ie(t,"code"),renderLeaf:t=>l.jsx(EV,{children:t})}},AV=t=>{const{isVoid:e}=t;return t.isVoid=n=>n.type==="image"?!0:e(n),t},jV=t=>{const{isInline:e,apply:n,insertText:r,insertData:s}=t;return t.isInline=o=>o.type==="link"?!0:e(o),t.lastInsertedLinkPath=null,t.apply=o=>{o.type==="insert_node"?!y.isEditor(o.node)&&o.node.type==="link"&&t.shouldSaveLinkPath&&(t.lastInsertedLinkPath=o.path):o.type==="move_node"&&de.hasPrevious(o.path)&&t.lastInsertedLinkPath&&t.shouldSaveLinkPath&&(t.lastInsertedLinkPath=de.transform(t.lastInsertedLinkPath,o)),n(o)},t.insertText=o=>{if(t.selection&&Je.isCollapsed(t.selection)&&o===" "){const c=Array.from(y.nodes(t,{at:t.selection,match:u=>!y.isEditor(u)&&u.type==="link"}));if(t.selection&&c.length>0&&uo.equals(t.selection.anchor,y.end(t,c[0][1]))){q.insertNodes(t,{text:" ",type:"text"},{at:de.next(c[0][1]),select:!0});return}}r(o)},t.insertData=o=>{const c=o.getData("text/plain");if(c)try{new URL(c),t.shouldSaveLinkPath=!1,gr(t,{url:c});return}catch{}s(o)},t},qV=t=>Ae.isNode(t)&&!y.isEditor(t)&&t.type==="text",LV=t=>{const{normalizeNode:e}=t;return t.normalizeNode=n=>{const[r,s]=n;if(!Qe.isElement(r)&&!qV(r)){q.setNodes(t,{type:"text"},{at:s});return}e(n)},t},TV=["paragraph","heading-one","heading-two","heading-three","heading-four","heading-five","heading-six","list-ordered","list-unordered","image","quote","code"],IV=t=>typeof t=="string"&&TV.includes(t),[RV,MV]=Bn("BlocksEditor");function ce(t){const e=MV(t,r=>r),n=yo();return{...e,editor:n}}const DV=L(jo)`
  background: ${({theme:t})=>t.colors.neutral200};
`,$V=L(K)`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
  box-shadow: ${({theme:t})=>t.shadows.filterShadow};
`;function NV(t){const e=_.useRef(0),n=_.useRef(0),[r,s]=_.useState(0);return _.useEffect(()=>{n.current+=1,n.current!==e.current&&(s(o=>o+1),e.current=n.current)},[t]),{key:r,incrementSlateUpdatesCount:()=>e.current+=1}}const BV=(...t)=>e=>t.reduce((n,r)=>r(n),e),zV=_.forwardRef(({disabled:t=!1,name:e,onChange:n,value:r,error:s,...o},c)=>{const{formatMessage:i}=Z(),[a]=_.useState(()=>BV(Do,AV,LV,Yr,jV)(Xr())),[u,d]=_.useState(""),p=_.useId(),[h,f]=_.useState(!1),x=()=>{f(k=>!k)};_.useImperativeHandle(c,()=>({focus(){oe.focus(a)}}),[a]);const{key:m,incrementSlateUpdatesCount:w}=NV(r),C=k=>{a.operations.some(A=>A.type!=="set_selection")&&(w(),n(e,k))},v={...XU,...RU,...YU,...ZU,...PU,...tV,...SU};return l.jsxs(l.Fragment,{children:[l.jsx(me,{id:p,children:i({id:B("components.Blocks.dnd.instruction"),defaultMessage:"To reorder blocks, press Command or Control along with Shift and the Up or Down arrow keys"})}),l.jsx(me,{"aria-live":"assertive",children:u}),l.jsx(eo,{editor:a,initialValue:r||[{type:"paragraph",children:[{type:"text",text:""}]}],onChange:C,children:l.jsx(RV,{blocks:v,modifiers:SV,disabled:t,name:e,setLiveText:d,isExpandedMode:h,children:l.jsxs(kV,{error:s,disabled:t,onCollapse:x,ariaDescriptionId:p,children:[l.jsx(aV,{}),l.jsx(DV,{width:"100%"}),l.jsx(mV,{...o}),!h&&l.jsx($V,{label:i({id:B("components.Blocks.expand"),defaultMessage:"Expand"}),onClick:x,children:l.jsx(Qn,{})})]})})},m)]})}),PV=_.forwardRef(({label:t,name:e,required:n=!1,hint:r,labelAction:s,...o},c)=>{const i=_.useId(),a=ie(e);return l.jsx(G.Root,{id:i,name:e,hint:r,error:a.error,required:n,children:l.jsxs($,{direction:"column",alignItems:"stretch",gap:1,children:[l.jsx(G.Label,{action:s,children:t}),l.jsx(zV,{name:e,error:a.error,ref:c,value:a.value,onChange:a.onChange,ariaLabelId:i,...o}),l.jsx(G.Hint,{}),l.jsx(G.Error,{})]})})}),OV=_.memo(PV),Vt=(t,e={})=>{const n=r=>Object.entries(r).reduce((s,[o,c])=>{if("default"in c)s[o]=c.default;else if(c.type==="component"&&c.required){const i=n(e[c.component].attributes);c.repeatable?s[o]=c.min?[...Array(c.min).fill(i)]:[]:s[o]=i}else c.type==="dynamiczone"&&c.required&&(s[o]=[]);return s},{});return n(t.attributes)},wr=({disabled:t,name:e,onClick:n})=>{const{formatMessage:r}=Z(),s=ie(e);return l.jsx(l.Fragment,{children:l.jsx(F,{tag:"button",background:t?"neutral150":"neutral100",borderColor:s.error?"danger600":"neutral200",hasRadius:!0,disabled:t,onClick:n,paddingTop:9,paddingBottom:9,type:"button",style:{cursor:t?"not-allowed":"pointer"},children:l.jsxs($,{direction:"column",gap:2,children:[l.jsx($,{justifyContent:"center",color:t?"neutral500":"primary600",children:l.jsx(Yn,{width:"3.2rem",height:"3.2rem"})}),l.jsx($,{justifyContent:"center",children:l.jsx(W,{textColor:t?"neutral600":"primary600",variant:"pi",fontWeight:"bold",children:r({id:B("components.empty-repeatable"),defaultMessage:"No entry yet. Click to add one."})})})]})})})},FV=({attribute:t,name:e,children:n,layout:r})=>{const{formatMessage:s}=Z(),{value:o}=ie(e),c=It("NonRepeatableComponent",a=>a.level),i=c>0;return l.jsx(Rt,{id:o?.id,uid:t.component,level:c+1,type:"component",children:l.jsx(F,{background:"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:i,borderColor:i?"neutral200":void 0,children:l.jsx($,{direction:"column",alignItems:"stretch",gap:6,children:r.map((a,u)=>l.jsx(ue.Root,{gap:4,children:a.map(({size:d,...p})=>{const h=`${e}.${p.name}`,f=s({id:`content-manager.components.${t.component}.${p.name}`,defaultMessage:p.label});return l.jsx(ue.Item,{col:d,s:12,xs:12,direction:"column",alignItems:"stretch",children:n({...p,label:f,name:h})},h)})},u))})})})},UV=({attribute:t,disabled:e,name:n,mainField:r,children:s,layout:o})=>{const{toggleNotification:c}=qt(),{formatMessage:i}=Z(),{search:a}=Jr(),u=_.useMemo(()=>new URLSearchParams(a),[a]),{components:d}=De(),{value:p=[],error:h,rawError:f}=ie(n),x=pe("RepeatableComponent",R=>R.addFieldRow),m=pe("RepeatableComponent",R=>R.moveFieldRow),w=pe("RepeatableComponent",R=>R.removeFieldRow),{max:C=1/0}=t,[v,k]=_.useState(""),[j,A]=_.useState("");_.useEffect(()=>{const R=f&&Array.isArray(f)&&f.length>0,H=p&&Array.isArray(p)&&p.length>0;if(R&&H){const O=f.map((N,Q)=>p[Q]?p[Q].__temp_key__:null).filter(N=>!!N);O&&O.length>0&&k(N=>O.includes(N)?N:O[0])}},[f,p]);const g=_.useMemo(()=>{if(u.has("field")){const R=u.get("field");if(!R)return;const[,H]=R.split(`${n}.`);if(Ge(p,H,void 0)!==void 0){const[O]=H.split(".");return Ge(p,O,void 0)?.__temp_key__}}},[u,n,p]),M=Ro(p);_.useEffect(()=>{M&&M.length<p.length&&k(p[p.length-1].__temp_key__)},[p,M]),_.useEffect(()=>{typeof g=="string"&&k(g)},[g]);const b=()=>{k("")},D=()=>{if(p.length<C){const R=d[t.component],H=Vt(R,d),O=Ft(R,d)(H);x(n,O)}else p.length>=C&&c({type:"info",message:i({id:B("components.notification.info.maximum-requirement")})})},S=(R,H)=>{A(i({id:B("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${n}.${H}`,position:U(R)})),m(n,H,R)},T=R=>{k(R)},U=R=>`${R+1} of ${p.length}`,J=R=>{A(i({id:B("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${n}.${R}`}))},E=R=>{A(i({id:B("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${n}.${R}`,position:U(R)}))},z=R=>{A(i({id:B("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${n}.${R}`,position:U(R)}))},I=_.useId(),V=It("RepeatableComponent",R=>R.level);return p.length===0?l.jsx(wr,{disabled:e,name:n,onClick:D}):l.jsxs(F,{hasRadius:!0,children:[l.jsx(me,{id:I,children:i({id:B("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})}),l.jsx(me,{"aria-live":"assertive",children:j}),l.jsxs(VV,{$error:h,value:v,onValueChange:T,"aria-describedby":I,children:[p.map(({__temp_key__:R,id:H},O)=>{const N=`${n}.${O}`;return l.jsx(Rt,{id:H,uid:t.component,level:V+1,type:"repeatable",children:l.jsx(GV,{disabled:e,name:N,attribute:t,index:O,mainField:r,onMoveItem:S,onDeleteComponent:()=>{w(n,O),b()},toggleCollapses:b,onCancel:J,onDropItem:z,onGrabItem:E,__temp_key__:R,children:o.map((Q,ne)=>l.jsx(ue.Root,{gap:4,children:Q.map(({size:xe,...fe})=>{const ze=`${N}.${fe.name}`,ct=i({id:`content-manager.components.${t.component}.${fe.name}`,defaultMessage:fe.label});return l.jsx(ue.Item,{col:xe,s:12,xs:12,direction:"column",alignItems:"stretch",children:s({...fe,label:ct,name:ze})},ze)})},ne))})},R)}),l.jsx(HV,{disabled:e,onClick:D,startIcon:l.jsx(Qr,{}),children:i({id:B("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"})})]})]})},VV=L(Y.Root)`
  border: 1px solid
    ${({theme:t,$error:e})=>e?t.colors.danger600:t.colors.neutral200};
`,HV=L(qo)`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral200};
  padding-inline: ${t=>t.theme.spaces[6]};
  padding-block: ${t=>t.theme.spaces[3]};

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      background-color: ${t=>t.theme.colors.primary100};
    }
  }

  span {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 120ms ${t=>t.theme.motion.easings.easeOutQuad};
  }
`,GV=({disabled:t,index:e,name:n,mainField:r={name:"id",type:"integer"},children:s,onDeleteComponent:o,toggleCollapses:c,__temp_key__:i,...a})=>{const{formatMessage:u}=Z(),d=pe("RepeatableComponent",g=>Ge(g.values,[...n.split("."),r.name])),p=_.useRef(null),h=n.split(".").slice(0,-1).join("."),[{handlerId:f,isDragging:x,handleKeyDown:m},w,C,v,k]=Mt(!t,{type:`${Dt.COMPONENT}_${h}`,index:e,item:{index:e,displayedValue:d},onStart(){c()},...a});_.useEffect(()=>{k(nr(),{captureDraggingState:!1})},[k,e]);const j=Me(p,v),A=Me(w,C);return l.jsx(l.Fragment,{children:x?l.jsx(ZV,{}):l.jsxs(Y.Item,{ref:A,value:i,children:[l.jsxs(Y.Header,{children:[l.jsx(Y.Trigger,{children:d}),l.jsxs(Y.Actions,{children:[l.jsx(K,{variant:"ghost",onClick:o,label:u({id:B("containers.Edit.delete"),defaultMessage:"Delete"}),children:l.jsx(Lt,{})}),l.jsx(K,{ref:j,variant:"ghost",onClick:g=>g.stopPropagation(),"data-handler-id":f,label:u({id:B("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:m,children:l.jsx(Ke,{})})]})]}),l.jsx(Y.Content,{children:l.jsx($,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6,children:s})})]})})},ZV=()=>l.jsx(WV,{tag:"span",padding:6,background:"primary100"}),WV=L(F)`
  display: block;
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
`,KV=({label:t,required:e,name:n,attribute:r,disabled:s,labelAction:o,...c})=>{const{formatMessage:i}=Z(),a=ie(n),u=!r.repeatable&&a.value&&!s,{components:d}=De(),p=()=>{const h=d[r.component],f=Vt(h,d),x=Ft(h,d)(f);a.onChange(n,x)};return l.jsxs(G.Root,{error:a.error,required:e,children:[l.jsxs($,{justifyContent:"space-between",children:[l.jsxs(G.Label,{action:o,children:[t,r.repeatable&&l.jsxs(l.Fragment,{children:[" (",Array.isArray(a.value)?a.value.length:0,")"]})]}),u&&l.jsx(K,{label:i({id:B("components.reset-entry"),defaultMessage:"Reset Entry"}),variant:"ghost",onClick:()=>{a.onChange(n,null)},children:l.jsx(Lt,{})})]}),!r.repeatable&&!a.value&&l.jsx(wr,{disabled:s,name:n,onClick:p}),!r.repeatable&&a.value?l.jsx(FV,{attribute:r,name:n,disabled:s,...c,children:c.children}):null,r.repeatable&&l.jsx(UV,{attribute:r,name:n,disabled:s,...c,children:c.children}),l.jsx(G.Error,{})]})},JV=_.memo(KV),QV=({hasError:t,isDisabled:e,isOpen:n,children:r,onClick:s})=>l.jsx(XV,{type:"button",onClick:s,disabled:e,background:"neutral0",style:{cursor:e?"not-allowed":"pointer"},variant:"tertiary",children:l.jsxs($,{tag:"span",gap:2,children:[l.jsx(YV,{"aria-hidden":!0,$isOpen:n,$hasError:t&&!n}),l.jsx(W,{variant:"pi",fontWeight:"bold",textColor:t&&!n?"danger600":"neutral600",children:r})]})}),YV=L(Yn)`
  height: ${({theme:t})=>t.spaces[6]};
  width: ${({theme:t})=>t.spaces[6]};
  transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};

  > circle {
    fill: ${({theme:t,$hasError:e})=>e?t.colors.danger200:t.colors.neutral150};
  }
  > path {
    fill: ${({theme:t,$hasError:e})=>e?t.colors.danger600:t.colors.neutral500};
  }
`,XV=L(he)`
  padding-left: ${({theme:t})=>t.spaces[3]};
  border-radius: 26px;
  box-shadow: ${({theme:t})=>t.shadows.filterShadow};
  height: 5rem;
`,eH=({category:t,components:e=[],variant:n="primary",onAddComponent:r})=>{const{formatMessage:s}=Z();return l.jsxs(Y.Item,{value:t,children:[l.jsx(Y.Header,{variant:n,children:l.jsx(Y.Trigger,{children:s({id:t,defaultMessage:t})})}),l.jsx(Y.Content,{children:l.jsx(tH,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3,children:e.map(({uid:o,displayName:c,icon:i})=>l.jsx(nH,{tag:"button",type:"button",background:"neutral100",justifyContent:"center",onClick:r(o),hasRadius:!0,height:"8.4rem",shrink:0,borderColor:"neutral200",children:l.jsxs($,{direction:"column",gap:1,alignItems:"center",justifyContent:"center",children:[l.jsx(To,{color:"currentColor",background:"primary200",icon:i}),l.jsx(W,{variant:"pi",fontWeight:"bold",children:c})]})},o))})})]})},tH=L(F)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 14rem);
  grid-gap: ${({theme:t})=>t.spaces[1]};
`,nH=L($)`
  color: ${({theme:t})=>t.colors.neutral600};
  cursor: pointer;

  @media (prefers-reduced-motion: no-preference) {
    transition: color 120ms ${t=>t.theme.motion.easings.easeOutQuad};
  }

  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};
    color: ${({theme:t})=>t.colors.primary600};
  }
`,rH=({dynamicComponentsByCategory:t={},isOpen:e,onClickAddComponent:n})=>{const{formatMessage:r}=Z(),s=o=>()=>{n(o)};return e?l.jsxs(F,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0,children:[l.jsx($,{justifyContent:"center",children:l.jsx(W,{fontWeight:"bold",textColor:"neutral600",children:r({id:B("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"})})}),l.jsx(F,{paddingTop:2,children:l.jsx(Y.Root,{defaultValue:Object.keys(t)[0],children:Object.entries(t).map(([o,c],i)=>l.jsx(eH,{category:o,components:c,onAddComponent:s,variant:i%2===1?"primary":"secondary"},o))})})]}):null},oH=({hint:t,label:e,required:n,name:r})=>{const{formatMessage:s}=Z(),o=s({id:"components.NotAllowedInput.text",defaultMessage:"No permissions to see this field"});return l.jsxs(G.Root,{id:r,hint:t,name:r,required:n,children:[l.jsx(G.Label,{children:e}),l.jsx(Pn,{disabled:!0,placeholder:o,startAction:l.jsx(Br,{fill:"neutral600"}),type:"text",value:""}),l.jsx(G.Hint,{})]})},sH=Vr.injectEndpoints({endpoints:t=>({getDefaultUID:t.query({query:({params:e,...n})=>({url:"/content-manager/uid/generate",method:"POST",data:n,config:{params:e}}),transformResponse:e=>e.data}),generateUID:t.mutation({query:({params:e,...n})=>({url:"/content-manager/uid/generate",method:"POST",data:n,config:{params:e}}),transformResponse:e=>e.data}),getAvailability:t.query({query:({params:e,...n})=>({url:"/content-manager/uid/check-availability",method:"POST",data:n,config:{params:e}}),providesTags:(e,n,r)=>[{type:"UidAvailability",id:r.contentTypeUID}]})})}),{useGenerateUIDMutation:cH,useGetDefaultUIDQuery:iH,useGetAvailabilityQuery:aH}=sH,lH=/^[A-Za-z0-9-_.~]*$/,uH=_.forwardRef(({hint:t,label:e,labelAction:n,name:r,required:s,...o},c)=>{const{model:i,id:a}=De(),u=pe("InputUID",O=>O.values),[d,p]=_.useState(),[h,f]=_.useState(!1),x=zr(Pr)!==null,m=ie(r),w=Io(m.value,300),C=w!==m.initialValue,{toggleNotification:v}=qt(),{_unstableFormatAPIError:k}=Or(),{formatMessage:j}=Z(),[{query:A}]=Fr(),g=_.useMemo(()=>Ur(A),[A]),{data:M,isLoading:b,error:D}=iH({contentTypeUID:i,field:r,data:{id:a??"",...u},params:g},{skip:m.value||!s});_.useEffect(()=>{D&&v({type:"warning",message:k(D)})},[D,k,v]),_.useEffect(()=>{M&&m.value===void 0&&m.onChange(r,M)},[M,m,r]);const[S,{isLoading:T}]=cH(),U=async()=>{try{const O=await S({contentTypeUID:i,field:r,data:{id:a??"",...u},params:g});"data"in O?m.onChange(r,O.data):v({type:"danger",message:k(O.error)})}catch{v({type:"danger",message:j({id:"notification.error",defaultMessage:"An error occurred."})})}},{data:J,isLoading:E,error:z}=aH({contentTypeUID:i,field:r,value:w?w.trim():"",params:g},{skip:!((C||x)&&w&&lH.test(w.trim()))});_.useEffect(()=>{z&&v({type:"warning",message:k(z)})},[z,k,v]),_.useEffect(()=>{p(J);let O;return J?.isAvailable&&(O=window.setTimeout(()=>{p(void 0)},4e3)),()=>{O&&clearTimeout(O)}},[J]);const I=b||T||E,V=Hr(r),R=Me(c,V),H=(C||x)&&w!=null&&d&&!h;return l.jsxs(G.Root,{hint:t,name:r,error:m.error,required:s,children:[l.jsx(G.Label,{action:n,children:e}),l.jsx(Pn,{ref:R,disabled:o.disabled,endAction:l.jsxs($,{position:"relative",gap:1,children:[H&&l.jsxs(Tn,{alignItems:"center",gap:1,justifyContent:"flex-end",$available:!!d?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px",children:[d?.isAvailable?l.jsx(Gr,{}):l.jsx(Zr,{}),l.jsx(W,{textColor:d.isAvailable?"success600":"danger600",variant:"pi",children:j(d.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"})})]}),!o.disabled&&l.jsxs(l.Fragment,{children:[h&&l.jsx(Tn,{alignItems:"center",justifyContent:"flex-end",gap:1,children:l.jsx(W,{textColor:"primary600",variant:"pi",children:j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"})})}),l.jsx(dH,{onClick:U,label:j({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:I?l.jsx(hH,{"data-testid":"loading-wrapper",children:l.jsx(Wr,{})}):l.jsx(Kr,{})})]})]}),onChange:m.onChange,value:m.value??"",...o}),l.jsx(G.Error,{}),l.jsx(G.Hint,{})]})}),dH=L(G.Action)`
  width: 1.6rem;

  svg {
    height: 1.6rem;
    width: 1.6rem;
    path {
      fill: ${({theme:t})=>t.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Tn=L($)`
  svg {
    height: 1.2rem;
    width: 1.2rem;

    path {
      fill: ${({theme:t,$available:e})=>e?t.colors.success600:t.colors.danger600};
    }
  }
`,pH=lo`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,hH=L($)`
  animation: ${pH} 2s infinite linear;
`,fH=_.memo(uH),Ce=new hU({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(t,e){if(e&&e!=="auto"&&at.getLanguage(e))return'<pre class="hljs language-'+Ce.utils.escapeHtml(e.toLowerCase())+'"><code>'+at.highlight(e,t,!0).value+"</code></pre>";if(e==="auto"){const n=at.highlightAuto(t);return'<pre class="hljs language-'+Ce.utils.escapeHtml(n.language)+'"><code>'+n.value+"</code></pre>"}return'<pre class="hljs"><code>'+Ce.utils.escapeHtml(t)+"</code></pre>"}}).use(ho).use(Wt,"warning").use(Wt,"tip").use(fo).use(go).use(mo).use(bo).use(xo).use(ko).use(vo);Ce.renderer.rules.footnote_ref=(t,e,n,r,s)=>'<sup class="footnote-ref"><span>'+s.rules.footnote_caption?.(t,e,n,r,s)+"</span></sup>";Ce.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">↩︎</span>';const Cr=({data:t=""})=>{const e=_.useMemo(()=>Gt(Ce.render(t.replaceAll("\\n",`
`)||""),{...Gt.defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}}),[t]);return l.jsx(gH,{children:l.jsx("div",{dangerouslySetInnerHTML:{__html:e}})})},gH=L.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
  font-size: 1.4rem;
  background-color: ${({theme:t})=>t.colors.neutral0};
  color: ${({theme:t})=>t.colors.neutral800};
  line-height: ${({theme:t})=>t.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:t})=>t.spaces[2]};
    margin-block-end: ${({theme:t})=>t.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:t})=>t.spaces[2]};
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 600;
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:t})=>t.spaces[8]};
    margin-bottom: ${({theme:t})=>t.spaces[7]};
    font-size: 1.4rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:t})=>t.colors.neutral150};
    font-style: italic;
    padding: ${({theme:t})=>t.spaces[2]} ${({theme:t})=>t.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:t})=>t.colors.neutral150};

      th {
        padding: ${({theme:t})=>t.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:t})=>t.spaces[4]};
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: 1.4rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:t})=>t.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;var Ve=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,mH=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,bH=/[*+-]\s/;function xH(t){if(t.getOption("disableInput"))return St.Pass;for(var e=t.listSelections(),n=[],r=0;r<e.length;r++){var s=e[r].head,o=t.getStateAfter(s.line),c=o.list!==!1,i=o.quote!==0,a=t.getLine(s.line),u=Ve.exec(a),d=/^\s*$/.test(a.slice(0,s.ch));if(!e[r].empty()||!c&&!i||!u||d){t.execCommand("newlineAndIndent");return}if(mH.test(a)){var p=i&&/>\s*$/.test(a),h=!/>\s*$/.test(a);(p||h)&&t.replaceRange("",{line:s.line,ch:0},{line:s.line,ch:s.ch+1}),n[r]=`
`}else{var f=u[1],x=u[5],m=!(bH.test(u[2])||u[2].indexOf(">")>=0),w=m?parseInt(u[3],10)+1+u[4]:u[2].replace("x"," ");n[r]=`
`+f+w+x,m&&kH(t,s)}}t.replaceSelections(n)}function kH(t,e){var n=e.line,r=0,s=0,o=Ve.exec(t.getLine(n)),c=o[1];do{r+=1;var i=n+r,a=t.getLine(i),u=Ve.exec(a);if(u){var d=u[1],p=parseInt(o[3],10)+r-s,h=parseInt(u[3],10),f=h;if(c===d&&!isNaN(h))p===h&&(f=h+1),p>h&&(f=p+1),t.replaceRange(a.replace(Ve,d+f+u[4]+u[5]),{line:i,ch:0},{line:i,ch:a.length});else{if(c.length>d.length||c.length<d.length&&r===1)return;s+=1}}}while(u)}const vH=_.forwardRef(({disabled:t,editorRef:e,error:n,isPreviewMode:r,isExpandMode:s,name:o,onChange:c,placeholder:i,textareaRef:a,value:u},d)=>{const p=_.useRef(c);return _.useEffect(()=>{e.current&&e.current.toTextArea(),e.current=St.fromTextArea(a.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:i,spellcheck:!0,inputStyle:"contenteditable"}),St.commands.newlineAndIndentContinueMarkdownList=xH,e.current.on("change",h=>{p.current(o,h.getValue())})},[e,a,o,i]),_.useEffect(()=>{u&&!e.current.hasFocus()&&e.current.setValue(u)},[e,u]),_.useEffect(()=>{r||t?e.current.setOption("readOnly","nocursor"):e.current.setOption("readOnly",!1)},[t,r,e]),_.useEffect(()=>{n?e.current.setOption("screenReaderLabel",n):e.current.setOption("screenReaderLabel","Editor")},[e,n]),_.useImperativeHandle(d,()=>({focus(){e.current.getInputField().focus()},scrollIntoView(h){e.current.getInputField().scrollIntoView(h)}}),[e]),l.jsxs(yH,{children:[l.jsx(_H,{$isExpandMode:s,$disabled:t||r,children:l.jsx("textarea",{ref:a})}),r&&l.jsx(Cr,{data:u})]})}),yH=L.div`
  position: relative;
  height: calc(100% - 48px);
`,_H=L.div`
  cursor: ${({$disabled:t})=>t?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:t})=>t.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: 1.4rem;
    height: ${({$isExpandMode:t})=>t?"100%":"410px"}; //  512px(total height) - 48px (header) - 52px(footer) - 2px border
    color: ${({theme:t})=>t.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:t})=>`${t.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:t})=>t.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:t})=>t.colors.neutral800} !important;
  }
`,wH=({children:t,isExpandMode:e,error:n,previewContent:r="",onCollapse:s})=>{const{formatMessage:o}=Z();return _.useEffect(()=>(e&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[e]),e?l.jsx(On,{role:"dialog","aria-modal":!1,children:l.jsx(Fn,{onEscape:s,children:l.jsx(CH,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:s,children:l.jsx(F,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"90%",height:"90%",onClick:c=>c.stopPropagation(),children:l.jsxs($,{height:"100%",alignItems:"flex-start",children:[l.jsx(EH,{flex:"1",height:"100%",children:t}),l.jsxs($,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%",children:[l.jsx($,{height:"4.8rem",background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%",children:l.jsxs(SH,{onClick:s,variant:"tertiary",size:"M",children:[l.jsx(W,{children:o({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})}),l.jsx(Un,{})]})}),l.jsx(F,{position:"relative",height:"100%",width:"100%",children:l.jsx(Cr,{data:r})})]})]})})})})}):l.jsx($,{borderColor:n?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0,direction:"column",alignItems:"stretch",children:t})},CH=L($)`
  background: ${({theme:t})=>`${t.colors.neutral800}${Math.floor(.2*255).toString(16).padStart(2,"0")}`};
`,EH=L(F)`
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,SH=L(he)`
  background-color: transparent;
  border: none;
  align-items: center;

  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: ${({theme:t})=>t.fontWeights.regular};
  }

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};

    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`,Er=(t,e)=>{let n;switch(t){case"Strikethrough":n=`~~${e}~~`;break;case"Bold":n=`**${e}**`;break;case"Italic":n=`_${e}_`;break;case"Underline":n=`<u>${e}</u>`;break;case"Code":n=`\`\`\`
${e}
\`\`\``;break;case"Link":n=`[${e}](link)`;break;case"Quote":n=`>${e}`;break;default:n=e}return n},Sr=t=>{let e;const n={start:t.length,end:0};switch(t){case"Strikethrough":e=`~~${t}~~`,n.end=2;break;case"Bold":e=`**${t}**`,n.end=2;break;case"Italic":e=`_${t}_`,n.end=1;break;case"alt":e=`[${t}]()`,n.end=3;break;case"Underline":e=`<u>${t}</u>`,n.end=4;break;case"Code":e=`\`\`\`
${t}
\`\`\``,n.end=3;break;case"Link":e=`[${t}](link)`,n.end=7;break;case"Quote":e=`>${t}`,n.end=0;break;default:e=""}return{editedText:e,selection:n}},Ar=t=>{let e;switch(t){case"BulletList":e="- ";break;case"NumberList":e="1. ";break;case"h1":e="# ";break;case"h2":e="## ";break;case"h3":e="### ";break;case"h4":e="#### ";break;case"h5":e="##### ";break;case"h6":e="###### ";break;default:return""}return e},In=(t,e)=>{const n=t.current.getSelection();let r;if(n){const s=Er(e,n);t.current.replaceSelection(s),t.current.focus()}else{r=Sr(e),t.current.replaceSelection(r.editedText),t.current.focus();const{line:s,ch:o}=t.current.getCursor(),c=o-r.selection.end,i=o-r.selection.end-r.selection.start;t.current.setSelection({line:s,ch:i},{line:s,ch:c})}},AH=(t,e)=>{const n=t.current.getDoc(),r=e==="BulletList"?"- ":"1. ";if(n.somethingSelected()){const s=n.listSelections();let o=null;t.current.operation(function(){s.forEach(function(c){const i=[c.head.line,c.anchor.line].sort();o==null&&(o=n.getLine(i[0]).startsWith(r));for(let a=i[0];a<=i[1];a++)if(o)n.getLine(a).startsWith(r)&&n.replaceRange("",{line:a,ch:0},{line:a,ch:r.length});else{const u=e==="BulletList"?"- ":`${a+1}. `;n.replaceRange(u,{line:a,ch:0})}})})}else{const{line:s}=n.getCursor(),o=Ar(e),c=t.current.getLine(s),i=o+c;t.current.setSelection({line:s,ch:0},{line:s,ch:c.length}),t.current.replaceSelection(i)}t.current.focus()},jH=(t,e)=>{const{line:n}=t.current.getCursor(),r=Ar(e),s=t.current.getLine(n),o=s.replace(/#{1,6}\s/g,"").trim(),c=r+o;t.current.setSelection({line:n,ch:0},{line:n,ch:s.length}),t.current.replaceSelection(c),setTimeout(()=>{const i=t.current.getLine(n).length;t.current.focus(),t.current.setCursor({line:n,ch:i})},0)},qH=(t,e)=>{let{line:n}=t.current.getCursor();const{ch:r}=t.current.getCursor();e.forEach((s,o)=>{let c=t.current.getLine(n).length;t.current.setCursor({line:n,ch:c}),(o>0||o===0&&r!==0)&&(c=t.current.getLine(n).length,t.current.setCursor({line:n,ch:c}),n++,t.current.replaceSelection(`
`)),s.mime.includes("image")?t.current.replaceSelection(`![${s.alt}](${s.url})`):t.current.replaceSelection(`[${s.alt}](${s.url})`)}),setTimeout(()=>t.current.focus(),0)},LH=(t,e,n,r,s)=>{const o=Er(e,s),c=t.current.getRange({line:n+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:n+1,ch:0},{line:1/0,ch:1/0}),t.current.replaceSelection(""),t.current.setCursor({line:n,ch:r}),t.current.replaceSelection(`
`),t.current.replaceSelection(o),e==="Code"){const{line:i}=t.current.getCursor();t.current.setCursor({line:i-1,ch:s.length})}t.current.replaceRange(c,{line:n+4,ch:0},{line:1/0,ch:1/0}),t.current.focus()},TH=(t,e,n,r)=>{const s=Sr(e),o=t.current.getRange({line:n+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:n+1,ch:0},{line:1/0,ch:1/0}),t.current.setCursor({line:n,ch:r}),t.current.replaceSelection(`
`),t.current.replaceSelection(s.editedText),e==="Code")n+=2,t.current.setSelection({line:n,ch:0},{line:n,ch:4});else{n+=1;const{ch:c}=t.current.getCursor(),i=c-s.selection.end,a=c-s.selection.end-s.selection.start;t.current.setSelection({line:n,ch:a},{line:n,ch:i})}t.current.replaceRange(o,{line:n+2,ch:0},{line:1/0,ch:1/0}),t.current.focus()},IH=(t,e)=>{const n=t.current.getSelection(),{line:r}=t.current.getCursor(),s=t.current.getLine(r).length;n?LH(t,e,r,s,n):TH(t,e,r,s)},Rn=L(Tt)`
  margin-left: ${({theme:t})=>t.spaces[4]};
`,Mn=L(K)`
  margin: ${({theme:t})=>`0 ${t.spaces[2]}`};
`,RH=L(Tt)`
  margin-right: ${({theme:t})=>`${t.spaces[2]}`};
`,MH=L(he)`
  background-color: transparent;
  border: none;
  align-items: center;

  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: ${({theme:t})=>t.fontWeights.regular};
  }

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};
    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`,DH=({onToggleExpand:t})=>{const{formatMessage:e}=Z();return l.jsx(F,{padding:2,background:"neutral100",borderRadius:"0 0 0.4rem 0.4rem",children:l.jsx($,{justifyContent:"flex-end",alignItems:"flex-end",children:l.jsxs(MH,{id:"expand",onClick:t,variant:"tertiary",size:"M",children:[l.jsx(W,{textColor:"neutral800",children:e({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})}),l.jsx(Qn,{})]})})})},$H=({disabled:t,editorRef:e,isExpandMode:n,isPreviewMode:r,onActionClick:s,onToggleMediaLib:o,onTogglePreviewMode:c})=>{const[i,a]=_.useState(!1),{formatMessage:u}=Z(),d=u({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"});_.useRef(null);const p=()=>{a(h=>!h)};return t||r?l.jsxs($,{padding:2,background:"neutral100",justifyContent:"space-between",borderRadius:"0.4rem 0.4rem 0 0",children:[l.jsxs($,{children:[l.jsx(G.Root,{children:l.jsxs(He,{disabled:!0,placeholder:d,"aria-label":d,size:"S",children:[l.jsx(X,{value:"h1",children:"h1"}),l.jsx(X,{value:"h2",children:"h2"}),l.jsx(X,{value:"h3",children:"h3"}),l.jsx(X,{value:"h4",children:"h4"}),l.jsx(X,{value:"h5",children:"h5"}),l.jsx(X,{value:"h6",children:"h6"})]})}),l.jsxs(Rn,{children:[l.jsx(K,{disabled:!0,label:"Bold",name:"Bold",children:l.jsx(wt,{})}),l.jsx(K,{disabled:!0,label:"Italic",name:"Italic",children:l.jsx(Ct,{})}),l.jsx(K,{disabled:!0,label:"Underline",name:"Underline",children:l.jsx(Et,{})})]}),l.jsx(Mn,{disabled:!0,label:"More",children:l.jsx(_t,{})})]}),!n&&l.jsx(he,{onClick:c,variant:"tertiary",children:u({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"})})]}):l.jsxs($,{padding:2,background:"neutral100",justifyContent:"space-between",borderRadius:"0.4rem 0.4rem 0 0",children:[l.jsxs($,{children:[l.jsx(G.Root,{children:l.jsxs(He,{placeholder:d,"aria-label":d,onChange:h=>s(h,e),size:"S",children:[l.jsx(X,{value:"h1",children:"h1"}),l.jsx(X,{value:"h2",children:"h2"}),l.jsx(X,{value:"h3",children:"h3"}),l.jsx(X,{value:"h4",children:"h4"}),l.jsx(X,{value:"h5",children:"h5"}),l.jsx(X,{value:"h6",children:"h6"})]})}),l.jsxs(Rn,{children:[l.jsx(K,{onClick:()=>s("Bold",e),label:"Bold",name:"Bold",children:l.jsx(wt,{})}),l.jsx(K,{onClick:()=>s("Italic",e),label:"Italic",name:"Italic",children:l.jsx(Ct,{})}),l.jsx(K,{onClick:()=>s("Underline",e),label:"Underline",name:"Underline",children:l.jsx(Et,{})})]}),l.jsxs(we.Root,{children:[l.jsx(we.Trigger,{children:l.jsx(Mn,{label:"More",children:l.jsx(_t,{})})}),l.jsx(we.Content,{sideOffset:12,children:l.jsxs($,{padding:2,children:[l.jsxs(RH,{children:[l.jsx(K,{onClick:()=>s("Strikethrough",e,p),label:"Strikethrough",name:"Strikethrough",children:l.jsx(Vn,{})}),l.jsx(K,{onClick:()=>s("BulletList",e,p),label:"BulletList",name:"BulletList",children:l.jsx(Hn,{})}),l.jsx(K,{onClick:()=>s("NumberList",e,p),label:"NumberList",name:"NumberList",children:l.jsx(Gn,{})})]}),l.jsxs(Tt,{children:[l.jsx(K,{onClick:()=>s("Code",e,p),label:"Code",name:"Code",children:l.jsx(Zn,{})}),l.jsx(K,{onClick:()=>{p(),o()},label:"Image",name:"Image",children:l.jsx(Wn,{})}),l.jsx(K,{onClick:()=>s("Link",e,p),label:"Link",name:"Link",children:l.jsx(Kn,{})}),l.jsx(K,{onClick:()=>s("Quote",e,p),label:"Quote",name:"Quote",children:l.jsx(Jn,{})})]})]})})]})]}),c&&l.jsx(he,{onClick:c,variant:"tertiary",children:u({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"})})]})},NH=_.forwardRef(({hint:t,disabled:e,label:n,name:r,placeholder:s,required:o,labelAction:c},i)=>{const a=ie(r),u=_.useRef(null),d=_.useRef(null),[p,h]=_.useState(!1),[f,x]=_.useState(!1),[m,w]=_.useState(!1),v=We("ImageDialog",b=>b.components)["media-library"],k=()=>x(b=>!b),j=()=>h(b=>!b),A=()=>{h(!1),w(b=>!b)},g=(b,D,S)=>{switch(b){case"Link":case"Strikethrough":{In(D,b),S?.();break}case"Code":case"Quote":{IH(D,b),S?.();break}case"Bold":case"Italic":case"Underline":{In(D,b);break}case"BulletList":case"NumberList":{AH(D,b),S?.();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{jH(D,b);break}}},M=b=>{const D=b.map(S=>({alt:S.alternativeText||S.name,url:tr(S.url),mime:S.mime}));qH(d,D),x(!1)};return l.jsxs(G.Root,{name:r,hint:t,error:a.error,required:o,children:[l.jsxs($,{direction:"column",alignItems:"stretch",gap:1,children:[l.jsx(G.Label,{action:c,children:n}),l.jsxs(wH,{isExpandMode:m,error:a.error,previewContent:a.value,onCollapse:A,children:[l.jsx($H,{isExpandMode:m,editorRef:d,isPreviewMode:p,onActionClick:g,onToggleMediaLib:k,onTogglePreviewMode:m?void 0:j,disabled:e}),l.jsx(vH,{disabled:e,isExpandMode:m,editorRef:d,error:a.error,isPreviewMode:p,name:r,onChange:a.onChange,placeholder:s,textareaRef:u,value:a.value,ref:i}),!m&&l.jsx(DH,{onToggleExpand:A})]}),l.jsx(G.Hint,{}),l.jsx(G.Error,{})]}),f&&l.jsx(v,{onClose:k,onSelectAssets:M})]})}),BH=_.memo(NH),jr=({visible:t,hint:e,...n})=>{const{id:r,document:s,collectionType:o}=De(),c=pe("InputRenderer",b=>b.disabled),i=JH("isInDynamicZone",b=>b.isInDynamicZone),a=Pe("InputRenderer",b=>b.canCreateFields),u=Pe("InputRenderer",b=>b.canReadFields),d=Pe("InputRenderer",b=>b.canUpdateFields),p=Pe("InputRenderer",b=>b.canUserAction);let h=r;o===Nr&&(h=s?.documentId);const f=h?d:a,x=h?u:a,m=p(n.name,x,n.type),w=p(n.name,f,n.type),C=We("InputRenderer",b=>b.fields),{lazyComponentStore:v}=vU(vt(n.attribute)?[n.attribute.customField]:void 0),k=zH(e,n.attribute),{edit:{components:j}}=zn(),A=ie(n.name);if(!t)return null;if(!m&&!i)return l.jsx(oH,{hint:k,...n});const g=!w&&!i||n.disabled||c;if(vt(n.attribute)){const b=v[n.attribute.customField];return b?l.jsx(b,{...n,...A,hint:k,disabled:g}):l.jsx(it,{...n,hint:k,type:n.attribute.customField,disabled:g})}const M=Object.keys(C);if(!vt(n.attribute)&&M.includes(n.type)){const b=C[n.type];return l.jsx(b,{...n,hint:k,disabled:g})}switch(n.type){case"blocks":return l.jsx(OV,{...n,hint:k,type:n.type,disabled:g});case"component":return l.jsx(JV,{...n,hint:k,layout:j[n.attribute.component].layout,disabled:g,children:T=>l.jsx(jr,{...T})});case"dynamiczone":return l.jsx(QH,{...n,hint:k,disabled:g});case"relation":return l.jsx(Lo,{...n,hint:k,disabled:g});case"richtext":return l.jsx(BH,{...n,hint:k,type:n.type,disabled:g});case"uid":return l.jsx(fH,{...n,hint:k,type:n.type,disabled:g});case"enumeration":return l.jsx(it,{...n,hint:k,options:n.attribute.enum.map(T=>({value:T})),type:n.customField?"custom-field":n.type,disabled:g});default:const{unique:b,mainField:D,...S}=n;return l.jsx(it,{...S,hint:k,type:n.customField?"custom-field":n.type,disabled:g})}},vt=t=>"customField"in t&&typeof t.customField=="string",zH=(t=void 0,e)=>{const{formatMessage:n}=Z(),{maximum:r,minimum:s}=PH(e);if(!r&&!s)return t;const o=["biginteger","integer","number","dynamiczone","component"].includes(e.type)?null:n({id:"content-manager.form.Input.hint.character.unit",defaultMessage:"{maxValue, plural, one { character} other { characters}}"},{maxValue:Math.max(s||0,r||0)});return n({id:"content-manager.form.Input.hint.text",defaultMessage:"{min, select, undefined {} other {min. {min}}}{divider}{max, select, undefined {} other {max. {max}}}{unit}{br}{description}"},{min:s,max:r,description:t,unit:o,divider:typeof s=="number"&&typeof r=="number"?n({id:"content-manager.form.Input.hint.minMaxDivider",defaultMessage:" / "}):null,br:l.jsx("br",{})})},PH=t=>"min"in t||"max"in t?{maximum:Number.isNaN(Number(t.max))?void 0:Number(t.max),minimum:Number.isNaN(Number(t.min))?void 0:Number(t.min)}:"maxLength"in t||"minLength"in t?{maximum:t.maxLength,minimum:t.minLength}:{maximum:void 0,minimum:void 0},OH=_.memo(jr),FH=({componentUid:t,disabled:e,index:n,name:r,onRemoveComponentClick:s,onMoveComponent:o,onGrabItem:c,onDropItem:i,onCancel:a,dynamicComponentsByCategory:u={},onAddComponent:d})=>{const{formatMessage:p}=Z(),h=pe("DynamicComponent",I=>I.values),{edit:{components:f}}=zn(),x=_.useMemo(()=>{const{mainField:I}=f[t]?.settings??{mainField:"id"},V=Ge(h,`${r}.${n}.${I}`),R=I==="id"||!V?"":String(V).trim();return R.length>0?`- ${R}`:R},[t,f,h,r,n]),{icon:m,displayName:w}=_.useMemo(()=>{const[I]=t.split("."),{icon:V,displayName:R}=(u[I]??[]).find(H=>H.uid===t)??{icon:null,displayName:null};return{icon:V,displayName:R}},[t,u]),[{handlerId:C,isDragging:v,handleKeyDown:k},j,A,g,M]=Mt(!e,{type:`${Dt.DYNAMIC_ZONE}_${r}`,index:n,item:{index:n,displayedValue:`${w} ${x}`,icon:m},onMoveItem:o,onDropItem:i,onGrabItem:c,onCancel:a});_.useEffect(()=>{M(nr(),{captureDraggingState:!1})},[M,n]);const b=_.useId(),{value:D=[],rawError:S}=ie(`${r}.${n}`),[T,U]=_.useState("");_.useEffect(()=>{S&&D&&U(b)},[S,D,b]);const J=Me(j,A),E=e?null:l.jsxs(l.Fragment,{children:[l.jsx(K,{variant:"ghost",label:p({id:B("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:x}),onClick:s,children:l.jsx(Lt,{})}),l.jsx(K,{variant:"ghost",onClick:I=>I.stopPropagation(),"data-handler-id":C,ref:g,label:p({id:B("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:k,children:l.jsx(Ke,{})}),l.jsxs(re.Root,{children:[l.jsxs(re.Trigger,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[l.jsx(_t,{"aria-hidden":!0,focusable:!1}),l.jsx(me,{tag:"span",children:p({id:B("components.DynamicZone.more-actions"),defaultMessage:"More actions"})})]}),l.jsxs(re.Content,{children:[l.jsxs(re.SubRoot,{children:[l.jsx(re.SubTrigger,{children:p({id:B("components.DynamicZone.add-item-above"),defaultMessage:"Add component above"})}),l.jsx(re.SubContent,{children:Object.entries(u).map(([I,V])=>l.jsxs(_.Fragment,{children:[l.jsx(re.Label,{children:I}),V.map(({displayName:R,uid:H})=>l.jsx(Ht,{onSelect:()=>d(H,n),children:R},t))]},I))})]}),l.jsxs(re.SubRoot,{children:[l.jsx(re.SubTrigger,{children:p({id:B("components.DynamicZone.add-item-below"),defaultMessage:"Add component below"})}),l.jsx(re.SubContent,{children:Object.entries(u).map(([I,V])=>l.jsxs(_.Fragment,{children:[l.jsx(re.Label,{children:I}),V.map(({displayName:R,uid:H})=>l.jsx(Ht,{onSelect:()=>d(H,n+1),children:R},t))]},I))})]})]})]})]}),z=x?`${w} ${x}`:w;return l.jsxs(ZH,{tag:"li",width:"100%",children:[l.jsx($,{justifyContent:"center",children:l.jsx(HH,{background:"neutral200"})}),l.jsx(UH,{ref:J,hasRadius:!0,children:v?l.jsx(GH,{}):l.jsx(Y.Root,{value:T,onValueChange:U,children:l.jsxs(Y.Item,{value:b,children:[l.jsxs(Y.Header,{children:[l.jsx(Y.Trigger,{icon:m&&lt[m]?lt[m]:lt.dashboard,children:z}),l.jsx(Y.Actions,{children:E})]}),l.jsx(Y.Content,{children:l.jsx(VH,{background:"neutral0",children:l.jsx(F,{paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,children:l.jsx(ue.Root,{gap:4,children:f[t]?.layout?.map((I,V)=>l.jsx(ue.Item,{col:12,s:12,xs:12,direction:"column",alignItems:"stretch",children:l.jsx(ue.Root,{gap:4,children:I.map(({size:R,...H})=>{const O=`${r}.${n}.${H.name}`,N={...H,label:p({id:`content-manager.components.${t}.${H.name}`,defaultMessage:H.label})};return l.jsx(ue.Item,{col:R,s:12,xs:12,direction:"column",alignItems:"stretch",children:l.jsx(OH,{...N,name:O})},O)})})},V))})})})})]})})})]})},UH=L(F)`
  > div:first-child {
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  }
`,VH=L(F)`
  border-radius: 0 0 ${({theme:t})=>t.spaces[1]} ${({theme:t})=>t.spaces[1]};
`,HH=L(F)`
  width: ${({theme:t})=>t.spaces[2]};
  height: ${({theme:t})=>t.spaces[4]};
`,GH=L.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`,ZH=L(F)`
  list-style: none;
  padding: 0;
  margin: 0;
`,WH=({hint:t,label:e,labelAction:n,name:r,numberOfComponents:s=0,required:o})=>l.jsx($,{justifyContent:"center",children:l.jsx(F,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,borderRadius:"26px",background:"neutral0",shadow:"filterShadow",color:"neutral500",children:l.jsxs($,{direction:"column",justifyContent:"center",children:[l.jsxs($,{maxWidth:"35.6rem",children:[l.jsxs(W,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0,children:[e||r," "]}),l.jsxs(W,{variant:"pi",textColor:"neutral600",fontWeight:"bold",children:["(",s,")"]}),o&&l.jsx(W,{textColor:"danger600",children:"*"}),n&&l.jsx(F,{paddingLeft:1,children:n})]}),t&&l.jsx(F,{paddingTop:1,maxWidth:"35.6rem",children:l.jsx(W,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:t})})]})})}),[KH,JH]=Bn("DynamicZone",{isInDynamicZone:!1}),QH=({attribute:t,disabled:e,hint:n,label:r,labelAction:s,name:o,required:c=!1})=>{const{max:i=1/0,min:a=-1/0}=t??{},[u,d]=_.useState(!1),[p,h]=_.useState(""),{components:f,isLoading:x}=De(),m=e||x,{addFieldRow:w,removeFieldRow:C,moveFieldRow:v}=pe("DynamicZone",({addFieldRow:N,removeFieldRow:Q,moveFieldRow:ne})=>({addFieldRow:N,removeFieldRow:Q,moveFieldRow:ne})),{value:k=[],error:j}=ie(o),A=_.useMemo(()=>t.components.reduce((N,Q)=>{const{category:ne,info:xe}=f[Q]??{info:{}},fe={uid:Q,displayName:xe.displayName,icon:xe.icon};return N[ne]||(N[ne]=[]),N[ne]=[...N[ne],fe],N},{}),[t.components,f]),{formatMessage:g}=Z(),{toggleNotification:M}=qt(),b=k.length,D=(N,Q)=>{d(!1);const ne=f[N],xe=Vt(ne,f),ze=Nn(Ft(ne,f),ct=>({...ct,__component:N}))(xe);w(o,ze,Q)},S=()=>{b<i?d(N=>!N):M({type:"info",message:g({id:B("components.notification.info.maximum-requirement")})})},T=(N,Q)=>{h(g({id:B("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${o}.${Q}`,position:U(N)})),v(o,Q,N)},U=N=>`${N+1} of ${k.length}`,J=N=>{h(g({id:B("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${o}.${N}`}))},E=N=>{h(g({id:B("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${o}.${N}`,position:U(N)}))},z=N=>{h(g({id:B("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${o}.${N}`,position:U(N)}))},I=(N,Q)=>()=>{C(N,Q)},V=j!==void 0,R=()=>u?g({id:"app.utils.close-label",defaultMessage:"Close"}):V&&b>i?g({id:B("components.DynamicZone.extra-components"),defaultMessage:"There {number, plural, =0 {are # extra components} one {is # extra component} other {are # extra components}}"},{number:b-i}):V&&b<a?g({id:B("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:a-b}):g({id:B("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:r||o}),H=It("DynamicZone",N=>N.level),O=_.useId();return l.jsx(KH,{isInDynamicZone:!0,children:l.jsxs($,{direction:"column",alignItems:"stretch",gap:6,children:[b>0&&l.jsxs(F,{children:[l.jsx(WH,{hint:n,label:r,labelAction:s,name:o,numberOfComponents:b,required:c}),l.jsx(me,{id:O,children:g({id:B("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})}),l.jsx(me,{"aria-live":"assertive",children:p}),l.jsx("ol",{"aria-describedby":O,children:k.map((N,Q)=>l.jsx(Rt,{level:H+1,uid:N.__component,id:N.id,type:"dynamiczone",children:l.jsx(FH,{disabled:m,name:o,index:Q,componentUid:N.__component,onMoveComponent:T,onRemoveComponentClick:I(o,Q),onCancel:J,onDropItem:z,onGrabItem:E,onAddComponent:D,dynamicComponentsByCategory:A})},N.__temp_key__))})]}),l.jsx($,{justifyContent:"center",children:l.jsx(QV,{hasError:V,isDisabled:m,isOpen:u,onClick:S,children:R()})}),l.jsx(rH,{dynamicComponentsByCategory:A,isOpen:u,onClickAddComponent:D})]})})};export{QH as D,fH as M,oH as N,vU as a,zH as b,BH as c,JV as d,OV as e,Vt as f,OH as g,bU as p,xU as r,Ft as t,JH as u};
