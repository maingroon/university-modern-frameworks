document.getElementById('email').addEventListener('blur', async () => {
    const email = document.getElementById('email').value;
    const emailStatusDiv = document.getElementById('emailStatus');

    emailStatusDiv.textContent = 'Checking email...';

    try {
        // Імітація асинхронного запиту до сервера для перевірки електронної пошти
        const isUnique = await new Promise(resolve => setTimeout(() => {
            resolve(email !== 'test@example.com');
        }, 1000));

        emailStatusDiv.textContent = isUnique ? 'Email is unique' : 'Email already exists';
        emailStatusDiv.style.color = isUnique ? 'green' : 'red';
    } catch (error) {
        emailStatusDiv.textContent = 'Error checking email.';
        emailStatusDiv.style.color = 'red';
    }
});

document.getElementById('password').addEventListener('blur', async () => {
    const password = document.getElementById('password').value;
    const passwordStatusDiv = document.getElementById('passwordStatus');

    passwordStatusDiv.textContent = 'Checking password...';

    try {
        // Імітація асинхронного запиту до сервера для перевірки пароля
        const isSecure = await new Promise(resolve => setTimeout(() => {
            resolve(password !== 'password');
        }, 1000));

        passwordStatusDiv.textContent = isSecure ? 'Password is secure' : 'Please choose a more secure password';
        passwordStatusDiv.style.color = isSecure ? 'green' : 'red';
    } catch (error) {
        passwordStatusDiv.textContent = 'Error checking password.';
        passwordStatusDiv.style.color = 'red';
    }
});