# load_test_k6
Load test with k6

#### Basic framework: 
- Node.js (JavaScript) and k6

#### Configuration: 
- Clone this repository.
- You must have Node.js installed in your local machine. 
- You must install k6 in your machine, following intructions in the guide for each OS (https://k6.io/docs/getting-started/installation/) or doing npm command (after Node.js install):
```sh
 npm i k6
```
- After that, install the dependencies running this command in the root: 
```sh
 npm install
```
#### Project structure:
- All files with '*_test.js' are k6 test scripts.
- If you choice in the script execution, k6-html-reporter is generate in each directory "*_report".
- It was created a .gitignore file to not push "node_modules" folder.
- It was added CircleCI file to run tests in pipeline (CI/CD/Continuous Testing).

#### Reports:
It was configured k6-html-reporter in this project.

**k6-html-reporter**
- Available in each "*_report" directory.
- It displays thresholds, checks and metrics from test execution.
- To generate report, run command for each script like this:
```sh
 node conatcts_report.js
```

![N|k6-html-reporter](https://github.com/marcoshioka/load_test_k6/blob/main/report.png)

#### About each test script:
![N|k6-html-reporter](https://github.com/marcoshioka/load_test_k6/blob/main/execution.png)

**Contacts**
It's a script for a defined number of interations. 

To execute this script, run the command:
```sh
k6 run contacts_test.js
```
or 
```sh
npx k6 run contacts_test.js
```
or using script configured on package.json (that includes report generation)
```sh
npm run contacts
```
**News**
It's a script for a constant-arrival-rate. 

To execute this script, run the command:
```sh
k6 run news_test.js
```
or 
```sh
npx k6 run news_test.js
```
or using script configured on package.json  (that includes report generation)
```sh
npm run news
```
**Pi**
It's a script for a ramping-arrival-rate. 

To execute this script, run the command:
```sh
k6 run news_test.js
```
or 
```sh
npx k6 run news_test.js
```
or using script configured on package.json  (that includes report generation)
```sh
npm run news
```

### CircleCI: 
It was included a configuration to execut this non-functional tests in CircleCI (CI/CD/Continuous Testing). The config is in "circle.yml" file, in the project root. With this config the project execute in Circle CI each job/script in parallel, including the reports in the end of execution.

### Version information:
- 1.0.0: first version

### Author:
- Marcos Ribeiro Hioka
- contact: marcosribeirohioka@gmail.com