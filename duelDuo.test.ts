
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})
test('See all bots button works!',async () => {
    const addBtn = await driver.findElement(By.id('see-all'))
    await addBtn.click()
    const allBots = await driver.findElement(By.id('all-bots'))
    const bots = await allBots.isDisplayed()
    expect(bots).toBe(true)
    await driver.sleep(2000)
})
test("'Choose' 2 header is displayed!",async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    const chooseText = await driver.findElement(By.id('choose-header'))
    const condition = await chooseText.isDisplayed()
    expect(condition).toBe(true)
    await driver.sleep(2000)
})