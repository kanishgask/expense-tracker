function loadData() {
    return JSON.parse(localStorage.getItem("transactions")) || [];
}

function saveData(data) {
    localStorage.setItem("transactions", JSON.stringify(data));
}
