const ValidatorPatterns = {
    isRequered: {
        message: "Это поле обязательно для заполнения"
    },
    email: {
        message: "Неверно введённый Email",
        pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    },
    phone: {
        message: "Неверный телефон",
        pattern: /^\+?[7][0-9]{10}$/
    }
}

export default ValidatorPatterns;