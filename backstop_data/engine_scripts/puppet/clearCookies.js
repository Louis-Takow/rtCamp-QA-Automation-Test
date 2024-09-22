module.exports = async (page, scenario) => {
    await page.deleteCookie(...(await page.cookies()));
    await page.reload();
  };
  