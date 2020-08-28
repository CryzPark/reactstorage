import validator from 'validator';

const validation = (type, value) =>{
    switch (type) {
        case 'email':
            return validator.isEmail(value)
        case 'password':
            return validator.isAlphanumeric(value)
            //6-16 digitos caracteres <> ""
        default:
            break;
    }
}
export default validation