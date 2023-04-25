const btnlogin = document.querySelector('.btnlogin');
        const login = document.querySelector('.login');
        const btnremove = document.querySelector('.remove');


        btnlogin.addEventListener('click', () => {
            login.classList.add('active')
        })

        btnremove.addEventListener('click', () => {
            login.classList.remove('active')
        })