document.getElementById('email').addEventListener('submit',
    function (event){
        event.preventDefault();
        var emailInput = document.getElementById('email')
        var errorMessage = document.getElementById('errorMessage')

        if (! validateEmail(emailInput.value)){
            errorMessage.textContent = 'Valid email required'
            return
        }



    }
)

function validateEmail (email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}