function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;

    if (!desc || !amount) return;

    let transactions = loadData();
    transactions.push({ desc, amount });

    saveData(transactions);
    renderUI(transactions);
    updateBalance(transactions);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

function deleteItem(index) {
    let transactions = loadData();
    transactions.splice(index, 1);

    saveData(transactions);
    renderUI(transactions);
    updateBalance(transactions);
}
