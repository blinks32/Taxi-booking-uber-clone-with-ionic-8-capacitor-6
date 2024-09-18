"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 6244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
class DetailsPageRoutingModule {
}
DetailsPageRoutingModule.ɵfac = function DetailsPageRoutingModule_Factory(t) { return new (t || DetailsPageRoutingModule)(); };
DetailsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailsPageRoutingModule });
DetailsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 6244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5362);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);











class DetailsPageModule {
}
DetailsPageModule.ɵfac = function DetailsPageModule_Factory(t) { return new (t || DetailsPageModule)(); };
DetailsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DetailsPageModule });
DetailsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_7__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_7__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.getAuth)())] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DetailsPageModule, { declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_7__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AuthModule] }); })();


/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 6818);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/image-upload.service */ 8397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);















function DetailsPage_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 21);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function DetailsPage_ng_template_10_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Select avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DetailsPage_ng_template_10_ion_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-progress-bar", 23);
  }
}

function DetailsPage_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DetailsPage_ng_template_10_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DetailsPage_ng_template_10_ion_progress_bar_2_Template, 1, 0, "ion-progress-bar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.approve2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.approve2);
  }
}

function DetailsPage_ion_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DetailsPage_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 24);
  }
}

function DetailsPage_ion_progress_bar_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-progress-bar", 23);
  }
}

class DetailsPage {
  constructor(overlay, authy, authService, avatar, router, actionSheetController, alertController, imageUploadService, // Inject the service
  loadingController, platform) {
    this.overlay = overlay;
    this.authy = authy;
    this.authService = authService;
    this.avatar = avatar;
    this.router = router;
    this.actionSheetController = actionSheetController;
    this.alertController = alertController;
    this.imageUploadService = imageUploadService;
    this.loadingController = loadingController;
    this.platform = platform; // Ensure the user is authenticated

    this.authy.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.avatar.profile = user; // Ensure the profile is set

        this.form.patchValue({
          fullname: user.displayName?.split(' ')[0] || '',
          lastname: user.displayName?.split(' ')[1] || '',
          email: user.email || ''
        });
      }
    });
  }

  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200)]
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200)]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200)]
      })
    });
  }

  changeImage(source) {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Base64,
          source: source
        });

        if (image) {
          const loading = yield _this.loadingController.create();
          yield loading.present();

          if (!_this.avatar.profile?.uid) {
            loading.dismiss();
            const alert = yield _this.alertController.create({
              header: 'Upload failed',
              message: 'Profile UID is missing.',
              buttons: ['OK']
            });
            yield alert.present();
            return;
          }

          try {
            const result = yield _this.avatar.uploadImage(image, _this.avatar.profile.uid);
            loading.dismiss();

            if (!result) {
              const alert = yield _this.alertController.create({
                header: 'Upload failed',
                message: 'There was a problem uploading your avatar.',
                buttons: ['OK']
              });
              yield alert.present();
            } else {
              _this.imageUrl = result; // Ensure imageUrl is updated

              const alert = yield _this.alertController.create({
                header: 'Upload Successful',
                message: 'Your avatar has been successfully uploaded.',
                buttons: ['OK']
              });
              yield alert.present();
            }
          } catch (uploadError) {
            loading.dismiss();

            if (uploadError.message.includes('Photo URL is required and must be less than 1000 characters')) {
              const alert = yield _this.alertController.create({
                header: 'Upload failed',
                message: 'The image is too big. Please try another image with a smaller size.',
                buttons: ['OK']
              });
              yield alert.present();
            } else {
              const alert = yield _this.alertController.create({
                header: 'Upload failed',
                message: `There was a problem uploading your avatar: ${uploadError.message}`,
                buttons: ['OK']
              });
              yield alert.present();
            }
          }
        }
      } catch (error) {
        const alert = yield _this.alertController.create({
          header: 'Upload failed',
          message: `There was a problem uploading your avatar: ${error.message}`,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this2 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this3 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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

  presentImageSourceActionSheet() {
    var _this4 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this4.actionSheetController.create({
        header: 'Select Image Source',
        buttons: [{
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            _this4.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera);
          }
        }, {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            _this4.changeImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos);
          }
        }, {
          text: 'File',
          icon: 'document',
          handler: () => {
            _this4.selectFile();
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

  selectFile() {
    var _this5 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      input.onchange = /*#__PURE__*/function () {
        var _ref = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
          const file = event.target.files[0];

          if (file) {
            const reader = new FileReader();

            reader.onload = /*#__PURE__*/function () {
              var _ref2 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const image = {
                  base64String: e.target.result.split(',')[1]
                };
                const result = yield _this5.avatar.uploadImage(image, _this5.avatar.profile.uid);

                if (!result) {
                  const alert = yield _this5.alertController.create({
                    header: 'Upload failed',
                    message: 'There was a problem uploading your avatar.',
                    buttons: ['OK']
                  });
                  yield alert.present();
                } else {
                  _this5.imageUrl = result; // Ensure imageUrl is updated
                  // const alert = await this.alertController.create({
                  //   header: 'Upload Successful',
                  //   message: 'Your avatar has been successfully uploaded.',
                  //   buttons: ['OK'],
                  // });
                  // await alert.present();
                }
              });

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }();

            reader.readAsDataURL(file);
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      input.click();
    })();
  }

  reauthenticateWithPhoneNumber() {
    var _this6 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            const user = _this6.authy.currentUser;
            if (!user) throw new Error('User not authenticated');
            console.log('Creating reCAPTCHA container');
            const recaptchaContainerId = 'recaptcha-container';
            let recaptchaContainer = document.getElementById(recaptchaContainerId);

            if (!recaptchaContainer) {
              recaptchaContainer = document.createElement('div');
              recaptchaContainer.id = recaptchaContainerId;
              document.body.appendChild(recaptchaContainer);
            } else {
              recaptchaContainer.innerHTML = ''; // Clear any existing content
            }

            console.log('Initializing reCAPTCHA verifier');
            const recaptchaVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.RecaptchaVerifier(recaptchaContainerId, {}, _this6.authy);
            const phoneNumber = user.phoneNumber;

            if (!phoneNumber) {
              throw new Error('User phone number is missing');
            }

            let verificationResult;

            try {
              console.log('Attempting to sign in with phone number');
              verificationResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.signInWithPhoneNumber)(_this6.authy, phoneNumber, recaptchaVerifier);
              console.log('Verification result:', verificationResult);
            } catch (error) {
              console.error('Error during signInWithPhoneNumber', error);

              _this6.overlay.showAlert('Error', 'An error occurred during phone number sign-in');

              reject(error);
              return;
            }

            if (!verificationResult.verificationId) {
              throw new Error('Verification ID is missing in the verification result');
            }

            const storedOTP = localStorage.getItem('defaultOTP');
            const userVerificationCode = storedOTP;
            console.log("This is number: " + userVerificationCode);
            console.log('Prompting user for verification code');
            const alert = yield _this6.alertController.create({
              header: 'Verification',
              inputs: [{
                name: 'verificationCode',
                type: 'text',
                placeholder: 'Enter verification code',
                value: userVerificationCode // Set default value if isRandom is true

              }],
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Verification cancelled');
                  reject(new Error('Verification cancelled'));
                }
              }, {
                text: 'Verify',
                handler: function () {
                  var _ref4 = (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
                    const verificationCode = data.verificationCode;

                    if (!verificationCode) {
                      reject(new Error('Verification code is required'));
                      return;
                    }

                    try {
                      console.log('Attempting to verify phone number with verification code');
                      const phoneCredential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.PhoneAuthProvider.credential(verificationResult.verificationId, verificationCode);
                      yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.reauthenticateWithCredential)(user, phoneCredential);
                      localStorage.removeItem('defaultOTP');
                      yield _this6.updateProfile();
                      console.log('User re-authenticated with phone number');
                      resolve();
                    } catch (error) {
                      console.error('Error verifying phone number', error);
                      reject(error);
                    }
                  });

                  return function handler(_x5) {
                    return _ref4.apply(this, arguments);
                  };
                }()
              }]
            });
            yield alert.present();
          } catch (error) {
            console.error('Error during phone re-authentication', error);

            _this6.overlay.showAlert('Error', error.message || 'An error occurred during phone re-authentication');

            reject(error);
          }
        });

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  updateProfile() {
    var _this7 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this7.form.valid) {
          _this7.form.markAllAsTouched();

          return;
        }

        _this7.approve2 = true;
        const user = _this7.authy.currentUser;

        if (user) {
          console.log('User authenticated', user);

          if (!_this7.imageUrl || _this7.imageUrl.length > 1000) {
            throw new Error('Photo URL is required and must be less than 1000 characters');
          }

          console.log('Updating email...');
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.updateEmail)(user, _this7.form.value.email);
          console.log('Email updated');
          console.log('Updating profile...');
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.updateProfile)(user, {
            displayName: `${_this7.form.value.fullname} ${_this7.form.value.lastname}`,
            photoURL: _this7.imageUrl
          });
          yield _this7.avatar.createUser(`${_this7.form.value.fullname} ${_this7.form.value.lastname}`, _this7.form.value.email, _this7.imageUrl, user.phoneNumber, user.uid);
          console.log('Profile updated');
          _this7.approve2 = false;

          _this7.router.navigateByUrl('home');

          console.log('Uploaded');
        }
      } catch (e) {
        console.error('An error occurred during profile update', e);
        _this7.approve2 = false;

        if (e.code === 'auth/email-already-in-use') {
          _this7.overlay.showAlert('Error', 'The email address is already in use by another account.');
        } else if (e.code === 'auth/requires-recent-login') {
          _this7.reauthenticateWithPhoneNumber();
        } else {
          _this7.overlay.showAlert('Error', e.message || 'An error occurred');
        }
      }
    })();
  }

  signInWithGoogle() {
    var _this8 = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.GoogleAuthProvider();
        const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.signInWithPopup)(_this8.authy, provider);
        const user = result.user;

        if (user) {
          _this8.imageUrl = user.photoURL || ''; // Update imageUrl with photoURL from Google

          _this8.form.patchValue({
            fullname: user.displayName?.split(' ')[0] || '',
            lastname: user.displayName?.split(' ')[1] || '',
            email: user.email || ''
          });

          console.log("User signed in with Google", user);
          console.log("Email:", user.email);
          console.log("Display Name:", user.displayName);
          console.log("Photo URL:", user.photoURL); // Call updateProfile to update user details in Firebase

          yield _this8.updateProfile();
        }
      } catch (error) {
        console.error("Error during Google sign-in", error);

        _this8.overlay.showAlert('Sign-in failed', 'There was a problem signing in with Google.');
      }
    })();
  }

}

DetailsPage.ɵfac = function DetailsPage_Factory(t) {
  return new (t || DetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_2__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_5__.ImageUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform));
};

DetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DetailsPage,
  selectors: [["app-details"]],
  decls: 27,
  vars: 8,
  consts: [[1, "ion-no-border", "ion-padding", 3, "translucent"], [1, "ion-padding-top"], ["color", "primary", 1, "ion-text-center"], [1, "ion-margin-horizontal"], [1, "preview"], [3, "click"], [3, "src", 4, "ngIf", "ngIfElse"], ["placeholder_avatar", ""], [3, "formGroup"], [1, "ion-margin-vertical"], [1, "ion-margin"], ["formControlName", "fullname", "placeholder", "First Name", "type", "text", "minlength", "1", "maxlength", "200"], ["formControlName", "lastname", "placeholder", "Last Name", "type", "text", "minlength", "1", "maxlength", "200"], ["formControlName", "email", "placeholder", "Your Email", "type", "email", "minlength", "1", "maxlength", "200"], ["id", "recaptcha-container"], ["shape", "round", "size", "large", "type", "submit", "color", "primary", "expand", "block", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward", 4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], [1, "ion-no-border"], ["lines", "none", 1, "ion-no-padding"], [3, "src"], [1, "fallback"], ["color", "light", "type", "indeterminate"], ["color", "light", "slot", "end", "name", "arrow-forward"]],
  template: function DetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list")(2, "ion-list-header", 1)(3, "ion-label", 2)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Personal Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-item-group", 3)(7, "div", 4)(8, "ion-avatar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetailsPage_Template_ion_avatar_click_8_listener() {
        return ctx.presentImageSourceActionSheet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DetailsPage_img_9_Template, 1, 1, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DetailsPage_ng_template_10_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "form", 8)(13, "div", 9)(14, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ion-input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "ion-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DetailsPage_Template_ion_button_click_21_listener() {
        return ctx.updateProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, DetailsPage_ion_label_22_Template, 2, 0, "ion-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DetailsPage_ion_icon_23_Template, 1, 0, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, DetailsPage_ion_progress_bar_24_Template, 1, 0, "ion-progress-bar", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-content", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "ion-list", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageUrl)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
  styles: ["ion-avatar[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\nion-menu-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElPTklDJTIwUFJPSkVDVFNcXG15UmlkZXItMjAyNDA1MjRUMDQwNTA1Wi0wMDFcXG15UmlkZXJcXHNyY1xcYXBwXFxwYWdlc1xcZGV0YWlsc1xcZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUU7RUFDRSwrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0NKOztBREdFO0VBQ0U7SUFDRSwyQkFBQTtFQ0FKO0VERUU7SUFDRSx5QkFBQTtFQ0FKO0FBQ0Y7O0FER0U7RUFDSSxtRUFBQTtBQ0ROOztBRElFO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQ0RKIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIH1cbiAgXG4gIC5wcmV2aWV3IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mYWxsYmFjayB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5cbiAgQGtleWZyYW1lcyBzbGlkZS10b3Age1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlLXRvcCB7XG4gICAgICBhbmltYXRpb246IHNsaWRlLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcbiAgfVxuXG4gIGlvbi1pdGVte1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB9XG5cblxuICBcbiAgIiwiaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG4ucHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmFsbGJhY2sge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuLnNsaWRlLXRvcCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbmlvbi1pdGVtIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLXRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufSJdfQ== */"]
});

/***/ }),

/***/ 8397:
/*!**************************************************!*\
  !*** ./src/app/services/image-upload.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploadService": () => (/* binding */ ImageUploadService)
/* harmony export */ });
/* harmony import */ var c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ 2873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ 2111);




class ImageUploadService {
  constructor(storage) {
    this.storage = storage;
  }

  uploadImage(image) {
    var _this = this;

    return (0,c_Users_USER_Downloads_IONIC_PROJECTS_myRider_20240524T040505Z_001_myRider_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const path = `images/${new Date().getTime()}.jpg`;
      const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_this.storage, path);
      const uploadResult = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadString)(storageRef, image.base64String, 'base64');
      return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(uploadResult.ref);
    })();
  }

}

ImageUploadService.ɵfac = function ImageUploadService_Factory(t) {
  return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__.Storage));
};

ImageUploadService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ImageUploadService,
  factory: ImageUploadService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map