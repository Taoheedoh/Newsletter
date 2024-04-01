const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const errorBox = document.getElementById('errorMessage')
const email = document.getElementById('email')


function validateEmail() {
    try {
        if (emailRegex.test(email.value)){
            location.href = 'success.html'
        }else{
            errorBox.innerHTML = 'Valid email required'
            errorBox.style.color = 'red'
            email.style.border = 'solid red'
            email.value.style.color = 'red'
        }
    } catch (error) {
        console.log('Valid email required', error)
    }
}