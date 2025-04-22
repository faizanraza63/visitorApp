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


    it('Messages 002- SignIn with valid Email',async () => 
        {
            await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("visitor007@yopmail.com");;
            await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
            await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();
            
            
    
            
        })
    


        it('Messages 003-Go to Messages', async () => {
    
         
           try {
            const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
        
            // Wait for the element up to 5 seconds, but don't throw if not found
            const exists = await allowButton.waitForExist({ timeout: 5000, timeoutMsg: '', interval: 500 }).catch(() => false);
        
            if (exists && await allowButton.isDisplayed()) {
                await allowButton.click();
                console.log("Permission allow button clicked.");
                await driver.$('//android.view.View[@content-desc="Messages"]').click();
            } else {
                console.log("Permission allow button not displayed, clicking on Profile...");
                await driver.$('//android.view.View[@content-desc="Messages"]').click();
            }
        } catch (err) {
            console.log("Something went wrong while handling permission or navigating to Profile:", err.message);
        }
        
        })
    


})