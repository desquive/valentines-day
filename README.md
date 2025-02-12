# Code a Valentine's Day Card
Today, you will learn how to code a Valentine's Day card using React! First, you will need to install a couple of dependencies in order to get this started. 

## For MacOS (or Linux) Users 
### Installing Homebrew
```
# Download and install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Check if Homebrew installed successfully 
brew -v # Should print "Homebrew 4.4.20".
brew --prefix # Should print "/opt/homebrew" or "/usr/local".
```

If these commands don't work, it is likely that Homebrew is not in your $PATH environment variable

```
# Check if Homebrew is in shell configuration file (i.e., $PATH environment variable)
echo $PATH
```
If /opt/homebrew/bin or /usr/local/bin are not present in your $PATH environment variable, add it using the commands below. 
```
# Add Homebrew to shell configuration file (i.e., $PATH environment variable)
export PATH="/opt/homebrew/bin:$PATH"  # Apple Silicon
export PATH="/usr/local/bin:$PATH"     # Intel
```
Now try again
```
# Check if Homebrew installed successfully 
brew -v # Should print "Homebrew 4.4.20".
brew --prefix # Should print "/opt/homebrew" or "/usr/local".
```
### Installing Node
```
# Download and install Node.js:
brew install node@22
# Verify the Node.js version:
node -v # Should print "v22.13.1".
# Verify npm version:
npm -v # Should print "10.9.2".
```
## For Windows Users
```
# Download and install fnm:
winget install Schniz.fnm
# Download and install Node.js:
fnm install 22
# Verify the Node.js version:
node -v # Should print "v22.13.1".
# Verify npm version:
npm -v # Should print "10.9.2".
```

## Running a React Project
Pull the starter code from the repository and run
```
npm start
```
You're ready to win over your next boo! :-)