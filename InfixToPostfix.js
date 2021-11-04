// includes shunting yard algorithm. (Never got to implement in time. plan on finishing. ) 

// currently handle normal operations and assign values to buttons. 
function binaryOp(operator, a, b) { 

    let result = -Infinity; 

    // a is popped off the stack first, then b, which makes b the left term 
    if (operator == "+") { 

        result = b + a; 
    }

    else if (operator == "-") { 

        result = b - a; 
    }

    else if (operator =="/") { 

        // nested if to handle divide by 0
        if (b == 0) { 
            result == "can't divide by 0"; 
        }
        
        else { 
            result = b / a; 
        }
    }

    else if (operator == "*") { 

        result = b * a; 
    }

    else if (operator == "^") { 

        result = Math.pow(b,a); 
    }

    return result; 
}

// function to handle the trig functions
function unaryOp (operator, number) { 

    let result = -Infinity; 

    if (operator == "s") { 
        result = Math.sin(number); 
    }

    else if (operator == "c") { 
        result = Math.cos(number); 
    }

    else if (operator == "t") { 

        result = Math.tan(number); 
    }

    else if (operator == "o") { 

        result = 1 / Math.tan(number); 
    }

    else if (operator == "n") { 
        result = Math.log(number); 
    }

    else if (operator == "g") { 
        result = Math.log10(number); 
    }

    return result; 
}

// function to verify if the token is a standard operator or ^ which requires two parameters 
function isBinary(token) { 

    if (token == "+" || token == "-" || token == "*" || token == "/" || token == "^") { 

        return true; 
    }

    else { 
        return false; 
    }
}