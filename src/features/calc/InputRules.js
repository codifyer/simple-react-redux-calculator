// input rules

export function dotRules(input) {
    const re = /[0-9]+([.][0-9]*)?|([.][0-9]*)|[\+\-\*\/]/g
    const tokens = input.match(re);
    console.log(tokens);
    if (tokens === null 
        || ["+", "-", "*", "/"].includes(tokens.slice(-1)[0])
        ) { 
        return {
            status: 'replace',
            replacement: "0."
        };
    }
    if (tokens.slice(-1)[0].includes(".")) {
        return {
            status: 'ignore'
        }
    } else {
        return {
            status: 'append',
        }
    }
}

export function mulZeroRules(input) {
    const re = /[0-9]+([.][0-9]*)?|([.][0-9]*)|[\+\-\*\/]/g
    const tokens = input.match(re);
    console.log(tokens);
    if (tokens === null || ["+", "-", "*", "/"].includes(tokens.slice(-1)[0])) {
        return {
            status: 'replace',
            replacement: "0"
        };
    }
    if (tokens.slice(-1)[0] === '0') {
        return {
            status: 'ignore',
        }
    }
    return {
        status: 'append',
    }
}

export function zeroRules(input) {
    const re = /[0-9]+([.][0-9]*)?|([.][0-9]*)|[\+\-\*\/]/g
    const tokens = input.match(re);
    console.log(tokens);
    if (
        tokens === null
        || ["+", "-", "*", "/"].includes(tokens.slice(-1)[0])
        || tokens.slice(-1)[0] === '0.'
    ) {
        return {
            status: 'append',
        };
    }
    if (tokens.slice(-1)[0] === '0') {
        return {
            status: 'ignore',
        }
    }
    return {
        status: 'append',
    }
}

export function operatorRules(input) {
    const re = /[0-9]+([.][0-9]*)?|([.][0-9]*)|[\+\-\*\/]/g
    const tokens = input.match(re);
    console.log(tokens);
    if (tokens === null ) {
        return {
            status: 'ignore',
        };
    }
    if (["+", "-", "*", "/"].includes(tokens.slice(-1)[0])) {
        return {
            status: 'replace',
        }
    }
    return {
        status: 'append',
    }
}

export function numberRules(input) {
    const re = /[0-9]+([.][0-9]*)?|([.][0-9]*)|[\+\-\*\/]/g
    const tokens = input.match(re);
    console.log(tokens);
    if (tokens === null 
        || ["+", "-", "*", "/"].includes(tokens.slice(-1)[0])
        ) {
        return {
            status: 'append',
        }
    }
    if (tokens.slice(-1)[0] === '0') {
        return {
            status: 'replace',
        }
    }
    return {
        status: 'append',
    }
}
