<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comment = htmlspecialchars($_POST['comment']);

    $to = "lysychkob@gmail.com";
    $subject = "Новий коментар на сайті";
    $message = "Ви отримали новий коментар: " . $comment;
    $headers = "";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Коментар відправлено успішно.";
    } else {
        echo "Не вдалося відправити коментар.";
    }
}
?>
