import { getData } from "./modules/getDataForm.js";
import { setDataStorage, getDataStorage } from "./modules/dataStorage.js";
import { showData } from "./modules/showData.js";


document.getElementById('add-data').addEventListener('click', (event) => {
    event.preventDefault()

    const selectStorage = getData().storageSelect
    setDataStorage(selectStorage, getData())

    let data = []
    data.push(getData())

    showData(data)

})

document.getElementById('show-data').addEventListener('click', (event) => {
    event.preventDefault()

    const selectStorage = getData().storageSelect
    setDataStorage(selectStorage, getData())

    showData(getDataStorage(selectStorage))
})