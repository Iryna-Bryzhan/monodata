<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Встановіть адресу, на яку ви хочете отримувати заявки
    $to = "shop@monodata.online";

    // Встановіть тему листа
    $subject = "Нова заявка з форми";

    // Створіть тіло листа
    $messageBody = "Ім'я: " . $name . "\n";
    $messageBody .= "Прізвище: " . $surname . "\n";
    $messageBody .= "Телефон: " . $phone . "\n";
    $messageBody .= "Повідомлення: " . $message . "\n";

    // Надіслати лист
    if (mail($to, $subject, $messageBody)) {
        echo "Заявка відправлена успішно!";
    } else {
        http_response_code(500);
        echo "Помилка при надсиланні заявки.";
    }
} else {
    http_response_code(400);
    echo "Помилка при надсиланні листа";
}
?>