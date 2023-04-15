const listData = document.getElementById('list-data')

export const showData = (data) => {
    listData.innerHTML = ''
    data.map((item) => {
        listData.innerHTML += `
        <div class="data-item">
            <div class="list-data">
                <h4>Nama</h4>
                <p>${item.firstName} ${item.lastName}</p>
            </div>
            <div class="list-data">
                <h4>Gender</h4>
                <p>${item.gender}</p>
            </div>
            <div class="list-data">
                <h4>Alamat</h4>
                <p>${item.alamat}</p>
            </div>
        </div>
        `
    })
}