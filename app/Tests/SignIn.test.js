



//import general from "../Page Object/general.js";

describe('Sign In Cases', () => {


// it.only('Test Page Object', async() => {

//         await general.acceptLocationPopup();
//         await general.clickNextButton();
//         await general.clickSimplifyButton();


    
// })

     
    
it('SignIn 001- Go to Home Screen', async () => {


    
    
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
        
    //  const randomNumber = Math.floor(Math.random() * 2);

    //  if(randomNumber==0)
    //  {
    //  const englLangBtn = await driver.$("//android.view.ViewGroup[@content-desc='English']");
    //  await englLangBtn.click()
    //  }
    //  else
    //  {
    //     const arabicLangBtn = await driver.$("//android.view.ViewGroup[@content-desc='العربية']");
    //     await arabicLangBtn.click()
    //  }


     const element = await driver.$("//android.widget.TextView[@text='SAVE' and @clickable='false' and @enabled='true']");
     await element.click();
     
     
     await driver.pause(1500)


     



    
    // await driver.terminateApp("visitor.mygatepass.com");
    // await driver.removeApp("visitor.mygatepass.com")


} )


 it('SignIn 002- SignIn without email',async () => {


    await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();


})

it('SignIn 003- SignIn with invalid Email',async () => 
{
    await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("testabc");
    await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
    


})


it('SignIn 004- SignIn with valid Email',async () => 
    {
        await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("visitor007@yopmail.com");;
        await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
        await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();
        


        const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
        
        // Wait up to 5 seconds for the button to exist
        await allowButton.waitForExist({ timeout: 5000 });

        // Check if the button is visible and click it
        if (await allowButton.isDisplayed()) {
            await allowButton.click();
            console.log("Permission allow button clicked.");
        } else {
            console.log("Permission allow button not displayed.");
        }

        
    })

    it('SignIn 005- Logout',async () => 
    {
        await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click();
        await driver.$('//android.widget.TextView[@text="SIGN OUT"]').click()
        

    })





})