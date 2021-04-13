
const reverseNest = (nest: object, preObj: object | string = null) => {
    const [key, value] = entriesObject(nest);
    const newValue = preObj ? { [key]: preObj } : key;
    if (value && typeof value === 'object') {
        return reverseNest(value, newValue)
    } else {
        if (typeof value !== "string") throw new TypeError("invalid input");
        return { [value]: newValue }
    };
}

const entriesObject = (nest: object) => {
    if (!nest) throw new TypeError("invalid input");
    const nestArr: [string, any][] = Object.entries(nest);
    if (nestArr.length !== 1) throw new TypeError("invalid input");
    return nestArr[0];
}

module.exports = reverseNest;

