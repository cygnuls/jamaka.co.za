<?php

    # C O N S T A N T S

    define('SUBJECT', 'New Booking Enquiry');
    define('RECEIVER', 'stay@jamaka.co.za');
    define('BASE', 'http://jamaka.co.za');

    # C O L L E C T

    $sent    = false;

    $name_first      = $_REQUEST['name_first'];
    $name_last       = $_REQUEST['name_last'];
    $email           = $_REQUEST['email'];
    $phone           = $_REQUEST['phone'];
    $type            = $_REQUEST['type'];
    $guests_adults   = $_REQUEST['adults'];
    $guests_children = $_REQUEST['children'];
    $number_cottage  = $_REQUEST['number_cottage'];
    $bedding         = $_REQUEST['bedding'];
    $number_campsite = $_REQUEST['number_campsite'];
    $arrival         = $_REQUEST['arrival'];
    $departure       = $_REQUEST['departure'];
    $message         = $_REQUEST['message'];

    # S A N I T I Z E

    $name_first = ereg_replace("[^A-Za-z .]", "", $name_first);
    $name_last  = ereg_replace("[^A-Za-z .]", "", $name_last);
    $email      = ereg_replace("[^0-9A-Za-z.@-]", "", $email);
    $phone      = ereg_replace("[^0-9 .+-]", "", $phone);
    $message    = ereg_replace("[^0-9A-Za-z .,':?\r]", "", $message);

    # F U N C T I O N S

    function isXHR() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']); // set by jQuery for XHR requests
    }

    # C O N D I T I O N S

    if ($bedding) {
        $bedding_yn = "Yes";
    } else {
        $bedding_yn = "No";
    };

    if ($type == "Cottage") {
        $unit_number = $number_cottage;
    } else {
        $unit_number = $number_campsite;
    }

    $pluralize_adult = ($guests_adults < 2) ? 'Adult' : 'Adults';

    $child = ($guests_children > 0) ? true : false;

    if ($child) {

        $pluralize_child = ($guests_children < 2) ? 'Child' : 'Children';
        $guests = $guests_adults . ' ' . $pluralize_adult . ', ' . $guests_children . ' ' . $pluralize_child;

    } else {
        $guests = $guests_adults . ' ' . $pluralize_adult;
    }

    # B O D Y

    $body = <<<TEMPLATE
<html>

    <head>

        <style type="text/css">

            /*** reset ***/

            article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
                display:block;
            }

            /* prevent Webkit and Windows Mobile from changing default font sizes, while not breaking desktop design. */
            body {
                font-family:Helvetica, Arial, Ubuntu, sans-serif;
                margin:0;
                padding:0;
                width:100% !important;
                -webkit-text-size-adjust:100%;
                -ms-text-size-adjust:100%;
                background:#E8E2DA;
            }

            a {
                outline:none;
            }

            /* force Hotmail to display emails at full width */
            .ExternalClass {width:100%;}

            /* Force Hotmail to display normal line spacing. */
            .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
                line-height: 100%;
            }

            #backgroundTable {
                margin:22px 0;
                padding:0;
                width:100% !important;
                line-height:100% !important;
            }

            /*** end reset ***/

            /*** image defaults: "-ms-interpolation-mode: bicubic" works to help ie properly resize images in IE. (if you are resizing them using the width and height attributes); "border:none" removes border when linking images. ***/

            img {
                display:block;
                outline:none;
                text-decoration:none;
                -ms-interpolation-mode:bicubic;
            }

            a img {
                border:none;
            }

            p {
                margin:1em 0;
            }

            /*** Hotmail header color reset: Hotmail replaces your header color styles with a green color on H2, H3, H4, H5, and H6 tags. In this example, the color is reset to black for a non-linked header, blue for a linked header, red for an active header (limited support), and purple for a visited header (limited support).  Replace with your choice of color. The !important is really what is overriding Hotmail's styling. Hotmail also sets the H1 and H2 tags to the same size. ***/

            h1, h2, h3, h4, h5, h6 {
                color:#324432;
                margin:0;
            }

            h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
                color:#3366BB; !important;
            }

            /* There is limited support for psuedo classes in email clients, this was added just for good measure. */
            h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
            color:#3366BB; !important;
            }

            /*** headings ***/

            h1 {
                font-size:3em;
                letter-spacing: -1px
            }

            /*** tables ***/

            table {
                margin:0;
            }

            table#main {
                margin:0 auto;
                border:1px solid #99928C;
            }

            table#header {
              margin:10px 0 0 0;
            }

            table caption {
                font-size:1.2em;
                font-weight:bold;
                text-align: right;
                color:#324432;
                margin:0;
                padding:0;
            }

            table#meta td {
                font-size:.8em;
            }

            table#meta td.key {
                color:#ffffff;
                font-weight:bold;
            }

            table#meta td.value {
                color:#222222;
                border:1px solid #C1BDB4;
            }

            table#text {
                width: 92%;
                margin:0 auto;
                padding:14px 0;
                border-top:1px solid #C1BDB4;
            }

            table#text caption {
                margin-bottom:4px;
            }

            table#text td {
                line-height:150% !important;
                color:#444444;
                padding:0;
            }

            table#footer {
                width: 92%;
                color:#777777;
                margin:auto;
                border-top:1px solid #C1BDB4;
            }

            table#footer td {
                font-size:.8em;
            }

            td {
                font-size:.9em;
                border-collapse:collapse;
            }

            td.inner-table {
                margin:0 auto;
                padding:0 0 20px 40px;
            }

            /*** links ***/

            a {
                text-decoration:none;
            }

            a:link {
                color:#3366BB;
                background:none;
            }

            a:visited {
                color:#0B0080;
            }

            a:hover {
                text-decoration:underline;
            }

            a:active {
                color:#3366BB;
            }

        </style>

    </head>

    <body>

        <table id="backgroundTable" width="100%" cellspacing="0" cellpadding="0">

            <table valign="middle" align="center" id="main" width="580" cellspacing="0" cellpadding="25" border="0" bgcolor="white">

                <!-- header -->

                <tr>
                    <td>
                        <table align="center" id="header" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td width="100%" align="center" valign="middle">
                                    <h1>Booking Request</h1>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- meta -->

                <tr>
                    <td class="inner-table">

                        <table align="center" id="meta" width="92%" cellspacing="3" cellpadding="5" border="0">

                            <caption>Client</caption>

                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">From:</td>
                                <td class="value"  align="left" valign="middle">$name_first $name_last</td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Email:</td>
                                <td class="value" align="left" valign="middle"><a href="mailto:$email?Subject=Jamaka%20$type%20Booking">$email</a></td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Phone:</td>
                                <td class="value"  align="left" valign="middle">$phone</td>
                            </tr>

                        </table>

                    </td>

                </tr>

                <tr>
                    <td class="inner-table">

                        <table align="center" id="meta" width="92%" cellspacing="3" cellpadding="5" border="0">

                            <caption>Booking</caption>

                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Guests:</td>
                                <td class="value"  align="left" valign="middle">$guests</td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Type:</td>
                                <td class="value"  align="left" valign="middle">$type</td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Unit #:</td>
                                <td class="value"  align="left" valign="middle">$unit_number</td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Bedding:</td>
                                <td class="value"  align="left" valign="middle">$bedding_yn</td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Arrive:</td>
                                <td class="value"  align="left" valign="middle">$arrival</td>
                            </tr>
                            <tr>
                                <td class="key" width="100"  align="right" bgcolor="#3F342B" valign="middle">Depart:</td>
                                <td class="value"  align="left" valign="middle">$departure</td>
                            </tr>

                        </table>

                    </td>

                </tr>

                <!-- text -->

                <tr>
                    <td>

                        <table align="center" id="text" width="100%" cellspacing="0" cellpadding="25" border="0">

                            <caption>Message</caption>

                            <tr>

                                <td>$message</td>

                            </tr>

                        </table>

                    </td>

                </tr>

                <!-- footer -->

                <tr>
                    <td>

                        <table align="center" id="footer" width="100%" cellspacing="0" cellpadding="14" border="0">

                            <tr>

                                <td align="center"><a style="color:#777777;" href="http://cygnul.com/" target="_blank">Cygnul Systems</a> ensured the safe arrival of this electronic mail.</td>

                            </tr>

                        </table>

                    </td>

                </tr>

            </table>

        </table>

    </body>

</html>
TEMPLATE;

    # H E A D E R S

    $headers = "From: $name_first $name_last <$email>\r\n";
    $headers .= "Content-type: text/html\r\n";

    # S E N D

    if (!isset($_REQUEST['email'])) {
        header("Location:" . BASE);
    }

    elseif (empty($email) || empty($message) || empty($name_first)) {
        echo "error";
    }

    else {
        # returns true if successful, false otherwise.
        $sent = mail(RECEIVER, SUBJECT, $body, $headers);
    }

    # Return an appropriate response to the browser
    if (isXHR()) {

        echo $sent ? "sent" : "error";

    } else {

    ?>

    <html>

        <head>

        <title>Thanks!</title>

        </head>

        <body>

            <?php if ( $sent ) echo "<p>Thanks for sending your message! We'll get back to you shortly.</p>" ?>
            <?php if ( !$sent ) echo "<p>There was a problem sending your message. Please try again.</p>" ?>

            <p>Use your browser's Back button to return to the page.</p>

        </body>

    </html>

<?php
}
?>
