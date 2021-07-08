export const required = value => {
    if (value) return undefined;
    return "Это обязательное поле"
}

export const maxLengthCreator = maxLength => value => {
    if(value && value.length > maxLength) return `Максимальное количество символов ${maxLength}`;
    return undefined
}