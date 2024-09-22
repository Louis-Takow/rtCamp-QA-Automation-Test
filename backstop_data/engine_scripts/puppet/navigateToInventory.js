module.exports = async (page) => {
    await page.type('#user-name', 'standard_user');
    await page.type('#password', 'secret_sauce');
    await page.click('#login-button');
    await new Promise(r => setTimeout(r, 1000));  // Wait for 1 second
    
};
