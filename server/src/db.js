import data from "./contants/Data.json"

export const getData = params => {
    return data.filter(entry => {
        var returnEntry = true
        Object.keys(params).forEach(param => returnEntry = returnEntry && entry[param].toString().toLowerCase() == params[param].toLowerCase())
        return returnEntry
    })
}