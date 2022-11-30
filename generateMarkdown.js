// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents
  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [Contributing] (#contributing)
  5. [Tests] (#tests)
  6. [Questions] (#questions)
  7. [License] (#license)

  ## Description <a name="description"></a>
  Here is a brief description of this project: ${data.desc} 
  
  ## Installation <a name="installation"></a>
  Please follow these instructions to install this application: ${data.instructions}
  
  ## Usage <a name="usage"></a>
  I'd like to thank the following people for helping me with this project: ${data.credits}
  
  ## Contributing <a name="contributing"></a>
  If you'd like to contribute please email: ${data.contribute}

  ## Tests <a name="tests"></a>

  ##Questions <a name="questions"></a>

  ## License <a name="license"></a>
  ${data.license}
`;
}

module.exports = generateMarkdown;
