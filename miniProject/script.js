document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    if (amount === '' || parseInt(amount) <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const expenseList = document.getElementById('expense-list');
    const totalExpensesSpan = document.getElementById('total-expenses');
    
    // Add expense to list
    const li = document.createElement('li');
    li.textContent = `Rs. ${amount}`;
    expenseList.appendChild(li);

    // Update total expenses
    let total = parseFloat(totalExpensesSpan.textContent);
    total += parseFloat(amount);
    totalExpensesSpan.textContent = total.toFixed(2);

    // Clear input
    document.getElementById('amount').value = '';
});
