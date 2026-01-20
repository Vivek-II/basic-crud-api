const API_URL = "http://localhost:3000/users";

function loadUsers() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("userList");
            list.innerHTML = "";

            data.forEach(user => {
                const li = document.createElement("li");
              li.innerHTML = `
  ${user.name} (${user.age}) - ${user.email}
  <button onclick="deleteUser(${user.id})">Delete</button>
`;
                list.appendChild(li);
            });
        });
}

function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, age })
    }).then(() => {
        loadUsers();
    });
}

function deleteUser(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(() => {
        loadUsers();
    });
}

loadUsers();