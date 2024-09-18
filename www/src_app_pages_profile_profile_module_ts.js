"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
class ProfilePageRoutingModule {
}
ProfilePageRoutingModule.ɵfac = function ProfilePageRoutingModule_Factory(t) { return new (t || ProfilePageRoutingModule)(); };
ProfilePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfilePageRoutingModule });
ProfilePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfilePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class ProfilePageModule {
}
ProfilePageModule.ɵfac = function ProfilePageModule_Factory(t) { return new (t || ProfilePageModule)(); };
ProfilePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfilePageModule });
ProfilePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePageModule, { declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule] }); })();


/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);













function ProfilePage_div_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 19);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r3.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ProfilePage_div_11_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Select avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function ProfilePage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "ion-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilePage_div_11_Template_ion_avatar_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.presentImageSourceActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProfilePage_div_11_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProfilePage_div_11_ng_template_4_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 12)(7, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ion-icon", 15)(13, "ion-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label", 18)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Ride receipts will be sent to your email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.user.photoURL)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.user.phoneNumber || "No phone number", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.user.email || "No email", " ");
  }
}

function ProfilePage_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading profile...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class ProfilePage {
  constructor(avatarService, authService, router, loadingController, alertController, auth, actionSheetController, fb) {
    var _this = this;

    this.avatarService = avatarService;
    this.authService = authService;
    this.router = router;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.auth = auth;
    this.actionSheetController = actionSheetController;
    this.fb = fb;
    this.auth.onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        if (user) {
          _this.user = user;

          _this.profileForm.patchValue({
            displayName: user.displayName || ''
          });

          _this.avatarService.profile = user; // Ensure the profile is set
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    console.log('ProfilePage initialized');
    this.profileForm = this.fb.group({
      displayName: ['']
    });
    this.profileForm.get('displayName').valueChanges.subscribe(value => {
      this.saveProfile();
    });
  }

  ngOnDestroy() {
    console.log('ProfilePage destroyed'); // Clean up any subscriptions or listeners if necessary
  }

  logout() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.authService.logout();

      _this2.router.navigateByUrl('/', {
        replaceUrl: true
      });
    })();
  }

  goBack() {
    // Use the router to navigate back
    this.router.navigate(['/home']); // Replace '/previous-page' with your desired route
  }

  presentImageSourceActionSheet() {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetController.create({
        header: 'Select Image Source',
        buttons: [{
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            _this3.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera);
          }
        }, {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            _this3.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos);
          }
        }, {
          text: 'File',
          icon: 'document',
          handler: () => {
            _this3.selectFile();
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  changeImage(source) {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Base64,
          source: source
        });

        if (image) {
          const loading = yield _this4.loadingController.create();
          yield loading.present();

          if (!_this4.avatarService.profile?.uid) {
            loading.dismiss();
            const alert = yield _this4.alertController.create({
              header: 'Upload failed',
              message: 'Profile UID is missing.',
              buttons: ['OK']
            });
            yield alert.present();
            return;
          }

          const result = yield _this4.avatarService.uploadImage(image, _this4.avatarService.profile.uid);
          loading.dismiss();

          if (!result) {
            const alert = yield _this4.alertController.create({
              header: 'Upload failed',
              message: 'There was a problem uploading your avatar.',
              buttons: ['OK']
            });
            yield alert.present();
          } else {
            const alert = yield _this4.alertController.create({
              header: 'Upload Successful',
              message: 'Your avatar has been successfully uploaded.',
              buttons: ['OK']
            });
            yield alert.present(); // Update the user profile

            if (_this4.auth.currentUser) {
              const result = yield _this4.avatarService.uploadImage(image, _this4.avatarService.profile.uid);
              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.updateProfile)(_this4.user, {
                photoURL: result
              });
              _this4.user = _this4.auth.currentUser; // Refresh the user object
            }
          }
        }
      } catch (error) {
        const alert = yield _this4.alertController.create({
          header: 'Upload failed',
          message: `There was a problem uploading your avatar: ${error.message}`,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  selectFile() {
    var _this5 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = /*#__PURE__*/function () {
        var _ref2 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          const file = event.target.files[0];

          if (file) {
            const reader = new FileReader();

            reader.onload = /*#__PURE__*/function () {
              var _ref3 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const image = {
                  base64String: e.target.result.split(',')[1]
                };
                const loading = yield _this5.loadingController.create();
                yield loading.present();

                if (!_this5.avatarService.profile?.uid) {
                  loading.dismiss();
                  const alert = yield _this5.alertController.create({
                    header: 'Upload failed',
                    message: 'Profile UID is missing.',
                    buttons: ['OK']
                  });
                  yield alert.present();
                  return;
                }

                const result = yield _this5.avatarService.uploadImage(image, _this5.avatarService.profile.uid);
                loading.dismiss();

                if (!result) {
                  const alert = yield _this5.alertController.create({
                    header: 'Upload failed',
                    message: 'There was a problem uploading your avatar.',
                    buttons: ['OK']
                  });
                  yield alert.present();
                } else {
                  const alert = yield _this5.alertController.create({
                    header: 'Upload Successful',
                    message: 'Your avatar has been successfully uploaded.',
                    buttons: ['OK']
                  });
                  yield alert.present(); // Update the user profile

                  if (_this5.auth.currentUser) {
                    yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.updateProfile)(_this5.user, {
                      photoURL: result
                    });
                    _this5.user = _this5.auth.currentUser; // Refresh the user object
                  }
                }
              });

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }();

            reader.readAsDataURL(file);
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      input.click();
    })();
  }

  saveProfile() {
    var _this6 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_this6.avatarService.firestore, `Riders/${_this6.user.uid}`); //const loading = await this.loadingController.create();
        //await loading.present();

        try {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.updateProfile)(_this6.user, {
            displayName: _this6.profileForm.get('displayName').value
          }); //loading.dismiss();
          // const alert = await this.alertController.create({
          //   header: 'Profile Updated',
          //   message: 'Your profile information has been updated.',
          //   buttons: ['OK'],
          // });
          // await alert.present();
        } catch (error) {// loading.dismiss();
          // const alert = await this.alertController.create({
          //   header: 'Update Failed',
          //   message: 'There was a problem updating your profile.',
          //   buttons: ['OK'],
          // });
          // await alert.present();
        }
      }
    })();
  }

}

ProfilePage.ɵfac = function ProfilePage_Factory(t) {
  return new (t || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder));
};

ProfilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProfilePage,
  selectors: [["app-profile"]],
  decls: 14,
  vars: 2,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary", 3, "click"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "log-out"], [1, "ion-padding"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "preview"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholder_avatar", ""], [3, "formGroup"], [1, "ion-margin"], ["name", "call", "color", "primary", "slot", "start"], ["name", "person", "color", "primary", "slot", "start"], ["formControlName", "displayName", "placeholder", "Name"], ["name", "mail", "color", "primary", "slot", "start"], ["color", "primary", 1, "ion-text-center", "ion-padding-top"], [3, "src"], [1, "fallback"]],
  template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilePage_Template_ion_button_click_3_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfilePage_Template_ion_button_click_6_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "My Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProfilePage_div_11_Template, 21, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProfilePage_ng_template_12_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName],
  styles: ["ion-avatar[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\nion-menu-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUU7RUFDRSwrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREdFO0VBQ0U7SUFDRSwyQkFBQTtFQ0FKO0VERUU7SUFDRSx5QkFBQTtFQ0FKO0FBQ0Y7O0FER0U7RUFDSSxtRUFBQTtBQ0ROOztBRElFO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQ0RKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIH1cbiAgXG4gIC5wcmV2aWV3IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mYWxsYmFjayB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5cbiAgQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlLXRvcCB7XG4gICAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiAgfVxuXG4gIGlvbi1pdGVte1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB9XG5cblxuICBcbiAgIiwiaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG4ucHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmFsbGJhY2sge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuLnNsaWRlLXRvcCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map