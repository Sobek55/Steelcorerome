const customers = [];

document.getElementById("submitBtn").addEventListener("click", function () {

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

});
