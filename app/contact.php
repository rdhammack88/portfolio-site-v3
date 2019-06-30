<?php

if (isset($_POST['robotCheck']) && $_POST['robotCheck'] === 'gotcha') {
    return false;
} elseif (!isset($_POST['robotCheck'])) {
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = wordwrap($_POST['message'], 70);
        $subject = "$name would like to work with you!";
        $headers = "From: $email";
        
        mail("directconnect@dustinhammack.com", $subject, $message, $headers);
        
        //	$return_template = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'>
        // <head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
        //  <title>Demystifying Email Design</title><meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        //</head><body><table align=\"center\">
        //							<tbody>
        //								<td>
        //									Dear $name,
        //								</td>
        //								<td>
        //									Thank you for the interest in working with me to create the next big thing for the web. I'll be in touch with you soon. Looking forward to working together!
        //								</td>
        //								<td>
        //									Sincerely,\r\n\t\tDustin Hammack
        //								</td>
        //							</tbody>
        //						</table></body></html>";
        
        // $return_form = "https://docs.google.com/forms/d/e/1FAIpQLScHuRggvG40L5IaYpRigPux-qQtKkT9A-WAfWPNdupIXk3rEg/viewform?usp=sf_link";
        $return_form = "https://forms.gle/yABmRaDwnJAEZyhd8";
        $return_subject = "Lets work together!";
        $return_message = wordwrap("Dear $name, \r\n\n\t\t Thank you for the interest in working with me to create the next big thing for the web. I'll be in touch with you very soon. In the mean time, so I know that you are serious about your project inquiry, please take a few moments to fill out the following questionnaire, which can better help me understand what you are looking for in your finished project. \r\n\n <a href=\"$return_form\" title=\"Project request form\">Project Questionnaire</a> \r\n\n Sincerely, \r\n\t\t Dustin Hammack", 50); //70
        //	$return_message = $return_template;
        $return_headers = "From: directconnect@dustinhammack.com";
        //<table><tbody><td>
        //"<table><tbody><td></td><td></td><td></td><td></td></tbody></table>";
        
        if (mail($email, $return_subject, $return_message)) {
            $_SESSION['emailSuccess'] = 'Your e-mail has been sent, and I will be in contact with you soon. Thank you.';
        }
    }
}

header("Location: https://dustinhammack.com");
