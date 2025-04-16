describe('First Test', () => {

    it('Messages  001- Go to Home Screen', async () => {
    
    

        
        const locationPopup = await driver.$('//android.widget.Button[@text="While using the app"]');
    
        if(await locationPopup.isDisplayed())
        {
            await locationPopup.click()
            console.log("location popup is clicked")
    
        }
    
        
        const nextButton = await driver.$('//android.view.ViewGroup[@clickable="true"]');
        await nextButton.waitForExist({ timeout: 5000 });
        await nextButton.click()
        
        
        
        const simplifyButton = await driver.$('//android.view.ViewGroup[@clickable="true"]');
        await simplifyButton.click()
    
    
    
         await simplifyButton.waitForExist({ timeout: 2000 });
    
         const englLangBtn = await driver.$("//android.view.ViewGroup[@content-desc='English']");
         await englLangBtn.click()
            
      

    
    
         const element = await driver.$("//android.widget.TextView[@text='SAVE' and @clickable='false' and @enabled='true']");
         await element.click();
    
    
    })


    it.only('Messages 002-Go to Messages', async () => {
    
       
        
        //await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
        await driver.$('android=new UiSelector().text("")').click();
        await driver.$("(//android.widget.TextView[@text='Messages' and @clickable='false' and @enabled='true'])").click();
    })
    

})