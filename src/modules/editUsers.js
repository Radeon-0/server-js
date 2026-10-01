import { render } from "./render";
export const editUsers = () => {
    const tbody = document.getElementById('table-body');
    const form = document.querySelector('form');
    const nameInput = form.querySelector("#form-name");
    const emailInput = form.querySelector("#form-email");
    const childrenInput = form.querySelector("#form-children");
    tbody.addEventListener('click', (event) => {
        if (event.target.closest('.btn-edit')) {
            let tr = event.target.closest('tr');
            const id = tr.dataset.key;


            userService.getUser(id).then(users => {
                nameInput.value = users.name;
                emailInput.value = users.email;
                childrenInput.checked = users.children;

                form.dataset.method = id;
            });

        }
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.dataset.method) {
            const id = form.dataset.method;
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            };

            userService.editUser(id,user).then(() => {
                userService.getUsers().then(users => {
                    render(users);
                    form.reset();
                    form.removeAttribute('data-method');
                });
            });
        }



    })

}