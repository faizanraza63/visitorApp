

describe('Sign Up Cases', () => {


    it('SignUp 001- Go to Home Screen', async () => {


    
    
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
         
         
    
        // await driver.terminateApp("visitor.mygatepass.com");
        // await driver.removeApp("visitor.mygatepass.com")
    
    
    } )


    it.only('Sign up 002- Sign UP Process',async () => {

       const randomNumber = Math.floor(Math.random() * 50)
        await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("testvisitor"+randomNumber+"@yopmail.com");
        await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
        
        await driver.$('//android.widget.EditText').setValue('0852')
        await driver.$('//android.widget.TextView[@text="VERIFY"]').click()
        await driver.pause(1500)
        await driver.$('//android.view.ViewGroup[@content-desc="🇦🇪"]/android.widget.ImageView').click()
        await driver.$('//android.widget.EditText[@resource-id="text-input-country-filter"]').setValue('Pakistan')
        await driver.pause(2000)
        const country =  await driver.$('//android.widget.TextView[@text="Pakistan (+92)"]');
        country.click()
        await driver.$('//android.widget.EditText[@text="Phone Number"]').setValue('3051467928')
        await driver.hideKeyboard()
        await driver.$('//android.widget.TextView[@text="NEXT"]').click()
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
        await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();
        
        const verificationComplete = await driver.$('//android.widget.TextView[@text="NEXT"]')
        if(verificationComplete.isDisplayed)
        {verificationComplete.click()}

        const valueSelection = Math.floor(Math.random() * 2);

        if(valueSelection==0)
        {await driver.$('//android.view.ViewGroup[@content-desc="Male"]').click()}
        if(valueSelection==1)
        {await driver.$('//android.view.ViewGroup[@content-desc="Female"]').click()}

        await driver.$('//android.widget.TextView[@text="NEXT"]').click()

        await driver.$('android=new UiSelector().className("android.widget.EditText").instance(0)').setValue('Visitor')
        await driver.$('android=new UiSelector().className("android.widget.EditText").instance(1)').setValue('v'+randomNumber)
        await driver.$('//android.widget.TextView[@text="NEXT"]').click()


        const today = new Date();
        const currentDay = today.getDate();         
        const currentMonth = today.getMonth() + 1; 
        const currentYear = today.getFullYear(); 
        const formattedDate = `${currentDay} / ${currentMonth} / ${currentYear}`;
        const randomYear = Math.floor(Math.random() * (2012 - 2000 + 1)) + 2000;
        const targetYear = randomYear.toString()

        const randomDate = Math.floor(Math.random() * 5) + 1; // 1 to 5
        const targetDate = randomDate.toString();
        
        
        await driver.$(`//android.view.ViewGroup[@content-desc="${formattedDate}"]`).click();
        
        
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        const targetMonth = randomMonth.toString()


        
        const scrollableMonthSelector = `android=new UiScrollable(new UiSelector().scrollable(true).instance(0))`;
        const scrollableDateSelector = `android=new UiScrollable(new UiSelector().scrollable(true).instance(1))`;
        const scrollableSelector = `android=new UiScrollable(new UiSelector().scrollable(true).instance(2))`;
        
        const maxScrollAttempts = 20;
        let yearFound = false;
        let dateFound = false;
        let MonthFound = false;

       for (let i = 0; i < maxScrollAttempts; i++) {
            try {
                const year = await driver.$(`android=new UiSelector().text("${targetYear}")`);
                if (await year.isDisplayed()) 
                    {
                        yearFound=true;
                        break;    
                    } 
            } catch (e) {
                // Not visible yet
            }
            await driver.$(`${scrollableSelector}.scrollBackward()`);
        }


        //const yearElement = await driver.$(`android=new UiSelector().text("${targetYear}")`);
        const yearElement = await driver.$(scrollableSelector)
        await yearElement.click();


        for (let i = 0; i < maxScrollAttempts; i++) {
            try {
                const date = await driver.$(`android=new UiSelector().text("${targetDate}")`);
                if (await date.isDisplayed()) 
                    {
                        dateFound=true;
                        break;    
                    } 
            } catch (e) {
                // Not visible yet
            }
            await driver.$(`${scrollableDateSelector}.scrollBackward()`);
        }




        const dateElement = await driver.$(scrollableDateSelector);
        await dateElement.click(); 


        for (let i = 0; i < 12; i++) {
            try {
                const month = await driver.$(`android=new UiSelector().text("${targetMonth}")`);
                if (await month.isDisplayed()) 
                    {
                        MonthFound=true;
                        break;    
                    } 
            } catch (e) {
                // Not visible yet
            }
            await driver.$(`${scrollableMonthSelector}.scrollBackward()`);
        }

        

        const monthElement = await driver.$(scrollableMonthSelector);
        await monthElement.click();
        
        await driver.$('//android.widget.Button[@resource-id="android:id/button1"]').click()
        await driver.$('//android.widget.TextView[@text="NEXT"]').click() 

        await driver.$('android=new UiSelector().className("android.view.ViewGroup").instance(23)').click()
        await driver.$('//android.widget.EditText[@resource-id="text-input-country-filter"]').setValue('Pakistan')
        await driver.pause(2000)
        await driver.$('//android.widget.TextView[@text="Pakistan"]').click();
        await driver.$('//android.widget.TextView[@text="NEXT"]').click() 

        
        await driver.$('android= new UiSelector().className("android.widget.ImageView").instance(1)').click()
        await driver.$('android= new UiSelector().className("android.view.ViewGroup").instance(18)').click() 



        const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
        
        // Wait up to 5 seconds for the button to exist
        await allowButton.waitForExist({ timeout: 5000 });

        // Check if the button is visible and click it
        if (await allowButton.isDisplayed()) {
            await allowButton.click();
            console.log("Permission allow button clicked.");
        } else {
            console.log("Permission allow button not displayed....");
        }


    })




})