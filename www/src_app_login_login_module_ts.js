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
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 6818);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);


















function LoginPage_ion_text_26_ion_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " * Please enter the Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_text_26_ion_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " * Please enter a valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_text_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LoginPage_ion_text_26_ion_text_1_Template, 2, 0, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginPage_ion_text_26_ion_text_2_Template, 2, 0, "ion-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("minlength") && !ctx_r0.form.get("phone").hasError("required"));
  }
}

function LoginPage_ion_label_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function LoginPage_ion_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-icon", 24);
  }
}

function LoginPage_ion_progress_bar_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 25);
  }
}

class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay, alertController, platform) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.alertController = alertController;
    this.platform = platform;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.filteredCountries = [];
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };
    this.CountryCode = '+234';
    this.numberT = '+234';
  }

  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10)]
      })
    });
    this.filteredCountries = this.CountryJson; // Initialize ReCaptcha verifier

    this.recaptchaVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': response => {
        // reCAPTCHA solved - allow signIn
        this.signIn();
      },
      'expired-callback': () => {// Response expired - handle expired reCAPTCHA
      }
    }, this.authY);
    this.initializeBackButtonCustomHandler(); // Initialize back button handler
  }

  HideSplash() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
    })();
  }

  openCountrySearchModal() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__.CountrySearchModalComponent
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data) {
        _this.CountryCode = data.dialCode;
        _this.numberT = data.dialCode;
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
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  signIn() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.form.valid) {
          _this2.form.markAllAsTouched();

          return;
        }

        console.log('Form Value:', _this2.form.value);

        _this2.overlay.showLoader('');

        const fullPhoneNumber = _this2.numberT + _this2.form.value.phone;
        console.log('Attempting to sign in with phone number:', fullPhoneNumber); // Use AuthService to handle sign-in with phone number

        const confirmationResult = yield _this2.auth.signInWithPhoneNumber(fullPhoneNumber);
        console.log('Confirmation Result:', confirmationResult);
        let storedOTP = localStorage.getItem('defaultOTP');

        if (!storedOTP) {
          storedOTP = '';
        }

        _this2.overlay.hideLoader();

        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            defaultOtp: storedOTP,
            phone: _this2.form.value.phone,
            countryCode: _this2.numberT,
            confirmationResult: confirmationResult
          },
          swipeToClose: true
        };
        const modal = yield _this2.modalCtrl.create(options);
        yield modal.present();
        const data = yield modal.onWillDismiss();
        console.log('OTP Modal Dismissed:', data);

        _this2.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            if (user) {
              console.log('User Authenticated:', user);
              const isDriver = yield _this2.avatar.getUserType(user.uid);
              console.log('User Type:', isDriver ? 'Driver' : 'Rider');

              _this2.overlay.hideLoader();

              if (isDriver) {
                _this2.overlay.showAlert('Error', 'Riders cannot log in as drivers.');

                yield _this2.authY.signOut();
                _this2.approve2 = false;

                _this2.overlay.hideLoader();
              } else {
                console.log('User Profile Data:', data);

                if (!user.email) {
                  console.log('Navigating to details page');

                  _this2.router.navigateByUrl('details');

                  _this2.approve2 = false;

                  _this2.overlay.hideLoader();
                } else {
                  console.log('Navigating to home page');

                  _this2.router.navigateByUrl('home');

                  _this2.approve2 = false;

                  _this2.overlay.hideLoader();
                }

                _this2.overlay.hideLoader();
              }
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.error('Error during signIn:', e); //if (e.code === 'auth/invalid-app-credential' || e.code === 'auth/too-many-requests') {

        _this2.CountryCode = '+234';
        _this2.numberT = '+234';
        const defaultNumbers = ['9060427830', '9060427830'];
        const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];

        _this2.form.controls['phone'].setValue(randomDefaultNumber);

        localStorage.setItem('defaultOTP', '123456');

        _this2.overlay.showAlert('Daily SMS Limit Reached', `The daily SMS limit has been reached. Please use the default number +234:${randomDefaultNumber}`); // } else {
        //   this.overlay.showAlert('Error', `Error during sign-in: ${e.message || JSON.stringify(e)}`);
        // }


        _this2.overlay.hideLoader();

        _this2.approve2 = false;
      }
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_7__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_8__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 33,
  vars: 9,
  consts: [[1, "ion-no-border", 3, "translucent"], ["lines", "none"], [1, "ion-padding"], ["color", "primary", 1, "ion-text-center"], ["pager", "true", 3, "options"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "ion-no-padding"], [1, "ion-margin-horizontal"], [1, "ion-padding", 3, "formGroup"], ["id", "sign-in-button"], [1, "ion-margin-vertical"], ["shape", "round", "size", "large", "slot", "start", 3, "click"], ["label", "Outline input", "label-placement", "floating", "fill", "outline", "formControlName", "phone", "placeholder", "Mobile Number", "type", "tel", "clearInput", "", "minlength", "10", "maxlength", "10", 3, "ionFocus", "ionBlur"], ["class", "ion-text-center", 4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["id", "recaptcha-container"], [1, "ion-text-center"], ["class", "error", "color", "danger", 4, "ngIf"], ["color", "danger", 1, "error"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list", 1)(2, "ion-list-header", 2)(3, "ion-label", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "PANA RIDER");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Ride With Confidence and integrity");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content", 2)(9, "ion-slides", 4)(10, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "ion-img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ion-img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-row", 8)(17, "ion-list", 8)(18, "ion-item-group", 9)(19, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 12)(22, "ion-item", 1)(23, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_23_listener() {
        return ctx.openCountrySearchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ion-input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_25_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_25_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, LoginPage_ion_text_26_Template, 3, 2, "ion-text", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_27_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, LoginPage_ion_label_28_Template, 2, 0, "ion-label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, LoginPage_ion_icon_29_Template, 1, 0, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, LoginPage_ion_progress_bar_30_Template, 1, 0, "ion-progress-bar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "ion-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.CountryCode || "Select Country", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName],
  styles: ["@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 0.75em !important;\n}\nion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\nion-slides[_ngcontent-%COMP%] {\n  height: 440px;\n}\nion-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 35%;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-input[_ngcontent-%COMP%] {\n  width: 60%;\n  font-size: large;\n}\n.pm-awesome-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --padding-end: 0;\n  align-items: center;\n  justify-content: space-between;\n}\nion-item[lines=none][_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-start: 0;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-bottom: 10px;\n}\nion-select-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n}\n#recaptcha-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx3QkFBQTtFQ0NGO0VEQ0E7SUFDRSw2QkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0Usd0JBQUE7RUNBRjtFREVBO0lBQ0UsNEJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxvRUFBQTtBQ0RGO0FESUE7RUFDRSxxRUFBQTtBQ0RGO0FES0U7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUNGSjtBRElJO0VBQ0UsbUJBQUE7QUNGTjtBRE9RO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0xWO0FEU007RUFDRSxpQkFBQTtBQ1BSO0FEVU07RUFDRSw0QkFBQTtBQ1JSO0FEY0E7RUFDRSxZQUFBO0FDWEY7QURjQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDWEY7QURjQTtFQUNFLGFBQUE7QUNYRjtBRGNBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UsVUFBQTtFQUdBLGdCQUFBO0FDYkY7QURnQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsdURBQUE7QUNiRjtBRGdCQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDYkY7QURnQkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0FDYkY7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNiRjtBRGdCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNiRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbn1cblxuLnNsaWRlLWxlZnQge1xuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbi5zbGlkZS1yaWdodCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbmlvbi1mb290ZXIge1xuICBpb24tcm93IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24taW5wdXQsIGlvbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNDQwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAzNSU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDYwJTtcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAvLyAtLXBhZGRpbmctZW5kOiAwO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucG0tYXdlc29tZS1kaXZpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNoYWRvdy10b3Age1xuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW9uLWl0ZW1bbGluZXM9XCJub25lXCJdIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuI3JlY2FwdGNoYS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4iLCJAa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICB9XG59XG4uc2xpZGUtbGVmdCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4uc2xpZGUtcmlnaHQge1xuICBhbmltYXRpb246IHNsaWRlLXJpZ2h0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXJvdyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMi41dmg7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCBpb24taW5wdXQsIGlvbi1mb290ZXIgaW9uLXJvdyBpb24tbGlzdCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNDQwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAzNSU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnBtLWF3ZXNvbWUtZGl2aWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaGFkb3ctdG9wIHtcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmlvbi1pdGVtW2xpbmVzPW5vbmVdIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuI3JlY2FwdGNoYS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG59Il19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map