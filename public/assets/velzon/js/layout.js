    // Theme
    sessionStorage.setItem('data-bs-theme', 'light'); //light, dark
    sessionStorage.setItem('data-topbar', 'light'); //light, dark
    sessionStorage.setItem('data-preloader', 'disable'); //disable, enable    

    sessionStorage.setItem('data-layout', 'vertical'); //vertical, horizontal, twocolumn, semibox
    sessionStorage.setItem('data-layout-position', 'fixed'); //fixed, scrollable
    sessionStorage.setItem('data-layout-style', 'detached'); //default, detached
    sessionStorage.setItem('data-layout-width', 'fluid'); //fluid, boxed
    
    sessionStorage.setItem('data-sidebar', 'dark'); //light, dark, gradient [gradient-2, gradient-3, gradient-4]    
    sessionStorage.setItem('data-sidebar-image', 'none'); //none, img-1, img-2, img-3, img-4            
    sessionStorage.setItem('data-sidebar-size', 'lg'); //lg, md, sm, sm-hover
    sessionStorage.setItem('data-sidebar-visibility', 'show'); //show
    
    // sessionStorage.setItem('defaultAttribute', '');                                                            


!(function () {
    "use strict";
    var t, a, e;
    sessionStorage.getItem("defaultAttribute") &&
        ((t = document.documentElement.attributes),
        (a = {}),
        Object.entries(t).forEach(function (t) {
            var e;
            t[1] && t[1].nodeName && "undefined" != t[1].nodeName && ((e = t[1].nodeName), (a[e] = t[1].nodeValue));
        }),
        sessionStorage.getItem("defaultAttribute") !== JSON.stringify(a)
            ? (sessionStorage.clear(), window.location.reload())
            : (((e = {})["data-layout"] = sessionStorage.getItem("data-layout")),
              (e["data-sidebar-size"] = sessionStorage.getItem("data-sidebar-size")),
              (e["data-bs-theme"] = sessionStorage.getItem("data-bs-theme")),
              (e["data-layout-width"] = sessionStorage.getItem("data-layout-width")),
              (e["data-sidebar"] = sessionStorage.getItem("data-sidebar")),
              (e["data-sidebar-image"] = sessionStorage.getItem("data-sidebar-image")),
              (e["data-layout-direction"] = sessionStorage.getItem("data-layout-direction")),
              (e["data-layout-position"] = sessionStorage.getItem("data-layout-position")),
              (e["data-layout-style"] = sessionStorage.getItem("data-layout-style")),
              (e["data-topbar"] = sessionStorage.getItem("data-topbar")),
              (e["data-preloader"] = sessionStorage.getItem("data-preloader")),
              (e["data-body-image"] = sessionStorage.getItem("data-body-image")),
              Object.keys(e).forEach(function (t) {
                  e[t] && document.documentElement.setAttribute(t, e[t]);
              })));
          
})();
