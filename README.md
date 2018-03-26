[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/zackebth/rm2Flash/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/zackebth/rm2Flash/?branch=master)[![Code Coverage](https://scrutinizer-ci.com/g/zackebth/rm2Flash/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/zackebth/rm2Flash/?branch=master)[![Build Status](https://scrutinizer-ci.com/g/zackebth/rm2Flash/badges/build.png?b=master)](https://scrutinizer-ci.com/g/zackebth/rm2Flash/build-status/master)


#### Install

```sh
$ npm install rm2flash --save
```

Add the Following code to the &lt;head&gt; of your document.
```html
<script src="https://cdn.rawgit.com/zackebth/rm2Flash/b9124c05/dist/flash.min.css"></script>
// If you are using bootstrap 3, skip the min.css
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.9/angular.min.js"></script>
<script src="https://cdn.rawgit.com/zackebth/rm2Flash/b9124c05/dist/flash.min.js"></script>
```
Add `rv2Flash` dependency to your module
```javascript
var myApp = angular.module("app", ["rv2Flash"])
```
Include directive below in your HTML template.
```html
<flash-message></flash-message> 
```

## Configure / Optional
Add attributes on the `<flash-message>` directive.
```html
<flash-message
    duration="5000"
    show-close="true"
></flash-message> 
<!-- 
5000ms as the default duration to show flash message.
Show the close button (x on the right).
-->
```

## How to use /example
Inject the `Flash` factory in your controller
```javascript
myApp.controller('Ctrlr', ['Flash', function(Flash) {
    $scope.successLoad = function () {
		  var message = '<strong>Success!</strong> This is plain text.';
		  Flash.create('succes', message);
    };
}]);
```
#### Types ####
+ success
+ info
+ warning
+ danger

## Testing
```sh
1. Clone repo
2. cd repo
3. npm install
4. npm test
```
