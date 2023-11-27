const common = `
--require configuration/*.js
--require tests/steps/*.js
--format progress
--format json:./report/cucumber_report.json
--publish-quiet
--format @cucumber/pretty-formatter
--format html:./report/cucumber-report.html
`
module.exports = {
    default: `${common} tests/features/*.feature`
}
