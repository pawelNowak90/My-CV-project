function sendMail(params) {
        var tempParams={
            from_name:document.getElementById('toName').value,
            user_email:document.getElementById('fromName').value,
            message:document.getElementById('message').value,
        };
    

    emailjs.send('gmail', 'template_iiz8eu5', tempParams)
    .then(function(res) {
                        console.log('SUCCESS!', res.status);
                        alert("Wiadomość została wysłana");
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
}
