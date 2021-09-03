let cont = Number(0);
let contErros = Number(0);

$(function () {
    $('#btEnviar').on('click', function (e) {
        //e.preventDefault();
        $('.corErro').remove();
        validate();

        if(confirmaEmail()){
            confirmaSenha();
        }
    })

    $('input').on('change', function (e) {
        if (cont >= 1) {
            $('.corErro').remove();
            //e.preventDefault();
            validate();       
        }
    })
})

let falseMsg = `<div class="corErro"><p></p></div>`;

function validate() {
    cont = Number(cont) + Number(1);
    contErros = 0;

    $('#formCadastro input').each(function () {
        if ($(this).val() === "") {
            removeClassValid($(this))
            addClassInvalid($(this))
            msgAfterFalse(($(this)), '.corErro p', 'Campo de preenchimento obrigatório');
            contErros = Number(contErros) + Number(1);
            return false;
        } else {
            removeClassInvalid($(this));
            addClassValid($(this));
        }

        if ($(this).hasClass('telefone')) {
            let tel = new RegExp(/^(\(?[0-9]{2}\)?)?([0-9]{4,5}\-[0-9]{4})$/);
            if (!tel.test($(this).val())) {
                removeClassValid($(this))
                addClassInvalid($(this))
                msgAfterFalse(($(this)), '.corErro p', 'Telefone inválido!');
                contErros = Number(contErros) + Number(1);
                return false;
            } else {
                removeClassInvalid($(this));
                addClassValid($(this));
            }
        }

        if ($(this).hasClass('email')) {
            let email = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-za-z0-9])?$/);
            if (!email.test($(this).val())) {
                removeClassValid($(this))
                addClassInvalid($(this))
                msgAfterFalse(($(this)), '.corErro p', 'Email inválido!');
                contErros = Number(contErros) + Number(1);
                return false;
            } else {
                removeClassInvalid($(this));
                addClassValid($(this));
            }
        }

        if ($(this).hasClass('cemail')) {
            let email = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-za-z0-9])?$/);
            if (!email.test($(this).val())) {
                removeClassValid($(this))
                addClassInvalid($(this))
                msgAfterFalse(($(this)), '.corErro p', 'Email inválido!');
                contErros = Number(contErros) + Number(1);
                return false;
            } else {
                removeClassInvalid($(this));
                addClassValid($(this));
            }
        }

        if ($(this).hasClass('senha')) {
            if ($.trim($(this).val()).length < 8) {
                removeClassValid($(this))
                addClassInvalid($(this))
                msgAfterFalse(($(this)), ".corErro p", 'Mínimo de 8 caracteres.');
                contErros = Number(contErros) + Number(1);
                return false;
            } else {
                removeClassInvalid($(this));
                addClassValid($(this));
            }
        }

        if ($(this).hasClass('csenha')) {
            if ($.trim($(this).val()).length < 8) {
                removeClassValid($(this))
                addClassInvalid($(this))
                msgAfterFalse(($(this)), ".corErro p", 'Mínimo de 8 caracteres.');
                contErros = Number(contErros) + Number(1);
                return false;
            } else {
                removeClassInvalid($(this));
                addClassValid($(this));
            }
        }

        if ($(this).hasClass('senha')) {

            if ($(this).val() != ($('csenha').val()) && $('csenha').val() != undefined) {
                removeClassValid($(this))
                addClassInvalid($(this))
                msgAfterFalse(($(this)), ".corErro p", 'Senhas não conferem');
                contErros = Number(contErros) + Number(1);
                return false;
            } else {
                removeClassInvalid($(this));
                addClassValid($(this));
            }
        }
    })
}

function addClassInvalid(element) {
    $(element).addClass('invalid');
    $(element).focus();
}

function removeClassInvalid(element) {
    $(element).removeClass('invalid');
}

function addClassValid(element) {
    $(element).addClass('valid');
    $(element).focus();
}

function removeClassValid(element) {
    $(element).removeClass('valid');
}

function msgAfterFalse(element, elementError, msg) {
    $(element).after(falseMsg);
    $(elementError).html(msg);
}

function validarTelefone(element) {
    var tel = new RegExp(/^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/);
    if (!tel.test($.trim($(element).val()))) {
        return true;
    }
    return false;
}

function confirmaEmail() {
    if ($('#formCadastro #email').val() != $('#formCadastro #cemail').val()) {
        removeClassValid($('#formCadastro #email').append())
        addClassInvalid($('#formCadastro #email').append())
        removeClassValid($('#formCadastro #cemail').append())
        addClassInvalid($('#formCadastro #cemail').append())
        msgAfterFalse(($('#formCadastro #cemail').append()), '.corErro p', 'Emails não conferem!');
        msgAfterFalse(($('#formCadastro #email').append()), '.corErro p', 'Emails não conferem!');
        contErros = Number(contErros) + Number(1);
        return false;
    } else {
        removeClassInvalid($('#formCadastro #email').append());
        addClassValid($('#formCadastro #email').append());
        removeClassInvalid($('#formCadastro #cemail').append());
        addClassValid($('#formCadastro #cemail').append());
        return true;
    }
}

function confirmaSenha() {
    if ($('#formCadastro #senha').val() != $('#formCadastro #csenha').val()) {
        removeClassValid($('#formCadastro #senha').append())
        addClassInvalid($('#formCadastro #senha').append())
        removeClassValid($('#formCadastro #csenha').append())
        addClassInvalid($('#formCadastro #csenha').append())
        msgAfterFalse(($('#formCadastro #csenha').append()), '.corErro p', 'Senhas não conferem!');
        msgAfterFalse(($('#formCadastro #senha').append()), '.corErro p', 'Senhas não conferem!');
        contErros = Number(contErros) + Number(1);
        return false;
    } else {
        removeClassInvalid($('#formCadastro #senha').append());
        addClassValid($('#formCadastro #senha').append());
        removeClassInvalid($('#formCadastro #csenha').append());
        addClassValid($('#formCadastro #csenha').append());
    }
}