use lettre::{
    transport::smtp::authentication::Credentials, AsyncSmtpTransport, AsyncTransport, Message,
    Tokio1Executor,
};
use chrono::prelude::DateTime;
use std::fs::File;
use std::io::BufReader;
use std::io::BufRead;

fn main() {
    println!("Hello, world!");
}



fn send(data: String) -> Result<String, Error>{
    let file = File::open("pass.txt").expect("file not found!");
    let reader = BufReader::new(file);
    let lines = reader.lines();
    
    let (user, password, email, provider, port) = lines;
    let smtp_credentials = Credentials::new(user.to_string(), password.to_string());

    let mailer = AsyncSmtpTransport::<Tokio1Executor>::relay(provider)?
        .credentials(smtp_credentials)
        .build();

    let from = user+ " <"+email+">";
    let to = user+ " <"+email+">";
    let local: DateTime = Local::now();
    let subject = format!("{}", &local);
    let body = data.to_string();

    send_email_smtp(&mailer, from, to, &subject, body)
    
}

fn send_email_smtp (
    mailer: &AsyncSmtpTransport<Tokio1Executor>,
    from: &str,
    to: &str,
    subject: &str,
    body: String,
)-> Result<T, E>{
    let email = Message::builder()
        .from(from.parse()?)
        .to(to.parse()?)
        .subject(subject)
        .body(body.to_string())?;

    mailer.send(email);

}
