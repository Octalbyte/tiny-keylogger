extern crate lettre;
extern crate lettre_email;

use lettre::{EmailTransport, SmtpTransport};
use lettre_email::EmailBuilder;
use std::path::Path;



fn sendmail() {
    let email = EmailBuilder::new()
        .to("user@example.org")
        .from("user@example.com")
        .subject("Hi, Hello world")
        .text("Hello world.")
        .build()
        .unwrap();

    // Open a local connection on port 25
    let mut mailer = SmtpTransport::builder_unencrypted_localhost().unwrap().build();
    // Send the email
    let result = mailer.send(&email);

    if result.is_ok() {
        println!("Email sent");
    } else {
        println!("Could not send email: {:?}", result);
    }

    assert!(result.is_ok());
}



fn main(){
    sendmail();
}

