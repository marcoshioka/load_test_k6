const reporter = require('k6-html-reporter');

const options = {
        jsonFile: 'pi_report/pi.json',
        output: 'pi_report'
    };

reporter.generateSummaryReport(options);