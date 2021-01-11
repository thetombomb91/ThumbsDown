(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#3e8dac;\n}\n\nion-card {\n  --ion-background-color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUoiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNlOGRhYztcbn1cblxuaW9uLWNhcmQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcblxufSJdfQ== */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_license_plate_license_plate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/license-plate/license-plate.service */ "JcwM");





let Tab2Page = class Tab2Page {
    constructor(licensePlateService) {
        this.licensePlateService = licensePlateService;
    }
    submitClicked() {
        this.licensePlateService.someFunction();
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_license_plate_license_plate_service__WEBPACK_IMPORTED_MODULE_4__["LicensePlateService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      THUMBS DOWN\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\"> THUMBS DOWN </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <ion-card>\n    <img src=\"../../assets/img/licensePlate.jpg\" />\n    <ion-card-header>\n      <ion-card-subtitle></ion-card-subtitle>\n      <ion-card-title class=\"ion-text-center\">Enter that annoying license plate!</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Enter License Plate #</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-list>\n        <ion-list-header>\n          <ion-label>\n            Select State:\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>State</ion-label>\n          <ion-select placeholder=\"Select\">\n            <ion-select-option value=\"AK\">Alaska</ion-select-option>\n            <ion-select-option value=\"AL\">Alabama</ion-select-option>\n            <ion-select-option value=\"AZ\">Arizona</ion-select-option>\n            <ion-select-option value=\"AR\">Arkansas</ion-select-option>\n            <ion-select-option value=\"CA\">California</ion-select-option>\n            <ion-select-option value=\"CO\">Colorado</ion-select-option>\n            <ion-select-option value=\"CT\">Connecticut</ion-select-option>\n            <ion-select-option value=\"DE\">Delaware</ion-select-option>\n            <ion-select-option value=\"FL\">Florida</ion-select-option>\n            <ion-select-option value=\"GA\">Georgia</ion-select-option>\n            <ion-select-option value=\"HI\">Hawaii</ion-select-option>\n            <ion-select-option value=\"ID\">Idaho</ion-select-option>\n            <ion-select-option value=\"IL\">Illinois</ion-select-option>\n            <ion-select-option value=\"IN\">Indiana</ion-select-option>\n            <ion-select-option value=\"IA\">Iowa</ion-select-option>\n            <ion-select-option value=\"KS\">Kansas</ion-select-option>\n            <ion-select-option value=\"KY\">Kentucky</ion-select-option>\n            <ion-select-option value=\"LA\">Louisiana</ion-select-option>\n            <ion-select-option value=\"ME\">Maine</ion-select-option>\n            <ion-select-option value=\"MD\">Maryland</ion-select-option>\n            <ion-select-option value=\"MA\">Massachusetts</ion-select-option>\n            <ion-select-option value=\"MI\">Michigan</ion-select-option>\n            <ion-select-option value=\"MN\">Minnesota</ion-select-option>\n            <ion-select-option value=\"MS\">Mississippi</ion-select-option>\n            <ion-select-option value=\"MO\">Missouri</ion-select-option>\n            <ion-select-option value=\"MT\">Montana</ion-select-option>\n            <ion-select-option value=\"NE\">Nebraska</ion-select-option>\n            <ion-select-option value=\"NV\">Nevada</ion-select-option>\n            <ion-select-option value=\"NH\">New Hampshire</ion-select-option>\n            <ion-select-option value=\"NJ\">New Jersey</ion-select-option>\n            <ion-select-option value=\"NM\">New Mexico</ion-select-option>\n            <ion-select-option value=\"NY\">New York</ion-select-option>\n            <ion-select-option value=\"NC\">North Carolina</ion-select-option>\n            <ion-select-option value=\"ND\">North Dakota</ion-select-option>\n            <ion-select-option value=\"OH\">Ohio</ion-select-option>\n            <ion-select-option value=\"OK\">Oklahoma</ion-select-option>\n            <ion-select-option value=\"OR\">Oregon</ion-select-option>\n            <ion-select-option value=\"PA\">Pennsylvania</ion-select-option>\n            <ion-select-option value=\"RI\">Rhode Island</ion-select-option>\n            <ion-select-option value=\"SC\">South Carolina</ion-select-option>\n            <ion-select-option value=\"SD\">South Dakota</ion-select-option>\n            <ion-select-option value=\"TN\">Tennessee</ion-select-option>\n            <ion-select-option value=\"TX\">Texas</ion-select-option>\n            <ion-select-option value=\"UT\">Utah</ion-select-option>\n            <ion-select-option value=\"VT\">Vermont</ion-select-option>\n            <ion-select-option value=\"VA\">Virginia</ion-select-option>\n            <ion-select-option value=\"WA\">Washington</ion-select-option>\n            <ion-select-option value=\"WV\">West Virginia</ion-select-option>\n            <ion-select-option value=\"WI\">Wisconsin</ion-select-option>\n            <ion-select-option value=\"WY\">Wyoming</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n      <ion-button expand=\"block\" (click)=\"submitClicked()\">Submiter</ion-button>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map