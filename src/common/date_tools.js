export const mapMonthToName = {
    "01": 'January',
    "02": 'February',
    "03": 'March',
    "04": 'April',
    "05": 'May',
    "06": 'June',
    "07": 'July',
    "08": 'August',
    "09": 'September',
    "10": 'October',
    "11": 'November',
    "12": 'December',
}

export const formatDate = (date) => {
    if(!date) {
        return ''
    }
    const substr = date.substring(10,5) //09-23
    const dateArr = substr.split('-')// ['09','23']
    const month = mapMonthToName[dateArr[0]]
    return `${dateArr[1]} ${month}`
}   