var result = document.querySelector("#result")
fetch("result.php").then((data) => {
    return data.json()
}).then((data) => {
    // console.log(req)
    for (let i = 0; i < data.length; i++) {
        result.innerHTML += `
        <tr>
        <td>${data[i].fristName}</td>
        <td>${data[i].last_name}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].password}</td>
        <td><button onclick="del(${data[i].id})">del</button></td>
        </tr>`

    }
})
function del(id) {
    fetch(`del.php?id=${id}`).then(() => {
        // location.href = "admin.html"
    })
}
