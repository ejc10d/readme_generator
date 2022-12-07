// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (`${data.license}` == "GNU GPLv3") {
//     license.badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
//   } else if (`${data.license}` == "MIT") {
//     license.badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
//   } else {
//     license.badge = ""
//   }
//     return license.badge;
// };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (`${data.license}` == "GNU GPLv3") {
//     license.link = "https://www.gnu.org/licenses/gpl-3.0"
//   } else if (`${data.license}` == "MIT") {
//     license.link = "https://opensource.org/licenses/MIT"
//   } else {
//     license.link = ""
//   }
//     return license.link;
// };

// const badge = renderLicenseBadge();
// const link = renderLicenseLink();

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  7. [License](#license)

  ## Description <a href="#description"></a>
  Here is a brief description of this project: ${data.desc} 
  
  ## Installation <a href="#installation"></a>
  Please follow these instructions to install this application: ${data.instructions}
  
  ## Usage <a href="#usage"></a>
  I'd like to thank the following people for helping me with this project: ${data.credits}
  
  ## Contributing <a href="#contributing"></a>
  If you'd like to contribute please email: ${data.email}

  ## Tests <a href="#tests"></a>
  Please follow the following test instructions: ${data.test}
  If you test this project and find it broken please report that to ${data.email}.

  ## Questions <a href="#questions"></a>
  If you have questions about this application please contact ${data.email}. <br/>
  Please view my [GitHub](https://github.com/${data.gitHub}) if you have other questions.

  ## License <a href="#license"></a>
  ${data.license} Please see the link for the licensing information.
`;
}

module.exports = generateMarkdown;
