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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autocomplete/autocomplete.component */ 5860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-card/add-card.component */ 671);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/network.service */ 2982);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/payment.service */ 1863);
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../one-signal.service */ 8126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
























const _c0 = ["map"];
const _c1 = ["topBar"];
const _c2 = ["bottomBar"];
const _c3 = ["mapElement"];

function HomePage_ion_toolbar_3_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label", 27)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r18.duration);
  }
}

function HomePage_ion_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-toolbar", 19)(1, "ion-buttons", 20)(2, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_toolbar_3_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "ion-buttons", 23)(7, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, HomePage_ion_toolbar_3_ion_label_9_Template, 3, 1, "ion-label", 26);
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
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_item_4_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.destinationAddress);
  }
}

function HomePage_ion_toolbar_5_ion_label_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label", 27)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r23.duration);
  }
}

function HomePage_ion_toolbar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-toolbar", 19)(1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Driver Arrives In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-buttons", 23)(4, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HomePage_ion_toolbar_5_ion_label_6_Template, 3, 1, "ion-label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.duration);
  }
}

function HomePage_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r4.destinationAddress);
  }
}

function HomePage_ion_fab_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 32)(1, "ion-fab-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-menu-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_fab_8_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.GotoSupport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-fab-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_fab_9_Template_ion_fab_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.goBackToAutoComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-fab-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 38)(1, "ion-fab-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_fab_13_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.resetLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-fab", 41)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_19_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_19_ion_item_6_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33);
      const place_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.RequestRide(place_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 48);
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

function HomePage_ion_list_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 43)(1, "ion-item-group", 15)(2, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_19_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r34.showAutocompleteModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HomePage_ion_list_19_ion_item_6_Template, 7, 2, "ion-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r12.locationAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r12.locationAddress ? "Where To?" : "Waiting for address...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r12.places);
  }
}

function HomePage_ion_list_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 49)(1, "ion-list-header")(2, "ion-item", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "ion-item-group", 15)(5, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_26_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.ReturnHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " No Drivers Here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}

function HomePage_ion_list_27_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-img", 71);
  }
}

function HomePage_ion_list_27_ion_skeleton_text_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-skeleton-text", 72);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_27_h2_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r40.carname, " ");
  }
}

function HomePage_ion_list_27_h2_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-skeleton-text", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_27_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r42.D_duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r42.driver_number_of_seats, " seats ");
  }
}

function HomePage_ion_list_27_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-skeleton-text", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_27_h2_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r44.price, "");
  }
}

function HomePage_ion_list_27_h2_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-skeleton-text", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_27_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p")(1, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r46.price * 2, "");
  }
}

function HomePage_ion_list_27_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "ion-skeleton-text", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_27_ion_select_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-select-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const card_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", card_r52.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" Card ", card_r52.last4, " ");
  }
}

function HomePage_ion_list_27_ion_icon_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-icon", 68);
  }
}

function HomePage_ion_list_27_ion_progress_bar_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "ion-progress-bar", 81);
  }
}

function HomePage_ion_list_27_ion_label_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Book Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function HomePage_ion_list_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 49)(1, "ion-list-header", 54)(2, "ion-grid", 55)(3, "ion-row", 56)(4, "ion-col", 57)(5, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HomePage_ion_list_27_ion_img_6_Template, 1, 0, "ion-img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, HomePage_ion_list_27_ion_skeleton_text_7_Template, 1, 1, "ion-skeleton-text", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_col_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r53.ShowDriverInfoPop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, HomePage_ion_list_27_h2_9_Template, 3, 1, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, HomePage_ion_list_27_h2_10_Template, 2, 1, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, HomePage_ion_list_27_p_11_Template, 5, 2, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, HomePage_ion_list_27_p_12_Template, 2, 1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-col", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, HomePage_ion_list_27_h2_14_Template, 2, 1, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, HomePage_ion_list_27_h2_15_Template, 2, 1, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, HomePage_ion_list_27_p_16_Template, 3, 1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, HomePage_ion_list_27_p_17_Template, 2, 1, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 63)(19, "ion-item")(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Change Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "ion-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ionChange", function HomePage_ion_list_27_Template_ion_select_ionChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r55.chooseCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-select-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, HomePage_ion_list_27_ion_select_option_25_Template, 2, 2, "ion-select-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](27, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, "Change Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-item-group", 15)(31, "ion-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_27_Template_ion_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r57.StartRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, HomePage_ion_list_27_ion_icon_32_Template, 1, 0, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, HomePage_ion_list_27_ion_progress_bar_33_Template, 1, 0, "ion-progress-bar", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, HomePage_ion_list_27_ion_label_34_Template, 2, 0, "ion-label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r14.selectedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r14.savedPaymentMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r14.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.price);
  }
}

function HomePage_ion_list_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 49)(1, "ion-list-header")(2, "ion-item")(3, "ion-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-label")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-item-group", 15)(11, "ion-button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_28_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r58.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "ion-label")(13, "ion-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "ion-progress-bar", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r15.currentDriver.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r15.currentDriver.Driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Arrives In ", ctx_r15.duration, "");
  }
}

function HomePage_ion_list_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 49)(1, "ion-list-header", 86)(2, "ion-label")(3, "h1", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 88)(6, "ion-item", 89)(7, "ion-label")(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-avatar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "ion-img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-item", 90)(15, "ion-label")(16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-note", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ion-item", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "ion-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "ion-label")(26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "ion-note", 93)(29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "ion-accordion-group", 94)(32, "ion-accordion", 95)(33, "ion-item", 96)(34, "ion-label")(35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "More Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 97)(38, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_29_Template_ion_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r60.CallDriver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "ion-icon", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, " Contact Driver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "ion-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_29_Template_ion_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](42, "ion-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " Chat with Driver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "ion-button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_ion_list_29_Template_ion_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r61);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r63.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "ion-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, " Cancel Ride ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Driver Arrives in ", ctx_r16.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r16.driverInfo.Driver_car, " \u2022 ", ctx_r16.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r16.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r16.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Your Driver is ", ctx_r16.driverInfo.Driver_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r16.driverInfo.Driver_rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("name", ctx_r16.cash ? "cash" : "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r16.cash ? "Cash" : "Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r16.price, "");
  }
}

function HomePage_ion_list_30_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}

function HomePage_ion_list_30_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "ion-icon", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}

function HomePage_ion_list_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-list", 49)(1, "ion-list-header", 86)(2, "ion-label")(3, "h1", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 63)(6, "ion-item")(7, "ion-item")(8, "ion-label")(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-item", 103)(14, "ion-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "ion-img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "ion-label")(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-item")(21, "ion-item")(22, "ion-label")(23, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "1,832 rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, HomePage_ion_list_30_ion_item_28_Template, 5, 0, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, HomePage_ion_list_30_ion_item_29_Template, 5, 0, "ion-item", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "ion-item", 103)(31, "ion-label")(32, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Arrival in ", ctx_r17.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r17.driverInfo.Driver_car, ".", ctx_r17.driverInfo.Driver_cartype, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r17.driverInfo.Driver_plate);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r17.driverInfo.Driver_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Your Driver is ", ctx_r17.driverInfo.Driver_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r17.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r17.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("$", ctx_r17.price, "");
  }
}

class HomePage {
  constructor(authService, router, networkService, map, nav, platform, firestore, database, ngZone, geocode, overlay, modalCtrl, alertController, payME, toastController, actionSheetController, onesignal) {
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
    this.alertController = alertController;
    this.payME = payME;
    this.toastController = toastController;
    this.actionSheetController = actionSheetController;
    this.onesignal = onesignal;
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
    this.stopPolling = false; // Interval in milliseconds for updating the route

    this.UPDATE_INTERVAL = 10000; // Update every 10 seconds

    this.initializeApp();
  }

  ngOnDestroy() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      window.removeEventListener('resize', _this.ResetMapHeight.bind(_this));

      _this.clearSubscriptions();

      _this.unsubscribe();

      yield _this.clearPrevMarkers();
      yield _this.clearAllPolylines();
    })();
  }

  ionViewDidEnter() {
    this.EnterBookingStage();
  }

  ionViewWillLeave() {
    this.bookingStage = false;
  }

  ngAfterViewInit() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        //alert('Map container height:' + this.mapRef.nativeElement.offsetHeight);
        _this2.ResetMapHeight();

        window.addEventListener('resize', _this2.ResetMapHeight.bind(_this2));

        _this2.initializeBackButtonCustomHandler();

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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.savedPaymentMethods = yield _this3.database.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this3.savedPaymentMethods); // Set default payment method to cash if no cards are saved

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

    if (!this.cash) {// this.processPayment(this.authService.user.email, this.defaultAmount, this.selectedCard);
    }
  }

  processPayment(email, amount, cardId) {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alert.create({
        header: 'Payment Error',
        message: errorMessage,
        buttons: [{
          text: 'Add New Card',
          handler: function () {
            var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              const modal = yield _this5.modalCtrl.create({
                component: _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_5__.AddCardComponent // Create this component to handle adding a new card

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

  ResetMapHeight() {
    this.topBarHeight = 0;
    this.bottomBarHeight = 0;
    this.topBarHeight = this.topBar.nativeElement.offsetHeight - 40;
    this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight - 40;
    const availableHeight = window.innerHeight + this.bottomBarHeight + this.topBarHeight;
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  setMapHeight() {
    if (this.topBar && this.bottomBar) {
      this.topBarHeight = 0;
      this.bottomBarHeight = 0;
      this.topBarHeight = this.topBar.nativeElement.offsetHeight - 40;
      this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight - 40;
      const availableHeight = window.innerHeight - this.bottomBarHeight - this.topBarHeight;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`; // alert('Map container height SetMap: ' + this.mapRef.nativeElement.style.height)
    }
  }

  setMapHeightCreateAndAddMarkers() {
    const bottomBarHeight = this.bottomBar ? this.bottomBar.nativeElement.offsetHeight : 0;
    const availableHeight = window.innerHeight - bottomBarHeight; // Full height minus bottom bar height

    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  setMapHeightHandleDrivertoRider() {
    this.topBarHeight = 0;
    this.bottomBarHeight = 0;
    this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
    const availableHeight = window.innerHeight - this.bottomBarHeight - this.topBarHeight; //alert('rrerrerr: ' + availableHeight);

    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  setMapHeightHandleDrivertoDestination() {
    if (this.bottomBar) {
      this.topBarHeight = 0;
      this.bottomBarHeight = 0;
      this.bottomBarHeight = this.bottomBar.nativeElement.offsetHeight - 40;
      const availableHeight = window.innerHeight - this.bottomBarHeight + 90;
      this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    }
  }

  initializeNetworkMonitoring() {
    var _this6 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    this.platform.ready().then( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rideData = yield _this7.getRideState();

      if (rideData) {
        console.log("There is some ridedata in here...."); //this.restoreRideState(rideData);
      }
    }));
  }

  saveRideState(rideData) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const RIDE_KEY = 'rideState';
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.set({
        key: RIDE_KEY,
        value: JSON.stringify(rideData)
      });
    })();
  }

  getRideState() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const RIDE_KEY = 'rideState';
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.get({
        key: RIDE_KEY
      });
      return value ? JSON.parse(value) : null;
    })();
  }

  clearRideState() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const RIDE_KEY = 'rideState';
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_6__.Preferences.remove({
        key: RIDE_KEY
      });
    })();
  } // Method to restore the ride state


  restoreRideState(rideData) {
    // Set necessary variables to restore the ride state
    this.current_Request_Number = rideData.current_Request_Number;
    this.price = rideData.price;
    this.actualDestination = rideData.actualDestination;
    this.D_LatLng = rideData.D_LatLng;
    this.destinationAddress = rideData.destinationAddress;
    this.LatLng = rideData.LatLng; // Restore map state and markers

    this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });
    this.createAndAddMarkers(this.LatLng, this.D_LatLng); // Navigate to the appropriate stage

    if (rideData.stage) {
      this.setStage(rideData.stage);
    }
  }

  initializeGeolocation() {
    var _this8 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        } // If permission is granted, dismiss any alert if shown


        _this8.overlay.hideLoader(); // Try to get the current position


        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this8.coordinates = coordinates;
        _this8.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };

        _this8.database.updateLocation(_this8.LatLng);

        console.log('Geolocation initialized:', _this8.LatLng); // Start polling the user's position

        _this8.startPollingPosition();
      } catch (error) {
        console.error('Error initializing geolocation:', error); // If any error occurs, prompt the user to enable location services

        yield _this8.overlay.showLoader('Enable Device Location...');

        _this8.startPermissionPolling();
      }
    })();
  }

  startPermissionPolling() {
    var _this9 = this;

    this.permissionCheckInterval = setInterval( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

      if (permissionStatus.location === 'granted') {
        _this9.overlay.hideLoader();

        clearInterval(_this9.permissionCheckInterval); // Try to get the current position again if permissions are granted

        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        _this9.coordinates = coordinates;
        _this9.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };
        console.log('Geolocation initialized:', _this9.LatLng); // Start polling the user's position

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
    this.pollingInterval = setInterval( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition();
        const newLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        if (_this10.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) {
          // Check if moved at least 50 meters
          lastLatLng = newLatLng;

          _this10.database.updateLocation(newLatLng);

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
        console.error('Error getting position:', err); // Reduce error alerts by not showing specific errors repeatedly
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this11.map.createMap(_this11.mapRef.nativeElement, _this11.coordinates);
        _this11.mapy = true;
        _this11.actualLocation = _this11.map.actualLocation; // console.log('Map initialized:', this.actualLocation, this.locationAddress);
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
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this12 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Current Stages:', {
          bookingStage: _this12.bookingStage,
          mapPinStage: _this12.mapPinStage,
          confirmStage: _this12.confirmStage,
          autocompleteStage: _this12.autocompleteStage,
          searchingStage: _this12.searchingStage,
          noDriverStage: _this12.noDriverStage,
          trackingStage: _this12.trackingStage,
          drivingToDestinationStage: _this12.drivingToDestinationStage
        });

        if (_this12.bookingStage) {
          yield _this12.showExitConfirmation();
        } else if (_this12.mapPinStage) {
          yield _this12.goBackToAutoComplete();

          _this12.EnterBookingStage();
        } else if (_this12.confirmStage) {
          _this12.EnterBookingStage();
        } else if (_this12.autocompleteStage) {
          _this12.EnterBookingStage();
        } else if (_this12.searchingStage) {
          yield _this12.showCancelSearchConfirmation();
        } else if (_this12.noDriverStage) {
          _this12.EnterBookingStage();
        } else if (_this12.trackingStage) {
          yield _this12.showCancelRideConfirmation();
        } else if (_this12.drivingToDestinationStage) {
          yield _this12.showCannotExitAlert();
        } else {
          yield _this12.router.navigate(['..']); // Navigate to the previous route
        }
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this13 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        header: 'Exit App',
        message: 'Are you sure you want to exit the app?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  showCancelSearchConfirmation() {
    var _this14 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this14.alertController.create({
        header: 'Cancel Search',
        message: 'Are you sure you want to cancel the search?',
        buttons: [{
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Yes',
          handler: () => {
            // Implement logic to cancel the search
            console.log('Search cancelled');

            _this14.presentCancelRideActionSheet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  showCancelRideConfirmation() {
    var _this15 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this15.alertController.create({
        header: 'Cancel Ride',
        message: 'Are you sure you want to cancel this ride?',
        buttons: [{
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Yes',
          handler: () => {
            // Implement logic to cancel the ride
            console.log('Ride cancelled');

            _this15.presentCancelRideActionSheet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  showCannotExitAlert() {
    var _this16 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this16.alertController.create({
        header: 'Cannot Exit',
        message: 'You cannot exit the app during an active trip.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  setupMapListeners() {
    var _this17 = this;

    this.map.newMap.setOnCameraIdleListener( /*#__PURE__*/function () {
      var _ref5 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (g) {
        _this17.ngZone.run( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this17.showResetLocationButton = true;

          if (_this17.mapPinStage) {
            const addressResponse = yield _this17.geocode.getAddress(g.latitude, g.longitude).toPromise();

            _this17.processAddressResponse(addressResponse);
          }
        }));
      });

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }());
  }

  logout() {
    var _this18 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this18.authService.logout();
    })();
  }

  fetchAndDisplayDrivers(center, radiusInM) {
    var _this19 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const drivers = yield _this19.database.checkDriversWithin(center, radiusInM);
        console.log('Fetched drivers:', drivers);
        yield _this19.handleDrivers(drivers);

        if (_this19.drivers_Requested.length > 0) {
          _this19.current_Request_Number = 0; // Set to the first available driver

          yield _this19.UpdateCarMarker(_this19.drivers_Requested);
          _this19.NoDrivers = false;
        } else {
          _this19.current_Request_Number = -1; // No valid driver

          yield _this19.UpdateCarMarker([]); // Clear all markers if no drivers are requested

          _this19.NoDrivers = true;
        }
      } catch (error) {
        console.error('Error fetching drivers:', error);
        _this19.current_Request_Number = -1; // Reset the request number

        yield _this19.UpdateCarMarker([]); // Clear all markers if there's an error

        _this19.NoDrivers = true;
      }
    })();
  }

  handleDrivers(drivers) {
    var _this20 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this20.drivers_Requested = [];
      _this20.closeDrivers = null;
      console.log('Handling drivers:', drivers);

      if (drivers.length === 0) {
        _this20.NoDrivers = true;
        console.log('No drivers found.');
        return;
      }

      drivers.forEach(driver => {
        if (driver) {
          console.log('Processing driver:', driver);

          if (driver.duration <= 1000 && driver.onlineState) {
            _this20.drivers_Requested.push(driver);

            _this20.updateDriverInfo(driver);
          }

          if (!_this20.closeDrivers || driver.duration < _this20.closeDrivers.duration) {
            _this20.closeDrivers = driver;
          }
        } else {
          console.error('Driver is null or undefined:', driver);
        }
      });

      if (_this20.drivers_Requested.length === 0) {
        _this20.NoDrivers = true;
      } else {
        // Ensuring current_Request_Number is within the bounds
        _this20.current_Request_Number = Math.min(_this20.current_Request_Number, _this20.drivers_Requested.length - 1);
      }

      console.log('Final requested drivers list:', _this20.drivers_Requested);
    })();
  } // Unsubscribe from all active listeners (for cleanup)


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
    var _this21 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this21.overlay.showLoader('');

        yield _this21.clearPrevMarkers(); // Clear any existing polylines

        yield _this21.clearAllPolylines();

        _this21.map.newMap.enableTouch(); // Ensure the map respects the boundaries of the top and bottom bars


        _this21.map.newMap.enableCurrentLocation(false);

        yield _this21.BookRide();
      } catch (e) {
        _this21.overlay.showAlert('Starting Ride Error', e);
      }
    })();
  }

  clearMarkers() {
    var _this22 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.marker1) {
        yield _this22.map.newMap.removeMarker(_this22.marker1);
        _this22.marker1 = null;
      }

      if (_this22.marker2) {
        yield _this22.map.newMap.removeMarker(_this22.marker2.toString());
        _this22.marker2 = null;
      }

      if (_this22._carmarkers) {
        for (const {
          marker
        } of _this22._carmarkers) {
          yield _this22.map.newMap.removeMarker(marker); // Assuming marker is the instance
        }

        _this22._carmarkers = []; // Clear the array after removing markers
      }
    })();
  }

  BookRide() {
    var _this23 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this23.hasValidDriver()) {
          const driver = _this23.drivers_Requested[_this23.current_Request_Number];
          const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)(_this23.firestore, `Drivers`, driver.Driver_id); // Fetch driver details once

          const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDoc)(userDocRef);

          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            console.log('Driver is offline', driver);

            if (data && data.onlineState) {
              _this23.driverInfo = data; // Call requestRideWithDriverDetails to generate requestID and handle ride request

              yield _this23.requestRideWithDriverDetails(driver, userDocRef);

              _this23.updateDriverInfo(driver);
            } else {
              console.log('Driver is offline');
              yield _this23.handleNoAvailableDriver();
            }
          } else {
            console.error('Document does not exist.');
            yield _this23.handleNoAvailableDriver();
          }
        } else {
          _this23.showNoDriversAlert();
        }
      } catch (error) {
        console.error('Error in BookRide:', error);

        _this23.overlay.showAlert('Error in BookRide:', 'An error occurred while booking the ride.');
      }
    })();
  }

  hasValidDriver() {
    return this.drivers_Requested?.[this.current_Request_Number]?.Driver_id != null;
  }

  requestRideWithDriverDetails(driver, userDocRef) {
    var _this24 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Assume that this.database.RequestRideWithRiderDetails returns a Promise that resolves with the requestID
        const requestDetails = {
          latLng: _this24.LatLng,
          destinationAddress: _this24.destinationAddress,
          locationAddress: _this24.locationAddress,
          dLatLng: _this24.D_LatLng,
          driverId: driver.Driver_id,
          price: _this24.price,
          cash: _this24.cash
        };
        _this24.requestID = yield _this24.database.RequestRideWithRiderDetails(requestDetails); // Assuming the request was successful and the requestID was generated

        if (_this24.requestID) {
          _this24.currentDriver = driver;

          _this24.handlePendingState(); // Optionally listen for updates on the specific ride request document


          const rideRequestDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)(_this24.firestore, `Request`, _this24.requestID);
          const unsub = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.onSnapshot)(rideRequestDocRef, /*#__PURE__*/function () {
            var _ref7 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
              if (doc.exists()) {
                yield _this24.handleRideUpdates(doc);
              } else {
                console.error('Ride request document does not exist.');
              }
            });

            return function (_x2) {
              return _ref7.apply(this, arguments);
            };
          }()); // Store the unsubscribe function if you need to clear it later

          _this24.unsubscribe = unsub;
        } else {
          throw new Error('Failed to generate requestID');
        }
      } catch (error) {
        console.error('Error in requestRideWithDriverDetails:', error);

        _this24.overlay.showAlert('Error in requestRideWithDriverDetails', 'An error occurred while requesting the ride.');
      }
    })();
  }

  showNoDriversAlert() {
    console.error('No valid driver available to book a ride.');
    this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
  }

  handleNoAvailableDriver() {
    var _this25 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Driver is not available, moving to next.');
      _this25.current_Request_Number++;

      if (_this25.hasValidDriver()) {
        yield _this25.BookRide();
      } else {
        _this25.showNoDriversAlert();
      }
    })();
  }

  requestNextDriver() {
    var _this26 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Requested Next Driver");
      _this26.current_Request_Number++;

      if (_this26.hasValidDriver()) {
        console.log("Continua");
        yield _this26.BookRide();
      } else {
        yield _this26.ReturnHome();

        _this26.showNoDriversAlert();
      }
    })();
  } // Make sure to clear the subscription when it's no longer needed


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
    var _this27 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = doc.data();

      if (!data) {
        console.error('No data found in the document.');
        return;
      }

      switch (data.status) {
        case 'cancelled':
          yield _this27.handleRideCancellation(data);
          break;

        case 'confirmed':
          yield _this27.handleRideConfirmation(doc);
          break;

        case 'started':
          yield _this27.handleRideStart(doc);
          break;

        case 'stopped':
          yield _this27.handleRideStop(doc);
          break;

        default:
          console.error('Unknown ride status:', data.status);
          break;
      }
    })();
  }

  handlePendingState() {
    var _this28 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("now pending");
      yield _this28.getDriverLocation(_this28.currentDriver.Driver_id); // Fetch the latest driver location

      console.log("This is the driver location: " + _this28.DriverLatLng);
      yield _this28.clearPrevMarkers();
      yield _this28.clearPolyline(_this28.newPoly);
      yield _this28.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this28.DriverLatLng
      });

      _this28.ngZone.run(() => {
        _this28.setMapHeightCreateAndAddMarkers();
      }); // Driver coming to the rider


      yield _this28.handleDriverToRider(_this28.DriverLatLng, _this28.LatLng);

      _this28.overlay.hideLoader();

      _this28.EnterSearchingStage();

      yield _this28.startCountdown(20, _this28.requestID);
    })();
  }

  presentCancelRideActionSheet() {
    var _this29 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this29.actionSheetController.create({
        header: 'Cancel Ride',
        buttons: [{
          text: 'Changed my mind',
          handler: () => {
            _this29.cancelRide('Changed my mind');
          }
        }, {
          text: 'Driver took too long',
          handler: () => {
            _this29.cancelRide('Driver took too long');
          }
        }, {
          text: 'Found another ride',
          handler: () => {
            _this29.cancelRide('Found another ride');
          }
        }, {
          text: 'Other',
          handler: () => {
            _this29.cancelRide('Other');
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
    var _this30 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)(_this30.firestore, 'Request', _this30.requestID);
        const rideSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.getDoc)(rideRef);
        const rideData = rideSnapshot.data();

        if (!rideData) {
          throw new Error('Ride data not found');
        } // Update the existing request


        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.updateDoc)(rideRef, {
          status: 'cancelled',
          cancellationReason: reason,
          canceledBy: 'rider'
        }); // Create a new document in the cancelledRides collection

        const cancelledRideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.collection)(_this30.firestore, 'CancelledRides'));
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.setDoc)(cancelledRideRef, { ...rideData,
          status: 'cancelled',
          cancellationReason: reason,
          canceledBy: 'rider',
          cancelledAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.serverTimestamp)(),
          originalRequestId: _this30.requestID
        });
        const toast = yield _this30.toastController.create({
          message: 'Ride has been cancelled.',
          duration: 2000
        });
        yield toast.present(); // Additional cleanup or state reset can be done here

        yield _this30.ClearRide();

        _this30.EnterBookingStage();
      } catch (error) {
        console.error('Error cancelling ride:', error);
        const errorToast = yield _this30.toastController.create({
          message: 'Error cancelling ride. Please try again.',
          duration: 3000,
          color: 'danger'
        });
        yield errorToast.present();
      }
    })();
  }

  handleRideCancellation(data) {
    var _this31 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this31.stopCountdown();

      yield _this31.clearPrevMarkers();

      _this31.unsubscribe();

      _this31.clearSubscriptions();

      if (_this31.drivers_Requested[_this31.current_Request_Number + 1] && !_this31.rideHasStarted) {
        _this31.current_Request_Number++;
        yield _this31.BookRide();
      } else {
        if (data.canceledBy == 'driver') {
          _this31.overlay.showAlert('Cancelled', 'Driver cancelled');
        }

        _this31.ClearRide();

        _this31.ReturnHome();
      }
    })();
  }

  handleRideStart(doc) {
    var _this32 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // alert('handleRideStart');
      yield _this32.clearPrevMarkers();
      yield _this32.clearPolyline(_this32.newPoly);
      _this32.currentDriver = doc.data();
      _this32.rideHasStarted = true;

      _this32.setMapHeightHandleDrivertoDestination();

      window.addEventListener('resize', _this32.setMapHeightHandleDrivertoDestination.bind(_this32));
      yield _this32.handleRiderToDestination(_this32.DriverLatLng, _this32.D_LatLng);
      _this32.canCheck = true;
      yield _this32.saveRideState(_this32.currentDriver);

      _this32.EnterDrivingToDestinationStage();
    })();
  }

  handleRideStop(doc) {
    var _this33 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this33.clearSubscriptions();

      _this33.unsubscribe();

      yield _this33.clearPrevMarkers();
      yield _this33.clearPolyline(_this33.newPoly);
      yield _this33.ReturnHome();
      yield _this33.database.createHistory(_this33.driverInfo);
    })();
  }

  handleRideConfirmation(doc) {
    var _this34 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this34.stopCountdown();

      console.log("trtryyrry rettete");
      yield _this34.clearPrevMarkers();
      yield _this34.clearPolyline(_this34.newPoly);
      _this34.DriverLatLng = {
        lat: _this34.driverLocation.lat,
        lng: _this34.driverLocation.lng
      };
      console.log(_this34.DriverLatLng); // Set map height before calculating zoom level

      _this34.setMapHeightHandleDrivertoRider();

      window.addEventListener('resize', _this34.setMapHeightHandleDrivertoRider.bind(_this34));
      yield _this34.handleDriverToRider(_this34.DriverLatLng, _this34.LatLng);

      _this34.EnterTrackingStage();
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
    var _this35 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      alert(_this35.requestID);
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_3__.EnrouteChatComponent,
        componentProps: {
          userId: _this35.requestID,
          message: ""
        },
        swipeToClose: true
      };
      const modal = yield _this35.modalCtrl.create(options);
      return yield modal.present();
    })();
  }

  startCountdown(initialTime, requestId) {
    var _this36 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this36.countdownActive = true;
      let timeRemaining = initialTime;

      const updateCountdown = /*#__PURE__*/function () {
        var _ref8 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!_this36.countdownActive) {
            console.log('Countdown stopped');
            return;
          }

          if (timeRemaining > 0) {
            try {
              yield _this36.database.UpdateCountDown(timeRemaining, requestId);
              timeRemaining--;
              setTimeout(updateCountdown, 1000);
            } catch (error) {
              console.error('Error updating countdown:', error); // Retry after a short delay

              setTimeout(updateCountdown, 2000);
            }
          } else {
            yield _this36.handleCountdownEnd(requestId);
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
    var _this37 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Implement a grace period to account for any delays
        setTimeout( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this37.clearPrevMarkers();
          yield _this37.requestNextDriver();
        }), 5000); // 5-second grace period
      } catch (error) {
        console.error('Error handling countdown end:', error); // Optionally, retry the operation or notify the user
      }
    })();
  }

  stopCountdown() {
    this.countdownActive = false;
  }

  goBackToAutoComplete() {
    var _this38 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this38.stopPolling = false;

        _this38.EnterAutoCompleteStage(); // Enable current location and set the camera to the initial position


        yield _this38.map.newMap.enableCurrentLocation(true);
        yield _this38.ResetState();
        yield _this38.showAutocompleteModal();
        console.log('Game state reset successfully');
      } catch (error) {
        console.error('Error resetting game state:', error);
      }
    })();
  }

  clearPrevMarkers() {
    var _this39 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear other markers
        if (_this39.rider_marker) {
          yield _this39.clearMarker(_this39.rider_marker);
          _this39.rider_marker = null;
        } // Clear other markers


        if (_this39.driver_marker) {
          yield _this39.clearMarker(_this39.driver_marker);
          _this39.driver_marker = null;
        } // Clear other markers


        if (_this39.destinationMarker) {
          yield _this39.clearMarker(_this39.destinationMarker);
          _this39.destinationMarker = null;
        } // Clear other markers


        if (_this39.marker1) {
          yield _this39.clearMarker(_this39.marker1);
          _this39.marker1 = null;
        }

        if (_this39.marker2) {
          yield _this39.clearMarker(_this39.marker2);
          _this39.marker2 = null;
        } // Clear animated marker


        if (_this39.animatedMarker) {
          yield _this39.clearMarker(_this39.animatedMarker);
          _this39.animatedMarker = null;
        }

        if (_this39.routeUpdateSubscription) {
          _this39.routeUpdateSubscription.unsubscribe();
        }
      } catch (e) {
        console.error('Error clearing markers:', e);
      }
    })();
  }

  clearMarker(marker) {
    var _this40 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (marker) {
        try {
          yield _this40.map.newMap.removeMarker(marker);
          console.log("Marker was cleared!");
        } catch (error) {
          console.error('Error clearing marker:', error);
        }
      }
    })();
  }

  clearPolyline(polyline) {
    var _this41 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (polyline) {
        try {
          yield _this41.map.newMap.removePolylines(polyline);
          console.log('Polyline cleared:', polyline);
          _this41.newPoly = null;
        } catch (error) {
          console.error('Error clearing polyline:', error);
        }
      } else {
        console.warn('No polyline to clear');
      }
    })();
  }

  clearAllPolylines() {
    var _this42 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this42.map.newMap.removePolylines([]);
        console.log('All polylines cleared');
        _this42.newPoly = null;
      } catch (error) {
        console.error('Error clearing all polylines:', error);
      }
    })();
  }

  ResetState() {
    var _this43 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear previous markers
        yield _this43.clearPrevMarkers(); // Clear any existing polylines

        yield _this43.clearPolyline(_this43.newPoly);
        yield _this43.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this43.LatLng
        });

        _this43.ResetMapHeight(); //window.addEventListener('resize', this.ResetMapHeight.bind(this));


        _this43.map.newMap.enableTouch(); // Ensure the map respects the boundaries of the top and bottom bars


        _this43.current_Request_Number = 0;
        _this43.price = null;
        _this43.actualDestination = null;
        _this43.D_LatLng = {
          lat: null,
          lng: null
        };
        _this43.destinationAddress = 'Unknown location';
        yield _this43.map.newMap.enableCurrentLocation(true);
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  showAutocompleteModal() {
    var _this44 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AutocompleteComponent,
        componentProps: {
          LatLng: _this44.LatLng,
          locationAddress: _this44.locationAddress
        },
        swipeToClose: true
      };
      const modal = yield _this44.modalCtrl.create(options);
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      console.log('Modal dismissed with data:', data);
      _this44.data = data;

      if (data.pinOnMap) {
        _this44.EnterMapPinStage();

        _this44.mapPinDrag = true;
        _this44.stopPolling = true;
      }

      if (data.home) {
        console.log("Entering Booking Stage...");

        _this44.EnterBookingStage();

        _this44.stopPolling = false;
      }

      if (data.searching) {
        _this44.database.AddKnownPlace(data);

        _this44.destinationAddress = data.full;
        _this44.actualDestination = data.whole.full;

        try {
          const latLng = yield _this44.geocode.getLatLng(data.whole.description).toPromise();
          _this44.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          console.log("Destination LatLng:", _this44.D_LatLng);
          yield _this44.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this44.overlay.showAlert('Error in geocoding:', error.message);
        }
      }
    })();
  }

  RequestRide(dat) {
    var _this45 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this45.NoDrivers) {
        _this45.destinationAddress = dat.place.full;
        _this45.actualDestination = dat.place.whole.full;

        try {
          const latLng = yield _this45.geocode.getLatLng(dat.place.whole.description).toPromise();
          _this45.D_LatLng = {
            lat: latLng.results[0].geometry.location.lat,
            lng: latLng.results[0].geometry.location.lng
          };
          yield _this45.getDistanceAndDirections();
        } catch (error) {
          console.error("Error in geocoding:", error);

          _this45.overlay.showAlert('Check Your Network', error.message);
        }
      } else {
        _this45.EnterNoDriverStage();

        console.log("No drivers available");
      }
    })();
  }

  getDistanceAndDirections() {
    var _this46 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirections called");
      _this46.duration = null;
      yield _this46.clearMarkers();

      _this46.cleanupListeners();

      _this46.stopPolling = true;

      if (_this46.D_LatLng && _this46.D_LatLng.lat) {
        console.log("D_LatLng is set:", _this46.D_LatLng);

        if (!_this46.NoDrivers) {
          _this46.EnterConfirmStage();
        } else {
          _this46.EnterNoDriverStage();

          console.log("No drivers available");
          return;
        }

        const origin1 = new google.maps.LatLng(_this46.LatLng.lat, _this46.LatLng.lng);
        const origin2 = new google.maps.LatLng(_this46.D_LatLng.lat, _this46.D_LatLng.lng);
        const request = {
          origin: origin1,
          destination: origin2,
          travelMode: google.maps.TravelMode.DRIVING
        };

        _this46.geocode.directions.route(request, /*#__PURE__*/function () {
          var _ref10 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
            if (status === 'OK') {
              _this46.direction = response;
              _this46.distance = response.routes[0].legs[0].distance.value;
              _this46.bounds = response.routes[0].bounds;
              _this46.price = yield _this46.database.getPriceEstimate(_this46.distance);
              _this46.duration = response.routes[0].legs[0].duration.text;
              yield _this46.createAndAddMarkers(_this46.LatLng, _this46.D_LatLng); // Call getDistanceAndDirectionsDriver after this part is successful

              yield _this46.getDistanceAndDirectionsDriver();
            } else {
              console.error('Direction ERROR:', response);

              _this46.overlay.showAlert('Check Your Network', JSON.stringify(response));
            }
          });

          return function (_x3, _x4) {
            return _ref10.apply(this, arguments);
          };
        }());
      } else {
        _this46.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');

        console.error('D_LatLng or D_LatLng.lat is undefined');
      }
    })();
  }

  getDistanceAndDirectionsDriver() {
    var _this47 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("getDistanceAndDirectionsDriver called");

      if (!_this47.NoDrivers) {
        console.log("Driver LatLng:", _this47.DriverLatLng);

        if (_this47.DriverLatLng) {
          const origin1 = new google.maps.LatLng(_this47.LatLng.lat, _this47.LatLng.lng);
          const origin2 = new google.maps.LatLng(_this47.DriverLatLng.lat, _this47.DriverLatLng.lng);
          const request = {
            origin: origin1,
            destination: origin2,
            travelMode: google.maps.TravelMode.DRIVING
          };

          _this47.geocode.directions.route(request, (response, status) => {
            if (status === 'OK') {
              _this47.D_duration = response.routes[0].legs[0].duration.text;
              console.log("Driver duration:", _this47.D_duration);
            } else {
              console.error('Direction ERROR:', response);

              _this47.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
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
    var _this48 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this48.LatLng);
      yield _this48.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this48.LatLng
      });
      _this48.showResetLocationButton = false;
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
    var _this49 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Elements to update car markers:', elements);
      const bounds = new google.maps.LatLngBounds(); // Create a map of driver IDs to driver elements for quick lookup

      const driverMap = new Map(elements.map(element => [element.Driver_id, element])); // Track markers to keep and update

      const updatedMarkers = []; // Remove markers that are not needed and update positions

      for (const {
        id,
        marker
      } of _this49._carmarkers) {
        const driver = driverMap.get(id);

        if (!driver || !driver.onlineState) {
          console.log(`Removing marker for driver ID: ${id}`); //await this.map.newMap.removeMarker(marker); // Remove the marker from the map
        } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
          const latlng = {
            lat: driver.Driver_lat,
            lng: driver.Driver_lng
          }; // Remove old marker and add a new one with updated position
          // await this.map.newMap.removeMarker(marker);
          // const newMarker = await this.map.newMap.addMarker({
          //   coordinate: latlng,
          //   iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
          //   title: 'Driver',
          //   iconSize: { width: 30, height: 30 }
          // });
          // updatedMarkers.push({ id, marker: newMarker });

          bounds.extend(latlng);
          console.log(`Updated marker for driver ID: ${id}`);
        } else {
          console.error('Invalid driver coordinates:', driver);
        }
      } // Add new markers for drivers that are online and not in the existing markers


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

            try {// const marker = await this.map.newMap.addMarker({
              //   coordinate: latlng,
              //   iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
              //   title: 'Driver',
              //   iconSize: { width: 30, height: 30 }
              // });
              // if (marker) {
              //   updatedMarkers.push({ id: element.Driver_id, marker });
              //   bounds.extend(latlng);
              // }
            } catch (error) {
              console.error('Error adding marker:', error);
            }
          }
        }
      } // Update the _carmarkers array with the updated markers


      _this49._carmarkers = updatedMarkers; // Center the map around the car markers if there are any markers

      if (updatedMarkers.length > 0) {
        const mapDim = {
          height: _this49.mapRef.nativeElement.offsetHeight,
          width: _this49.mapRef.nativeElement.offsetWidth
        };
        const minZoom = 5; // Define your minimum zoom level

        const maxZoom = 18; // Define your maximum zoom level

        let zoomLevel = yield _this49.map.getBoundsZoomLevel(bounds, mapDim); // Constrain the zoom level within the min and max range

        zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
        console.log('Setting camera with zoom level:', zoomLevel);
        yield _this49.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: zoomLevel,
          coordinate: bounds.getCenter()
        });

        _this49.map.newMap.fitBounds(bounds);
      } else {
        console.log('No markers to display on the map.');
      }
    })();
  }

  GoHome() {
    var _this50 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this50.map.newMap.enableCurrentLocation(true);
      _this50.current_Request_Number = 0;
      _this50.stopPolling = false;
      _this50.price = null;

      _this50.EnterBookingStage();

      yield _this50.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this50.LatLng
      });
    })();
  }

  GotoSupport() {
    var _this51 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this51.nav.navigateForward('support');
    })();
  }

  ReturnHome() {
    var _this52 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this52.ResetState();

      _this52.EnterBookingStage();

      _this52.stopPolling = false;
      yield _this52.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this52.LatLng
      });
    })();
  }

  CancelRide() {
    var _this53 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this53.overlay.showLoader('Please Wait..');

      yield _this53.clearPrevMarkers(); // Clear any existing polylines

      yield _this53.clearPolyline(_this53.newPoly);

      _this53.unsubscribe();

      _this53.numCalls.unsubscribe();

      _this53.riderCleared = true;
      yield _this53.database.cancelRide(_this53.requestID);
      yield _this53.map.newMap.enableCurrentLocation(true);
      _this53.current_Request_Number = 0;
      _this53.price = null;

      _this53.EnterBookingStage();

      _this53.overlay.hideLoader();

      yield _this53.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this53.LatLng
      });
    })();
  }

  ClearRide() {
    var _this54 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this54.EnterBookingStage();

      _this54.clearPrevMarkers(); // Ensure the polyline is cleared


      console.log("should clear");
      yield _this54.clearPolyline(_this54.newPoly);
      _this54.newPoly = null; // Reset polyline reference

      yield _this54.map.newMap.enableCurrentLocation(true);
      _this54.current_Request_Number = 0;
      _this54.price = null;
      yield _this54.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this54.LatLng,
        bearing: 0
      });
    })();
  }

  CallDriver() {// Implement CallDriver logic

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  handleDriverToRider(driverLatLng, riderLatLng) {
    var _this55 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        const driverMarker = yield _this55.map.newMap.addMarker({
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
        _this55.driver_marker = driverMarker; // Add rider marker at the destination position

        const riderMarker = yield _this55.map.newMap.addMarker({
          coordinate: riderLatLng,
          iconUrl: _this55.database.user.photoURL,
          title: 'Rider',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 2,
            y: 0
          }
        });
        _this55.rider_marker = riderMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref11 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: riderLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this55.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref12 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this55.duration = response.routes[0].legs[0].duration.text;
                  _this55.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this55.duration}, Distance: ${_this55.distance}`);
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

                  const center = _this55.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
                  const availableHeight = _this55.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this55.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this55.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

                  yield _this55.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this55.map.calculateBearing(driverLatLng, riderLatLng)); // Update polyline for the route
                  // Update polyline for the route

                  if (_this55.newPoly) {
                    yield _this55.clearPolyline(_this55.newPoly);
                  }

                  yield _this55.addPolyline(driverLatLng, riderLatLng); // Animate the driver marker along the path to the rider

                  yield _this55.animateMarker(_this55.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this55.overlay.showAlert('Direction ERROR', JSON.stringify(response));
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
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.interval)(_this55.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this55.routeUpdateSubscription = routeUpdate$.subscribe(); // Cleanup subscription when the component or context is destroyed
        // Call routeUpdateSubscription.unsubscribe() when needed
      } catch (error) {
        console.error('Error handling driver to rider:', error);
      }
    })();
  }

  handleRiderToDestination(driverLatLng, destinationLatLng) {
    var _this56 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        const driverMarker = yield _this56.map.newMap.addMarker({
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
        _this56.driver_marker = driverMarker; // Add destination marker

        const destinationMarker = yield _this56.map.newMap.addMarker({
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
        _this56.destinationMarker = destinationMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref13 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: destinationLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this56.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref14 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  }));
                  _this56.duration = response.routes[0].legs[0].duration.text;
                  _this56.distance = response.routes[0].legs[0].distance.text;
                  console.log(`Duration: ${_this56.duration}, Distance: ${_this56.distance}`);
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

                  const center = _this56.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
                  const availableHeight = _this56.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this56.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this56.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
                  // Set the camera to focus on the center point with appropriate zoom leve

                  yield _this56.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this56.map.calculateBearing(driverLatLng, destinationLatLng)); // Update polyline for the route

                  if (_this56.newPoly) {
                    yield _this56.clearPolyline(_this56.newPoly);
                  }

                  yield _this56.addPolyline(driverLatLng, destinationLatLng); // Animate the driver marker along the path to the destination

                  yield _this56.animateMarker(_this56.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this56.overlay.showAlert('Direction ERROR', JSON.stringify(response));
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
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.interval)(_this56.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this56.routeUpdateSubscription = routeUpdate$.subscribe(); // Cleanup subscription when the component or context is destroyed
        // Call routeUpdateSubscription.unsubscribe() when needed
      } catch (error) {
        console.error('Error handling rider to destination:', error);
      }
    })();
  }

  addPolyline(loc, des) {
    var _this57 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        const addedPolylines = yield _this57.map.newMap.addPolylines(polylines);

        if (Array.isArray(addedPolylines) && addedPolylines.length > 0) {
          _this57.newPoly = addedPolylines; // Change to assign the entire array

          console.log('Polylines added:', _this57.newPoly);
          return _this57.newPoly;
        } else {
          throw new Error('Failed to add polyline: Unexpected response format');
        }
      } catch (e) {
        console.error('Error Adding Polyline: ', e);
        throw e; // Re-throw the error to be handled by the caller
      }
    })();
  }

  createAndAddMarkers(loc, des) {
    var _this58 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      try {
        _this58.map.newMap.disableTouch(); // Add start marker


        _this58.marker1 = yield _this58.map.newMap.addMarker({
          coordinate: loc,
          iconUrl: 'assets/icon/point.png',
          title: 'Start',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Add destination marker

        _this58.marker2 = yield _this58.map.newMap.addMarker({
          coordinate: des,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Calculate the center point between the start and destination

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

        const center = _this58.map.calculateCenter(locs); // Calculate the bounds


        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        bounds.extend(new google.maps.LatLng(des.lat, des.lng)); // Set map height before calculating zoom level

        _this58.setMapHeight();

        const availableHeight = _this58.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

        const mapDim = {
          height: availableHeight,
          width: _this58.mapRef.nativeElement.offsetWidth
        }; // Calculate zoom level

        const zoomLevel = _this58.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


        const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
        // Set the camera to focus on the center point with appropriate zoom level

        yield _this58.map.setCameraToLocation({
          lat: center.latitude,
          lng: center.longitude
        }, adjustedZoomLevel, _this58.map.calculateBearing(loc, des)); // Add polyline for the route

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
        }]; // Add polyline to the map

        _this58.newPoly = yield _this58.map.newMap.addPolylines(polylines);
      } catch (error) {
        console.error('Error creating and adding markers:', error);
      }
    })();
  }

  animateMarker(marker, path, iconUrl) {
    var _this59 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 50,
        height: 50
      };
      const iconAnchor = {
        x: 25,
        y: 50
      }; // Center bottom of the icon

      for (let i = 0; i < path.length; i++) {
        yield _this59.map.newMap.removeMarker(marker);
        const coordinate = path[i] instanceof google.maps.LatLng ? {
          lat: path[i].lat(),
          lng: path[i].lng()
        } : {
          lat: path[i].lat,
          lng: path[i].lng
        };
        marker = yield _this59.map.newMap.addMarker({
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
      } // Store the last position of the animated marker


      _this59.animatedMarker = marker;
    })();
  }

  ShowDriverInfoPop() {
    var _this60 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this60.alert.create({
        header: 'Driver Information',
        message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${_this60.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${_this60.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${_this60.driver_duration_apart} minutes</p>
       
        <p><strong>Number of Seats:</strong> ${_this60.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${_this60.DriverLatLng.lat}, ${_this60.DriverLatLng.lng})</p>
      </div>
    `,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  } // State management methods


  EnterBookingStage() {
    this.setStage('bookingStage');
    this.ResetState();
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

  EnterAutoCompleteStage() {
    this.setStage('autocompleteStage');
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
      autocompleteStage: false,
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
    this.autocompleteStage = stages.autocompleteStage;
    this.drivingToDestinationStage = stages.drivingToDestinationStage;
  }

  oneSignal() {
    var _this61 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this61.onesignal.OneSignalIOSPermission();
      } catch (e) {
        console.log(e);
      }
    })();
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_network_service__WEBPACK_IMPORTED_MODULE_8__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_9__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_10__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_geocode_service__WEBPACK_IMPORTED_MODULE_11__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_12__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_13__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_one_signal_service__WEBPACK_IMPORTED_MODULE_14__.OnesignalService));
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
  decls: 31,
  vars: 20,
  consts: [[1, "ion-no-border", 3, "translucent"], ["topBar", ""], ["class", "ion-padding", 4, "ngIf"], ["lines", "none", "color", "light", "class", "main-buttons ion-no-padding", "class", "top_bar", 3, "click", 4, "ngIf"], ["lines", "none", "color", "light", "class", "main-buttons ion-no-padding", "class", "top_bar", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 4, "ngIf"], ["vertical", "top", "horizontal", "end", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "top: 35px;", 3, "click", 4, "ngIf"], ["scroll-y", "false", 3, "fullscreen"], ["map", ""], ["vertical", "bottom", "horizontal", "end", "style", "bottom: 130px;", 4, "ngIf"], ["class", "centerPin", "vertical", "center", "horizontal", "center", 4, "ngIf"], ["bottomBar", ""], ["class", "bottomItems shadow-top", "lines", "full", 4, "ngIf"], ["lines", "full", 1, "bottomItems", "shadow-top", 3, "hidden"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["class", "bottomItems shadow-top", "lines", "none", 4, "ngIf"], [1, "ion-padding"], ["slot", "start"], ["shape", "round", 3, "click"], ["slot", "icon-only", "name", "arrow-back", "color", "tertiary"], ["slot", "end"], ["fill", "outline", "color", "primary", "lines", "none", 1, "duration"], ["slot", "icon-only", "name", "flag", "color", "primary"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["lines", "none", "color", "light", 1, "top_bar", 3, "click"], ["slot", "start", "color", "primary", "name", "pencil"], ["lines", "none", "color", "light", 1, "top_bar"], ["slot", "start", "color", "primary", "name", "flag"], ["vertical", "top", "horizontal", "start", 2, "top", "35px"], ["color", "light"], ["vertical", "top", "horizontal", "end", 2, "top", "35px", 3, "click"], ["color", "primary", "name", "chatbubble-ellipses"], ["vertical", "top", "horizontal", "start", 2, "top", "35px", 3, "click"], ["name", "arrow-back", "color", "primary"], ["vertical", "bottom", "horizontal", "end", 2, "bottom", "130px"], ["color", "light", 3, "click"], ["name", "locate"], ["vertical", "center", "horizontal", "center", 1, "centerPin"], ["src", "../../assets/icon/pin.png"], ["lines", "full", 1, "bottomItems", "shadow-top"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "disabled", "click"], ["slot", "start", "name", "search", "color", "primary"], ["class", "bottomItems ion-margin", 3, "click", 4, "ngFor", "ngForOf"], [1, "bottomItems", "ion-margin", 3, "click"], ["name", "pin", "color", "primary", "slot", "start"], ["lines", "none", 1, "bottomItems", "shadow-top"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/No connection-pana.svg"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "arrow-back"], ["color", "light", 1, "payment"], [1, "ion-no-padding"], [1, "ion-align-items-center"], ["size", "auto"], ["src", "../../assets/icon/hatchback.png", 4, "ngIf"], [3, "animated", 4, "ngIf"], [3, "click"], [4, "ngIf"], ["size", "auto", 1, "price-column"], [1, "card"], [3, "value", "ionChange"], ["value", "cash"], [3, "value", 4, "ngFor", "ngForOf"], ["shape", "round", "color", "primary", "size", "large", "type", "submit", "expand", "block", 3, "click"], ["slot", "start", "name", "checkmark-sharp"], ["slot", "start", "name", "checkmark-sharp", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["src", "../../assets/icon/hatchback.png"], [3, "animated"], ["name", "information-circle", "color", "primary"], [2, "width", "70%", 3, "animated"], ["name", "time", "color", "primary"], ["name", "person", "color", "primary", 1, "ion-margin-start"], [2, "width", "90%", 3, "animated"], [2, "width", "60px", 3, "animated"], [2, "width", "40px", 3, "animated"], [3, "value"], ["color", "light", "type", "indeterminate"], [3, "src"], ["fill", "outline", "shape", "round", "color", "danger", "size", "small", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "slot", "icon-only", "name", "close-sharp", "color", "danger"], ["color", "primary", "type", "indeterminate", 1, "ion-padding"], [1, "ion-margin-bottom"], [1, "ion-text-center"], [1, "card", "ion-padding"], ["lines", "none"], ["lines", "none", 1, "ion-margin-top"], ["color", "warning", "name", "star"], ["color", "primary", "slot", "start", 3, "name"], ["slot", "end", 1, "price"], [1, "ion-margin-top"], ["value", "first"], ["slot", "header"], ["slot", "content", 1, "ion-padding"], ["expand", "block", 3, "click"], ["slot", "start", "name", "call"], ["slot", "start", "name", "chatbubbles"], ["expand", "block", "color", "danger", 3, "click"], ["slot", "start", "name", "close"], [1, "price"], ["slot", "icon-only", "color", "secondary", "name", "star"], ["color", "primary", "slot", "icon-only", "name", "cash"], ["color", "primary", "slot", "icon-only", "name", "card"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header", 0)(1, "div", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HomePage_ion_toolbar_3_Template, 10, 1, "ion-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, HomePage_ion_item_4_Template, 4, 1, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, HomePage_ion_toolbar_5_Template, 7, 1, "ion-toolbar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HomePage_ion_item_6_Template, 4, 1, "ion-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, HomePage_ion_fab_7_Template, 3, 0, "ion-fab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, HomePage_ion_fab_8_Template, 3, 0, "ion-fab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, HomePage_ion_fab_9_Template, 3, 0, "ion-fab", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "ion-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "capacitor-google-maps", null, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, HomePage_ion_fab_13_Template, 3, 0, "ion-fab", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, HomePage_ion_fab_14_Template, 3, 0, "ion-fab", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "ion-footer", 0)(16, "div", null, 12)(18, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, HomePage_ion_list_19_Template, 7, 3, "ion-list", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "ion-list", 14)(21, "ion-item-group", 15)(22, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_22_listener() {
        return ctx.getDistanceAndDirections();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, HomePage_ion_list_26_Template, 9, 0, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, HomePage_ion_list_27_Template, 35, 15, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, HomePage_ion_list_28_Template, 15, 3, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, HomePage_ion_list_29_Template, 47, 10, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](30, HomePage_ion_list_30_Template, 34, 9, "ion-list", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.searchingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.mapPinStage);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.SelectValueAccessor],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100vh;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-bottom {\n  100% {\n    transform: translateY(50%);\n  }\n  0% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-bottom[_ngcontent-%COMP%] {\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.duration[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n  --background: var(--ion-color-light);\n  width: 100%;\n  max-width: 600px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n  --padding:0px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 3em;\n  color: var(--ion-color-dark);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  height: auto;\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: var(--ion-color-light);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  padding: 8px 6px;\n  display: flex;\n  align-items: center;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0 4px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 8px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  margin: 0;\n  line-height: 1.2;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 2px 0 0;\n  display: flex;\n  align-items: center;\n  line-height: 1;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 2px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price-column[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 8px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .price-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n}\n\n.accept[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  padding: 12px;\n}\n\n.unbook[_ngcontent-%COMP%] {\n  background: #0a602d;\n}\n\n.book[_ngcontent-%COMP%] {\n  background: var(--ion-color-success);\n}\n\n.center-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 20px 0;\n}\n\n.acceptTimer[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  color: aliceblue;\n  margin-right: auto;\n  background: var(--ion-color-danger);\n  padding: 12px;\n  border-radius: 100px;\n  border: 1.3px solid aliceblue;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pickMe[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-right: 150px;\n  align-items: right;\n  flex: 0.6;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n  animation-name: scale-down;\n  animation-duration: 0.35s;\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n  --background: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n}\n\n@media (max-width: 768px) {\n  .fallback[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .accept[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 10px;\n  }\n  .acceptTimer[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 10px;\n  }\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .main-buttons[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    width: 90%; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    --background: var(--ion-color-primary);\n  }\n  .price[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .top_bar[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .shadow-top[_ngcontent-%COMP%] {\n    animation-duration: 0.8s;\n  }\n}\n\n@keyframes scale-down {\n  0% {\n    transform: scale(2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU9OSUMlMjBQUk9KRUNUU1xcbXlSaWRlci0yMDI0MDUyNFQwNDA1MDVaLTAwMVxcbXlSaWRlclxcc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDJCQUFBO0VDQ0Y7RURDQTtJQUNFLHlCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsMEJBQUE7RUNBRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0Usc0VBQUE7QUNERjs7QURJQTtFQUNFLG1FQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UscUNBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0FDREY7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNESjs7QURHSTtFQUNFLGlCQUFBO0FDRE47O0FESUk7RUFDRSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRk47O0FES1E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0hWOztBRE9NO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0FDTFI7O0FET1E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQ0xWOztBRE9VO0VBQ0UsNEJBQUE7QUNMWjs7QURVTTtFQUNFLGdCQUFBO0VBQ04sYUFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEVVE7RUFDRSxXQUFBO0FDUlY7O0FEV1E7RUFDRSxtQkFBQTtBQ1RWOztBRFlRO0VBQ0UsY0FBQTtBQ1ZWOztBRGFRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1hWOztBRGNRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDWlY7O0FEZVE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNiVjs7QURlVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2JaOztBRGlCUTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNmVjs7QURpQlU7RUFDRSwrQkFBQTtBQ2ZaOztBRGtCVTtFQUNFLDhCQUFBO0FDaEJaOztBRHdCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxtQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxvQ0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDckJGOztBRHdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGOztBRHdCQTtFQUNFLGFBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsdURBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDckJGOztBRHdCQTtFQUNFLHNEQUFBO0VBQ0Esa0JBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsdURBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCRjs7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDdEJGOztBRHlCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUN0QkY7RUR5QkE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtFQ3ZCRjtFRDBCQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0VDeEJGO0VEMkJBO0lBQ0UsY0FBQTtFQ3pCRjtFRDRCQTtJQUNFLGdCQUFBO0lBQ0EsVUFBQSxFQUFBLCtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQ0FBQTtFQzFCRjtFRDhCQTtJQUNFLE9BQUE7RUM1QkY7RUQrQkE7SUFDRSx3QkFBQTtFQzdCRjtBQUNGOztBRGdDQTtFQUNFO0lBQ0UsbUJBQUE7RUM5QkY7RURnQ0E7SUFDRSxtQkFBQTtFQzlCRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FwYWNpdG9yLWdvb2dsZS1tYXBzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB9XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbi5zbGlkZS1ib3R0b20ge1xuICBhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuLnNsaWRlLXRvcCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG4uY2VudGVyUGluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgOTgsIDI1NSwgMC42MjUpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHVyYXRpb257XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICBpb24tcm93IHtcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgaW9uLWZhYiB7XG4gICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgIC0tcGFkZGluZzowcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBheW1lbnQge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wYXltZW50IHtcbiAgICAgICAgcGFkZGluZzogOHB4IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbjogMnB4IDAgMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAucHJpY2UtY29sdW1uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICBcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWNjZXB0IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLnVuYm9vayB7XG4gIGJhY2tncm91bmQ6ICMwYTYwMmQ7XG59XG5cbi5ib29rIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uY2VudGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uYWNjZXB0VGltZXIge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCBhbGljZWJsdWU7XG59XG5cbi5jZW50ZXJFbGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWNrTWUge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ucHJpY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG4gIGZsZXg6IDAuNjtcbn1cblxuLnNoYWRvdy10b3Age1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xuICBhbmltYXRpb24tbmFtZTogc2NhbGUtZG93bjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjM1cztcbn1cblxuLnRvcF9iYXIge1xuICBib3gtc2hhZG93OiAwcHggMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufVxuXG4ubWFpbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmFsbGJhY2sge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmFsbGJhY2sge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLmFjY2VwdCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5hY2NlcHRUaW1lciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5tYWluLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAubWFpbi1idXR0b25zIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIHdpZHRoOiA5MCU7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG5cbiAgLnByaWNlIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnRvcF9iYXIsIC5jYXJkLCAuc2hhZG93LXRvcCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsImNhcGFjaXRvci1nb29nbGUtbWFwcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbi5zbGlkZS1ib3R0b20ge1xuICBhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4uc2xpZGUtdG9wIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLmNlbnRlclBpbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDk4LCAyNTUsIDAuNjI1KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmR1cmF0aW9uIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWZvb3RlciBpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tZmFiIHtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIC0tcGFkZGluZzowcHg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgLnBheW1lbnQge1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCAucGF5bWVudCBpb24taXRlbSB7XG4gIGhlaWdodDogYXV0bztcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgLnBheW1lbnQgaW9uLWl0ZW0gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgLnBheW1lbnQge1xuICBwYWRkaW5nOiA4cHggNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IGlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgLnBheW1lbnQgaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgLnBheW1lbnQgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgNHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IGlvbi1hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCAucGF5bWVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCAucGF5bWVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJweCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IHAgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IC5wcmljZS1jb2x1bW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IC5wcmljZS1jb2x1bW4gaDIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5wYXltZW50IC5wcmljZS1jb2x1bW4gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmFjY2VwdCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi51bmJvb2sge1xuICBiYWNrZ3JvdW5kOiAjMGE2MDJkO1xufVxuXG4uYm9vayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmNlbnRlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmFjY2VwdFRpbWVyIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlcjogMS4zcHggc29saWQgYWxpY2VibHVlO1xufVxuXG4uY2VudGVyRWxlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGlja01lIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICBmbGV4OiAwLjY7XG59XG5cbi5zaGFkb3ctdG9wIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbiAgYW5pbWF0aW9uLW5hbWU6IHNjYWxlLWRvd247XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zNXM7XG59XG5cbi50b3BfYmFyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbn1cblxuLm1haW4tYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG4ucHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZhbGxiYWNrIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mYWxsYmFjayB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmFjY2VwdCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuYWNjZXB0VGltZXIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLm1haW4tYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICAubWFpbi1idXR0b25zIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIHdpZHRoOiA5MCU7IC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgLnByaWNlIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC50b3BfYmFyLCAuY2FyZCwgLnNoYWRvdy10b3Age1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcbiAgfVxufVxuQGtleWZyYW1lcyBzY2FsZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */"]
});

/***/ }),

/***/ 8126:
/*!***************************************!*\
  !*** ./src/app/one-signal.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnesignalService": () => (/* binding */ OnesignalService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onesignal-cordova-plugin */ 182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ 4678);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);










class OnesignalService {
  constructor(alertCtrl, http) {
    this.alertCtrl = alertCtrl;
    this.http = http;
  }

  OneSignalInit() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Uncomment to set OneSignal device logging to VERBOSE
      //OneSignal.Debug.setLogLevel(6);
      // Uncomment to set OneSignal visual logging to VERBOSE
      // OneSignal.Debug.setAlertLevel(6);
      // NOTE: Update the init value below with your OneSignal AppId.
      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().initialize(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.onesignal.appId);
      _this.playerID = yield onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().User.getExternalId();
      alert(_this.playerID);

      let myClickListener = /*#__PURE__*/function () {
        var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          let notificationData = JSON.stringify(event);
          console.log('notification data: ', notificationData);
        });

        return function myClickListener(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().Notifications.addEventListener('click', myClickListener);
    })();
  } // onesignal notification permission


  OneSignalIOSPermission() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
          const ios_permission = yield onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().Notifications.permissionNative();

          if (ios_permission != onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__.OSNotificationPermission.Authorized) {
            _this2.OneSignalPermission();
          } else {
            _this2.requestPermission();
          }
        } else {
          // for android
          _this2.OneSignalPermission();
        }
      } catch (e) {
        console.log(e);
      }
    })();
  } // Call this function when your app starts


  OneSignalPermission(msg = '') {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hasPermission = onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().Notifications.hasPermission();
        console.log('hasPermission: ', hasPermission);

        if (!hasPermission) {
          // show prompt
          _this3.showAlert(msg);
        }
      } catch (e) {
        throw e;
      }
    })();
  }

  requestPermission() {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const permission = yield onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().Notifications.canRequestPermission();
        console.log('permission: ', permission);

        if (permission) {
          // Prompts the user for notification permissions.
          //    * Since this shows a generic native prompt,
          // we recommend instead using an In-App Message to prompt for notification
          // permission (See step 7) to better communicate to your users
          // what notifications they will get.
          const accepted = yield onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().Notifications.requestPermission(true);
          console.log('User accepted notifications: ' + accepted);
        } else {
          console.log('permission denied: ', permission);

          _this4.OneSignalPermission();
        }
      } catch (e) {
        throw e;
      }
    })();
  }

  showAlert(msg) {
    this.alertCtrl.create({
      header: `Allow Push Notifications${msg}`,
      message: 'Please allow us to send you notifications to get latest offers and order updates...',
      buttons: [{
        text: "Don't Allow",
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
          this.OneSignalPermission(" (It's mandatory)");
        }
      }, {
        text: 'Allow',
        handler: () => {
          this.requestPermission();
        }
      }]
    }).then(alertEl => alertEl.present());
  }

  sendNotification(msg, title, data = null, external_id) {
    // ... existing code ...
    let body = {
      app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.onesignal.appId,
      name: 'test',
      target_channel: "push",
      headings: {
        en: title
      },
      contents: {
        en: msg
      },
      android_channel_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.onesignal.android_channel_id,
      // small_icon: 'mipmap/ic_launcher_round',
      // large_icon: 'mipmap/ic_launcher_round',
      small_icon: 'mipmap/ic_notification',
      large_icon: 'mipmap/ic_notification_large',
      ios_sound: 'sound.wav',
      // filters: [
      //   {
      //     field: 'tag',
      //     key: 'type',
      //     relation: '=',
      //     value: 'user'
      //   },
      // ],
      //data: { notification_info: 'testing notification' }, //pass any object
      data: data // included_segments: ['Active Subscriptions', 'Total Subscriptions'],

    };

    if (external_id) {
      // specific device or deives
      body = { ...body,
        include_aliases: {
          external_id: external_id
        }
      };
    } else {
      body = { ...body,
        included_segments: ['Active Subscriptions', 'Total Subscriptions']
      };
    }

    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('accept', 'application/json').set('Content-Type', 'application/json').set('Authorization', `Basic ${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.onesignal.restApiKey}`);
    return this.http.post('https://onesignal.com/api/v1/notifications', body, {
      headers: headers
    }).pipe((0,rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Error sending notification:', error);
      alert('Failed to send notification. Please try again later.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }));
  }

}

OnesignalService.ɵfac = function OnesignalService_Factory(t) {
  return new (t || OnesignalService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

OnesignalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: OnesignalService,
  factory: OnesignalService.ɵfac,
  providedIn: 'root'
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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
  } // Convert the address to lat and lng


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
  } // Get the distance between the origin and destination


  getDirections(from, to) {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {// You can implement the directions request here using google.maps.DirectionsService
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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        console.log('Map created successfully');
        _this.LatLng = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude
        }; // Ensure map is ready before performing operations

        console.log('Map is initialized');
        yield _this.newMap.enableTrafficLayer(true);
        yield _this.newMap.enableCurrentLocation(true);
        yield _this.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        });
        const address = yield _this.getAddress(_this.LatLng.lat, _this.LatLng.lng); // Log the address response for debugging

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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  } // Add other necessary methods like getAddress here


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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  } // Add the addMarker method to the MapService class


  addMarker(lat, lng, title) {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();

      _this.networkStatus.next(status.connected);

      if (!status.connected) {
        _this.handleDisconnect();
      }
    })();
  }

  handleDisconnect() {
    console.log('Disconnected from network'); // Handle the UI or logic when the network is disconnected
  }

  handleReconnect() {
    console.log('Reconnected to network'); // Handle the UI or logic when the network is reconnected
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
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 1819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }

  contains(point) {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }

  extend(point) {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      } // small delay to allow for iOS WKWebView to setup corresponding element sub-scroll views ???


      yield new Promise((resolve, reject) => {
        setTimeout( /*#__PURE__*/(0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this8.id,
        markerIds: ids
      });
    })();
  }

  addPolygons(polygons) {
    var _this9 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this9.id,
        polygons
      });
      return res.ids;
    })();
  }

  addPolylines(polylines) {
    var _this10 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }

  removePolygons(ids) {
    var _this11 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }

  addCircles(circles) {
    var _this12 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }

  removeCircles(ids) {
    var _this13 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }

  removePolylines(ids) {
    var _this14 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }

  getMapType() {
    var _this17 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }

  fitBounds(bounds, padding) {
    var _this25 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.fitBounds({
        id: _this25.id,
        bounds,
        padding
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

/***/ 5331:
/*!**********************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/DebugNamespace.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LogLevel = void 0; // An enum that declares different types of log levels you can use with the OneSignal SDK, going from the least verbose (none) to verbose (print all comments).

var LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["None"] = 0] = "None";
  LogLevel[LogLevel["Fatal"] = 1] = "Fatal";
  LogLevel[LogLevel["Error"] = 2] = "Error";
  LogLevel[LogLevel["Warn"] = 3] = "Warn";
  LogLevel[LogLevel["Info"] = 4] = "Info";
  LogLevel[LogLevel["Debug"] = 5] = "Debug";
  LogLevel[LogLevel["Verbose"] = 6] = "Verbose";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

var Debug =
/** @class */
function () {
  function Debug() {}
  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   * @param  {LogLevel} logLevel - Sets the logging level to print to the Android LogCat log or Xcode log.
   * @returns void
   */


  Debug.prototype.setLogLevel = function (logLevel) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setLogLevel", [logLevel]);
  };

  ;
  /**
   * Enable logging to help debug if you run into an issue setting up OneSignal.
   * @param  {LogLevel} visualLogLevel - Sets the logging level to show as alert dialogs.
   * @returns void
   */

  Debug.prototype.setAlertLevel = function (visualLogLevel) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setAlertLevel", [visualLogLevel]);
  };

  return Debug;
}();

exports["default"] = Debug;

/***/ }),

/***/ 6614:
/*!******************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/InAppMessagesNamespace.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var InAppMessages =
/** @class */
function () {
  function InAppMessages() {
    this._inAppMessageClickListeners = [];
    this._willDisplayInAppMessageListeners = [];
    this._didDisplayInAppMessageListeners = [];
    this._willDismissInAppMessageListeners = [];
    this._didDismissInAppMessageListeners = [];
  }

  InAppMessages.prototype._processFunctionList = function (array, param) {
    for (var i = 0; i < array.length; i++) {
      array[i](param);
    }
  };
  /**
   * Add event listeners for In-App Message click and/or lifecycle events.
   * @param event
   * @param listener
   * @returns
   */


  InAppMessages.prototype.addEventListener = function (event, listener) {
    var _this = this;

    if (event === "click") {
      this._inAppMessageClickListeners.push(listener);

      var inAppMessageClickListener = function (json) {
        _this._processFunctionList(_this._inAppMessageClickListeners, json);
      };

      window.cordova.exec(inAppMessageClickListener, function () {}, "OneSignalPush", "setInAppMessageClickHandler", []);
    } else if (event === "willDisplay") {
      this._willDisplayInAppMessageListeners.push(listener);

      var willDisplayCallBackProcessor = function (event) {
        _this._processFunctionList(_this._willDisplayInAppMessageListeners, event);
      };

      window.cordova.exec(willDisplayCallBackProcessor, function () {}, "OneSignalPush", "setOnWillDisplayInAppMessageHandler", []);
    } else if (event === "didDisplay") {
      this._didDisplayInAppMessageListeners.push(listener);

      var didDisplayCallBackProcessor = function (event) {
        _this._processFunctionList(_this._didDisplayInAppMessageListeners, event);
      };

      window.cordova.exec(didDisplayCallBackProcessor, function () {}, "OneSignalPush", "setOnDidDisplayInAppMessageHandler", []);
    } else if (event === "willDismiss") {
      this._willDismissInAppMessageListeners.push(listener);

      var willDismissInAppMessageProcessor = function (event) {
        _this._processFunctionList(_this._willDismissInAppMessageListeners, event);
      };

      window.cordova.exec(willDismissInAppMessageProcessor, function () {}, "OneSignalPush", "setOnWillDismissInAppMessageHandler", []);
    } else if (event === "didDismiss") {
      this._didDismissInAppMessageListeners.push(listener);

      var didDismissInAppMessageCallBackProcessor = function (event) {
        _this._processFunctionList(_this._didDismissInAppMessageListeners, event);
      };

      window.cordova.exec(didDismissInAppMessageCallBackProcessor, function () {}, "OneSignalPush", "setOnDidDismissInAppMessageHandler", []);
    } else {
      return;
    }
  };
  /**
   * Remove event listeners for In-App Message click and/or lifecycle events.
   * @param event
   * @param listener
   * @returns
   */


  InAppMessages.prototype.removeEventListener = function (event, listener) {
    if (event === "click") {
      var index = this._inAppMessageClickListeners.indexOf(listener);

      if (index !== -1) {
        this._inAppMessageClickListeners.splice(index, 1);
      }
    } else {
      if (event === "willDisplay") {
        var index = this._willDisplayInAppMessageListeners.indexOf(listener);

        if (index !== -1) {
          this._willDisplayInAppMessageListeners.splice(index, 1);
        }
      } else if (event === "didDisplay") {
        var index = this._didDisplayInAppMessageListeners.indexOf(listener);

        if (index !== -1) {
          this._willDisplayInAppMessageListeners.splice(index, 1);
        }
      } else if (event === "willDismiss") {
        var index = this._willDismissInAppMessageListeners.indexOf(listener);

        if (index !== -1) {
          this._willDismissInAppMessageListeners.splice(index, 1);
        }
      } else if (event === "didDismiss") {
        var index = this._didDismissInAppMessageListeners.indexOf(listener);

        if (index !== -1) {
          this._didDismissInAppMessageListeners.splice(index, 1);
        }
      } else {
        return;
      }
    }
  };
  /**
   * Add a trigger for the current user. Triggers are currently explicitly used to determine whether a specific IAM should be displayed to the user.
   * @param  {string} key
   * @param  {string} value
   * @returns void
   */


  InAppMessages.prototype.addTrigger = function (key, value) {
    var _a;

    var obj = (_a = {}, _a[key] = value, _a);
    this.addTriggers(obj);
  };

  ;
  /**
   * Add multiple triggers for the current user. Triggers are currently explicitly used to determine whether a specific IAM should be displayed to the user.
   * @param  {[key: string]: string} triggers
   * @returns void
   */

  InAppMessages.prototype.addTriggers = function (triggers) {
    Object.keys(triggers).forEach(function (key) {
      // forces values to be string types
      if (typeof triggers[key] !== "string") {
        triggers[key] = JSON.stringify(triggers[key]);
      }
    });
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addTriggers", [triggers]);
  };

  ;
  /**
   * Remove the trigger with the provided key from the current user.
   * @param  {string} key
   * @returns void
   */

  InAppMessages.prototype.removeTrigger = function (key) {
    this.removeTriggers([key]);
  };

  ;
  /**
   * Remove multiple triggers from the current user.
   * @param  {string[]} keys
   * @returns void
   */

  InAppMessages.prototype.removeTriggers = function (keys) {
    if (!Array.isArray(keys)) {
      console.error("OneSignal: removeTriggers: argument must be of type Array");
    }

    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeTriggers", [keys]);
  };

  ;
  /**
   * Clear all triggers from the current user.
   * @returns void
   */

  InAppMessages.prototype.clearTriggers = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "clearTriggers");
  };
  /**
   * Set whether in-app messaging is currently paused.
   * When set to true no IAM will be presented to the user regardless of whether they qualify for them.
   * When set to 'false` any IAMs the user qualifies for will be presented to the user at the appropriate time.
   * @param  {boolean} pause
   * @returns void
   */


  InAppMessages.prototype.setPaused = function (pause) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setPaused", [pause]);
  };

  ;
  /**
   * Whether in-app messaging is currently paused.
   * @returns {Promise<boolean>}
   */

  InAppMessages.prototype.getPaused = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "isPaused", []);
    });
  };

  ;
  return InAppMessages;
}();

exports["default"] = InAppMessages;

/***/ }),

/***/ 5190:
/*!*******************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/LiveActivitiesNamespace.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var LiveActivities =
/** @class */
function () {
  function LiveActivities() {}
  /**
   * Enter a live activity
   * @param  {string} activityId
   * @param  {string} token
   * @param  {Function} onSuccess
   * @param  {Function} onFailure
   * @returns void
   */


  LiveActivities.prototype.enter = function (activityId, token, onSuccess, onFailure) {
    if (onSuccess == null) {
      onSuccess = function () {};
    }

    if (onFailure == null) {
      onFailure = function () {};
    }

    window.cordova.exec(onSuccess, onFailure, "OneSignalPush", "enterLiveActivity", [activityId, token]);
  };

  ;
  /**
   * Exit a live activity
   * @param  {string} activityId
   * @param  {Function} onSuccess
   * @param  {Function} onFailure
   * @returns void
   */

  LiveActivities.prototype.exit = function (activityId, onSuccess, onFailure) {
    if (onSuccess == null) {
      onSuccess = function () {};
    }

    if (onFailure == null) {
      onFailure = function () {};
    }

    window.cordova.exec(onSuccess, onFailure, "OneSignalPush", "exitLiveActivity", [activityId]);
  };

  ;
  /**
   * Indicate this device is capable of receiving pushToStart live activities for the
   * `activityType`. The `activityType` **must** be the name of the struct conforming
   * to `ActivityAttributes` that will be used to start the live activity.
   *
   * Only applies to iOS
   *
   * @param {string} activityType: The name of the specific `ActivityAttributes` structure tied
   * to the live activity.
   * @param {string} token: The activity type's pushToStart token.
   */

  LiveActivities.prototype.setPushToStartToken = function (activityType, token) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setPushToStartToken", [activityType, token]);
  };
  /**
   * Indicate this device is no longer capable of receiving pushToStart live activities
   * for the `activityType`. The `activityType` **must** be the name of the struct conforming
   * to `ActivityAttributes` that will be used to start the live activity.
   *
   * Only applies to iOS
   *
   * @param {string} activityType: The name of the specific `ActivityAttributes` structure tied
   * to the live activity.
   */


  LiveActivities.prototype.removePushToStartToken = function (activityType) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removePushToStartToken", [activityType]);
  };
  /**
   * Enable the OneSignalSDK to setup the default`DefaultLiveActivityAttributes` structure,
   * which conforms to the `OneSignalLiveActivityAttributes`. When using this function, the
   * widget attributes are owned by the OneSignal SDK, which will allow the SDK to handle the
   * entire lifecycle of the live activity.  All that is needed from an app-perspective is to
   * create a Live Activity widget in a widget extension, with a `ActivityConfiguration` for
   * `DefaultLiveActivityAttributes`. This is most useful for users that (1) only have one Live
   * Activity widget and (2) are using a cross-platform framework and do not want to create the
   * cross-platform <-> iOS native bindings to manage ActivityKit.
   *
   * Only applies to iOS
   *
   * @param {LiveActivitySetupOptions} options: An optional structure to provide for more granular setup options.
   */


  LiveActivities.prototype.setupDefault = function (options) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setupDefaultLiveActivity", [options]);
  };
  /**
   * Start a new LiveActivity that is modelled by the default`DefaultLiveActivityAttributes`
   * structure. The `DefaultLiveActivityAttributes` is initialized with the dynamic `attributes`
   * and `content` passed in.
   *
   * Only applies to iOS
   *
   * @param {string} activityId: The activity identifier the live activity on this device will be started
   * and eligible to receive updates for.
   * @param {object} attributes: A dynamic type containing the static attributes passed into `DefaultLiveActivityAttributes`.
   * @param {object} content: A dynamic type containing the content attributes passed into `DefaultLiveActivityAttributes`.
   */


  LiveActivities.prototype.startDefault = function (activityId, attributes, content) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "startDefaultLiveActivity", [activityId, attributes, content]);
  };

  return LiveActivities;
}();

exports["default"] = LiveActivities;

/***/ }),

/***/ 4991:
/*!*************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/LocationNamespace.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Location =
/** @class */
function () {
  function Location() {}
  /**
   * Location
   */

  /**
   * Prompts the user for location permissions to allow geotagging from the OneSignal dashboard.
   * @returns void
   */


  Location.prototype.requestPermission = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "requestLocationPermission", []);
  };

  ;
  /**
   * Disable or enable location collection (defaults to enabled if your app has location permission).
   * @param  {boolean} shared
   * @returns void
   */

  Location.prototype.setShared = function (shared) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setLocationShared", [shared]);
  };

  ;
  /**
   * Whether location is currently shared with OneSignal.
   * @returns {Promise<boolean>}
   */

  Location.prototype.isShared = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "isLocationShared", []);
    });
  };

  ;
  return Location;
}();

exports["default"] = Location;

/***/ }),

/***/ 8889:
/*!*********************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/NotificationReceivedEvent.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NotificationWillDisplayEvent = void 0;

var OSNotification_1 = __webpack_require__(/*! ./OSNotification */ 4599);

var NotificationWillDisplayEvent =
/** @class */
function () {
  function NotificationWillDisplayEvent(displayEvent) {
    this.notification = new OSNotification_1.OSNotification(displayEvent);
  }

  NotificationWillDisplayEvent.prototype.preventDefault = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "preventDefault", [this.notification.notificationId]);
    return;
  };

  NotificationWillDisplayEvent.prototype.getNotification = function () {
    return this.notification;
  };

  return NotificationWillDisplayEvent;
}();

exports.NotificationWillDisplayEvent = NotificationWillDisplayEvent;

/***/ }),

/***/ 2707:
/*!******************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/NotificationsNamespace.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OSNotificationPermission = void 0;

var NotificationReceivedEvent_1 = __webpack_require__(/*! ./NotificationReceivedEvent */ 8889);

var OSNotificationPermission;

(function (OSNotificationPermission) {
  OSNotificationPermission[OSNotificationPermission["NotDetermined"] = 0] = "NotDetermined";
  OSNotificationPermission[OSNotificationPermission["Denied"] = 1] = "Denied";
  OSNotificationPermission[OSNotificationPermission["Authorized"] = 2] = "Authorized";
  OSNotificationPermission[OSNotificationPermission["Provisional"] = 3] = "Provisional";
  OSNotificationPermission[OSNotificationPermission["Ephemeral"] = 4] = "Ephemeral";
})(OSNotificationPermission || (exports.OSNotificationPermission = OSNotificationPermission = {}));

var Notifications =
/** @class */
function () {
  function Notifications() {
    this._permissionObserverList = [];
    this._notificationClickedListeners = [];
    this._notificationWillDisplayListeners = [];
  }

  Notifications.prototype._processFunctionList = function (array, param) {
    for (var i = 0; i < array.length; i++) {
      array[i](param);
    }
  };
  /**
   * Sets initial permission value and adds observer for changes.
   * This internal method is kept to support the deprecated method {@link hasPermission}.
   */


  Notifications.prototype._setPropertyAndObserver = function () {
    var _this = this;

    var getPermissionCallback = function (granted) {
      _this._permission = granted;
    };

    window.cordova.exec(getPermissionCallback, function () {}, "OneSignalPush", "getPermissionInternal");
    this.addEventListener("permissionChange", function (result) {
      _this._permission = result;
    });
  };
  /**
   * @deprecated This method is deprecated. It has been replaced by {@link getPermissionAsync}.
   */


  Notifications.prototype.hasPermission = function () {
    return this._permission || false;
  };
  /**
   * Whether this app has push notification permission. Returns true if the user has accepted permissions,
   * or if the app has ephemeral or provisional permission.
   */


  Notifications.prototype.getPermissionAsync = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          window.cordova.exec(resolve, reject, "OneSignalPush", "getPermissionInternal");
        })];
      });
    });
  };
  /** iOS Only.
   * Returns the enum for the native permission of the device. It will be one of:
   * OSNotificationPermissionNotDetermined,
   * OSNotificationPermissionDenied,
   * OSNotificationPermissionAuthorized,
   * OSNotificationPermissionProvisional - only available in iOS 12,
   * OSNotificationPermissionEphemeral - only available in iOS 14
   *
   * @returns {Promise<OSNotificationPermission>}
   *
   * */


  Notifications.prototype.permissionNative = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "permissionNative", []);
    });
  };
  /**
   * Prompt the user for permission to receive push notifications. This will display the native system prompt to request push notification permission.
   * Use the fallbackToSettings parameter to prompt to open the settings app if a user has already declined push permissions.
   *
   *
   * @param  {boolean} fallbackToSettings
   * @returns {Promise<boolean>}
   */


  Notifications.prototype.requestPermission = function (fallbackToSettings) {
    var fallback = fallbackToSettings !== null && fallbackToSettings !== void 0 ? fallbackToSettings : false;
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "requestPermission", [fallback]);
    });
  };

  ;
  /**
   * Whether attempting to request notification permission will show a prompt. Returns true if the device has not been prompted for push notification permission already.
   * @returns {Promise<boolean>}
   */

  Notifications.prototype.canRequestPermission = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "canRequestPermission", []);
    });
  };

  ;
  /**
   * iOS Only
   */

  /**
   * Instead of having to prompt the user for permission to send them push notifications, your app can request provisional authorization.
   *
   * For more information: https://documentation.onesignal.com/docs/ios-customizations#provisional-push-notifications
   *
   * @param  {(response: boolean)=>void} handler
   * @returns void
   */

  Notifications.prototype.registerForProvisionalAuthorization = function (handler) {
    window.cordova.exec(handler, function () {}, "OneSignalPush", "registerForProvisionalAuthorization", []);
  };

  ;
  /**
   * Add listeners for notification events.
   * @param event
   * @param listener
   * @returns
   */

  Notifications.prototype.addEventListener = function (event, listener) {
    var _this = this;

    if (event === "click") {
      this._notificationClickedListeners.push(listener);

      var clickParsingHandler = function (json) {
        _this._processFunctionList(_this._notificationClickedListeners, json);
      };

      window.cordova.exec(clickParsingHandler, function () {}, "OneSignalPush", "addNotificationClickListener", []);
    } else if (event === "foregroundWillDisplay") {
      this._notificationWillDisplayListeners.push(listener);

      var foregroundParsingHandler = function (notification) {
        _this._notificationWillDisplayListeners.forEach(function (listener) {
          listener(new NotificationReceivedEvent_1.NotificationWillDisplayEvent(notification));
        });

        window.cordova.exec(function () {}, function () {}, "OneSignalPush", "proceedWithWillDisplay", [notification.notificationId]);
      };

      window.cordova.exec(foregroundParsingHandler, function () {}, "OneSignalPush", "addForegroundLifecycleListener", []);
    } else if (event === "permissionChange") {
      this._permissionObserverList.push(listener);

      var permissionCallBackProcessor = function (state) {
        _this._processFunctionList(_this._permissionObserverList, state);
      };

      window.cordova.exec(permissionCallBackProcessor, function () {}, "OneSignalPush", "addPermissionObserver", []);
    } else {
      return;
    }
  };
  /**
   * Remove listeners for notification events.
   * @param event
   * @param listener
   * @returns
   */


  Notifications.prototype.removeEventListener = function (event, listener) {
    if (event === "click") {
      var index = this._notificationClickedListeners.indexOf(listener);

      if (index !== -1) {
        this._notificationClickedListeners.splice(index, 1);
      }
    } else if (event === "foregroundWillDisplay") {
      var index = this._notificationWillDisplayListeners.indexOf(listener);

      if (index !== -1) {
        this._notificationWillDisplayListeners.splice(index, 1);
      }
    } else if (event === "permissionChange") {
      var index = this._permissionObserverList.indexOf(listener);

      if (index !== -1) {
        this._permissionObserverList.splice(index, 1);
      }
    } else {
      return;
    }
  };
  /**
   * Removes all OneSignal notifications.
   * @returns void
   */


  Notifications.prototype.clearAll = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "clearAllNotifications", []);
  };

  ;
  /**
   * Android Only
   */

  /**
   * Android only.
   * Cancels a single OneSignal notification based on its Android notification integer ID. Use instead of Android's [android.app.NotificationManager.cancel], otherwise the notification will be restored when your app is restarted.
   * @param  {number} id - notification id to cancel
   * @returns void
   */

  Notifications.prototype.removeNotification = function (id) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeNotification", [id]);
  };

  ;
  /**
   * Android only.
   * Cancels a group of OneSignal notifications with the provided group key. Grouping notifications is a OneSignal concept, there is no [android.app.NotificationManager] equivalent.
   * @param  {string} id - notification group id to cancel
   * @returns void
   */

  Notifications.prototype.removeGroupedNotifications = function (id) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeGroupedNotifications", [id]);
  };

  ;
  return Notifications;
}();

exports["default"] = Notifications;

/***/ }),

/***/ 4599:
/*!**********************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/OSNotification.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OSNotification = void 0;

var OSNotification =
/** @class */
function () {
  function OSNotification(receivedEvent) {
    /// The OneSignal notification ID for this notification
    this.notificationId = receivedEvent.notificationId; /// The body (should contain most of the text)

    this.body = receivedEvent.body; /// The title for the notification

    this.title = receivedEvent.title; /// Any additional custom data you want to send along
    /// with this notification.

    this.additionalData = receivedEvent.additionalData; /// A hashmap object representing the raw key/value
    /// properties of the push notification

    if (typeof receivedEvent.rawPayload === 'string') {
      this.rawPayload = JSON.parse(receivedEvent.rawPayload);
    } else {
      this.rawPayload = receivedEvent.rawPayload;
    } /// If set, the launch URL will be opened when the user
    /// taps on your push notification. You can control
    /// whether or not it opens in an in-app webview or
    /// in Safari (with iOS).


    this.launchURL = receivedEvent.launchURL; /// The sound file (ie. ping.aiff) that should be played
    /// when the notification is received

    this.sound = receivedEvent.sound; /// Any buttons you want to add to the notification.
    /// The notificationClick listener will provide an
    /// OSNotificationAction object, which will contain
    /// the ID of the Action the user tapped.

    if (receivedEvent.actionButtons) {
      this.actionButtons = receivedEvent.actionButtons;
    } // Android
    /// (Android only)
    /// All notifications with the same group key
    /// from the same app will be grouped together


    if (receivedEvent.groupKey) {
      this.groupKey = receivedEvent.groupKey;
    } /// (Android Only)
    /// The color to use to light up the LED (if
    /// applicable) when the notification is received
    /// Given in hex ARGB format.


    if (receivedEvent.ledColor) {
      this.ledColor = receivedEvent.ledColor;
    } /// (Android Only)
    /// The priority used with GCM/FCM to describe how
    /// urgent the notification is. A higher priority
    /// means the notification will be delivered faster.


    if (typeof receivedEvent.priority !== "undefined") {
      this.priority = receivedEvent.priority;
    } /// (Android Only)
    /// The filename of the image to use as the small
    /// icon for the notification


    if (receivedEvent.smallIcon) {
      this.smallIcon = receivedEvent.smallIcon;
    } /// (Android Only)
    /// The filename for the image to use as the large
    /// icon for the notification


    if (receivedEvent.largeIcon) {
      this.largeIcon = receivedEvent.largeIcon;
    } /// (Android Only)
    /// The URL or filename for the image to use as
    /// the big picture for the notification


    if (receivedEvent.bigPicture) {
      this.bigPicture = receivedEvent.bigPicture;
    } /// (Android Only)
    /// The collapse ID for the notification
    /// As opposed to groupKey (which causes stacking),
    /// the collapse ID will completely replace any
    /// previously received push notifications that
    /// use the same collapse_id


    if (receivedEvent.collapseId) {
      this.collapseId = receivedEvent.collapseId;
    } /// (Android only) Android 6 and earlier only
    /// The message to display when multiple
    /// notifications have been stacked together.
    /// Note: Android 7 allows groups (stacks)
    /// to be expanded, so group message is no
    /// longer necessary


    if (receivedEvent.groupMessage) {
      this.groupMessage = receivedEvent.groupMessage;
    } /// (Android Only)
    /// Tells you what project number/sender ID
    /// the notification was sent from


    if (receivedEvent.fromProjectNumber) {
      this.fromProjectNumber = receivedEvent.fromProjectNumber;
    } /// (Android Only)
    /// The accent color to use on the notification
    /// Hex value in ARGB format (it's a normal
    /// hex color value, but it includes the alpha
    /// channel in addition to red, green, blue)


    if (receivedEvent.smallIconAccentColor) {
      this.smallIconAccentColor = receivedEvent.smallIconAccentColor;
    } /// (Android only) API level 21+
    /// Sets the visibility of the notification
    ///  1 = Public (default)
    ///  0 = Private (hidden from lock screen
    ///    if user set 'Hide Sensitive content')
    ///  -1 = Secret (doesn't appear at all)


    if (receivedEvent.lockScreenVisibility) {
      this.lockScreenVisibility = receivedEvent.lockScreenVisibility;
    } /// (Android Only)
    /// The android notification ID (not same as  the OneSignal
    /// notification ID)


    if (receivedEvent.androidNotificationId) {
      this.androidNotificationId = receivedEvent.androidNotificationId;
    } /// (Android Only)
    /// Summary notifications grouped
    /// Notification payload will have the most recent notification received.


    if (receivedEvent.groupedNotifications && receivedEvent.groupedNotifications.length) {
      this.groupedNotifications = receivedEvent.groupedNotifications;
    } // iOS
    /// (iOS Only)
    /// If you set the badge to a specific value, this integer
    /// property will be that value


    if (receivedEvent.badge) {
      this.badge = receivedEvent.badge;
    } /// (iOS Only)
    /// The category for this notification. This can trigger custom
    /// behavior (ie. if this notification should display a
    /// custom Content Extension for custom UI)


    if (receivedEvent.category) {
      this.category = receivedEvent.category;
    } /// (iOS Only)
    /// iOS 10+ : Groups notifications into threads


    if (receivedEvent.threadId) {
      this.threadId = receivedEvent.threadId;
    } /// (iOS Only)
    /// The subtitle of the notification


    if (receivedEvent.subtitle) {
      this.subtitle = receivedEvent.subtitle;
    } /// If this notification was created from a Template on the
    /// OneSignal dashboard, this will be the ID of that template


    if (receivedEvent.templateId) {
      this.templateId = receivedEvent.templateId;
    } /// (iOS Only)
    /// Any attachments (images, sounds, videos) you want
    /// to display with this notification.


    if (receivedEvent.attachments) {
      this.attachments = receivedEvent.attachments;
    } /// The name of the template (if any) that was used to
    /// create this push notification


    if (receivedEvent.templateName) {
      this.templateName = receivedEvent.templateName;
    } /// (iOS Only)
    /// Tells the system to launch the Notification Extension Service


    if (receivedEvent.mutableContent) {
      this.mutableContent = receivedEvent.mutableContent;
    } /// (iOS Only)
    /// If you want to increment the badge by some value, this
    /// integer will be the increment/decrement


    if (receivedEvent.badgeIncrement) {
      this.badgeIncrement = receivedEvent.badgeIncrement;
    } /// (iOS Only)
    /// Tells the system to launch your app in the background (ie. if
    /// content is available to download in the background)


    if (receivedEvent.contentAvailable) {
      this.contentAvailable = receivedEvent.contentAvailable;
    } /// (iOS Only)
    /// value between 0 and 1 for sorting notifications in a notification summary


    if (receivedEvent.relevanceScore) {
      this.relevanceScore = receivedEvent.relevanceScore;
    } /// (iOS Only)
    /// The interruption level for the notification. This controls how the
    /// notification will be displayed to the user if they are using focus modes
    /// or notification summaries


    if (receivedEvent.interruptionLevel) {
      this.interruptionLevel = receivedEvent.interruptionLevel;
    }
  }
  /**
   * Display the notification.
   * @returns void
   */


  OSNotification.prototype.display = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "displayNotification", [this.notificationId]);
    return;
  };

  return OSNotification;
}();

exports.OSNotification = OSNotification;

/***/ }),

/***/ 3843:
/*!*********************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/PushSubscriptionNamespace.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var PushSubscription =
/** @class */
function () {
  function PushSubscription() {
    this._subscriptionObserverList = [];
  }

  PushSubscription.prototype._processFunctionList = function (array, param) {
    for (var i = 0; i < array.length; i++) {
      array[i](param);
    }
  };
  /**
   * Sets initial Push Subscription properties and adds observer for changes.
   * This internal method is kept to support the deprecated methods {@link id}, {@link token}, {@link optedIn}.
   */


  PushSubscription.prototype._setPropertiesAndObserver = function () {
    var _this = this;
    /**
     * Receive push Id
     * @param obj
     */


    var getIdCallback = function (id) {
      _this._id = id;
    };

    window.cordova.exec(getIdCallback, function () {}, "OneSignalPush", "getPushSubscriptionId");
    /**
     * Receive token
     * @param obj
     */

    var getTokenCallback = function (token) {
      _this._token = token;
    };

    window.cordova.exec(getTokenCallback, function () {}, "OneSignalPush", "getPushSubscriptionToken");
    /**
     * Receive opted-in status
     * @param granted
     */

    var getOptedInCallback = function (granted) {
      _this._optedIn = granted;
    };

    window.cordova.exec(getOptedInCallback, function () {}, "OneSignalPush", "getPushSubscriptionOptedIn");
    this.addEventListener("change", function (subscriptionChange) {
      _this._id = subscriptionChange.current.id;
      _this._token = subscriptionChange.current.token;
      _this._optedIn = subscriptionChange.current.optedIn;
    });
  };

  Object.defineProperty(PushSubscription.prototype, "id", {
    /**
     * @deprecated This method is deprecated. It has been replaced by {@link getIdAsync}.
     */
    get: function () {
      console.warn("OneSignal: This method has been deprecated. Use getIdAsync instead for getting push subscription id.");
      return this._id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PushSubscription.prototype, "token", {
    /**
     * @deprecated This method is deprecated. It has been replaced by {@link getTokenAsync}.
     */
    get: function () {
      console.warn("OneSignal: This method has been deprecated. Use getTokenAsync instead for getting push subscription token.");
      return this._token;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PushSubscription.prototype, "optedIn", {
    /**
     * @deprecated This method is deprecated. It has been replaced by {@link getOptedInAsync}.
     */
    get: function () {
      console.warn("OneSignal: This method has been deprecated. Use getOptedInAsync instead for getting push subscription opted in status.");
      return this._optedIn || false;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * The readonly push subscription ID.
   * @returns {Promise<string | null>}
   */

  PushSubscription.prototype.getIdAsync = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "getPushSubscriptionId");
    });
  };
  /**
   * The readonly push token.
   * @returns {Promise<string | null>}
   */


  PushSubscription.prototype.getTokenAsync = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "getPushSubscriptionToken");
    });
  };
  /**
   * Gets a boolean value indicating whether the current user is opted in to push notifications.
   * This returns true when the app has notifications permission and optOut() is NOT called.
   * Note: Does not take into account the existence of the subscription ID and push token.
   * This boolean may return true but push notifications may still not be received by the user.
   * @returns {Promise<boolean>}
   */


  PushSubscription.prototype.getOptedInAsync = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "getPushSubscriptionOptedIn");
    });
  };
  /**
   * Add a callback that fires when the OneSignal push subscription state changes.
   * @param  {(event: PushSubscriptionChangedState)=>void} listener
   * @returns void
   */


  PushSubscription.prototype.addEventListener = function (event, listener) {
    var _this = this;

    this._subscriptionObserverList.push(listener);

    var subscriptionCallBackProcessor = function (state) {
      _this._processFunctionList(_this._subscriptionObserverList, state);
    };

    window.cordova.exec(subscriptionCallBackProcessor, function () {}, "OneSignalPush", "addPushSubscriptionObserver", []);
  };
  /**
   * Remove a push subscription observer that has been previously added.
   * @param  {(event: PushSubscriptionChangedState)=>void} listener
   * @returns void
   */


  PushSubscription.prototype.removeEventListener = function (event, listener) {
    var index = this._subscriptionObserverList.indexOf(listener);

    if (index !== -1) {
      this._subscriptionObserverList.splice(index, 1);
    }
  };
  /**
   * Call this method to receive push notifications on the device or to resume receiving of push notifications after calling optOut. If needed, this method will prompt the user for push notifications permission.
   * @returns void
   */


  PushSubscription.prototype.optIn = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "optInPushSubscription");
  };
  /**
   * If at any point you want the user to stop receiving push notifications on the current device (regardless of system-level permission status), you can call this method to opt out.
   * @returns void
   */


  PushSubscription.prototype.optOut = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "optOutPushSubscription");
  };

  return PushSubscription;
}();

exports["default"] = PushSubscription;

/***/ }),

/***/ 536:
/*!************************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/SessionNamespace.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Session =
/** @class */
function () {
  function Session() {}
  /**
   * Outcomes
   */

  /**
   * Add an outcome with the provided name, captured against the current session.
   * @param  {string} name
   * @returns void
   */


  Session.prototype.addOutcome = function (name) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addOutcome", [name]);
  };

  ;
  /**
   * Add a unique outcome with the provided name, captured against the current session.
   * @param  {string} name
   * @returns void
   */

  Session.prototype.addUniqueOutcome = function (name) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addUniqueOutcome", [name]);
  };

  ;
  /**
   * Add an outcome with the provided name and value, captured against the current session.
   * @param  {string} name
   * @param  {number} value
   * @returns void
   */

  Session.prototype.addOutcomeWithValue = function (name, value) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addOutcomeWithValue", [name, value]);
  };

  ;
  return Session;
}();

exports["default"] = Session;

/***/ }),

/***/ 8319:
/*!*********************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/UserNamespace.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var PushSubscriptionNamespace_1 = __importDefault(__webpack_require__(/*! ./PushSubscriptionNamespace */ 3843));

var User =
/** @class */
function () {
  function User() {
    // The push subscription associated to the current user.
    this.pushSubscription = new PushSubscriptionNamespace_1.default();
    this._userStateObserverList = [];
  }

  User.prototype._processFunctionList = function (array, param) {
    for (var i = 0; i < array.length; i++) {
      array[i](param);
    }
  };
  /**
   * Explicitly set a 2-character language code for the user.
   * @param  {string} language
   * @returns void
   */


  User.prototype.setLanguage = function (language) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setLanguage", [language]);
  };

  ;
  /**
   * Aliases
   */

  /**
   * Set an alias for the current user. If this alias label already exists on this user, it will be overwritten with the new alias id.
   * @param  {string} label
   * @param  {string} id
   * @returns void
   */

  User.prototype.addAlias = function (label, id) {
    var _a;

    var jsonKeyValue = (_a = {}, _a[label] = id, _a);
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addAliases", [jsonKeyValue]);
  };

  ;
  /**
   * Set aliases for the current user. If any alias already exists, it will be overwritten to the new values.
   * @param {object} aliases
   * @returns void
   */

  User.prototype.addAliases = function (aliases) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addAliases", [aliases]);
  };

  ;
  /**
   * Remove an alias from the current user.
   * @param  {string} label
   * @returns void
   */

  User.prototype.removeAlias = function (label) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeAliases", [label]);
  };

  ;
  /**
   * Remove aliases from the current user.
   * @param  {string[]} labels
   * @returns void
   */

  User.prototype.removeAliases = function (labels) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeAliases", labels);
  };

  ;
  /**
   * Email
   */

  /**
   * Add a new email subscription to the current user.
   * @param  {string} email
   * @returns void
   */

  User.prototype.addEmail = function (email) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addEmail", [email]);
  };

  ;
  /**
   * Remove an email subscription from the current user. Returns false if the specified email does not exist on the user within the SDK, and no request will be made.
   * @param {string} email
   * @returns void
   */

  User.prototype.removeEmail = function (email) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeEmail", [email]);
  };

  ;
  /**
   * SMS
   */

  /**
   * Add a new SMS subscription to the current user.
   * @param  {string} smsNumber
   * @returns void
   */

  User.prototype.addSms = function (smsNumber) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addSms", [smsNumber]);
  };

  ;
  /**
   * Remove an SMS subscription from the current user. Returns false if the specified SMS number does not exist on the user within the SDK, and no request will be made.
   * @param {string} smsNumber
   * @returns void
   */

  User.prototype.removeSms = function (smsNumber) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeSms", [smsNumber]);
  };

  ;
  /**
   * Tags
   */

  /**
   * Add a tag for the current user. Tags are key:value string pairs used as building blocks for targeting specific users and/or personalizing messages. If the tag key already exists, it will be replaced with the value provided here.
   * @param  {string} key
   * @param  {string} value
   * @returns void
   */

  User.prototype.addTag = function (key, value) {
    var _a;

    var jsonKeyValue = (_a = {}, _a[key] = value, _a);
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addTags", [jsonKeyValue]);
  };

  ;
  /**
   * Add multiple tags for the current user. Tags are key:value string pairs used as building blocks for targeting specific users and/or personalizing messages. If the tag key already exists, it will be replaced with the value provided here.
   * @param  {object} tags
   * @returns void
   */

  User.prototype.addTags = function (tags) {
    var convertedTags = tags;
    Object.keys(tags).forEach(function (key) {
      // forces values to be string types
      if (typeof convertedTags[key] !== "string") {
        convertedTags[key] = JSON.stringify(convertedTags[key]);
      }
    });
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "addTags", [convertedTags]);
  };

  ;
  /**
   * Remove the data tag with the provided key from the current user.
   * @param  {string} key
   * @returns void
   */

  User.prototype.removeTag = function (key) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeTags", [key]);
  };

  ;
  /**
   * Remove multiple tags with the provided keys from the current user.
   * @param  {string[]} keys
   * @returns void
   */

  User.prototype.removeTags = function (keys) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "removeTags", keys);
  };

  ;
  /** Returns the local tags for the current user.
   * @returns Promise<{ [key: string]: string }>
   */

  User.prototype.getTags = function () {
    return new Promise(function (resolve, reject) {
      window.cordova.exec(resolve, reject, "OneSignalPush", "getTags", []);
    });
  };

  ;
  /**
   * Add a callback that fires when the OneSignal User state changes.
   * Important: When using the observer to retrieve the onesignalId, check the externalId as well to confirm the values are associated with the expected user.
   * @param  {(event: UserChangedState)=>void} listener
   * @returns void
   */

  User.prototype.addEventListener = function (event, listener) {
    var _this = this;

    this._userStateObserverList.push(listener);

    var userCallBackProcessor = function (state) {
      _this._processFunctionList(_this._userStateObserverList, state);
    };

    window.cordova.exec(userCallBackProcessor, function () {}, "OneSignalPush", "addUserStateObserver", []);
  };
  /**
   * Remove a User State observer that has been previously added.
   * @param  {(event: UserChangedState)=>void} listener
   * @returns void
   */


  User.prototype.removeEventListener = function (event, listener) {
    var index = this._userStateObserverList.indexOf(listener);

    if (index !== -1) {
      this._userStateObserverList.splice(index, 1);
    }
  };
  /**
   * Get the nullable OneSignal Id associated with the current user.
   * @returns {Promise<string | null>}
   */


  User.prototype.getOnesignalId = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          window.cordova.exec(resolve, reject, "OneSignalPush", "getOnesignalId", []);
        })];
      });
    });
  };
  /**
   * Get the nullable External Id associated with the current user.
   * @returns {Promise<string | null>}
   */


  User.prototype.getExternalId = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          window.cordova.exec(resolve, reject, "OneSignalPush", "getExternalId", []);
        })];
      });
    });
  };

  return User;
}();

exports["default"] = User;

/***/ }),

/***/ 182:
/*!*************************************************************!*\
  !*** ./node_modules/onesignal-cordova-plugin/dist/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Modified MIT License
 *
 * Copyright 2019 OneSignal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * 1. The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * 2. All copies of substantial portions of the Software may only be used in connection
 * with services provided by OneSignal.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NotificationWillDisplayEvent = exports.OSNotificationPermission = exports.OSNotification = exports.LogLevel = exports.OneSignalPlugin = void 0;

var UserNamespace_1 = __importDefault(__webpack_require__(/*! ./UserNamespace */ 8319));

var DebugNamespace_1 = __importDefault(__webpack_require__(/*! ./DebugNamespace */ 5331));

var SessionNamespace_1 = __importDefault(__webpack_require__(/*! ./SessionNamespace */ 536));

var LocationNamespace_1 = __importDefault(__webpack_require__(/*! ./LocationNamespace */ 4991));

var InAppMessagesNamespace_1 = __importDefault(__webpack_require__(/*! ./InAppMessagesNamespace */ 6614));

var NotificationsNamespace_1 = __importDefault(__webpack_require__(/*! ./NotificationsNamespace */ 2707));

var LiveActivitiesNamespace_1 = __importDefault(__webpack_require__(/*! ./LiveActivitiesNamespace */ 5190));

var OneSignalPlugin =
/** @class */
function () {
  function OneSignalPlugin() {
    this.User = new UserNamespace_1.default();
    this.Debug = new DebugNamespace_1.default();
    this.Session = new SessionNamespace_1.default();
    this.Location = new LocationNamespace_1.default();
    this.InAppMessages = new InAppMessagesNamespace_1.default();
    this.Notifications = new NotificationsNamespace_1.default();
    this.LiveActivities = new LiveActivitiesNamespace_1.default();
    this._appID = "";
  }
  /**
   * Initializes the OneSignal SDK. This should be called during startup of the application.
   * @param  {string} appId
   * @returns void
   */


  OneSignalPlugin.prototype.initialize = function (appId) {
    var _this = this;

    this._appID = appId;

    var observerCallback = function () {
      _this.User.pushSubscription._setPropertiesAndObserver();

      _this.Notifications._setPropertyAndObserver();
    };

    window.cordova.exec(observerCallback, function () {}, "OneSignalPush", "init", [this._appID]);
  };

  ;
  /**
   * Login to OneSignal under the user identified by the [externalId] provided. The act of logging a user into the OneSignal SDK will switch the [user] context to that specific user.
   * @param  {string} externalId
   * @returns void
   */

  OneSignalPlugin.prototype.login = function (externalId) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "login", [externalId]);
  };
  /**
   * Logout the user previously logged in via [login]. The [user] property now references a new device-scoped user.
   * @param  {string} externalId
   * @returns void
   */


  OneSignalPlugin.prototype.logout = function () {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "logout");
  };
  /**
    * Determines whether a user must consent to privacy prior to their user data being sent up to OneSignal. This should be set to true prior to the invocation of initialization to ensure compliance.
    * @param  {boolean} required
    * @returns void
    */


  OneSignalPlugin.prototype.setConsentRequired = function (required) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setPrivacyConsentRequired", [required]);
  };

  ;
  /**
   * Indicates whether privacy consent has been granted. This field is only relevant when the application has opted into data privacy protections.
   * @param  {boolean} granted
   * @returns void
   */

  OneSignalPlugin.prototype.setConsentGiven = function (granted) {
    window.cordova.exec(function () {}, function () {}, "OneSignalPush", "setPrivacyConsentGiven", [granted]);
  };

  ;
  return OneSignalPlugin;
}();

exports.OneSignalPlugin = OneSignalPlugin; //-------------------------------------------------------------------

var OneSignal = new OneSignalPlugin();

if (!window.plugins) {
  window.plugins = {};
}

if (!window.plugins.OneSignal) {
  window.plugins.OneSignal = OneSignal;
} // Exporting


var DebugNamespace_2 = __webpack_require__(/*! ./DebugNamespace */ 5331);

Object.defineProperty(exports, "LogLevel", ({
  enumerable: true,
  get: function () {
    return DebugNamespace_2.LogLevel;
  }
}));

var OSNotification_1 = __webpack_require__(/*! ./OSNotification */ 4599);

Object.defineProperty(exports, "OSNotification", ({
  enumerable: true,
  get: function () {
    return OSNotification_1.OSNotification;
  }
}));

var NotificationsNamespace_2 = __webpack_require__(/*! ./NotificationsNamespace */ 2707);

Object.defineProperty(exports, "OSNotificationPermission", ({
  enumerable: true,
  get: function () {
    return NotificationsNamespace_2.OSNotificationPermission;
  }
}));

var NotificationReceivedEvent_1 = __webpack_require__(/*! ./NotificationReceivedEvent */ 8889);

Object.defineProperty(exports, "NotificationWillDisplayEvent", ({
  enumerable: true,
  get: function () {
    return NotificationReceivedEvent_1.NotificationWillDisplayEvent;
  }
}));
exports["default"] = OneSignal;

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

/***/ }),

/***/ 7502:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 1160);

var InnerSubscriber = function (_super) {
  __extends(InnerSubscriber, _super);

  function InnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }

  InnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };

  InnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };

  InnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return InnerSubscriber;
}(Subscriber_1.Subscriber);

exports.InnerSubscriber = InnerSubscriber;

/***/ }),

/***/ 4758:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ 2977);

var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ 27);

var observable_1 = __webpack_require__(/*! ./symbol/observable */ 8550);

var pipe_1 = __webpack_require__(/*! ./util/pipe */ 598);

var config_1 = __webpack_require__(/*! ./config */ 8893);

var Observable = function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if (canReportError_1.canReportError(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[observable_1.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return pipe_1.pipeFromArray(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config_1.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}

/***/ }),

/***/ 413:
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var config_1 = __webpack_require__(/*! ./config */ 8893);

var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 5613);

exports.empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError_1.hostReportError(err);
    }
  },
  complete: function () {}
};

/***/ }),

/***/ 7233:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 1160);

var OuterSubscriber = function (_super) {
  __extends(OuterSubscriber, _super);

  function OuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  OuterSubscriber.prototype.notifyError = function (error, innerSub) {
    this.destination.error(error);
  };

  OuterSubscriber.prototype.notifyComplete = function (innerSub) {
    this.destination.complete();
  };

  return OuterSubscriber;
}(Subscriber_1.Subscriber);

exports.OuterSubscriber = OuterSubscriber;

/***/ }),

/***/ 1160:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 7654);

var Observer_1 = __webpack_require__(/*! ./Observer */ 413);

var Subscription_1 = __webpack_require__(/*! ./Subscription */ 5676);

var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 2478);

var config_1 = __webpack_require__(/*! ./config */ 8893);

var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ 5613);

var Subscriber = function (_super) {
  __extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = Observer_1.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = Observer_1.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };

  return Subscriber;
}(Subscription_1.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber = function (_super) {
  __extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if (isFunction_1.isFunction(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== Observer_1.empty) {
        context = Object.create(observerOrNext);

        if (isFunction_1.isFunction(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        hostReportError_1.hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          hostReportError_1.hostReportError(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError_1.hostReportError(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        hostReportError_1.hostReportError(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;

/***/ }),

/***/ 5676:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var isArray_1 = __webpack_require__(/*! ./util/isArray */ 4682);

var isObject_1 = __webpack_require__(/*! ./util/isObject */ 7692);

var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 7654);

var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ 492);

var Subscription = function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parentOrParents = _a._parentOrParents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index = 0; index < _parentOrParents.length; ++index) {
        var parent_1 = _parentOrParents[index];
        parent_1.remove(this);
      }
    }

    if (isFunction_1.isFunction(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if (isArray_1.isArray(_subscriptions)) {
      var index = -1;
      var len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if (isObject_1.isObject(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new UnsubscriptionError_1.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    var _parentOrParents = subscription._parentOrParents;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    var subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
  }, []);
}

/***/ }),

/***/ 8893:
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = new Error();
      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};

/***/ }),

/***/ 4678:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/catchError.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ 7233);

var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ 7502);

var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ 6629);

function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    var operator = new CatchOperator(selector);
    var caught = source.lift(operator);
    return operator.caught = caught;
  };
}

exports.catchError = catchError;

var CatchOperator = function () {
  function CatchOperator(selector) {
    this.selector = selector;
  }

  CatchOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  };

  return CatchOperator;
}();

var CatchSubscriber = function (_super) {
  __extends(CatchSubscriber, _super);

  function CatchSubscriber(destination, selector, caught) {
    var _this = _super.call(this, destination) || this;

    _this.selector = selector;
    _this.caught = caught;
    return _this;
  }

  CatchSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var result = void 0;

      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        _super.prototype.error.call(this, err2);

        return;
      }

      this._unsubscribeAndRecycle();

      var innerSubscriber = new InnerSubscriber_1.InnerSubscriber(this, undefined, undefined);
      this.add(innerSubscriber);
      var innerSubscription = subscribeToResult_1.subscribeToResult(this, result, undefined, undefined, innerSubscriber);

      if (innerSubscription !== innerSubscriber) {
        this.add(innerSubscription);
      }
    }
  };

  return CatchSubscriber;
}(OuterSubscriber_1.OuterSubscriber);

/***/ }),

/***/ 9940:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;

/***/ }),

/***/ 8550:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/***/ }),

/***/ 2478:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.rxSubscriber = function () {
  return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
}();

exports.$$rxSubscriber = exports.rxSubscriber;

/***/ }),

/***/ 492:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var UnsubscriptionErrorImpl = function () {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
}();

exports.UnsubscriptionError = UnsubscriptionErrorImpl;

/***/ }),

/***/ 2977:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 1160);

function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber_1.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}

exports.canReportError = canReportError;

/***/ }),

/***/ 5613:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function hostReportError(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}

exports.hostReportError = hostReportError;

/***/ }),

/***/ 1902:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function identity(x) {
  return x;
}

exports.identity = identity;

/***/ }),

/***/ 4682:
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.isArray = function () {
  return Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
}();

/***/ }),

/***/ 8724:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

/***/ }),

/***/ 7654:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function isFunction(x) {
  return typeof x === 'function';
}

exports.isFunction = isFunction;

/***/ }),

/***/ 7692:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function isObject(x) {
  return x !== null && typeof x === 'object';
}

exports.isObject = isObject;

/***/ }),

/***/ 3986:
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

exports.isPromise = isPromise;

/***/ }),

/***/ 598:
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var identity_1 = __webpack_require__(/*! ./identity */ 1902);

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

exports.pipe = pipe;

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity_1.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

exports.pipeFromArray = pipeFromArray;

/***/ }),

/***/ 2301:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ 554);

var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ 3902);

var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ 9771);

var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ 90);

var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ 8724);

var isPromise_1 = __webpack_require__(/*! ./isPromise */ 3986);

var isObject_1 = __webpack_require__(/*! ./isObject */ 7692);

var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 9940);

var observable_1 = __webpack_require__(/*! ../symbol/observable */ 8550);

exports.subscribeTo = function (result) {
  if (!!result && typeof result[observable_1.observable] === 'function') {
    return subscribeToObservable_1.subscribeToObservable(result);
  } else if (isArrayLike_1.isArrayLike(result)) {
    return subscribeToArray_1.subscribeToArray(result);
  } else if (isPromise_1.isPromise(result)) {
    return subscribeToPromise_1.subscribeToPromise(result);
  } else if (!!result && typeof result[iterator_1.iterator] === 'function') {
    return subscribeToIterable_1.subscribeToIterable(result);
  } else {
    var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

/***/ }),

/***/ 554:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports.subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  };
};

/***/ }),

/***/ 9771:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 9940);

exports.subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();

    do {
      var item = void 0;

      try {
        item = iterator.next();
      } catch (err) {
        subscriber.error(err);
        return subscriber;
      }

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

/***/ }),

/***/ 90:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var observable_1 = __webpack_require__(/*! ../symbol/observable */ 8550);

exports.subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[observable_1.observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

/***/ }),

/***/ 3902:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ 5613);

exports.subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, hostReportError_1.hostReportError);
    return subscriber;
  };
};

/***/ }),

/***/ 6629:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ 7502);

var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ 2301);

var Observable_1 = __webpack_require__(/*! ../Observable */ 4758);

function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
  if (innerSubscriber === void 0) {
    innerSubscriber = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }

  if (innerSubscriber.closed) {
    return undefined;
  }

  if (result instanceof Observable_1.Observable) {
    return result.subscribe(innerSubscriber);
  }

  return subscribeTo_1.subscribeTo(result)(innerSubscriber);
}

exports.subscribeToResult = subscribeToResult;

/***/ }),

/***/ 27:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 1160);

var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ 2478);

var Observer_1 = __webpack_require__(/*! ../Observer */ 413);

function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber_1.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
      return nextOrObserver[rxSubscriber_1.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new Subscriber_1.Subscriber(Observer_1.empty);
  }

  return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}

exports.toSubscriber = toSubscriber;

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map