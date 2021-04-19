const reporter = require('k6-html-reporter');

const options = {
        jsonFile: 'contacts_report/contacts.json',
        output: 'contacts_report'
    };

reporter.generateSummaryReport(options);