(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(5838)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,u=r(n(7294)),l=n(6273),f=n(2725),c=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var y=u.default.forwardRef((function(e,t){var n,r=e.href,y=e.as,_=e.children,b=e.prefetch,g=e.passHref,C=e.replace,x=e.shallow,m=e.scroll,M=e.locale,L=e.onClick,j=e.onMouseEnter,E=e.onTouchStart,R=e.legacyBehavior,O=void 0===R?!0!==Boolean(!1):R,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,!O||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var w=!1!==b,k=u.default.useContext(c.RouterContext),N=u.default.useContext(i.AppRouterContext);N&&(k=N);var T,I=u.default.useMemo((function(){var e=o(l.resolveHref(k,r,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(k,y):n||t}}),[k,r,y]),S=I.href,U=I.as,B=u.default.useRef(S),Z=u.default.useRef(U);O&&(T=u.default.Children.only(n));var A=O?T&&"object"===typeof T&&T.ref:t,D=o(s.useIntersection({rootMargin:"200px"}),3),H=D[0],K=D[1],X=D[2],G=u.default.useCallback((function(e){Z.current===U&&B.current===S||(X(),Z.current=U,B.current=S),H(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[U,A,S,X,H]);u.default.useEffect((function(){var e=K&&w&&l.isLocalURL(S),t="undefined"!==typeof M?M:k&&k.locale,n=v[S+"%"+U+(t?"%"+t:"")];e&&!n&&h(k,S,U,{locale:t})}),[U,S,K,M,w,k]);var q={ref:G,onClick:function(e){O||"function"!==typeof L||L(e),O&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,f,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?u.default.startTransition(d):d()}}(e,k,S,U,C,x,m,M,Boolean(N),w)},onMouseEnter:function(e){O||"function"!==typeof j||j(e),O&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!w&&N||l.isLocalURL(S)&&h(k,S,U,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof E||E(e),O&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!w&&N||l.isLocalURL(S)&&h(k,S,U,{priority:!0})}};if(!O||g||"a"===T.type&&!("href"in T.props)){var z="undefined"!==typeof M?M:k&&k.locale,F=k&&k.isLocaleDomain&&d.getDomainLocale(U,z,k.locales,k.domainLocales);q.href=F||p.addBasePath(f.addLocale(U,z,k&&k.defaultLocale))}return O?u.default.cloneElement(T,q):u.default.createElement("a",Object.assign({},P,q),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,i=o(r.useState(!1),2),s=i[0],d=i[1],p=o(r.useState(null),2),v=p[0],h=p[1];r.useEffect((function(){if(u){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},f.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,u=o.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(o)}}}),[v,c,n,t,s]);var y=r.useCallback((function(){d(!1)}),[]);return[h,s,y]};var r=n(7294),a=n(9311),u="function"===typeof IntersectionObserver,l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=o.default.createContext(null);t.TemplateContext=l},5838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(5893),r=n(3658),a=n.n(r),u=n(1664),l=n.n(u);function f(){return(0,o.jsxs)("div",{className:a().container,children:[(0,o.jsxs)("div",{className:a().highlight,children:[(0,o.jsx)(l(),{href:"/",children:"404"}),"\xa0"]}),"| Not found"]})}},3658:function(e){e.exports={container:"__404_container__MNLb7",highlight:"__404_highlight__REcLX"}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=6141,e(e.s=t);var t}));var t=e.O();_N_E=t}]);