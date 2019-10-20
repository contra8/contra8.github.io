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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n<!-- Routed components go here -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BigBernTheory';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sights_sights_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sights/sights.component */ "./src/app/sights/sights.component.ts");
/* harmony import */ var _souvenirs_souvenirs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./souvenirs/souvenirs.component */ "./src/app/souvenirs/souvenirs.component.ts");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./food/food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var _clubbing_clubbing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clubbing/clubbing.component */ "./src/app/clubbing/clubbing.component.ts");
/* harmony import */ var _mountains_mountains_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mountains/mountains.component */ "./src/app/mountains/mountains.component.ts");
/* harmony import */ var _gotthelf_gotthelf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gotthelf/gotthelf.component */ "./src/app/gotthelf/gotthelf.component.ts");
/* harmony import */ var _metanavbar_metanavbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./metanavbar/metanavbar.component */ "./src/app/metanavbar/metanavbar.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");




















var appRoutes = [
    { path: 'sights', component: _sights_sights_component__WEBPACK_IMPORTED_MODULE_9__["SightsComponent"] },
    { path: 'souvenirs', component: _souvenirs_souvenirs_component__WEBPACK_IMPORTED_MODULE_10__["SouvenirsComponent"] },
    { path: 'food', component: _food_food_component__WEBPACK_IMPORTED_MODULE_11__["FoodComponent"] },
    { path: 'clubbing', component: _clubbing_clubbing_component__WEBPACK_IMPORTED_MODULE_12__["ClubbingComponent"] },
    { path: 'mountains', component: _mountains_mountains_component__WEBPACK_IMPORTED_MODULE_13__["MountainsComponent"] },
    { path: 'gotthelf', component: _gotthelf_gotthelf_component__WEBPACK_IMPORTED_MODULE_14__["GotthelfComponent"] },
    {
        path: 'products',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_16__["ProductComponent"],
        data: { title: 'Product List' }
    },
    {
        path: 'product-details/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProductDetailComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'product-add',
        component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_17__["ProductAddComponent"],
        data: { title: 'Product Add' }
    },
    {
        path: 'product-edit/:id',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_19__["ProductEditComponent"],
        data: { title: 'Product Edit' }
    },
    { path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    }
    /*,
    { path: '**', component: PageNotFoundComponent } */
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _sights_sights_component__WEBPACK_IMPORTED_MODULE_9__["SightsComponent"],
                _souvenirs_souvenirs_component__WEBPACK_IMPORTED_MODULE_10__["SouvenirsComponent"],
                _food_food_component__WEBPACK_IMPORTED_MODULE_11__["FoodComponent"],
                _clubbing_clubbing_component__WEBPACK_IMPORTED_MODULE_12__["ClubbingComponent"],
                _mountains_mountains_component__WEBPACK_IMPORTED_MODULE_13__["MountainsComponent"],
                _gotthelf_gotthelf_component__WEBPACK_IMPORTED_MODULE_14__["GotthelfComponent"],
                _metanavbar_metanavbar_component__WEBPACK_IMPORTED_MODULE_15__["MetanavbarComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_16__["ProductComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_17__["ProductAddComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_18__["ProductDetailComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_19__["ProductEditComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clubbing/clubbing.component.html":
/*!**************************************************!*\
  !*** ./src/app/clubbing/clubbing.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clubbing works!\n</p>\n"

/***/ }),

/***/ "./src/app/clubbing/clubbing.component.scss":
/*!**************************************************!*\
  !*** ./src/app/clubbing/clubbing.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsdWJiaW5nL2NsdWJiaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/clubbing/clubbing.component.ts":
/*!************************************************!*\
  !*** ./src/app/clubbing/clubbing.component.ts ***!
  \************************************************/
/*! exports provided: ClubbingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubbingComponent", function() { return ClubbingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClubbingComponent = /** @class */ (function () {
    function ClubbingComponent() {
    }
    ClubbingComponent.prototype.ngOnInit = function () {
    };
    ClubbingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clubbing',
            template: __webpack_require__(/*! ./clubbing.component.html */ "./src/app/clubbing/clubbing.component.html"),
            styles: [__webpack_require__(/*! ./clubbing.component.scss */ "./src/app/clubbing/clubbing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClubbingComponent);
    return ClubbingComponent;
}());



/***/ }),

/***/ "./src/app/food/food.component.html":
/*!******************************************!*\
  !*** ./src/app/food/food.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  food works!\n</p>\n"

/***/ }),

/***/ "./src/app/food/food.component.scss":
/*!******************************************!*\
  !*** ./src/app/food/food.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvZm9vZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/food/food.component.ts":
/*!****************************************!*\
  !*** ./src/app/food/food.component.ts ***!
  \****************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FoodComponent = /** @class */ (function () {
    function FoodComponent() {
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    FoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(/*! ./food.component.html */ "./src/app/food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.scss */ "./src/app/food/food.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/gotthelf/gotthelf.component.html":
/*!**************************************************!*\
  !*** ./src/app/gotthelf/gotthelf.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gotthelf works!\n</p>\n"

/***/ }),

/***/ "./src/app/gotthelf/gotthelf.component.scss":
/*!**************************************************!*\
  !*** ./src/app/gotthelf/gotthelf.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvdHRoZWxmL2dvdHRoZWxmLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/gotthelf/gotthelf.component.ts":
/*!************************************************!*\
  !*** ./src/app/gotthelf/gotthelf.component.ts ***!
  \************************************************/
/*! exports provided: GotthelfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotthelfComponent", function() { return GotthelfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GotthelfComponent = /** @class */ (function () {
    function GotthelfComponent() {
    }
    GotthelfComponent.prototype.ngOnInit = function () {
    };
    GotthelfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gotthelf',
            template: __webpack_require__(/*! ./gotthelf.component.html */ "./src/app/gotthelf/gotthelf.component.html"),
            styles: [__webpack_require__(/*! ./gotthelf.component.scss */ "./src/app/gotthelf/gotthelf.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GotthelfComponent);
    return GotthelfComponent;
}());



/***/ }),

/***/ "./src/app/metanavbar/metanavbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/metanavbar/metanavbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  metanavbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/metanavbar/metanavbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/metanavbar/metanavbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFuYXZiYXIvbWV0YW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/metanavbar/metanavbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/metanavbar/metanavbar.component.ts ***!
  \****************************************************/
/*! exports provided: MetanavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetanavbarComponent", function() { return MetanavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MetanavbarComponent = /** @class */ (function () {
    function MetanavbarComponent() {
    }
    MetanavbarComponent.prototype.ngOnInit = function () {
    };
    MetanavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metanavbar',
            template: __webpack_require__(/*! ./metanavbar.component.html */ "./src/app/metanavbar/metanavbar.component.html"),
            styles: [__webpack_require__(/*! ./metanavbar.component.scss */ "./src/app/metanavbar/metanavbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MetanavbarComponent);
    return MetanavbarComponent;
}());



/***/ }),

/***/ "./src/app/mountains/mountains.component.html":
/*!****************************************************!*\
  !*** ./src/app/mountains/mountains.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mountains works!\n</p>\n"

/***/ }),

/***/ "./src/app/mountains/mountains.component.scss":
/*!****************************************************!*\
  !*** ./src/app/mountains/mountains.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdW50YWlucy9tb3VudGFpbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mountains/mountains.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mountains/mountains.component.ts ***!
  \**************************************************/
/*! exports provided: MountainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainsComponent", function() { return MountainsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MountainsComponent = /** @class */ (function () {
    function MountainsComponent() {
    }
    MountainsComponent.prototype.ngOnInit = function () {
    };
    MountainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mountains',
            template: __webpack_require__(/*! ./mountains.component.html */ "./src/app/mountains/mountains.component.html"),
            styles: [__webpack_require__(/*! ./mountains.component.scss */ "./src/app/mountains/mountains.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MountainsComponent);
    return MountainsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">\n    Big Bern Theory\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/sights\" (click)=\"closeNavbar()\">Sights</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/souvenirs\" (click)=\"closeNavbar()\">Souvenirs</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/food\" (click)=\"closeNavbar()\">Food</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/clubbing\" (click)=\"closeNavbar()\">Clubbing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/mountains\" (click)=\"closeNavbar()\">Mountains</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/products\" (click)=\"closeNavbar()\">Gotthelf</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.navbarOpen = false;
    }
    NavbarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavbarComponent.prototype.closeNavbar = function () {
        this.navbarOpen = false;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Product Add</h2>\n  <div>\n    <label>Product Name:\n      <input [(ngModel)]=\"productData.prod_name\" placeholder=\"Product Name\"/>\n    </label><br>\n    <label>Product Desc:\n      <input [(ngModel)]=\"productData.prod_desc\" placeholder=\"Product Description\"/>\n    </label><br>\n    <label>Product Price:\n      <input [(ngModel)]=\"productData.prod_price\" placeholder=\"Product Price\"/>\n    </label><br>\n  </div>\n  <button (click)=\"addProduct()\">Save</button>\n</div>"

/***/ }),

/***/ "./src/app/product-add/product-add.component.scss":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYWRkL3Byb2R1Y3QtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.productData = { prod_name: '', prod_desc: '', prod_price: 0 };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent.prototype.addProduct = function () {
        var _this = this;
        this.rest.addProduct(this.productData).subscribe(function (result) {
            _this.router.navigate(['/product-details/' + result._id]);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductAddComponent.prototype, "productData", void 0);
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.scss */ "./src/app/product-add/product-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\" class=\"products\">\n  <h2>{{product.prod_name | uppercase}} Details</h2>\n  <div><span>Description: </span>{{product.prod_desc}}</div>\n  <div><span>Price: </span>{{product.prod_price}}</div>\n  <div><span>Update Date: </span>{{product.updated_at | date}}</div>\n  <div>\n    <button routerLink=\"/product-edit/{{product._id}}\">\n      Edit\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getProduct(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.product = data;
        });
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/product-detail/product-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Product Edit</h2>\n  <div>\n    <label>Product Name:\n      <input [(ngModel)]=\"productData.prod_name\" placeholder=\"Product Name\"/>\n    </label><br>\n    <label>Product Desc:\n      <input [(ngModel)]=\"productData.prod_desc\" placeholder=\"Product Description\"/>\n    </label><br>\n    <label>Product Price:\n      <input [(ngModel)]=\"productData.prod_price\" placeholder=\"Product Price\"/>\n    </label><br>\n  </div>\n  <button (click)=\"updateProduct()\">Update</button>\n</div>"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.productData = { prod_name: '', prod_desc: '', prod_price: 0 };
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getProduct(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log(data);
            _this.productData = data;
        });
    };
    ProductEditComponent.prototype.updateProduct = function () {
        var _this = this;
        this.rest.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe(function (result) {
            _this.router.navigate(['/product-details/' + result._id]);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductEditComponent.prototype, "productData", void 0);
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.scss */ "./src/app/product-edit/product-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  style=\"margin: 20px; max-width: 1024px;\">\n  <h2>Das Gotthelf-Universum</h2>\n\n<!--div>\n  <button (click)=\"getProducts()\">\n    Hole 1. Absatz aus \"Geld und Geist - Die Versöhnung\"\n  </button>\n</div-->\n\n<!--script>\n     myObj = [{ \"name\":\"John\", \"age\":30, \"car\":null }];\n</script-->\n\n<!--div id=\"output\">\n  {{myObj.age}}\n  {{products[0]['body'][0]['type'][0]['p'][0]['#text']}}>\n</div-->\n\n<!--form style=\"margin-left: 20px;\">\n  <div class=\"form-group\">\n    <label for=\"name\">Nummer des gewünschten Absatzes eingeben:</label>\n    <input type=\"text\" class=\"form-control\" id=\"index\" [(ngModel)]=\"this.index\" required style=\"width:100px;\"-->\n  <!--input type=\"text\" [formControl]=\"index\" style=\"width:100px;\"-->\n  <!--/div>\n</form-->\n\n  <form>\n    <label for=\"name\">Bitte Nummer des gewünschten Absatzes eingeben (Zahl zwischen 1 und 20):&nbsp;</label>\n    <input type=\"text\" [(ngModel)]=\"name\" style=\"float: right;\" />\n  </form>\n\n  <!--div style=\"margin-right: 0px;\"-->\n    <button type=\"submit\" class=\"btn btn-success\" style=\"color:black; float: right; margin-top: 50px; margin-bottom: 50px;\" (click)=\"getProducts(1)\">Absatz aus eXist-db holen und anzeigen</button>\n  <!--/div-->\n  <!--p>Index: {{index.value}}</p-->\n  <p>Der gewünschte Absatz:</p>\n  <ul class=\"products\" style=\"width:450px;\">\n    <!--li *ngFor=\"let p of products;\"-->\n    <li>\n      <!--{{p.p.type}}-->\n      {{products.body.p.text}}\n    </li>\n    <!--li *ngFor=\"let element of array\">{{element.age}}</li-->\n    <!--li *ngFor=\"let pe of products.body.p\" | async>\n      {{pe.text}}\n    </li-->\n  </ul>\n\n  <!--ul class=\"products\">\n    <li *ngFor=\"let p of products; let i=index;\">\n      <a routerLink=\"/product-details/{{p._id}}\">\n        <span class=\"badge\">{{i+1}}</span> {{p}}\n      </a>\n      <button class=\"delete\" title=\"delete product\"\n        (click)=\"delete(p._id)\">x</button>\n    </li>\n  </ul-->\n\n</div>  "

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Products Component's private CSS styles */\n.products {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.products li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n.products li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.products a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.products a:hover {\n  color: #607D8B; }\n.products .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb250cmE4L0dpdEh1Yi9CaWdCZXJuVGhlb3J5L3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUFBO0FBQ0E7RUFDSSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXLEVBQUE7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7QUFHWjtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWEsRUFBQTtBQUdmO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBO0FBRzVCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcm9kdWN0cyBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5wcm9kdWN0cyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1ZW07XG4gIH1cbiAgLnByb2R1Y3RzIGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICBoZWlnaHQ6IDEuNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLnByb2R1Y3RzIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIGxlZnQ6IC4xZW07XG4gIH1cbiAgXG4gIC5wcm9kdWN0cyBhIHtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICBcbiAgLnByb2R1Y3RzIGE6aG92ZXIge1xuICAgIGNvbG9yOiM2MDdEOEI7XG4gIH1cbiAgXG4gIC5wcm9kdWN0cyAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTFweDtcbiAgICB0b3A6IC00cHg7XG4gICAgaGVpZ2h0OiAxLjhlbTtcbiAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY3Vyc29yOiBoYW5kO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIFxuICBidXR0b24uZGVsZXRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTk0cHg7XG4gICAgdG9wOiAtMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.index = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        //products:any = [];
        this.products = [{ "name": "Albert" }];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts(1);
    };
    ProductComponent.prototype.getProducts = function (index) {
        var _this = this;
        console.log("product.component.ts.getProducts() meldet");
        console.log(this.products);
        this.products = [];
        this.rest.getProducts(index).subscribe(function (data) {
            //console.log("The JSON: " + data);
            _this.products = data;
            console.log("Test");
            console.log("this.products ================= " + _this.products.body.p.text);
        });
        //console.log("this.products = " + this.products[0].name);
        //this.products.name = "Jeremias";
    };
    ProductComponent.prototype.add = function () {
        this.router.navigate(['/product-add']);
    };
    ProductComponent.prototype.delete = function (id) {
        var _this = this;
        this.rest.deleteProduct(id)
            .subscribe(function (res) {
            _this.getProducts(1);
        }, function (err) {
            console.log(err);
        });
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestService.prototype.getProducts = function (index) {
        //return this.http.get(endpoint + '/hkgcode/routines/test_json.xql').pipe(
        //return this.http.get(endpoint + '/hkgcode/routines/getAllIdsOfG_Korrespondenz.xqm?coll=/db/data/Handschriften/G_Korrespondenz').pipe(
        //return this.http.get(endpoint + '/hkgcode/routines/getAllIdsOfG_Korrespondenz.xqm?coll=/db/data/Handschriften/G_Korrespondenz/Drittbriefe').pipe(
        console.log("index = " + index);
        // Call http://hkgb.germ.unibe.ch:8080/exist/rest/db/hkgcode/getXMLDocumentAsJSON.xql?pindex=20
        return this.http.get(endpoint + '/hkgcode/getXMLDocumentAsJSON.xql?pindex=' + index).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.getProduct = function (id) {
        return this.http.get(endpoint + 'products/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.addProduct = function (product) {
        console.log(product);
        return this.http.post(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (product) { return console.log("added product w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    };
    RestService.prototype.updateProduct = function (id, product) {
        return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
    };
    RestService.prototype.deleteProduct = function (id) {
        return this.http.delete(endpoint + 'products/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct')));
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestService);
    return RestService;
}());

var endpoint = 'http://hkgb.germ.unibe.ch:8080/exist/rest/db';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json; charset=utf-8'
    })
};
/*
const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
*/ 


/***/ }),

/***/ "./src/app/sights/sights.component.html":
/*!**********************************************!*\
  !*** ./src/app/sights/sights.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\">\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Collapsible Group Item #1\n        </button>\n      </h5>\n    </div>\n\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          Collapsible Group Item #2\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingThree\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          Collapsible Group Item #3\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sights/sights.component.scss":
/*!**********************************************!*\
  !*** ./src/app/sights/sights.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ2h0cy9zaWdodHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sights/sights.component.ts":
/*!********************************************!*\
  !*** ./src/app/sights/sights.component.ts ***!
  \********************************************/
/*! exports provided: SightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightsComponent", function() { return SightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SightsComponent = /** @class */ (function () {
    function SightsComponent() {
    }
    SightsComponent.prototype.ngOnInit = function () {
    };
    SightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sights',
            template: __webpack_require__(/*! ./sights.component.html */ "./src/app/sights/sights.component.html"),
            styles: [__webpack_require__(/*! ./sights.component.scss */ "./src/app/sights/sights.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SightsComponent);
    return SightsComponent;
}());



/***/ }),

/***/ "./src/app/souvenirs/souvenirs.component.html":
/*!****************************************************!*\
  !*** ./src/app/souvenirs/souvenirs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  souvenirs works!\n</p>\n"

/***/ }),

/***/ "./src/app/souvenirs/souvenirs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/souvenirs/souvenirs.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdXZlbmlycy9zb3V2ZW5pcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/souvenirs/souvenirs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/souvenirs/souvenirs.component.ts ***!
  \**************************************************/
/*! exports provided: SouvenirsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SouvenirsComponent", function() { return SouvenirsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SouvenirsComponent = /** @class */ (function () {
    function SouvenirsComponent() {
    }
    SouvenirsComponent.prototype.ngOnInit = function () {
    };
    SouvenirsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-souvenirs',
            template: __webpack_require__(/*! ./souvenirs.component.html */ "./src/app/souvenirs/souvenirs.component.html"),
            styles: [__webpack_require__(/*! ./souvenirs.component.scss */ "./src/app/souvenirs/souvenirs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SouvenirsComponent);
    return SouvenirsComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/contra8/GitHub/BigBernTheory/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map