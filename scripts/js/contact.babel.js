"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (
            Array.isArray(o) ||
            (it = _unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && typeof o.length === "number")
        ) {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return { done: true };
                    return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
    }
    var normalCompletion = true,
        didErr = false,
        err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally {
                if (didErr) throw err;
            }
        }
    };
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function _instanceof(left, right) {
    if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
    ) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

var isFunction = function isFunction(func) {
    return _instanceof(func, Function);
};

var isDOMElement = function isDOMElement(node) {
    return _instanceof(node, Element);
};

var isHTMLElement = function isHTMLElement(node) {
    return _instanceof(node, HTMLElement);
};

var Mailbox = /*#__PURE__*/ (function () {
    function Mailbox(_ref) {
        var _ref$id = _ref.id,
            id = _ref$id === void 0 ? "form_1" : _ref$id,
            _ref$form = _ref.form,
            form = _ref$form === void 0 ? "form" : _ref$form,
            carrier = _ref.carrier,
            destination = _ref.destination,
            recaptcha = _ref.recaptcha,
            progress = _ref.progress,
            success = _ref.success,
            failure = _ref.failure;

        _classCallCheck(this, Mailbox);

        this.form = form; // "id" identifies this form to Google's reCAPTCHA service
        // in its "action" field and is therefore restricted to
        // containing certain characters: [A-Za-z/_] It may also be
        // used to identify the form on the server side.

        this.id = id; // "carrier" conveys the transport method (XHR or Fetch)

        this.carrier = carrier; // "destination" is the FQDN or path (if on the same host)
        // to the message processing service/API that sits between
        // the website and the IMAP/POP mail server.

        this.destination = destination; // Providing a "site key" to "recaptcha" will enable SPAM
        // support with reCAPTCHA v3.

        this.recaptcha = recaptcha;
        this.progress = progress;
        this.failure = failure;
        this.success = success; // check if the designated form is in the current document

        if (document.querySelector(this.form)) {
            this.form = document.querySelector(this.form);
        } else return null; // could we retrieve a valid DOM element on this page?

        if (isHTMLElement(this.form)) {
            // collect any 'required' fields
            if (this.form.querySelector("[required]")) {
                this.requiredFields = this.form.querySelectorAll("[required]");
            } // add reCAPTCHA API to DOM if specified

            if (this.recaptcha) this.addSpamService();
            this.form.addEventListener("submit", this.send.bind(this));
        } else {
            // prerequisites not met, prevent creation of new instance
            throw new TypeError(
                "\n                Expected a valid DOM node for the <form> element:\n                incorrect identifier or missing <form> element.\n            "
            );
        } // end constructor body
    } // Since the Mailbox service is intended for general
    // form usage, we will stick to using the POST method.

    _createClass(Mailbox, [
        {
            key: "addSpamService",
            value: function addSpamService() {
                // provision API
                var head = document.querySelector("head");
                var dependency = document.createElement("script");
                var api = "https://www.google.com/recaptcha/api.js?render=";
                dependency.setAttribute("async", "");
                dependency.setAttribute("src", "".concat(api).concat(this.recaptcha)); // attach as last child of <head>

                head.append(dependency);
            } // Reduce spam with Google reCAPTCHA (v3). Opting for an
            // asynchronous routine as it involves network action.
        },
        {
            key: "runSpamFilter",
            value: function runSpamFilter() {
                var _this = this;

                // exit early if not activated in instance
                if (!this.recaptcha) return null;
                return new Promise(function (resolve) {
                    // Google reCAPTCHA API
                    grecaptcha.ready(function () {
                        grecaptcha
                            .execute(_this.recaptcha, {
                                // identify action for server use
                                action: _this.id
                            })
                            .then(function (token) {
                                // pass on reCAPTCHA session token
                                resolve(token);
                            });
                    });
                });
            }
        },
        {
            key: "validate",
            value: function validate() {
                if (this.requiredFields) {
                    var _iterator = _createForOfIteratorHelper(this.requiredFields),
                        _step;

                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var field = _step.value;

                            if (field.checkValidity() === false) {
                                return null;
                            }
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                }
            } // intermediary step while communicating with server
        },
        {
            key: "busy",
            value: function busy() {
                var response =
                    arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};
                // if defined, run "busy" callback
                if (isFunction(this.progress)) this.progress(response);
                // otherwise print a status update
                else console.info("Sending the message...");
            } // final steps that will act on the server's response
        },
        {
            key: "done",
            value: function done(action) {
                var response =
                    arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};

                if (action === "failure") {
                    if (this.failure) {
                        // determine if it is defined as a Function or a string
                        if (isFunction(this.failure)) return this.failure(response);
                        // if a string, we know a redirect path was given
                        else return window.location.replace(this.failure);
                    } // else just log an error message to the console

                    return console.error(response.description);
                } // if we've reached this point, we know it was a success

                if (this.success) {
                    if (isFunction(this.success)) return this.success(response);
                    else return window.location.replace(this.success);
                }

                console.info("Success: message delivered.");
            } // XMLHttpRequest routine for legacy vendors
        },
        {
            key: "xhr",
            value: function xhr(formData) {
                var _this2 = this;

                // prepare a network request to the mail server
                var request = new XMLHttpRequest(); // opens a POST request, omitting the 3rd argument as it defaults to asynchronous

                request.open(Mailbox.method, this.destination); // cancel the request if unsucessful after 5 seconds

                request.timeout = 5000; // send the request

                request.send(formData); // optional progress feedback functionality

                request.onprogress = this.busy; // called after the response is received (readyState 4)

                request.onload = function () {
                    if (request.status >= 200 && request.status < 300)
                        _this2.done("success", request);
                    else console.error(_this2.xhrError);
                };

                request.onerror = function () {
                    return console.error(_this2.xhrError);
                };
            } // the default
        },
        {
            key: "fetch",
            value: (function (_fetch) {
                function fetch(_x) {
                    return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                    return _fetch.toString();
                };

                return fetch;
            })(function (formData) {
                var _this3 = this;

                // initiate the Fetch call
                var response = fetch(this.destination, {
                    body: formData,
                    method: Mailbox.method
                }); // Run the optional "progress" routine while
                // passing a reference to the response object
                // in case it is needed for progress details.

                this.busy(response);
                response
                    .then(function (data) {
                        // handle potential network errors
                        if (!data.ok)
                            throw new Error("HTTP error: ".concat(response.status)); // parse the fetched stream into JSON

                        return data.json();
                    })
                    .then(function (obj) {
                        // run the relevant wrap-up functions
                        // depending on the server's response
                        if (obj.responseCode === 0) {
                            _this3.done("success", obj);
                        } else {
                            _this3.done("failure", obj);
                        }
                    });
            })
        },
        {
            key: "send",
            value: function send(event) {
                var _this4 = this;

                // prevent the form's default action
                event.preventDefault(); // validate fields

                this.validate(); // run the spam prevention service

                this.runSpamFilter()
                    .then(function (token) {
                        var formData = new FormData(_this4.form); // attach the reCAPTCHA session token

                        formData.append("token", token); // attach form's name to ID itself and reCAPTCHA action to the server

                        formData.append("id", _this4.id);
                        return formData;
                    })
                    .then(function (formData) {
                        // did the user opt for the XHR transport?
                        if (_this4.carrier === "xhr") _this4.xhr(formData);
                        // if not, use Fetch as the default API
                        else _this4.fetch(formData);
                    })
                    .catch(function (error) {
                        return console.error("Error:", error);
                    });
            }
        },
        {
            key: "xhrError",
            // separate error messaging for the XMLHttpRequest API
            get: function get() {
                return "Error sending message: "
                    .concat(request.response, "\n                Status: ")
                    .concat(request.statusText);
            }
        }
    ]);

    return Mailbox;
})();

_defineProperty(Mailbox, "method", "POST");

document.addEventListener("DOMContentLoaded", function () {
    var form = $("form"); // grab original form markup

    var formMarkup = $("form").html();

    var failure = function failure() {
        var failMarkup = $('<p id="error">Error sending mail, please retry.</p>');
        form.before(
            failMarkup.slideDown(400, function () {
                $(this)
                    .delay(3000)
                    .slideUp(500, function () {
                        $(this).remove();
                    });
            })
        );
    }; // Ajax beforeSend procedure

    function busy() {
        $(":submit").attr("disabled", true).val("Sending Message...");
        var form = $("form"); // preload gif

        var loadImg = new Image();
        loadImg["src"] = "../images/contact/load.gif"; // create img element

        var loaderGif = '<img src="' + loadImg.src + '" width="54" height="55">'; // future augmentation: exclude submit button from fade

        form.children().fadeOut(800);
        form.prepend(loaderGif);
    } // Ajax callback procedure

    function success(response) {
        var sentMarkup = $(
            '<div id="sent">\
                                     \
                                          <h1><span>&#10004;</span> Message received.</h1>\
                                     \
                                          <h2>Thank you.</h2>\
                                     \
                                          <hr>\
                                     \
                                          <p>We will respond soon.</p>\
                                     \
                                     </div>'
        );
        form.html(
            sentMarkup.fadeIn("slow", function () {
                var self = $(this); // here 'self' refers to the newly inserted content

                self.delay(5000).fadeOut(1000, function () {
                    // use 'form' NOT 'self' to replace and not embed new content in '#sent'
                    form.html(formMarkup).hide().fadeIn(1000); // re-enable submit button

                    self.find(":submit").attr("disabled", false).val("Send Message");
                });
            })
        );
    }

    new Mailbox({
        id: "jamaka_1",
        destination: "https://forms.cygnul.com/",
        recaptcha: "6LfiaNoZAAAAALtFL8I8M_joMoppfEG_Hb0HRX9x",
        busy: busy,
        success: success,
        failure: failure
    });
});
