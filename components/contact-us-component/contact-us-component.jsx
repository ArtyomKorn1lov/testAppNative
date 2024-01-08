import { View, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Input, Text, Card, Button, Skeleton } from '@rneui/themed';
import NewsCadsStyles from '../news-card-component/news-card-styles';
import ContactUsModel from '../../models/ContactUsModel';
import ValidatorPatterns from '../../models/ValidatorPatterns';
import React, { useEffect, useState } from 'react';
import ConfirmDialogComponent from '../confirm-dialog-component/confirm-dialog-component';

const ContactUsComponent = () => {
    const [form, setForm] = useState(new ContactUsModel(
        {value: "", validator: "", isClicked: false}, 
        {value: "", validator: "", isClicked: false}, 
        {value: "", validator: "", isClicked: false}, 
        {value: ""},
        {value: false, validator: "", isClicked: false},
    ));
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [modalText, setModalText] = useState("");
    const [successMessage, setMessage] = useState("");

    //TODO продумать оптимизацию валидации
    const validateForm = () => {
        let isValid = true;
        let formObj = form;
        //Валидация обязательного поля name
        if (!formObj.name.value && !!formObj.name.isClicked) {
            formObj = {...formObj, name: {value: formObj.name.value, isClicked: formObj.name.isClicked, validator: ValidatorPatterns.isRequered.message}};
            isValid = false;
        } else {            
            formObj = {...formObj, name: {value: formObj.name.value, isClicked: formObj.name.isClicked, validator: ""}};
        }
        //Валидация обязательного поля email
        if (!formObj.email.value && !!formObj.email.isClicked) {
            formObj = {...formObj, email: {value: formObj.email.value, isClicked: formObj.email.isClicked, validator: ValidatorPatterns.isRequered.message}};
            isValid = false;
        } else {
            formObj = {...formObj, email: {value: formObj.email.value, isClicked: formObj.email.isClicked, validator: ""}};
            //Валидация паттерна email
            if (!!formObj.email.value && !ValidatorPatterns.email.pattern.test(formObj.email.value)) {
                formObj = {...formObj, email: {value: formObj.email.value, isClicked: formObj.email.isClicked, validator: ValidatorPatterns.email.message}};
                isValid = false;
            } else {
                formObj = {...formObj, email: {value: formObj.email.value, isClicked: formObj.email.isClicked, validator: ""}};
            }
        }
        //Валидация обязательного поля phone
        if (!formObj.phone.value && !!formObj.phone.isClicked) {
            formObj = {...formObj, phone: {value: formObj.phone.value, isClicked: formObj.phone.isClicked, validator: ValidatorPatterns.isRequered.message}};
            isValid = false;
        } else {
            formObj = {...formObj, phone: {value: formObj.phone.value, isClicked: formObj.phone.isClicked, validator: ""}};
            //Валидация паттерна phone
            if (!!formObj.phone.value && !ValidatorPatterns.phone.pattern.test(formObj.phone.value)) {
                formObj = {...formObj, phone: {value: formObj.phone.value, isClicked: formObj.phone.isClicked, validator: ValidatorPatterns.phone.message}};
                isValid = false;
            } else {
                formObj = {...formObj, phone: {value: formObj.phone.value, isClicked: formObj.phone.isClicked, validator: ""}};
            }
        }
        //Валидация обязательного поля name
        if (!formObj.checkBox.value && !!formObj.checkBox.isClicked) {
            formObj = {...formObj, checkBox: {value: formObj.checkBox.value, isClicked: formObj.checkBox.isClicked, validator: ValidatorPatterns.isRequered.message}};
            isValid = false;
        } else {
            formObj = {...formObj, checkBox: {value: formObj.checkBox.value, isClicked: formObj.checkBox.isClicked, validator: ""}};
        }
        if (isValid) {
            setForm(new ContactUsModel(
                { value: formObj.name.value, validator: "", isClicked: formObj.name.isClicked },
                { value: formObj.email.value, validator: "", isClicked: formObj.email.isClicked },
                { value: formObj.phone.value, validator: "", isClicked: formObj.phone.isClicked },
                { value: formObj.description.value },
                { value: formObj.checkBox.value, validator: "", isClicked: formObj.checkBox.isClicked },
            ));
            if (formObj.name.isClicked && formObj.email.isClicked && formObj.phone.isClicked && formObj.checkBox.isClicked) {
                setDisabled(false);
            }
        } else {
            setForm(formObj);
            setDisabled(true);
        }
    };

    const sendFormData = () => {
        setLoading(true);
        setIsVisible(true);
        setMessage("");
        setModalText(`Имя: ${form.name.value} \nEmail: ${form.email.value} \nНомер телефона: ${form.phone.value} \nВаш вопрос: ${form.description.value}`);
    };

    const toggleDialog = () => {
        setIsVisible(!isVisible);
    };

    const onSuccess = () => {
        setIsVisible(false);
        setLoading(false);
        setMessage("Спасибо, ваши данные отправлены!");
        setModalText("");
        setForm(new ContactUsModel(
            { value: "", validator: "", isClicked: false },
            { value: "", validator: "", isClicked: false },
            { value: "", validator: "", isClicked: false },
            { value: "" },
            { value: false, validator: "", isClicked: false },
        ));
    };

    useEffect(() => {
        validateForm();
    }, [form.name.value, form.name.isClicked, form.email.value, form.email.isClicked, form.phone.value, form.phone.isClicked, form.checkBox.value]);

    return (
        <>
            <ScrollView>
                <View style={NewsCadsStyles.container}>
                    <Card containerStyle={NewsCadsStyles.element}>
                        <Text style={NewsCadsStyles.fonts} h4>
                            Связаться с нами
                        </Text>
                        <Card.Divider style={NewsCadsStyles.divider} />
                        <Input
                            inputStyle={{
                                color: "#D9D9D9"
                            }}
                            label="Введите имя"
                            placeholder='Имя'
                            value={form.name.value}
                            errorStyle={{ color: 'red' }}
                            onBlur={() => setForm({...form, name: {validator: form.name.validator, isClicked: true, value: form.name.value}})}
                            onChange={(event) => { setForm({...form, name: {validator: form.name.validator, isClicked: form.name.isClicked, value: event.target.value}})
                            console.log("попадание")
                            }}
                            errorMessage={form.name.validator}
                        />
                        <Input
                            inputStyle={{
                                color: "#D9D9D9"
                            }}
                            label="Введите эл. почту"
                            value={form.email.value}
                            placeholder='Email'
                            onBlur={() => setForm({...form, email: {validator: form.email.validator, isClicked: true, value: form.email.value}})}
                            onChange={(event) => setForm({...form, email: {validator: form.email.validator, isClicked: form.email.isClicked, value: event.target.value}})}
                            errorMessage={form.email.validator}
                        />
                        <Input
                            inputStyle={{
                                color: "#D9D9D9"
                            }}
                            label="Введите номер телефона"
                            placeholder='В формате +7XXXXXXXXXX'
                            maxLength={12}
                            value={form.phone.value}
                            onBlur={() => setForm({...form, phone: {validator: form.phone.validator, isClicked: true, value: form.phone.value}})}
                            onChange={(event) => setForm({...form, phone: {validator: form.phone.validator, isClicked: form.phone.isClicked, value: event.target.value}})}
                            errorMessage={form.phone.validator}
                        />
                        <Input
                            inputStyle={{
                                color: "#D9D9D9",
                            }}
                            label="Опишите ваш вопрос"
                            multiline
                            numberOfLines={5}
                            value={form.description.value}
                            onChange={(event) => setForm({...form, description: {value: event.target.value}})}
                            placeholder='Описание'
                        />
                        <View style={{
                            flex: 1,
                            flexDirection: "row",
                        }}>
                            <Checkbox
                                value={form.checkBox.value}
                                onValueChange={() => setForm({ ...form, checkBox: { validator: form.checkBox.validator, value: !form.checkBox.value, isClicked: true } })}
                                style={{ alignSelf: 'center', }}
                            />
                            <Text style={{ margin: 8, color: "#D9D9D9" }}>Я подтверждаю обработку введённых данных</Text>
                        </View>
                        <Text style={{ margin: 8, marginTop: 0, color: "red" }}>{form.checkBox.validator}</Text>
                        <Card.Divider style={NewsCadsStyles.divider} />
                        {isLoading ? (
                            <Skeleton height={40} />
                        ) : (
                            <Button
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                onPress={() => sendFormData()}
                                disabled={disabled}
                                title="Отправить"
                            />
                        )}
                        {!!successMessage && <Text style={{ margin: 8, color: "green" }}>{successMessage}</Text>}
                    </Card>
                </View>
            </ScrollView>
            <ConfirmDialogComponent
                title={'Подтверждайте ли вы отправку формы?'}
                text={modalText}
                isVisible={isVisible}
                toggleDialog={toggleDialog}
                onClose={() => {
                    setIsVisible(false);
                    setLoading(false);
                    setModalText("");
                }}
                onConfirm={() => onSuccess()}
            />
        </>
    );
};

export default ContactUsComponent;