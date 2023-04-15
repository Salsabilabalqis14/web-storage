export const getData = () => {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const gender = document.getElementById('gender').value
    const alamat = document.getElementById('alamat').value
    const storage = document.getElementsByName('storage')
    let storageSelect = ''

    for (let i = 0; i < storage.length; i++) {
        if (storage[i].checked) {
            storageSelect = storage[i].value
        }
    }

    const data = {
        firstName,
        lastName,
        gender,
        alamat,
        storageSelect
    }

    return data
}