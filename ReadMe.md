xcode-select --install 
xcode-select: note: install requested for command line developer tools

=> Profile not found. Tried ~/.bashrc, ~/.bash_profile, ~/.zprofile, ~/.zshrc, and ~/.profile.
=> Create one of them and run this script again
   OR
=> Append the following lines to the correct file yourself:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

## fonts
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

##fonts css
// <weight>: Use a value from 100 to 900
// <uniquifier>: Use a unique and descriptive class name

.public-sans-<uniquifier> {
  font-family: "Public Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

##
.gfs-didot-regular {
  font-family: "GFS Didot", serif;
  font-weight: 400;
  font-style: normal;
}
