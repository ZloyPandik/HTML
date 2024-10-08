document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отключаем стандартную отправку формы

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Пожалуйста, заполните все поля!");
    } else if (!email.includes("@")) {
        alert("Введите корректный email!");
    } else {
        alert("Форма успешно отправлена!");
    }
});