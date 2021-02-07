function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isFunction = function isFunction(func) {
  return func instanceof Function;
};

var isDOMElement = function isDOMElement(node) {
  return node instanceof Element;
};

var isHTMLElement = function isHTMLElement(node) {
  return node instanceof HTMLElement;
};

var Mailbox = /*#__PURE__*/function () {
  "use strict";

  function Mailbox(_ref) {
    var _ref$id = _ref.id,
        id = _ref$id === void 0 ? 'form_1' : _ref$id,
        _ref$form = _ref.form,
        form = _ref$form === void 0 ? 'form' : _ref$form,
        carrier = _ref.carrier,
        destination = _ref.destination,
        recaptcha = _ref.recaptcha,
        progress = _ref.progress,
        success = _ref.success,
        failure = _ref.failure;

    _classCallCheck(this, Mailbox);

    this.form = form;
    this.id = id;
    this.carrier = carrier;
    this.destination = destination;
    this.recaptcha = recaptcha;
    this.progress = progress;
    this.failure = failure;
    this.success = success;

    if (document.querySelector(this.form)) {
      this.form = document.querySelector(this.form);
    } else return null;

    if (isHTMLElement(this.form)) {
      if (this.form.querySelector('[required]')) {
        this.requiredFields = this.form.querySelectorAll('[required]');
      }
      if (this.recaptcha) this.addSpamService();
      this.form.addEventListener('submit', this.send.bind(this));
    } else {
      throw new TypeError("\nExpected a valid DOM node for the <form> element:\nincorrect identifier or missing <form> element.\n            ");
    }

  }

  _createClass(Mailbox, [{
    key: "xhrError",
    get:
    function get() {
      return "Error sending message: ".concat(request.response, "\n                Status: ").concat(request.statusText);
    }
  }, {
    key: "addSpamService",
    value: function addSpamService() {
      var head = document.querySelector('head');
      var dependency = document.createElement('script');
      var api = 'https://www.google.com/recaptcha/api.js?render=';
      dependency.setAttribute('async', '');
      dependency.setAttribute('src', "".concat(api).concat(this.recaptcha));

      head.append(dependency);
    }

  }, {
    key: "runSpamFilter",
    value: function runSpamFilter() {
      var _this = this;

      if (!this.recaptcha) return null;
      return new Promise(function (resolve) {
        grecaptcha.ready(function () {
          grecaptcha.execute(_this.recaptcha, {
            action: _this.id
          }).then(function (token) {
            resolve(token);
          });
        });
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.requiredFields) {
        var _iterator = _createForOfIteratorHelper(this.requiredFields),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
    }
  }, {
    key: "busy",
    value: function busy() {
      var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (isFunction(this.progress)) this.progress(response);
      else console.info('Sending the message...');
    }
  }, {
    key: "done",
    value: function done(action) {
      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (action === 'failure') {
        if (this.failure) {
          if (isFunction(this.failure)) return this.failure(response);
          else return window.location.replace(this.failure);
        }
        return console.error(response.description);
      }
      if (this.success) {
        if (isFunction(this.success)) return this.success(response);else return window.location.replace(this.success);
      }
      console.info('Success: message delivered.');
    }
  }, {
    key: "xhr",
    value: function xhr(formData) {
      var _this2 = this;
      var request = new XMLHttpRequest();
      request.open(Mailbox.method, this.destination);
      request.timeout = 5000;
      request.send(formData);
      request.onprogress = this.busy;
      request.onload = function () {
        if (request.status >= 200 && request.status < 300) _this2.done('success', request);else console.error(_this2.xhrError);
      };
      request.onerror = function () {
        return console.error(_this2.xhrError);
      };
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(function (formData) {
      var _this3 = this;
      var response = fetch(this.destination, {
        body: formData,
        method: Mailbox.method
      });
      this.busy(response);
      response.then(function (data) {
        // handle potential network errors
        if (!data.ok) throw new Error("HTTP error: ".concat(response.status));
        return data.json();
      }).then(function (obj) {
        if (obj.responseCode === 0) {
          _this3.done('success', obj);
        } else {
          _this3.done('failure', obj);
        };
      });
    })
  }, {
    key: "send",
    value: function send(event) {
      var _this4 = this;
      event.preventDefault();
      this.validate();
      this.runSpamFilter().then(function (token) {
        var formData = new FormData(_this4.form);
        formData.append('token', token);
        formData.append('id', _this4.id);
        return formData;
      }).then(function (formData) {
        if (_this4.carrier === 'xhr') _this4.xhr(formData);
        else _this4.fetch(formData);
      }).catch(function (error) {
        return console.error('Error:', error);
      });
    }
  }]);
  return Mailbox;
}();

_defineProperty(Mailbox, "method", 'POST');

document.addEventListener('DOMContentLoaded', function () {
  var form = $('form');
  var formMarkup = $('form').html();
  var failure = function failure() {
    var failMarkup = $('<p id="error">Error sending mail, please retry.</p>');
    form.before(failMarkup.slideDown(400, function () {
      $(this).delay(3000).slideUp(500, function () {
        $(this).remove();
      });
    }));
  };

  function busy() {
    $(':submit').attr('disabled', true).val('Sending Message...');
    var form = $('form');
    var loadImg = new Image();
    loadImg['src'] = '../images/contact/load.gif';
    var loaderGif = '<img src="' + loadImg.src + '" width="54" height="55">';
    form.children().fadeOut(800);
    form.prepend(loaderGif);
  };

  function success(response) {
    var sentMarkup = $('<div id="sent">\
                               \
                                    <h1><span>&#10004;</span> Message received.</h1>\
                               \
                                    <h2>Thank you.</h2>\
                               \
                                    <hr>\
                               \
                                    <p>We will respond soon.</p>\
                               \
                               </div>');
    form.html(sentMarkup.fadeIn('slow', function () {
      var self = $(this);
      self.delay(5000).fadeOut(1000, function () {
        form.html(formMarkup).hide().fadeIn(1000);
        self.find(':submit').attr('disabled', false).val('Send Message');
      });
    }));
  };

  new Mailbox({
    id: 'jamaka_1',
    carrier: 'xhr',
    destination: 'https://forms.cygnul.com/',
    recaptcha: '6LfiaNoZAAAAALtFL8I8M_joMoppfEG_Hb0HRX9x',
    busy: busy,
    success: success,
    failure: failure
  });
});
