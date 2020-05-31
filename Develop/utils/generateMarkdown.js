function generateMarkdown(data) {
  const installSplit = data.instillation.split(",,");
  const usageSplit = data.usage.split(",,");
  const creditsSplit = data.credits.split(",,");
  const testsSplit = data.tests.split(",,");

  // for (const value of installSplit) {
  //   console.log(value);
  // }
  const mitText = `
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

  let instillationOutput = "";
  for (let i = 0; i < installSplit.length; i++) {
    let ii = i + 1;
    instillationOutput += ii + ". " + installSplit[i] + "<br />";
  }

  let usageOutput = "";
  for (let i = 0; i < usageSplit.length; i++) {
    usageOutput += "- " + usageSplit[i] + "<br />";
  }

  let creditsOutput = "";
  for (let i = 0; i < creditsSplit.length; i++) {
    creditsOutput += "- " + creditsSplit[i] + "<br />";
  }

  let testsOutput = "";
  for (let i = 0; i < testsSplit.length; i++) {
    testsOutput += testsSplit[i] + "<br /><br />";
  }

  return `
# ${data.title}
![License: ${data.license}](https://img.shields.io/badge/License-${
    data.license
  }-blue.svg)

${data.description}


## Contents
* [Instillation](#Instillation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Contributors](#Contributors)
* [License](#License)


## Instillation
${instillationOutput}


## Usage
${usageOutput}


## Test
${testsOutput}


## Contributors
${creditsOutput}

##### GitHub link: [GitHub Profile](https://github.com/${data.username})

---

## License
Copyright © 2020 ${data.name}

${data.license == "None" ? "None" : mitText}
`;
}

module.exports = generateMarkdown;

// [${contentInput}](#${contentInput})
