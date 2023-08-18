const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test('Add to duo button displays player-duo', async () =>{
    await driver.get("http://localhost:8000")

    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()

    const addToDuoBtn = await driver.findElement(By.className('bot-btn'))
    await addToDuoBtn.click()

    const playerOnDuo = await driver.findElement(By.xpath('//*[@id="player-duo"]/div'))

    expect(playerOnDuo).toBeTruthy;
  })
  test('Draw button displays the div with id equal to choices', async () => {
    await driver.get("http://localhost:8000")

    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
   
   const choiceBody = await driver.findElement(By.id('choices'))
   const divDisplayed = await choiceBody.isDisplayed()
   expect(divDisplayed).toBe(true)
})
});