let dataLocalStorage = []
let dataSessionStorage = []
let dataCookie = []

export const setDataStorage = (select, data) => {
    if (select === 'local') {
        dataLocalStorage.push(data)
        localStorage.setItem('data', JSON.stringify(dataLocalStorage))
    } else if (select === 'session') {
        dataSessionStorage.push(data)
        sessionStorage.setItem('data', JSON.stringify(dataSessionStorage))
    } else if (select === 'cookie') {
        dataCookie.push(data)
        document.cookie = `data= ${JSON.stringify(dataCookie)};`;
    }
}

export const getDataStorage = (select) => {
    const getDataLocalStorage = JSON.parse(localStorage.getItem('data'))
    const getDataSessionStorage = JSON.parse(sessionStorage.getItem('data'))
    const getDataCookie = JSON.parse(document.cookie?.split("=")[1])

    if (select === 'local') {
        return getDataLocalStorage
    } else if (select === 'session') {
        return getDataSessionStorage
    } else if (select === 'cookie') {
        return getDataCookie
    } else {
        return false
    }
}
