const isFunction = func => func instanceof Function;
const isDOMElement = node => node instanceof Element;
const isHTMLElement = node => node instanceof HTMLElement;

class Mailbox {

    constructor({
            id = 'form_1',
            form = 'form',
            carrier,
            destination,
            recaptcha,
            progress,
            success,
            failure,
        }) {
        this.form = form;
        // "id" identifies this form to Google's reCAPTCHA service
        // in its "action" field and is therefore restricted to
        // containing certain characters: [A-Za-z/_] It may also be
        // used to identify the form on the server side.
        this.id = id;
        // "carrier" conveys the transport method (XHR or Fetch)
        this.carrier = carrier;
        // "destination" is the FQDN or path (if on the same host)
        // to the message processing service/API that sits between
        // the website and the IMAP/POP mail server.
        this.destination = destination;
        // Providing a "site key" to "recaptcha" will enable SPAM
        // support with reCAPTCHA v3.
        this.recaptcha = recaptcha;
        this.progress = progress;
        this.failure = failure;
        this.success = success;

        // check if the designated form is in the current document
        if (document.querySelector(this.form)) {
            this.form = document.querySelector(this.form);
        } else return null;

        // could we retrieve a valid DOM element on this page?
        if (isHTMLElement(this.form)) {

            // collect any 'required' fields
            if (this.form.querySelector('[required]')) {
                this.requiredFields = this.form.querySelectorAll('[required]');
            }

            // add reCAPTCHA API to DOM if specified
            if (this.recaptcha) this.addSpamService();

            this.form.addEventListener('submit', this.send.bind(this));
        } else {
            // prerequisites not met, prevent creation of new instance
            throw new TypeError(`
                Expected a valid DOM node for the <form> element:
                incorrect identifier or missing <form> element.
            `);
        }
        // end constructor body
    }

    // Since the Mailbox service is intended for general
    // form usage, we will stick to using the POST method.
    static method = 'POST';

    // separate error messaging for the XMLHttpRequest API
    get xhrError() {
        return `Error sending message: ${ request.response }
                Status: ${ request.statusText }`
    }

    addSpamService() {
        // provision API
        const head = document.querySelector('head');
        const dependency = document.createElement('script');
        const api = 'https://www.google.com/recaptcha/api.js?render=';

        dependency.setAttribute('async', '');
        dependency.setAttribute('src', `${ api }${ this.recaptcha }`);
        // attach as last child of <head>
        head.append(dependency);
    }

    // Reduce spam with Google reCAPTCHA (v3). Opting for an
    // asynchronous routine as it involves network action.
    runSpamFilter() {

        // exit early if not activated in instance
        if (!this.recaptcha) return null;

        return new Promise(resolve => {

            // Google reCAPTCHA API
            grecaptcha.ready(() => {
                grecaptcha.execute(this.recaptcha,
                    {
                        // identify action for server use
                        action: this.id
                    })
                    .then(token => {
                        // pass on reCAPTCHA session token
                        resolve(token);
                    });
            })
        })
    }

    validate() {
        if (this.requiredFields) {
            for (let field of this.requiredFields) {
                if (field.checkValidity() === false) {
                    return null;
                }
            }
        }
    }

    // intermediary step while communicating with server
    busy(response = {}) {
        // if defined, run "busy" callback
        if (isFunction(this.progress)) this.progress(response);
        // otherwise print a status update
        else console.info('Sending the message...');
    }

    // final steps that will act on the server's response
    done(action, response = {}) {

        if (action === 'failure') {
            if (this.failure) {
                // determine if it is defined as a Function or a string
                if (isFunction(this.failure)) return this.failure(response);
                // if a string, we know a redirect path was given
                else return window.location.replace(this.failure);
            }
            // else just log an error message to the console
            return console.error(response.description);
        }
        // if we've reached this point, we know it was a success
        if (this.success) {
            if (isFunction(this.success)) return this.success(response);
            else return window.location.replace(this.success);
        }
        console.info('Success: message delivered.');
    }

    // XMLHttpRequest routine for legacy vendors
    xhr(formData) {
        // prepare a network request to the mail server
        const request = new XMLHttpRequest();
        // opens a POST request, omitting the 3rd argument as it defaults to asynchronous
        request.open(Mailbox.method, this.destination);
        // cancel the request if unsucessful after 5 seconds
        request.timeout = 5000;
        // send the request
        request.send(formData);
        // optional progress feedback functionality
        request.onprogress = this.busy;
        // called after the response is received (readyState 4)
        request.onload = () => {
            if (request.status >= 200 && request.status < 300) this.done('success', request);
            else console.error(this.xhrError);
        }
        request.onerror = () => console.error(this.xhrError);
    }

    // the default
    fetch(formData) {
        // initiate the Fetch call
        const response = fetch(this.destination, {
            body: formData,
            method: Mailbox.method,
        });
        // Run the optional "progress" routine while
        // passing a reference to the response object
        // in case it is needed for progress details.
        this.busy(response);

        response.then(data => {
            // handle potential network errors
            if (!data.ok) throw new Error(`HTTP error: ${ response.status }`);
            // parse the fetched stream into JSON
            return data.json()
        })
            .then(obj => {
                // run the relevant wrap-up functions
                // depending on the server's response
                if (obj.responseCode === 0) {
                    this.done('success', obj);
                } else {
                    this.done('failure', obj);
                };
            })
    }

    send(event) {
        // prevent the form's default action
        event.preventDefault();

        // validate fields
        this.validate();

        // run the spam prevention service
        this.runSpamFilter()
            .then((token) => {
                const formData = new FormData(this.form);
                // attach the reCAPTCHA session token
                formData.append('token', token);
                // attach form's name to ID itself and reCAPTCHA action to the server
                formData.append('id', this.id);
                return formData;
            })
            .then(formData => {
                // did the user opt for the XHR transport?
                if (this.carrier === 'xhr') this.xhr(formData);
                // if not, use Fetch as the default API
                else this.fetch(formData);
            }).catch(error => console.error('Error:', error));
    }
}

document.addEventListener('DOMContentLoaded', () => {

    var form = $('form');

    // grab original form markup
    var formMarkup = $('form').html();

    const failure = () => {

        var failMarkup = $('<p id="error">Error sending mail, please retry.</p>');

        form.before(failMarkup.slideDown(400, function() {

            $(this).delay(3000).slideUp(500, function() {

                $(this).remove();

            });

        }));

    }

    // Ajax beforeSend procedure
    function busy() {

        $(':submit').attr('disabled', true).val('Sending Message...');

        var form = $('form');
        // preload gif
        var loadImg = new Image();
        loadImg['src'] = '../images/contact/load.gif';
        // create img element
        var loaderGif = '<img src="' + loadImg.src + '" width="54" height="55">';
        // future augmentation: exclude submit button from fade
        form.children().fadeOut(800);

        form.prepend(loaderGif);

    };

    // Ajax callback procedure
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

        form.html(sentMarkup.fadeIn('slow', function() {

            var self = $(this);
            // here 'self' refers to the newly inserted content
            self.delay(5000).fadeOut(1000, function() {
                // use 'form' NOT 'self' to replace and not embed new content in '#sent'
                form.html(formMarkup).hide().fadeIn(1000);
                // re-enable submit button
                self.find(':submit').attr('disabled', false).val('Send Message');

            });
        }));
    };

    new Mailbox({
        id: 'jamaka_1',
        carrier: 'xhr',
        destination: 'https://forms.cygnul.com/',
        recaptcha: '6LfiaNoZAAAAALtFL8I8M_joMoppfEG_Hb0HRX9x',
        busy,
        success,
        failure,
    });

});
