export const required = value => {
    if (value) return undefined;
    return "Это обязательное поле"
}

export const maxLengthCreator = maxLength => value => {
    if(value && value.length > maxLength) return `Максимальное количество символов ${maxLength}`;
    return undefined
}

export const emailValidation = value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase()) && value) {
        return 'некорректный email'
    }
    return undefined
}