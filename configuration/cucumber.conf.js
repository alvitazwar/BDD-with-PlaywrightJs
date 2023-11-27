const { Before, BeforeAll, After, AfterAll, setDefaultTimeout, Status } = require("@cucumber/cucumber")
const { chromium } = require('playwright')
const { config } = require("../playwright.config")
setDefaultTimeout(600000)

// Launch options.
const options = {
    headless: true,
    slowMo: 100
};

BeforeAll(async () => {
            global.browser = await chromium.launch(options)
})

AfterAll(async () => {
    await global.browser.close()
})

Before(async (scenario) => {
    global.context = await global.browser.newContext({
    })
    global.page = await global.context.newPage()
    global.newWindow = global.page
})


After(async (scenario) => {
    if (scenario.result.status === Status.FAILED) {
        await page.screenshot({
            path: `./report/screenshots/${scenario.pickle.name}.png`,
            fullpage: true,
        }), "image/png"
    }
    await global.page.close()
    await global.context.close()
})


