$(function () {
    function after_form_submitted(data) {
        if (data.result === 'success') {
            $('#success_message').show();
            $('#error_message').hide();
            $btn.text('Wysłano wiadomość');
        } else {
            // $('#error_message').append('<ul></ul>'); //linia do wyrzucenia

            jQuery.each(data.errors, function (key, val) {
                $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('#btnContact').prop('type', 'submit').text('Wyślij');

        } //else
    }

    $('#reused_form').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('#btnContact').prop('type', 'button').text('Wysyłanie...');

        $.ajax({
            type: "POST",
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json'
        });

    });
});



$(function () {
    $('#captcha_reload').on('click', function (e) {
        e.preventDefault();
        d = new Date();
        var src = $("img#captcha_image").attr("src");
        src = src.split(/[?#]/)[0];

        $("img#captcha_image").attr("src", src + '?' + d.getTime());
    });
});