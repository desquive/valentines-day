# Code a Valentine's Day Card
Today, you will learn how to code a Valentine's Day card using React! First, you will need to install a couple of dependencies in order to get this started. 

## For MacOS (or Linux) Users 
```
# Download and install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Check if Homebrew installed successfully 
brew -v
brew --prefix 
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
