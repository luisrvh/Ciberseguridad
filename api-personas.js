document.addEventListener('DOMContentLoaded', function() {
    fetchRandomUsers(16); // Carga automáticamente 16 usuarios al abrir la página
});

document.getElementById('fetch-users').addEventListener('click', function() {
    fetchRandomUsers(16); // Esta línea se mantiene para cargar usuarios adicionales al hacer clic en el botón
});

function fetchRandomUsers(numUsers) {
    // Vaciar el contenedor antes de agregar nuevos usuarios
    document.getElementById('user-info').innerHTML = '';

    // Hacer solicitudes hasta obtener el número deseado de usuarios
    for (let i = 0; i < numUsers; i++) {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userContainer = document.createElement('div');
            userContainer.classList.add('user-container');
            userContainer.innerHTML = `
                <img src="${user.picture.large}" alt="User Image">
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Country: ${user.location.country}</p>
                <p>Age: ${user.dob.age}</p>
            `;
            document.getElementById('user-info').appendChild(userContainer);
        })
        .catch(error => {
            console.error('Error fetching random user:', error);
        });
    }
}

