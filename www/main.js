(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 671:
/*!************************************************!*\
  !*** ./src/app/add-card/add-card.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCardComponent": () => (/* binding */ AddCardComponent)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/payment.service */ 1863);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/avatar.service */ 5083);








const _c0 = ["cardElement"];
class AddCardComponent {
  constructor(fb, alertController, loadingController, paymentService, avatarService, modalController, navController) {
    this.fb = fb;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.paymentService = paymentService;
    this.avatarService = avatarService;
    this.modalController = modalController;
    this.navController = navController;
    this.approve = false;
    this.cardInitialized = false;
    this.paymentForm = this.fb.group({
      provider: ['stripe', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      cardId: [''],
      authCode: ['']
    });
  }

  ngOnInit() {
    this.initializeBackButtonCustomHandler(); // Initialize the form or any other needed data
  }

  ngAfterViewInit() {
    this.initializeStripeCard();
  }

  initializeStripeCard() {
    if (this.cardElement && this.cardElement.nativeElement) {
      this.stripe = Stripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
      this.elements = this.stripe.elements();

      if (!this.card) {
        this.card = this.elements.create('card');
        this.card.mount(this.cardElement.nativeElement);
      }

      this.cardInitialized = true;
    }
  }

  initializeBackButtonCustomHandler() {
    this.navController.back();
  }

  processPayment() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.paymentForm.valid) {
        const formValues = _this.paymentForm.value;
        formValues.email = _this.avatarService.user.email; // Use email from avatarService

        _this.showLoading();

        try {
          const setupIntentResponse = yield _this.paymentService.createSetupIntent(formValues.email).toPromise();
          const clientSecret = setupIntentResponse.client_secret;
          const {
            setupIntent,
            error
          } = yield _this.stripe.confirmCardSetup(clientSecret, {
            payment_method: {
              card: _this.card,
              billing_details: {
                email: formValues.email
              }
            }
          });

          if (error) {
            yield _this.showAlert('Payment Error', error.message);
            throw new Error(error.message);
          }

          const paymentMethodId = setupIntent.payment_method;
          const paymentMethod = yield _this.paymentService.retrievePaymentMethod(paymentMethodId).toPromise();
          const cardDetails = paymentMethod.card;
          const last4 = cardDetails.last4;
          const cardExists = yield _this.avatarService.checkCardExistsStripe(formValues.email, last4);

          if (!cardExists) {
            yield _this.avatarService.addCardStripe(formValues.email, paymentMethodId, last4);
          }

          yield _this.modalController.dismiss({
            success: true,
            paymentMethodId
          });
        } catch (error) {
          yield _this.showAlert('Error', error.message || 'An unexpected error occurred.');
        } finally {
          _this.hideLoading();
        }
      } else {
        _this.showAlert('Form Error', 'Please fill out all required fields.');
      }
    })();
  }

  showLoading() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = yield _this2.loadingController.create({
        message: 'Processing payment...'
      });
      yield _this2.loading.present();
    })();
  }

  hideLoading() {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.loading) {
        yield _this3.loading.dismiss();
      }
    })();
  }

  showAlert(header, message) {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  closeModal() {
    this.modalController.dismiss();
  }

}

AddCardComponent.ɵfac = function AddCardComponent_Factory(t) {
  return new (t || AddCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_1__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController));
};

AddCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddCardComponent,
  selectors: [["app-add-card"]],
  viewQuery: function AddCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    }
  },
  decls: 14,
  vars: 3,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary", 3, "click"], [1, "ion-padding"], [3, "formGroup", "ngSubmit"], [1, "stripe-element"], ["cardElement", ""], ["id", "card-errors", "role", "alert"], ["color", "success", "expand", "block", "type", "submit", 3, "disabled"]],
  template: function AddCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddCardComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Add Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 3)(8, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddCardComponent_Template_form_ngSubmit_8_listener() {
        return ctx.processPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 5, 6)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Add Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.paymentForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.approve);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar],
  encapsulation: 2
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth-guard */ 3200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectUnauthorizedTo)(['login']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.redirectLoggedInTo)(['home']);
const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectLoggedInToHome),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then((m) => m.ProfilePageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/history/history.module */ 608)).then((m) => m.HistoryPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 557)).then((m) => m.DetailsPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 4923)).then((m) => m.PaymentPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 2602)).then((m) => m.SupportPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then((m) => m.AboutPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'promotion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_promotion_promotion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/promotion/promotion.module */ 2145)).then((m) => m.PromotionPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'rating',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rating_rating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rating/rating.module */ 4176)).then((m) => m.RatingPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_network_network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/network/network.module */ 7846)).then((m) => m.NetworkPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_0__.canActivate)(redirectUnauthorizedToLogin), // Added guard
    },
    {
        path: 'paymentcallback',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paymentcallback_paymentcallback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paymentcallback/paymentcallback.module */ 848)).then(m => m.PaymentcallbackPageModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/avatar.service */ 5083);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);












function AppComponent_ion_menu_2_ion_avatar_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.user.photoURL);
  }
}

function AppComponent_ion_menu_2_ion_avatar_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AppComponent_ion_menu_2_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item")(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-skeleton-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label", 7)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-skeleton-text", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-skeleton-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("animated", true);
  }
}

function AppComponent_ion_menu_2_ion_menu_toggle_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-menu-toggle", 14)(1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ion_menu_2_ion_menu_toggle_14_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const p_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.gotoPage(p_r5.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ios", p_r5.icon)("md", p_r5.icon)("color", p_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](p_r5.title);
  }
}

function AppComponent_ion_menu_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-menu", 3)(1, "ion-content")(2, "ion-list", 4)(3, "ion-menu-toggle")(4, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ion_menu_2_Template_ion_item_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.gotoProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AppComponent_ion_menu_2_ion_avatar_5_Template, 2, 1, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppComponent_ion_menu_2_ion_avatar_6_Template, 2, 0, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-label", 7)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AppComponent_ion_menu_2_ion_item_12_Template, 8, 3, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AppComponent_ion_menu_2_ion_menu_toggle_14_Template, 5, 4, "ion-menu-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.user.photoURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.user.photoURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.displayName || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.phoneNumber || "987654687976");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.appPages);
  }
}

class AppComponent {
  constructor(platform, ngZone, avatar, auth, nav, router) {
    this.platform = platform;
    this.ngZone = ngZone;
    this.avatar = avatar;
    this.auth = auth;
    this.nav = nav;
    this.router = router;
    this.appPages = [{
      title: 'Payment',
      url: 'payment',
      icon: 'card',
      color: 'primary'
    }, {
      title: 'Promotion',
      url: 'promotion',
      icon: 'pricetag',
      color: 'primary'
    }, {
      title: 'Ride History',
      url: 'history',
      icon: 'timer',
      color: 'primary'
    }, {
      title: 'Support',
      url: 'support',
      icon: 'chatbubbles',
      color: 'primary'
    }, {
      title: 'About',
      url: 'about',
      icon: 'information-circle',
      color: 'primary'
    }];
    this.loading = true; // Add loading state

    this.initialize();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        console.log('Navigation ended:', event);
      }
    });
  }

  initialize() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.platform.ready().then( /*#__PURE__*/function () {
        var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (readySource) {
          _this.source = readySource;

          _this.auth.onAuthStateChanged( /*#__PURE__*/function () {
            var _ref2 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
              _this.user = user;
              console.log('Auth state changed:', user);

              if (user) {
                // User is signed in
                console.log('User is signed in:', user);
              } else {
                // User is signed out
                console.log('User is signed out');
              }

              if (readySource != 'dom') {
                yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setBackgroundColor({
                  color: '#3880ff'
                });
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setStyle({
                  style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.Style.Light
                });
              }

              yield _this.LoadSplash();
              _this.loading = false; // Set loading to false after initialization
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }()); // await this.initializeOneSignal();

        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  } // private async initializeOneSignal() {
  //   if (this.platform.is('cordova')) {
  //     await OneSignal.initialize('ba7d77ed-1525-416c-9ac5-7b5d36e68740');
  //     OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
  //       this.ngZone.run(() => {
  //         console.log('Notification received in foreground:', event);
  //         // Handle received notification
  //       });
  //     });
  //     OneSignal.Notifications.addEventListener('click', (openedEvent) => {
  //       this.ngZone.run(() => {
  //         console.log('Notification opened:', openedEvent);
  //         // Handle opened notification
  //       });
  //     });
  //     await OneSignal.User.pushSubscription.optIn();
  //   }
  // }


  LoadSplash() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.show();
      if (_this2.source != 'dom') yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }

  gotoPage(p) {
    this.nav.navigateForward(p);
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 1,
  consts: [["contentId", "main-content"], ["contentId", "main-content", "type", "overlay", 4, "ngIf"], ["id", "main-content"], ["contentId", "main-content", "type", "overlay"], ["id", "inbox-list", "lines", "none"], [3, "click"], [4, "ngIf"], [1, "ion-margin"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], [3, "src"], ["src", "../assets/icon/favicon.png"], [3, "animated"], [2, "width", "100px", 3, "animated"], [2, "width", "80px", 3, "animated"], ["auto-hide", "false"], ["lines", "none", "detail", "false", "routerLinkActive", "selected", 1, "allItems", 3, "click"], ["slot", "start", 3, "ios", "md", "color"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ion_menu_2_Template, 15, 6, "ion-menu", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-router-outlet", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
  styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  min-height: 70px;\n  margin-bottom: 16px;\n}\n\n.allItems[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 19px;\n}\n\n.allItems[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 90px;\n  color: #757575;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcSU9OSUMlMjBQUk9KRUNUU1xcbXlSaWRlci0yMDI0MDUyNFQwNDA1MDVaLTAwMVxcbXlSaWRlclxcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTs7RUFFRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsMkRBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQ0NIOztBREFHO0VBQ0MsZUFBQTtBQ0VKOztBREVFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FDRko7O0FES0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLHNEQUFBO0FDRko7O0FES0U7RUFDRSwrQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLHNCQUFBO0FDRko7O0FES0U7RUFDRSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRSwrQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FES0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURLRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDSEo7O0FETUU7RUFDRSxpQ0FBQTtBQ0hKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICAuYWxsSXRlbXN7XG4gICBtYXJnaW4tdG9wOiA4cHg7XG4gICBmb250LXNpemU6IDE5cHg7XG4gICBpb24taWNvbntcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICB9XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICBcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICBcbiAgICBjb2xvcjogIzc1NzU3NTtcblxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gICAgY29sb3I6ICM2MTZlN2U7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM3Mzg0OWE7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1ub3RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIH1cbiAgXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH0iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFsbEl0ZW1zIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE5cHg7XG59XG4uYWxsSXRlbXMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI5cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 6818);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 2779);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp/otp.component */ 3096);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-otp-input */ 9306);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-card/add-card.component */ 671);
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ 5860);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy }, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.FacebookAuthProvider, _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__.Client], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_20__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_20__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__.provideAuth)(() => {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.isNativePlatform()) {
                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.initializeAuth)((0,firebase_app__WEBPACK_IMPORTED_MODULE_5__.getApp)(), {
                    persistence: firebase_auth__WEBPACK_IMPORTED_MODULE_4__.indexedDBLocalPersistence,
                });
            }
            else {
                return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__.getAuth)();
            }
        }),
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__.getFirestore)()),
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__.getStorage)())] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_6__.OtpComponent, _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_8__.CountrySearchModalComponent, _add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__.AddCardComponent, _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__.AutocompleteComponent, _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_11__.EnrouteChatComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_20__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__.StorageModule] }); })();


/***/ }),

/***/ 5860:
/*!********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);











function AutocompleteComponent_div_15_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-skeleton-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-thumbnail", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-skeleton-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("animated", true);
  }
}

function AutocompleteComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AutocompleteComponent_div_15_ion_item_1_Template, 8, 3, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.skeletOns);
  }
}

function AutocompleteComponent_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_ion_item_16_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.chooseItem(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.city);
  }
}

function AutocompleteComponent_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_ion_item_17_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.chooseItem2(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r9.city);
  }
}

function AutocompleteComponent_ion_item_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class AutocompleteComponent {
  constructor(modalCtrl, http, avatar, viewCtrl, client) {
    this.modalCtrl = modalCtrl;
    this.http = http;
    this.avatar = avatar;
    this.viewCtrl = viewCtrl;
    this.client = client;
    this.service = new google.maps.places.AutocompleteService();
    this.skeleton = true;
    this.countryCode = 'NG';
    this.autocompleteItems = [];
    this.autocompleteItems2 = [];
  }

  ngOnInit() {
    this.http.get("https://ipinfo.io").subscribe(res => {
      console.log('res ', res);
      this.countryCode = res.country || 'NG';
    });
    this.skeletOns = [{}, {}, {}, {}];
    this.autocomplete = {
      query2: this.locationAddress,
      query: ""
    };
    console.log(this.locationAddress);
  }

  closeModal() {
    let data = {
      home: true
    };
    this.modalCtrl.dismiss(data);
  }

  closeSearch() {}

  Show() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: false
      });
      _this.hideImage = true;
    })();
  }

  Hide() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: true
      });
      _this2.hideImage = false;
    })();
  }

  updateSearch2() {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.autocomplete.query2 == "") {
        _this3.autocompleteItems2 = [];
        return;
      }

      console.log(_this3.autocomplete.query2, _this3.LatLng);
      var place = new google.maps.LatLng(_this3.LatLng.lat, _this3.LatLng.lng);
      _this3.skeleton = false;

      _this3.service.getPlacePredictions({
        input: _this3.autocomplete.query2,
        location: place,
        strictbounds: true,
        radius: "2000",
        zoom: 15,
        types: ["geocode"],
        componentRestrictions: {
          country: [_this3.countryCode]
        }
      }, (predictions, status) => {
        _this3.autocompleteItems2 = [];
        console.log(predictions, status);
        _this3.skeleton = true;
        if (predictions != null) predictions.forEach(prediction => {
          _this3.autocompleteItems2.push({
            whole: prediction,
            full: prediction.description,
            place: prediction.structured_formatting.main_text,
            city: prediction.structured_formatting.secondary_text,
            searching: true
          });
        });
      });
    })();
  }

  updateSearch() {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.autocomplete.query == "") {
        _this4.autocompleteItems = [];
        return;
      }

      console.log(_this4.autocomplete.query, _this4.LatLng);
      var place = new google.maps.LatLng(_this4.LatLng.lat, _this4.LatLng.lng);
      _this4.skeleton = false;

      _this4.service.getPlacePredictions({
        input: _this4.autocomplete.query,
        location: place,
        strictbounds: true,
        radius: "2000",
        zoom: 15,
        types: ["geocode"],
        componentRestrictions: {
          country: [_this4.countryCode]
        }
      }, (predictions, status) => {
        _this4.autocompleteItems = [];
        console.log(predictions, status);
        _this4.skeleton = true;
        if (predictions != null) predictions.forEach(prediction => {
          _this4.autocompleteItems.push({
            whole: prediction,
            full: prediction.description,
            place: prediction.structured_formatting.main_text,
            city: prediction.structured_formatting.secondary_text,
            searching: true
          });
        });
      });
    })();
  }

  chooseItem(item) {
    var _this5 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.viewCtrl.dismiss(item);
      console.log(item);
    })();
  }

  chooseOnMap() {
    var _this6 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = {
        pinOnMap: true
      };
      yield _this6.viewCtrl.dismiss(data);
    })();
  }

  chooseItem2(item) {
    var _this7 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.autocomplete.query2 = item.full;
      const results = yield _this7.client.geocode({
        params: {
          address: item.full,
          key: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey
        },
        timeout: 5000 // milliseconds

      });
      console.log(results);
      var position = results[0].geometry.location;
      _this7.data = [{
        location: item.full,
        lat: position.lat(),
        lng: position.lng(),
        edited: true
      }];
    })();
  }

}

AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
  return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_3__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_4__.Client));
};

AutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AutocompleteComponent,
  selectors: [["app-autocomplete"]],
  inputs: {
    LatLng: "LatLng",
    locationAddress: "locationAddress"
  },
  decls: 23,
  vars: 6,
  consts: [["slot", "start"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "close"], ["lines", "none"], ["color", "success", "name", "locate-sharp"], ["animated", "true", "placeholder", "Enter Pick Up Location", "showCancelButton", "never", 1, "search", 3, "ngModel", "ngModelChange", "ionInput", "ionFocus", "ionBlur", "ionCancel"], ["color", "primary", "name", "pin-sharp"], ["animated", "true", "placeholder", "Enter Destination", "showCancelButton", "never", 1, "search2", 3, "ngModel", "ngModelChange", "ionInput", "ionFocus", "ionBlur", "ionCancel"], [1, "ion-no-padding"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["style", "margin:0 auto;", 4, "ngIf"], [1, "ion-padding"], ["size", "large", "shape", "round", "color", "primary", "expand", "block", 3, "click"], ["slot", "icon-only", "name", "pin"], [4, "ngFor", "ngForOf"], [1, "ion-margin"], [2, "width", "80px", 3, "animated"], [2, "width", "130px", 3, "animated"], [2, "width", "30px", "height", "50px", 3, "animated"], [3, "click"], ["name", "pin", "slot", "start"], [2, "margin", "0 auto"], ["src", "../../assets/imgs/trip.svg"]],
  template: function AutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Enter Destination ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-searchbar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_ion_searchbar_ngModelChange_9_listener($event) {
        return ctx.autocomplete.query2 = $event;
      })("ionInput", function AutocompleteComponent_Template_ion_searchbar_ionInput_9_listener() {
        return ctx.updateSearch2();
      })("ionFocus", function AutocompleteComponent_Template_ion_searchbar_ionFocus_9_listener() {
        return ctx.Show();
      })("ionBlur", function AutocompleteComponent_Template_ion_searchbar_ionBlur_9_listener() {
        return ctx.Hide();
      })("ionCancel", function AutocompleteComponent_Template_ion_searchbar_ionCancel_9_listener() {
        return ctx.closeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-searchbar", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_ion_searchbar_ngModelChange_12_listener($event) {
        return ctx.autocomplete.query = $event;
      })("ionInput", function AutocompleteComponent_Template_ion_searchbar_ionInput_12_listener() {
        return ctx.updateSearch();
      })("ionFocus", function AutocompleteComponent_Template_ion_searchbar_ionFocus_12_listener() {
        return ctx.Show();
      })("ionBlur", function AutocompleteComponent_Template_ion_searchbar_ionBlur_12_listener() {
        return ctx.Hide();
      })("ionCancel", function AutocompleteComponent_Template_ion_searchbar_ionCancel_12_listener() {
        return ctx.closeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-content", 8)(14, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AutocompleteComponent_div_15_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AutocompleteComponent_ion_item_16_Template, 7, 2, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AutocompleteComponent_ion_item_17_Template, 7, 2, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AutocompleteComponent_ion_item_18_Template, 2, 0, "ion-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-footer", 12)(20, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AutocompleteComponent_Template_ion_button_click_20_listener() {
        return ctx.chooseOnMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Choose on map ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.autocomplete.query2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.autocomplete.query);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.skeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.autocompleteItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.autocompleteItems2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hideImage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor],
  styles: [".search[_ngcontent-%COMP%] {\n  --box-shadow:none;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n  --icon-color: rgba(106, 186, 106, 0);\n  --border-radius: 30px;\n}\n\n.search2[_ngcontent-%COMP%] {\n  --box-shadow:none;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n  --icon-color: rgba(106, 186, 106, 0);\n  --border-radius: 30px;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.259);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxhdXRvY29tcGxldGVcXGF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNDLG9DQUFBO0VBQ0EscUJBQUE7QUNDTDs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNDLG9DQUFBO0VBQ0EscUJBQUE7QUNDTDs7QURJRTtFQUNFLHFDQUFBO0FDREoiLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaHtcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspOyBcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgIC0taWNvbi1jb2xvcjogcmdiYSgxMDYsIDE4NiwgMTA2LCAwKTtcbiAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG5cbiAgLnNlYXJjaDJ7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTsgXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAtLWljb24tY29sb3I6IHJnYmEoMTA2LCAxODYsIDEwNiwgMCk7XG4gICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAvLyBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG5cbiAgaW9uLXNrZWxldG9uLXRleHQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjI1OSk7XG4gIH1cbiAgIiwiLnNlYXJjaCB7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0taWNvbi1jb2xvcjogcmdiYSgxMDYsIDE4NiwgMTA2LCAwKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uc2VhcmNoMiB7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIC0taWNvbi1jb2xvcjogcmdiYSgxMDYsIDE4NiwgMTA2LCAwKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5pb24tc2tlbGV0b24tdGV4dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjI1OSk7XG59Il19 */"]
});

/***/ }),

/***/ 9568:
/*!************************************************************************!*\
  !*** ./src/app/country-search-modal/country-search-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountrySearchModalComponent": () => (/* binding */ CountrySearchModalComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function CountrySearchModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CountrySearchModalComponent_div_10_Template_ion_item_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const country_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectCountry(country_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", country_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", country_r1.name + " flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r1.name);
} }
//llZ1NBxrJnSEkUZG
class CountrySearchModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CountryJson;
        this.filteredCountries = [];
    }
    ngOnInit() {
        this.filteredCountries = this.CountryJson;
    }
    filterCountries(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) ||
            country.dialCode.includes(searchTerm));
    }
    selectCountry(country) {
        this.modalCtrl.dismiss(country);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
}
CountrySearchModalComponent.ɵfac = function CountrySearchModalComponent_Factory(t) { return new (t || CountrySearchModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController)); };
CountrySearchModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CountrySearchModalComponent, selectors: [["app-country-search-modal"]], decls: 11, vars: 1, consts: [["slot", "end"], [3, "click"], ["placeholder", "Search country", 3, "ionInput"], ["class", "country-item", 4, "ngFor", "ngForOf"], [1, "country-item"], ["slot", "start"], [3, "src", "alt"]], template: function CountrySearchModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CountrySearchModalComponent_Template_ion_button_click_5_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-searchbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function CountrySearchModalComponent_Template_ion_searchbar_ionInput_7_listener($event) { return ctx.filterCountries($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content")(9, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CountrySearchModalComponent_div_10_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredCountries);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary); \n}\nion-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --background: white;\n  --color: var(--ion-color-primary);\n  --placeholder-color: #8b9dc3;\n}\nion-item[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.country-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.country-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  color: var(--ion-color-primary); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU9OSUMlMjBQUk9KRUNUU1xcbXlSaWRlci0yMDI0MDUyNFQwNDA1MDVaLTAwMVxcbXlSaWRlclxcc3JjXFxhcHBcXGNvdW50cnktc2VhcmNoLW1vZGFsXFxjb3VudHJ5LXNlYXJjaC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBQTtBQUNJO0VBQ0Usb0NBQUEsRUFBQSx3QkFBQTtBQ0NOO0FERUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNDTjtBREVJO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtBQ0NOO0FERUk7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUNDTjtBREVJO0VBQ0UsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQSxFQUFBLGtDQUFBO0FDQ04iLCJmaWxlIjoiY291bnRyeS1zZWFyY2gtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb3VudHJ5LXNlYXJjaC1tb2RhbC5jb21wb25lbnQuc2NzcyAqL1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgLyogVXNpbmcgYSBzb2xpZCBjb2xvciAqL1xuICAgIH1cbiAgXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgXG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhiOWRjMztcbiAgICB9XG4gIFxuICAgIGlvbi1pdGVtIHtcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgfVxuICBcbiAgICAuY291bnRyeS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgXG4gICAgLmNvdW50cnktaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IC8qIEljb24gY29sb3IgdG8gbWF0Y2ggdGhlIHRoZW1lICovXG4gICAgfVxuICBcbiAgIiwiLyogY291bnRyeS1zZWFyY2gtbW9kYWwuY29tcG9uZW50LnNjc3MgKi9cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAvKiBVc2luZyBhIHNvbGlkIGNvbG9yICovXG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhiOWRjMztcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4uY291bnRyeS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvdW50cnktaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IC8qIEljb24gY29sb3IgdG8gbWF0Y2ggdGhlIHRoZW1lICovXG59Il19 */"] });


/***/ }),

/***/ 5635:
/*!********************************************************!*\
  !*** ./src/app/enroute-chat/enroute-chat.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrouteChatComponent": () => (/* binding */ EnrouteChatComponent)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);










const _c0 = function (a0, a1) {
  return {
    "my-message": a0,
    "other-message": a1
  };
};

function EnrouteChatComponent_ion_grid_11_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 18)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("offset", message_r5.myMsg ? 3 : 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, message_r5.myMsg, !message_r5.myMsg));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r5.fromName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", message_r5.msg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 5, message_r5.createdAt == null ? null : message_r5.createdAt.toMillis(), "short"));
  }
}

function EnrouteChatComponent_ion_grid_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnrouteChatComponent_ion_grid_11_ion_row_1_Template, 11, 11, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.messages));
  }
}

function EnrouteChatComponent_div_12_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 21)(1, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-skeleton-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animated", true);
  }
}

function EnrouteChatComponent_div_12_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 21)(1, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-skeleton-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("animated", true);
  }
}

function EnrouteChatComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnrouteChatComponent_div_12_ion_item_1_Template, 3, 1, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EnrouteChatComponent_div_12_ion_item_2_Template, 3, 1, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.skeletOns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.skeletOns);
  }
}

function EnrouteChatComponent_ion_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 24);
  }
}

function EnrouteChatComponent_ion_list_header_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list-header", 25)(1, "ion-label", 26)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "We Respond Immediately");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tell Us How We can Help You.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

class EnrouteChatComponent {
  constructor(chatService, router) {
    this.chatService = chatService;
    this.router = router;
    this.newMsg = '';
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.skeletOns = [{}, {}, {}, {}];
      _this.hideSkeleton = true;
      _this.messages = _this.chatService.getChatMessage(_this.chatData.userId);

      _this.messages.subscribe(d => {
        if (d.length == 0) {
          _this.hasNoData = true;
          _this.hideSkeleton = false;
        } else {
          _this.hideSkeleton = false;
          _this.hasNoData = false;
        }
      });
    })();
  }

  Show() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  ngOnInit() {
    // Use the passed data if needed
    console.log(this.chatData);
  }

  sendMessage() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.chatService.addChatEnRouteMessage(_this2.newMsg, _this2.chatData.userId);
      _this2.newMsg = '';

      _this2.content.scrollToBottom();

      _this2.chatService.updatChatMessageInfo(_this2.chatData.userId);
    })();
  }

}

EnrouteChatComponent.ɵfac = function EnrouteChatComponent_Factory(t) {
  return new (t || EnrouteChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

EnrouteChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EnrouteChatComponent,
  selectors: [["app-enroute-chat"]],
  viewQuery: function EnrouteChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    chatData: "chatData"
  },
  decls: 24,
  vars: 6,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary"], ["slot", "end"], ["name", "call", "slot", "icon-only"], [1, "ion-padding"], [4, "ngIf"], ["lines", "none", 1, "ion-no-padding"], ["src", "../../../assets/imgs/chat.svg", 4, "ngIf"], ["style", "margin-top: 10%", 4, "ngIf"], ["color", "light"], [1, "ion-align-items-center"], ["size", "10"], ["autoGrow", "true", "placeholder", "Start Typing..", "rows", "1", "maxLength", "500", 1, "message-input", 3, "ngModel", "ionFocus", "ionBlur", "ngModelChange"], ["size", "2"], ["expand", "block", "fill", "clear", "color", "primary", 1, "msg-btn", 3, "disabled", "click"], ["name", "send", "slot", "icon-only"], [4, "ngFor", "ngForOf"], ["size", "9", 1, "message", 3, "offset", "ngClass"], [1, "time", "ion-text-right"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "width", "250px", "height", "400px", 3, "animated"], [2, "width", "250px", "height", "400px", "left", "100px", 3, "animated"], ["src", "../../../assets/imgs/chat.svg"], [2, "margin-top", "10%"], ["color", "primary", 1, "ion-text-center"]],
  template: function EnrouteChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Chat ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EnrouteChatComponent_ion_grid_11_Template, 3, 3, "ion-grid", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EnrouteChatComponent_div_12_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-list", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EnrouteChatComponent_ion_img_14_Template, 1, 0, "ion-img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EnrouteChatComponent_ion_list_header_15_Template, 6, 0, "ion-list-header", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-footer")(17, "ion-toolbar", 10)(18, "ion-row", 11)(19, "ion-col", 12)(20, "ion-textarea", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionFocus", function EnrouteChatComponent_Template_ion_textarea_ionFocus_20_listener() {
        return ctx.Show();
      })("ionBlur", function EnrouteChatComponent_Template_ion_textarea_ionBlur_20_listener() {
        return ctx.Hide();
      })("ngModelChange", function EnrouteChatComponent_Template_ion_textarea_ngModelChange_20_listener($event) {
        return ctx.newMsg = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-col", 14)(22, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnrouteChatComponent_Template_ion_button_click_22_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideSkeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideSkeleton);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.newMsg === "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnJvdXRlLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 3096:
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-otp-input */ 9306);







const _c0 = ["otpInput"];

function OtpComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function OtpComponent_ion_progress_bar_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-progress-bar", 17);
  }
}

const _c1 = function () {
  return {
    "width": "50px",
    "height": "50px",
    "font-size": "24px",
    "font-weight": "600",
    "background-color": "#ffffff",
    "color": "#333333",
    "border": "1px solid #cccccc",
    "border-radius": "8px"
  };
};

const _c2 = function (a1) {
  return {
    length: 6,
    inputStyles: a1
  };
};

class OtpComponent {
  constructor(modalCtrl, auth, overlay) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.overlay = overlay;
    this.defaultOtp = '';
    this.phone = '';
    this.countryCode = '';
    this.otp = '';
    this.countdown = 60;
    this.approve2 = false;
  }

  ngOnInit() {
    this.startCountdown();

    if (this.defaultOtp) {
      setTimeout(() => {
        this.otpInput.setValue(this.defaultOtp);
        this.otp = this.defaultOtp;
      }, 0);
    }
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    this.countdown = 60;
    this.stopCountdown(); // Clear any existing interval

    this.countdownInterval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  resend() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.countdown <= 0) {
        try {
          _this.overlay.showLoader('Resending OTP...'); // Call your resend OTP method here
          // For example: await this.auth.resendOTP();


          _this.overlay.hideLoader();

          _this.overlay.showToast('OTP resent successfully');

          _this.startCountdown(); // Restart the countdown

        } catch (error) {
          _this.overlay.hideLoader();

          _this.overlay.showAlert('Error', 'Failed to resend OTP. Please try again.');
        }
      }
    })();
  }

  verifyOtp() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.otp.length === 6) {
        _this2.approve2 = true;

        try {
          yield _this2.confirmationResult.confirm(_this2.otp);

          _this2.modalCtrl.dismiss({
            success: true
          });
        } catch (error) {
          console.error('OTP verification error:', error);

          _this2.overlay.showAlert('Error', 'Invalid OTP. Please try again.');
        } finally {
          _this2.approve2 = false;
        }
      } else {
        _this2.overlay.showAlert('Error', 'Please enter a valid 6-digit OTP.');
      }
    })();
  }

  closeModal() {
    this.modalCtrl.dismiss({
      success: false
    });
  }

}

OtpComponent.ɵfac = function OtpComponent_Factory(t) {
  return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_2__.OverlayService));
};

OtpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OtpComponent,
  selectors: [["app-otp"]],
  viewQuery: function OtpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.otpInput = _t.first);
    }
  },
  inputs: {
    defaultOtp: "defaultOtp",
    phone: "phone",
    countryCode: "countryCode",
    confirmationResult: "confirmationResult"
  },
  decls: 28,
  vars: 10,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-no-border"], ["lines", "none", 1, "ion-padding"], ["align", "center"], ["lines", "none", 1, "ion-margin"], ["align", "center", 1, "ion-padding-top", "ion-padding-bottom"], [3, "config", "onInputChange"], ["otpInput", ""], [1, "countdown"], ["shape", "round", "fill", "outline", "size", "large", "expand", "block", "color", "primary", "slot", "start", 3, "disabled", "click"], ["shape", "round", "size", "large", "expand", "block", "slot", "end", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Verify OTP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 4)(8, "ion-list", 5)(9, "ion-list-header")(10, "ion-label", 6)(11, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Enter Verification Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-item", 7)(14, "ion-label")(15, "div", 8)(16, "ng-otp-input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onInputChange", function OtpComponent_Template_ng_otp_input_onInputChange_16_listener($event) {
        return ctx.onOtpChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-item", 7)(19, "ion-label")(20, "div", 8)(21, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_23_listener() {
        return ctx.resend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Resend OTP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_25_listener() {
        return ctx.verifyOtp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, OtpComponent_ng_container_26_Template, 4, 0, "ng-container", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, OtpComponent_ion_progress_bar_27_Template, 1, 0, "ion-progress-bar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.countdown, " seconds remaining");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.countdown > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.otp || ctx.otp.length !== 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_otp_input__WEBPACK_IMPORTED_MODULE_6__.NgOtpInputComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-list-header[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\nion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n  .otp-input {\n  width: 50px !important;\n  height: 50px !important;\n  font-size: 24px !important;\n  font-weight: 600 !important;\n  background-color: #ffffff !important;\n  color: #333333 !important;\n  border: 1px solid #cccccc !important;\n  border-radius: 8px !important;\n  margin: 0 5px;\n}\n\n.countdown[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #333333;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxvdHBcXG90cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURJRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDREo7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGIiwiZmlsZSI6Im90cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbjo6bmctZGVlcCB7XG4gIC5vdHAtaW5wdXQge1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG59XG5cbi5jb3VudGRvd24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbjo6bmctZGVlcCAub3RwLWlucHV0IHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmNvdW50ZG93biB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"]
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 6818);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class AuthService {
  constructor(auth) {
    this.auth = auth;
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.user$ = this.userSubject.asObservable();
  } // Initialize the auth listener


  initAuthListener() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(this.auth, user => {
      this.userSubject.next(user);
    });
  } // Initialize RecaptchaVerifier


  recaptcha() {
    this.appVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: response => {
        console.log(response);
      },
      'expired-callback': () => {
        console.log('Recaptcha expired');
      }
    }, this.auth);
    this.appVerifier.render();
  }

  signInWithPhoneNumber(phoneNumber) {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this.appVerifier) _this.recaptcha();
        const confirmationResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPhoneNumber)(_this.auth, phoneNumber, _this.appVerifier);
        _this.confirmationResult = confirmationResult;
        return confirmationResult;
      } catch (e) {
        throw e;
      }
    })();
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  signInWithGoogle() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(auth, provider);
    })();
  }

  linkGoogleAccount(user) {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();

      try {
        const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_this2.auth, provider);
        const credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.linkWithCredential)(user, credential);
        }
      } catch (error) {
        if (error.code === 'auth/credential-already-in-use') {
          console.error('Error during Google sign-in: ', error);

          if (error.customData && error.customData.email) {
            const existingSignInMethods = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.fetchSignInMethodsForEmail)(_this2.auth, error.customData.email);

            if (existingSignInMethods.includes(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.PROVIDER_ID)) {
              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.unlink)(_this2.auth.currentUser, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.PROVIDER_ID);
              const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_this2.auth, provider);
              const credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.credentialFromResult(result);

              if (credential) {
                yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.linkWithCredential)(user, credential);
              }
            }
          } else {
            console.error('Missing email in error details: ', error);
          }
        } else {
          throw error;
        }
      }
    })();
  }

  verifyOtp(otp) {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this3.appVerifier) _this3.recaptcha();
        const result = yield _this3.confirmationResult.confirm(otp);
        console.log(result);
        const user = result?.user;
        console.log(user);
      } catch (e) {
        throw e?.message;
      }
    })();
  }

  logout() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(this.auth);
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5083:
/*!********************************************!*\
  !*** ./src/app/services/avatar.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarService": () => (/* binding */ AvatarService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geofire-common */ 3942);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geofire_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7556);












class AvatarService {
  constructor(auth, firestore, storage, http, authService) {
    var _this = this;

    this.auth = auth;
    this.firestore = firestore;
    this.storage = storage;
    this.http = http;
    this.authService = authService;
    this.driversSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.drivers$ = this.driversSubject.asObservable();
    this.activeListeners = {};
    this.auth.onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        if (user) {
          _this.user = user;
          _this.driverCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this.firestore, 'Drivers');

          _this.http.get("http://ip-api.com/json").subscribe(res => {
            console.log('res ', res);
            _this.countryCode = res.countryCode || 'NG';
          });

          yield _this.loadUserProfile();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  bookRide(data) {
    throw new Error('Method not implemented.');
  }

  loadUserProfile() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const profileDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this2.firestore, 'Riders', _this2.user.uid));

      if (profileDoc.exists()) {
        _this2.profile = profileDoc.data();
      } else {
        throw new Error('User profile not initialized');
      }
    })();
  }

  getCards() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Riders/${this.auth.currentUser.uid}/Cards`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getUserProfile(user) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Riders/${user.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(userDocRef);
  }

  getUserType(uid) {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this3.firestore, `Drivers/${uid}`);
      const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

      if (userDoc.exists()) {
        return 'driver';
      }

      return null;
    })();
  }

  RequestRideWithRiderDetails(requestDetails) {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.profile) {
        throw new Error('Profile not initialized');
      }

      try {
        const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this4.firestore, 'Drivers', requestDetails.driverId);
        const driverDocSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(driverDocRef);

        if (!driverDocSnap.exists()) {
          throw new Error('Driver does not exist');
        }

        const driverData = driverDocSnap.data();
        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this4.firestore, 'Request'));
        const loc = {
          Loc_lat: requestDetails.latLng.lat,
          Loc_lng: requestDetails.latLng.lng,
          Rider_id: _this4.user.uid,
          Rider_name: _this4.user.displayName,
          Rider_phone: _this4.user.phoneNumber,
          Rider_imgUrl: _this4.user.photoURL,
          Rider_rating: _this4.profile.Rider_rating || 0,
          Des_lat: requestDetails.dLatLng.lat,
          Des_lng: requestDetails.dLatLng.lng,
          Rider_Location: requestDetails.locationAddress,
          Rider_Destination: requestDetails.destinationAddress,
          Rider_email: _this4.user.email,
          countDown: 20,
          cancel: false,
          price: requestDetails.price,
          cash: requestDetails.cash,
          status: 'pending',
          driverDetails: {
            Driver_id: driverData.Driver_id,
            Driver_name: driverData.Driver_name,
            Driver_phone: driverData.Driver_phone,
            Driver_imgUrl: driverData.Driver_imgUrl,
            Driver_rating: driverData.Driver_rating,
            Driver_car: driverData.Driver_car,
            Driver_cartype: driverData.Driver_cartype,
            Driver_plate: driverData.Driver_plate,
            OneSignalId: driverData.OneSignalId // Add OneSignal ID here

          },
          requestId: requestRef.id,
          driverId: requestDetails.driverId
        };
        const batch = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.writeBatch)(_this4.firestore); // Update driver document

        batch.update(driverDocRef, {
          onlineState: false,
          currentRequestId: requestRef.id
        }); // Set request document

        batch.set(requestRef, loc); // Add initial message to messages subcollection

        const messagesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(requestRef, 'messages');
        const initialMessage = {
          msg: 'Ride request initiated',
          from: 'system',
          createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          myMsg: false,
          fromName: 'System'
        };
        batch.set((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(messagesRef), initialMessage); // Add to Allrides collection

        const allridesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this4.firestore, 'AllRides'));
        batch.set(allridesRef, { ...loc,
          createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          rideId: allridesRef.id
        });
        yield batch.commit();
        return requestRef.id;
      } catch (e) {
        throw new Error(`Error in RequestRideWithRiderDetails: ${e.message}`);
      }
    })();
  }

  RestartRequestSinceReject(ID) {
    var _this5 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this5.firestore, 'Request', ID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
        cancel: false
      });
    })();
  } //delete the driver that has a request sent to him.


  deleDriverFromRequest(ID) {
    var _this6 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this6.firestore, "Request", ID));
    })();
  }

  cancelRide(ID) {
    var _this7 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this7.firestore, 'Request', ID);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
        status: true
      });
    })();
  } //Push driver info into the request database


  PushDriverToRequest(Driver) {
    var _this8 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: Driver.geohash,
          Driver_lat: Driver.Driver_lat,
          Driver_lng: Driver.Driver_lng,
          Driver_id: Driver.Driver_id,
          Driver_name: Driver.Driver_name,
          Driver_car: Driver.Driver_car,
          Driver_imgUrl: Driver.Driver_imgUrl,
          Driver_rating: Driver.Driver_rating,
          distance: 0,
          duration: 0,
          seats: Driver.seats,
          start: false,
          stop: Driver.stop,
          intransit: Driver.intransit,
          cancel: Driver.cancel,
          Driver_cartype: Driver.Driver_cartype,
          Driver_plate: Driver.Driver_plate,
          time: '',
          onlineState: Driver.onlineState
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this8.firestore, "Request", Driver.Driver_id), { ...loc
        });
      } catch (e) {
        throw new Error(e);
      }

      console.log('done');
    })();
  }

  getPriceEstimate(distance) {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Your pricing logic goes here
        // For example, a simple flat rate per kilometer
        const ratePerKm = 1.5; // Adjust this based on your pricing strategy

        const price = distance * ratePerKm;
        return price;
      } catch (error) {
        console.error('Error calculating price estimate:', error);
        throw error;
      }
    })();
  }

  getDriverLocation(driverId) {
    return new Promise((resolve, reject) => {
      const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, 'Drivers', driverId);
      (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(driverDocRef, doc => {
        const data = doc.data();

        if (data && data.Driver_lat) {
          const driverLocation = {
            lat: data.Driver_lat,
            lng: data.Driver_lng
          };
          resolve(driverLocation);
        } else {
          resolve(null);
        }
      }, error => {
        reject(error);
      });
    });
  }

  updateLocation(coord) {
    var _this9 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this9.firestore, `Riders/${_this9.auth.currentUser.uid}`); // First, set the document with initial data

        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.lat, coord.lng]),
          Loc_lat: coord.lat,
          Loc_lng: coord.lng
        }, {
          merge: true
        }); // Use merge: true to avoid overwriting existing data
        // Then, update the document

        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.lat, coord.lng]),
          Loc_lat: coord.lat,
          Loc_lng: coord.lng
        });
        return true;
      } catch (e) {
        console.error('Error updating rider location:', e);
        return false;
      }
    })();
  }

  createHistory(Driver) {
    var _this10 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: Driver.geohash,
          Driver_lat: Driver.Driver_lat,
          Driver_lng: Driver.Driver_lng,
          Driver_id: Driver.Driver_id,
          Driver_name: Driver.Driver_name,
          Driver_car: Driver.Driver_car,
          Driver_imgUrl: Driver.Driver_imgUrl,
          Driver_rating: Driver.Driver_rating,
          distance: 0,
          duration: 0,
          seats: Driver.seats,
          start: true,
          stop: Driver.stop,
          intransit: Driver.intransit,
          cancel: Driver.cancel,
          Driver_cartype: Driver.Driver_cartype,
          Driver_plate: Driver.Driver_plate,
          time: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          onlineState: Driver.onlineState
        };
        const historyId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Generate a random ID

        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this10.firestore, "Riders", `${_this10.auth.currentUser.uid}/History/${historyId}`), { ...loc
        });
        console.log('History created successfully');
      } catch (error) {
        console.error('Error creating history:', error.message);
      }
    })();
  }

  UpdateCountDown(time, id) {
    var _this11 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this11.firestore, "Request", id);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          countDown: time
        });
        return true;
      } catch (e) {
        // alert(e)
        console.log(e);
        return null;
      }
    })();
  }

  AddKnownPlace(place) {
    var _this12 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this12.auth.currentUser.uid);
      console.log(place.full);

      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this12.firestore, 'Riders', `${_this12.auth.currentUser.uid}/KnownPlaces/${place.full}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
          place
        });
        return true;
      } catch (e) {
        console.log(e);
        return null;
      }
    })();
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  }

  checkDriversWithin(center, radiusInM) {
    var _this13 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log("Center:", center);
        console.log("Radius in meters:", radiusInM);
        const bounds = (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashQueryBounds)(center, radiusInM);
        const promises = bounds.map((b, index) => {
          const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(_this13.driverCollection, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)("geohash"), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.startAt)(b[0]), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.endAt)(b[1]));
          return new Promise((resolve, reject) => {
            const unsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(q, snapshot => {
              const drivers = snapshot.docs.map(doc => {
                const data = doc.data();
                console.log("Driver data from snapshot:", data);
                return data;
              });
              console.log("Query results for bounds", b, drivers);
              resolve(drivers);
              unsubscribe(); // Unsubscribe once data is fetched

              delete _this13.activeListeners[index];
            }, error => {
              console.error('Error in onSnapshot:', error);
              reject(error);
              unsubscribe(); // Unsubscribe in case of error

              delete _this13.activeListeners[index];
            }); // Store the unsubscribe function to manage listeners

            _this13.activeListeners[index] = unsubscribe;
          });
        });
        const results = yield Promise.all(promises);
        const allDrivers = results.reduce((acc, curr) => acc.concat(curr), []);
        console.log("All drivers from queries:", allDrivers);
        const matchingDrivers = allDrivers.filter(driver => {
          if (!driver || !driver.Driver_lat || !driver.Driver_lng) {
            console.error(`Driver ${driver?.Driver_id || 'unknown'} has missing coordinates:`, driver);
            return false;
          }

          const distanceInKm = _this13.calculateDistance(center[0], center[1], driver.Driver_lat, driver.Driver_lng);

          const distanceInM = distanceInKm * 1000;
          console.log(`Driver ${driver.Driver_id} distance:`, distanceInM);

          if (distanceInM <= radiusInM) {
            driver.duration = distanceInM / (50 / 3.6); // duration in seconds, assuming 50 km/h speed

            return true;
          } else {
            return false;
          }
        });
        console.log("Matching drivers within radius:", matchingDrivers);
        return matchingDrivers;
      } catch (e) {
        console.error('Error in checkDriversWithin:', e);
        throw new Error(e);
      }
    })();
  }

  time_convert(num) {
    var minutes = Math.floor(num / 60);
    return minutes;
  }

  getDriver() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(this.driverCollection, {
      idField: 'id'
    });
  }

  update(pokemon) {
    const pokemonDocumentReference = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `pokemon/${pokemon.Driver_id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(pokemonDocumentReference, { ...pokemon
    });
  }

  uploadImage(cameraFile, uid) {
    var _this14 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_this14.storage, `avatars/${uid}`);

      try {
        // Upload the image as a base64 string
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.uploadString)(storageRef, cameraFile.base64String, 'base64'); // Get the download URL for the uploaded image

        const imageUrl = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(storageRef); // Reference to the user's document in Firestore

        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this14.firestore, `Riders/${uid}`); // Check if the document exists

        const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

        if (docSnapshot.exists()) {
          // If the document exists, update the photoURL field
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
            photoURL: imageUrl
          });
        } else {
          // If the document does not exist, create it with the photoURL field
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
            photoURL: imageUrl
          }, {
            merge: true
          });
        }

        return imageUrl;
      } catch (e) {
        console.error('Error uploading image:', e);
        return null;
      }
    })();
  }

  createUser(name, email, img, phone, uid) {
    var _this15 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          Loc_lat: 0,
          Loc_lng: 0,
          Rider_id: uid,
          Rider_name: name,
          Rider_phone: phone,
          Rider_imgUrl: img,
          Rider_rating: 0,
          Des_lat: 0,
          Des_lng: 0,
          Rider_Location: '',
          Rider_Destination: '',
          Rider_email: email,
          countDown: 0,
          cancel: false,
          price: 0,
          cash: true
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this15.firestore, "Riders", uid), { ...loc
        });
        return true;
      } catch (e) {
        return null;
      }
    })();
  }

  getMessage() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Messages/${this.auth.currentUser.uid}/messages`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getChatMessage(requestId) {
    const messagesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Request/${requestId}/messages`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(messagesRef);
  }

  addChatEnRouteMessage(msg, requestId) {
    var _this16 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messagesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this16.firestore, `Request/${requestId}/messages`);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)(messagesRef, {
        msg: msg,
        from: _this16.user.uid,
        createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
        myMsg: true,
        fromName: _this16.user.displayName
      });
    })();
  }

  updatChatMessageInfo(requestId) {
    var _this17 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this17.firestore, `Request/${requestId}`), {
        name: _this17.user.displayName,
        id: _this17.user.uid,
        phone: _this17.user.phoneNumber,
        email: _this17.user.email,
        new: true
      });
    })();
  }

  getKnownPlaces() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Riders/${this.auth.currentUser.uid}/KnownPlaces`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getAllBlogs() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Blogs`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getDrivers() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Drivers`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  addChatMessage(msg) {
    var _this18 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this18.profile || !_this18.profile.Rider_id || !_this18.profile.Rider_name) {
        console.error('Profile is not initialized or missing required fields.');
        throw new Error('Profile is not initialized.');
      }

      try {
        return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this18.firestore, `Messages/${_this18.profile.Rider_id}/messages`), {
          msg: msg,
          from: _this18.auth.currentUser.uid,
          createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          myMsg: true,
          fromName: _this18.profile.Rider_name
        });
      } catch (error) {
        console.error('Error adding chat message:', error);
        throw error;
      }
    })();
  }

  updateMessageInfo() {
    var _this19 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this19.firestore, `Messages/${_this19.profile.Rider_id}`), {
        name: _this19.profile.Rider_name,
        id: _this19.profile.Rider_id,
        phone: _this19.profile.Rider_phone,
        email: _this19.profile.Rider_email,
        new: true
      });
    })();
  }

  updateDriverOnlineState(ID) {
    var _this20 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this20.firestore, 'Drivers', ID);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          onlineState: true
        });
        return true;
      } catch (e) {
        //alert(e)
        console.log(e);
        return null;
      }
    })();
  }

  checkCardExistsStripe(email, last4) {
    var _this21 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('checkCardExistsStripe called with email:', email, 'and last4:', last4);
      const cardsCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this21.firestore, `Riders/${_this21.user.uid}/cards`);
      console.log('cardsCollectionRef:', cardsCollectionRef);
      const cardQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(cardsCollectionRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('last4', '==', last4));
      const cardDocs = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(cardQuery);
      console.log('Number of card documents found:', cardDocs.size);
      cardDocs.forEach(doc => {
        console.log('Found card:', doc.data());
      });
      return !cardDocs.empty;
    })();
  }

  saveCard(cardDetails) {
    var _this22 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Saving card with details:', cardDetails);
      const cardsCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this22.firestore, `Riders/${_this22.user.uid}/cards`);
      const cardDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(cardsCollectionRef, cardDetails.cardId);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(cardDocRef, cardDetails);
      console.log('Card saved successfully:', cardDetails);
    })();
  }

  checkPaystackAuthCodeExists(authCode) {
    var _this23 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authCodeCollectionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this23.firestore, 'paystackAuthCodes');
      const authCodeQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(authCodeCollectionRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('authCode', '==', authCode));
      const authCodeDocs = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(authCodeQuery);
      return !authCodeDocs.empty;
    })();
  }

  savePaystackAuthCode(authCode) {
    var _this24 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authCodeDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this24.firestore, `paystackAuthCodes/${authCode}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(authCodeDocRef, {
        authCode
      });
    })();
  }

  updateFirestoreAfterPayment(paymentResult) {
    var _this25 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this25.firestore, `Riders/${_this25.user.uid}/payments/lastpayment`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(paymentDocRef, {
        paymentResult: paymentResult,
        paymentDate: new Date()
      });
    })();
  }

  getSavedPaymentMethods() {
    var _this26 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentMethodsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this26.firestore, `Riders/${_this26.user.uid}/cards`);
      const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(paymentMethodsRef);
      const methods = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return methods;
    })();
  }

  deleteSavedPaymentMethod(methodId) {
    var _this27 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentMethodDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this27.firestore, `Riders/${_this27.user.uid}/cards/${methodId}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(paymentMethodDocRef);
    })();
  }

  setActiveCard(email, cardId) {
    var _this28 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this28.firestore, `Riders/${email}`);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
        activeCardId: cardId
      }, {
        merge: true
      });
    })();
  }

  getActiveCard(email) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Riders/${email}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(userDocRef);
  } // Method to add a card for a user


  addCardStripe(email, cardId, last4) {
    var _this29 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this29.firestore, `Riders/${email}`);
      const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);
      const userData = userDoc.data();
      let cards = userData?.cards || [];
      cards.push({
        cardId,
        last4
      });
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
        cards
      }, {
        merge: true
      });
    })();
  }

}

AvatarService.ɵfac = function AvatarService_Factory(t) {
  return new (t || AvatarService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

AvatarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: AvatarService,
  factory: AvatarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5596:
/*!*********************************************!*\
  !*** ./src/app/services/overlay.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class OverlayService {
  constructor(loadingCtrl, toastCtrl, alertCtrl) {
    this.loadingCtrl = loadingCtrl;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.loader = null;
  }

  showLoader(message) {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loader) {
        yield _this.loader.dismiss();
      }

      _this.loader = yield _this.loadingCtrl.create({
        message: message,
        spinner: 'crescent'
      });
      yield _this.loader.present();
      return _this.loader;
    })();
  }

  hideLoader() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.loader) {
        yield _this2.loader.dismiss();
        _this2.loader = null;
      }
    })();
  }

  showToast(message, duration = 2000) {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'bottom'
      });
      yield toast.present();
    })();
  }

  showAlert(header, message) {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertCtrl.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

OverlayService.ɵfac = function OverlayService_Factory(t) {
  return new (t || OverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController));
};

OverlayService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OverlayService,
  factory: OverlayService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1863:
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PaymentService {
    constructor(http) {
        this.http = http;
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl;
    }
    createSetupIntent(email) {
        return this.http.post(`${this.serverUrl}/setup-intent`, { email });
    }
    savePaymentMethod(email, paymentMethodId) {
        return this.http.post(`${this.serverUrl}/save-payment-method`, { email, paymentMethodId });
    }
    retrievePaymentMethod(paymentMethodId) {
        return this.http.post(`${this.serverUrl}/retrieve-payment-method`, { paymentMethodId });
    }
    checkCardExistsStripe(email, last4) {
        return this.http.post(`${this.serverUrl}/check-card-exists`, { email, last4 });
    }
    payWithStripe(amount, currency, paymentMethodId, customerId) {
        return this.http.post(`${this.serverUrl}/pay/stripe`, { amount, currency, paymentMethodId, customerId });
    }
    processPaymentWithCardId(email, amount, cardId) {
        return this.http.post('/api/process-payment', { email, amount, cardId });
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PaymentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        apiKey: 'AIzaSyAM7UJdVZo95dz00IKQz_p0uI8Bse5KnZ8',
        authDomain: 'reboot-22979.firebaseapp.com',
        projectId: 'reboot-22979',
        storageBucket: 'reboot-22979.appspot.com',
        messagingSenderId: '1033966813085',
        appId: 'AIzaSyC3VpqBmNqCUe1_g_ELb-LASUYR98s9h5k',
    },
    onesignal: {
        appId: 'ba7d77ed-1525-416c-9ac5-7b5d36e68740',
        restApiKey: 'YTM3ODgyMzQtNjg1ZC00YTQwLWJmNjItNTA4M2VkMmY3MDdl',
        android_channel_id: ''
    },
    production: false,
    apiKey: "AIzaSyC2VPPqUJdOaeOW8VpNA3Y1iswP_uJ_wrY",
    serverUrl: "https://payment-server-wheat.vercel.app/",
    CountryJson: [
        {
            "name": "Afghanistan",
            "dialCode": "+93",
            "isoCode": "AF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg"
        },
        {
            "name": "Aland Islands",
            "dialCode": "+358",
            "isoCode": "AX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg"
        },
        {
            "name": "Albania",
            "dialCode": "+355",
            "isoCode": "AL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg"
        },
        {
            "name": "Algeria",
            "dialCode": "+213",
            "isoCode": "DZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg"
        },
        {
            "name": "American Samoa",
            "dialCode": "+1684",
            "isoCode": "AS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg"
        },
        {
            "name": "Andorra",
            "dialCode": "+376",
            "isoCode": "AD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg"
        },
        {
            "name": "Angola",
            "dialCode": "+244",
            "isoCode": "AO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg"
        },
        {
            "name": "Anguilla",
            "dialCode": "+1264",
            "isoCode": "AI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg"
        },
        {
            "name": "Antarctica",
            "dialCode": "+672",
            "isoCode": "AQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg"
        },
        {
            "name": "Antigua and Barbuda",
            "dialCode": "+1268",
            "isoCode": "AG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg"
        },
        {
            "name": "Argentina",
            "dialCode": "+54",
            "isoCode": "AR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg"
        },
        {
            "name": "Armenia",
            "dialCode": "+374",
            "isoCode": "AM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg"
        },
        {
            "name": "Aruba",
            "dialCode": "+297",
            "isoCode": "AW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg"
        },
        {
            "name": "Ascension Island",
            "dialCode": "+247",
            "isoCode": "AC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ac.svg"
        },
        {
            "name": "Australia",
            "dialCode": "+61",
            "isoCode": "AU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg"
        },
        {
            "name": "Austria",
            "dialCode": "+43",
            "isoCode": "AT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg"
        },
        {
            "name": "Azerbaijan",
            "dialCode": "+994",
            "isoCode": "AZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg"
        },
        {
            "name": "Bahamas",
            "dialCode": "+1242",
            "isoCode": "BS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg"
        },
        {
            "name": "Bahrain",
            "dialCode": "+973",
            "isoCode": "BH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg"
        },
        {
            "name": "Bangladesh",
            "dialCode": "+880",
            "isoCode": "BD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg"
        },
        {
            "name": "Barbados",
            "dialCode": "+1246",
            "isoCode": "BB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg"
        },
        {
            "name": "Belarus",
            "dialCode": "+375",
            "isoCode": "BY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg"
        },
        {
            "name": "Belgium",
            "dialCode": "+32",
            "isoCode": "BE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg"
        },
        {
            "name": "Belize",
            "dialCode": "+501",
            "isoCode": "BZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg"
        },
        {
            "name": "Benin",
            "dialCode": "+229",
            "isoCode": "BJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg"
        },
        {
            "name": "Bermuda",
            "dialCode": "+1441",
            "isoCode": "BM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg"
        },
        {
            "name": "Bhutan",
            "dialCode": "+975",
            "isoCode": "BT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg"
        },
        {
            "name": "Bolivia",
            "dialCode": "+591",
            "isoCode": "BO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg"
        },
        {
            "name": "Bosnia and Herzegovina",
            "dialCode": "+387",
            "isoCode": "BA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg"
        },
        {
            "name": "Botswana",
            "dialCode": "+267",
            "isoCode": "BW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg"
        },
        {
            "name": "Brazil",
            "dialCode": "+55",
            "isoCode": "BR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
        },
        {
            "name": "British Indian Ocean Territory",
            "dialCode": "+246",
            "isoCode": "IO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg"
        },
        {
            "name": "Brunei Darussalam",
            "dialCode": "+673",
            "isoCode": "BN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg"
        },
        {
            "name": "Bulgaria",
            "dialCode": "+359",
            "isoCode": "BG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg"
        },
        {
            "name": "Burkina Faso",
            "dialCode": "+226",
            "isoCode": "BF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg"
        },
        {
            "name": "Burundi",
            "dialCode": "+257",
            "isoCode": "BI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg"
        },
        {
            "name": "Cambodia",
            "dialCode": "+855",
            "isoCode": "KH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg"
        },
        {
            "name": "Cameroon",
            "dialCode": "+237",
            "isoCode": "CM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg"
        },
        {
            "name": "Canada",
            "dialCode": "+1",
            "isoCode": "CA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg"
        },
        {
            "name": "Cape Verde",
            "dialCode": "+238",
            "isoCode": "CV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg"
        },
        {
            "name": "Cayman Islands",
            "dialCode": "+1345",
            "isoCode": "KY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg"
        },
        {
            "name": "Central African Republic",
            "dialCode": "+236",
            "isoCode": "CF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg"
        },
        {
            "name": "Chad",
            "dialCode": "+235",
            "isoCode": "TD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg"
        },
        {
            "name": "Chile",
            "dialCode": "+56",
            "isoCode": "CL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg"
        },
        {
            "name": "China",
            "dialCode": "+86",
            "isoCode": "CN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg"
        },
        {
            "name": "Christmas Island",
            "dialCode": "+61",
            "isoCode": "CX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "dialCode": "+61",
            "isoCode": "CC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg"
        },
        {
            "name": "Colombia",
            "dialCode": "+57",
            "isoCode": "CO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg"
        },
        {
            "name": "Comoros",
            "dialCode": "+269",
            "isoCode": "KM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg"
        },
        {
            "name": "Congo",
            "dialCode": "+242",
            "isoCode": "CG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg"
        },
        {
            "name": "Cook Islands",
            "dialCode": "+682",
            "isoCode": "CK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg"
        },
        {
            "name": "Costa Rica",
            "dialCode": "+506",
            "isoCode": "CR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg"
        },
        {
            "name": "Croatia",
            "dialCode": "+385",
            "isoCode": "HR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg"
        },
        {
            "name": "Cuba",
            "dialCode": "+53",
            "isoCode": "CU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg"
        },
        {
            "name": "Cyprus",
            "dialCode": "+357",
            "isoCode": "CY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg"
        },
        {
            "name": "Czech Republic",
            "dialCode": "+420",
            "isoCode": "CZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg"
        },
        {
            "name": "Democratic Republic of the Congo",
            "dialCode": "+243",
            "isoCode": "CD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg"
        },
        {
            "name": "Denmark",
            "dialCode": "+45",
            "isoCode": "DK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg"
        },
        {
            "name": "Djibouti",
            "dialCode": "+253",
            "isoCode": "DJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg"
        },
        {
            "name": "Dominica",
            "dialCode": "+1767",
            "isoCode": "DM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg"
        },
        {
            "name": "Dominican Republic",
            "dialCode": "+1849",
            "isoCode": "DO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg"
        },
        {
            "name": "Ecuador",
            "dialCode": "+593",
            "isoCode": "EC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg"
        },
        {
            "name": "Egypt",
            "dialCode": "+20",
            "isoCode": "EG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg"
        },
        {
            "name": "El Salvador",
            "dialCode": "+503",
            "isoCode": "SV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg"
        },
        {
            "name": "Equatorial Guinea",
            "dialCode": "+240",
            "isoCode": "GQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg"
        },
        {
            "name": "Eritrea",
            "dialCode": "+291",
            "isoCode": "ER",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg"
        },
        {
            "name": "Estonia",
            "dialCode": "+372",
            "isoCode": "EE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg"
        },
        {
            "name": "Eswatini",
            "dialCode": "+268",
            "isoCode": "SZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg"
        },
        {
            "name": "Ethiopia",
            "dialCode": "+251",
            "isoCode": "ET",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg"
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "dialCode": "+500",
            "isoCode": "FK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg"
        },
        {
            "name": "Faroe Islands",
            "dialCode": "+298",
            "isoCode": "FO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg"
        },
        {
            "name": "Fiji",
            "dialCode": "+679",
            "isoCode": "FJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg"
        },
        {
            "name": "Finland",
            "dialCode": "+358",
            "isoCode": "FI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg"
        },
        {
            "name": "France",
            "dialCode": "+33",
            "isoCode": "FR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg"
        },
        {
            "name": "French Guiana",
            "dialCode": "+594",
            "isoCode": "GF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg"
        },
        {
            "name": "French Polynesia",
            "dialCode": "+689",
            "isoCode": "PF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg"
        },
        {
            "name": "Gabon",
            "dialCode": "+241",
            "isoCode": "GA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg"
        },
        {
            "name": "Gambia",
            "dialCode": "+220",
            "isoCode": "GM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg"
        },
        {
            "name": "Georgia",
            "dialCode": "+995",
            "isoCode": "GE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg"
        },
        {
            "name": "Germany",
            "dialCode": "+49",
            "isoCode": "DE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg"
        },
        {
            "name": "Ghana",
            "dialCode": "+233",
            "isoCode": "GH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg"
        },
        {
            "name": "Gibraltar",
            "dialCode": "+350",
            "isoCode": "GI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg"
        },
        {
            "name": "Greece",
            "dialCode": "+30",
            "isoCode": "GR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg"
        },
        {
            "name": "Greenland",
            "dialCode": "+299",
            "isoCode": "GL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg"
        },
        {
            "name": "Grenada",
            "dialCode": "+1473",
            "isoCode": "GD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg"
        },
        {
            "name": "Guadeloupe",
            "dialCode": "+590",
            "isoCode": "GP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg"
        },
        {
            "name": "Guam",
            "dialCode": "+1671",
            "isoCode": "GU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg"
        },
        {
            "name": "Guatemala",
            "dialCode": "+502",
            "isoCode": "GT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg"
        },
        {
            "name": "Guernsey",
            "dialCode": "+44-1481",
            "isoCode": "GG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg"
        },
        {
            "name": "Guinea",
            "dialCode": "+224",
            "isoCode": "GN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg"
        },
        {
            "name": "Guinea-Bissau",
            "dialCode": "+245",
            "isoCode": "GW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg"
        },
        {
            "name": "Guyana",
            "dialCode": "+592",
            "isoCode": "GY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg"
        },
        {
            "name": "Haiti",
            "dialCode": "+509",
            "isoCode": "HT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg"
        },
        {
            "name": "Holy See (Vatican City State)",
            "dialCode": "+379",
            "isoCode": "VA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg"
        },
        {
            "name": "Honduras",
            "dialCode": "+504",
            "isoCode": "HN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg"
        },
        {
            "name": "Hong Kong",
            "dialCode": "+852",
            "isoCode": "HK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg"
        },
        {
            "name": "Hungary",
            "dialCode": "+36",
            "isoCode": "HU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg"
        },
        {
            "name": "Iceland",
            "dialCode": "+354",
            "isoCode": "IS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg"
        },
        {
            "name": "India",
            "dialCode": "+91",
            "isoCode": "IN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"
        },
        {
            "name": "Indonesia",
            "dialCode": "+62",
            "isoCode": "ID",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg"
        },
        {
            "name": "Iran",
            "dialCode": "+98",
            "isoCode": "IR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg"
        },
        {
            "name": "Iraq",
            "dialCode": "+964",
            "isoCode": "IQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg"
        },
        {
            "name": "Ireland",
            "dialCode": "+353",
            "isoCode": "IE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg"
        },
        {
            "name": "Isle of Man",
            "dialCode": "+44-1624",
            "isoCode": "IM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg"
        },
        {
            "name": "Israel",
            "dialCode": "+972",
            "isoCode": "IL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/il.svg"
        },
        {
            "name": "Italy",
            "dialCode": "+39",
            "isoCode": "IT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg"
        },
        {
            "name": "Ivory Coast / Cote d'Ivoire",
            "dialCode": "+225",
            "isoCode": "CI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg"
        },
        {
            "name": "Jamaica",
            "dialCode": "+1876",
            "isoCode": "JM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg"
        },
        {
            "name": "Japan",
            "dialCode": "+81",
            "isoCode": "JP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg"
        },
        {
            "name": "Jersey",
            "dialCode": "+44-1534",
            "isoCode": "JE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg"
        },
        {
            "name": "Jordan",
            "dialCode": "+962",
            "isoCode": "JO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg"
        },
        {
            "name": "Kazakhstan",
            "dialCode": "+77",
            "isoCode": "KZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg"
        },
        {
            "name": "Kenya",
            "dialCode": "+254",
            "isoCode": "KE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg"
        },
        {
            "name": "Kiribati",
            "dialCode": "+686",
            "isoCode": "KI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg"
        },
        {
            "name": "Korea, Democratic People's Republic of Korea",
            "dialCode": "+850",
            "isoCode": "KP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg"
        },
        {
            "name": "Korea, Republic of South Korea",
            "dialCode": "+82",
            "isoCode": "KR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg"
        },
        {
            "name": "Kosovo",
            "dialCode": "+383",
            "isoCode": "XK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg"
        },
        {
            "name": "Kuwait",
            "dialCode": "+965",
            "isoCode": "KW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg"
        },
        {
            "name": "Kyrgyzstan",
            "dialCode": "+996",
            "isoCode": "KG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg"
        },
        {
            "name": "Laos",
            "dialCode": "+856",
            "isoCode": "LA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg"
        },
        {
            "name": "Latvia",
            "dialCode": "+371",
            "isoCode": "LV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg"
        },
        {
            "name": "Lebanon",
            "dialCode": "+961",
            "isoCode": "LB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg"
        },
        {
            "name": "Lesotho",
            "dialCode": "+266",
            "isoCode": "LS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg"
        },
        {
            "name": "Liberia",
            "dialCode": "+231",
            "isoCode": "LR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg"
        },
        {
            "name": "Libya",
            "dialCode": "+218",
            "isoCode": "LY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg"
        },
        {
            "name": "Liechtenstein",
            "dialCode": "+423",
            "isoCode": "LI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg"
        },
        {
            "name": "Lithuania",
            "dialCode": "+370",
            "isoCode": "LT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg"
        },
        {
            "name": "Luxembourg",
            "dialCode": "+352",
            "isoCode": "LU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg"
        },
        {
            "name": "Macau",
            "dialCode": "+853",
            "isoCode": "MO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg"
        },
        {
            "name": "Madagascar",
            "dialCode": "+261",
            "isoCode": "MG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg"
        },
        {
            "name": "Malawi",
            "dialCode": "+265",
            "isoCode": "MW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg"
        },
        {
            "name": "Malaysia",
            "dialCode": "+60",
            "isoCode": "MY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg"
        },
        {
            "name": "Maldives",
            "dialCode": "+960",
            "isoCode": "MV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg"
        },
        {
            "name": "Mali",
            "dialCode": "+223",
            "isoCode": "ML",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg"
        },
        {
            "name": "Malta",
            "dialCode": "+356",
            "isoCode": "MT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg"
        },
        {
            "name": "Marshall Islands",
            "dialCode": "+692",
            "isoCode": "MH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg"
        },
        {
            "name": "Martinique",
            "dialCode": "+596",
            "isoCode": "MQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg"
        },
        {
            "name": "Mauritania",
            "dialCode": "+222",
            "isoCode": "MR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg"
        },
        {
            "name": "Mauritius",
            "dialCode": "+230",
            "isoCode": "MU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg"
        },
        {
            "name": "Mayotte",
            "dialCode": "+262",
            "isoCode": "YT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg"
        },
        {
            "name": "Mexico",
            "dialCode": "+52",
            "isoCode": "MX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg"
        },
        {
            "name": "Micronesia, Federated States of Micronesia",
            "dialCode": "+691",
            "isoCode": "FM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg"
        },
        {
            "name": "Moldova",
            "dialCode": "+373",
            "isoCode": "MD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg"
        },
        {
            "name": "Monaco",
            "dialCode": "+377",
            "isoCode": "MC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg"
        },
        {
            "name": "Mongolia",
            "dialCode": "+976",
            "isoCode": "MN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg"
        },
        {
            "name": "Montenegro",
            "dialCode": "+382",
            "isoCode": "ME",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg"
        },
        {
            "name": "Montserrat",
            "dialCode": "+1664",
            "isoCode": "MS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg"
        },
        {
            "name": "Morocco",
            "dialCode": "+212",
            "isoCode": "MA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg"
        },
        {
            "name": "Mozambique",
            "dialCode": "+258",
            "isoCode": "MZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg"
        },
        {
            "name": "Myanmar",
            "dialCode": "+95",
            "isoCode": "MM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg"
        },
        {
            "name": "Namibia",
            "dialCode": "+264",
            "isoCode": "NA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg"
        },
        {
            "name": "Nauru",
            "dialCode": "+674",
            "isoCode": "NR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg"
        },
        {
            "name": "Nepal",
            "dialCode": "+977",
            "isoCode": "NP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg"
        },
        {
            "name": "Netherlands",
            "dialCode": "+31",
            "isoCode": "NL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg"
        },
        {
            "name": "Netherlands Antilles",
            "dialCode": "+599",
            "isoCode": "AN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/an.svg"
        },
        {
            "name": "New Caledonia",
            "dialCode": "+687",
            "isoCode": "NC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg"
        },
        {
            "name": "New Zealand",
            "dialCode": "+64",
            "isoCode": "NZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg"
        },
        {
            "name": "Nicaragua",
            "dialCode": "+505",
            "isoCode": "NI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg"
        },
        {
            "name": "Niger",
            "dialCode": "+227",
            "isoCode": "NE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg"
        },
        {
            "name": "Nigeria",
            "dialCode": "+234",
            "isoCode": "NG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg"
        },
        {
            "name": "Niue",
            "dialCode": "+683",
            "isoCode": "NU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg"
        },
        {
            "name": "Norfolk Island",
            "dialCode": "+672",
            "isoCode": "NF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg"
        },
        {
            "name": "North Macedonia",
            "dialCode": "+389",
            "isoCode": "MK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg"
        },
        {
            "name": "Northern Mariana Islands",
            "dialCode": "+1670",
            "isoCode": "MP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg"
        },
        {
            "name": "Norway",
            "dialCode": "+47",
            "isoCode": "NO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg"
        },
        {
            "name": "Oman",
            "dialCode": "+968",
            "isoCode": "OM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg"
        },
        {
            "name": "Pakistan",
            "dialCode": "+92",
            "isoCode": "PK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg"
        },
        {
            "name": "Palau",
            "dialCode": "+680",
            "isoCode": "PW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg"
        },
        {
            "name": "Palestine",
            "dialCode": "+970",
            "isoCode": "PS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
        },
        {
            "name": "Panama",
            "dialCode": "+507",
            "isoCode": "PA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg"
        },
        {
            "name": "Papua New Guinea",
            "dialCode": "+675",
            "isoCode": "PG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg"
        },
        {
            "name": "Paraguay",
            "dialCode": "+595",
            "isoCode": "PY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg"
        },
        {
            "name": "Peru",
            "dialCode": "+51",
            "isoCode": "PE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg"
        },
        {
            "name": "Philippines",
            "dialCode": "+63",
            "isoCode": "PH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg"
        },
        {
            "name": "Pitcairn",
            "dialCode": "+872",
            "isoCode": "PN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg"
        },
        {
            "name": "Poland",
            "dialCode": "+48",
            "isoCode": "PL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg"
        },
        {
            "name": "Portugal",
            "dialCode": "+351",
            "isoCode": "PT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg"
        },
        {
            "name": "Puerto Rico",
            "dialCode": "+1939",
            "isoCode": "PR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg"
        },
        {
            "name": "Qatar",
            "dialCode": "+974",
            "isoCode": "QA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg"
        },
        {
            "name": "Reunion",
            "dialCode": "+262",
            "isoCode": "RE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg"
        },
        {
            "name": "Romania",
            "dialCode": "+40",
            "isoCode": "RO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg"
        },
        {
            "name": "Russia",
            "dialCode": "+7",
            "isoCode": "RU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg"
        },
        {
            "name": "Rwanda",
            "dialCode": "+250",
            "isoCode": "RW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg"
        },
        {
            "name": "Saint Barthelemy",
            "dialCode": "+590",
            "isoCode": "BL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg"
        },
        {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dialCode": "+290",
            "isoCode": "SH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg"
        },
        {
            "name": "Saint Kitts and Nevis",
            "dialCode": "+1869",
            "isoCode": "KN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg"
        },
        {
            "name": "Saint Lucia",
            "dialCode": "+1758",
            "isoCode": "LC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg"
        },
        {
            "name": "Saint Martin",
            "dialCode": "+590",
            "isoCode": "MF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "dialCode": "+508",
            "isoCode": "PM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "dialCode": "+1784",
            "isoCode": "VC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg"
        },
        {
            "name": "Samoa",
            "dialCode": "+685",
            "isoCode": "WS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg"
        },
        {
            "name": "San Marino",
            "dialCode": "+378",
            "isoCode": "SM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg"
        },
        {
            "name": "Sao Tome and Principe",
            "dialCode": "+239",
            "isoCode": "ST",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg"
        },
        {
            "name": "Saudi Arabia",
            "dialCode": "+966",
            "isoCode": "SA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg"
        },
        {
            "name": "Senegal",
            "dialCode": "+221",
            "isoCode": "SN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg"
        },
        {
            "name": "Serbia",
            "dialCode": "+381",
            "isoCode": "RS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg"
        },
        {
            "name": "Seychelles",
            "dialCode": "+248",
            "isoCode": "SC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg"
        },
        {
            "name": "Sierra Leone",
            "dialCode": "+232",
            "isoCode": "SL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg"
        },
        {
            "name": "Singapore",
            "dialCode": "+65",
            "isoCode": "SG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg"
        },
        {
            "name": "Sint Maarten",
            "dialCode": "+1721",
            "isoCode": "SX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg"
        },
        {
            "name": "Slovakia",
            "dialCode": "+421",
            "isoCode": "SK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg"
        },
        {
            "name": "Slovenia",
            "dialCode": "+386",
            "isoCode": "SI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg"
        },
        {
            "name": "Solomon Islands",
            "dialCode": "+677",
            "isoCode": "SB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg"
        },
        {
            "name": "Somalia",
            "dialCode": "+252",
            "isoCode": "SO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg"
        },
        {
            "name": "South Africa",
            "dialCode": "+27",
            "isoCode": "ZA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "dialCode": "+500",
            "isoCode": "GS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg"
        },
        {
            "name": "South Sudan",
            "dialCode": "+211",
            "isoCode": "SS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg"
        },
        {
            "name": "Spain",
            "dialCode": "+34",
            "isoCode": "ES",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg"
        },
        {
            "name": "Sri Lanka",
            "dialCode": "+94",
            "isoCode": "LK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg"
        },
        {
            "name": "Sudan",
            "dialCode": "+249",
            "isoCode": "SD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg"
        },
        {
            "name": "Suriname",
            "dialCode": "+597",
            "isoCode": "SR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "dialCode": "+47",
            "isoCode": "SJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg"
        },
        {
            "name": "Sweden",
            "dialCode": "+46",
            "isoCode": "SE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg"
        },
        {
            "name": "Switzerland",
            "dialCode": "+41",
            "isoCode": "CH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg"
        },
        {
            "name": "Syrian Arab Republic",
            "dialCode": "+963",
            "isoCode": "SY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sy.svg"
        },
        {
            "name": "Taiwan",
            "dialCode": "+886",
            "isoCode": "TW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg"
        },
        {
            "name": "Tajikistan",
            "dialCode": "+992",
            "isoCode": "TJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg"
        },
        {
            "name": "Tanzania, United Republic of Tanzania",
            "dialCode": "+255",
            "isoCode": "TZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg"
        },
        {
            "name": "Thailand",
            "dialCode": "+66",
            "isoCode": "TH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg"
        },
        {
            "name": "Timor-Leste",
            "dialCode": "+670",
            "isoCode": "TL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg"
        },
        {
            "name": "Togo",
            "dialCode": "+228",
            "isoCode": "TG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg"
        },
        {
            "name": "Tokelau",
            "dialCode": "+690",
            "isoCode": "TK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg"
        },
        {
            "name": "Tonga",
            "dialCode": "+676",
            "isoCode": "TO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg"
        },
        {
            "name": "Trinidad and Tobago",
            "dialCode": "+1868",
            "isoCode": "TT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg"
        },
        {
            "name": "Tunisia",
            "dialCode": "+216",
            "isoCode": "TN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg"
        },
        {
            "name": "Turkey",
            "dialCode": "+90",
            "isoCode": "TR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg"
        },
        {
            "name": "Turkmenistan",
            "dialCode": "+993",
            "isoCode": "TM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg"
        },
        {
            "name": "Turks and Caicos Islands",
            "dialCode": "+1649",
            "isoCode": "TC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg"
        },
        {
            "name": "Tuvalu",
            "dialCode": "+688",
            "isoCode": "TV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg"
        },
        {
            "name": "Uganda",
            "dialCode": "+256",
            "isoCode": "UG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg"
        },
        {
            "name": "Ukraine",
            "dialCode": "+380",
            "isoCode": "UA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg"
        },
        {
            "name": "United Arab Emirates",
            "dialCode": "+971",
            "isoCode": "AE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg"
        },
        {
            "name": "United Kingdom",
            "dialCode": "+44",
            "isoCode": "GB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg"
        },
        {
            "name": "United States",
            "dialCode": "+1",
            "isoCode": "US",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg"
        },
        {
            "name": "United States Minor Outlying Islands",
            "dialCode": "+246",
            "isoCode": "UMI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/umi.svg"
        },
        {
            "name": "Uruguay",
            "dialCode": "+598",
            "isoCode": "UY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg"
        },
        {
            "name": "Uzbekistan",
            "dialCode": "+998",
            "isoCode": "UZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg"
        },
        {
            "name": "Vanuatu",
            "dialCode": "+678",
            "isoCode": "VU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg"
        },
        {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dialCode": "+58",
            "isoCode": "VE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg"
        },
        {
            "name": "Vietnam",
            "dialCode": "+84",
            "isoCode": "VN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg"
        },
        {
            "name": "Virgin Islands, British",
            "dialCode": "+1284",
            "isoCode": "VG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg"
        },
        {
            "name": "Virgin Islands, U.S.",
            "dialCode": "+1340",
            "isoCode": "VI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg"
        },
        {
            "name": "Wallis and Futuna",
            "dialCode": "+681",
            "isoCode": "WF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg"
        },
        {
            "name": "Yemen",
            "dialCode": "+967",
            "isoCode": "YE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg"
        },
        {
            "name": "Zambia",
            "dialCode": "+260",
            "isoCode": "ZM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg"
        },
        {
            "name": "Zimbabwe",
            "dialCode": "+263",
            "isoCode": "ZW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg"
        }
    ]
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map