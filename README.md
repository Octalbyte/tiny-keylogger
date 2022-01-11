
```toml
# Wallets to which you can donate :)

  BTC = "3NC14JNuzdLkxJTdNa6bnFXaYzMKMc1Uwt"
  ETH = "0xc41c0f847d58121f552c683e454ddafeb415f25e"
  XMR = "875smxvwbP64MFZnHrHwHcGahoEB4a5ARGCBidr95LqL4GEPiB4T8J74UB5TzrXK3wbTZ1iidfYoV37KZq1vqWCQSNztDAF"  
```

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
## Gmail
if you get runtime issues (5.7.8 or 5.7.14)

- allow new loggins `https://g.co/allowaccess`
- mark all "attempted login alerts" in your inbox as "it was me"
- allow unsafe apps in settings

## Protonmail

Protonmail does not support use via smtp (due to encryption/privacy/funding issues)

# "pLEaSE SeND ThE CoMpIlEd vErSIon"

No, anyone with a decent knowledge of general coding can build it. Do it yourself.
