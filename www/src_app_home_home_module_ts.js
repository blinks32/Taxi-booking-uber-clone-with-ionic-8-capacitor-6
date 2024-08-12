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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__.StorageModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__.StorageModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ 3253);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-card/add-card.component */ 671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/network.service */ 2982);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/payment.service */ 1863);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
























const _c0 = ["map"];
const _c1 = ["topBar"];
const _c2 = ["bottomBar"];
const _c3 = ["mapElement"];
function HomePage_ion_toolbar_3_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label", 26)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r17.duration);
  }
}
function HomePage_ion_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-buttons", 19)(2, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_toolbar_3_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-buttons", 22)(7, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, HomePage_ion_toolbar_3_ion_label_9_Template, 3, 1, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.duration);
  }
}
function HomePage_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_item_4_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.destinationAddress);
  }
}
function HomePage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 29)(1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-menu-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_fab_6_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.GotoSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_fab_7_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-fab-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-label", 30)(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_item_8_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-label")(7, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Driver Arrives In ", ctx_r6.duration, "");
  }
}
function HomePage_ion_fab_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 39)(1, "ion-fab-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_fab_12_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.resetLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_fab_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 42)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function HomePage_ion_list_18_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_18_ion_item_6_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33);
      const place_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.RequestRide(place_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-label")(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const place_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](place_r31.place.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](place_r31.place.city);
  }
}
function HomePage_ion_list_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 44)(1, "ion-item-group", 15)(2, "ion-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_18_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r34.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HomePage_ion_list_18_ion_item_6_Template, 7, 2, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r11.locationAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r11.locationAddress ? "Where To?" : "Waiting for address...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r11.places);
  }
}
function HomePage_ion_list_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 50)(1, "ion-list-header")(2, "ion-item", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-item-group", 15)(5, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_25_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.ReturnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " No Drivers Here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function HomePage_ion_list_26_ion_list_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list-header", 64)(1, "ion-item", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_26_ion_list_header_1_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r44.ShowDriverInfoPop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-label")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "ion-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-item", 70)(14, "ion-label")(15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "p")(18, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r38.carname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r38.D_duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r38.driver_number_of_seats, " seats");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r38.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r38.price * 2, "");
  }
}
function HomePage_ion_list_26_ion_list_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list-header", 64)(1, "ion-item", 70)(2, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-skeleton-text", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-label")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-skeleton-text", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "ion-skeleton-text", 72)(9, "ion-skeleton-text", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-item", 70)(11, "ion-label")(12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "ion-skeleton-text", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "p")(15, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "ion-skeleton-text", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
  }
}
function HomePage_ion_list_26_ion_select_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-select-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", card_r46.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Card ", card_r46.last4, " ");
  }
}
function HomePage_ion_list_26_ion_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-icon", 61);
  }
}
function HomePage_ion_list_26_ion_progress_bar_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-progress-bar", 76);
  }
}
function HomePage_ion_list_26_ion_label_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Book Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function HomePage_ion_list_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, HomePage_ion_list_26_ion_list_header_1_Template, 20, 5, "ion-list-header", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, HomePage_ion_list_26_ion_list_header_2_Template, 17, 6, "ion-list-header", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 56)(4, "ion-item")(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Change Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function HomePage_ion_list_26_Template_ion_select_ionChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r47.chooseCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-select-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HomePage_ion_list_26_ion_select_option_10_Template, 2, 2, "ion-select-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_26_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r49.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Change Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-item-group", 15)(16, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_26_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r50.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, HomePage_ion_list_26_ion_icon_17_Template, 1, 0, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, HomePage_ion_list_26_ion_progress_bar_18_Template, 1, 0, "ion-progress-bar", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, HomePage_ion_list_26_ion_label_19_Template, 2, 0, "ion-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r13.selectedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r13.savedPaymentMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r13.price);
  }
}
function HomePage_ion_list_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 50)(1, "ion-list-header")(2, "ion-item")(3, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-label")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-item-group", 15)(11, "ion-button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "ion-progress-bar", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r14.currentDriver.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r14.currentDriver.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Arrives In ", ctx_r14.duration, "");
  }
}
function HomePage_ion_list_28_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_28_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 50)(1, "ion-list-header", 80)(2, "ion-label")(3, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 56)(6, "ion-item")(7, "ion-item")(8, "ion-label")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-item", 70)(14, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "ion-img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-label")(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "ion-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-item")(21, "ion-item")(22, "ion-label")(23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, HomePage_ion_list_28_ion_item_28_Template, 5, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, HomePage_ion_list_28_ion_item_29_Template, 5, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-item", 70)(31, "ion-label")(32, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "ion-accordion-group")(35, "ion-accordion", 83)(36, "ion-item", 84)(37, "ion-label")(38, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 85)(41, "ion-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r53.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "ion-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r55.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "ion-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "ion-button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Cancel ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Driver Arrives in ", ctx_r15.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r15.driverInfo.Driver_car, ".", ctx_r15.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r15.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r15.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r15.driverInfo.Driver_rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Your Driver is ", ctx_r15.driverInfo.Driver_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r15.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r15.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r15.price, "");
  }
}
function HomePage_ion_list_29_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_29_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function HomePage_ion_list_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 50)(1, "ion-list-header", 80)(2, "ion-label")(3, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 56)(6, "ion-item")(7, "ion-item")(8, "ion-label")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-item", 70)(14, "ion-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "ion-img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-label")(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-item")(21, "ion-item")(22, "ion-label")(23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, HomePage_ion_list_29_ion_item_28_Template, 5, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, HomePage_ion_list_29_ion_item_29_Template, 5, 0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-item", 70)(31, "ion-label")(32, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Arrival in ", ctx_r16.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r16.driverInfo.Driver_car, ".", ctx_r16.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r16.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r16.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Your Driver is ", ctx_r16.driverInfo.Driver_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r16.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r16.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r16.price, "");
  }
}
class HomePage {
  constructor(authService, router, networkService, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl, alert, payME, toastController, actionSheetController) {
    this.authService = authService;
    this.router = router;
    this.networkService = networkService;
    this.map = map;
    this.nav = nav;
    this.platform = platform;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.modalCtrl = modalCtrl;
    this.alert = alert;
    this.payME = payME;
    this.toastController = toastController;
    this.actionSheetController = actionSheetController;
    this.profile = null;
    this.address = 'Unknown';
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = null;
    this.price = 0;
    this.current_Request_Number = -1;
    this.countdownActive = false;
    this.RIDE_KEY = 'currentRide';
    this.duration = null;
    this._carmarkers = [];
    this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject(true);
    this.driverLocation = null;
    this.stopPolling = false;
    // Interval in milliseconds for updating the route
    this.UPDATE_INTERVAL = 10000; // Update every 10 seconds
    this.initializeApp();
  }
  ngOnDestroy() {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      window.removeEventListener('resize', _this.setMapHeight.bind(_this));
      _this.clearSubscriptions();
      _this.unsubscribe();
      yield _this.clearPrevMarkers();
      yield _this.clearPolyline(_this.newPoly);
    })();
  }
  ngAfterViewInit() {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Map container height:', _this2.mapRef.nativeElement.offsetHeight);
        _this2.initializeBackButtonCustomHandler();
        // this.setMapHeight();
        // window.addEventListener('resize', this.setMapHeight.bind(this));
        yield _this2.initializeNetworkMonitoring();
        yield _this2.fetchSavedPaymentMethods();
        _this2.EnterBookingStage();
        yield _this2.initializeGeolocation();
        yield _this2.initializeMap();
        _this2.initializeDatabaseSubscriptions();
        _this2.setupMapListeners();
        yield _this2.map.newMap.enableCurrentLocation(true);
        _this2.price = null;
        if (_this2.LatLng && _this2.LatLng.lat && _this2.LatLng.lng) {
          const center = [_this2.LatLng.lat, _this2.LatLng.lng];
          const radiusInM = 5000; // Example radius in meters
          yield _this2.fetchAndDisplayDrivers(center, radiusInM);
        }
      } catch (e) {
        console.error('Error in ngAfterViewInit:', e);
        _this2.overlay.showAlert('Error in ngAfterViewInit:', 'An error occurred during initialization. Please try again.');
      }
    })();
  }
  fetchSavedPaymentMethods() {
    var _this3 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.savedPaymentMethods = yield _this3.database.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this3.savedPaymentMethods);
        // Set default payment method to cash if no cards are saved
        if (_this3.savedPaymentMethods.length === 0) {
          _this3.selectedCard = 'cash';
          _this3.cash = true;
        } else {
          _this3.selectedCard = _this3.savedPaymentMethods[0].cardId;
          _this3.cash = false;
        }
      } catch (error) {
        console.error('Error fetching saved payment methods:', error);
      }
    })();
  }
  chooseCard(event) {
    this.selectedCard = event.detail.value;
    this.cash = this.selectedCard === 'cash';
    if (!this.cash) {
      // this.processPayment(this.authService.user.email, this.defaultAmount, this.selectedCard);
    }
  }
  processPayment(email, amount, cardId) {
    var _this4 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.overlay.showLoader('');
      try {
        const paymentResult = yield _this4.payME.processPaymentWithCardId(email, amount, cardId).toPromise();
        console.log('Payment successful:', paymentResult);
        yield _this4.overlay.showAlert('Success', 'Payment successful!');
      } catch (error) {
        console.error('Error during payment:', error);
        const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
        yield _this4.showPaymentErrorModal(errorMessage);
      } finally {
        _this4.overlay.hideLoader();
      }
    })();
  }
  showPaymentErrorModal(errorMessage) {
    var _this5 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alert.create({
        header: 'Payment Error',
        message: errorMessage,
        buttons: [{
          text: 'Add New Card',
          handler: function () {
            var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const modal = yield _this5.modalCtrl.create({
                component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_7__.AddCardComponent // Create this component to handle adding a new card
              });
              yield modal.present();
              const {
                data
              } = yield modal.onWillDismiss();
              if (data && data.newCardId) {
                _this5.selectedCard = data.newCardId;
                _this5.cash = false;
              }
            });
            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield alert.present();
    })();
  }
  setMapHeight() {
    if (this.topBar && this.bottomBar) {
      const topBarHeight = this.topBar.nativeElement.offsetHeight;
      const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
      const availableHeight = window.innerHeight - topBarHeight - bottomBarHeight;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    }
  }
  setMapHeightCreateAndAddMarkers() {
    if (this.topBar && this.bottomBar) {
      const topBarHeight = this.topBar.nativeElement.offsetHeight;
      const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
      const availableHeight = window.innerHeight - topBarHeight - bottomBarHeight + 200;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    }
  }
  setMapHeightHandleDrivertoRider() {
    if (this.bottomBar) {
      const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
      const availableHeight = window.innerHeight - bottomBarHeight - 14;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    }
  }
  setMapHeightHandleDrivertoDestination() {
    if (this.bottomBar) {
      const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
      const availableHeight = window.innerHeight - bottomBarHeight + 90;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    }
  }
  initializeNetworkMonitoring() {
    var _this6 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();
      _this6.isConnected = status.connected;
      _this6.networkStatus$.next(_this6.isConnected);
      console.log('Network monitoring initialized. Initial status:', _this6.isConnected);
      _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed:', status);
        _this6.isConnected = status.connected;
        _this6.networkStatus$.next(_this6.isConnected);
      });
      _this6.networkStatus$.subscribe(isConnected => {
        if (isConnected) {
          _this6.router.navigate(['home']);
        } else {
          _this6.router.navigate(['network']);
        }
      });
    })();
  }
  initializeApp() {
    var _this7 = this;
    this.platform.ready().then( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rideData = yield _this7.getRideState();
      if (rideData) {
        console.log("There is some ridedata in here....");
        // this.restoreRideState(rideData);
      }
    }));
  }
  saveRideState(rideData) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const RIDE_KEY = 'rideState';
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.set({
        key: RIDE_KEY,
        value: JSON.stringify(rideData)
      });
    })();
  }
  getRideState() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const RIDE_KEY = 'rideState';
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
        key: RIDE_KEY
      });
      return value ? JSON.parse(value) : null;
    })();
  }
  clearRideState() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const RIDE_KEY = 'rideState';
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.remove({
        key: RIDE_KEY
      });
    })();
  }
  // Method to restore the ride state
  restoreRideState(rideData) {
    // Set necessary variables to restore the ride state
    this.current_Request_Number = rideData.current_Request_Number;
    this.price = rideData.price;
    this.actualDestination = rideData.actualDestination;
    this.D_LatLng = rideData.D_LatLng;
    this.destinationAddress = rideData.destinationAddress;
    this.LatLng = rideData.LatLng;
    // Restore map state and markers
    this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });
    this.createAndAddMarkers(this.LatLng, this.D_LatLng);
    // Navigate to the appropriate stage
    if (rideData.stage) {
      this.setStage(rideData.stage);
    }
  }
  initializeGeolocation() {
    var _this8 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check existing permissions
        let permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();
        if (permissionStatus.location !== 'granted') {
          // Request permissions
          const permissionRequest = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();
          permissionStatus = permissionRequest;
          if (permissionRequest.location !== 'granted') {
            // If the user still hasn't granted permission, prompt them to enable location services
            yield _this8.overlay.showLoader('Enable Device Location...');
            _this8.startPermissionPolling();
            return;
          }
        }
        // If permission is granted, dismiss any alert if shown
        _this8.overlay.hideLoader();
        // Try to get the current position
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this8.coordinates = coordinates;
        _this8.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        _this8.database.updateLocation(_this8.LatLng);
        console.log('Geolocation initialized:', _this8.LatLng);
        // Start polling the user's position
        _this8.startPollingPosition();
      } catch (error) {
        console.error('Error initializing geolocation:', error);
        // If any error occurs, prompt the user to enable location services
        yield _this8.overlay.showLoader('Enable Device Location...');
        _this8.startPermissionPolling();
      }
    })();
  }
  startPermissionPolling() {
    var _this9 = this;
    this.permissionCheckInterval = setInterval( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();
      if (permissionStatus.location === 'granted') {
        _this9.overlay.hideLoader();
        clearInterval(_this9.permissionCheckInterval);
        // Try to get the current position again if permissions are granted
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this9.coordinates = coordinates;
        _this9.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        console.log('Geolocation initialized:', _this9.LatLng);
        // Start polling the user's position
        _this9.startPollingPosition();
      }
    }), 1000); // Check every second
  }
  startPollingPosition() {
    var _this10 = this;
    let lastLatLng = {
      lat: null,
      lng: null
    };
    let lastAddress = null;
    this.pollingInterval = setInterval( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        const newLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        _this10.database.updateLocation(newLatLng);
        if (_this10.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) {
          // Check if moved at least 50 meters
          lastLatLng = newLatLng;
          const address = yield _this10.map.getAddress(newLatLng.lat, newLatLng.lng);
          if (address && address.results && address.results.length > 1) {
            const components = address.results[1].address_components;
            if (components.length >= 2) {
              _this10.locationAddress = components[0].long_name + ' ' + components[1].long_name;
              _this10.actualLocation = address.results[0].formatted_address;
              if (_this10.locationAddress !== lastAddress) {
                console.log('Updated Location Address:', _this10.locationAddress);
                lastAddress = _this10.locationAddress;
              }
            }
          } else {
            console.log('Unable to update location address');
          }
        }
        if (_this10.networkService.isConnected() && !_this10.stopPolling) {
          const center = [newLatLng.lat, newLatLng.lng];
          const radiusInM = 5000; // Example radius in meters
          yield _this10.fetchAndDisplayDrivers(center, radiusInM);
        } else {
          console.log('No network connection.', _this10.stopPolling);
        }
      } catch (err) {
        console.error('Error getting position:', err);
        // Reduce error alerts by not showing specific errors repeatedly
      }
    }), 5000); // Poll every 10 seconds
  }
  hasSignificantLocationChange(oldLatLng, newLatLng, minDistance) {
    if (!oldLatLng.lat || !oldLatLng.lng) return true;
    const R = 6371e3; // Earth radius in meters
    const φ1 = oldLatLng.lat * Math.PI / 180;
    const φ2 = newLatLng.lat * Math.PI / 180;
    const Δφ = (newLatLng.lat - oldLatLng.lat) * Math.PI / 180;
    const Δλ = (newLatLng.lng - oldLatLng.lng) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters
    return distance >= minDistance;
  }
  stopPollingPosition() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      console.log('Stopped polling position.');
    } else {
      console.log('No polling to stop.');
    }
  }
  initializeMap() {
    var _this11 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this11.map.createMap(_this11.mapRef.nativeElement, _this11.coordinates);
        _this11.mapy = true;
        _this11.actualLocation = _this11.map.actualLocation;
        // console.log('Map initialized:', this.actualLocation, this.locationAddress);
      } catch (error) {
        //console.error('Error initializing map:', error);
        throw new Error('Map initialization failed');
      }
    })();
  }
  initializeDatabaseSubscriptions() {
    this.database.getKnownPlaces().subscribe(d => {
      console.log('Received data:', d);
      this.places = d.slice(0, 3);
    });
  }
  initializeBackButtonCustomHandler() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back button pressed');
    });
    _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.addListener('backButton', ({
      canGoBack
    }) => {
      if (!canGoBack) {
        // Show a confirmation dialog before exiting the app
        if (confirm('Are you sure you want to exit the app?')) {
          _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.exitApp();
        }
      } else {
        console.log("back clicked");
        // Use Ionic's NavController to navigate back
        // Replace 'NavController' with your specific navigation method
        // this.navCtrl.pop();
        window.history.back();
      }
    });
    // App.addListener('appStateChange', (state) => {
    //   if (!state.isActive) {
    //     this.stopPollingPosition();
    //   } else {
    //     this.startPollingPosition();
    //   }
    // });
  }
  setupMapListeners() {
    var _this12 = this;
    this.map.newMap.setOnCameraIdleListener( /*#__PURE__*/function () {
      var _ref5 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (g) {
        _this12.ngZone.run( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this12.showResetLocationButton = true;
          if (_this12.mapPinStage) {
            const addressResponse = yield _this12.geocode.getAddress(g.latitude, g.longitude).toPromise();
            _this12.processAddressResponse(addressResponse);
          }
        }));
      });
      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  logout() {
    var _this13 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.authService.logout();
    })();
  }
  fetchAndDisplayDrivers(center, radiusInM) {
    var _this14 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const drivers = yield _this14.database.checkDriversWithin(center, radiusInM);
        console.log('Fetched drivers:', drivers);
        yield _this14.handleDrivers(drivers);
        if (_this14.drivers_Requested.length > 0) {
          _this14.current_Request_Number = 0; // Set to the first available driver
          yield _this14.UpdateCarMarker(_this14.drivers_Requested);
          _this14.NoDrivers = false;
        } else {
          _this14.current_Request_Number = -1; // No valid driver
          yield _this14.UpdateCarMarker([]); // Clear all markers if no drivers are requested
          _this14.NoDrivers = true;
        }
      } catch (error) {
        console.error('Error fetching drivers:', error);
        _this14.current_Request_Number = -1; // Reset the request number
        yield _this14.UpdateCarMarker([]); // Clear all markers if there's an error
        _this14.NoDrivers = true;
      }
    })();
  }
  handleDrivers(drivers) {
    var _this15 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.drivers_Requested = [];
      _this15.closeDrivers = null;
      console.log('Handling drivers:', drivers);
      if (drivers.length === 0) {
        _this15.NoDrivers = true;
        console.log('No drivers found.');
        return;
      }
      drivers.forEach(driver => {
        if (driver) {
          console.log('Processing driver:', driver);
          if (driver.duration <= 1000 && driver.onlineState) {
            _this15.drivers_Requested.push(driver);
            _this15.updateDriverInfo(driver);
          }
          if (!_this15.closeDrivers || driver.duration < _this15.closeDrivers.duration) {
            _this15.closeDrivers = driver;
          }
        } else {
          console.error('Driver is null or undefined:', driver);
        }
      });
      if (_this15.drivers_Requested.length === 0) {
        _this15.NoDrivers = true;
      } else {
        // Ensuring current_Request_Number is within the bounds
        _this15.current_Request_Number = Math.min(_this15.current_Request_Number, _this15.drivers_Requested.length - 1);
      }
      console.log('Final requested drivers list:', _this15.drivers_Requested);
    })();
  }
  // Unsubscribe from all active listeners (for cleanup)
  cleanupListeners() {
    Object.values(this.database.activeListeners).forEach(unsubscribe => unsubscribe());
    this.database.activeListeners = {};
  }
  updateDriverInfo(driver) {
    console.log(this.drivers_Requested);
    this.carname = driver.Driver_car;
    this.driverImage = driver.Driver_imgUrl, this.driver_duration_apart = Math.ceil(driver.duration / 60000);
    this.driver_ID = driver.Driver_id;
    this.driver_number_of_seats = driver.seats;
    this.DriverLatLng = {
      lat: driver.Driver_lat,
      lng: driver.Driver_lng
    };
  }
  StartRide() {
    var _this16 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this16.overlay.showLoader('');
        yield _this16.clearPrevMarkers();
        // Clear any existing polylines
        yield _this16.clearPolyline(_this16.newPoly);
        const availableHeight = 1000;
        _this16.map.newMap.enableTouch();
        // Ensure the map respects the boundaries of the top and bottom bars
        _this16.mapRef.nativeElement.style.height = `${availableHeight}px`;
        _this16.map.newMap.enableCurrentLocation(false);
        yield _this16.BookRide();
      } catch (e) {
        _this16.overlay.showAlert('Starting Ride Error', e);
      }
    })();
  }
  clearMarkers() {
    var _this17 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this17.marker1) {
        yield _this17.map.newMap.removeMarker(_this17.marker1);
        _this17.marker1 = null;
      }
      if (_this17.marker2) {
        yield _this17.map.newMap.removeMarker(_this17.marker2.toString());
        _this17.marker2 = null;
      }
      if (_this17._carmarkers) {
        for (const {
          marker
        } of _this17._carmarkers) {
          yield _this17.map.newMap.removeMarker(marker); // Assuming marker is the instance
        }
        _this17._carmarkers = []; // Clear the array after removing markers
      }
    })();
  }
  BookRide() {
    var _this18 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this18.hasValidDriver()) {
          const driver = _this18.drivers_Requested[_this18.current_Request_Number];
          const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)(_this18.firestore, `Drivers`, driver.Driver_id);
          // Fetch driver details once
          const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDoc)(userDocRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            console.log('Driver is offline', driver);
            if (data && data.onlineState) {
              _this18.driverInfo = data;
              // Call requestRideWithDriverDetails to generate requestID and handle ride request
              yield _this18.requestRideWithDriverDetails(driver, userDocRef);
              _this18.overlay.hideLoader();
              _this18.updateDriverInfo(driver);
            } else {
              console.log('Driver is offline');
              yield _this18.handleNoAvailableDriver();
            }
          } else {
            console.error('Document does not exist.');
            yield _this18.handleNoAvailableDriver();
          }
        } else {
          _this18.showNoDriversAlert();
        }
      } catch (error) {
        console.error('Error in BookRide:', error);
        _this18.overlay.showAlert('Error in BookRide:', 'An error occurred while booking the ride.');
      }
    })();
  }
  hasValidDriver() {
    return this.drivers_Requested?.[this.current_Request_Number]?.Driver_id != null;
  }
  requestRideWithDriverDetails(driver, userDocRef) {
    var _this19 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Assume that this.database.RequestRideWithRiderDetails returns a Promise that resolves with the requestID
        const requestDetails = {
          latLng: _this19.LatLng,
          destinationAddress: _this19.destinationAddress,
          locationAddress: _this19.locationAddress,
          dLatLng: _this19.D_LatLng,
          driverId: driver.Driver_id,
          price: _this19.price,
          cash: _this19.cash
        };
        _this19.requestID = yield _this19.database.RequestRideWithRiderDetails(requestDetails);
        // Assuming the request was successful and the requestID was generated
        if (_this19.requestID) {
          _this19.currentDriver = driver;
          _this19.handlePendingState();
          // Optionally listen for updates on the specific ride request document
          const rideRequestDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)(_this19.firestore, `Request`, _this19.requestID);
          const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.onSnapshot)(rideRequestDocRef, /*#__PURE__*/function () {
            var _ref7 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
              if (doc.exists()) {
                yield _this19.handleRideUpdates(doc);
              } else {
                console.error('Ride request document does not exist.');
              }
            });
            return function (_x2) {
              return _ref7.apply(this, arguments);
            };
          }());
          // Store the unsubscribe function if you need to clear it later
          _this19.unsubscribe = unsub;
        } else {
          throw new Error('Failed to generate requestID');
        }
      } catch (error) {
        console.error('Error in requestRideWithDriverDetails:', error);
        _this19.overlay.showAlert('Error in requestRideWithDriverDetails', 'An error occurred while requesting the ride.');
      }
    })();
  }
  showNoDriversAlert() {
    console.error('No valid driver available to book a ride.');
    this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
  }
  handleNoAvailableDriver() {
    var _this20 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Driver is not available, moving to next.');
      _this20.current_Request_Number++;
      if (_this20.hasValidDriver()) {
        yield _this20.BookRide();
      } else {
        _this20.showNoDriversAlert();
      }
    })();
  }
  requestNextDriver() {
    var _this21 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Requested Next Driver");
      _this21.current_Request_Number++;
      if (_this21.hasValidDriver()) {
        console.log("Continua");
        yield _this21.BookRide();
      } else {
        yield _this21.ReturnHome();
        _this21.showNoDriversAlert();
      }
    })();
  }
  // Make sure to clear the subscription when it's no longer needed
  clearSubscriptions() {
    if (this.numCalls) {
      this.numCalls.unsubscribe();
    }
    if (this.countDown) {
      this.countDown.unsubscribe();
    }
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
    }
  }
  handleRideUpdates(doc) {
    var _this22 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = doc.data();
      if (!data) {
        console.error('No data found in the document.');
        return;
      }
      switch (data.status) {
        case 'cancelled':
          yield _this22.handleRideCancellation(data);
          break;
        case 'confirmed':
          yield _this22.handleRideConfirmation(doc);
          break;
        case 'started':
          yield _this22.handleRideStart(doc);
          break;
        case 'stopped':
          yield _this22.handleRideStop(doc);
          break;
        default:
          console.error('Unknown ride status:', data.status);
          break;
      }
    })();
  }
  handlePendingState() {
    var _this23 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("now pending");
      yield _this23.getDriverLocation(_this23.currentDriver.Driver_id); // Fetch the latest driver location
      console.log("This is the driver location: " + _this23.DriverLatLng);
      yield _this23.clearPrevMarkers();
      yield _this23.clearPolyline(_this23.newPoly);
      _this23.setMapHeightCreateAndAddMarkers();
      window.addEventListener('resize', _this23.setMapHeightCreateAndAddMarkers.bind(_this23));
      // Driver coming to the rider
      yield _this23.handleDriverToRider(_this23.DriverLatLng, _this23.LatLng);
      _this23.overlay.hideLoader();
      _this23.EnterSearchingStage();
      yield _this23.startCountdown(20, _this23.requestID);
    })();
  }
  presentCancelRideActionSheet() {
    var _this24 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this24.actionSheetController.create({
        header: 'Cancel Ride',
        buttons: [{
          text: 'Changed my mind',
          handler: () => {
            _this24.cancelRide('Changed my mind');
          }
        }, {
          text: 'Driver took too long',
          handler: () => {
            _this24.cancelRide('Driver took too long');
          }
        }, {
          text: 'Found another ride',
          handler: () => {
            _this24.cancelRide('Found another ride');
          }
        }, {
          text: 'Other',
          handler: () => {
            _this24.cancelRide('Other');
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }
  cancelRide(reason) {
    var _this25 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)(_this25.firestore, 'Request', _this25.requestID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(rideRef, {
        status: 'cancelled',
        cancellationReason: reason,
        canceledBy: 'rider'
      });
      const toast = yield _this25.toastController.create({
        message: 'Ride has been cancelled.',
        duration: 2000
      });
      yield toast.present();
    })();
  }
  handleRideCancellation(data) {
    var _this26 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this26.stopCountdown();
      yield _this26.clearPrevMarkers();
      _this26.unsubscribe();
      _this26.clearSubscriptions();
      if (_this26.drivers_Requested[_this26.current_Request_Number + 1] && !_this26.rideHasStarted) {
        _this26.current_Request_Number++;
        yield _this26.BookRide();
      } else {
        if (data.canceledBy == 'driver') {
          _this26.overlay.showAlert('Cancelled', 'Driver cancelled');
        }
        _this26.ClearRide();
        _this26.ReturnHome();
      }
    })();
  }
  handleRideStart(doc) {
    var _this27 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this27.clearPrevMarkers();
      yield _this27.clearPolyline(_this27.newPoly);
      _this27.currentDriver = doc.data();
      _this27.rideHasStarted = true;
      _this27.setMapHeightHandleDrivertoDestination();
      window.addEventListener('resize', _this27.setMapHeightHandleDrivertoDestination.bind(_this27));
      yield _this27.handleRiderToDestination(_this27.DriverLatLng, _this27.D_LatLng);
      _this27.canCheck = true;
      yield _this27.saveRideState(_this27.currentDriver);
      _this27.EnterDrivingToDestinationStage();
    })();
  }
  handleRideStop(doc) {
    var _this28 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this28.clearSubscriptions();
      _this28.unsubscribe();
      yield _this28.clearPrevMarkers();
      yield _this28.clearPolyline(_this28.newPoly);
      yield _this28.ReturnHome();
      yield _this28.database.createHistory(_this28.driverInfo);
    })();
  }
  handleRideConfirmation(doc) {
    var _this29 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this29.stopCountdown();
      console.log("trtryyrry rettete");
      yield _this29.clearPrevMarkers();
      yield _this29.clearPolyline(_this29.newPoly);
      _this29.DriverLatLng = {
        lat: _this29.driverLocation.lat,
        lng: _this29.driverLocation.lng
      };
      console.log(_this29.DriverLatLng);
      // Set map height before calculating zoom level
      _this29.setMapHeightHandleDrivertoRider();
      window.addEventListener('resize', _this29.setMapHeightHandleDrivertoRider.bind(_this29));
      yield _this29.handleDriverToRider(_this29.DriverLatLng, _this29.LatLng);
      _this29.EnterTrackingStage();
    })();
  }
  getDriverLocation(driverId) {
    this.database.getDriverLocation(driverId).then(location => {
      this.driverLocation = location;
      console.log(this.driverLocation); // For testing purposes
    }).catch(error => {
      console.error('Error fetching driver location:', error);
    });
  }
  EnterChat() {
    var _this30 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__.EnrouteChatComponent,
        componentProps: {
          userId: _this30.requestID,
          message: ""
        },
        swipeToClose: true
      };
      const modal = yield _this30.modalCtrl.create(options);
      return yield modal.present();
    })();
  }
  startCountdown(initialTime, requestId) {
    var _this31 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this31.countdownActive = true;
      let timeRemaining = initialTime;
      const updateCountdown = /*#__PURE__*/function () {
        var _ref8 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!_this31.countdownActive) {
            console.log('Countdown stopped');
            return;
          }
          if (timeRemaining > 0) {
            try {
              yield _this31.database.UpdateCountDown(timeRemaining, requestId);
              timeRemaining--;
              setTimeout(updateCountdown, 1000);
            } catch (error) {
              console.error('Error updating countdown:', error);
              // Retry after a short delay
              setTimeout(updateCountdown, 2000);
            }
          } else {
            yield _this31.handleCountdownEnd(requestId);
            console.log('Countdown ended');
          }
        });
        return function updateCountdown() {
          return _ref8.apply(this, arguments);
        };
      }();
      updateCountdown();
    })();
  }
  handleCountdownEnd(requestId) {
    var _this32 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Implement a grace period to account for any delays
        setTimeout( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this32.clearPrevMarkers();
          yield _this32.requestNextDriver();
        }), 5000); // 5-second grace period
      } catch (error) {
        console.error('Error handling countdown end:', error);
        // Optionally, retry the operation or notify the user
      }
    })();
  }
  stopCountdown() {
    this.countdownActive = false;
  }
  goBackToAutoComplete() {
    var _this33 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this33.stopPolling = false;
        // Enable current location and set the camera to the initial position
        yield _this33.map.newMap.enableCurrentLocation(true);
        yield _this33.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this33.LatLng
        });
        yield _this33.ResetState();
        yield _this33.showAutocompleteModal();
        console.log('Game state reset successfully');
      } catch (error) {
        console.error('Error resetting game state:', error);
      }
    })();
  }
  clearPrevMarkers() {
    var _this34 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear other markers
        if (_this34.rider_marker) {
          yield _this34.clearMarker(_this34.rider_marker);
          _this34.rider_marker = null;
        }
        // Clear other markers
        if (_this34.driver_marker) {
          yield _this34.clearMarker(_this34.driver_marker);
          _this34.driver_marker = null;
        }
        // Clear other markers
        if (_this34.destinationMarker) {
          yield _this34.clearMarker(_this34.destinationMarker);
          _this34.destinationMarker = null;
        }
        // Clear other markers
        if (_this34.marker1) {
          yield _this34.clearMarker(_this34.marker1);
          _this34.marker1 = null;
        }
        if (_this34.marker2) {
          yield _this34.clearMarker(_this34.marker2);
          _this34.marker2 = null;
        }
        // Clear animated marker
        if (_this34.animatedMarker) {
          yield _this34.clearMarker(_this34.animatedMarker);
          _this34.animatedMarker = null;
        }
        if (_this34.routeUpdateSubscription) {
          _this34.routeUpdateSubscription.unsubscribe();
        }
      } catch (e) {
        console.error('Error clearing markers:', e);
      }
    })();
  }
  clearMarker(marker) {
    var _this35 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (marker) {
        try {
          yield _this35.map.newMap.removeMarker(marker);
          console.log("Marker was cleared!");
        } catch (error) {
          console.error('Error clearing marker:', error);
        }
      }
    })();
  }
  clearPolyline(polyline) {
    var _this36 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (polyline) {
        try {
          yield _this36.map.newMap.removePolylines([polyline]);
          console.log('Polyline cleared:', polyline);
          _this36.newPoly = null;
        } catch (error) {
          console.error('Error clearing polyline:', error);
        }
      } else {
        console.warn('No polyline to clear');
      }
    })();
  }
  ResetState() {
    var _this37 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear previous markers
        yield _this37.clearPrevMarkers();
        // Clear any existing polylines
        yield _this37.clearPolyline(_this37.newPoly);
        const availableHeight = 1024;
        _this37.map.newMap.enableTouch();
        // this.setMapHeight();
        window.addEventListener('resize', _this37.setMapHeight.bind(_this37));
        // Ensure the map respects the boundaries of the top and bottom bars
        _this37.mapRef.nativeElement.style.height = `${availableHeight}px`;
        // Reset important variables
        _this37.current_Request_Number = 0;
        _this37.price = null;
        _this37.actualDestination = null;
        _this37.D_LatLng = {
          lat: null,
          lng: null
        };
        _this37.destinationAddress = 'Unknown location';
      } catch (e) {
        throw new Error(e);
      }
    })();
  }
  showAutocompleteModal() {
    var _this38 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent,
        componentProps: {
          LatLng: _this38.LatLng,
          locationAddress: _this38.locationAddress
        },
        swipeToClose: true
      };
      const modal = yield _this38.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log('Modal dismissed with data:', data);
      _this38.data = data;
      if (data.pinOnMap) {
        _this38.EnterMapPinStage();
        _this38.mapPinDrag = true;
        _this38.stopPolling = true;
      }
      if (data.home) {
        console.log("Entering Booking Stage...");
        _this38.EnterBookingStage();
        _this38.stopPolling = false;
      }
      if (data.searching) {
        _this38.database.AddKnownPlace(data);
        _this38.destinationAddress = data.full;
        _this38.actualDestination = data.whole.full;
        try {
          const latLng = yield _this38.geocode.getLatLng(data.whole.description).toPromise();
          _this38.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          console.log("Destination LatLng:", _this38.D_LatLng);
          yield _this38.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);
          _this38.overlay.showAlert('Error in geocoding:', error.message);
        }
      }
    })();
  }
  RequestRide(dat) {
    var _this39 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this39.NoDrivers) {
        _this39.destinationAddress = dat.place.full;
        _this39.actualDestination = dat.place.whole.full;
        try {
          const latLng = yield _this39.geocode.getLatLng(dat.place.whole.description).toPromise();
          _this39.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          yield _this39.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);
          _this39.overlay.showAlert('Check Your Network', error.message);
        }
      } else {
        _this39.EnterNoDriverStage();
        console.log("No drivers available");
      }
    })();
  }
  getDistanceAndDirections() {
    var _this40 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirections called");
      _this40.duration = null;
      yield _this40.clearMarkers();
      _this40.cleanupListeners();
      _this40.stopPolling = true;
      if (_this40.D_LatLng && _this40.D_LatLng.lat) {
        console.log("D_LatLng is set:", _this40.D_LatLng);
        if (!_this40.NoDrivers) {
          _this40.EnterConfirmStage();
        } else {
          _this40.EnterNoDriverStage();
          console.log("No drivers available");
          return;
        }
        const origin1 = new google.maps.LatLng(_this40.LatLng.lat, _this40.LatLng.lng);
        const origin2 = new google.maps.LatLng(_this40.D_LatLng.lat, _this40.D_LatLng.lng);
        const request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };
        _this40.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref10 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            if (status === 'OK') {
              _this40.direction = response;
              _this40.distance = response.routes[0].legs[0].distance.value;
              _this40.bounds = response.routes[0].bounds;
              _this40.price = yield _this40.database.getPriceEstimate(_this40.distance);
              _this40.duration = response.routes[0].legs[0].duration.text;
              yield _this40.createAndAddMarkers(_this40.LatLng, _this40.D_LatLng);
              // Call getDistanceAndDirectionsDriver after this part is successful
              yield _this40.getDistanceAndDirectionsDriver();
            } else {
              console.error('Direction ERROR:', response);
              _this40.overlay.showAlert('Check Your Network', JSON.stringify(response));
            }
          });
          return function (_x3, _x4) {
            return _ref10.apply(this, arguments);
          };
        }());
      } else {
        _this40.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');
        console.error('D_LatLng or D_LatLng.lat is undefined');
      }
    })();
  }
  getDistanceAndDirectionsDriver() {
    var _this41 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirectionsDriver called");
      if (!_this41.NoDrivers) {
        console.log("Driver LatLng:", _this41.DriverLatLng);
        if (_this41.DriverLatLng) {
          const origin1 = new google.maps.LatLng(_this41.LatLng.lat, _this41.LatLng.lng);
          const origin2 = new google.maps.LatLng(_this41.DriverLatLng.lat, _this41.DriverLatLng.lng);
          const request = {
            origin: origin1,
            destination: origin2,
            travelMode: google.maps.TravelMode.DRIVING
          };
          _this41.geocode.directions.route(request, (response, status) => {
            if (status === 'OK') {
              _this41.D_duration = response.routes[0].legs[0].duration.text;
              console.log("Driver duration:", _this41.D_duration);
            } else {
              console.error('Direction ERROR:', response);
              _this41.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
            }
          });
        } else {
          console.log("DriverLatLng is undefined");
        }
      } else {
        console.log("No drivers available");
      }
    })();
  }
  resetLocation() {
    var _this42 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this42.LatLng);
      yield _this42.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this42.LatLng
      });
      _this42.showResetLocationButton = false;
    })();
  }
  processAddressResponse(addressResponse) {
    console.log("processAddressResponse : " + addressResponse);
    if (addressResponse) {
      console.log(addressResponse);
      this.actualDestination = this.map.actualLocation;
      const results = addressResponse.results;
      if (results && results.length > 1 && results[1].geometry && results[1].geometry.location) {
        this.D_LatLng = {
          lat: results[1].geometry.location.lat,
          lng: results[1].geometry.location.lng
        };
        const addressComponents = results[1].address_components;
        if (addressComponents && addressComponents.length > 1) {
          this.destinationAddress = `${addressComponents[0].long_name} ${addressComponents[1].long_name}`;
          console.log("this is it " + this.destinationAddress);
        } else {
          console.log('Address components are missing or incomplete.');
          this.destinationAddress = 'Unknown address';
        }
      } else {
        console.log('Results are missing or incomplete.');
        this.D_LatLng = {
          lat: null,
          lng: null
        };
        this.destinationAddress = 'Unknown location';
      }
    } else {
      console.log('Failed to fetch address.');
      this.D_LatLng = {
        lat: null,
        lng: null
      };
      this.destinationAddress = 'Failed to fetch address';
    }
  }
  UpdateCarMarker(elements) {
    var _this43 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Elements to update car markers:', elements);
      const bounds = new google.maps.LatLngBounds();
      // Create a map of driver IDs to driver elements for quick lookup
      const driverMap = new Map(elements.map(element => [element.Driver_id, element]));
      // Track markers to keep and update
      const updatedMarkers = [];
      // Remove markers that are not needed and update positions
      for (const {
        id,
        marker
      } of _this43._carmarkers) {
        const driver = driverMap.get(id);
        if (!driver || !driver.onlineState) {
          console.log(`Removing marker for driver ID: ${id}`);
          yield _this43.map.newMap.removeMarker(marker); // Remove the marker from the map
        } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
          const latlng = {
            lat: driver.Driver_lat,
            lng: driver.Driver_lng
          };
          // Remove old marker and add a new one with updated position
          yield _this43.map.newMap.removeMarker(marker);
          const newMarker = yield _this43.map.newMap.addMarker({
            coordinate: latlng,
            iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
            title: 'Driver',
            iconSize: {
              width: 30,
              height: 30
            }
          });
          updatedMarkers.push({
            id,
            marker: newMarker
          });
          bounds.extend(latlng);
          console.log(`Updated marker for driver ID: ${id}`);
        } else {
          console.error('Invalid driver coordinates:', driver);
        }
      }
      // Add new markers for drivers that are online and not in the existing markers
      for (const element of elements) {
        if (element.onlineState) {
          const existingMarkerIndex = updatedMarkers.findIndex(({
            id
          }) => id === element.Driver_id);
          if (existingMarkerIndex === -1 && element.Driver_lat !== undefined && element.Driver_lng !== undefined) {
            const latlng = {
              lat: element.Driver_lat,
              lng: element.Driver_lng
            };
            console.log(`Adding new marker for driver ID: ${element.Driver_id} at`, latlng);
            try {
              const marker = yield _this43.map.newMap.addMarker({
                coordinate: latlng,
                iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
                title: 'Driver',
                iconSize: {
                  width: 30,
                  height: 30
                }
              });
              if (marker) {
                updatedMarkers.push({
                  id: element.Driver_id,
                  marker
                });
                bounds.extend(latlng);
              }
            } catch (error) {
              console.error('Error adding marker:', error);
            }
          }
        }
      }
      // Update the _carmarkers array with the updated markers
      _this43._carmarkers = updatedMarkers;
      // Center the map around the car markers if there are any markers
      if (updatedMarkers.length > 0) {
        const mapDim = {
          height: _this43.mapRef.nativeElement.offsetHeight,
          width: _this43.mapRef.nativeElement.offsetWidth
        };
        const minZoom = 5; // Define your minimum zoom level
        const maxZoom = 18; // Define your maximum zoom level
        let zoomLevel = yield _this43.map.getBoundsZoomLevel(bounds, mapDim);
        // Constrain the zoom level within the min and max range
        zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
        console.log('Setting camera with zoom level:', zoomLevel);
        yield _this43.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: zoomLevel,
          coordinate: bounds.getCenter()
        });
        _this43.map.newMap.fitBounds(bounds);
      } else {
        console.log('No markers to display on the map.');
      }
    })();
  }
  GoHome() {
    var _this44 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this44.map.newMap.enableCurrentLocation(true);
      _this44.current_Request_Number = 0;
      _this44.stopPolling = false;
      _this44.price = null;
      _this44.EnterBookingStage();
      yield _this44.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this44.LatLng
      });
    })();
  }
  GotoSupport() {
    var _this45 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this45.nav.navigateForward('support');
    })();
  }
  ReturnHome() {
    var _this46 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this46.ResetState();
      _this46.EnterBookingStage();
      _this46.stopPolling = false;
      yield _this46.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this46.LatLng
      });
    })();
  }
  CancelRide() {
    var _this47 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this47.overlay.showLoader('Please Wait..');
      yield _this47.clearPrevMarkers();
      // Clear any existing polylines
      yield _this47.clearPolyline(_this47.newPoly);
      _this47.unsubscribe();
      _this47.numCalls.unsubscribe();
      _this47.riderCleared = true;
      yield _this47.database.cancelRide(_this47.requestID);
      yield _this47.map.newMap.enableCurrentLocation(true);
      _this47.current_Request_Number = 0;
      _this47.price = null;
      _this47.EnterBookingStage();
      _this47.overlay.hideLoader();
      yield _this47.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this47.LatLng
      });
    })();
  }
  ClearRide() {
    var _this48 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this48.EnterBookingStage();
      _this48.clearPrevMarkers();
      // Ensure the polyline is cleared
      console.log("should clear");
      yield _this48.clearPolyline(_this48.newPoly);
      _this48.newPoly = null; // Reset polyline reference
      yield _this48.map.newMap.enableCurrentLocation(true);
      _this48.current_Request_Number = 0;
      _this48.price = null;
      yield _this48.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this48.LatLng,
        bearing: 0
      });
    })();
  }
  CallDriver() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // Implement CallDriver logic
  handleDriverToRider(driverLatLng, riderLatLng) {
    var _this49 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon
      try {
        // Add driver marker at the starting position
        const driverMarker = yield _this49.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 2,
            y: 0
          }
        });
        _this49.driver_marker = driverMarker;
        // Add rider marker at the destination position
        const riderMarker = yield _this49.map.newMap.addMarker({
          coordinate: riderLatLng,
          iconUrl: _this49.database.user.photoURL,
          title: 'Rider',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 2,
            y: 0
          }
        });
        _this49.rider_marker = riderMarker;
        // Function to update route, duration, and distance
        const updateRoute = /*#__PURE__*/function () {
          var _ref11 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: riderLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };
            _this49.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref12 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this49.duration = response.routes[0].legs[0].duration.text;
                  _this49.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this49.duration}, Distance: ${_this49.distance}`);
                  const locs = [{
                    geoCode: {
                      latitude: driverLatLng.lat,
                      longitude: driverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: riderLatLng.lat,
                      longitude: riderLatLng.lng
                    }
                  }];
                  const center = _this49.map.calculateCenter(locs);
                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
                  const availableHeight = _this49.mapRef.nativeElement.offsetHeight;
                  // Prepare map dimensions for calculating zoom level
                  const mapDim = {
                    height: availableHeight,
                    width: _this49.mapRef.nativeElement.offsetWidth
                  };
                  // Calculate zoom level
                  const zoomLevel = _this49.map.getBoundsZoomLevel(bounds, mapDim);
                  // Manually set zoom level if needed
                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
                  yield _this49.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this49.map.calculateBearing(driverLatLng, riderLatLng));
                  // Update polyline for the route
                  // Update polyline for the route
                  if (_this49.newPoly) {
                    yield _this49.clearPolyline(_this49.newPoly);
                  }
                  yield _this49.addPolyline(driverLatLng, riderLatLng);
                  // Animate the driver marker along the path to the rider
                  yield _this49.animateMarker(_this49.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);
                  _this49.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });
              return function (_x5, _x6) {
                return _ref12.apply(this, arguments);
              };
            }());
          });
          return function updateRoute() {
            return _ref11.apply(this, arguments);
          };
        }();
        // Start updating the route periodically
        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.interval)(_this49.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(() => updateRoute()));
        // Subscribe to the interval observable to start updating
        _this49.routeUpdateSubscription = routeUpdate$.subscribe();
        // Cleanup subscription when the component or context is destroyed
        // Call routeUpdateSubscription.unsubscribe() when needed
      } catch (error) {
        console.error('Error handling driver to rider:', error);
      }
    })();
  }
  handleRiderToDestination(driverLatLng, destinationLatLng) {
    var _this50 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon
      try {
        // Update driver marker to driver's current position
        const driverMarker = yield _this50.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          }
        });
        _this50.driver_marker = driverMarker;
        // Add destination marker
        const destinationMarker = yield _this50.map.newMap.addMarker({
          coordinate: destinationLatLng,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          }
        });
        _this50.destinationMarker = destinationMarker;
        // Function to update route, duration, and distance
        const updateRoute = /*#__PURE__*/function () {
          var _ref13 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: destinationLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };
            _this50.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref14 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this50.duration = response.routes[0].legs[0].duration.text;
                  _this50.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this50.duration}, Distance: ${_this50.distance}`);
                  const locs = [{
                    geoCode: {
                      latitude: driverLatLng.lat,
                      longitude: driverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: destinationLatLng.lat,
                      longitude: destinationLatLng.lng
                    }
                  }];
                  const center = _this50.map.calculateCenter(locs);
                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
                  const availableHeight = _this50.mapRef.nativeElement.offsetHeight;
                  // Prepare map dimensions for calculating zoom level
                  const mapDim = {
                    height: availableHeight,
                    width: _this50.mapRef.nativeElement.offsetWidth
                  };
                  // Calculate zoom level
                  const zoomLevel = _this50.map.getBoundsZoomLevel(bounds, mapDim);
                  // Manually set zoom level if needed
                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
                  // Set the camera to focus on the center point with appropriate zoom leve
                  yield _this50.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this50.map.calculateBearing(driverLatLng, destinationLatLng));
                  // Update polyline for the route
                  if (_this50.newPoly) {
                    yield _this50.clearPolyline(_this50.newPoly);
                  }
                  yield _this50.addPolyline(driverLatLng, destinationLatLng);
                  // Animate the driver marker along the path to the destination
                  yield _this50.animateMarker(_this50.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);
                  _this50.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });
              return function (_x7, _x8) {
                return _ref14.apply(this, arguments);
              };
            }());
          });
          return function updateRoute() {
            return _ref13.apply(this, arguments);
          };
        }();
        // Start updating the route periodically
        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.interval)(_this50.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(() => updateRoute()));
        // Subscribe to the interval observable to start updating
        _this50.routeUpdateSubscription = routeUpdate$.subscribe();
        // Cleanup subscription when the component or context is destroyed
        // Call routeUpdateSubscription.unsubscribe() when needed
      } catch (error) {
        console.error('Error handling rider to destination:', error);
      }
    })();
  }
  addPolyline(loc, des) {
    var _this51 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const polylineColor = "#007bff";
        const polylines = [{
          path: [{
            lat: loc.lat,
            lng: loc.lng
          }, {
            lat: des.lat,
            lng: des.lng
          }],
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }];
        _this51.newPoly = yield _this51.map.newMap.addPolylines(polylines);
        return polylines[0].path; // Ensure the return type is always an array
      } catch (e) {
        console.log('Error Adding Polyline: ', e);
      }
    })();
  }
  createAndAddMarkers(loc, des) {
    var _this52 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon
      try {
        _this52.map.newMap.disableTouch();
        // Add start marker
        _this52.marker1 = yield _this52.map.newMap.addMarker({
          coordinate: loc,
          iconUrl: 'assets/icon/point.png',
          title: 'Start',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        });
        // Add destination marker
        _this52.marker2 = yield _this52.map.newMap.addMarker({
          coordinate: des,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        });
        // Calculate the center point between the start and destination
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
        const center = _this52.map.calculateCenter(locs);
        // Calculate the bounds
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        bounds.extend(new google.maps.LatLng(des.lat, des.lng));
        // Set map height before calculating zoom level
        _this52.setMapHeight();
        const availableHeight = _this52.mapRef.nativeElement.offsetHeight;
        // Prepare map dimensions for calculating zoom level
        const mapDim = {
          height: availableHeight,
          width: _this52.mapRef.nativeElement.offsetWidth
        };
        // Calculate zoom level
        const zoomLevel = _this52.map.getBoundsZoomLevel(bounds, mapDim);
        // Manually set zoom level if needed
        const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
        // Set the camera to focus on the center point with appropriate zoom level
        yield _this52.map.setCameraToLocation({
          lat: center.latitude,
          lng: center.longitude
        }, adjustedZoomLevel, _this52.map.calculateBearing(loc, des));
        // Add polyline for the route
        const polylineColor = "#007bff";
        const polylines = [{
          path: [{
            lat: loc.lat,
            lng: loc.lng
          }, {
            lat: des.lat,
            lng: des.lng
          }],
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }];
        // Add polyline to the map
        _this52.newPoly = yield _this52.map.newMap.addPolylines(polylines);
      } catch (error) {
        console.error('Error creating and adding markers:', error);
      }
    })();
  }
  animateMarker(marker, path, iconUrl) {
    var _this53 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 50,
        height: 50
      };
      const iconAnchor = {
        x: 25,
        y: 50
      }; // Center bottom of the icon
      for (let i = 0; i < path.length; i++) {
        yield _this53.map.newMap.removeMarker(marker);
        const coordinate = path[i] instanceof google.maps.LatLng ? {
          lat: path[i].lat(),
          lng: path[i].lng()
        } : {
          lat: path[i].lat,
          lng: path[i].lng
        };
        marker = yield _this53.map.newMap.addMarker({
          coordinate: coordinate,
          iconUrl: iconUrl,
          title: 'Moving Marker',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          }
        });
        yield new Promise(resolve => setTimeout(resolve, 100)); // Adjust the interval as needed
      }
      // Store the last position of the animated marker
      _this53.animatedMarker = marker;
    })();
  }
  ShowDriverInfoPop() {
    var _this54 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this54.alert.create({
        header: 'Driver Information',
        message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${_this54.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${_this54.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${_this54.driver_duration_apart} minutes</p>
        <p><strong>Driver ID:</strong> ${_this54.driver_ID}</p>
        <p><strong>Number of Seats:</strong> ${_this54.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${_this54.DriverLatLng.lat}, ${_this54.DriverLatLng.lng})</p>
      </div>
    `,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  // State management methods
  EnterBookingStage() {
    this.setStage('bookingStage');
  }
  EnterMapPinStage() {
    this.setStage('mapPinStage');
  }
  EnterConfirmStage() {
    this.setStage('confirmStage');
  }
  EnterSearchingStage() {
    this.setStage('searchingStage');
  }
  EnterNoDriverStage() {
    this.setStage('noDriverStage');
  }
  EnterTrackingStage() {
    this.setStage('trackingStage');
  }
  EnterDrivingToDestinationStage() {
    this.setStage('drivingToDestinationStage');
  }
  setStage(activeStage) {
    const stages = {
      bookingStage: false,
      confirmStage: false,
      trackingStage: false,
      searchingStage: false,
      noDriverStage: false,
      mapPinStage: false,
      drivingToDestinationStage: false
    };
    stages[activeStage] = true;
    this.updateStage(stages);
  }
  updateStage(stages) {
    this.bookingStage = stages.bookingStage;
    this.confirmStage = stages.confirmStage;
    this.trackingStage = stages.trackingStage;
    this.searchingStage = stages.searchingStage;
    this.noDriverStage = stages.noDriverStage;
    this.mapPinStage = stages.mapPinStage;
    this.drivingToDestinationStage = stages.drivingToDestinationStage;
  }
}
HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_10__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_11__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_geocode_service__WEBPACK_IMPORTED_MODULE_12__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_13__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_14__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ActionSheetController));
};
HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.topBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.bottomBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  decls: 30,
  vars: 19,
  consts: [[1, "ion-no-border", 3, "translucent"], ["topBar", ""], [4, "ngIf"], ["lines", "none", "color", "light", "class", "main-buttons ion-no-padding", "class", "top_bar", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", 4, "ngIf"], ["vertical", "top", "horizontal", "end", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", 3, "click", 4, "ngIf"], ["lines", "none", "color", "primary", "class", "main-buttons ion-no-padding", "class", "top_bar", 4, "ngIf"], ["scroll-y", "false", 3, "fullscreen"], ["map", ""], ["vertical", "bottom", "horizontal", "end", 4, "ngIf"], ["class", "centerPin", "vertical", "center", "horizontal", "center", 4, "ngIf"], ["bottomBar", ""], ["class", "bottomItems shadow-top", "lines", "full", 4, "ngIf"], ["lines", "full", 1, "bottomItems", "shadow-top", 3, "hidden"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["class", "bottomItems shadow-top", "lines", "none", 4, "ngIf"], ["slot", "start"], ["shape", "round", 3, "click"], ["slot", "icon-only", "name", "arrow-back", "color", "tertiary"], ["slot", "end"], ["fill", "outline", "color", "primary", "lines", "none", 1, "duration"], ["slot", "icon-only", "name", "flag", "color", "primary"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["lines", "none", "color", "light", 1, "top_bar", 3, "click"], ["slot", "start", "color", "primary", "name", "pencil"], ["vertical", "top", "horizontal", "start"], ["color", "light"], ["vertical", "top", "horizontal", "end", 3, "click"], ["color", "primary", "name", "chatbubble-ellipses"], ["vertical", "top", "horizontal", "start", 3, "click"], ["name", "arrow-back", "color", "primary"], ["lines", "none", "color", "primary", 1, "top_bar"], ["slot", "start", "color", "light", "name", "flag"], ["fill", "outline", "shape", "round", "color", "danger", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "slot", "icon-only", "name", "close-sharp", "color", "danger"], ["vertical", "bottom", "horizontal", "end"], ["color", "light", 3, "click"], ["name", "locate"], ["vertical", "center", "horizontal", "center", 1, "centerPin"], ["src", "../../assets/icon/pin.png"], ["lines", "full", 1, "bottomItems", "shadow-top"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "disabled", "click"], ["slot", "start", "name", "search", "color", "primary"], ["class", "bottomItems ion-margin", 3, "click", 4, "ngFor", "ngForOf"], [1, "bottomItems", "ion-margin", 3, "click"], ["name", "pin", "color", "primary", "slot", "start"], ["lines", "none", 1, "bottomItems", "shadow-top"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/No connection-pana.svg"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "arrow-back"], ["color", "light", "class", "payment", 4, "ngIf"], [1, "card"], [3, "value", "ionChange"], ["value", "cash"], [3, "value", 4, "ngFor", "ngForOf"], ["shape", "round", "color", "primary", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "start", "name", "checkmark-sharp"], ["slot", "start", "name", "checkmark-sharp", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["color", "light", 1, "payment"], [3, "click"], ["src", "../../assets/icon/hatchback.png"], ["slot", "icon-only", "color", "primary", "name", "information-circle"], ["slot", "icon-only", "color", "primary", "name", "time"], ["slot", "icon-only", "color", "primary", "name", "person"], [1, "price"], [3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "100px", 3, "animated"], [2, "width", "80px", 3, "animated"], [3, "value"], ["color", "light", "type", "indeterminate"], [3, "src"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button"], ["type", "indeterminate"], [1, "ion-margin-bottom"], [1, "ion-text-center"], ["slot", "icon-only", "color", "warning", "name", "star"], ["value", "first"], ["slot", "header"], ["slot", "content"], ["shape", "round", "size", "large", "expand", "block", 1, "main-button", 3, "click"], ["color", "primary", "slot", "start", "name", "person"], ["color", "primary", "slot", "start", "name", "chatbubbles"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "slot", "icon-only", "name", "cash"], ["color", "primary", "slot", "icon-only", "name", "card"], ["slot", "icon-only", "color", "secondary", "name", "star"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header", 0)(1, "div", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HomePage_ion_toolbar_3_Template, 10, 1, "ion-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, HomePage_ion_item_4_Template, 4, 1, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, HomePage_ion_fab_5_Template, 3, 0, "ion-fab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HomePage_ion_fab_6_Template, 3, 0, "ion-fab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, HomePage_ion_fab_7_Template, 3, 0, "ion-fab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, HomePage_ion_item_8_Template, 8, 1, "ion-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "capacitor-google-maps", null, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, HomePage_ion_fab_12_Template, 3, 0, "ion-fab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, HomePage_ion_fab_13_Template, 3, 0, "ion-fab", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-footer", 0)(15, "div", null, 12)(17, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, HomePage_ion_list_18_Template, 7, 3, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-list", 14)(20, "ion-item-group", 15)(21, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_21_listener() {
        return ctx.getDistanceAndDirections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](22, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, HomePage_ion_list_25_Template, 9, 0, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, HomePage_ion_list_26_Template, 20, 7, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, HomePage_ion_list_27_Template, 13, 3, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, HomePage_ion_list_28_Template, 53, 10, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, HomePage_ion_list_29_Template, 34, 9, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingStage && ctx.showResetLocationButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !ctx.mapPinStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.destinationAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.noDriverStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.drivingToDestinationStage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.SelectValueAccessor],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-bottom {\n  100% {\n    transform: translateY(50%);\n  }\n  0% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-bottom[_ngcontent-%COMP%] {\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%], .bottomItems[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.duration[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n  --background: var(--ion-color-light);\n  width: 100%;\n  max-width: 600px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n  --padding:0px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: var(--ion-color-dark);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: var(--ion-color-light);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n}\n\n.accept[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  padding: 12px;\n}\n\n.unbook[_ngcontent-%COMP%] {\n  background: #0a602d;\n}\n\n.book[_ngcontent-%COMP%] {\n  background: var(--ion-color-success);\n}\n\n.center-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 20px 0;\n}\n\n.acceptTimer[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  color: aliceblue;\n  margin-right: auto;\n  background: var(--ion-color-danger);\n  padding: 12px;\n  border-radius: 100px;\n  border: 1.3px solid aliceblue;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pickMe[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-right: 150px;\n  align-items: right;\n  flex: 0.6;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n  --background: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n\n@media (max-width: 768px) {\n  .fallback[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .accept[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 10px;\n  }\n  .acceptTimer[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 10px;\n  }\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .main-buttons[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    width: 90%; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    --background: var(--ion-color-primary);\n  }\n  .price[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .top_bar[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .shadow-top[_ngcontent-%COMP%] {\n    animation-duration: 0.8s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU9OSUMlMjBQUk9KRUNUU1xcbXlSaWRlci0yMDI0MDUyNFQwNDA1MDVaLTAwMVxcbXlSaWRlclxcc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDJCQUFBO0VDQ0Y7RURDQTtJQUNFLHlCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsMEJBQUE7RUNBRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0Usc0VBQUE7QUNERjs7QURJQTtFQUNFLG1FQUFBO0FDREY7O0FESUE7O0VBRUUseUJBQUE7QUNERjs7QURJQTtFQUNFLHFDQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtBQ0RGOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDREo7O0FER0k7RUFDRSxpQkFBQTtBQ0ROOztBRElJO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREtRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNIVjs7QURPTTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUNMUjs7QURPUTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUNMVjs7QURPVTtFQUNFLDRCQUFBO0FDTFo7O0FEYUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNWRjs7QURhQTtFQUNFLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxvQ0FBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1ZGOztBRGFBO0VBQ0UsdURBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDVkY7O0FEYUE7RUFDRSxzREFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSx1REFBQTtBQ1ZGOztBRGFBO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDVkY7O0FEYUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDVkY7RURhQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0VDWEY7RURjQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0VDWkY7RURlQTtJQUNFLGNBQUE7RUNiRjtFRGdCQTtJQUNFLGdCQUFBO0lBQ0EsVUFBQSxFQUFBLCtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQ0FBQTtFQ2RGO0VEa0JBO0lBQ0UsT0FBQTtFQ2hCRjtFRG1CQTtJQUNFLHdCQUFBO0VDakJGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYXBhY2l0b3ItZ29vZ2xlLW1hcHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cblxuLnNsaWRlLWJvdHRvbSB7XG4gIGFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG4uc2xpZGUtdG9wIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbi5jZW50ZXJQaW4sXG4uYm90dG9tSXRlbXMge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjYyNSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kdXJhdGlvbntcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIGlvbi1yb3cge1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBpb24tZmFiIHtcbiAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XG5cbiAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgLS1wYWRkaW5nOjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGF5bWVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFjY2VwdCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi51bmJvb2sge1xuICBiYWNrZ3JvdW5kOiAjMGE2MDJkO1xufVxuXG4uYm9vayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmNlbnRlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmFjY2VwdFRpbWVyIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMS4zcHggc29saWQgYWxpY2VibHVlO1xufVxuXG4uY2VudGVyRWxlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGlja01lIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICBmbGV4OiAwLjY7XG59XG5cbi5zaGFkb3ctdG9wIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xufVxuXG4udG9wX2JhciB7XG4gIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG59XG5cbi5tYWluLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLnByZXZpZXcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mYWxsYmFjayB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjYmZiZmJmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmFsbGJhY2sge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLmFjY2VwdCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5hY2NlcHRUaW1lciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5tYWluLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAubWFpbi1idXR0b25zIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIHdpZHRoOiA5MCU7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG5cbiAgLnByaWNlIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnRvcF9iYXIsIC5jYXJkLCAuc2hhZG93LXRvcCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICB9XG59XG4iLCJjYXBhY2l0b3ItZ29vZ2xlLW1hcHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB9XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG4uc2xpZGUtYm90dG9tIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLnNsaWRlLXRvcCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbi5jZW50ZXJQaW4sXG4uYm90dG9tSXRlbXMge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjYyNSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kdXJhdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyB7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWZhYiB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICAtLXBhZGRpbmc6MHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCAucGF5bWVudCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDFweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgLnBheW1lbnQgaW9uLWl0ZW0gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hY2NlcHQge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4udW5ib29rIHtcbiAgYmFja2dyb3VuZDogIzBhNjAyZDtcbn1cblxuLmJvb2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5jZW50ZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5hY2NlcHRUaW1lciB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDEuM3B4IHNvbGlkIGFsaWNlYmx1ZTtcbn1cblxuLmNlbnRlckVsZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBpY2tNZSB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5wcmljZSB7XG4gIG1hcmdpbi1yaWdodDogMTUwcHg7XG4gIGFsaWduLWl0ZW1zOiByaWdodDtcbiAgZmxleDogMC42O1xufVxuXG4uc2hhZG93LXRvcCB7XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbn1cblxuLnRvcF9iYXIge1xuICBib3gtc2hhZG93OiAwcHggMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufVxuXG4ubWFpbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmFsbGJhY2sge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZhbGxiYWNrIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYWNjZXB0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5hY2NlcHRUaW1lciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubWFpbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5tYWluLWJ1dHRvbnMge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgd2lkdGg6IDkwJTsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAucHJpY2Uge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgLnRvcF9iYXIsIC5jYXJkLCAuc2hhZG93LXRvcCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICB9XG59Il19 */"]
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
  // Convert the address to lat and lng
  getLatLng(address) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('address', address).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  }
  // Get the distance between the origin and destination
  getDirections(from, to) {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // You can implement the directions request here using google.maps.DirectionsService
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);
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
            zoom: 15,
            height: 100,
            width: 300,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }
        });
        _this.LatLng = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude
        };
        yield _this.newMap.enableTrafficLayer(true);
        yield _this.newMap.enableCurrentLocation(true);
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
  calculateCenter(points) {
    const latitudes = points.map(p => p.geoCode.latitude);
    const longitudes = points.map(p => p.geoCode.longitude);
    const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
    const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;
    return {
      latitude: avgLat,
      longitude: avgLng
    };
  }
  setCameraToLocation(coordinate, zoom, bearing) {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.newMap) {
        try {
          yield _this2.newMap.setCamera({
            animate: true,
            animationDuration: 500,
            zoom: zoom,
            coordinate: coordinate,
            bearing: bearing
          });
        } catch (error) {
          console.error('Error setting camera:', error);
        }
      } else {
        console.error('Map is not initialized.');
      }
    })();
  }
  // Add other necessary methods like getAddress here
  getBoundsZoomLevel(bounds, mapDim) {
    const WORLD_DIM = {
      height: 256,
      width: 256
    };
    const ZOOM_MAX = 21;
    const latRad = lat => {
      const sin = Math.sin(lat * Math.PI / 180);
      const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    };
    const zoom = (mapPx, worldPx, fraction) => Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
    const lngDiff = ne.lng() - sw.lng();
    const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
    const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }
  calculateBearing(start, end) {
    const startLat = start.lat * (Math.PI / 180);
    const startLng = start.lng * (Math.PI / 180);
    const endLat = end.lat * (Math.PI / 180);
    const endLng = end.lng * (Math.PI / 180);
    const dLng = endLng - startLng;
    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);
    const bearing = Math.atan2(y, x) * (180 / Math.PI);
    return (bearing + 360) % 360;
  }
  getDirections(from, to) {
    var _this3 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey}`;
        const response = yield _this3.http.get(url).toPromise();
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
  // Add the addMarker method to the MapService class
  addMarker(lat, lng, title) {
    var _this4 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const marker = {
          coordinate: {
            lat,
            lng
          },
          title
        };
        yield _this4.newMap.addMarker(marker);
        return marker;
      } catch (error) {
        console.error('Error adding marker:', error);
        return null;
      }
    })();
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

/***/ 2982:
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class NetworkService {
  constructor() {
    this.networkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
    this.networkStatus$ = this.networkStatus.asObservable();
    this.initializeNetworkListener();
  }
  initializeNetworkListener() {
    _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.networkStatus.next(status.connected);
      if (status.connected) {
        this.handleReconnect();
      } else {
        this.handleDisconnect();
      }
    });
    this.checkInitialNetworkStatus();
  }
  checkInitialNetworkStatus() {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
      _this.networkStatus.next(status.connected);
      if (!status.connected) {
        _this.handleDisconnect();
      }
    })();
  }
  handleDisconnect() {
    console.log('Disconnected from network');
    // Handle the UI or logic when the network is disconnected
  }
  handleReconnect() {
    console.log('Reconnected to network');
    // Handle the UI or logic when the network is reconnected
  }
  isConnected() {
    return this.networkStatus.value;
  }
}
NetworkService.ɵfac = function NetworkService_Factory(t) {
  return new (t || NetworkService)();
};
NetworkService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NetworkService,
  factory: NetworkService.ɵfac,
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

/***/ 4970:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5191:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preferences": () => (/* binding */ Preferences)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4970);

const Preferences = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Preferences', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_preferences_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7333)).then(m => new m.PreferencesWeb())
});



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