const reporter = require('k6-html-reporter');

const options = {
        jsonFile: 'news_report/news.json',
        output: 'news_report'
    };

reporter.generateSummaryReport(options);