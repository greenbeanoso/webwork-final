function sub(s) {
    s.preventDefault()
    localStorage.setItem("req", document.getElementsByName("req")[0].value)
    console.log(document.getElementsByName("req")[0].value)
    location.href = "result.html"
}