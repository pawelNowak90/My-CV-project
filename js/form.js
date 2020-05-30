$(function () {
    function after_form_submitted(data) {
        if (data.result === "success") {
            console.log(data);

            $("#success_message").show();
            $("#error_message").hide();
            $("#btnContact").prop("type", "submit").text("Wyślij wiadomość");
        } else {
            for (var key in data.errors) {
                $(`input[name=${key}]`).siblings('.error').show();
            }

            $("#success_message").hide();
            $("#error_message").show();
            //reverse the response on the button
            $("#btnContact").prop("type", "submit").text("Wyślij wiadomość");
        }
    }

    $("#reused_form").submit(function (e) {
        e.preventDefault();
        $('.error').hide();

        $form = $(this);
        //show some response on the button
        $("#btnContact").prop("type", "button").text("Wysyłanie...");

        $.ajax({
            type: "POST",
            url: "handler.php",
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: "json",
        });

    });
});

$(function () {
    $("#captcha_reload").on("click", function (e) {
        e.preventDefault();
        d = new Date();
        var src = $("img#captcha_image").attr("src");
        src = src.split(/[?#]/)[0];

        $("img#captcha_image").attr("src", src + "?" + d.getTime());
    });
});