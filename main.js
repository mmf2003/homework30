console.log("Lection 30");

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */
console.log("Ex.1 Использовал ^ в [], как НЕ");
console.log("--------------------------------------------------");
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}
console.log(
    "pattern = example@example.com -->",
    isValidEmail("example@example.com"),
); // Повинно вивести: true
console.log("pattern = invalid-email -->", isValidEmail("invalid-email")); // Повинно вивести: false
console.log("pattern = test@com -->", isValidEmail("test@com"));
console.log("pattern = @gmail.com -->", isValidEmail("@gmail.com"));
console.log("pattern = asda @gmail.com -->", isValidEmail("asda @gmail.com"));

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

console.log("Ex.2 Сделал усиленную регулярка для проверки /path1/path2 и тд");
console.log("--------------------------------------------------");

function isValidUrl(url) {
    const pattern = /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

    return pattern.test(url);
}

console.log(
    "https://www.example.com -->",
    isValidUrl("https://www.example.com"),
); // Повинно вивести: true
console.log("pattern = invalid-url -->", isValidUrl("invalid-url")); // Повинно вивести: false
console.log(
    "pattern = https://www.example.com/path1/path2 -->",
    isValidUrl("https://www.example.com/path1/path2"),
); // Повинно вивести: false

// Експорт функції для використання та тестування
/* export { isValidEmail, isValidUrl }; */
