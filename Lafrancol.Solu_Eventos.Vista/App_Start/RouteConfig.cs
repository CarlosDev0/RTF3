using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace RTVSS
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            
            routes.MapRoute(
               name: "leerProveedores",
               url: "leerProveedores", 
               defaults: new { controller = "Proveedor", action = "leerProveedores" }
            );
            routes.MapRoute(
               name: "guardarProveedor",
               url: "guardarProveedor", 
               defaults: new { controller = "Proveedor", action = "guardarProveedor" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
            //routes.MapRoute(
            //    name: "DefaultApi",
            //    url: "api/{controller}/{action}/{id}",
            //    defaults: new { id = UrlParameter.Optional }
            //    );
            //routes.MapRoute(
            //    name: "leerProveedores",
            //    url: "Proveedor/leerProveedores/",
            //    defaults: new { action = "leerProveedores", }
            //);
           
        }
    }
}
