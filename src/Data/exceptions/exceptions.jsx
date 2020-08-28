
export function ExceptionController(e,msg) {
    let error;
    switch (e) {
        case 500:
             error = {
                Error: 500,
                Message: msg,
                State:true
            }
            return error
            case 404:
             error = {
                Error: 404,
                Message: msg,
                State: true
            }
            return error
    
        default:
            break;
    }
}