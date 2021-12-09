fn main() {
    println!("Hello, world!");
}
fn send(){
    let file = File::open("pass.txt").expect("file not found!");
    let reader = BufReader::new(file);
    let lines = reader.lines();
    
    let (user, password, email, provider, port) = lines;
    
}
