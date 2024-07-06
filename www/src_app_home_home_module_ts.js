"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] }); })();


/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autocomplete/autocomplete.component */ 5860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);

















const _c0 = ["map"];
const _c1 = ["mapElement"];
function HomePage_ion_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-buttons", 17)(2, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_toolbar_1_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.goBackTOAutocomplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Your Destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 20)(1, "ion-list", 21)(2, "ion-item-group", 13)(3, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_row_2_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.destinationAddress);
  }
}
function HomePage_ion_fab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 24)(1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-menu-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_fab_4_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.GotoSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_fab_5_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_fab_6_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.CancelRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 33)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 35)(1, "ion-fab-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_fab_12_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.resetLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_list_14_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_14_ion_item_6_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const place_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.RequestRide(place_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-label")(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const place_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](place_r28.place.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](place_r28.place.city);
  }
}
function HomePage_ion_list_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 38)(1, "ion-item-group", 13)(2, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_14_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Where To?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomePage_ion_list_14_ion_item_6_Template, 7, 2, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r9.places);
  }
}
function HomePage_ion_list_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 43)(1, "ion-list-header")(2, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-item-group", 13)(5, "ion-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_21_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.ReturnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " No Drivers Here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function HomePage_ion_list_22_ion_list_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list-header", 58)(1, "ion-item")(2, "ion-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-label")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-item", 62)(13, "ion-label")(14, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p")(17, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r35.carname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r35.driver_duration_apart, " mins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r35.driver_number_of_seats, " seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx_r35.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx_r35.price * 2, "");
  }
}
function HomePage_ion_list_22_ion_list_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list-header", 58)(1, "ion-item", 62)(2, "ion-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-skeleton-text", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-label")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-skeleton-text", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "ion-skeleton-text", 64)(9, "ion-skeleton-text", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-item", 62)(11, "ion-label")(12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ion-skeleton-text", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "p")(15, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "ion-skeleton-text", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("animated", true);
  }
}
function HomePage_ion_list_22_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 67);
  }
}
function HomePage_ion_list_22_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 68);
  }
}
function HomePage_ion_list_22_ion_select_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", card_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](card_r43.name);
  }
}
function HomePage_ion_list_22_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 70);
  }
}
function HomePage_ion_list_22_ion_progress_bar_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 71);
  }
}
function HomePage_ion_list_22_ion_label_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Book Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ion_list_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ion_list_22_ion_list_header_1_Template, 19, 5, "ion-list-header", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ion_list_22_ion_list_header_2_Template, 17, 6, "ion-list-header", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 49)(4, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePage_ion_list_22_ion_icon_5_Template, 1, 0, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomePage_ion_list_22_ion_icon_6_Template, 1, 0, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Select Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function HomePage_ion_list_22_Template_ion_select_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.chooseCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomePage_ion_list_22_ion_select_option_10_Template, 2, 2, "ion-select-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-item-group", 13)(12, "ion-button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_22_Template_ion_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, HomePage_ion_list_22_ion_icon_13_Template, 1, 0, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, HomePage_ion_list_22_ion_progress_bar_14_Template, 1, 0, "ion-progress-bar", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, HomePage_ion_list_22_ion_label_15_Template, 2, 0, "ion-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r11.selectedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r11.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.price);
  }
}
function HomePage_ion_list_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 43)(1, "ion-list-header")(2, "ion-item")(3, "ion-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-label")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-item-group", 13)(11, "ion-button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-progress-bar", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r12.currentDriver.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r12.currentDriver.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Arrives In ", ctx_r12.duration, "");
  }
}
function HomePage_ion_list_24_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_24_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 43)(1, "ion-list-header", 75)(2, "ion-label")(3, "h1", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 49)(6, "ion-item")(7, "ion-item")(8, "ion-label")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-item", 62)(14, "ion-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-label")(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-item")(21, "ion-item")(22, "ion-label")(23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, HomePage_ion_list_24_ion_item_28_Template, 5, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ion_list_24_ion_item_29_Template, 5, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-item", 62)(31, "ion-label")(32, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-accordion-group")(35, "ion-accordion", 78)(36, "ion-item", 79)(37, "ion-label")(38, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 80)(41, "ion-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_24_Template_ion_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "ion-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_24_Template_ion_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "ion-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "ion-button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ion_list_24_Template_ion_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r52.ClearRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "ion-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Cancel ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Driver Arrives in ", ctx_r13.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r13.driverInfo.Driver_car, ".", ctx_r13.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r13.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r13.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r13.driverInfo.Driver_rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Your Driver is ", ctx_r13.driverInfo.Driver_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r13.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r13.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx_r13.price, "");
  }
}
function HomePage_ion_list_25_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_25_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 43)(1, "ion-list-header", 75)(2, "ion-label")(3, "h1", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 49)(6, "ion-item")(7, "ion-item")(8, "ion-label")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-item", 62)(14, "ion-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-label")(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-item")(21, "ion-item")(22, "ion-label")(23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, HomePage_ion_list_25_ion_item_28_Template, 5, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, HomePage_ion_list_25_ion_item_29_Template, 5, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-item", 62)(31, "ion-label")(32, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Arrival in ", ctx_r14.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r14.driverInfo.Driver_car, ".", ctx_r14.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r14.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r14.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Your Driver is ", ctx_r14.driverInfo.Driver_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r14.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("$", ctx_r14.price, "");
  }
}
class HomePage {
  constructor(authService, auth, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl) {
    this.authService = authService;
    this.auth = auth;
    this.map = map;
    this.nav = nav;
    this.platform = platform;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.modalCtrl = modalCtrl;
    this.profile = null;
    this.address = 'Unknown';
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = 'Loading...';
    this.price = 0;
    this.current_Request_Number = -1;
  }
  //start the scene
  ngOnInit() {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.EnterBookingStage();
        yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this.coordinates = coordinates;
        yield _this.map.createMap(_this.mapRef.nativeElement, coordinates);
        _this.mapy = true;
        _this.database.getCards().subscribe(d => {
          console.log(d);
          _this.cards = d;
          _this.cards.forEach(element => {
            console.log(element);
            if (element.selected == true) {
              _this.selected = element;
              _this.selectedCard = element.name;
              if (_this.selectedCard == 'cash') _this.cash = true;
              console.log(_this.selectedCard);
            }
          });
        });
        _this.database.getKnownPlaces().subscribe(d => {
          _this.places = d.slice(0, 3);
          _this.places;
          console.log(d);
        });
        _this.actualLocation = _this.map.actualLocation;
        _this.locationAddress = _this.map.locationAddress;
        _this.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        //this.database.CreateNewDriver(coordinates);
        _this.map.newMap.setOnCameraIdleListener(g => {
          _this.ngZone.run(() => {
            _this.showResetLocationButton = true;
          });
        });
        _this.map.newMap.setOnCameraIdleListener( /*#__PURE__*/function () {
          var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (g) {
            _this.ngZone.run( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log(g);
              if (_this.mapPinStage) {
                const addressResponse = yield _this.geocode.getAddress(g.latitude, g.longitude).toPromise();
                if (addressResponse) {
                  _this.D_LatLng = {
                    lat: g.latitude,
                    lng: g.longitude
                  };
                  _this.actualDestination = _this.map.actualLocation;
                  const results = addressResponse.results;
                  if (results && results.length > 1) {
                    const addressComponents = results[1].address_components;
                    if (addressComponents && addressComponents.length > 1) {
                      _this.destinationAddress = `${addressComponents[0].long_name} ${addressComponents[1].long_name}`;
                      console.log("this is it " + _this.destinationAddress);
                    } else {
                      console.log('Address components are missing or incomplete.');
                    }
                  } else {
                    console.log('Results are missing or incomplete.');
                  }
                } else {
                  console.log('Failed to fetch address.');
                }
              }
            }));
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        yield _this.map.newMap.enableCurrentLocation(true);
        _this.price = null;
      } catch (e) {
        _this.overlay.showAlert('Error', e);
      }
      yield _this.checkDriversAround(_this.coordinates);
    })();
  }
  logout() {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authService.logout();
    })();
  }
  ionViewDidLeave() {
    if (this.listen) this.listen.unsubscribe();
  }
  ionViewDidEnter() {
    var _this3 = this;
    if (this.coordinates) this.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.checkDriversAround(_this3.coordinates);
    }));
  }
  simulateDriverAPP() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let coords = {
        coords: {
          latitude: 51.5074,
          longitude: 0.1278
        }
      };
    })();
  }
  /// Show all drivers around the user and reset marker states
  checkDriversAround(cord) {
    var _this4 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let numbs = [];
        const center = [cord.coords.latitude, cord.coords.longitude];
        const radiusInM = 500 * 1000;
        const drivers = yield _this4.database.checkDriversWithin(center, radiusInM);
        //Start Listening for any changes within;
        _this4.current_Request_Number = 0;
        console.log("Should show drivers here  " + drivers);
        if (drivers.length == 0) {
          _this4.NoDrivers = true;
        } else {
          _this4.NoDrivers = false;
          console.log(drivers);
          _this4.drivers_Requested = [];
          _this4._carmarkers = [];
          drivers.forEach((element, key, arr) => {
            numbs.push(element.duration);
            const min = Math.min(...numbs);
            _this4.driver_duration_apart = min;
            if (element.duration <= 1000 && element.onlineState == true) {
              _this4.drivers_Requested.push(element);
              console.log(_this4.drivers_Requested);
              _this4.carname = _this4.drivers_Requested[0].Driver_car;
              _this4.driver_ID = _this4.drivers_Requested[0].Driver_id;
              _this4.driver_number_of_seats = _this4.drivers_Requested[0].seats;
              _this4.DriverLatLng = {
                lat: _this4.drivers_Requested[0].Driver_lat,
                lng: _this4.drivers_Requested[0].Driver_lng
              };
              //  alert(this.drivers_Requested[0]);
            } else {
              if (Object.is(arr.length - 1, key)) {
                _this4.NoDrivers = true;
              }
            }
            //alert(JSON.stringify(element));
            // console.log(min);
            // console.log(element);
            _this4.closeDrivers = element;
          });
        }
      } catch (e) {
        _this4.overlay.showAlert('Error', e);
      }
    })();
  }
  chooseCard(even) {
    var _this5 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(even);
      _this5.overlay.showLoader('Please wait..');
      yield _this5.database.updateCArd(_this5.selected.name, _this5.selected.number, _this5.selected.type, _this5.selected.id, false);
      _this5.cards.forEach( /*#__PURE__*/function () {
        var _ref4 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
          console.log(element);
          if (element.name == even.detail.value) {
            yield _this5.database.updateCArd(element.name, element.number, element.type, element.id, true);
            _this5.overlay.hideLoader();
          }
        });
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  StartRide() {
    var _this6 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this6.marker1) {
          yield _this6.map.newMap.removeMarker(_this6.marker1.toString());
          _this6.marker1 = null;
          console.log('removed ', _this6.marker1);
        }
        if (_this6.marker2) {
          yield _this6.map.newMap.removeMarker(_this6.marker2.toString());
          _this6.marker2 = null;
          console.log('removed ', _this6.marker2);
        }
        if (_this6._carmarkers) {
          _this6._carmarkers.forEach( /*#__PURE__*/function () {
            var _ref5 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
              console.log(element, _this6._carmarkers);
              yield _this6.map.newMap.removeMarker(element);
              console.log('removed ', element);
              _this6._carmarkers = null;
            });
            return function (_x3) {
              return _ref5.apply(this, arguments);
            };
          }());
        }
        _this6.map.newMap.enableCurrentLocation(false);
        _this6.BookRide();
      } catch (e) {
        _this6.overlay.showAlert('MArker Error', e);
      }
    })();
  }
  BookRide() {
    var _this7 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.overlay.showLoader('');
      if (_this7.driver_marker) {
        yield _this7.map.newMap.removeMarker(_this7.driver_marker);
        _this7.driver_marker = null;
      }
      if (_this7.rider_marker) {
        yield _this7.map.newMap.removeMarker(_this7.rider_marker);
        _this7.rider_marker = null;
      }
      let driver = _this7.drivers_Requested[_this7.current_Request_Number];
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_this7.firestore, `Request`, driver.Driver_id);
      const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.onSnapshot)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_this7.firestore, "Drivers", driver.Driver_id), /*#__PURE__*/function () {
        var _ref6 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
          if (_this7.price && doc.data().onlineState == true) {
            unsub();
            yield _this7.database.RequestRideWithRiderDetails(_this7.LatLng, _this7.destinationAddress, _this7.locationAddress, _this7.D_LatLng, driver.Driver_id, _this7.price, _this7.cash);
            //alert(driver);
            //  if (driver != undefined){
            _this7.currentDriver = driver;
            console.log(driver);
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());
            // Driver Things;
            _this7.DriverLatLng = {
              lat: _this7.drivers_Requested[_this7.current_Request_Number].Driver_lat,
              lng: _this7.drivers_Requested[_this7.current_Request_Number].Driver_lng
            };
            yield _this7.createAndMoveMarkersOnRealtime(_this7.DriverLatLng, false, false);
            _this7.overlay.hideLoader();
            _this7.EnterSearchingStage();
            //after some time check if the next element has a driver if no request from driver, then close request and start a new request.
            console.log('This is the driver ' + driver);
            _this7.startTimer(driver, 20);
            _this7.numCalls = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(20000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              // await this.database.updateDriverOnlineState(driver.Driver_id)
              // await this.database.CreateandUpdateDriver(coords, driver.Driver_id)
              _this7.countDown.unsubscribe();
              ///if the the there is still a driver in the array then call him else cancel the request
              if (_this7.drivers_Requested[_this7.current_Request_Number + 1] != null) {
                _this7.current_Request_Number++;
                console.log(driver);
                _this7.BookRide();
                _this7.unsubscribe();
                _this7.numCalls.unsubscribe();
                console.log('requested another driver' + _this7.current_Request_Number);
              } else {
                _this7.numCalls.unsubscribe();
                _this7.unsubscribe();
                _this7.GoHome();
                console.log('No more Drivers To Request' + _this7.current_Request_Number);
                if (_this7.driver_marker) {
                  yield _this7.map.newMap.removeMarker(_this7.driver_marker.toString());
                  _this7.driver_marker = null;
                }
                if (_this7.rider_marker) {
                  yield _this7.map.newMap.removeMarker(_this7.rider_marker.toString());
                  _this7.rider_marker = null;
                }
              }
            }));
            _this7.unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.onSnapshot)(userDocRef, /*#__PURE__*/function () {
              var _ref8 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
                // console.log(snapshot);
                //If the driver rejects the request then close request and start a new one     
                if (doc.data().cancel == true) {
                  _this7.countDown.unsubscribe();
                  _this7.numCalls.unsubscribe();
                  ///if the the there is still a driver in the array then call him else cancel the request
                  if (_this7.drivers_Requested[_this7.current_Request_Number + 1].Driver_id) {
                    _this7.current_Request_Number++;
                    _this7.BookRide();
                    _this7.unsubscribe();
                    console.log('requested another driver' + _this7.current_Request_Number);
                  } else {
                    _this7.unsubscribe();
                    _this7.GoHome();
                    console.log('No more Drivers To Request' + _this7.current_Request_Number);
                    if (_this7.driver_marker) {
                      yield _this7.map.newMap.removeMarker(_this7.driver_marker.toString());
                      _this7.driver_marker = null;
                    }
                    if (_this7.rider_marker) {
                      yield _this7.map.newMap.removeMarker(_this7.rider_marker.toString());
                      _this7.rider_marker = null;
                    }
                  }
                  //  await this.database.RestartRequestSinceReject(this.drivers_Requested[this.current_Request_Number].id)
                }
                if (doc.data().start == true) {
                  _this7.driverInfo = doc.data();
                  if (_this7.canCheck) {
                    //show rider marker going to destination on realtime with updates;
                    _this7.canCheck = false;
                    _this7.clearPrevMarkers();
                    _this7.updateDriverSubcription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(4000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                      yield _this7.createAndMoveMarkersOnRealtime(_this7.D_LatLng, true, true);
                      _this7.canCheck = true;
                    }));
                  }
                  console.log(doc.data());
                  _this7.EnterDrivingToDestinationStage();
                  if (doc.data().cancel == true) {
                    if (!_this7.riderCleared) {
                      _this7.overlay.showAlert('Driver', 'Cancelled');
                    } else {
                      _this7.overlay.showAlert('You', 'Cancelled');
                    }
                    _this7.unsubscribe();
                    _this7.GoHome();
                  }
                }
                if (doc.data().stop == true) {
                  _this7.unsubscribe();
                  //this.overlay.showAlert('Ride', 'Completed');
                  _this7.ClearRide();
                  yield _this7.database.createHistory(doc.data());
                  if (_this7.countDown) _this7.countDown.unsubscribe();
                }
                if (doc.data().Driver_name && doc.data().stop == false && doc.data().start == false && doc.data().cancel == false) {
                  _this7.driverInfo = doc.data();
                  _this7.countDown.unsubscribe();
                  _this7.numCalls.unsubscribe();
                  _this7.DriverLatLng = {
                    lat: doc.data().Driver_lat,
                    lng: doc.data().Driver_lng
                  };
                  if (_this7.canCheck) {
                    // show rider marker and driver marker coming together;
                    _this7.canCheck = false;
                    _this7.clearPrevMarkers();
                    _this7.updateDriverSubcription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(4000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                      _this7.canCheck = true;
                      yield _this7.createAndMoveMarkersOnRealtime(_this7.DriverLatLng, true, false);
                    }));
                  }
                  console.log(doc.data());
                  _this7.EnterTrackingStage();
                }
              });
              return function (_x5) {
                return _ref8.apply(this, arguments);
              };
            }());
            // timer(10000).subscribe(async ()=>{
            //   this.database.PushDriverToRequest(driver);
            //  })
          } else {
            if (_this7.countDown) _this7.countDown.unsubscribe();
            if (_this7.drivers_Requested[_this7.current_Request_Number + 1] != null) {
              _this7.current_Request_Number++;
              console.log(driver);
              _this7.BookRide();
              console.log('requested another driver' + _this7.current_Request_Number);
            } else {
              _this7.GoHome();
              _this7.overlay.showAlert('Busy', 'The Requested Driver is currently Busy, Please Try again');
              console.log('No more Drivers To Request' + _this7.current_Request_Number);
            }
          }
          // }else{
          //   this.NoDrivers = true;
          //   this.EnterNoDriverStage();
          // }
        });
        return function (_x4) {
          return _ref6.apply(this, arguments);
        };
      }());
    })();
  }
  EnterChat() {
    var _this8 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__.EnrouteChatComponent,
        componentProps: {
          userId: _this8.driverInfo.Driver_id,
          message: ""
        },
        swipeToClose: true
      };
      const modal = yield _this8.modalCtrl.create(options);
      return yield modal.present();
    })();
  }
  startTimer(driver, sec) {
    var _this9 = this;
    this.countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(1000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.database.UpdateCountDown(sec, driver);
      sec--;
      if (sec == 0) {
        _this9.countDown.unsubscribe();
      }
    }));
  }
  goBackTOAutocomplete() {
    var _this10 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.marker1) {
        yield _this10.map.newMap.removeMarker(_this10.marker1);
        _this10.marker1 = null;
      }
      if (_this10.marker2) {
        yield _this10.map.newMap.removeMarker(_this10.marker2);
        _this10.marker2 = null;
      }
      if (_this10._carmarkers) {
        _this10._carmarkers.forEach( /*#__PURE__*/function () {
          var _ref12 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
            console.log(element, _this10._carmarkers);
            yield _this10.map.newMap.removeMarker(element);
            console.log('removed ', element);
          });
          return function (_x6) {
            return _ref12.apply(this, arguments);
          };
        }());
      }
      _this10.showAutocompleteModal();
    })();
  }
  //open the search section for autocomplete
  showAutocompleteModal() {
    var _this11 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent,
        componentProps: {
          LatLng: _this11.LatLng,
          locationAddress: _this11.locationAddress
        },
        swipeToClose: true
      };
      // this.map.newMap.hide();
      const modal = yield _this11.modalCtrl.create(options);
      modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log(data);
      // this.map.newMap.show();
      _this11.data = data;
      if (data.pinOnMap) {
        _this11.EnterMapPinStage();
        _this11.mapPinDrag = true;
      }
      if (data.home) {
        _this11.EnterBookingStage();
        yield _this11.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this11.LatLng
        });
      }
      if (data.searching) {
        _this11.database.AddKnownPlace(data);
        _this11.destinationAddress = data.full;
        _this11.actualDestination = data.whole.full;
        const latLng = yield _this11.geocode.getLatLng(data.whole.description);
        _this11.D_LatLng = {
          lat: latLng.data.results[0].geometry.location.lat,
          lng: latLng.data.results[0].geometry.location.lng
        };
        _this11.getDistanceandDirections();
      }
    })();
  }
  RequestRide(dat) {
    var _this12 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this12.NoDrivers) {
        _this12.destinationAddress = dat.place.full;
        _this12.actualDestination = dat.place.whole.full;
        const latLng = yield _this12.geocode.getLatLng(dat.place.whole.description);
        _this12.D_LatLng = {
          lat: latLng.data.results[0].geometry.location.lat,
          lng: latLng.data.results[0].geometry.location.lng
        };
        _this12.getDistanceandDirections();
      } else {
        _this12.EnterNoDriverStage();
      }
    })();
  }
  //reset the map to the user location view
  resetLocation() {
    var _this13 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this13.LatLng);
      yield _this13.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this13.LatLng
      });
      _this13.showResetLocationButton = false;
    })();
  }
  ///get the distance and directions to destination
  getDistanceandDirections() {
    var _this14 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this14.listen) _this14.listen.unsubscribe();
      if (_this14.D_LatLng.lat) {
        if (!_this14.NoDrivers) {
          _this14.EnterConfirmStage();
        } else {
          _this14.EnterNoDriverStage();
        }
        var origin1 = new google.maps.LatLng(_this14.LatLng.lat, _this14.LatLng.lng);
        var origin2 = new google.maps.LatLng(_this14.D_LatLng.lat, _this14.D_LatLng.lng);
        if (!_this14.NoDrivers) var request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };
        _this14.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref13 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            if (status == 'OK') {
              _this14.direction = response;
              _this14.distance = response.routes[0].legs[0].distance.value;
              _this14.bounds = response.routes[0].bounds;
              _this14.price = _this14.distance / 10;
              yield _this14.UpdateCarMarker(_this14.closeDrivers);
              yield _this14.createAndAddMarkers(_this14.LatLng, _this14.D_LatLng, _this14.bounds);
            } else {
              _this14.overlay.showAlert('Direction ERROR', JSON.stringify(response));
            }
          });
          return function (_x7, _x8) {
            return _ref13.apply(this, arguments);
          };
        }());
      } else {
        _this14.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');
      }
    })();
  }
  //create and update car markers on the map.
  UpdateCarMarker(element) {
    var _this15 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let latlng = {
        lat: element.Driver_lat,
        lng: element.Driver_lng
      };
      const markers = yield _this15.map.newMap.addMarker({
        coordinate: latlng,
        iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
        title: 'My 2'
      });
      if (markers) _this15._carmarkers.push(markers.toString());
      console.log(_this15._carmarkers, markers.toString());
    })();
  }
  //Return to Map page
  GoHome() {
    var _this16 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this16.map.newMap.enableCurrentLocation(true);
      _this16.current_Request_Number = 0;
      _this16.price = null;
      _this16.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this16.checkDriversAround(_this16.coordinates);
      }));
      _this16.EnterBookingStage();
      yield _this16.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this16.LatLng
      });
    })();
  }
  GotoSupport() {
    var _this17 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this17.nav.navigateForward('support');
    })();
  }
  clearPrevMarkers() {
    var _this18 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.driver_marker) {
        yield _this18.map.newMap.removeMarker(_this18.driver_marker.toString());
        _this18.driver_marker = null;
      }
      if (_this18.rider_marker) {
        yield _this18.map.newMap.removeMarker(_this18.rider_marker.toString());
        _this18.rider_marker = null;
      }
    })();
  }
  //Return to Map page
  ReturnHome() {
    var _this19 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.EnterBookingStage();
      yield _this19.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this19.LatLng
      });
    })();
  }
  //Cancel the Current Ride Request.....
  CancelRide() {
    var _this20 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this20.overlay.showLoader('Please Wait..');
      if (_this20.driver_marker) {
        yield _this20.map.newMap.removeMarker(_this20.driver_marker.toString());
        _this20.driver_marker = null;
      }
      if (_this20.rider_marker) {
        yield _this20.map.newMap.removeMarker(_this20.rider_marker.toString());
        _this20.rider_marker = null;
      }
      let coords = {
        coords: {
          latitude: _this20.currentDriver.Driver_lat,
          longitude: _this20.currentDriver.Driver_lng
        }
      };
      _this20.unsubscribe();
      _this20.numCalls.unsubscribe();
      _this20.riderCleared = true;
      yield _this20.database.cancelRide(_this20.currentDriver.Driver_id);
      yield _this20.map.newMap.enableCurrentLocation(true);
      _this20.current_Request_Number = 0;
      _this20.price = null;
      _this20.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this20.checkDriversAround(_this20.coordinates);
      }));
      _this20.EnterBookingStage();
      _this20.overlay.hideLoader();
      yield _this20.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this20.LatLng
      });
    })();
  }
  ///Clear the ride that has already started
  ClearRide() {
    var _this21 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this21.EnterBookingStage();
      if (_this21.driver_marker) {
        yield _this21.map.newMap.removeMarker(_this21.driver_marker);
        _this21.driver_marker = null;
      }
      if (_this21.rider_marker) {
        yield _this21.map.newMap.removeMarker(_this21.rider_marker);
        _this21.rider_marker = null;
      }
      yield _this21.map.newMap.enableCurrentLocation(true);
      _this21.current_Request_Number = 0;
      _this21.price = null;
      _this21.listen = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(5000).subscribe( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this21.checkDriversAround(_this21.coordinates);
      }));
      yield _this21.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this21.LatLng,
        bearing: 0
      });
    })();
  }
  CallDriver() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  ///create markers and possition them in the view of the user
  createAndMoveMarkersOnRealtime(otherLatLng, state, isDestination) {
    var _this22 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var origin1 = new google.maps.LatLng(_this22.LatLng.lat, _this22.LatLng.lng);
      var origin2 = new google.maps.LatLng(otherLatLng.lat, otherLatLng.lng);
      var request = {
        origin: origin2,
        destination: origin1,
        travelMode: google.maps.TravelMode.DRIVING
      };
      _this22.geocode.directions.route(request, /*#__PURE__*/function () {
        var _ref17 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
          if (status == 'OK') {
            _this22.bounds = response.routes[0].bounds;
            _this22.duration = response.routes[0].legs[0].duration.text;
            let markerUrl;
            if (!isDestination) {
              markerUrl = 'https://i.ibb.co/KDy365b/hatchback.png';
            } else {
              markerUrl = 'https://i.ibb.co/bWx9V64/favourite.png';
            }
            _this22.driver_marker = yield _this22.map.newMap.addMarker({
              coordinate: otherLatLng,
              iconUrl: markerUrl,
              title: 'My 2'
            });
            _this22.rider_marker = yield _this22.map.newMap.addMarker({
              coordinate: _this22.LatLng,
              iconUrl: "https://i.ibb.co/N9LXGk3/home-1.png",
              title: 'My 2'
            });
            const locs = [{
              geoCode: {
                latitude: _this22.LatLng.lat,
                longitude: _this22.LatLng.lng
              }
            }, {
              geoCode: {
                latitude: otherLatLng.lat,
                longitude: otherLatLng.lng
              }
            }];
            let go = {
              lat: (yield _this22.map.CalculateCenter(locs)).latitude,
              lng: (yield _this22.map.CalculateCenter(locs)).longitude
            };
            if (state) {
              yield _this22.map.newMap.setPadding({
                top: 0,
                left: 0,
                right: 0,
                bottom: 600
              });
            }
            let mapDim = {
              height: _this22.mapRef.nativeElement.offsetHeight / 2,
              width: _this22.mapRef.nativeElement.offsetWidth
            };
            yield _this22.map.newMap.setCamera({
              animate: true,
              animationDuration: 500,
              zoom: yield _this22.map.getBoundsZoomLevel(_this22.bounds, mapDim),
              coordinate: go,
              bearing: 0
            });
            _this22.canCheck = true;
          } else {
            _this22.overlay.showAlert('Direction ERROR', JSON.stringify(response));
          }
        });
        return function (_x9, _x10) {
          return _ref17.apply(this, arguments);
        };
      }());
    })();
  }
  ///create markers and possition them in the view of the user
  createAndAddMarkers(loc, des, bounds) {
    var _this23 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this23.marker1 = yield _this23.map.newMap.addMarker({
        coordinate: loc,
        iconUrl: "https://i.ibb.co/N9LXGk3/home-1.png",
        title: 'My 2'
      });
      _this23.marker2 = yield _this23.map.newMap.addMarker({
        coordinate: des,
        iconUrl: 'https://i.ibb.co/bWx9V64/favourite.png',
        title: 'My 2'
      });
      const locs = [{
        geoCode: {
          latitude: loc.lat,
          longitude: loc.lng
        }
      }, {
        geoCode: {
          latitude: des.lat,
          longitude: des.lng
        }
      }];
      let go = {
        lat: (yield _this23.map.CalculateCenter(locs)).latitude,
        lng: (yield _this23.map.CalculateCenter(locs)).longitude
      };
      let mapDim = {
        height: _this23.mapRef.nativeElement.offsetHeight / 2,
        width: _this23.mapRef.nativeElement.offsetWidth
      };
      yield _this23.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: yield _this23.map.getBoundsZoomLevel(bounds, mapDim),
        coordinate: go,
        bearing: 0
      });
    })();
  }
  EnterBookingStage() {
    this.bookingStage = true;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }
  EnterMapPinStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = true;
    this.drivingToDestinationStage = false;
  }
  EnterConfirmStage() {
    this.bookingStage = false;
    this.confirmStage = true;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }
  EnterSearchingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = true;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }
  EnterNoDriverStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.noDriverStage = true;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }
  EnterTrackingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = true;
    this.searchingStage = false;
    this.noDriverStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }
  EnterDrivingToDestinationStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.searchingStage = false;
    this.mapPinStage = false;
    this.noDriverStage = false;
    this.drivingToDestinationStage = true;
  }
}
HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_5__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_6__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_geocode_service__WEBPACK_IMPORTED_MODULE_7__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_8__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController));
};
HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  decls: 26,
  vars: 19,
  consts: [[1, "ion-no-border", 3, "translucent"], [4, "ngIf"], ["class", "top_bar", 4, "ngIf"], ["vertical", "top", "horizontal", "start", 4, "ngIf"], ["vertical", "top", "horizontal", "end", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", 3, "click", 4, "ngIf"], ["color", "danger", "vertical", "top", "horizontal", "start", 3, "click", 4, "ngIf"], [3, "fullscreen"], ["map", ""], ["class", "centerPin", "vertical", "center", "horizontal", "center", 4, "ngIf"], ["vertical", "top", "horizontal", "end", 4, "ngIf"], ["class", "bottomItems shadow-top", "lines", "full", 4, "ngIf"], ["lines", "full", 1, "bottomItems", "shadow-top", 3, "hidden"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["class", "bottomItems shadow-top", "lines", "none", 4, "ngIf"], ["slot", "start"], ["shape", "round", 3, "click"], ["slot", "icon-only", "name", "arrow-back", "color", "tertiary"], [1, "top_bar"], ["lines", "none"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "color", "primary", "name", "create"], ["vertical", "top", "horizontal", "start"], ["color", "light"], ["color", "primary"], ["vertical", "top", "horizontal", "end", 3, "click"], ["color", "primary", "name", "chatbubble-ellipses"], ["vertical", "top", "horizontal", "start", 3, "click"], ["name", "arrow-back", "color", "primary"], ["color", "danger", "vertical", "top", "horizontal", "start", 3, "click"], ["name", "trash-sharp", "color", "primary"], ["vertical", "center", "horizontal", "center", 1, "centerPin"], ["src", "../../assets/icon/pin.png"], ["vertical", "top", "horizontal", "end"], ["color", "light", 3, "click"], ["name", "locate"], ["lines", "full", 1, "bottomItems", "shadow-top"], ["slot", "start", "name", "search", "color", "primary"], ["class", "bottomItems ion-margin", 3, "click", 4, "ngFor", "ngForOf"], [1, "bottomItems", "ion-margin", 3, "click"], ["name", "pin", "color", "primary", "slot", "start"], ["lines", "none", 1, "bottomItems", "shadow-top"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/No connection-pana.svg"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "arrow-back"], ["color", "light", "class", "payment", 4, "ngIf"], [1, "card"], ["color", "primary", "slot", "start", "name", "cash-sharp", 4, "ngIf"], ["color", "primary", "slot", "start", "name", "card-sharp", 4, "ngIf"], ["position", "floating"], [3, "value", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["shape", "round", "color", "primary", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "start", "name", "checkmark-sharp", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["color", "light", 1, "payment"], ["src", "../../assets/icon/hatchback.png"], ["slot", "icon-only", "color", "primary", "name", "information-circle"], ["slot", "icon-only", "color", "primary", "name", "person"], [1, "price"], [3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "100px", 3, "animated"], [2, "width", "80px", 3, "animated"], ["color", "primary", "slot", "start", "name", "cash-sharp"], ["color", "primary", "slot", "start", "name", "card-sharp"], [3, "value"], ["slot", "start", "name", "checkmark-sharp"], ["color", "light", "type", "indeterminate"], [3, "src"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button"], ["type", "indeterminate"], [1, "ion-margin-bottom"], [1, "ion-text-center"], ["slot", "icon-only", "color", "warning", "name", "star"], ["value", "first"], ["slot", "header"], ["slot", "content"], ["shape", "round", "size", "large", "expand", "block", 1, "main-button", 3, "click"], ["color", "primary", "slot", "start", "name", "person"], ["color", "primary", "slot", "start", "name", "chatbubbles"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "slot", "icon-only", "name", "cash"], ["color", "primary", "slot", "icon-only", "name", "card"], ["slot", "icon-only", "color", "secondary", "name", "star"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ion_toolbar_1_Template, 6, 0, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, HomePage_ion_row_2_Template, 7, 1, "ion-row", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, HomePage_ion_fab_3_Template, 3, 0, "ion-fab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, HomePage_ion_fab_4_Template, 3, 0, "ion-fab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, HomePage_ion_fab_5_Template, 3, 0, "ion-fab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, HomePage_ion_fab_6_Template, 3, 0, "ion-fab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-content", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "capacitor-google-maps", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomePage_ion_fab_10_Template, 3, 0, "ion-fab", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, HomePage_ion_fab_12_Template, 3, 0, "ion-fab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, HomePage_ion_list_14_Template, 7, 1, "ion-list", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-list", 12)(16, "ion-item-group", 13)(17, "ion-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_17_listener() {
        return ctx.getDistanceandDirections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, HomePage_ion_list_21_Template, 9, 0, "ion-list", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, HomePage_ion_list_22_Template, 16, 9, "ion-list", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, HomePage_ion_list_23_Template, 13, 3, "ion-list", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, HomePage_ion_list_24_Template, 53, 10, "ion-list", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, HomePage_ion_list_25_Template, 34, 9, "ion-list", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.bookingStage && ctx.showResetLocationButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.destinationAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.noDriverStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.drivingToDestinationStage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100vh;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-header[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 0vh;\n  background: transparent;\n  display: block;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 20px 20px;\n  padding-bottom: 0vh;\n}\n\nion-header[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  --background: transparent !important;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: transparent !important;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0.5;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU9OSUMlMjBQUk9KRUNUU1xcbXlSaWRlci0yMDI0MDUyNFQwNDA1MDVaLTAwMVxcbXlSaWRlclxcc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FGOztBRElBO0VBQ0U7SUFDRSwyQkFBQTtFQ0RGO0VER0E7SUFDRSx5QkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDQyxtRUFBQTtBQ0ZEOztBRE9BO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQ0pGOztBRE9BO0VBQ0UscUNBQUE7QUNKRjs7QURVRTtFQUNFLGdCQUFBO0FDUEo7O0FEU0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFFJO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtBQ05SOztBRE9RO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FDTFY7O0FEWUE7RUFBYyx5QkFBQTtFQUEyQixnQkFBQTtBQ1B6Qzs7QURXRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDUko7O0FEU0k7RUFDSSxtQkFBQTtBQ1BSOztBRFNJO0VBQ0ksNEJBQUE7QUNQUjs7QURVWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNSaEI7O0FEYUU7RUFDRSxpQkFBQTtBQ1hKOztBRGNLO0VBQ0MsZ0JBQUE7RUFFQyxvQ0FBQTtBQ2JQOztBRGNPO0VBQ0MsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQ1pSOztBRHVCQTtFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7O0FEd0JBO0VBRUUsaUJBQUE7RUFDQSxTQUFBO0FDdEJGOztBRHlCQztFQUVHLHVEQUFBO0FDdkJKOztBRDBCRTtFQUNFLHNEQUFBO0FDdkJKOztBRDBCRTtFQUNFLHVEQUFBO0FDdkJKOztBRDBCQTtFQUNFLDRCQUFBO0VBQ0EsMENBQUE7QUN2QkY7O0FEMkJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUN4QkY7O0FENEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzFCRjs7QUQ2QkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDMUJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYXBhY2l0b3ItZ29vZ2xlLW1hcHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5zbGlkZS10b3Age1xuXHRhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuXG5cbi5jZW50ZXJQaW57XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbn1cblxuLmJvdHRvbUl0ZW1ze1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDk4LCAyNTUsIDAuNjI1KTtcbn1cblxuXG5pb24taGVhZGVye1xuICAgXG4gIGlvbi1mYWJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBpb24tcm93IHtcbiAgICBwYWRkaW5nLXRvcDogMHZoO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwdmg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG59XG5cbmlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgbWFyZ2luLXRvcDogMjBweDt9XG5cblxuaW9uLWZvb3RlcntcbiAgaW9uLXJvdyB7XG4gICAgcGFkZGluZy10b3A6IDV2aDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDZ2aDtcbiAgICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4gIGlvbi1mYWJ7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIH1cbiAgIGlvbi1saXN0e1xuICAgICAucGF5bWVudHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAvLyAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICBpb24taXRlbXtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgXG4gICAgICAgfVxuICAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgIH1cblxuICB9XG59XG5cbi5jZW50ZXJFbGVtXG57XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpY2VcbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmbGV4OiAwLjU7XG4gfVxuIFxuIC5zaGFkb3ctdG9wXG4gIHtcbiAgICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xuICB9XG5cbiAgLnRvcF9iYXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xuICB9XG5cbiAgLmNhcmR7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgfVxuXG4ubWFpbi1idXR0b257XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IFxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlXG59XG5cbiIsImNhcGFjaXRvci1nb29nbGUtbWFwcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG4uc2xpZGUtdG9wIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLmNlbnRlclBpbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbn1cblxuLmJvdHRvbUl0ZW1zIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjYyNSk7XG59XG5cbmlvbi1oZWFkZXIgaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24taGVhZGVyIGlvbi1yb3cge1xuICBwYWRkaW5nLXRvcDogMHZoO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24taGVhZGVyIGlvbi1yb3cgaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDB2aDtcbn1cbmlvbi1oZWFkZXIgaW9uLXJvdyBpb24tbGlzdCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWZvb3RlciBpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDV2aDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1mYWItYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyLjV2aDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbmlvbi1mb290ZXIgaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuaW9uLWZvb3RlciBpb24tbGlzdCAucGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIgaW9uLWxpc3QgLnBheW1lbnQgaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyRWxlbSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpY2Uge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZmxleDogMC41O1xufVxuXG4uc2hhZG93LXRvcCB7XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG59XG5cbi50b3BfYmFyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG59XG5cbi5tYWluLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLnByZXZpZXcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn0iXX0= */"]
});

/***/ }),

/***/ 8793:
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodeService": () => (/* binding */ GeocodeService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);









class GeocodeService {
  constructor(client, overlay, http) {
    this.client = client;
    this.overlay = overlay;
    this.http = http;
    this.service = new google.maps.DistanceMatrixService();
    this.directions = new google.maps.DirectionsService();
    this.apiUrl = 'https://maps.googleapis.com/maps/api';
  }
  getAddress(lat, lng) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in reverse geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  }
  //convert the address to lat and lng
  getLatLng(addressi) {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const latlng = yield _this.client.geocode({
          params: {
            address: addressi,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey
          },
          timeout: 5000 // milliseconds
        });
        return latlng;
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);
        console.log(e);
      }
    })();
  }
  //Get the distance between the origin and destination
  getDirections(from, to) {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {} catch (e) {
        _this2.overlay.showAlert('GeoError', e);
        console.log(e);
      }
    })();
  }
}
GeocodeService.ɵfac = function GeocodeService_Factory(t) {
  return new (t || GeocodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__.Client), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
GeocodeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: GeocodeService,
  factory: GeocodeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);
/* harmony import */ var _geocode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geocode.service */ 8793);








class MapService {
  constructor(overlay, geocode, http) {
    this.overlay = overlay;
    this.geocode = geocode;
    this.http = http;
    this.locationAddress = 'Loading..';
  }
  createMap(ref, coords) {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.newMap = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__.GoogleMap.create({
          id: 'my-cool-map',
          element: ref,
          apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey,
          config: {
            center: {
              lat: 5.5122138,
              lng: 7.4919135
            },
            zoom: 8
          }
        });
        _this.LatLng = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude
        };
        _this.newMap.enableTrafficLayer(true);
        _this.newMap.enableCurrentLocation(true);
        yield _this.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        });
        const address = yield _this.getAddress(_this.LatLng.lat, _this.LatLng.lng);
        // Log the address response for debugging
        console.log('Address response:', address);
        if (address && address.results) {
          if (address.results.length > 0) {
            _this.actualLocation = address.results[0].formatted_address;
          } else {
            console.log('No results found in address data');
          }
          if (address.results.length > 1) {
            const components = address.results[1].address_components;
            if (components.length >= 2) {
              _this.locationAddress = components[0].long_name + ' ' + components[1].long_name;
            } else {
              console.log('Not enough address components for the second result');
            }
          } else {
            console.log('Less than two results found in address data');
          }
        } else {
          console.log('Address data is undefined or does not contain results');
        }
      } catch (e) {
        console.log('Error creating map or getting address:', e);
      }
    })();
  }
  CalculateCenter(locations) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let latitude = 0;
      let longitude = 0;
      for (const location of locations) {
        longitude += location.geoCode.longitude;
        latitude += location.geoCode.latitude;
      }
      latitude /= locations.length;
      longitude /= locations.length;
      return {
        latitude,
        longitude
      };
    })();
  }
  getBoundsZoomLevel(bounds, mapDim) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const WORLD_DIM = {
        height: 256,
        width: 256
      };
      const ZOOM_MAX = 21;
      function latRad(lat) {
        const sin = Math.sin(lat * Math.PI / 180);
        const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
        return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
      }
      function zoom(mapPx, worldPx, fraction) {
        return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
      }
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();
      const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
      const lngDiff = ne.lng() - sw.lng();
      const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
      const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
      const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
      return Math.min(latZoom, lngZoom, ZOOM_MAX);
    })();
  }
  getDirections(from, to) {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey}`;
        const response = yield _this2.http.get(url).toPromise();
        return response;
      } catch (error) {
        console.error('Error in getting directions:', error);
        return null;
      }
    })();
  }
  getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey);
    return this.http.get(url, {
      params
    }).toPromise();
  }
}
MapService.ɵfac = function MapService_Factory(t) {
  return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_geocode_service__WEBPACK_IMPORTED_MODULE_4__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
MapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MapService,
  factory: MapService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3371)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatLngBounds": () => (/* binding */ LatLngBounds),
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 1819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }
  contains(point) {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }
  extend(point) {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsExtend({
        bounds: _this2,
        point
      });
      _this2.southwest = result['bounds']['southwest'];
      _this2.center = result['bounds']['center'];
      _this2.northeast = result['bounds']['northeast'];
      return _this2;
    })();
  }
}
var MapType;
(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */
  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */
  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */
  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */
  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;
  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "LatLngBounds": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementation */ 1819);




class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = '';
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }
}
customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;
    this.resizeObserver = null;
    this.handleScrollEvent = () => this.updateMapBounds();
    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */
  static create(options, callback) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);
      if (!options.element) {
        throw new Error('container element is required');
      }
      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }
      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};
        const getMapBounds = () => {
          var _a, _b;
          const mapRect = (_b = (_a = newMap.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {};
          return {
            x: mapRect.x,
            y: mapRect.y,
            width: mapRect.width,
            height: mapRect.height
          };
        };
        const onDisplay = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onDisplay({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };
        const onResize = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onResize({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };
        const ionicPage = newMap.element.closest('.ion-page');
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && ionicPage) {
          ionicPage.addEventListener('ionViewWillEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
          ionicPage.addEventListener('ionViewDidEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
        }
        const lastState = {
          width: elementBounds.width,
          height: elementBounds.height,
          isHidden: false
        };
        newMap.resizeObserver = new ResizeObserver(() => {
          if (newMap.element != null) {
            const mapRect = newMap.element.getBoundingClientRect();
            const isHidden = mapRect.width === 0 && mapRect.height === 0;
            if (!isHidden) {
              if (lastState.isHidden) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && !ionicPage) {
                  onDisplay();
                }
              } else if (lastState.width !== mapRect.width || lastState.height !== mapRect.height) {
                onResize();
              }
            }
            lastState.width = mapRect.width;
            lastState.height = mapRect.height;
            lastState.isHidden = isHidden;
          }
        });
        newMap.resizeObserver.observe(newMap.element);
      }
      // small delay to allow for iOS WKWebView to setup corresponding element sub-scroll views ???
      yield new Promise((resolve, reject) => {
        setTimeout( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.create(options);
            resolve(undefined);
          } catch (err) {
            reject(err);
          }
        }), 200);
      });
      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }
      return newMap;
    })();
  }
  static getElementBounds(element) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        let elementBounds = element.getBoundingClientRect();
        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function () {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn('Map size could not be determined');
              }
              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    })();
  }
  /**
   * Enable touch events on native map
   *
   * @returns void
   */
  enableTouch() {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTouch({
        id: _this.id
      });
    })();
  }
  /**
   * Disable touch events on native map
   *
   * @returns void
   */
  disableTouch() {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableTouch({
        id: _this2.id
      });
    })();
  }
  /**
   * Enable marker clustering
   *
   * @param minClusterSize - The minimum number of markers that can be clustered together.
   * @defaultValue 4
   *
   * @returns void
   */
  enableClustering(minClusterSize) {
    var _this3 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableClustering({
        id: _this3.id,
        minClusterSize
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */
  disableClustering() {
    var _this4 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableClustering({
        id: _this4.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */
  addMarker(marker) {
    var _this5 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarker({
        id: _this5.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */
  addMarkers(markers) {
    var _this6 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarkers({
        id: _this6.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */
  removeMarker(id) {
    var _this7 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarker({
        id: _this7.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */
  removeMarkers(ids) {
    var _this8 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this8.id,
        markerIds: ids
      });
    })();
  }
  addPolygons(polygons) {
    var _this9 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this9.id,
        polygons
      });
      return res.ids;
    })();
  }
  addPolylines(polylines) {
    var _this10 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }
  removePolygons(ids) {
    var _this11 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }
  addCircles(circles) {
    var _this12 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }
  removeCircles(ids) {
    var _this13 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }
  removePolylines(ids) {
    var _this14 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolylines({
        id: _this14.id,
        polylineIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */
  destroy() {
    var _this15 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this15.disableScrolling();
      }
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        (_a = _this15.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      }
      _this15.removeAllMapListeners();
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.destroy({
        id: _this15.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */
  setCamera(config) {
    var _this16 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }
  getMapType() {
    var _this17 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        type
      } = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapType({
        id: _this17.id
      });
      return _definitions__WEBPACK_IMPORTED_MODULE_2__.MapType[type];
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */
  setMapType(mapType) {
    var _this18 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setMapType({
        id: _this18.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */
  enableIndoorMaps(enabled) {
    var _this19 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this19.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */
  enableTrafficLayer(enabled) {
    var _this20 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this20.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */
  enableAccessibilityElements(enabled) {
    var _this21 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this21.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */
  enableCurrentLocation(enabled) {
    var _this22 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this22.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */
  setPadding(padding) {
    var _this23 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setPadding({
        id: _this23.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */
  getMapBounds() {
    var _this24 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }
  fitBounds(bounds, padding) {
    var _this25 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.fitBounds({
        id: _this25.id,
        bounds,
        padding
      });
    })();
  }
  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content');
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }
    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }
  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }
  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */
  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */
  setOnCameraIdleListener(callback) {
    var _this26 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onCameraIdleListener) {
        _this26.onCameraIdleListener.remove();
      }
      if (callback) {
        _this26.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraIdle', _this26.generateCallback(callback));
      } else {
        _this26.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */
  setOnBoundsChangedListener(callback) {
    var _this27 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onBoundsChangedListener) {
        _this27.onBoundsChangedListener.remove();
      }
      if (callback) {
        _this27.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this27.generateCallback(callback));
      } else {
        _this27.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */
  setOnCameraMoveStartedListener(callback) {
    var _this28 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onCameraMoveStartedListener) {
        _this28.onCameraMoveStartedListener.remove();
      }
      if (callback) {
        _this28.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this28.generateCallback(callback));
      } else {
        _this28.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */
  setOnClusterClickListener(callback) {
    var _this29 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();
      }
      if (callback) {
        _this29.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterClick', _this29.generateCallback(callback));
      } else {
        _this29.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */
  setOnClusterInfoWindowClickListener(callback) {
    var _this30 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this30.onClusterInfoWindowClickListener) {
        _this30.onClusterInfoWindowClickListener.remove();
      }
      if (callback) {
        _this30.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this30.generateCallback(callback));
      } else {
        _this30.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */
  setOnInfoWindowClickListener(callback) {
    var _this31 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this31.onInfoWindowClickListener) {
        _this31.onInfoWindowClickListener.remove();
      }
      if (callback) {
        _this31.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this31.generateCallback(callback));
      } else {
        _this31.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMapClickListener(callback) {
    var _this32 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this32.onMapClickListener) {
        _this32.onMapClickListener.remove();
      }
      if (callback) {
        _this32.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapClick', _this32.generateCallback(callback));
      } else {
        _this32.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolygonClick' events.
   *
   * @param callback
   * @returns
   */
  setOnPolygonClickListener(callback) {
    var _this33 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this33.onPolygonClickListener) {
        _this33.onPolygonClickListener.remove();
      }
      if (callback) {
        _this33.onPolygonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolygonClick', _this33.generateCallback(callback));
      } else {
        _this33.onPolygonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCircleClick' events.
   *
   * @param callback
   * @returns
   */
  setOnCircleClickListener(callback) {
    var _this34 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this34.onCircleClickListener) [_this34.onCircleClickListener.remove()];
      if (callback) {
        _this34.onCircleClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCircleClick', _this34.generateCallback(callback));
      } else {
        _this34.onCircleClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerClickListener(callback) {
    var _this35 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this35.onMarkerClickListener) {
        _this35.onMarkerClickListener.remove();
      }
      if (callback) {
        _this35.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerClick', _this35.generateCallback(callback));
      } else {
        _this35.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolylineClick' events.
   *
   * @param callback
   * @returns
   */
  setOnPolylineClickListener(callback) {
    var _this36 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this36.onPolylineClickListener) {
        _this36.onPolylineClickListener.remove();
      }
      if (callback) {
        _this36.onPolylineClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolylineClick', _this36.generateCallback(callback));
      } else {
        _this36.onPolylineClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragStartListener(callback) {
    var _this37 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this37.onMarkerDragStartListener) {
        _this37.onMarkerDragStartListener.remove();
      }
      if (callback) {
        _this37.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this37.generateCallback(callback));
      } else {
        _this37.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragListener(callback) {
    var _this38 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this38.onMarkerDragListener) {
        _this38.onMarkerDragListener.remove();
      }
      if (callback) {
        _this38.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this38.generateCallback(callback));
      } else {
        _this38.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragEndListener(callback) {
    var _this39 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this39.onMarkerDragEndListener) {
        _this39.onMarkerDragEndListener.remove();
      }
      if (callback) {
        _this39.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this39.generateCallback(callback));
      } else {
        _this39.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMyLocationButtonClickListener(callback) {
    var _this40 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this40.onMyLocationButtonClickListener) {
        _this40.onMyLocationButtonClickListener.remove();
      }
      if (callback) {
        _this40.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this40.generateCallback(callback));
      } else {
        _this40.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMyLocationClickListener(callback) {
    var _this41 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this41.onMyLocationClickListener) {
        _this41.onMyLocationClickListener.remove();
      }
      if (callback) {
        _this41.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this41.generateCallback(callback));
      } else {
        _this41.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */
  removeAllMapListeners() {
    var _this42 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this42.onBoundsChangedListener) {
        _this42.onBoundsChangedListener.remove();
        _this42.onBoundsChangedListener = undefined;
      }
      if (_this42.onCameraIdleListener) {
        _this42.onCameraIdleListener.remove();
        _this42.onCameraIdleListener = undefined;
      }
      if (_this42.onCameraMoveStartedListener) {
        _this42.onCameraMoveStartedListener.remove();
        _this42.onCameraMoveStartedListener = undefined;
      }
      if (_this42.onClusterClickListener) {
        _this42.onClusterClickListener.remove();
        _this42.onClusterClickListener = undefined;
      }
      if (_this42.onClusterInfoWindowClickListener) {
        _this42.onClusterInfoWindowClickListener.remove();
        _this42.onClusterInfoWindowClickListener = undefined;
      }
      if (_this42.onInfoWindowClickListener) {
        _this42.onInfoWindowClickListener.remove();
        _this42.onInfoWindowClickListener = undefined;
      }
      if (_this42.onMapClickListener) {
        _this42.onMapClickListener.remove();
        _this42.onMapClickListener = undefined;
      }
      if (_this42.onPolylineClickListener) {
        _this42.onPolylineClickListener.remove();
        _this42.onPolylineClickListener = undefined;
      }
      if (_this42.onMarkerClickListener) {
        _this42.onMarkerClickListener.remove();
        _this42.onMarkerClickListener = undefined;
      }
      if (_this42.onPolygonClickListener) {
        _this42.onPolygonClickListener.remove();
        _this42.onPolygonClickListener = undefined;
      }
      if (_this42.onCircleClickListener) {
        _this42.onCircleClickListener.remove();
        _this42.onCircleClickListener = undefined;
      }
      if (_this42.onMarkerDragStartListener) {
        _this42.onMarkerDragStartListener.remove();
        _this42.onMarkerDragStartListener = undefined;
      }
      if (_this42.onMarkerDragListener) {
        _this42.onMarkerDragListener.remove();
        _this42.onMarkerDragListener = undefined;
      }
      if (_this42.onMarkerDragEndListener) {
        _this42.onMarkerDragEndListener.remove();
        _this42.onMarkerDragEndListener = undefined;
      }
      if (_this42.onMyLocationButtonClickListener) {
        _this42.onMyLocationButtonClickListener.remove();
        _this42.onMyLocationButtonClickListener = undefined;
      }
      if (_this42.onMyLocationClickListener) {
        _this42.onMyLocationClickListener.remove();
        _this42.onMyLocationClickListener = undefined;
      }
    })();
  }
  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }
}

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }
  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}
function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map