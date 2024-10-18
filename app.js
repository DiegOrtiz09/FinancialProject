// Variables globales
let transactions = [];
let balance = 0;

// Referencias a elementos del DOM
const balanceElement = document.getElementById('balance');
const transactionForm = document.getElementById('transaction-form');
const transactionsList = document.getElementById('transactions-list');

// Manejar el envío del formulario
transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Crear una nueva transacción
    const transaction = {
        type,
        category,
        amount
    };

    // Agregar la transacción al arreglo
    transactions.push(transaction);

    // Actualizar el balance
    updateBalance(transaction);

    // Mostrar la transacción en la lista
    displayTransaction(transaction);

    // Limpiar el formulario
    transactionForm.reset();
});

// Función para actualizar el balance
function updateBalance(transaction) {
    if (transaction.type === 'income') {
        balance += transaction.amount;
    } else {
        balance -= transaction.amount;
    }

    balanceElement.textContent = `$${balance.toFixed(2)}`;
}

// Función para mostrar la transacción en la lista
function displayTransaction(transaction) {
    const li = document.createElement('li');
    li.textContent = `${transaction.type === 'income' ? '+' : '-'} $${transaction.amount.toFixed(2)} (${transaction.category})`;
    transactionsList.appendChild(li);
}
