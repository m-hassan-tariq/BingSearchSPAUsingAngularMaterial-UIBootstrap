using Bing.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bing.Web.Controllers
{
    public class BingApiController : ApiController
    {

        [HttpGet]
        public HttpResponseMessage Get(HttpRequestMessage request, string mode, [FromUri] string query, [FromUri] int skip)
        {
            if (string.IsNullOrEmpty(query))
                return request.CreateResponse(HttpStatusCode.BadRequest);

            switch (mode)
            {
                case "composite": return GetCompositeSearch(request, query, skip); 
                case "web": return GetWebSearch(request, query, skip);
                case "news": return GetNewsSearch(request, query, skip); 
                case "image": return GetImageSearch(request, query, skip); 
                case "related": return GetRelatedSearch(request, query);
                default: return request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        public BingSearchContainer CreateBingContainer()
        {
            var bingContainer = new Bing.BingSearchContainer(new Uri(AppConfig.BingSearchURL));

            bingContainer.Credentials = new NetworkCredential(AppConfig.BingCredential, AppConfig.BingCredential);

            return bingContainer;
        }

        public HttpResponseMessage GetRelatedSearch(HttpRequestMessage request, string query)
        {
            var webResult = CreateBingContainer()
                                .RelatedSearch(query, null, "en-us", null, null, null)
                                .AddQueryOption("$top", 10)
                                .Execute();

            return request.CreateResponse(HttpStatusCode.OK, webResult.ToList());
        }

        public HttpResponseMessage GetWebSearch(HttpRequestMessage request, string query, int skip)
        {
            var webResult = CreateBingContainer()
                                .Web(query, null, null, "en-us", null, null, null, null)
                                .AddQueryOption("$top", 10)
                                .AddQueryOption("$skip", skip)
                                .Execute();


            return request.CreateResponse(HttpStatusCode.OK, webResult.ToList());
        }

        public HttpResponseMessage GetNewsSearch(HttpRequestMessage request, string query, int skip)
        {
            var webResult = CreateBingContainer()
                                .News(query, null, "en-us", null, null, null, null, "rt_ScienceAndTechnology", null)
                                .AddQueryOption("$top", 10)
                                .AddQueryOption("$skip", skip)
                                .Execute();

            return request.CreateResponse(HttpStatusCode.OK, webResult.ToList());
        }

        public HttpResponseMessage GetImageSearch(HttpRequestMessage request, string query, int skip)
        {
            var webResult = CreateBingContainer()
                                .Image(query, null, "en-us", null, null, null, null)
                                .AddQueryOption("$top", 32)
                                .AddQueryOption("$skip", skip)
                                .Execute();

            return request.CreateResponse(HttpStatusCode.OK, webResult.ToList());
        }

        public HttpResponseMessage GetCompositeSearch(HttpRequestMessage request, string query, int skip)
        {
            var webResult = CreateBingContainer()
                                .Composite("web+image+video+news+spell", query, null, null, "en-us", null, null, null, null, null, null, null, null, null, null)
                                .AddQueryOption("$top", 5)
                                .AddQueryOption("$skip", skip)
                                .Execute();

            return request.CreateResponse(HttpStatusCode.OK, webResult.ToList());
        }

    }
}