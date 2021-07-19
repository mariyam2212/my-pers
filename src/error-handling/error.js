
import { useEffect, useState } from "react";

const CheckLoginError = (code, history) => {
    
        switch (code) {
            case 'auth/user-not-found': {
                history.push('/register');
                return 'Please register First'
            }
            case 'auth/wrong-password': {
                return 'Invalid Credentials'
            }
            default : {
                return code;
            }
        }
}

export default CheckLoginError;