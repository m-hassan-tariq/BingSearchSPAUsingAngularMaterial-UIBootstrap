using System.Web;
using System.Web.Optimization;

namespace Bing.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Angular")
                .Include("~/bower_components/angular/angular.js")
                .Include("~/bower_components/angular-ui-router/release/angular-ui-router.js")
                .Include("~/bower_components/angular-resource/angular-resource.js")
                .Include("~/bower_components/angular-ui-bootstrap/src/ui-bootstrap-tpls.js")
                .Include("~/bower_components/oclazyload/dist/ocLazyLoad.js")
                .Include("~/bower_components/lodash/lodash.js")
                .Include("~/bower_components/angular-animate/angular-animate.js")
                .Include("~/bower_components/angular-aria/angular-aria.js")
                .Include("~/bower_components/angular-material/angular-materials.js")
                .Include("~/bower_components/moment/moment.js")
                .Include("~/bower_components/angular-moment/angular-moment.js")
                );

            bundles.Add(new ScriptBundle("~/AngularApp")               
                .IncludeDirectory("~/Scripts/app/modules/homepage", "*.js", true)
                .IncludeDirectory("~/Scripts/app/modules/layout", "*.js", true)
                .Include("~/Scripts/app/appModule.js")
                .Include("~/Scripts/app/appConfig.js")
                .IncludeDirectory("~/Scripts/app/shared", "*.js", true)
               );

            bundles.Add(new StyleBundle("~/Content/css")
               .Include("~/Content/main.css")
               .Include("~/Content/site.css")
               .Include("~/Content/bootstrap/css/bootstrap.paper.css")
               .Include("~/bower_components/angular-material/angular-materials.min.css")
               .Include("~/Content/custom.css")
              );

            BundleTable.EnableOptimizations = false;
        }
    }
}