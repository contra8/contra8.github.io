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

/***/ "./src/app/aktuelles/aktuelles.component.html":
/*!****************************************************!*\
  !*** ./src/app/aktuelles/aktuelles.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Hier steht immer das Aktuelle zur Edition. Sowas zum Beispiel:\n  <iframe src=\"https://www.gotthelf.unibe.ch/gotthelf_edition/index_ger.html\" style=\"width: 100%; height: 500px;\"></iframe>\n</div>"

/***/ }),

/***/ "./src/app/aktuelles/aktuelles.component.scss":
/*!****************************************************!*\
  !*** ./src/app/aktuelles/aktuelles.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FrdHVlbGxlcy9ha3R1ZWxsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/aktuelles/aktuelles.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aktuelles/aktuelles.component.ts ***!
  \**************************************************/
/*! exports provided: AktuellesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AktuellesComponent", function() { return AktuellesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AktuellesComponent = /** @class */ (function () {
    function AktuellesComponent() {
    }
    AktuellesComponent.prototype.ngOnInit = function () {
    };
    AktuellesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aktuelles',
            template: __webpack_require__(/*! ./aktuelles.component.html */ "./src/app/aktuelles/aktuelles.component.html"),
            styles: [__webpack_require__(/*! ./aktuelles.component.scss */ "./src/app/aktuelles/aktuelles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AktuellesComponent);
    return AktuellesComponent;
}());



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
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");
/* harmony import */ var _aktuelles_aktuelles_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./aktuelles/aktuelles.component */ "./src/app/aktuelles/aktuelles.component.ts");
/* harmony import */ var _edition_edition_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edition/edition.component */ "./src/app/edition/edition.component.ts");
/* harmony import */ var _projekt_projekt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projekt/projekt.component */ "./src/app/projekt/projekt.component.ts");
/* harmony import */ var _suche_suche_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./suche/suche.component */ "./src/app/suche/suche.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






















var appRoutes = [
    { path: 'aktuelles', component: _aktuelles_aktuelles_component__WEBPACK_IMPORTED_MODULE_17__["AktuellesComponent"] },
    { path: 'edition', component: _edition_edition_component__WEBPACK_IMPORTED_MODULE_18__["EditionComponent"] },
    { path: 'projekt', component: _projekt_projekt_component__WEBPACK_IMPORTED_MODULE_19__["ProjektComponent"] },
    { path: 'suche', component: _suche_suche_component__WEBPACK_IMPORTED_MODULE_20__["SucheComponent"] },
    { path: 'sights', component: _sights_sights_component__WEBPACK_IMPORTED_MODULE_9__["SightsComponent"] },
    { path: 'souvenirs', component: _souvenirs_souvenirs_component__WEBPACK_IMPORTED_MODULE_10__["SouvenirsComponent"] },
    { path: 'food', component: _food_food_component__WEBPACK_IMPORTED_MODULE_11__["FoodComponent"] },
    { path: 'clubbing', component: _clubbing_clubbing_component__WEBPACK_IMPORTED_MODULE_12__["ClubbingComponent"] },
    { path: 'mountains', component: _mountains_mountains_component__WEBPACK_IMPORTED_MODULE_13__["MountainsComponent"] },
    { path: 'gotthelf', component: _gotthelf_gotthelf_component__WEBPACK_IMPORTED_MODULE_14__["GotthelfComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"] },
    {
        path: 'document',
        component: _document_document_component__WEBPACK_IMPORTED_MODULE_16__["DocumentComponent"],
        data: { title: 'Gotthelf-Edition: 1 Dokument' }
    },
    { path: '',
        redirectTo: '/home',
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
                _document_document_component__WEBPACK_IMPORTED_MODULE_16__["DocumentComponent"],
                _aktuelles_aktuelles_component__WEBPACK_IMPORTED_MODULE_17__["AktuellesComponent"],
                _edition_edition_component__WEBPACK_IMPORTED_MODULE_18__["EditionComponent"],
                _projekt_projekt_component__WEBPACK_IMPORTED_MODULE_19__["ProjektComponent"],
                _suche_suche_component__WEBPACK_IMPORTED_MODULE_20__["SucheComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
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

/***/ "./src/app/document/document.component.html":
/*!**************************************************!*\
  !*** ./src/app/document/document.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  style=\"margin: 20px; max-width: 600px; margin-left: 200px; margin-right:200px;\">\n  <h2>Das Gotthelf-Universum</h2>\n\n  <div class=\"content-box\">\n\n    <!--button type=\"submit\" class=\"btn btn-success\" style=\"color:black; margin-top:20px; margin-bottom:30px;\" (click)=\"getTextFromServer(1)\">Hole Text C5G_Geld_3 aus eXist-DB</button-->\n    <!--button type=\"submit\" class=\"btn btn-success\" style=\"color:black; margin-top:20px; margin-bottom:30px;\" (click)=\"getDocumentParagraphsFromServer(1)\">Hole Text \"C2G Geld und Geist 1\" aus eXist-DB (nur p-tags, hkg-b)</button-->\n    <button type=\"submit\" class=\"btn btn-success\" style=\"color:black; margin-top:20px; margin-bottom:30px;\" (click)=\"getDocumentFromServer(1)\">getXMLDocumentAsJSON (hkg-b)</button>\n\n    <p>Herausgeber: <u>{{firstName}}</u></p>\n    <ng-container *ngIf=\"data.TEI\">\n      <p *ngFor=\"let p of data.TEI.text.body.div.p; let i = index;\">\n        |<u><b>P{{i+1}}</b> {{p['xml:id']}}</u>|<br />\n        \n        <ng-container *ngIf=\"p.app; else noApp\">\n          <ng-container *ngIf=\"p.app.length; else oneApp\">\n            <ng-container *ngFor=\"let app of p.app; let j = index;\"> <!--{{p.app.length + 1}} &lt;app&gt; vorhanden\n              <b>((j = {{j}}))</b--> {{p['#text'][j]}} <span class=\"lem\">{{app.lem}}</span>\n            </ng-container>\n          </ng-container>\n          \n          <ng-template #oneApp>\n            <span class=\"one-app\">{{p['#text'][0]}}</span> <span class=\"lem\">{{p.app.lem}}</span>\n          </ng-template>\n      \n          <span>\n            {{p['#text'][p['#text'].length - 1]}}\n          </span>\n        </ng-container>\n        <ng-template #noApp>\n          <span class=\"no-app\">{{p['#text']}}</span>\n        </ng-template>\n      </p>\n    </ng-container>\n      <!--ul *ngIf=\"!pIndexIsChosen && contentReceived\" class=\"paragraphs\">\n      <li *ngFor=\"let p of paragraphs.body.p;\">\n        {{p.text}}\n      </li>\n    </ul>\n    <ul *ngIf=\"pIndexIsChosen\" class=\"paragraphs\" id=\"chosenParagraph\">\n      <li>\n        <b>Absatz {{pIndex}}</b><br />{{textOfChosenParagraph}} \n      </li>\n    </ul>\n  </div-->\n\n  <div class=\"content-box select-p\" [ngClass]=\"{ 'show': pMenuVisible }\">\n    <form>\n      <label for=\"name\">Zeige nur folgenden Absatz<br />(Zahl zwischen 1 und 113 eingeben):&nbsp;</label>\n      <input type=\"text\" [(ngModel)]=\"pIndex\" name=\"pIndex\" (ngModelChange)=\"onTextChange($event)\" />\n    </form>\n    <!--p>{{pIndex}}</p-->\n  </div>\n\n</div>  "

/***/ }),

/***/ "./src/app/document/document.component.scss":
/*!**************************************************!*\
  !*** ./src/app/document/document.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Document Component's private CSS styles */\n.lem {\n  color: #008800;\n  font-weight: bold;\n  border-bottom: 15px solid #008800; }\n.no-app {\n  font-style: italic; }\n.content-box {\n  float: left;\n  width: 50%; }\n.select-p {\n  display: none; }\n.select-p.show {\n  display: inline;\n  margin-top: 100px;\n  padding: 20px; }\n.paragraphs {\n  margin: 0 0 0em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.paragraphs li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  padding: 1em;\n  border-radius: 4px;\n  width: 29em;\n  margin-top: 1em; }\n.paragraphs li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.paragraphs a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.paragraphs a:hover {\n  color: #607D8B; }\n.paragraphs .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb250cmE4L0dpdEh1Yi9CaWdCZXJuVGhlb3J5L3NyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUNBQWlDLEVBQUE7QUFHbkM7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7QUFJWjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7QUFHZjtFQUNJLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVcsRUFBQTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFFdEIsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7QUFHWjtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWEsRUFBQTtBQUdmO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBO0FBRzVCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERvY3VtZW50IENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmxlbSB7XG4gIGNvbG9yOiAjMDA4ODAwO1xuICBmb250LXdlaWdodDogYm9sZDs7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgIzAwODgwMDtcbn1cblxuLm5vLWFwcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIC8vYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgfVxuICBcbiAgLnNlbGVjdC1wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuc2VsZWN0LXAuc2hvdyB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5wYXJhZ3JhcGhzIHtcbiAgICAgIG1hcmdpbjogMCAwIDBlbSAwO1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxNWVtO1xuICAgIH1cbiAgICAucGFyYWdyYXBocyBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgICAgLy9tYXJnaW46IC41ZW07XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAvL2hlaWdodDogMS42ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB3aWR0aDogMjllbTtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG4gICAgXG4gICAgLnBhcmFncmFwaHMgbGk6aG92ZXIge1xuICAgICAgY29sb3I6ICM2MDdEOEI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgICAgbGVmdDogLjFlbTtcbiAgICB9XG4gICAgXG4gICAgLnBhcmFncmFwaHMgYSB7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbiAgICBcbiAgICAucGFyYWdyYXBocyBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiM2MDdEOEI7XG4gICAgfVxuICAgIFxuICAgIC5wYXJhZ3JhcGhzIC5iYWRnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogLTFweDtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIGhlaWdodDogMS44ZW07XG4gICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICAgIH1cbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY3Vyc29yOiBoYW5kO1xuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIH1cbiAgICBcbiAgICBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgICB9XG4gICAgXG4gICAgYnV0dG9uLmRlbGV0ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAxOTRweDtcbiAgICAgIHRvcDogLTMycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/document/document.component.ts":
/*!************************************************!*\
  !*** ./src/app/document/document.component.ts ***!
  \************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        //index = new FormControl('');
        this.pMenuVisible = false;
        this.paragraphs = [];
        this.data = [];
        this.contentReceived = false;
        this.showAllText = false;
        this.pIndexIsChosen = false;
        this.pIndex = null;
        this.textOfChosenParagraph = "Wert von textOfChosenParagraph";
        this.firstName = "";
        this.leText = "Initialer Text";
    }
    DocumentComponent.prototype.ngOnInit = function () {
        //this.getDocumentFromServer(1);
    };
    DocumentComponent.prototype.onTextChange = function (value) {
        //console.log(value);
        console.log("onTextChange meldet: " + this.pIndex);
        this.pIndex = value;
        //console.log(this.pIndex);
        if (this.pIndex == 0) {
            console.log("pIndex ist 0: " + this.pIndex);
            this.pIndexIsChosen = false;
        }
        else {
            console.log("pIndex ist nicht 0: " + this.pIndex);
            this.pIndexIsChosen = true;
            this.textOfChosenParagraph = this.paragraphs.body.p[this.pIndex - 1].text;
        }
        console.log("pIndexIsChosen = " + this.pIndexIsChosen);
    };
    DocumentComponent.prototype.getDocumentFromServer = function (index) {
        var _this = this;
        console.log("getDocumentFromServer meldet");
        this.pMenuVisible = this.pIndexIsChosen = this.contentReceived = false;
        this.pIndex = null;
        this.data = [];
        console.log("Data will be processed ...");
        this.rest.getDocument(index).subscribe(function (data) {
            console.log("getDocumentFromServer meldet");
            _this.data = data;
            console.log("data = " + data[3][1][1]);
            console.log("data = " + data[3][1][1][1]['xml:id']);
            /* Oldschool JSON, direct serialization from eXist-db
            this.firstName = this.data.TEI.teiHeader.fileDesc.editionStmt.respStmt[1].name;
            console.log("getDocumentFromServer meldet 1: " + this.firstName);
            this.firstName = this.data.TEI.text.body.div.p[0]['xml:id'];
            console.log("getDocumentFromServer meldet 2: " + this.firstName);
            this.firstName = this.data.TEI.text.body.div.p[0]['#text'][3];
            console.log("getDocumentFromServer meldet 3: " + this.firstName);
            console.log("getDocumentFromServer meldet 4: Länge = " + this.data.TEI.text.body.div.p[0]['#text'].length);
            this.firstName = this.data.TEI.text.body.div.p[0]['app'][1].lem;
            console.log("getDocumentFromServer meldet 5: " + this.firstName);
            this.firstName = this.data.TEI.teiHeader.fileDesc.editionStmt.respStmt[1].name;
            console.log("getDocumentFromServer meldet 6: " + this.firstName);
            */
            //this.pMenuVisible = true;
            console.log(_this.pMenuVisible);
            //this.contentReceived = true;
            _this.createTheText();
        });
    };
    DocumentComponent.prototype.createTheText = function () {
        console.log("createTheText meldet; firstName = " + this.firstName);
        this.leText = "";
        /*for (var i=0; i < this.data.TEI.text.body.div.p[0]['#text'].length; i++) {
          this.leText = this.leText.concat(this.data.TEI.text.body.div.p[0]['app'][0].lem);
        }*/
        console.log(this.leText);
    };
    DocumentComponent.prototype.getDocumentParagraphsFromServer = function (index) {
        var _this = this;
        console.log("getDocumentParagraphsFromServer meldet");
        this.showAllText = this.pMenuVisible = this.pIndexIsChosen = this.contentReceived = false;
        this.pIndex = null;
        this.paragraphs = [];
        this.rest.getDocumentParagraphs(index).subscribe(function (data) {
            _this.paragraphs = data;
            console.log("First paragraph: " + _this.paragraphs.body.p[0].text);
            _this.pMenuVisible = true;
            console.log(_this.pMenuVisible);
            _this.contentReceived = true;
        });
    };
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/document/document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/edition/edition.component.html":
/*!************************************************!*\
  !*** ./src/app/edition/edition.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  style=\"margin: 20px; max-width: 600px; margin-left: 200px; margin-right:200px;\">\n  <h2>Alle Gotthelf-Druckwerke</h2>\n\n  <div class=\"content-box\">\n\n    <!--button type=\"submit\" class=\"btn btn-success\" style=\"color:black; margin-top:20px; margin-bottom:30px;\" (click)=\"getTextFromServer(1)\">Hole Text C5G_Geld_3 aus eXist-DB</button-->\n    <!--button type=\"submit\" class=\"btn btn-success\" style=\"color:black; margin-top:20px; margin-bottom:30px;\" (click)=\"getDocumentParagraphsFromServer(1)\">Hole Text \"C2G Geld und Geist 1\" aus eXist-DB (nur p-tags, hkg-b)</button-->\n    <!--button type=\"submit\" class=\"btn btn-success\" style=\"color:black; margin-top:20px; margin-bottom:30px;\" (click)=\"getDocumentFromServer(1)\">getXMLDocumentAsJSON (hkg-b)</button-->\n\n    <!--p>Herausgeber: <u>{{firstName}}</u></p-->\n\n    <ng-container *ngIf=\"data.collection\">\n      <p *ngFor=\"let work of data.collection[1].document\">\n        <a href=\"{{work['#text']}}\" target=\"_blank\">{{work.title}}</a>\n      </p>\n    </ng-container>\n\n    <ng-container *ngIf=\"data.TEI\">\n      <p *ngFor=\"let p of data.TEI.text.body.div.p; let i = index;\">\n        |<u><b>P{{i+1}}</b> {{p['xml:id']}}</u>|<br />\n        \n        <ng-container *ngIf=\"p.app; else noApp\">\n          <ng-container *ngIf=\"p.app.length; else oneApp\">\n            <ng-container *ngFor=\"let app of p.app; let j = index;\"> <!--{{p.app.length + 1}} &lt;app&gt; vorhanden\n              <b>((j = {{j}}))</b--> {{p['#text'][j]}} <span class=\"lem\">{{app.lem}}</span>\n            </ng-container>\n          </ng-container>\n          \n          <ng-template #oneApp>\n            <span class=\"one-app\">{{p['#text'][0]}}</span> <span class=\"lem\">{{p.app.lem}}</span>\n          </ng-template>\n      \n          <span>\n            {{p['#text'][p['#text'].length - 1]}}\n          </span>\n        </ng-container>\n        <ng-template #noApp>\n          <span class=\"no-app\">{{p['#text']}}</span>\n        </ng-template>\n      </p>\n    </ng-container>\n      <!--ul *ngIf=\"!pIndexIsChosen && contentReceived\" class=\"paragraphs\">\n      <li *ngFor=\"let p of paragraphs.body.p;\">\n        {{p.text}}\n      </li>\n    </ul>\n    <ul *ngIf=\"pIndexIsChosen\" class=\"paragraphs\" id=\"chosenParagraph\">\n      <li>\n        <b>Absatz {{pIndex}}</b><br />{{textOfChosenParagraph}} \n      </li>\n    </ul>\n  </div-->\n\n  <div class=\"content-box select-p\" [ngClass]=\"{ 'show': pMenuVisible }\">\n    <form>\n      <label for=\"name\">Zeige nur folgenden Absatz<br />(Zahl zwischen 1 und 113 eingeben):&nbsp;</label>\n      <input type=\"text\" [(ngModel)]=\"pIndex\" name=\"pIndex\" (ngModelChange)=\"onTextChange($event)\" />\n    </form>\n    <!--p>{{pIndex}}</p-->\n  </div>\n\n</div>  "

/***/ }),

/***/ "./src/app/edition/edition.component.scss":
/*!************************************************!*\
  !*** ./src/app/edition/edition.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Document Component's private CSS styles */\n.lem {\n  color: #008800;\n  font-weight: bold;\n  border-bottom: 15px solid #008800; }\n.no-app {\n  font-style: italic; }\n.content-box {\n  float: left; }\n.select-p {\n  display: none; }\n.select-p.show {\n  display: inline;\n  margin-top: 100px;\n  padding: 20px; }\n.paragraphs {\n  margin: 0 0 0em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.paragraphs li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  padding: 1em;\n  border-radius: 4px;\n  width: 29em;\n  margin-top: 1em; }\n.paragraphs li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.paragraphs a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.paragraphs a:hover {\n  color: #607D8B; }\n.paragraphs .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb250cmE4L0dpdEh1Yi9CaWdCZXJuVGhlb3J5L3NyYy9hcHAvZWRpdGlvbi9lZGl0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUFBO0FBQ0E7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlDQUFpQyxFQUFBO0FBR25DO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDSSxXQUFXLEVBQUE7QUFJYjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7QUFHZjtFQUNJLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVcsRUFBQTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFFdEIsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7QUFHWjtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWEsRUFBQTtBQUdmO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBO0FBRzVCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0aW9uL2VkaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEb2N1bWVudCBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5sZW0ge1xuICAgIGNvbG9yOiAjMDA4ODAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOztcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkICMwMDg4MDA7XG4gIH1cbiAgXG4gIC5uby1hcHAge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBcbiAgLmNvbnRlbnQtYm94IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgLy9iYWNrZ3JvdW5kOiAjZmYwMDAwO1xuICAgIH1cbiAgICBcbiAgICAuc2VsZWN0LXAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnNlbGVjdC1wLnNob3cge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAucGFyYWdyYXBocyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDBlbSAwO1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxNWVtO1xuICAgICAgfVxuICAgICAgLnBhcmFncmFwaHMgbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICAgICAgLy9tYXJnaW46IC41ZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgLy9oZWlnaHQ6IDEuNmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHdpZHRoOiAyOWVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wYXJhZ3JhcGhzIGxpOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM2MDdEOEI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgICAgIGxlZnQ6IC4xZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wYXJhZ3JhcGhzIGEge1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wYXJhZ3JhcGhzIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjojNjA3RDhCO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucGFyYWdyYXBocyAuYmFkZ2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgIGhlaWdodDogMS44ZW07XG4gICAgICAgIG1pbi13aWR0aDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjdXJzb3I6IGhhbmQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYnV0dG9uLmRlbGV0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTk0cHg7XG4gICAgICAgIHRvcDogLTMycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/edition/edition.component.ts":
/*!**********************************************!*\
  !*** ./src/app/edition/edition.component.ts ***!
  \**********************************************/
/*! exports provided: EditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionComponent", function() { return EditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditionComponent = /** @class */ (function () {
    function EditionComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        //index = new FormControl('');
        this.pMenuVisible = false;
        this.paragraphs = [];
        this.data = [];
        this.contentReceived = false;
        this.showAllText = false;
        this.pIndexIsChosen = false;
        this.pIndex = null;
        this.textOfChosenParagraph = "Wert von textOfChosenParagraph";
        this.firstName = "";
        this.leText = "Initialer Text";
    }
    EditionComponent.prototype.ngOnInit = function () {
        //this.getDocumentFromServer(1);
        this.getTitlesAndUrlsOfAllDocuments();
    };
    EditionComponent.prototype.onTextChange = function (value) {
        //console.log(value);
        console.log("onTextChange meldet: " + this.pIndex);
        this.pIndex = value;
        //console.log(this.pIndex);
        if (this.pIndex == 0) {
            console.log("pIndex ist 0: " + this.pIndex);
            this.pIndexIsChosen = false;
        }
        else {
            console.log("pIndex ist nicht 0: " + this.pIndex);
            this.pIndexIsChosen = true;
            this.textOfChosenParagraph = this.paragraphs.body.p[this.pIndex - 1].text;
        }
        console.log("pIndexIsChosen = " + this.pIndexIsChosen);
    };
    EditionComponent.prototype.getTitlesAndUrlsOfAllDocuments = function () {
        var _this = this;
        console.log("Klasse edition.component.ts, Methode getNamesofAllDocuments meldet");
        this.rest.getTitlesAndUrlsOfAllDocuments().subscribe(function (data) {
            //console.log("data = " + data[3][1][1]);
            _this.data = data;
            console.log("Erstes Werk:");
            console.log(_this.data.collection[1].document[0]);
        });
    };
    EditionComponent.prototype.getDocumentFromServer = function (index) {
        var _this = this;
        console.log("getDocumentFromServer meldet");
        this.pMenuVisible = this.pIndexIsChosen = this.contentReceived = false;
        this.pIndex = null;
        this.data = [];
        console.log("Data will be processed ...");
        this.rest.getDocument(index).subscribe(function (data) {
            console.log("getDocumentFromServer meldet");
            _this.data = data;
            console.log("data = " + data[3][1][1]);
            console.log("data = " + data[3][1][1][1]['xml:id']);
            /* Oldschool JSON, direct serialization from eXist-db
            this.firstName = this.data.TEI.teiHeader.fileDesc.editionStmt.respStmt[1].name;
            console.log("getDocumentFromServer meldet 1: " + this.firstName);
            this.firstName = this.data.TEI.text.body.div.p[0]['xml:id'];
            console.log("getDocumentFromServer meldet 2: " + this.firstName);
            this.firstName = this.data.TEI.text.body.div.p[0]['#text'][3];
            console.log("getDocumentFromServer meldet 3: " + this.firstName);
            console.log("getDocumentFromServer meldet 4: Länge = " + this.data.TEI.text.body.div.p[0]['#text'].length);
            this.firstName = this.data.TEI.text.body.div.p[0]['app'][1].lem;
            console.log("getDocumentFromServer meldet 5: " + this.firstName);
            this.firstName = this.data.TEI.teiHeader.fileDesc.editionStmt.respStmt[1].name;
            console.log("getDocumentFromServer meldet 6: " + this.firstName);
            */
            //this.pMenuVisible = true;
            console.log(_this.pMenuVisible);
            //this.contentReceived = true;
            _this.createTheText();
        });
    };
    EditionComponent.prototype.createTheText = function () {
        console.log("createTheText meldet; firstName = " + this.firstName);
        this.leText = "";
        /*for (var i=0; i < this.data.TEI.text.body.div.p[0]['#text'].length; i++) {
          this.leText = this.leText.concat(this.data.TEI.text.body.div.p[0]['app'][0].lem);
        }*/
        console.log(this.leText);
    };
    EditionComponent.prototype.getDocumentParagraphsFromServer = function (index) {
        var _this = this;
        console.log("getDocumentParagraphsFromServer meldet");
        this.showAllText = this.pMenuVisible = this.pIndexIsChosen = this.contentReceived = false;
        this.pIndex = null;
        this.paragraphs = [];
        this.rest.getDocumentParagraphs(index).subscribe(function (data) {
            _this.paragraphs = data;
            console.log("First paragraph: " + _this.paragraphs.body.p[0].text);
            _this.pMenuVisible = true;
            console.log(_this.pMenuVisible);
            _this.contentReceived = true;
        });
    };
    EditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edition',
            template: __webpack_require__(/*! ./edition.component.html */ "./src/app/edition/edition.component.html"),
            styles: [__webpack_require__(/*! ./edition.component.scss */ "./src/app/edition/edition.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditionComponent);
    return EditionComponent;
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

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Das Editionsprojekt der Historisch-kritischen Gesamtausgabe der Werke und Briefe von Jeremias Gotthelf folgt einer digitalen Publikationsstrategie, welche die Erarbeitung einer einheitlichen Datengrundlage für die Buchedition, die in Vorbereitung befindliche digitale Edition (zunächst der Briefe) und weitere Ausgabeformate umfasst.\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  width: 300px;\n  margin: 5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb250cmE4L0dpdEh1Yi9CaWdCZXJuVGhlb3J5L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDVlbTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"#\">\n    Digitale Gesamtausgabe Jeremias Gotthelf\n  </a>\n  <button class=\"navbar-toggler ml-auto\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/aktuelles\" (click)=\"closeNavbar()\">Aktuelles</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/edition\" (click)=\"closeNavbar()\">Edition</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/projekt\" (click)=\"closeNavbar()\">Projekt</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link float-right\" routerLink=\"/suche\" (click)=\"closeNavbar()\">Suche</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-toggler {\n  margin-right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb250cmE4L0dpdEh1Yi9CaWdCZXJuVGhlb3J5L3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItdG9nZ2xlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59Il19 */"

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

/***/ "./src/app/projekt/projekt.component.html":
/*!************************************************!*\
  !*** ./src/app/projekt/projekt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Hier stehen später Informationen zum Projekt. Bisher finden sich diese auf den Seiten der <a href=\"https://www.gotthelf.unibe.ch/gotthelf_edition/projektgeschichte/index_ger.html\" target=\"_blank\">Forschungsstelle Jeremias Gotthelf</a>.\n</p>\n"

/***/ }),

/***/ "./src/app/projekt/projekt.component.scss":
/*!************************************************!*\
  !*** ./src/app/projekt/projekt.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2pla3QvcHJvamVrdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/projekt/projekt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/projekt/projekt.component.ts ***!
  \**********************************************/
/*! exports provided: ProjektComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjektComponent", function() { return ProjektComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjektComponent = /** @class */ (function () {
    function ProjektComponent() {
    }
    ProjektComponent.prototype.ngOnInit = function () {
    };
    ProjektComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projekt',
            template: __webpack_require__(/*! ./projekt.component.html */ "./src/app/projekt/projekt.component.html"),
            styles: [__webpack_require__(/*! ./projekt.component.scss */ "./src/app/projekt/projekt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjektComponent);
    return ProjektComponent;
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
    RestService.prototype.getTitlesAndUrlsOfAllDocuments = function () {
        return this.http.get(endpoint + '/hkgcode/routines/getters/getTitlesAndUrlsOfAllXmlFiles.xqy').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.getDocument = function (index) {
        return this.http.get(endpoint + '/hkgcode/routines/getters/getXMLDocumentAsJSON.xqy').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.getDocumentParagraphs = function (index) {
        //return this.http.get(endpoint + '/hkgcode/routines/test_json.xql').pipe(
        //return this.http.get(endpoint + '/hkgcode/routines/getAllIdsOfG_Korrespondenz.xqm?coll=/db/data/Handschriften/G_Korrespondenz').pipe(
        //return this.http.get(endpoint + '/hkgcode/routines/getAllIdsOfG_Korrespondenz.xqm?coll=/db/data/Handschriften/G_Korrespondenz/Drittbriefe').pipe(
        console.log("index = " + index);
        // Call http://hkgb.germ.unibe.ch:8080/exist/rest/db/hkgcode/getXMLDocumentAsJSON.xql?pindex=20
        return this.http.get(endpoint + '/hkgcode/routines/getters/getXMLDocumentParagraphsAsJSON.xqy?pindex=' + index).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    /*
    getProduct(id): Observable<any> {
      return this.http.get(endpoint + 'products/' + id).pipe(
        map(this.extractData));
    }
  
    addProduct (product): Observable<any> {
      console.log(product);
      return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
        tap((product) => console.log(`added product w/ id=${product.id}`)),
        catchError(this.handleError<any>('addProduct'))
      );
    }
  
    updateProduct (id, product): Observable<any> {
      return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
        tap(_ => console.log(`updated product id=${id}`)),
        catchError(this.handleError<any>('updateProduct'))
      );
    }
  
    deleteProduct (id): Observable<any> {
      return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
        tap(_ => console.log(`deleted product id=${id}`)),
        catchError(this.handleError<any>('deleteProduct'))
      );
    }
  */
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

/***/ "./src/app/suche/suche.component.html":
/*!********************************************!*\
  !*** ./src/app/suche/suche.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Sind wir nicht alle auf der Suche nach irgendetwas? Nach passenden Weihnachtsgeschenken zum Beispiel.\n</p>\n"

/***/ }),

/***/ "./src/app/suche/suche.component.scss":
/*!********************************************!*\
  !*** ./src/app/suche/suche.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2hlL3N1Y2hlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/suche/suche.component.ts":
/*!******************************************!*\
  !*** ./src/app/suche/suche.component.ts ***!
  \******************************************/
/*! exports provided: SucheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucheComponent", function() { return SucheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SucheComponent = /** @class */ (function () {
    function SucheComponent() {
    }
    SucheComponent.prototype.ngOnInit = function () {
    };
    SucheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suche',
            template: __webpack_require__(/*! ./suche.component.html */ "./src/app/suche/suche.component.html"),
            styles: [__webpack_require__(/*! ./suche.component.scss */ "./src/app/suche/suche.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SucheComponent);
    return SucheComponent;
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