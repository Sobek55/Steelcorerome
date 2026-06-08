const customers = [];

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("customerForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const customer = {

            id: Date.now(),

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            password: document.getElementById("password").value,

            favoriteGame: document.getElementById("favoriteGame").value

        };

        customers.push(customer);

        console.clear();

        console.log(customers);

        form.reset();

    });

});
