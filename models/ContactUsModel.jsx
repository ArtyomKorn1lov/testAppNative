export default class ContactUsModel {
    constructor(name, email, phone, description, checkBox) {
        this.name = {
            value: name.value,
            validator: name.validator,
            isClicked: name.isClicked
        };
        this.email = {
            value: email.value,
            validator: email.validator,
            isClicked: email.isClicked
        };
        this.phone = {
            value: phone.value,
            validator: phone.validator,
            isClicked: phone.isClicked
        };
        this.description = {
            value: description.value
        };
        this.checkBox = {
            value: checkBox.value,
            validator: checkBox.validator,
            isClicked: checkBox.isClicked
        }
    }
}