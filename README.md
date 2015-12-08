# BingSearchUsingAngularMaterial

Using Angular Material, Angular UI Bootstrap, ASP.NET WebAPI and Bing API in implementing Bing clone SPA.

**Angular Material Directive used**
- Autocomplete: https://material.angularjs.org/latest/demo/autocomplete
- Dynamic Tab: https://material.angularjs.org/latest/demo/tabs
- Toast: https://material.angularjs.org/latest/demo/toast
- GridList: https://material.angularjs.org/latest/demo/gridList

**Angular UI Bootstrap Directive used**
- Pagination: https://angular-ui.github.io/bootstrap/#/pagination
- Carousel: https://angular-ui.github.io/bootstrap/#/carousel

**App Directory Structure**

![1](https://cloud.githubusercontent.com/assets/10474169/11671501/78512d06-9dce-11e5-85be-c8d904f90f21.png)

**Module Directory Structure**

![2](https://cloud.githubusercontent.com/assets/10474169/11671502/785263e2-9dce-11e5-84cb-ca920a56cf53.png)

**Logical Module Division**

![3](https://cloud.githubusercontent.com/assets/10474169/11671547/e6f240f6-9dce-11e5-9fed-78af550022d3.png)

**App Config contains routing info and App Run contains startup logic**

![4](https://cloud.githubusercontent.com/assets/10474169/11671601/2f3cf3e2-9dcf-11e5-9f4b-606fe1759dea.png)

**Lazy Loading for search page**
- bing.search module will not be loaded on page load, it will be loaded once user searched any keyword, this is done by resolving promises during route change.

![5](https://cloud.githubusercontent.com/assets/10474169/11671602/2f3e3e46-9dcf-11e5-9d53-8ddc3bfb8552.png)

**Controller Structure**
-	JS closure using IIFE
-	Controller As implementation to avoid $scope var every time in code
-	Named function for controller
-	Function declarations to abstract underline detail
-	Bindable members upfront at the top
-	DI using $inject to overcome issues during bundling and minification.
-	Wrapping members in init() method for controller activation promises. 

![6](https://cloud.githubusercontent.com/assets/10474169/11671695/c560afa8-9dcf-11e5-861f-92a96d44f70f.png)

**Service Structure**
-	Function declarations to abstract underline detail
-	Accessible members upfront at the top
-	Singleton object
-	SRP

![7](https://cloud.githubusercontent.com/assets/10474169/11671692/c55e2cce-9dcf-11e5-8e1e-54a4b76571b4.png)

**Directive Structure**
-	DOM manipulation using directive
-	Controller As and Controller activation promises
- Restrict of directive to Element and Attribute only
-	Usage of shared and isolated scope (two way and behavioral binding)
-	Accessible members upfront & Function declarations to hide detail
-	SRP
 
![8](https://cloud.githubusercontent.com/assets/10474169/11671694/c5605f44-9dcf-11e5-9c5e-fa010f509831.png)

**Shared Services Structure – Example 1**
- This will be shared service which will be consumed by all modules for executing CRUD operation, Request Type, URL, Parameter Object will be passed to this shared service, so it will make code more maintainable readble and scaleble. If we dont go through this method then we have to use $http.get() or $http.post method very where in services files of each module, content negotiation issues can be simply handled over here, If you want to append anything with each URL like 'Http:\\bing\' then instead of copy it on every service file just hardcode this thing in this file and append URL from thier respective services. We dont need to mention protocol and hostname now in every URL request. It also handles http communication exceptions globally. 

![9](https://cloud.githubusercontent.com/assets/10474169/11671693/c55ef01e-9dcf-11e5-81b7-4f9f6b39f216.png)

**Shared Services Structure – Example 2**
- Below service is used to store value of search text and selected text throughout application using angular factory. 

![10](https://cloud.githubusercontent.com/assets/10474169/11671690/c55584e8-9dcf-11e5-91d4-98545ef00afc.png)

**WebAPI Structure**
- Weather transaction is for images, web, news or composite search, every http call will hit Get function first, and then on basis of mode it will redirect to actual BING api call. We can change underline structure anytime for image, news, web & composite search (for instance we can use google search api), but for client, service contract will be same as GET function is acting as facade here.

![11](https://cloud.githubusercontent.com/assets/10474169/11671691/c5570f34-9dcf-11e5-9cc6-8ddf05783645.png)

**Credentials are stored in web.config and accessed through static class**

![12](https://cloud.githubusercontent.com/assets/10474169/11671689/c547cc54-9dcf-11e5-9334-18d1c5332e01.png)

**Introduction of Template in HTML Structure for SPA**

![13](https://cloud.githubusercontent.com/assets/10474169/11671688/c539e044-9dcf-11e5-82bf-3034dd0aede6.png)

**WebPage Snapshot**
- HomePage

![15](https://cloud.githubusercontent.com/assets/10474169/11671864/d88f28b0-9dd0-11e5-933e-884ab2d290f5.png)

- Autocomplete

![14](https://cloud.githubusercontent.com/assets/10474169/11671863/d88ec53c-9dd0-11e5-81df-8e45fefef270.png)

- Main Search Page

![16](https://cloud.githubusercontent.com/assets/10474169/11671866/d890aa46-9dd0-11e5-8a24-4c6eecc29d87.png)

- Web Search Page

![17](https://cloud.githubusercontent.com/assets/10474169/11671867/d89114cc-9dd0-11e5-9f53-95d21312f442.png)

- News Search Page

![18](https://cloud.githubusercontent.com/assets/10474169/11671862/d88ec12c-9dd0-11e5-9140-ecd8220b755d.png)

- Images Search Page

![19](https://cloud.githubusercontent.com/assets/10474169/11671865/d88f61fe-9dd0-11e5-98b9-bbfab719f365.png)

- Notification: In case of communication error message and vertical laoder is spinning

![21](https://cloud.githubusercontent.com/assets/10474169/11671948/95009c0e-9dd1-11e5-8c58-8f4d6e214559.png)

- Notification: If search button is pressed without any keyword

![20](https://cloud.githubusercontent.com/assets/10474169/11671949/950d59a8-9dd1-11e5-97c1-12e96b72a0ae.png)
