describe('First Test', () => {


     
    
    it('Profile 001- Go to Home Screen', async () => {
    
    

        
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

    it('Profile 002-Go to Profile', async () => {
    
        await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("visitor007@yopmail.com");;
        await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
        await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();

        
     
       try {
        const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    
        // Wait for the element up to 5 seconds, but don't throw if not found
        const exists = await allowButton.waitForExist({ timeout: 5000, timeoutMsg: '', interval: 500 }).catch(() => false);
    
        if (exists && await allowButton.isDisplayed()) {
            await allowButton.click();
            console.log("Permission allow button clicked.");
            await driver.$('//android.view.View[@content-desc="Profile"]').click();
        } else {
            console.log("Permission allow button not displayed, clicking on Profile...");
            await driver.$('//android.view.View[@content-desc="Profile"]').click();
        }
    } catch (err) {
        console.log("Something went wrong while handling permission or navigating to Profile:", err.message);
    }
    
    })


    it('Profile 003- Try with no Number', async() => {

        //await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
        //await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        const phoneNumberField = await driver.$("(//android.widget.EditText)[1]");
        await phoneNumberField.click();
        await phoneNumberField.setValue("")
        await driver.hideKeyboard()
        await driver.$("//android.widget.TextView[@text='CHANGE NUMBER' and @enabled='true']").click()



    })

    
    it('Profile 003- Try with invalid number', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      //  await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        const phoneNumberField = await driver.$("(//android.widget.EditText)[1]");
        await phoneNumberField.click();
        await phoneNumberField.setValue("")
        
        phoneNumberField.setValue("31231231231123")
        await driver.hideKeyboard()
        await driver.$("//android.widget.TextView[@text='CHANGE NUMBER' and @enabled='true']").click()

        
        

    })


    it('Profile 004- Changing the number', async() => {

     //   await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      //  await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        const phoneNumberField = await driver.$('//android.widget.EditText[@text="31231231231123"]');
        await driver.$('//android.view.ViewGroup[@content-desc="🇦🇪"]/android.widget.ImageView').click()
        await driver.pause(1000)
        await driver.$('//android.widget.EditText[@resource-id="text-input-country-filter"]').setValue('United')
        await driver.pause(2000)
        const country =  await driver.$('//android.widget.TextView[@text="United Arab Emirates (+971)"]');
        country.click()
        
        
        await driver.$('//android.widget.EditText[@text="31231231231123"]').setValue("557322693")
        await driver.$('//android.widget.EditText[@text="557322693"]').setValue("")
        await driver.$('//android.widget.EditText[@text="Phone Number"]').setValue("557322688")
        await driver.$("//android.widget.TextView[@text='CHANGE NUMBER' and @enabled='true']").click()
        
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
        await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();

    })

      it('Profile 005-  Cancel Deletion of Account', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
       // await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();
       
        

        const deleteAccountutton = await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]');
        await deleteAccountutton.scrollIntoView();

        await driver.$("//android.widget.TextView[@text='DELETE MY ACCOUNT' and @clickable='false' and @enabled='true' ]").click()

        await driver.$('//android.widget.TextView[@text="Cancel"]').click()

        


    })

    it('Profile 006-  Delete the Account without entering email', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      // await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();
       
        

        const deleteAccountutton = await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]');
        await deleteAccountutton.scrollIntoView();

        await driver.$("//android.widget.TextView[@text='DELETE MY ACCOUNT' and @clickable='false' and @enabled='true' ]").click()

        await driver.$('//android.widget.TextView[@text="YES, I AM SURE, DELETE"]').click()
        await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()



    })

    it('Profile 007-  Delete the Account with invalid email', async() => {

       // await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
       // await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();
       
        

        const deleteAccountutton = await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]');
        await deleteAccountutton.scrollIntoView();

        await driver.$("//android.widget.TextView[@text='DELETE MY ACCOUNT' and @clickable='false' and @enabled='true' ]").click()

       

        await driver.$('//android.widget.EditText[@text="Email"]').setValue('randemail')
        await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()
        await driver.$('//android.widget.EditText[@text="randemail"]').setValue("")



    })

    it('Profile 008-  Delete the Account', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()

     //   const emailText = await $('//android.widget.TextView[@text="visitor007@yopmail.com"]').getText()

      
       
        await driver.$('//android.widget.EditText[@text="Email"]').click()
        await driver.$('//android.widget.EditText[@text="Email"]').setValue("")
        await driver.$('//android.widget.EditText[@text="Email"]').setValue("testvisitor007@yopmail.com")
        //await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()

        await driver.pause(1500)
        await driver.terminateApp("visitor.mygatepass.com");
        await driver.removeApp("visitor.mygatepass.com")

    }) 
     

    } )