"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment_payment_module_ts"],{

/***/ 4018:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 8622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
class PaymentPageRoutingModule {
}
PaymentPageRoutingModule.ɵfac = function PaymentPageRoutingModule_Factory(t) { return new (t || PaymentPageRoutingModule)(); };
PaymentPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentPageRoutingModule });
PaymentPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4923:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 4018);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 8622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class PaymentPageModule {
}
PaymentPageModule.ɵfac = function PaymentPageModule_Factory(t) { return new (t || PaymentPageModule)(); };
PaymentPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentPageModule });
PaymentPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentPageModule, { declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule] }); })();


/***/ }),

/***/ 8622:
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/payment.service */ 1863);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/avatar.service */ 5083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);









const _c0 = ["cardElement"];

function PaymentPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 11, 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PaymentPage_ion_card_15_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-radio", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_ion_card_15_ion_item_6_Template_ion_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const method_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.deletePaymentMethod(method_r4.cardId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const method_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](method_r4.last4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", method_r4.cardId);
  }
}

function PaymentPage_ion_card_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-card", 5)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Saved Payment Methods");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-card-content", 5)(5, "ion-radio-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PaymentPage_ion_card_15_Template_ion_radio_group_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.selectedCardId = $event);
    })("ionChange", function PaymentPage_ion_card_15_Template_ion_radio_group_ionChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.setActiveCard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PaymentPage_ion_card_15_ion_item_6_Template, 6, 2, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.selectedCardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.savedPaymentMethods);
  }
}

const _c1 = function (a0) {
  return {
    "slide-down": a0
  };
};

class PaymentPage {
  constructor(fb, alertController, loadingController, paymentService, avatarService) {
    this.fb = fb;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.paymentService = paymentService;
    this.avatarService = avatarService;
    this.approve = false;
    this.cardInitialized = false;
    this.selectedProvider = '';
    this.savedPaymentMethods = [];
    this.selectedCardId = '';
    this.defaultAmount = 1000;
    this.isCardComplete = false; // New state for card completion

    this.paymentForm = this.fb.group({
      provider: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      cardId: [''],
      authCode: ['']
    });
  }

  ngOnInit() {
    this.fetchSavedPaymentMethods();
    this.onPaymentProviderChange('stripe');
    this.getActiveCard();
  }

  ngAfterViewInit() {} // Ensure Stripe card is initialized


  initializeStripeCard() {
    if (this.cardElement && this.cardElement.nativeElement) {
      this.stripe = Stripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
      this.elements = this.stripe.elements();

      if (!this.card) {
        this.card = this.elements.create('card');
        this.card.mount(this.cardElement.nativeElement); // Listen for changes on the card input

        this.card.on('change', event => {
          this.isCardComplete = event.complete;
        });
      }

      this.cardInitialized = true;
    }
  }

  onPaymentProviderChange(provider) {
    this.selectedProvider = provider;
    this.paymentForm.patchValue({
      provider
    });

    if (provider === 'stripe') {
      setTimeout(() => {
        this.initializeStripeCard();
      }, 0);
    }
  }

  fetchSavedPaymentMethods() {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.savedPaymentMethods = yield _this.avatarService.getSavedPaymentMethods();
        console.log('Saved Payment Methods:', _this.savedPaymentMethods);

        if (_this.savedPaymentMethods.length > 0) {
          _this.selectedCardId = _this.savedPaymentMethods[0].cardId; // Set default selected card
        }
      } catch (error) {
        console.error('Error fetching saved payment methods:', error);
      }
    })();
  }

  getActiveCard() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const email = _this2.avatarService.user.email;

      _this2.avatarService.getActiveCard(email).subscribe(data => {
        if (data && data.activeCardId) {
          _this2.selectedCardId = data.activeCardId;
        }
      });
    })();
  }

  setActiveCard(event) {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const cardId = event.detail.value;

      if (cardId) {
        try {
          const email = _this3.avatarService.user.email;
          yield _this3.avatarService.setActiveCard(email, cardId);
          _this3.selectedCardId = cardId;
        } catch (error) {
          console.error('Error setting active card:', error);
        }
      }
    })();
  }

  processPayment() {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.paymentForm.valid) {
        const formValues = _this4.paymentForm.value;
        formValues.email = _this4.avatarService.user.email; // Use email from avatarService

        _this4.showLoading();

        try {
          let paymentResult;
          paymentResult = yield _this4.processStripePayment(formValues);
          console.log('Payment successful:', paymentResult);
          yield _this4.showAlert('Success', 'Payment successful!');
          yield _this4.avatarService.updateFirestoreAfterPayment(paymentResult);
        } catch (error) {
          console.error('Error during payment:', error);
          const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
          yield _this4.showAlert('Error', `Payment failed: ${errorMessage}`);
        } finally {
          _this4.hideLoading();

          _this4.approve = false;
        }
      } else {
        _this4.showAlert('Form Error', 'Please fill out all required fields.');
      }
    })();
  }

  processStripePayment(formValues) {
    var _this5 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Starting processStripePayment with formValues:', formValues);

      try {
        const setupIntentResponse = yield _this5.paymentService.createSetupIntent(formValues.email).toPromise();
        const clientSecret = setupIntentResponse.client_secret;
        console.log('Setup Intent created:', setupIntentResponse);
        const {
          setupIntent,
          error
        } = yield _this5.stripe.confirmCardSetup(clientSecret, {
          payment_method: {
            card: _this5.card,
            billing_details: {
              email: formValues.email
            }
          }
        });

        if (error) {
          const errorElement = document.getElementById('card-errors');

          if (errorElement) {
            errorElement.textContent = error.message;
          }

          yield _this5.showAlert('Payment Error', error.message);
          _this5.approve = false;
          console.error('Error confirming card setup:', error);
          throw new Error(error.message);
        }

        console.log('Card setup confirmed:', setupIntent);
        const paymentMethodId = setupIntent.payment_method; // Fetch the payment method details from your server (which will call Stripe)

        const paymentMethod = yield _this5.paymentService.retrievePaymentMethod(paymentMethodId).toPromise();
        console.log('Payment method retrieved:', paymentMethod);
        const cardDetails = paymentMethod.card;
        const last4 = cardDetails.last4;
        console.log('Checking if card exists with email:', formValues.email, ' and last4:', last4);
        const cardExists = yield _this5.avatarService.checkCardExistsStripe(formValues.email, last4);

        if (!cardExists) {
          yield _this5.avatarService.addCardStripe(formValues.email, paymentMethodId, last4);
          yield _this5.fetchSavedPaymentMethods();
        }

        return _this5.paymentService.savePaymentMethod(formValues.email, paymentMethodId).toPromise();
      } catch (error) {
        console.error('Error in processStripePayment:', error);
        throw error;
      }
    })();
  }

  deletePaymentMethod(cardId) {
    var _this6 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.avatarService.deleteSavedPaymentMethod(cardId);

      _this6.fetchSavedPaymentMethods(); // Refresh the list of saved payment methods

    })();
  }

  showLoading() {
    var _this7 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.loading = yield _this7.loadingController.create({
        message: 'Processing payment...'
      });
      yield _this7.loading.present();
    })();
  }

  hideLoading() {
    var _this8 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.loading) {
        yield _this8.loading.dismiss();
      }
    })();
  }

  showAlert(header, message) {
    var _this9 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

}

PaymentPage.ɵfac = function PaymentPage_Factory(t) {
  return new (t || PaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_1__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService));
};

PaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PaymentPage,
  selectors: [["app-payment"]],
  viewQuery: function PaymentPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    }
  },
  decls: 16,
  vars: 8,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary"], [1, "ion-text-center", "ion-padding"], [1, "ion-no-border", "no-shadow"], [1, "no-shadow"], [1, "payment-details", 3, "ngClass"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["color", "success", "shape", "round", "expand", "block", "size", "large", "type", "submit", 3, "disabled"], ["class", "no-shadow", 4, "ngIf"], [1, "stripe-element"], ["cardElement", ""], ["id", "card-errors", "role", "alert"], [3, "ngModel", "ngModelChange", "ionChange"], [4, "ngFor", "ngForOf"], ["slot", "start", 3, "value"], ["slot", "end", "color", "danger", 3, "click"]],
  template: function PaymentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 3)(8, "ion-card", 4)(9, "ion-card-content", 5)(10, "div", 6)(11, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PaymentPage_Template_form_ngSubmit_11_listener() {
        return ctx.processPayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PaymentPage_div_12_Template, 4, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Add Card ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PaymentPage_ion_card_15_Template, 7, 2, "ion-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.selectedProvider !== ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.paymentForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedProvider === "stripe");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.paymentForm.valid || !ctx.isCardComplete);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.savedPaymentMethods.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective],
  styles: ["@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n.payment-details[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s ease-in-out;\n}\n.payment-details.slide-down[_ngcontent-%COMP%] {\n  max-height: 500px; \n}\n.stripe-element[_ngcontent-%COMP%] {\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.payment-methods[_ngcontent-%COMP%]   ion-button.selected[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary) !important;\n  color: #fff;\n}\n.no-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.provider-logo[_ngcontent-%COMP%] {\n  height: 24px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxwYWdlc1xccGF5bWVudFxccGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDJCQUFBO0VDQ0Y7RURDQTtJQUNFLHlCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0UsbUVBQUE7QUNBRjtBREdBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQ0FGO0FERUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQ0NGO0FERUE7RUFDRSxpQkFBQSxFQUFBLHdDQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UscURBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cblxuLnNsaWRlLXRvcCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xufVxuXG5pb24taXRlbSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbn1cbi5wYXltZW50LWRldGFpbHMge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wYXltZW50LWRldGFpbHMuc2xpZGUtZG93biB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4OyAvKiBBZGp1c3QgYXMgbmVlZGVkIHRvIGZpdCB0aGUgY29udGVudCAqL1xufVxuXG4uc3RyaXBlLWVsZW1lbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wYXltZW50LW1ldGhvZHMgaW9uLWJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5vLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByb3ZpZGVyLWxvZ28ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuIiwiQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbi5zbGlkZS10b3Age1xuICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG5pb24taXRlbSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuLnBheW1lbnQtZGV0YWlscyB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnBheW1lbnQtZGV0YWlscy5zbGlkZS1kb3duIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgdG8gZml0IHRoZSBjb250ZW50ICovXG59XG5cbi5zdHJpcGUtZWxlbWVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBheW1lbnQtbWV0aG9kcyBpb24tYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm8tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvdmlkZXItbG9nbyB7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment_payment_module_ts.js.map