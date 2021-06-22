import _ from "lodash"

export const formatCurrency = amount => {
    if (isNaN(amount)) return 'NAN'
    return currencyFormatter.format(amount)
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export const mapCamelCaseToSentenceCase = value => {
    return _.startCase(value)
}

export const truthyKeys = obj => {
    return _.pickBy(obj, value => value)
}

export const keysList = obj => {
    return _.keys(obj)
}

export const mapObjectToQueryString = obj => {
    return _.map(obj, (value, key) => `${key}=${value}`).join("&")
}