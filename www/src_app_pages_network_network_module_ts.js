"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_network_network_module_ts"],{

/***/ 7671:
/*!*********************************************************!*\
  !*** ./src/app/pages/network/network-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageRoutingModule": () => (/* binding */ NetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.page */ 508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_0__.NetworkPage
    }
];
class NetworkPageRoutingModule {
}
NetworkPageRoutingModule.ɵfac = function NetworkPageRoutingModule_Factory(t) { return new (t || NetworkPageRoutingModule)(); };
NetworkPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NetworkPageRoutingModule });
NetworkPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NetworkPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7846:
/*!*************************************************!*\
  !*** ./src/app/pages/network/network.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPageModule": () => (/* binding */ NetworkPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-routing.module */ 7671);
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network.page */ 508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class NetworkPageModule {
}
NetworkPageModule.ɵfac = function NetworkPageModule_Factory(t) { return new (t || NetworkPageModule)(); };
NetworkPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NetworkPageModule });
NetworkPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _network_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NetworkPageModule, { declarations: [_network_page__WEBPACK_IMPORTED_MODULE_1__.NetworkPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _network_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkPageRoutingModule] }); })();


/***/ }),

/***/ 508:
/*!***********************************************!*\
  !*** ./src/app/pages/network/network.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkPage": () => (/* binding */ NetworkPage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








function NetworkPage_ion_label_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function NetworkPage_ion_progress_bar_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-progress-bar", 8);
  }
}

class NetworkPage {
  constructor(router) {
    this.router = router;
    this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(true);
  }

  ngOnInit() {}

  CheckNetwork() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.monitorNetwork();
    })();
  }

  monitorNetwork() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.approve = true;
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.getStatus();
      _this2.isConnected = status.connected;

      _this2.networkStatus$.next(_this2.isConnected);

      console.log("Monitor Network Called..");
      _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', /*#__PURE__*/function () {
        var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (status) {
          console.log("Monitoring Network........");
          _this2.isConnected = status.connected;

          _this2.networkStatus$.next(_this2.isConnected);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _this2.networkStatus$.subscribe(isConnected => {
        if (isConnected) {
          _this2.approve = false;

          _this2.router.navigate(['home']);
        } else {
          _this2.approve = false;
        }
      });
    })();
  }

}

NetworkPage.ɵfac = function NetworkPage_Factory(t) {
  return new (t || NetworkPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

NetworkPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NetworkPage,
  selectors: [["app-network"]],
  decls: 13,
  vars: 2,
  consts: [[1, "ion-no-border"], ["slot", "start"], [1, "ion-padding"], ["src", "../assets/imgs/No connection-pana.svg"], ["color", "primary", 1, "ion-text-center"], ["size", "large", "shape", "round", "type", "submit", "color", "primary", "expand", "block", 3, "click"], [4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["color", "light", "type", "indeterminate"]],
  template: function NetworkPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-buttons", 1)(3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-list-header", 2)(7, "ion-label", 4)(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Network Error, Please Check Your Network and Try again.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NetworkPage_Template_ion_button_click_10_listener() {
        return ctx.CheckNetwork();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NetworkPage_ion_label_11_Template, 2, 0, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NetworkPage_ion_progress_bar_12_Template, 1, 0, "ion-progress-bar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.approve);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.approve);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXR3b3JrLnBhZ2Uuc2NzcyJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_network_network_module_ts.js.map