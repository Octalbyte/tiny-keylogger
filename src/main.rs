use lettre::smtp::authentication::Credentials;
use lettre::{SmtpClient, Transport};
use lettre_email::mime;
use lettre_email::EmailBuilder;
use std::path::Path;

fn main() {
    let email = EmailBuilder::new()
        .to("hello@example.com")
        .from("me@hello.com")
        .subject("Example subject")
        .html("<h1>Hello, world!</h1>")
        .attachment_from_file(
            &Path::new("Record.log"), // Path to file on disk
            Some("records.log"),      // Filename to use in the email
            &mime::TEXT_PLAIN,
        )
        .unwrap()
        .build()
        .unwrap();

        let mut mailer = SmtpClient::new_simple("smtp.hello.com")
        .unwrap()
        .credentials(Credentials::new("username".into(), "password".into()))
        .transport();

       let result = mailer.send(email.into());

        println!("{:?}", result);
}
