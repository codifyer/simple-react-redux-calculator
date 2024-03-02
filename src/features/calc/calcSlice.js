import { createSlice } from "@reduxjs/toolkit";
import { dotRules, mulZeroRules, zeroRules, operatorRules, numberRules } from "./InputRules.js";

export const calcSlice = createSlice({
    name: "calc",
    initialState: {
        input: '',
        result: '',
        error: false,
        equalled: false,
    },
    reducers: {
        input1: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '1';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '1');
                },
            }
            options[result.status]();
        },
        input2: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '2';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '2');
                },
            }
            options[result.status]();
        },
        input3: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '3';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '3');
                },
            }
            options[result.status]();
        },
        input4: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '4';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '4');
                },
            }
            options[result.status]();
        },
        input5: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '5';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '5');
                },
            }
            options[result.status]();
        },
        input6: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '6';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '6');
                },
            }
            options[result.status]();
        },
        input7: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '7';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '7');
                },
            }
            options[result.status]();
        },
        input8: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '8';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '8');
                },
            }
            options[result.status]();
        },
        input9: (state) => {
            state.error = false;
            const result = numberRules(state.input);
            const options = {
                'append': () => {
                    state.input += '9';
                },
                'replace': () => {
                    state.input = state.input.replace(/0$/, '9');
                },
            }
            options[result.status]();
        },
        input0: (state) => {
            const result = zeroRules(state.input);
            if (result.status === "ignore") {
                console.log('unnecessary zero not allowed');
                return;
            } else if (result.status === "replace") {
                state.input += "0";
                return;
            } else if (result.status === "append") {
                state.error = false;
                state.input += "0";
            } else {
                console.log('error');
            }
        },
        input00: (state) => {
            const result = mulZeroRules(state.input);
            if (result.status === "ignore") {
                console.log('unnecessary zero not allowed');
                return;
            } else if (result.status === "replace") {
                state.input += "0";
                return;
            } else if (result.status === "append") {
                state.error = false;
                state.input += "00";
            } else {
                console.log('error');
            }
        },
        input000: (state) => {
            const result = mulZeroRules(state.input);
            if (result.status === "ignore") {
                console.log('unnecessary zero not allowed');
                return;
            } else if (result.status === "replace") {
                state.input += "0";
                return;
            } else if (result.status === "append") {
                state.error = false;
                state.input += "000";
            } else {
                console.log('error');
            }
        },
        inputDot: (state) => {
            const result = dotRules(state.input);
            if (result.status === "ignore") {
                console.log('duplicate dot not allowed');
                return;
            } else if (result.status === "replace") {
                state.input += result.replacement;
            } else {
                state.error = false;
                state.input += ".";
            }
        },
        inputAdd: (state) => {
            const result = operatorRules(state.input);
            let checkPrevToken = false
            if (result.status === "ignore") {
                console.log('operator not allowed');
                return;
            } else if (result.status === "replace") {
                state.input = state.input.replace(/\s[\+\-\*\/]\s$/, " + ");
                checkPrevToken = true;
            } else {
                state.input += " + ";
                checkPrevToken = true;
            }
            if (checkPrevToken) {
                const arr = state.input.split(' ');
                arr[arr.length - 3] = String(parseFloat(arr[arr.length - 3]));
                state.input = arr.join(' ');
            }
        },
        inputSub: (state) => {
            const result = operatorRules(state.input);
            let checkPrevToken = false
            if (result.status === "ignore") {
                console.log('operator not allowed');
                return;
            } else if (result.status === "replace") {
                state.input = state.input.replace(/\s[\+\-\*\/]\s$/, " - ");
                checkPrevToken = true;
            } else {
                state.input += " - ";
                checkPrevToken = true;
            }
            if (checkPrevToken) {
                const arr = state.input.split(' ');
                arr[arr.length - 3] = String(parseFloat(arr[arr.length - 3]));
                state.input = arr.join(' ');
            }
        },
        inputMul: (state) => {
            const result = operatorRules(state.input);
            let checkPrevToken = false
            if (result.status === "ignore") {
                console.log('operator not allowed');
                return;
            } else if (result.status === "replace") {
                state.input = state.input.replace(/\s[\+\-\*\/]\s$/, " * ");
                checkPrevToken = true;
            } else {
                state.input += " * ";
                checkPrevToken = true;
            }
            if (checkPrevToken) {
                const arr = state.input.split(' ');
                arr[arr.length - 3] = String(parseFloat(arr[arr.length - 3]));
                state.input = arr.join(' ');
            }
        },
        inputDiv: (state) => {
            const result = operatorRules(state.input);
            let checkPrevToken = false
            if (result.status === "ignore") {
                console.log('operator not allowed');
                return;
            } else if (result.status === "replace") {
                state.input = state.input.replace(/\s[\+\-\*\/]\s$/, " / ");
                checkPrevToken = true;
            } else {
                state.input += " / ";
                checkPrevToken = true;
            }
            if (checkPrevToken) {
                const arr = state.input.split(' ');
                arr[arr.length - 3] = String(parseFloat(arr[arr.length - 3]));
                state.input = arr.join(' ');
            }
        },
        inputAC: (state) => {
            state.input = '';
            state.result = '';
            state.error = false;
            state.equalled = false;
        },
        inputUndo: (state) => {
            if (state.input.length > 0) {
                const re = /\s[\+\-\*\/]\s$/;
                if (re.test(state.input)) {
                    state.input = state.input.slice(0, -3);
                } else {
                    state.input = state.input.slice(0, -1);
                }
            }
            state.result = '';
            state.error = false;
            state.equalled = false;

        },
        inputEq: (state) => {
            if (state.input.length !== 0 && state.input.slice(-1)[0] !== ' ') {
                const arr = state.input.split(' ');
                arr[arr.length - 1] = String(parseFloat(arr[arr.length - 1]));
                state.input = arr.join(' ');
            }
            let result;
            try {
                result = eval(state.input);
                if (!isFinite(result) || isNaN(result)) {
                    state.error = true;
                    state.equalled = false;
                } else {
                    state.result = String(result);
                    state.error = false;
                    state.equalled = true;
                }
            } catch (error) {
                state.error = true;
                state.equalled = false;
            }

        },
        continueCal: (state) => {
            state.input = String(state.result);
            state.result = '';
            state.error = false;
            state.equalled = false;
        }
    },
});

export const {
    input1, input2, input3, input4, input5, input6, input7, input8, input9,
    input0, input00, input000, inputDot,
    inputAdd, inputSub, inputMul, inputDiv,
    inputAC, inputUndo, inputEq, continueCal
} = calcSlice.actions;

export default calcSlice.reducer;