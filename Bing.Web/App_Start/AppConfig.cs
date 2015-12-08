using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace Bing.Web
{
    public class AppConfig
    {
        private static string _bingSearchURL;
        private static string _bingCredential;

        public static string BingSearchURL
        {
            get
            {
                if (string.IsNullOrEmpty(_bingSearchURL))
                    _bingSearchURL = ConfigurationManager.AppSettings["BingSearchURL"];
                return _bingSearchURL;
            }
        }

        public static string BingCredential
        {
            get
            {
                if (string.IsNullOrEmpty(_bingCredential))
                    _bingCredential = ConfigurationManager.AppSettings["BingCredential"];
                return _bingCredential;
            }
        }
    }
}