var result = document.querySelector("#result")
var req = localStorage.getItem("req")
fetch("result.php").then((data) => {
    return data.json()
}).then((data) => {
    console.log(req)
    for (let i = 0; i < data.length; i++) {
        if (data[i].fristName.includes(req) || data[i].last_name.includes(req) || data[i].phone.includes(req) || data[i].password.includes(password)) {
            result.innerHTML += `
        <tr>
        <td>${data[i].fristName}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].password}</td>
        </tr>`
        }
    }
})
