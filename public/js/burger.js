// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE
    const burgerEat = document.querySelectorAll('.burgerEat');

    // Set up the event listener for the create button
    if (burgerEat) {
        burgerEat.forEach((button) => {
            button.addEventListener('click', (e) => {

                // Grabs the id of the element that goes by the name, "id"
                const id = e.target.getAttribute('data-id');
                console.log(`ID: ${id}`)

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },


                }).then((response) => {
                    // Check that the response is all good
                    // Reload the page so the user can see the new quote
                    if (response.ok) {
                        console.log("There is no burger");
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                    }
                });
            });
        });
    }

    // CREATE
    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            // Grabs the value of the input that goes by the name, "burgerAdd"
            const newBurger = {
                name: document.getElementById('burgerAdd').value.trim(),
            };

            // Send POST request to create a new burger
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burgerAdd').value = '';

                // Reload the page so the user can see the new burger
                console.log('Added a new burger!');
                location.reload();
            });
        });
    }
});