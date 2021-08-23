function createAcount(pin, balance = 0) {
    return {
        checkBalance: function (input) {
            if (input !== pin) {
                return "Invalid Pin";
            } else {
                return `Balance: $${balance}`;
            }
        },

        deposit: function (input, amount) {
            if (input !== pin) {
                return `Invalid Pin`;
            } else {
                balance += amount;
                return `Updated Balance: $${balance}`;
            }
        },

        withdraw: function (input, amount) {
            if (input !== pin) {
                return `Invalid Pin`;
            } else {
                if (amount < balance) {
                    balance -= amount;
                    return `Withdrew $${amount}. New Balance $${balance}`;
                } else {
                    return `You cannot withdraw that much as you don't have that much money`;
                }
            }
        },

        updatePin: function (input, newPin) {
            if (input !== pin) {
                return `You have provided the wrong pin`;
            } else {
                pin = newPin;
                return `PIN updated`;
            }
        },
    };
}
