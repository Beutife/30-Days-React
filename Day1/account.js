const personAccount = {
    firstName: 'Beulah',
    lastName: 'Ude',
    incomes: [], 
    expenses: [], 

    
    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo() {
        return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};


personAccount.addIncome('Salary', 100000);
personAccount.addIncome('Freelancing', 20000);


personAccount.addExpense('Rent', 50000);
personAccount.addExpense('Groceries', 10000);


console.log(personAccount.accountInfo());
