export const parseCamelCase = str => {

    const index = str.indexOf(str.replace(/[^A-Z]/g, ''));

    if (index > 0) {
        let splitStr = str.split(str[index]);
        splitStr[0] = splitStr[0][0].toUpperCase() + splitStr[0].slice(1);
        return splitStr.join(" " + str[index].toUpperCase());
    } else return str[0].toUpperCase() + str.slice(1);
}

export const removeCapital = str => {
    const index = str.indexOf(str.replace(/[^A-Z]/g, ''));

    if (index > 0) {
        const splitStr = str.split(str[index]);
        return splitStr[0][0].toUpperCase() + splitStr[0].slice(1)
    } else return str[0].toUpperCase() + str.slice(1);
}