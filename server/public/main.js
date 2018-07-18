(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    /* // padding: 2em 23em;\r\n    // background:lightgray; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main [@routerTransition]=\"getState(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            animations: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question1_question1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question1/question1.component */ "./src/app/question1/question1.component.ts");
/* harmony import */ var _question2_question2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question2/question2.component */ "./src/app/question2/question2.component.ts");
/* harmony import */ var _question3_question3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./question3/question3.component */ "./src/app/question3/question3.component.ts");
/* harmony import */ var _question4_question4_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./question4/question4.component */ "./src/app/question4/question4.component.ts");
/* harmony import */ var _question5_question5_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./question5/question5.component */ "./src/app/question5/question5.component.ts");
/* harmony import */ var _reviewpage_reviewpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reviewpage/reviewpage.component */ "./src/app/reviewpage/reviewpage.component.ts");
/* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/thankyou/thankyou.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _confirmpage_confirmpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./confirmpage/confirmpage.component */ "./src/app/confirmpage/confirmpage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _corousel_corousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./corousel/corousel.component */ "./src/app/corousel/corousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _question1_question1_component__WEBPACK_IMPORTED_MODULE_10__["Question1Component"],
                _question2_question2_component__WEBPACK_IMPORTED_MODULE_11__["Question2Component"],
                _question3_question3_component__WEBPACK_IMPORTED_MODULE_12__["Question3Component"],
                _question4_question4_component__WEBPACK_IMPORTED_MODULE_13__["Question4Component"],
                _question5_question5_component__WEBPACK_IMPORTED_MODULE_14__["Question5Component"],
                _reviewpage_reviewpage_component__WEBPACK_IMPORTED_MODULE_15__["ReviewpageComponent"],
                _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_16__["ThankyouComponent"],
                _confirmpage_confirmpage_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmpageComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__["SidenavComponent"],
                _corousel_corousel_component__WEBPACK_IMPORTED_MODULE_21__["CorouselComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__["ModalModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    return App;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _question1_question1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question1/question1.component */ "./src/app/question1/question1.component.ts");
/* harmony import */ var _question2_question2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question2/question2.component */ "./src/app/question2/question2.component.ts");
/* harmony import */ var _question3_question3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question3/question3.component */ "./src/app/question3/question3.component.ts");
/* harmony import */ var _question4_question4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question4/question4.component */ "./src/app/question4/question4.component.ts");
/* harmony import */ var _question5_question5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question5/question5.component */ "./src/app/question5/question5.component.ts");
/* harmony import */ var _reviewpage_reviewpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reviewpage/reviewpage.component */ "./src/app/reviewpage/reviewpage.component.ts");
/* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/thankyou/thankyou.component.ts");
/* harmony import */ var _confirmpage_confirmpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirmpage/confirmpage.component */ "./src/app/confirmpage/confirmpage.component.ts");










var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { state: 'home' } },
    { path: 'question1', component: _question1_question1_component__WEBPACK_IMPORTED_MODULE_2__["Question1Component"], data: { state: 'question1' } },
    { path: 'question2', component: _question2_question2_component__WEBPACK_IMPORTED_MODULE_3__["Question2Component"], data: { state: 'question2' } },
    { path: 'question3', component: _question3_question3_component__WEBPACK_IMPORTED_MODULE_4__["Question3Component"], data: { state: 'question3' } },
    { path: 'question4', component: _question4_question4_component__WEBPACK_IMPORTED_MODULE_5__["Question4Component"], data: { state: 'question4' } },
    { path: 'question5', component: _question5_question5_component__WEBPACK_IMPORTED_MODULE_6__["Question5Component"], data: { state: 'question5' } },
    { path: 'reviewpage', component: _reviewpage_reviewpage_component__WEBPACK_IMPORTED_MODULE_7__["ReviewpageComponent"], data: { state: 'reviewpage' } },
    { path: 'thankyou', component: _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__["ThankyouComponent"], data: { state: 'thankyou' } },
    { path: 'confirmpage', component: _confirmpage_confirmpage_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmpageComponent"], data: { state: 'confirmpage' } },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {});


/***/ }),

/***/ "./src/app/confirmpage/confirmpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/confirmpage/confirmpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .btn-success {\r\n  background-color:black;\r\n  background-image: none;\r\n \r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  border-radius: 40px;\r\n  border: 1px solid #25a08d;\r\n  transition: all ease 0.8s;\r\n}\r\n.btn-success:focus, .btn-success:hover {\r\n  background-color: #25a08d;\r\n  border-color: #25a08d;\r\n  box-shadow: 0px 5px 35px -5px #25a08d;\r\n  text-shadow: 0 0 8px #fff;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n.btn-success.active {\r\n  background-color: #25a08d;\r\n  border-color: #25a08d;\r\n  box-shadow: 0px 5px 35px -5px #25a08d;\r\n  text-shadow: 0 0 8px #fff;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n.btn-success.active:hover {\r\n  background-color: #25a08d;\r\n  border-color: #25a08d;\r\n  box-shadow: 0px 5px 35px -5px #25a08d;\r\n  text-shadow: 0 0 8px #fff;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n.btn-success:active {\r\n  background-color: #25a08d;\r\n  border-color: #25a08d;\r\n  box-shadow: 0px 5px 35px -5px #25a08d;\r\n  text-shadow: 0 0 8px #fff;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n.btn-success:active:hover, .btn-success:active:focus {\r\n  background-color: #25a08d;\r\n  border-color: #25a08d;\r\n  box-shadow: 0px 5px 35px -5px #25a08d;\r\n  text-shadow: 0 0 8px #fff;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n.popup-body{\r\n    color: white;\r\n    background-color: black;\r\n    font-family: 'Roboto Mono', monospace;\r\n\r\n}\r\n.modal-title{\r\n    text-align: center;\r\n}\r\n.content{\r\n    text-align: center;\r\n}\r\n#confirmpage{\r\n    text-align: center;\r\n    padding-top: 150px;\r\n}"

/***/ }),

/***/ "./src/app/confirmpage/confirmpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/confirmpage/confirmpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"container\" id=\"confirmpage\">\r\n  <button routerLink=\"/question1\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-success btn-lg btn-block\">Create A New Pitch</button>\r\n  <p style=\"text-align: center;\">or</p>\r\n  <button routerLink=\"/home\" routerLinkActive=\"active\" type=\"button\" style=\"float: right;\" class=\"btn btn-success btn-lg btn-block\">I am done</button>\r\n</div>"

/***/ }),

/***/ "./src/app/confirmpage/confirmpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/confirmpage/confirmpage.component.ts ***!
  \******************************************************/
/*! exports provided: ConfirmpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmpageComponent", function() { return ConfirmpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmpageComponent = /** @class */ (function () {
    function ConfirmpageComponent() {
    }
    ConfirmpageComponent.prototype.ngOnInit = function () {
    };
    ConfirmpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmpage',
            template: __webpack_require__(/*! ./confirmpage.component.html */ "./src/app/confirmpage/confirmpage.component.html"),
            styles: [__webpack_require__(/*! ./confirmpage.component.css */ "./src/app/confirmpage/confirmpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmpageComponent);
    return ConfirmpageComponent;
}());



/***/ }),

/***/ "./src/app/corousel/corousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/corousel/corousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".corousel{\r\n    border-radius: 4.5rem;\r\n    box-shadow: 2px 2px 2px 2px grey; \r\n    margin: 20px;\r\n    padding: 15px;\r\n    height: 5rem;\r\n    min-width: 5rem;\r\n    outline: none;\r\n    \r\n  }\r\n  .corr{\r\n    text-align: center;\r\n    \r\n  }\r\n  .button-class{\r\n      padding:3px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n}\r\n  .current-class{\r\n    background: green !important;\r\n}\r\n  .disable-class{\r\n  background: grey ;\r\n  color : white;\r\n}\r\n  @media only screen and (max-width: 400px) {\r\n\r\n    .corousel{\r\n        border-radius :2.5rem;\r\n        box-shadow: 1px 1px 1px 1px grey; \r\n        margin:2px;\r\n        padding: 5px;\r\n        height: 2.0rem;\r\n        min-width: 2.0rem;\r\n        outline: none;\r\n        \r\n      }\r\n      \r\n}\r\n  @media only screen and  (min-width: 400px) and (max-width: 650px) {\r\n\r\n  .corousel{\r\n      border-radius :2.5rem;\r\n      box-shadow: 1px 1px 1px 1px grey; \r\n      margin:5px;\r\n      padding: 6px;\r\n      height: 2.5rem;\r\n      min-width: 2.5rem;\r\n      outline: none;\r\n      \r\n    }\r\n    \r\n}\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/corousel/corousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/corousel/corousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"corr\">\r\n   <button [disabled] = \"!isValid1\" class=\"button-class\"routerLink=\"/question1\" routerLinkActive=\"active\"> <img src=\"assets/images/nameicon.svg\" [ngClass] =\"{'current-class' : isCurrent1,'disable-class': !isValid1}\"   class=\"corousel\" ></button>\r\n   <button [disabled] = \"!isValid2\"class=\"button-class\"   routerLink=\"/question2\" routerLinkActive=\"active\"> <img src=\"assets/images/problem icon.svg\"  [ngClass] =\"{'current-class' : isCurrent2,'disable-class': !isValid2}\"   class=\"corousel\" ></button>\r\n   <button [disabled] = \"!isValid3\" class=\"button-class\"   routerLink=\"/question3\" routerLinkActive=\"active\"> <img src=\"assets/images/solution.svg\"  [ngClass] =\"{'current-class' : isCurrent3,'disable-class': !isValid3}\"  class=\"corousel\" ></button>\r\n   <button [disabled] = \"!isValid4\" class=\"button-class\"   routerLink=\"/question4\" routerLinkActive=\"active\"> <img src=\"assets/images/value icon.svg\"  [ngClass] =\"{'current-class' : isCurrent4,'disable-class': !isValid4}\" class=\"corousel\" ></button>\r\n   <button [disabled] = \"!isValid5\" class=\"button-class\"   routerLink=\"/question5\" routerLinkActive=\"active\"> <img src=\"assets/images/proof and ask.svg\"  [ngClass] =\"{'current-class' : isCurrent5,'disable-class': !isValid5}\"  class=\"corousel\" > </button>\r\n</div>"

/***/ }),

/***/ "./src/app/corousel/corousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/corousel/corousel.component.ts ***!
  \************************************************/
/*! exports provided: CorouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorouselComponent", function() { return CorouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CorouselComponent = /** @class */ (function () {
    function CorouselComponent() {
        this.isValid1 = false;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.review = false;
    }
    CorouselComponent.prototype.ngOnInit = function () {
        this.onLoading();
    };
    CorouselComponent.prototype.onLoading = function () {
        if (localStorage.getItem("question1")) {
            this.isValid1 = true;
        }
        if (localStorage.getItem("question2")) {
            this.isValid2 = true;
        }
        if (localStorage.getItem("question3")) {
            this.isValid3 = true;
        }
        if (localStorage.getItem("question4")) {
            this.isValid4 = true;
        }
        if (localStorage.getItem("question5")) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.review = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent1'),
        __metadata("design:type", Boolean)
    ], CorouselComponent.prototype, "isCurrent1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent2'),
        __metadata("design:type", Boolean)
    ], CorouselComponent.prototype, "isCurrent2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent3'),
        __metadata("design:type", Boolean)
    ], CorouselComponent.prototype, "isCurrent3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent4'),
        __metadata("design:type", Boolean)
    ], CorouselComponent.prototype, "isCurrent4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent5'),
        __metadata("design:type", Boolean)
    ], CorouselComponent.prototype, "isCurrent5", void 0);
    CorouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corousel',
            template: __webpack_require__(/*! ./corousel.component.html */ "./src/app/corousel/corousel.component.html"),
            styles: [__webpack_require__(/*! ./corousel.component.css */ "./src/app/corousel/corousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CorouselComponent);
    return CorouselComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\r\n        <img src=\"assets/images/elevatorlylogo.svg\">\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n        <p class=\"text-center\">Elevator Pitch Generator</p>\r\n</div>\r\n<div class=\"background\">\r\n        <img src=\"assets/images/buildingHome.svg\" routerLinkActive=\"active\" class=\"body1\">\r\n</div>\r\n<div style=\"margin-top:20px;\">\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button mat-button routerLink=\"/question1\" routerLinkActive=\"active\" data-container=\"container-2\">GENERATE YOUR PITCH</button>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Button */\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"],\nbutton,\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  background-color: black;\n  border-radius: 3px;\n  border: 0;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 600;\n  height: 3.125em;\n  letter-spacing: 0.225em;\n  line-height: 3.125em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 12rem; }\ninput[type=\"submit\"]:hover,\n  input[type=\"reset\"]:hover,\n  input[type=\"button\"]:hover,\n  button:hover,\n  .button:hover {\n    background-color: grey; }\ninput[type=\"submit\"]:active,\n  input[type=\"reset\"]:active,\n  input[type=\"button\"]:active,\n  button:active,\n  .button:active {\n    background-color: rgba(144, 144, 144, 0.5); }\ninput[type=\"submit\"].icon:before,\n  input[type=\"reset\"].icon:before,\n  input[type=\"button\"].icon:before,\n  button.icon:before,\n  .button.icon:before {\n    margin-right: 0.5em; }\ninput[type=\"submit\"].fit,\n  input[type=\"reset\"].fit,\n  input[type=\"button\"].fit,\n  button.fit,\n  .button.fit {\n    display: block;\n    margin: 0 0 1em 0;\n    width: 100%; }\ninput[type=\"submit\"].small,\n  input[type=\"reset\"].small,\n  input[type=\"button\"].small,\n  button.small,\n  .button.small {\n    font-size: 0.8em; }\ninput[type=\"submit\"].big,\n  input[type=\"reset\"].big,\n  input[type=\"button\"].big,\n  button.big,\n  .button.big {\n    font-size: 1.35em; }\ninput[type=\"submit\"].special,\n  input[type=\"reset\"].special,\n  input[type=\"button\"].special,\n  button.special,\n  .button.special {\n    background-color: #ed4933;\n    box-shadow: none !important;\n    color: #ffffff !important; }\ninput[type=\"submit\"].special:hover,\n    input[type=\"reset\"].special:hover,\n    input[type=\"button\"].special:hover,\n    button.special:hover,\n    .button.special:hover {\n      background-color: #ef5e4a !important; }\ninput[type=\"submit\"].special:active,\n    input[type=\"reset\"].special:active,\n    input[type=\"button\"].special:active,\n    button.special:active,\n    .button.special:active {\n      background-color: #eb341c !important; }\ninput[type=\"submit\"].disabled, input[type=\"submit\"]:disabled,\n  input[type=\"reset\"].disabled,\n  input[type=\"reset\"]:disabled,\n  input[type=\"button\"].disabled,\n  input[type=\"button\"]:disabled,\n  button.disabled,\n  button:disabled,\n  .button.disabled,\n  .button:disabled {\n    -moz-pointer-events: none;\n    -webkit-pointer-events: none;\n    -ms-pointer-events: none;\n    pointer-events: none;\n    opacity: 0.25; }\n@media screen {\n    input[type=\"submit\"],\n    input[type=\"reset\"],\n    input[type=\"button\"],\n    button,\n    .button {\n      height: 3.75em;\n      line-height: 3.75em; } }\n/* Banner */\n#banner {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  cursor: default;\n  min-height: 35em;\n  overflow: hidden;\n  position: relative;\n  text-align: center; }\n.background {\n  border-bottom: 1px solid black;\n  position: relative;\n  text-align: center;\n  width: 100vw;\n  height: calc(100vh - 150px - 20px - 50px);\n  margin-top: 20px; }\n.background img {\n    position: absolute;\n    bottom: -2px;\n    left: 50%;\n    height: 100%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    padding-left: 5vh; }\n.text-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg_icon{\r\n\twidth: 8.5rem !important;\r\n\theight: auto !important;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n  }"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\r\n  <mat-toolbar-row>\r\n      <img src=\"assets/images/elevatorlylogo.svg\" routerLink=\"/home\" routerLinkActive=\"active\" class=\"svg_icon\" >\r\n    <span class=\"spacer\"></span>\r\n    <mat-icon svgIcon=\"menu icon\" class=\"menu_icon\" (click)=\"navOpen()\"></mat-icon>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.navToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"));
    }
    NavComponent.prototype.navOpen = function () {
        this.navToggle.emit(true);
    };
    NavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "navToggle", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/question1/question1.component.css":
/*!***************************************************!*\
  !*** ./src/app/question1/question1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-width{\r\n  width: 12em;\r\n}\r\n.popup-image{\r\n  background-color:white;\r\n  border-radius: 5.5rem;\r\n  text-align:center;\r\n  padding:15px;\r\n}\r\n.content{\r\n  text-align:center;margin-top:10px;\r\n}\r\n.image-size{\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\nbutton{\r\n  outline: none;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n  height: 30px;\r\n}\r\n.validation{\r\n  font-size: 1rem;\r\n  -webkit-animation: fadeinout 2s linear forwards;\r\n          animation: fadeinout 2s linear forwards;\r\n}\r\n@-webkit-keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\n@keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\n.form-control{\r\n  margin-top: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n  border:none;\r\n}\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 5px;\r\n  }\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.side-nav{\r\n  background-color: black !important;\r\n  color: white ;\r\n  width: 250px;\r\n  display: block;\r\n  \r\n}\r\n.review-button{\r\nmargin-top: 20px;\r\n}\r\n.label-class{\r\n  color: grey;\r\n}\r\n.review{\r\n  text-align: center !important;\r\n}\r\n.activ-class{\r\n  background-color: white !important;\r\n  color: black !important;\r\n}\r\n.inactiv-class{\r\n  background-color: grey !important;\r\n  color: white !important;\r\n}\r\n.index-button{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n  color: white !important;\r\n}\r\n.index-button:disabled{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n}\r\n.index-button:hover{\r\n  border: none;\r\n}\r\n.index-button:before{\r\n  border: none !important;\r\n}\r\n.index-button:focus {\r\n  outline: none;\r\n}\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 5.5rem;\r\n  width: 4.5rem !important;\r\n  height: 4.5rem !important;\r\n}\r\n.svg_icon{\r\n\twidth: 8rem !important;\r\n\theight: auto !important;\r\n  padding: 10px !important;\r\n  color: black;\r\n  border: none;\r\n  }\r\nmat-icon{\r\n  width: 10%;\r\n}\r\nmat-icon.disabled {\r\n  pointer-events: none;\r\n  cursor:default;\r\n}\r\n.questions{\r\n  width: 3rem !important;\r\n}\r\n.label1{\r\n  font-size: 18px;\r\n  margin: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\ninput { \r\n  border: none; \r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: left;    \r\n}\r\ntextarea{\r\n  width:100%;\r\n  border: none;  \r\n  overflow:hidden;\r\n  font-size: 20px;  \r\n  text-align: left;\r\n  outline: none;\r\n    box-shadow: none; \r\n    background-attachment: local;\r\n    background-image:\r\n        linear-gradient(to right, white 10px, transparent 10px),\r\n        linear-gradient(to left, white 10px, transparent 10px),\r\n        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);\r\n    line-height: 31px; \r\n}\r\n.modal-content{\r\n  min-height: -webkit-fill-available;\r\n  border: 20px solid white !important;\r\n  border-radius: none;\r\n  background-color: black;\r\n}\r\n.popup{\r\n  margin: 20px;\r\n  display: block;\r\n  text-align: center;\r\n  justify-content: initial;\r\n}\r\n.next-button{\r\n  text-align:center;\r\n}\r\n.modal-title{\r\n  margin: 20px;\r\n}\r\n.popup-body{\r\n  color: white;\r\n  background-color: black;\r\n  height: 100%;\r\n  font-family: 'Roboto Mono', monospace;\r\n  text-align: center;\r\n}\r\n.mat-drawer-container{\r\n  background-color: white;\r\n\r\n}\r\n.content-margin{\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n.mat-drawer.mat-drawer-push  {background-color: black;\r\n}\r\n.corousel{\r\n  border-radius:5.5rem;\r\n  background: white;\r\n  box-shadow: 2px 2px 2px 2px grey; \r\n  margin: 20px;\r\n  padding: 20px;\r\n  height: 6rem;\r\n  min-width: 6rem;\r\n  \r\n}\r\n.corr{\r\n  text-align: center;\r\n  \r\n}\r\n"

/***/ }),

/***/ "./src/app/question1/question1.component.html":
/*!****************************************************!*\
  !*** ./src/app/question1/question1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenavright mode=\"push\" position=\"end\">\r\n    <app-sidenav [isCurrent1]= isCurrent></app-sidenav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <app-nav (navToggle)=\"sidenavright.toggle()\"></app-nav>\r\n    <div class=\"container\" id=\"question1\">\r\n      <form class=\"form-control\" required>\r\n        <br/>\r\n        <label class=\"content-margin\">My name is</label>\r\n        <mat-icon svgIcon=\"questions\" class=\"questions\" (click)=\"openModal(template)\" style=\"float:right;\"></mat-icon>\r\n        <br/>\r\n        <textarea matInput placeholder=\"Santa Claus\" [(ngModel)]=\"name\" name=\"name\" cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\"\r\n          cdkAutosizeMinRows=\"5\" required></textarea>\r\n        <br/>\r\n        <div class=\"text-center\">\r\n          <label *ngIf=\"emptyAnswerError\" class=\"validation\">Please enter a value</label>\r\n        </div>\r\n        <br/>\r\n        <br/>\r\n        <div>\r\n          <app-corousel [isCurrent1]= isCurrent></app-corousel>\r\n        </div>\r\n        <div class=\"next-button\">\r\n          <br>\r\n          <button type=\"button\" (click)=\"saveChanges()\" mat-raised-button class=\"button-width\">\r\n            Next </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n<ng-template #template style=\"border: 3px white;\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" style=\"color:white;\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body popup-body\">\r\n    <h4 class=\"modal-title\">Name</h4>\r\n    <div class=\"content\">\r\n      <label class=\"popup-image\">\r\n        <img src=\"assets/images/nameicon.svg \" class=\"image-size\" >\r\n      </label>\r\n    </div>\r\n    <p class=\"content popup\"> Did you really ask for more info about your Name?! :) </p>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/question1/question1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/question1/question1.component.ts ***!
  \**************************************************/
/*! exports provided: Question1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question1Component", function() { return Question1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Question1Component = /** @class */ (function () {
    function Question1Component(router, matIconRegistry, domSanitizer, ngZone, modalService) {
        this.router = router;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.ngZone = ngZone;
        this.modalService = modalService;
        this.isCurrent = true;
        this.emptyAnswerError = false;
        this.wordnumber = false;
        this.isValid1 = true;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.review = false;
        this.matIconRegistry.addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"))
            .addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"));
    }
    Question1Component.prototype.ngOnInit = function () {
        this.wordnumber = false;
        this.loading();
    };
    Question1Component.prototype.saveChanges = function () {
        var _this = this;
        if (!!this.name) {
            localStorage.setItem('question1', JSON.stringify(this.name));
            this.router.navigate(['/question2']);
        }
        else {
            this.emptyAnswerError = true;
            setTimeout(function () { return _this.emptyAnswerError = false; }, 1500);
        }
    };
    Question1Component.prototype.reviewChanges = function () {
        this.router.navigate(['/reviewpage']);
    };
    Question1Component.prototype.showWordCount = function () {
        this.words = this.wor(this.name);
        this.wordnumber = true;
    };
    Question1Component.prototype.wor = function (s) {
        var count = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === " " || s[i] === "," || s[i] === "." || s[i] === "\n" || s[i] === "  ") {
                count = count + 1;
            }
        }
        return count + 1;
    };
    Question1Component.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    Question1Component.prototype.loading = function () {
        if (JSON.parse(localStorage.getItem('question1'))) {
            this.name = JSON.parse(localStorage.getItem('question1'));
        }
        if (JSON.parse(localStorage.getItem('question2'))) {
            this.isValid2 = true;
        }
        if (JSON.parse(localStorage.getItem('question3'))) {
            this.isValid3 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid4 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.review = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"])
    ], Question1Component.prototype, "autosize", void 0);
    Question1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question1',
            template: __webpack_require__(/*! ./question1.component.html */ "./src/app/question1/question1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./question1.component.css */ "./src/app/question1/question1.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], Question1Component);
    return Question1Component;
}());



/***/ }),

/***/ "./src/app/question2/question2.component.css":
/*!***************************************************!*\
  !*** ./src/app/question2/question2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-width{\r\n  width: 12em;\r\n}\r\n.popup-image{\r\n  background-color:white;\r\n  border-radius: 5.5rem;\r\n  text-align:center;\r\n  padding:15px;\r\n}\r\n.content{\r\n  text-align:center;margin-top:10px;\r\n}\r\n.image-size{\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\nbutton{\r\n  outline: none;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n  height: 30px;\r\n}\r\n.validation{\r\n  font-size: 1rem;\r\n  -webkit-animation: fadeinout 2s linear forwards;\r\n          animation: fadeinout 2s linear forwards;\r\n}\r\n@-webkit-keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\n@keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\n.form-control{\r\n  margin-top: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n  border:none;\r\n}\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 5px;\r\n  }\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.side-nav{\r\n  background-color: black !important;\r\n  color: white ;\r\n  width: 250px;\r\n  display: block;\r\n  \r\n}\r\n.review-button{\r\nmargin-top: 20px;\r\n}\r\n.name-icon{\r\n  color: white !important;\r\n}\r\n.label-class{\r\n  color: grey;\r\n}\r\n.review{\r\n  text-align: center !important;\r\n}\r\n.activ-class{\r\n  background-color: white !important;\r\n  color: black !important;\r\n}\r\n.inactiv-class{\r\n  background-color: grey !important;\r\n  color: white !important;\r\n}\r\n.index-button{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n  color: white !important;\r\n}\r\n.index-button:disabled{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n}\r\n.index-button:hover{\r\n  border: none;\r\n}\r\n.index-button:before{\r\n  border: none !important;\r\n}\r\n.index-button:focus {\r\n  outline: none;\r\n}\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 5.5rem;\r\n  width: 4.5rem !important;\r\n  height: 4.5rem !important;\r\n}\r\n.svg_icon{\r\n\twidth: 8rem !important;\r\n\theight: auto !important;\r\n  padding: 10px !important;\r\n  color: black;\r\n  border: none;\r\n  }\r\nmat-icon{\r\n  width: 10%;\r\n}\r\nmat-icon.disabled {\r\n  pointer-events: none;\r\n  cursor:default;\r\n}\r\n.questions{\r\n  width: 3rem !important;\r\n}\r\n.label1{\r\n  font-size: 18px;\r\n  margin: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\ninput { \r\n  border: none; \r\n  /* border-bottom: 1px solid black; */\r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: left;    \r\n}\r\ntextarea{\r\n  width:100%;\r\n  border: none; \r\n  background-attachment: local;\r\n  background-attachment: local;\r\n    background-image:\r\n        linear-gradient(to right, white 10px, transparent 10px),\r\n        linear-gradient(to left, white 10px, transparent 10px),\r\n        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);\r\n    line-height: 31px; \r\n  /* border-bottom: 1px solid black; */\r\n  overflow:hidden;\r\n  font-size: 20px;  \r\n  text-align: left;\r\n  outline: none;\r\n    box-shadow: none;    \r\n}\r\n.modal-content{\r\n  min-height: -webkit-fill-available;\r\n  border: 20px solid white !important;\r\n  border-radius: none;\r\n  background-color: black;\r\n}\r\n.popup{\r\n  margin: 20px;\r\n  display: block;\r\n  text-align: center;\r\n  justify-content: initial;\r\n}\r\n.next-button{\r\n  text-align:center;\r\n  /* padding-top: 210px; */\r\n}\r\n.popup-body{\r\n  text-align: center;\r\n  color: white;\r\n  background-color: black;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n.mat-drawer-container{\r\n  background-color: white;\r\n\r\n}\r\n.content-margin{\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n.body{\r\n  text-align: center;\r\n}\r\n.modal-title{\r\n  margin: 20px;\r\n  text-align: center;\r\n}\r\n.mat-drawer.mat-drawer-push  {background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/question2/question2.component.html":
/*!****************************************************!*\
  !*** ./src/app/question2/question2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenavright mode=\"push\" position=\"end\">\r\n    <app-sidenav [isCurrent2]= isCurrent></app-sidenav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <app-nav (navToggle)=\"sidenavright.toggle()\"></app-nav>\r\n    <div class=\"container\" id=\"question1\">\r\n      <form class=\"form-control\">\r\n        <label class=\"content-margin\">I noticed</label>\r\n        <mat-icon svgIcon=\"questions\" class=\"questions\" (click)=\"openModal(template)\" style=\"float:right;\"></mat-icon>\r\n        <br/>\r\n        <textarea matInput placeholder=\"vacation rental owners have trouble buying and managing rentals supplies like linens, towels, body wash and soap\"\r\n          [(ngModel)]=\"problem\" name=\"problem\" cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"6\"></textarea>\r\n\r\n        <br/>\r\n        <br/>\r\n        <div class=\"text-center\">\r\n          <label *ngIf=\"emptyAnswerError\" class=\"validation\">Please enter a value</label>\r\n        </div>\r\n        <br/>\r\n        <div>\r\n          <app-corousel [isCurrent2]= isCurrent></app-corousel>\r\n        </div>\r\n        <div class=\"next-button\">\r\n          <br>\r\n          <button type=\"button\" (click)=\"saveChanges()\" mat-raised-button class=\"button-width\">\r\n            Next </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<ng-template #template style=\"border: 3px white;\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" style=\"color:white;\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body popup-body\">\r\n    <h4 class=\"modal-title\">Problem</h4>\r\n    <div class=\"content\">\r\n      <label class=\"popup-image\">\r\n        <img src=\"assets/images/nameicon.svg \" class=\"image-size\">\r\n      </label>\r\n    </div>\r\n    <p class=\"content popup\"> Keep the problem short. Explain the situation with a small story. Don't talk about your solution yet! </p>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/question2/question2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/question2/question2.component.ts ***!
  \**************************************************/
/*! exports provided: Question2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question2Component", function() { return Question2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Question2Component = /** @class */ (function () {
    function Question2Component(router, modalService, matIconRegistry, domSanitizer) {
        this.router = router;
        this.modalService = modalService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.wordLimit = 120;
        this.emptyAnswerError = false;
        this.isCurrent = true;
        this.wordnumber = false;
        this.isValid1 = false;
        this.isValid2 = true;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.review = false;
        this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"));
        this.matIconRegistry.addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"));
    }
    Object.defineProperty(Question2Component.prototype, "totalWords", {
        get: function () {
            return this.wor(this.problem || '') - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question2Component.prototype, "maxwordsError", {
        get: function () {
            return this.totalWords > this.wordLimit;
        },
        enumerable: true,
        configurable: true
    });
    Question2Component.prototype.showWordCount = function () {
        this.words = this.wor(this.problem);
        this.wordnumber = true;
    };
    Question2Component.prototype.wor = function (s) {
        var count = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === " " || s[i] === "," || s[i] === "." || s[i] === "\n" || s[i] === "  ") {
                count = count + 1;
            }
        }
        return count + 1;
    };
    Question2Component.prototype.loading = function () {
        if (JSON.parse(localStorage.getItem('question2'))) {
            this.problem = JSON.parse(localStorage.getItem('question2'));
        }
        if (JSON.parse(localStorage.getItem('question1'))) {
            this.isValid1 = true;
        }
        if (JSON.parse(localStorage.getItem('question3'))) {
            this.isValid3 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid4 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.review = true;
        }
    };
    Question2Component.prototype.ngOnInit = function () {
        this.wordnumber = false;
        this.loading();
    };
    Question2Component.prototype.saveChanges = function () {
        var _this = this;
        if (!!this.problem && !this.maxwordsError) {
            localStorage.setItem('question2', JSON.stringify(this.problem));
            this.router.navigate(['/question3']);
        }
        else {
            this.emptyAnswerError = true;
            setTimeout(function () { return _this.emptyAnswerError = false; }, 1500);
        }
    };
    Question2Component.prototype.reviewChanges = function () {
        this.router.navigate(['/reviewpage']);
    };
    Question2Component.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question2Component.prototype, "totalWords", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question2Component.prototype, "maxwordsError", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"])
    ], Question2Component.prototype, "autosize", void 0);
    Question2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question2',
            template: __webpack_require__(/*! ./question2.component.html */ "./src/app/question2/question2.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./question2.component.css */ "./src/app/question2/question2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], Question2Component);
    return Question2Component;
}());



/***/ }),

/***/ "./src/app/question3/question3.component.css":
/*!***************************************************!*\
  !*** ./src/app/question3/question3.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-width{\r\n  width: 12em;\r\n}\r\n.popup-image{\r\n  background-color:white;\r\n  border-radius: 5.5rem;\r\n  text-align:center;\r\n  padding:15px;\r\n}\r\n.content{\r\n  text-align:center;margin-top:10px;\r\n}\r\n.image-size{\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\nbutton{\r\n  outline: none;\r\n}\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n.text-center{\r\n    text-align: center;\r\n    height: 30px;\r\n  }\r\n.validation{\r\n    font-size: 1rem;\r\n    -webkit-animation: fadeinout 2s linear forwards;\r\n            animation: fadeinout 2s linear forwards;\r\n  }\r\n@-webkit-keyframes fadeinout {\r\n  0%,100% { opacity: 0; }\r\n  50% { opacity: 1; }\r\n  }\r\n@keyframes fadeinout {\r\n  0%,100% { opacity: 0; }\r\n  50% { opacity: 1; }\r\n  }\r\n.form-control{\r\n    margin-top: 20px;\r\n    font-family: 'Roboto Mono', monospace;\r\n    border:none;\r\n  }\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 5px;\r\n  }\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.side-nav{\r\n  background-color: black !important;\r\n  color: white ;\r\n  width: 250px;\r\n  display: block;\r\n  \r\n}\r\n.review-button{\r\nmargin-top: 20px;\r\n}\r\n.name-icon{\r\n  color: white !important;\r\n}\r\n.label-class{\r\n  color: grey;\r\n}\r\n.review{\r\n  text-align: center !important;\r\n}\r\n.activ-class{\r\n  background-color: white !important;\r\n  color: black !important;\r\n}\r\n.inactiv-class{\r\n  background-color: grey !important;\r\n  color: white !important;\r\n}\r\n.index-button{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n  color: white !important;\r\n}\r\n.index-button:disabled{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n}\r\n.index-button:hover{\r\n  border: none;\r\n}\r\n.index-button:before{\r\n  border: none !important;\r\n}\r\n.index-button:focus {\r\n  outline: none;\r\n}\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 5.5rem;\r\n  width: 4.5rem !important;\r\n  height: 4.5rem !important;\r\n}\r\n.svg_icon{\r\n\twidth: 8rem !important;\r\n\theight: auto !important;\r\n  padding: 10px !important;\r\n  color: black;\r\n  border: none;\r\n  }\r\nmat-icon{\r\n  width: 10%;\r\n}\r\nmat-icon.disabled {\r\n  pointer-events: none;\r\n  cursor:default;\r\n}\r\n.questions{\r\n  width: 3rem !important;\r\n}\r\n.label1{\r\n  font-size: 18px;\r\n  margin: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\ninput { \r\n  border: none;\r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: left;    \r\n}\r\ntextarea{\r\n  width:100%;\r\n  border: none;  \r\n  overflow:hidden;\r\n  font-size: 20px;  \r\n  text-align: left;\r\n  outline: none;\r\n    box-shadow: none;\r\n    background-attachment: local;\r\n    background-attachment: local;\r\n    background-image:\r\n        linear-gradient(to right, white 10px, transparent 10px),\r\n        linear-gradient(to left, white 10px, transparent 10px),\r\n        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);\r\n    line-height: 31px;    \r\n}\r\n.modal-content{\r\n  min-height: -webkit-fill-available;\r\n  border: 20px solid white !important;\r\n  border-radius: none;\r\n  background-color: black;\r\n}\r\n.popup{\r\nmargin: 20px;\r\n  display: block;\r\n  text-align: center;\r\n  justify-content: initial;\r\n}\r\n.next-button{\r\n  text-align:center;\r\n}\r\n.popup-body{\r\n  text-align: center;\r\n  color: white;\r\n  background-color: black;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n.mat-drawer-container{\r\n  background-color: white;\r\n\r\n}\r\n.content-margin{\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n.modal-title{\r\n  margin: 20px;\r\n  text-align: center;\r\n}\r\n.mat-drawer.mat-drawer-push  {background-color: black;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/question3/question3.component.html":
/*!****************************************************!*\
  !*** ./src/app/question3/question3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-sidenav-container>\r\n    <mat-sidenav #sidenavright mode=\"push\" position=\"end\">\r\n      <app-sidenav [isCurrent3] = isCurrent ></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <app-nav (navToggle)=\"sidenavright.toggle()\"></app-nav>\r\n        <div class=\"container\" id=\"question1\">\r\n            <form class=\"form-control\">\r\n                <mat-icon svgIcon=\"questions\" class=\"questions\" (click)=\"openModal(template)\" style=\"float:right;\"></mat-icon>\r\n              <label class=\"content-margin\">The problem can be solved</label>\r\n              <br/>\r\n              <br/>\r\n              <textarea matInput placeholder=\"with a subscription services business that will automatically replenish the supplies every time is needed\" [(ngModel)]=\"solution\" name=\"solution\" cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"5\"></textarea> \r\n             \r\n              <br/>\r\n              <br/>\r\n              <div class=\"text-center\">\r\n                  <label *ngIf=\"emptyAnswerError\" class=\"validation\" >Please enter a value</label>\r\n              </div>\r\n              <br/>\r\n              <div>\r\n                  <app-corousel [isCurrent3] = isCurrent></app-corousel>\r\n              </div>\r\n              <div class=\"next-button\">\r\n                  <br>\r\n                  <button  type=\"button\" (click)=\"saveChanges()\" mat-raised-button class=\"button-width\"> \r\n                     Next  </button>\r\n               </div>\r\n            </form>\r\n          </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n<ng-template #template style=\"border: 3px white;\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" style=\"color:white;\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body popup-body container\">\r\n    <h4 class=\"modal-title\">Solution</h4>\r\n    <div class=\"content\">\r\n      <label class=\"popup-image\">\r\n        <img src=\"assets/images/nameicon.svg \" class=\"image-size\">\r\n      </label>\r\n    </div>\r\n    <p class=\"content popup\"> This is the moment to explain your product or service. Explain how you are solving the problem for the user(s).</p>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n   \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/question3/question3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/question3/question3.component.ts ***!
  \**************************************************/
/*! exports provided: Question3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question3Component", function() { return Question3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Question3Component = /** @class */ (function () {
    function Question3Component(router, modalService, matIconRegistry, domSanitizer) {
        this.router = router;
        this.modalService = modalService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.wordLimit = 120;
        this.isCurrent = true;
        this.emptyAnswerError = false;
        this.wordnumber = false;
        this.isValid1 = false;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.review = false;
        this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"));
        this.matIconRegistry.addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"));
    }
    Object.defineProperty(Question3Component.prototype, "totalWords", {
        get: function () {
            return this.wor(this.solution || '') - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question3Component.prototype, "maxwordsError", {
        get: function () {
            return this.totalWords > this.wordLimit;
        },
        enumerable: true,
        configurable: true
    });
    Question3Component.prototype.showWordCount = function () {
        this.words = this.wor(this.solution);
        this.wordnumber = true;
    };
    Question3Component.prototype.wor = function (s) {
        var count = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === " " || s[i] === "," || s[i] === "." || s[i] === "\n" || s[i] === "  ") {
                count = count + 1;
            }
        }
        return count + 1;
    };
    Question3Component.prototype.ngOnInit = function () {
        this.wordnumber = false;
        this.loading();
    };
    Question3Component.prototype.loading = function () {
        if (JSON.parse(localStorage.getItem('question3'))) {
            this.solution = JSON.parse(localStorage.getItem('question3'));
        }
        if (JSON.parse(localStorage.getItem('question1'))) {
            this.isValid1 = true;
        }
        if (JSON.parse(localStorage.getItem('question3'))) {
            this.isValid3 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid4 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.review = true;
            console.log("review" + this.review);
        }
    };
    Question3Component.prototype.saveChanges = function () {
        var _this = this;
        if (!!this.solution && !this.maxwordsError) {
            localStorage.setItem('question3', JSON.stringify(this.solution));
            this.router.navigate(['/question4']);
        }
        else {
            this.emptyAnswerError = true;
            setTimeout(function () { return _this.emptyAnswerError = false; }, 1500);
        }
    };
    Question3Component.prototype.reviewChanges = function () {
        this.router.navigate(['/reviewpage']);
    };
    Question3Component.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question3Component.prototype, "totalWords", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question3Component.prototype, "maxwordsError", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"])
    ], Question3Component.prototype, "autosize", void 0);
    Question3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question3',
            template: __webpack_require__(/*! ./question3.component.html */ "./src/app/question3/question3.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./question3.component.css */ "./src/app/question3/question3.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], Question3Component);
    return Question3Component;
}());



/***/ }),

/***/ "./src/app/question4/question4.component.css":
/*!***************************************************!*\
  !*** ./src/app/question4/question4.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-width{\r\n  width: 12em;\r\n}\r\n.popup-image{\r\n  background-color:white;\r\n  border-radius: 5.5rem;\r\n  text-align:center;\r\n  padding:15px;\r\n}\r\n.content{\r\n  text-align:center;margin-top:10px;\r\n}\r\n.image-size{\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\nbutton{\r\n  outline: none;\r\n}\r\n.form-control{\r\n  margin-top: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n  border:none;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n  height: 30px;\r\n}\r\n.validation{\r\n  font-size: 1rem;\r\n  -webkit-animation: fadeinout 2s linear forwards;\r\n          animation: fadeinout 2s linear forwards;\r\n}\r\n@-webkit-keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\n@keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 5px;\r\n  }\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.side-nav{\r\n  background-color: black !important;\r\n  color: white ;\r\n  width: 250px;\r\n  display: block;\r\n  \r\n}\r\n.review-button{\r\nmargin-top: 20px;\r\n}\r\n.name-icon{\r\n  color: white !important;\r\n}\r\n.label-class{\r\n  color: grey;\r\n}\r\n.review{\r\n  text-align: center !important;\r\n}\r\n.activ-class{\r\n  background-color: white !important;\r\n  color: black !important;\r\n}\r\n.inactiv-class{\r\n  background-color: grey !important;\r\n  color: white !important;\r\n}\r\n.index-button{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n  color: white !important;\r\n}\r\n.index-button:disabled{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n}\r\n.index-button:hover{\r\n  border: none;\r\n}\r\n.index-button:before{\r\n  border: none !important;\r\n}\r\n.index-button:focus {\r\n  outline: none;\r\n}\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 5.5rem;\r\n  width: 4.5rem !important;\r\n  height: 4.5rem !important;\r\n}\r\n.svg_icon{\r\n\twidth: 8rem !important;\r\n\theight: auto !important;\r\n  padding: 10px !important;\r\n  color: black;\r\n  border: none;\r\n  }\r\nmat-icon{\r\n  width: 10%;\r\n}\r\nmat-icon.disabled {\r\n  pointer-events: none;\r\n  cursor:default;\r\n}\r\n.questions{\r\n  width: 3rem !important;\r\n}\r\n.label1{\r\n  font-size: 18px;\r\n  margin: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\ninput { \r\n  border: none; \r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: left;    \r\n}\r\ntextarea{\r\n  width:100%;\r\n  border: none;  \r\n  overflow:hidden;\r\n  font-size: 20px;  \r\n  text-align: left;\r\n  outline: none;\r\n    box-shadow: none;   \r\n    background-attachment: local;\r\n    background-attachment: local;\r\n    background-image:\r\n        linear-gradient(to right, white 10px, transparent 10px),\r\n        linear-gradient(to left, white 10px, transparent 10px),\r\n        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);\r\n    line-height: 31px;\r\n}\r\n.modal-content{\r\n  min-height: -webkit-fill-available;\r\n  border: 20px solid white !important;\r\n  border-radius: none;\r\n  background-color: black;\r\n}\r\n.popup{\r\n  margin: 20px;\r\n  display: block;\r\n  text-align: center;\r\n  justify-content: initial;\r\n}\r\n.next-button{\r\n  text-align:center;\r\n}\r\n.popup-body{\r\n  color: white;\r\n  background-color: black;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n.mat-drawer-container{\r\n  background-color: white;\r\n\r\n}\r\n.content-margin{\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n.modal-title{\r\n  margin: 20px;\r\n  text-align: center;\r\n}\r\n.mat-drawer.mat-drawer-push  {background-color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/question4/question4.component.html":
/*!****************************************************!*\
  !*** ./src/app/question4/question4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-sidenav-container>\r\n      <mat-sidenav #sidenavright mode=\"push\" position=\"end\">\r\n        <app-sidenav [isCurrent4] = isCurrent ></app-sidenav>\r\n      </mat-sidenav>\r\n      <mat-sidenav-content>\r\n          <app-nav (navToggle)=\"sidenavright.toggle()\"></app-nav>\r\n          <div class=\"container\" id=\"question1\">\r\n              <form class=\"form-control\">\r\n                  <mat-icon svgIcon=\"questions\" class=\"questions\" (click)=\"openModal(template)\" style=\"float:right;\"></mat-icon>\r\n                <label class=\"content-margin\">In this way</label>\r\n                <br/><br/>\r\n                <textarea matInput placeholder=\"The owner will streamline the operation and at the same time reduce the cost associated with last-minute purchases.\" [(ngModel)]=\"value\" name=\"value\" cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"5\"></textarea> \r\n               \r\n                <br/>\r\n                <br/>\r\n                <div class=\"text-center\">\r\n                    <label *ngIf=\"emptyAnswerError\" class=\"validation\" >Please enter a value</label>\r\n                </div>\r\n                <br/>\r\n                <div>\r\n                    <app-corousel [isCurrent4] = isCurrent></app-corousel>\r\n                </div>\r\n                <div class=\"next-button\">\r\n                    <br>\r\n                    <button  type=\"button\" (click)=\"saveChanges()\" mat-raised-button class=\"button-width\"> \r\n                       Next  </button>\r\n                 </div>\r\n              </form>\r\n            </div>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n \r\n<ng-template #template style=\"border: 3px white;\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" style=\"color:white;\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body popup-body\">\r\n      <h4 class=\"modal-title\">Value</h4>\r\n      <div class=\"content\">\r\n        <label class=\"popup-image\">\r\n          <img src=\"assets/images/nameicon.svg \" class=\"image-size\">\r\n        </label>\r\n      </div>\r\n      <p class=\"content popup\"> What is the biggest advantage/benefit you're offering with your product or service?</p>\r\n    </div>\r\n  </ng-template>"

/***/ }),

/***/ "./src/app/question4/question4.component.ts":
/*!**************************************************!*\
  !*** ./src/app/question4/question4.component.ts ***!
  \**************************************************/
/*! exports provided: Question4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question4Component", function() { return Question4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Question4Component = /** @class */ (function () {
    function Question4Component(router, modalService, matIconRegistry, domSanitizer) {
        this.router = router;
        this.modalService = modalService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.wordLimit = 120;
        this.wordnumber = false;
        this.emptyAnswerError = false;
        this.isCurrent = true;
        this.isValid1 = false;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.review = false;
        this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"))
            .addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"));
    }
    Object.defineProperty(Question4Component.prototype, "totalWords", {
        get: function () {
            return this.wor(this.value || '') - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question4Component.prototype, "maxwordsError", {
        get: function () {
            return this.totalWords > this.wordLimit;
        },
        enumerable: true,
        configurable: true
    });
    Question4Component.prototype.showWordCount = function () {
        this.words = this.wor(this.value);
        this.wordnumber = true;
    };
    Question4Component.prototype.wor = function (s) {
        var count = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === " " || s[i] === "," || s[i] === "." || s[i] === "\n" || s[i] === "  ") {
                count = count + 1;
            }
        }
        return count + 1;
    };
    Question4Component.prototype.ngOnInit = function () {
        this.wordnumber = false;
        this.loading();
    };
    Question4Component.prototype.loading = function () {
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.value = JSON.parse(localStorage.getItem('question4'));
        }
        if (JSON.parse(localStorage.getItem('question1'))) {
            this.isValid1 = true;
        }
        if (JSON.parse(localStorage.getItem('question3'))) {
            this.isValid3 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid4 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.review = true;
        }
    };
    Question4Component.prototype.saveChanges = function () {
        var _this = this;
        if (!!this.value && !this.maxwordsError) {
            localStorage.setItem('question4', JSON.stringify(this.value));
            this.router.navigate(['/question5']);
        }
        else {
            this.emptyAnswerError = true;
            setTimeout(function () { return _this.emptyAnswerError = false; }, 1500);
        }
    };
    Question4Component.prototype.reviewChanges = function () {
        this.router.navigate(['/reviewpage']);
    };
    Question4Component.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question4Component.prototype, "totalWords", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question4Component.prototype, "maxwordsError", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"])
    ], Question4Component.prototype, "autosize", void 0);
    Question4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question4',
            template: __webpack_require__(/*! ./question4.component.html */ "./src/app/question4/question4.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./question4.component.css */ "./src/app/question4/question4.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], Question4Component);
    return Question4Component;
}());



/***/ }),

/***/ "./src/app/question5/question5.component.css":
/*!***************************************************!*\
  !*** ./src/app/question5/question5.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-width{\r\n  width: 12em;\r\n}\r\n.popup-image{\r\n  background-color:white;\r\n  border-radius: 5.5rem;\r\n  text-align:center;\r\n  padding:15px;\r\n}\r\n.content{\r\n  text-align:center;margin-top:10px;\r\n}\r\n.image-size{\r\n  height: 3rem;\r\n  width: 3rem;\r\n}\r\nbutton{\r\n  outline: none;\r\n}\r\n.form-control{\r\n  margin-top: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n  border:none;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n  height: 30px;\r\n}\r\n.validation{\r\n  font-size: 1rem;\r\n  -webkit-animation: fadeinout 2s linear forwards;\r\n          animation: fadeinout 2s linear forwards;\r\n}\r\n@-webkit-keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\n@keyframes fadeinout {\r\n0%,100% { opacity: 0; }\r\n50% { opacity: 1; }\r\n}\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 5px;\r\n  }\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.side-nav{\r\n  background-color: black !important;\r\n  color: white ;\r\n  width: 250px;\r\n  display: block;\r\n  \r\n}\r\n.review-button{\r\nmargin-top: 20px;\r\n}\r\n.name-icon{\r\n  color: white !important;\r\n}\r\n.label-class{\r\n  color: grey;\r\n}\r\n.review{\r\n  text-align: center !important;\r\n}\r\n.activ-class{\r\n  background-color: white !important;\r\n  color: black !important;\r\n}\r\n.inactiv-class{\r\n  background-color: grey !important;\r\n  color: white !important;\r\n}\r\n.index-button{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n  color: white !important;\r\n}\r\n.index-button:disabled{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n}\r\n.index-button:hover{\r\n  border: none;\r\n}\r\n.index-button:before{\r\n  border: none !important;\r\n}\r\n.index-button:focus {\r\n  outline: none;\r\n}\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 5.5rem;\r\n  width: 4.5rem !important;\r\n  height: 4.5rem !important;\r\n}\r\n.svg_icon{\r\n\twidth: 8rem !important;\r\n\theight: auto !important;\r\n  padding: 10px !important;\r\n  color: black;\r\n  border: none;\r\n  }\r\nmat-icon{\r\n  width: 10%;\r\n}\r\nmat-icon.disabled {\r\n  pointer-events: none;\r\n  cursor:default;\r\n}\r\n.questions{\r\n  width: 3rem !important;\r\n}\r\n.label1{\r\n  font-size: 18px;\r\n  margin: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\ninput { \r\n  border: none; \r\n  /* border-bottom: 1px solid black; */\r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: left;    \r\n}\r\ntextarea{\r\n  width:100%;\r\n  border: none;  \r\n  /* border-bottom: 1px solid black; */\r\n  overflow:hidden;\r\n  font-size: 20px;  \r\n  text-align: left;\r\n  outline: none;\r\n    box-shadow: none; \r\n    background-attachment: local;\r\n    background-attachment: local;\r\n    background-image:\r\n        linear-gradient(to right, white 10px, transparent 10px),\r\n        linear-gradient(to left, white 10px, transparent 10px),\r\n        repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);\r\n    line-height: 31px;   \r\n}\r\n.modal-content{\r\n  min-height: -webkit-fill-available;\r\n  border: 20px solid white !important;\r\n  border-radius: none;\r\n  background-color: black;\r\n}\r\n.popup{\r\n  margin: 20px;\r\n  display: block;\r\n  text-align: center;\r\n  justify-content: initial;\r\n}\r\n.next-button{\r\n  text-align:center;\r\n  /* padding-top: 210px; */\r\n}\r\n.popup-body{\r\n  color: white;\r\n  background-color: black;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n.mat-drawer-container{\r\n  background-color: white;\r\n\r\n}\r\n.content-margin{\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n.modal-title{\r\n  margin:20px;\r\n  text-align: center;\r\n}\r\n.mat-drawer.mat-drawer-push  {background-color: black;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/question5/question5.component.html":
/*!****************************************************!*\
  !*** ./src/app/question5/question5.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <mat-sidenav-container>\r\n      <mat-sidenav #sidenavright mode=\"push\" position=\"end\">\r\n        <app-sidenav [isCurrent5] = isCurrent ></app-sidenav>\r\n      </mat-sidenav>\r\n      <mat-sidenav-content>\r\n          <app-nav (navToggle)=\"sidenavright.toggle()\"></app-nav>\r\n          <div class=\"container\" id=\"question1\">\r\n              <form class=\"form-control\">\r\n                  <mat-icon svgIcon=\"questions\" class=\"questions\" (click)=\"openModal(template)\" style=\"float:right;\"></mat-icon>\r\n                <label class=\"content-margin\">We are looking for</label>\r\n                <br/>\r\n                <br/>\r\n                <textarea matInput placeholder=\"$10K to work for a 4 to 6 week on A/B testing the value proposition and build an email list of possible early customers\" [(ngModel)]=\"proof\" name=\"proof\" cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"5\"></textarea> \r\n                \r\n                <br/>\r\n                <br/>\r\n                <div class=\"text-center\">\r\n                    <label *ngIf=\"emptyAnswerError\" class=\"validation\" >Please enter a value</label>\r\n                </div>\r\n                <br/>\r\n                <div>\r\n                    <app-corousel [isCurrent5] = isCurrent></app-corousel>\r\n                </div>\r\n                <div class=\"next-button\">\r\n                    \r\n                    <br>\r\n                    <button  type=\"button\" (click)=\"saveChanges()\" mat-raised-button class=\"button-width\"> \r\n                       Next  </button>\r\n                 </div>\r\n              </form>\r\n            </div>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n<ng-template #template style=\"border: 3px white;\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" style=\"color:white;\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body popup-body\">\r\n      <h4 class=\"modal-title\">Proof</h4>\r\n      <div class=\"content\">\r\n        <label class=\"popup-image\">\r\n          <img src=\"assets/images/nameicon.svg \" class=\"image-size\">\r\n        </label>\r\n      </div>\r\n      <p class=\"content popup\">Explain here what you are looking for and what would you do with that money.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n     "

/***/ }),

/***/ "./src/app/question5/question5.component.ts":
/*!**************************************************!*\
  !*** ./src/app/question5/question5.component.ts ***!
  \**************************************************/
/*! exports provided: Question5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question5Component", function() { return Question5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Question5Component = /** @class */ (function () {
    function Question5Component(router, modalService, matIconRegistry, domSanitizer) {
        this.router = router;
        this.modalService = modalService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.wordLimit = 120;
        this.isCurrent = true;
        this.emptyAnswerError = false;
        this.wordnumber = false;
        this.isValid1 = false;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.review = false;
        this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"))
            .addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"));
    }
    Object.defineProperty(Question5Component.prototype, "totalWords", {
        get: function () {
            return this.wor(this.proof || '') - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question5Component.prototype, "maxwordsError", {
        get: function () {
            return this.totalWords > this.wordLimit;
        },
        enumerable: true,
        configurable: true
    });
    Question5Component.prototype.showWordCount = function () {
        this.words = this.wor(this.proof);
        this.wordnumber = true;
    };
    Question5Component.prototype.wor = function (s) {
        var count = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === " " || s[i] === "," || s[i] === "." || s[i] === "\n" || s[i] === "  ") {
                count = count + 1;
            }
        }
        return count + 1;
    };
    Question5Component.prototype.ngOnInit = function () {
        this.wordnumber = false;
        this.loading();
    };
    Question5Component.prototype.loading = function () {
        if (JSON.parse(localStorage.getItem('question5'))) {
            this.proof = JSON.parse(localStorage.getItem('question5'));
        }
        if (JSON.parse(localStorage.getItem('question1'))) {
            this.isValid1 = true;
        }
        if (JSON.parse(localStorage.getItem('question3'))) {
            this.isValid3 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid4 = true;
        }
        if (JSON.parse(localStorage.getItem('question4'))) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.review = true;
            console.log("review" + this.review);
        }
    };
    Question5Component.prototype.saveChanges = function () {
        var _this = this;
        // white-space: pre-line;
        // pitch@vivaiolab.com
        // Pitch Submition
        if (!!this.proof && !this.maxwordsError) {
            localStorage.setItem('question5', JSON.stringify(this.proof));
            this.router.navigate(['/reviewpage']);
        }
        else {
            this.emptyAnswerError = true;
            setTimeout(function () { return _this.emptyAnswerError = false; }, 1500);
        }
    };
    Question5Component.prototype.reviewChanges = function () {
        this.router.navigate(['/reviewpage']);
    };
    Question5Component.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question5Component.prototype, "totalWords", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Question5Component.prototype, "maxwordsError", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"])
    ], Question5Component.prototype, "autosize", void 0);
    Question5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question5',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./question5.component.html */ "./src/app/question5/question5.component.html"),
            styles: [__webpack_require__(/*! ./question5.component.css */ "./src/app/question5/question5.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], Question5Component);
    return Question5Component;
}());



/***/ }),

/***/ "./src/app/reviewpage/reviewpage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/reviewpage/reviewpage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-width{\r\n  width: 12em;\r\n}\r\n\r\n.content{\r\n  text-align:center;margin-top:10px;\r\n}\r\n\r\nbutton{\r\n  outline: none;\r\n}\r\n\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 5px;\r\n  }\r\n\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.side-nav{\r\n  background-color: black !important;\r\n  color: white ;\r\n  width: 250px;\r\n  display: block;\r\n  \r\n}\r\n\r\n.review-button{\r\nmargin-top: 20px;\r\n}\r\n\r\n.name-icon{\r\n  color: white !important;\r\n}\r\n\r\n.label-class{\r\n  color: grey;\r\n}\r\n\r\n.review{\r\n  text-align: center !important;\r\n}\r\n\r\n.activ-class{\r\n  background-color: white !important;\r\n  color: black !important;\r\n}\r\n\r\n.inactiv-class{\r\n  background-color: grey !important;\r\n  color: white !important;\r\n}\r\n\r\n.index-button{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n  color: white !important;\r\n}\r\n\r\n.index-button:disabled{\r\n  background:transparent;\r\n  border:none;\r\n  padding-top:20px;\r\n}\r\n\r\n.index-button:hover{\r\n  border: none;\r\n}\r\n\r\n.index-button:before{\r\n  border: none !important;\r\n}\r\n\r\n.index-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 5.5rem;\r\n  width: 4.5rem !important;\r\n  height: 4.5rem !important;\r\n}\r\n\r\n.svg_icon{\r\n\twidth: 8rem !important;\r\n\theight: auto !important;\r\n  padding: 10px !important;\r\n  color: black;\r\n  border: none;\r\n  }\r\n\r\nmat-icon{\r\n  width: 10%;\r\n}\r\n\r\nmat-icon.disabled {\r\n  pointer-events: none;\r\n  cursor:default;\r\n}\r\n\r\n.questions{\r\n  width: 3rem !important;\r\n}\r\n\r\n.label1{\r\n  font-size: 18px;\r\n  margin: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\ninput { \r\n  border: none; \r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: left;    \r\n}\r\n\r\ntextarea{\r\n  width:100%;\r\n  border: none;  \r\n  overflow:hidden;\r\n  font-size: 20px;  \r\n  text-align: left;\r\n  outline: none;\r\n    box-shadow: none;    \r\n}\r\n\r\n.form-control{\r\n  margin-top: 20px;\r\n  font-family: 'Roboto Mono', monospace;\r\n  border:none;\r\n  /* text-align: center; */\r\n}\r\n\r\n.modal-content{\r\n  border: 20px solid white !important;\r\n  border-radius: none;\r\n  background-color: black;\r\n  width: 100%;\r\n}\r\n\r\n.next-button{\r\n  text-align:center;\r\n}\r\n\r\n.popup{\r\n \r\n  display: block;\r\n  text-align: center;\r\n  justify-content: initial;\r\n}\r\n\r\n.popup-body{\r\n  color: white;\r\n  background-color: black;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.mat-drawer-container{\r\n  color: black!important;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.content-margin{\r\n  color: black;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-drawer.mat-drawer-push  {background-color: black;\r\n}\r\n\r\n.next-button{\r\n  text-align:center;\r\n}\r\n\r\n.container{\r\n  margin-top: 2rem;\r\n  /* margin-left: 4rem; */\r\n}"

/***/ }),

/***/ "./src/app/reviewpage/reviewpage.component.html":
/*!******************************************************!*\
  !*** ./src/app/reviewpage/reviewpage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-sidenav-container>\r\n        <mat-sidenav #sidenavright mode=\"push\" position=\"end\">\r\n          <app-sidenav  [isCurrentReview]= isCurrent  ></app-sidenav>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n            <app-nav (navToggle)=\"sidenavright.toggle()\"></app-nav>\r\n            <div class=\"container\" id=\"reviewpage\">\r\n                <form class=\"form-control\">\r\n                  <p>\r\n                    My name is {{question1}}\r\n                    <img routerLink=\"/question1\" class=\"edit-icon\" routerLinkActive=\"active\" src=\"assets/images/edit icon.svg\" height=\"15\" width=\"15\">\r\n          \r\n                    <br/> I noticed that {{question2}}\r\n                    <img routerLink=\"/question2\" class=\"edit-icon\" routerLinkActive=\"active\" alt=\"edit\" src=\"assets/images/edit icon.svg\" height=\"15\"\r\n                      width=\"15\">\r\n                    <br/> The problem can be solved {{question3}}\r\n                    <img routerLink=\"/question3\" class=\"edit-icon\" routerLinkActive=\"active\" src=\"assets/images/edit icon.svg\" height=\"15\" width=\"15\">\r\n                    <br/> In this way {{question4}}\r\n                    <img routerLink=\"/question4\" class=\"edit-icon\" routerLinkActive=\"active\" src=\"assets/images/edit icon.svg\" height=\"15\" width=\"15\">\r\n                    <br/> We are looking for {{question5}}\r\n                    <img routerLink=\"/question5\" class=\"edit-icon\" routerLinkActive=\"active\" src=\"assets/images/edit icon.svg\" height=\"15\" width=\"15\">\r\n          \r\n                  </p>\r\n               \r\n                </form>\r\n              </div>\r\n              <div class=\"next-button\">\r\n                    <button  type=\"button\" (click)=\"savToBackend();openModal(template)\"  mat-raised-button class=\"button-width\"> \r\n                        Save\r\n                  </button>\r\n                </div>\r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n<ng-template #template style=\"border: 3px #ffffff;\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" style=\"color:white;\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body popup popup-body\">\r\n    <div class=\"container\">\r\n      <p class=\"para\">Is this your final version?</p>\r\n      <br/>\r\n      <br/>\r\n      <div style=\"text-align:center;\">\r\n        <button routerLink=\"/thankyou\" type=\"button\" style=\"float: center;\" mat-raised-button style=\"width:70%;\" (click)=\"modalRef.hide()\">\r\n          <a href=\"mailto: fabio@vivaiolab.com?subject=Please find the details&body=Hi Vivaio Team%0D%0A%0DMy name is {{question1}}%0D%0DHere is my pitch.%0D%0DI noticed that {{question2}}.%0DThe problem can be solved {{question3}}.%0DIn this way {{question4}}.%0DWe are looking for {{question5}}.%0D%0DLooking forward to hearing from you.%0DThanks%0DName:\">Yes! Email To Us </a>\r\n        </button>\r\n      </div>\r\n      <p class=\"content\">or</p>\r\n      <div style=\"text-align:center;\">\r\n        <button routerLink=\"/reviewpage\" routerLinkActive=\"active\" type=\"button\" (click)=\"modalRef.hide()\" mat-raised-button style=\"width:70%;\">\r\n        No!Keep Editing </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/reviewpage/reviewpage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/reviewpage/reviewpage.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewpageComponent", function() { return ReviewpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _service_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/questions.service */ "./src/service/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewpageComponent = /** @class */ (function () {
    function ReviewpageComponent(questionService, modalService, matIconRegistry, domSanitizer) {
        this.questionService = questionService;
        this.modalService = modalService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.isCurrent = true;
        this.matIconRegistry.addSvgIcon("menu icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/menu icon.svg"))
            .addSvgIcon("edit-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/edit icon.svg"));
    }
    ReviewpageComponent.prototype.ngOnInit = function () {
        this.loading();
    };
    ReviewpageComponent.prototype.loading = function () {
        this.question1 = JSON.parse(localStorage.getItem('question1'));
        this.question2 = JSON.parse(localStorage.getItem('question2'));
        this.question3 = JSON.parse(localStorage.getItem('question3'));
        this.question4 = JSON.parse(localStorage.getItem('question4'));
        this.question5 = JSON.parse(localStorage.getItem('question5'));
    };
    ReviewpageComponent.prototype.savToBackend = function () {
        this.questionsModel = this.prepareSaveQuestions();
        if (this.questionsModel) {
            this.questionService.saveQuestions(this.questionsModel).then(function (data) {
            });
        }
    };
    ReviewpageComponent.prototype.prepareSaveQuestions = function () {
        var saveQues = {
            question1: JSON.parse(localStorage.getItem('question1')),
            question2: JSON.parse(localStorage.getItem('question2')),
            question3: JSON.parse(localStorage.getItem('question3')),
            question4: JSON.parse(localStorage.getItem('question4')),
            question5: JSON.parse(localStorage.getItem('question5'))
        };
        return saveQues;
    };
    ReviewpageComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ReviewpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewpage',
            template: __webpack_require__(/*! ./reviewpage.component.html */ "./src/app/reviewpage/reviewpage.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./reviewpage.component.css */ "./src/app/reviewpage/reviewpage.component.css")]
        }),
        __metadata("design:paramtypes", [_service_questions_service__WEBPACK_IMPORTED_MODULE_4__["QuestionsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ReviewpageComponent);
    return ReviewpageComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// const query = (s,a,o={optional:true})=>q(s,a,o);
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
                ], { optional: true }),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        ])
    ])
]);
// export default {};


/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-width{\r\n    min-width: 200px !important;\r\nwidth: 85vw !important;\r\nmax-width: 400px !important;\r\npadding-left: 50px;\r\n/* background-color: black; */\r\n/* align-items: center; */\r\n}\r\n/* \r\n.mat-raised-button{\r\n    align-items: center; \r\n    background-color: white;\r\n    color: black !important;\r\n    margin-left: 10px;\r\n} */\r\n.name-icon{\r\n    background-color: white;\r\n    color: black !important;\r\n    \r\n}\r\n.corousel{\r\n    border: radius 4.5rem;\r\n    background: white;\r\n    box-shadow: 2px 2px 2px 2px grey; \r\n    margin: 20px;\r\n    padding: 15px;\r\n    height: 5rem;\r\n    min-width: 5rem;\r\n    outline: none;\r\n    \r\n  }\r\nbutton{\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n}\r\n.current-class{\r\n    background: green !important;\r\n}\r\n.disable-class{\r\n  background: grey ;\r\n  color : white;\r\n}\r\n.current-text{\r\n    color: green !important;\r\n}\r\n.disable-text{\r\n  \r\n  color : grey;\r\n}\r\n.disable-review{\r\n  \r\n    background-color : grey !important;\r\n    color: black  !important;\r\n  }\r\n.current-review{\r\n    background-color: green !important;\r\n    color: white;\r\n  }\r\n.review-class{\r\n      background: white;\r\n      color: black;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container nav-width\">\r\n    <button routerLink=\"/question1\"   routerLinkActive=\"active\" [disabled] = \"!isValid1\" class=\"index-button\">\r\n      <mat-icon svgIcon=\"name-icon\"   class=\"nav-icons col-md-sm name-icon\" [ngClass] =\"{'current-class' : isCurrent1,'disable-class': !isValid1}\"   ></mat-icon>\r\n      <label class=\"col-md-sm\"  [ngClass] =\"{'current-text' : isCurrent1,'disable-text': !isValid1}\" >Name</label>\r\n      <br/>\r\n    </button>\r\n    <br/>\r\n    <button routerLink=\"/question2\"   routerLinkActive=\"active\" [disabled] = \"!isValid2\" class=\"index-button\">\r\n      <mat-icon svgIcon=\"problem-icon\"  class=\"nav-icons col-md-sm name-icon\" [ngClass] =\"{'current-class' : isCurrent2,'disable-class': !isValid2}\"  ></mat-icon>\r\n      <label class=\"col-md-sm\" [ngClass] =\"{'current-text' : isCurrent2,'disable-text': !isValid2}\" >Problem</label>\r\n      <br/>\r\n    </button>\r\n    <br/>\r\n    <button routerLink=\"/question3\"   routerLinkActive=\"active\" [disabled] = \"!isValid3\" class=\"index-button\">\r\n      <mat-icon svgIcon=\"solution-icon\"  class=\"nav-icons col-md-sm name-icon\" [ngClass] =\"{'current-class' : isCurrent3,'disable-class': !isValid3}\"  ></mat-icon>\r\n      <label class=\"col-md-sm\"  [ngClass] =\"{'current-text' : isCurrent3,'disable-text': !isValid3}\"   >Solution</label>\r\n      <br/>\r\n    </button>\r\n    <br/>\r\n    <button routerLink=\"/question4\"   routerLinkActive=\"active\" [disabled] = \"!isValid4\" class=\"index-button\">\r\n      <mat-icon svgIcon=\"value-icon\"  class=\"nav-icons col-md-sm name-icon\" [ngClass] =\"{'current-class' : isCurrent4,'disable-class': !isValid4}\"   ></mat-icon>\r\n      <label class=\"col-md-sm\"  [ngClass] =\"{'current-text' : isCurrent4,'disable-text': !isValid4}\"  >Value</label>\r\n      <br/>\r\n    </button>\r\n    <br/>\r\n    <button routerLink=\"/question5\"   routerLinkActive=\"active\" [disabled] = \"!isValid5\" class=\"index-button\">\r\n      <mat-icon svgIcon=\"proof-icon\"  class=\"nav-icons col-md-sm name-icon\" [ngClass] =\"{'current-class' : isCurrent5,'disable-class': !isValid5}\"  ></mat-icon>\r\n      <label class=\"col-md-sm\" [ngClass] =\"{'current-text' : isCurrent5,'disable-text': !isValid5}\" >Proof</label>\r\n      <br/>\r\n    </button>\r\n    <br/>\r\n    <br/>\r\n\r\n    <!-- <button routerLink=\"/reviewpage\"   routerLinkActive=\"active\" class=\"index-button\">\r\n      <mat-icon svgIcon=\"name-icon\"  class=\"nav-icons col-md-sm name-icon\"      style=\"background-color: green;\" (click)=\"sidenavright.close()\"></mat-icon>\r\n      <label class=\"col-md-sm\" [ngClass]=\"{'label-class': !isValid1}\"   >Review</label>\r\n      <br/>\r\n    </button> -->\r\n    <button  mat-raised-button routerLink=\"/reviewpage\" [disabled] = \"!isReview\" [ngClass] =\"{'current-review' : isCurrentReview,'disable-review': !isReview}\" class=\"review-class\"   routerLinkActive=\"active\">Review</button>\r\n</div>"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.isValid1 = false;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5 = false;
        this.isReview = false;
        this.content();
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.onLoading();
    };
    SidenavComponent.prototype.content = function () {
        this.matIconRegistry
            .addSvgIcon("problem-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/problem icon.svg"))
            .addSvgIcon("questions", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/question info.svg"))
            .addSvgIcon("name-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/nameicon.svg"))
            .addSvgIcon("solution-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/solution.svg"))
            .addSvgIcon("value-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/value icon.svg"))
            .addSvgIcon("proof-icon", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/proof and ask.svg"));
    };
    SidenavComponent.prototype.onLoading = function () {
        if (localStorage.getItem("question1")) {
            this.isValid1 = true;
        }
        if (localStorage.getItem("question2")) {
            this.isValid2 = true;
        }
        if (localStorage.getItem("question3")) {
            this.isValid3 = true;
        }
        if (localStorage.getItem("question4")) {
            this.isValid4 = true;
        }
        if (localStorage.getItem("question5")) {
            this.isValid5 = true;
        }
        if (JSON.parse(localStorage.getItem('question1')) &&
            JSON.parse(localStorage.getItem('question2')) &&
            JSON.parse(localStorage.getItem('question3')) &&
            JSON.parse(localStorage.getItem('question4')) &&
            JSON.parse(localStorage.getItem('question5'))) {
            this.isReview = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent1'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "isCurrent1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent2'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "isCurrent2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent3'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "isCurrent3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent4'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "isCurrent4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrent5'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "isCurrent5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isCurrentReview'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "isCurrentReview", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/thankyou/thankyou.component.css":
/*!*************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-size{\r\n  width: 16em;\r\n}\r\nlogoimage {\r\n\twidth: 20%;\r\n\theight: 10%;\r\n  }\r\n.menu_icon{\r\n\theight: 2.5rem;\r\n\twidth: 4rem;\r\n\tpadding-right: 20px;\r\n  }\r\n.icon-align{\r\n\tmargin-right: 40px;\r\n  }\r\n.main{\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.side-nav{\r\n  background-color: black;\r\n  color: white;\r\n  width: 250px;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.nav-icons{\r\n  padding: 20px;\r\n  border-radius: 6rem;\r\n  width: 4rem;\r\n  height: auto;\r\n}\r\n.svg_icon{\r\n\twidth: 8rem;\r\n\theight: auto;\r\n\tpadding: 10px;\r\n  }\r\nmat-icon{\r\n  width: 10%;\r\n}\r\n.label{\r\n  font-size: 15px;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\ninput { \r\n  border: none; \r\n  border-bottom: 1px solid black;\r\n  overflow: auto;  \r\n  font-size: 20px;  \r\n  text-align: center;    \r\n}\r\ntextarea{\r\n  border: none; \r\n  border-bottom: 1px solid black;\r\n   \r\n  font-size: 20px;  \r\n  text-align: center;    \r\n}\r\n.btn-success {\r\nbackground-color: #25a08d;\r\nbackground-image: none;\r\npadding: 8px 50px;\r\nmargin-top: 20px;\r\nborder-radius: 40px;\r\nborder: 1px solid #25a08d;\r\ntransition: all ease 0.8s;\r\n}\r\n.btn-success:focus, .btn-success:hover {\r\nbackground-color: #25a08d;\r\nborder-color: #25a08d;\r\nbox-shadow: 0px 5px 35px -5px #25a08d;\r\ntext-shadow: 0 0 8px #fff;\r\ncolor: #fff;\r\noutline: none;\r\n}\r\n.btn-success.active {\r\nbackground-color: #25a08d;\r\nborder-color: #25a08d;\r\nbox-shadow: 0px 5px 35px -5px #25a08d;\r\ntext-shadow: 0 0 8px #fff;\r\ncolor: #fff;\r\noutline: none;\r\n}\r\n.btn-success.active:hover {\r\nbackground-color: #25a08d;\r\nborder-color: #25a08d;\r\nbox-shadow: 0px 5px 35px -5px #25a08d;\r\ntext-shadow: 0 0 8px #fff;\r\ncolor: #fff;\r\noutline: none;\r\n}\r\n.btn-success:active {\r\nbackground-color: #25a08d;\r\nborder-color: #25a08d;\r\nbox-shadow: 0px 5px 35px -5px #25a08d;\r\ntext-shadow: 0 0 8px #fff;\r\ncolor: #fff;\r\noutline: none;\r\n}\r\n.btn-success:active:hover, .btn-success:active:focus {\r\nbackground-color: #25a08d;\r\nborder-color: #25a08d;\r\nbox-shadow: 0px 5px 35px -5px #25a08d;\r\ntext-shadow: 0 0 8px #fff;\r\ncolor: #fff;\r\noutline: none;\r\n}\r\n.popup-body{\r\n  color: white;\r\n  background-color: black;\r\n  font-family: 'Roboto Mono', monospace;\r\n\r\n}\r\n.modal-title{\r\n  text-align: center;\r\n}\r\n.content{\r\n  text-align: center;\r\n}\r\nmat-icon{\r\nheight: 10%;\r\nwidth: 10%;\r\n}\r\n@media only screen \r\nand (min-width : 1224px) {\r\n  /* Styles */\r\n  mat-icon{\r\n    height: 4%;\r\nwidth: 4%;\r\n  }\r\n  .label{\r\n    font-size: 40px;\r\n    font-family: 'Roboto Mono', monospace;\r\n    \r\n}\r\nlabel{\r\n  padding-right: 80px;\r\n}\r\ninput { \r\n    border: none; \r\n    border-bottom: 1px solid black;\r\n    overflow: auto;  \r\n    font-size: 40px;  \r\n    text-align: center;    \r\n  }\r\n  textarea{\r\n    border: none; \r\n    border-bottom: 1px solid black;\r\n      \r\n    font-size: 40px;  \r\n    text-align: center;    \r\n  }\r\n\r\n}\r\n.thanks{\r\n  width: 15rem;\r\n  height: 15rem;\r\n}\r\n#question5{\r\n\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/thankyou/thankyou.component.html":
/*!**************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-toolbar >\r\n    <mat-toolbar-row>\r\n      <mat-icon svgIcon=\"elevetorly\" class=\"svg_icon\"></mat-icon>\r\n      <span class=\"spacer\"></span> \r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n        <div class=\"container\" id=\"question5\">\r\n            <mat-icon svgIcon=\"thanks\" class=\"thanks\"></mat-icon>\r\n           <form class=\"label\">           \r\n             <label>for using elevatorly<br/> We hope it would be helpful to you. <br/><br/>Do you want to create a new pitch?</label><br/>\r\n            <div style=\"text-align:center;padding:10px;\">\r\n                <button type=\"button\" routerLink=\"/question1\" style=\"float: center;\" mat-raised-button class=\"button-size\" (click)=\"clearAll()\"> Yes! Create Now   </button>\r\n             </div> \r\n             <a href=\"url\" routerLink=\"/home\" (click)=\"clearAll()\" style=\"color: grey\">No! Thank You</a>\r\n           </form>\r\n         </div>\r\n       <ng-template #template>\r\n          <div class=\"modal-header\"> \r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body popup-body\">\r\n              <h4 class=\"modal-title\">Email</h4><br/>\r\n              <input type=\"text\" name=\"email\" size=\"19\">\r\n            </div> \r\n          <div class=\"modal-footer\">\r\n              <button routerLink=\"/confirmpage\" routerLinkActive=\"active\"type=\"button\" class=\"btn btn-danger\" (click)=\"modalRef.hide()\">Send</button>\r\n          </div>\r\n        </ng-template>"

/***/ }),

/***/ "./src/app/thankyou/thankyou.component.ts":
/*!************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.ts ***!
  \************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThankyouComponent = /** @class */ (function () {
    function ThankyouComponent(modalService, matIconRegistry, domSanitizer) {
        this.modalService = modalService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("elevetorly", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/elevatorlylogo.svg"))
            .addSvgIcon("thanks", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/thanks.svg"));
    }
    ThankyouComponent.prototype.ngOnInit = function () {
        this.ques = "Ciao, My name is " + localStorage.getItem('question1') + "I got really frustrated when " + localStorage.getItem('question2') + "With our product " + localStorage.getItem('question3') + "Ultimately the biggest value for the customer is that " + localStorage.getItem('question4') + "Right now " + localStorage.getItem('question5');
    };
    ThankyouComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ThankyouComponent.prototype.clearAll = function () {
        localStorage.removeItem('question1');
        localStorage.removeItem('question2');
        localStorage.removeItem('question3');
        localStorage.removeItem('question4');
        localStorage.removeItem('question5');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"])
    ], ThankyouComponent.prototype, "autosize", void 0);
    ThankyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.component.html */ "./src/app/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.css */ "./src/app/thankyou/thankyou.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/service/questions.service.ts":
/*!******************************************!*\
  !*** ./src/service/questions.service.ts ***!
  \******************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsService = /** @class */ (function () {
    function QuestionsService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.questionsURL = '/questions';
        this.getUserURL = "/getUser";
    }
    QuestionsService.prototype.saveQuestions = function (questions) {
        var _this = this;
        if (questions === void 0) { questions = null; }
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.questionsURL, { questions: questions })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    QuestionsService.prototype.getUsers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.getUserURL)
                .subscribe(function (data) {
                resolve(data);
                console.log("all users:" + data);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jay\ElevatorPitchGenerator\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map