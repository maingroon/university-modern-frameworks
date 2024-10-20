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
