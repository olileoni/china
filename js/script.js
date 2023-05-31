const form = document.querySelector('.form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(telSelector)


new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    },
    messages: {
        name: {
            required: 'Введите имя'
        },
        email: {
            required: 'Введите корректный email'
        },
        tel: {
            required: 'Введите телефон',
            function: 'Введите корректный номер телефона'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm)

        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено')
                }
            }
        }
        xhr.open('POST', 'mail.php', true)
        xhr.send(formData)

        thisForm.reset()
    }
})