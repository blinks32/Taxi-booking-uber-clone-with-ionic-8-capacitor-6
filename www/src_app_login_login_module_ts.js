"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1784);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ 7759);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);



















function LoginPage_ion_text_26_ion_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " * Please enter the Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LoginPage_ion_text_26_ion_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " * Please enter a valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LoginPage_ion_text_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LoginPage_ion_text_26_ion_text_1_Template, 2, 0, "ion-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LoginPage_ion_text_26_ion_text_2_Template, 2, 0, "ion-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("minlength") && !ctx_r0.form.get("phone").hasError("required"));
  }
}
function LoginPage_ion_label_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LoginPage_ion_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 23);
  }
}
function LoginPage_ion_progress_bar_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-progress-bar", 24);
  }
}
class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.filteredCountries = [];
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };
    if (!(0,_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.isPlatform)('capacitor')) {
      _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.initialize();
    }
    this.CountryCode = '+1';
    this.numberT = '+1';
  }
  ngOnInit() {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(10)]
        })
      });
      _this.filteredCountries = _this.CountryJson;
    })();
  }
  HideSplash() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_5__.SplashScreen.hide();
    })();
  }
  openCountrySearchModal() {
    var _this2 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_6__.CountrySearchModalComponent
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      if (data) {
        _this2.CountryCode = data.dialCode;
        _this2.numberT = data.dialCode;
      }
    })();
  }
  filterCountries(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) || country.dialCode.includes(searchTerm));
  }
  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }
  Show() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }
  Hide() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }
  signIn() {
    var _this3 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this3.form.valid) {
          _this3.form.markAllAsTouched();
          return;
        }
        _this3.approve2 = true;
        const response = yield _this3.auth.signInWithPhoneNumber(_this3.numberT + _this3.form.value.phone);
        _this3.approve2 = false;
        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            phone: _this3.form.value.phone,
            countryCode: _this3.numberT
          },
          swipeToClose: true
        };
        const modal = yield _this3.modalCtrl.create(options);
        yield modal.present();
        const data = yield modal.onWillDismiss();
        _this3.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            console.log(user);
            if (!user.displayName) {
              _this3.router.navigateByUrl('details');
            } else {
              _this3.router.navigateByUrl('home');
            }
            _this3.overlay.hideLoader();
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        _this3.overlay.showAlert('Error', JSON.stringify(e));
        _this3.approve2 = false;
      }
    })();
  }
  loginWithGoogle() {
    var _this4 = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this4.approve = true;
        const googleUser = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.signIn();
        const credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.GoogleAuthProvider.credential(googleUser.authentication.idToken);
        const sToken = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.signInWithCredential)(_this4.authY, credential);
        if (sToken.user.phoneNumber) {
          yield _this4.avatar.createUser(sToken.user.displayName, sToken.user.email, sToken.user.photoURL || '', sToken.user.phoneNumber || '94909220', _this4.authY.currentUser.uid);
          yield _this4.avatar.createCard('Cash', 0, 'cash', 'None');
          _this4.router.navigateByUrl('home');
        } else {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.deleteUser)(_this4.authY.currentUser);
          const navigationExtras = {
            queryParams: {
              details: sToken
            }
          };
          _this4.nav.navigateForward('phone-detail', navigationExtras);
        }
        _this4.approve = false;
      } catch (e) {
        _this4.overlay.showAlert('Error', JSON.stringify(e));
        _this4.approve = false;
      }
    })();
  }
}
LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_8__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_9__.OverlayService));
};
LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 31,
  vars: 9,
  consts: [[1, "ion-no-border", 3, "translucent"], ["lines", "none"], [1, "ion-padding"], ["color", "primary", 1, "ion-text-center"], ["pager", "true", 3, "options"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "ion-no-padding"], [1, "ion-margin-horizontal"], [1, "ion-padding", 3, "formGroup"], ["id", "sign-in-button"], [1, "ion-margin-vertical"], ["shape", "round", "size", "large", "slot", "start", 3, "click"], ["formControlName", "phone", "placeholder", "Mobile Number", "type", "tel", "clearInput", "", "minlength", "10", "maxlength", "10", 3, "ionFocus", "ionBlur"], ["class", "ion-text-center", 4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [1, "ion-text-center"], ["class", "error", "color", "danger", 4, "ngIf"], ["color", "danger", 1, "error"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list", 1)(2, "ion-list-header", 2)(3, "ion-label", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "PANA RIDER");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Ride With Confidence and integrity");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-content", 2)(9, "ion-slides", 4)(10, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ion-img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ion-img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "ion-img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-row", 8)(17, "ion-list", 8)(18, "ion-item-group", 9)(19, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 12)(22, "ion-item", 1)(23, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_23_listener() {
        return ctx.openCountrySearchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_25_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_25_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, LoginPage_ion_text_26_Template, 3, 2, "ion-text", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_27_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, LoginPage_ion_label_28_Template, 2, 0, "ion-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, LoginPage_ion_icon_29_Template, 1, 0, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, LoginPage_ion_progress_bar_30_Template, 1, 0, "ion-progress-bar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.CountryCode || "Select Country", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName],
  styles: ["@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 0.75em !important;\n}\nion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\nion-slides[_ngcontent-%COMP%] {\n  height: 440px;\n}\nion-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 35%;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-input[_ngcontent-%COMP%] {\n  width: 60%;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.pm-awesome-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --padding-end: 0;\n  align-items: center;\n  justify-content: space-between;\n}\nion-item[lines=none][_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-start: 0;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-bottom: 10px;\n}\nion-select-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx3QkFBQTtFQ0NGO0VEQ0E7SUFDRSw2QkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0Usd0JBQUE7RUNBRjtFREVBO0lBQ0UsNEJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxvRUFBQTtBQ0RGO0FESUE7RUFDRSxxRUFBQTtBQ0RGO0FES0U7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUNGSjtBRElJO0VBQ0UsbUJBQUE7QUNGTjtBRE9RO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0xWO0FEU007RUFDRSxpQkFBQTtBQ1BSO0FEVU07RUFDRSw0QkFBQTtBQ1JSO0FEY0E7RUFDRSxZQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDWEY7QURjQTtFQUNFLGFBQUE7QUNYRjtBRGNBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsdURBQUE7QUNYRjtBRGNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNYRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWEY7QURjQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1hGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2xpZGUtbGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgfVxufVxuXG4uc2xpZGUtbGVmdCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuLnNsaWRlLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi1yb3cge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjV2aDtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1pbnB1dCwgaW9uLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbmlvbi1pbWcge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA0NDBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgd2lkdGg6IDM1JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24taW5wdXQge1xuICB3aWR0aDogNjAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5cbi5wbS1hd2Vzb21lLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2hhZG93LXRvcCB7XG4gIGJveC1zaGFkb3c6IDBweCAtMS41cHggMS41cHggcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQxNCk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pb24taXRlbVtsaW5lcz1cIm5vbmVcIl0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIiwiQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgfVxufVxuLnNsaWRlLWxlZnQge1xuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLnNsaWRlLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG5pb24tZm9vdGVyIGlvbi1yb3cge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWlucHV0LCBpb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLXRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCAuZXJyb3Ige1xuICBmb250LXNpemU6IDAuNzVlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciwgaW9uLWhlYWRlciB7XG4gIGhlaWdodDogNDRweDtcbn1cblxuaW9uLWltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDQ0MHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMzUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHdpZHRoOiA2MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cblxuLnBtLWF3ZXNvbWUtZGl2aWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaGFkb3ctdG9wIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmlvbi1pdGVtW2xpbmVzPW5vbmVdIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn0iXX0= */"]
});

/***/ }),

/***/ 5579:
/*!*************************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1784:
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAuth": () => (/* binding */ GoogleAuth)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5579);

const GoogleAuth = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4707)).then(m => new m.GoogleAuthWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map