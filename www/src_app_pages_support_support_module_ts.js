"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 7544:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 6227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
class SupportPageRoutingModule {
}
SupportPageRoutingModule.ɵfac = function SupportPageRoutingModule_Factory(t) { return new (t || SupportPageRoutingModule)(); };
SupportPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupportPageRoutingModule });
SupportPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 7544);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 6227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class SupportPageModule {
}
SupportPageModule.ɵfac = function SupportPageModule_Factory(t) { return new (t || SupportPageModule)(); };
SupportPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SupportPageModule });
SupportPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SupportPageModule, { declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule] }); })();


/***/ }),

/***/ 6227:
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
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

function SupportPage_ion_grid_11_ion_row_1_Template(rf, ctx) {
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

function SupportPage_ion_grid_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SupportPage_ion_grid_11_ion_row_1_Template, 11, 11, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.messages));
  }
}

function SupportPage_div_12_ion_item_1_Template(rf, ctx) {
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

function SupportPage_div_12_ion_item_2_Template(rf, ctx) {
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

function SupportPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SupportPage_div_12_ion_item_1_Template, 3, 1, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SupportPage_div_12_ion_item_2_Template, 3, 1, "ion-item", 20);
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

function SupportPage_ion_img_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-img", 24);
  }
}

function SupportPage_ion_list_header_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-list-header", 25)(1, "ion-label", 26)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "We Respond Immediately");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tell Us How We can Help You.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

class SupportPage {
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
      _this.messages = _this.chatService.getMessage();

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

  ngOnInit() {}

  sendMessage() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.chatService.addChatMessage(_this2.newMsg);
      _this2.newMsg = '';

      _this2.content.scrollToBottom();

      _this2.chatService.updateMessageInfo();
    })();
  }

}

SupportPage.ɵfac = function SupportPage_Factory(t) {
  return new (t || SupportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

SupportPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SupportPage,
  selectors: [["app-support"]],
  viewQuery: function SupportPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 24,
  vars: 6,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary"], ["slot", "end"], ["name", "call", "slot", "icon-only"], [1, "ion-padding"], [4, "ngIf"], ["lines", "none", 1, "ion-no-padding"], ["src", "../../../assets/imgs/chat.svg", 4, "ngIf"], ["style", "margin-top: 10%", 4, "ngIf"], ["color", "light"], [1, "ion-align-items-center"], ["size", "10"], ["autoGrow", "true", "placeholder", "Start Typing..", "rows", "1", "maxLength", "500", 1, "message-input", 3, "ngModel", "ionFocus", "ionBlur", "ngModelChange"], ["size", "2"], ["expand", "block", "fill", "clear", "color", "primary", 1, "msg-btn", 3, "disabled", "click"], ["name", "send", "slot", "icon-only"], [4, "ngFor", "ngForOf"], ["size", "9", 1, "message", 3, "offset", "ngClass"], [1, "time", "ion-text-right"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "width", "250px", "height", "400px", 3, "animated"], [2, "width", "250px", "height", "400px", "left", "100px", 3, "animated"], ["src", "../../../assets/imgs/chat.svg"], [2, "margin-top", "10%"], ["color", "primary", 1, "ion-text-center"]],
  template: function SupportPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Support ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SupportPage_ion_grid_11_Template, 3, 3, "ion-grid", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SupportPage_div_12_Template, 3, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-list", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SupportPage_ion_img_14_Template, 1, 0, "ion-img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SupportPage_ion_list_header_15_Template, 6, 0, "ion-list-header", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-footer")(17, "ion-toolbar", 10)(18, "ion-row", 11)(19, "ion-col", 12)(20, "ion-textarea", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionFocus", function SupportPage_Template_ion_textarea_ionFocus_20_listener() {
        return ctx.Show();
      })("ionBlur", function SupportPage_Template_ion_textarea_ionBlur_20_listener() {
        return ctx.Hide();
      })("ngModelChange", function SupportPage_Template_ion_textarea_ngModelChange_20_listener($event) {
        return ctx.newMsg = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-col", 14)(22, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_ion_button_click_22_listener() {
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
  styles: [".message-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 6px;\n  resize: none;\n  margin-top: 0px;\n  --padding-start: 10px;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n  white-space: pre-wrap;\n}\n\n.my-message[_ngcontent-%COMP%] {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.other-message[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  color: #fff;\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n\n.time[_ngcontent-%COMP%] {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.259);\n}\n\n.message-list[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n\n.my-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.other-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.my-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: #dcf8c6;\n}\n\n.other-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.message-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.message-time[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #888;\n  text-align: right;\n  margin-top: 5px;\n}\n\n.no-messages[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxwYWdlc1xcc3VwcG9ydFxcc3VwcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0UsMkJBQUE7RUNDSjtFRENFO0lBQ0UseUJBQUE7RUNDSjtBQUNGOztBREVFO0VBQ0ksbUVBQUE7QUNBTjs7QURNQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDSEo7O0FET0E7RUFDSSxxQ0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDSko7O0FET0E7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxxQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtBQ0pKOztBRE9BO0VBQ0ksMkJBQUE7QUNKSjs7QURPQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtBQ0pKOztBRE9BO0VBQ0ksU0FBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSkoiLCJmaWxlIjoic3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuICB9XG4gIFxuICAuc2xpZGUtdG9wIHtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xuICB9XG4gIFxuICBcbiAgXG4gXG4ubWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgXG59XG4gXG4ubXktbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbn1cbiBcbi5vdGhlci1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbn1cbiBcbi50aW1lIHtcbiAgICBjb2xvcjogI2RmZGZkZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjI1OSk7XG4gIH1cbiAgXG4ubWVzc2FnZS1saXN0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubXktbWVzc2FnZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm90aGVyLW1lc3NhZ2Uge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLm1lc3NhZ2UtYnViYmxlIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5teS1tZXNzYWdlIC5tZXNzYWdlLWJ1YmJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZjhjNjtcbn1cblxuLm90aGVyLW1lc3NhZ2UgLm1lc3NhZ2UtYnViYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWVzc2FnZS10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tZXNzYWdlLXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm8tbWVzc2FnZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gIH1cbn1cbi5zbGlkZS10b3Age1xuICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG59XG5cbi50aW1lIHtcbiAgY29sb3I6ICNkZmRmZGY7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW9uLXNrZWxldG9uLXRleHQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgOTgsIDI1NSwgMC4yNTkpO1xufVxuXG4ubWVzc2FnZS1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ubWVzc2FnZS1idWJibGUge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm15LW1lc3NhZ2UgLm1lc3NhZ2UtYnViYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZjhjNjtcbn1cblxuLm90aGVyLW1lc3NhZ2UgLm1lc3NhZ2UtYnViYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lc3NhZ2UtdGV4dCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1lc3NhZ2UtdGltZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm8tbWVzc2FnZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map