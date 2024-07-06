"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_phone-detail_phone-detail_module_ts"],{

/***/ 7329:
/*!*******************************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneDetailPageRoutingModule": () => (/* binding */ PhoneDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _phone_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-detail.page */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _phone_detail_page__WEBPACK_IMPORTED_MODULE_0__.PhoneDetailPage
    }
];
class PhoneDetailPageRoutingModule {
}
PhoneDetailPageRoutingModule.ɵfac = function PhoneDetailPageRoutingModule_Factory(t) { return new (t || PhoneDetailPageRoutingModule)(); };
PhoneDetailPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PhoneDetailPageRoutingModule });
PhoneDetailPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhoneDetailPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7112:
/*!***********************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneDetailPageModule": () => (/* binding */ PhoneDetailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _phone_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-detail-routing.module */ 7329);
/* harmony import */ var _phone_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-detail.page */ 549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class PhoneDetailPageModule {
}
PhoneDetailPageModule.ɵfac = function PhoneDetailPageModule_Factory(t) { return new (t || PhoneDetailPageModule)(); };
PhoneDetailPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PhoneDetailPageModule });
PhoneDetailPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _phone_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneDetailPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PhoneDetailPageModule, { declarations: [_phone_detail_page__WEBPACK_IMPORTED_MODULE_1__.PhoneDetailPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _phone_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhoneDetailPageRoutingModule] }); })();


/***/ }),

/***/ 549:
/*!*********************************************************!*\
  !*** ./src/app/pages/phone-detail/phone-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneDetailPage": () => (/* binding */ PhoneDetailPage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/otp/otp.component */ 3096);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);














function PhoneDetailPage_ion_select_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-select-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", country_r5.dialCode, " ", country_r5.name, " ");
  }
}
function PhoneDetailPage_ion_text_16_ion_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " * Please enter the Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneDetailPage_ion_text_16_ion_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " * Please enter a valid Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneDetailPage_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PhoneDetailPage_ion_text_16_ion_text_1_Template, 2, 0, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PhoneDetailPage_ion_text_16_ion_text_2_Template, 2, 0, "ion-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.form.get("phone").hasError("minlength") && !ctx_r1.form.get("phone").hasError("required"));
  }
}
function PhoneDetailPage_ion_label_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PhoneDetailPage_ion_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 20);
  }
}
function PhoneDetailPage_ion_progress_bar_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-progress-bar", 21);
  }
}
class PhoneDetailPage {
  constructor(modalCtrl, auth, authy, router, nav, authY, avatar, overlay, route) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.authy = authy;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.route = route;
    this.CountryCode = '+1';
    this.CountryJson = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.details = params["details"];
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]
      })
    });
  }
  countryCodeChange($event) {
    console.log($event.detail.value.toString());
    this.CountryCode = $event.detail.value.toString();
  }
  signIn() {
    var _this = this;
    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.approve2) try {
        if (!_this.form.valid) {
          _this.form.markAllAsTouched();
          return;
        }
        console.log(_this.form.value);
        _this.approve2 = true;
        console.log(_this.details);
        const response = yield _this.auth.signInWithPhoneNumber(_this.CountryCode + _this.form.value.phone);
        _this.approve2 = false;
        const options = {
          component: src_app_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            phone: _this.form.value.phone,
            countryCode: _this.CountryCode
          },
          swipeToClose: true
        };
        const modal = _this.modalCtrl.create(options);
        (yield modal).present();
        const data = (yield modal).onWillDismiss();
        _this.authy.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            if (user) {
              const result = yield _this.avatar.createUser(_this.details.user.displayName, _this.details.user.email, _this.details.user.photoURL || '', _this.CountryCode + _this.form.value.phone, user.uid);
              yield _this.avatar.createCard('Cash', 0, 'cash', 'None');
              _this.router.navigateByUrl('home');
            }
            _this.overlay.hideLoader();
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.log(e);
        _this.overlay.showAlert('Error', JSON.stringify(e));
        _this.approve2 = false;
      }
    })();
  }
}
PhoneDetailPage.ɵfac = function PhoneDetailPage_Factory(t) {
  return new (t || PhoneDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_5__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute));
};
PhoneDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: PhoneDetailPage,
  selectors: [["app-phone-detail"]],
  decls: 23,
  vars: 9,
  consts: [[1, "ion-no-border", 3, "translucent"], ["lines", "none"], [1, "ion-padding-top"], ["color", "primary", 1, "ion-text-center"], [1, "ion-margin-horizontal"], [3, "formGroup"], ["id", "sign-in-button"], [1, "ion-margin-vertical"], [1, "ion-margin"], ["interface", "action-sheet", 3, "ionChange"], [4, "ngFor", "ngForOf"], ["formControlName", "phone", "placeholder", "Enter Mobile Number", "type", "tel", "clearInput", "", "minlength", "10", "maxlength", "10"], [4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "color", "secondary", "expand", "block", 3, "disabled", "click"], ["color", "light", "slot", "end", "name", "arrow-forward", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [1, "ion-no-border"], ["lines", "none", 1, "ion-no-padding"], ["class", "error", "color", "danger", 4, "ngIf"], ["color", "danger", 1, "error"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function PhoneDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list", 1)(2, "ion-list-header", 2)(3, "ion-label", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Enter Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-item-group", 4)(7, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "ion-item", 8)(11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function PhoneDetailPage_Template_ion_select_ionChange_13_listener($event) {
        return ctx.countryCodeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PhoneDetailPage_ion_select_option_14_Template, 2, 2, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PhoneDetailPage_ion_text_16_Template, 3, 2, "ion-text", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PhoneDetailPage_Template_ion_button_click_17_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PhoneDetailPage_ion_label_18_Template, 2, 0, "ion-label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, PhoneDetailPage_ion_icon_19_Template, 1, 0, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, PhoneDetailPage_ion_progress_bar_20_Template, 1, 0, "ion-progress-bar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-content", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ion-list", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.CountryCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.CountryJson);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
  styles: ["@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 0.75em !important;\n}\nion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\nion-slides[_ngcontent-%COMP%] {\n  height: 440px;\n}\n.pm-awesome-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLWRldGFpbC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU9OSUMlMjBQUk9KRUNUU1xcbXlSaWRlci0yMDI0MDUyNFQwNDA1MDVaLTAwMVxcbXlSaWRlclxcc3JjXFxhcHBcXHBhZ2VzXFxwaG9uZS1kZXRhaWxcXHBob25lLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSTtJQUNFLHdCQUFBO0VDQUo7RURFRTtJQUNFLDZCQUFBO0VDQUo7QUFDRjtBREdFO0VBQ0U7SUFDRSx3QkFBQTtFQ0RKO0VER0U7SUFDRSw0QkFBQTtFQ0RKO0FBQ0Y7QURJQTtFQUNDLG9FQUFBO0FDRkQ7QURLQTtFQUNDLHFFQUFBO0FDRkQ7QURNSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0hSO0FESVE7RUFDSSxtQkFBQTtBQ0ZaO0FEUWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ05wQjtBRFNZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDUGhCO0FEVVE7RUFDSSw0QkFBQTtBQ1JaO0FEY0E7RUFFRSxZQUFBO0FDWkY7QURlQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDWkY7QURlQTtFQUNFLGFBQUE7QUNaRjtBRGdCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDYkoiLCJmaWxlIjoicGhvbmUtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gICAgfVxuICB9XG4gIFxuLnNsaWRlLWxlZnQge1xuXHRhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbi5zbGlkZS1yaWdodCB7XG5cdGFuaW1hdGlvbjogc2xpZGUtcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgICAgIC8vICAgcGFkZGluZy1ib3R0b206IDh2aDtcbiAgICAgICAgICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCwgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciwgaW9uLWhlYWRlcntcbiBcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1ne1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA0NDBweDtcbn1cblxuXG4ucG0tYXdlc29tZS1kaXZpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuIiwiQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgfVxufVxuLnNsaWRlLWxlZnQge1xuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLnNsaWRlLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG5pb24tZm9vdGVyIGlvbi1yb3cge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDIuNXZoO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLWlucHV0LCBpb24tZm9vdGVyIGlvbi1yb3cgaW9uLWxpc3QgaW9uLXRleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1saXN0IC5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC43NWVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyLCBpb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24taW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogNDQwcHg7XG59XG5cbi5wbS1hd2Vzb21lLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_phone-detail_phone-detail_module_ts.js.map