
//FACILITA AO REDUZIR O 'document.querySelector' P/ 'DOM.get'
const get = (param) => {
    return document.querySelector(param);
}

export const DOM = {
    get,
}

//VERIFICADOR DE EMAIL
export function isEmail(email) {
    // Expressão regular para verificar o formato do e-mail
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Verifica se o e-mail corresponde à expressão regular
    if (regex.test(email)) {
      return true; // E-mail válido
    } else {
      return false; // E-mail inválido
    }
  }

//VERIFICADOR DE SENHA FORTE
export function validPassword(password) {
    // Verificar se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      return false;
    }
  
    // Verificar se a senha contém pelo menos um caractere especial
    let character = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    if (!character.test(password)) {
      return false;
    }
  
    // Verificar se a senha contém pelo menos um número
    let number = /[0-9]+/;
    if (!number.test(password)) {
      return false;
    }
  
    // Verificar se a senha contém pelo menos uma letra maiúscula
    let upCaseLetter = /[A-Z]+/;
    if (!upCaseLetter.test(password)) {
      return false;
    }
  
    // A senha atende a todos os critérios
    return true;
  }