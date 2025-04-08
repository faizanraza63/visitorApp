

class General {
    get locationPopup() {
        return $('//android.widget.Button[@text="While using the app"]');
    }

    get nextButton() {
        return $('//android.view.ViewGroup[@clickable="true"]');
    }

    get simplifyButton() {
        return $('//android.view.ViewGroup[@clickable="true"]');
    }

    async acceptLocationPopup() {
        if (await this.locationPopup.isDisplayed()) {
            await this.locationPopup.click();
            console.log("Location popup clicked");
        }
    }

    async clickNextButton() {
        await this.nextButton.waitForExist({ timeout: 5000 });
        await this.nextButton.click();
    }

    async clickSimplifyButton() {
        await this.simplifyButton.waitForExist({ timeout: 1000 });
        await this.simplifyButton.click();
    }
}

module.exports = new General();
