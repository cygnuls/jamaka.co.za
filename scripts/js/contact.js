const isFunction = func => func instanceof Function;
const isDOMElement = node => node instanceof Element;
const isHTMLElement = node => node instanceof HTMLElement;

class Mailbox {

    constructor({
        form = 'form',
        name = 'form',
        carrier,
        destination,
        recaptcha,
        progress,
        success,
        failure,
    }) {
        this.form = form;
        this.name = name;
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
            throw new TypeError(`
                Expected a valid DOM node for the <form> element: 
                incorrect identifier or missing <form> element.
            `);
        }
    }

    static method = 'POST';

    get xhrError() {
        return `Error sending message: ${ request.response } 
                Status: ${ request.statusText }`
    }

    addSpamService() {
        const head = document.querySelector('head');
        const dependency = document.createElement('script');
        const api = 'https://www.google.com/recaptcha/api.js?render=';

        dependency.setAttribute('async', '');
        dependency.setAttribute('src', `${ api }${ this.recaptcha }`);
        head.append(dependency);
    }

    runSpamFilter() {

        if (!this.recaptcha) return null;

        return new Promise(resolve => {

            grecaptcha.ready(() => {
                grecaptcha.execute(this.recaptcha,
                    {
                        action: this.name
                    })
                    .then(token => {
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

    busy(response = {}) {
        if (isFunction(this.progress)) this.progress(response);
        else console.info('Sending the message...');
    }

    done(action, response = {}) {

        if (action === 'failure') {
            if (this.failure) {
                if (isFunction(this.failure)) return this.failure(response);
                else return window.location.replace(this.failure);
            }
            return console.error(response.description);
        }
        if (this.success) {
            if (isFunction(this.success)) return this.success(response);
            else return window.location.replace(this.success);
        }
        console.info('Success: message delivered.');
    }

    xhr(formData) {
        const request = new XMLHttpRequest();
        request.open(Mailbox.method, this.destination);
        request.timeout = 5000;
        request.send(formData);
        request.onprogress = this.busy;
        request.onload = () => {
            if (request.status >= 200 && request.status < 300) this.done('success', request);
            else console.error(this.xhrError);
        }
        request.onerror = () => console.error(this.xhrError);
    }

    fetch(formData) {
        const response = fetch(this.destination, {
            body: formData,
            method: Mailbox.method,
        });

        this.busy(response);

        response.then(data => {
            if (!data.ok) throw new Error(`HTTP error: ${ response.status }`);
            return data.json()
        })
            .then(obj => {
                if (obj.responseCode === 0) {
                    this.done('success', obj);
                } else {
                    this.done('failure', obj);
                };
            })
    }

    send(event) {
        event.preventDefault();
        this.validate();
        this.runSpamFilter()
            .then((token) => {
                const formData = new FormData(this.form);
                formData.append('token', token);
                formData.append('action', this.name);
                return formData;
            })
            .then(formData => {
                if (this.carrier === 'xhr') this.xhr(formData);
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
        name: 'jamaka_1',
        destination: 'https://posman.cygnul.com/send',
        recaptcha: '6LfiaNoZAAAAALtFL8I8M_joMoppfEG_Hb0HRX9x',
        busy,
        success,
        failure,
    });

});
