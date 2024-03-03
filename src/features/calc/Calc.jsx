import { input1, input2, input3, input4, input5, input6, input7, input8, input9, input0, input00, input000, inputDot, inputAdd, inputSub, inputMul, inputDiv, inputAC, inputUndo, inputEq, continueCal } from "./calcSlice.js";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import keyboardlogo from '../../assets/keyboard-50.png';
import HelpModel from "./HelpModal.jsx";

export function Calc() {
    const input = useSelector((state) => state.calc.input);
    const result = useSelector((state) => state.calc.result);
    const error = useSelector((state) => state.calc.error);
    const equalled = useSelector((state) => state.calc.equalled);
    const dispatch = useDispatch();

    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [fade3, setFade3] = useState(false);
    const [fade4, setFade4] = useState(false);
    const [fade5, setFade5] = useState(false);
    const [fade6, setFade6] = useState(false);
    const [fade7, setFade7] = useState(false);
    const [fade8, setFade8] = useState(false);
    const [fade9, setFade9] = useState(false);
    const [fade0, setFade0] = useState(false);
    const [fade00, setFade00] = useState(false);
    const [fade000, setFade000] = useState(false);
    const [fadeDot, setFadeDot] = useState(false);
    const [fadeAdd, setFadeAdd] = useState(false);
    const [fadeSub, setFadeSub] = useState(false);
    const [fadeMul, setFadeMul] = useState(false);
    const [fadeDiv, setFadeDiv] = useState(false);
    const [fadeAC, setFadeAC] = useState(false);
    const [fadeUndo, setFadeUndo] = useState(false);
    const [fadeEq, setFadeEq] = useState(false);

    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
    function openHelpModal() {
        setIsHelpModalOpen(true);
    }
    function closeHelpModal() {
        setIsHelpModalOpen(false);
    }


    function formatResult(result) {
        if (result) {
            return new Intl.NumberFormat('en-US', {
                style: 'decimal',
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
            }).format(result);
        } else {
            return '';
        }
    }

    function numberWithCommas(x) {
        return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function formatInput(input) {
        // only add commas to numbers, no rounding
        const re = /[0-9]+([.][0-9]*)?|([.][0-9]*)|[\+\-\*\/]/g
        const tokens = input.match(re);
        if (tokens === null) {
            return '';
        }
        tokens.forEach((element, index) => {
            if (['+', '-', '*', '/'].includes(element)) {
                tokens[index] = ' ' + element + ' ';
            } else {
                if (element !== '') { // ok so its not null
                    if (!element.includes('.')) { // no decimal dot
                        tokens[index] = numberWithCommas(element)
                    } else { // there is decimal, lets check where
                        if (element[0] === '.') { // at begining
                            // do nothing
                        } else if (element.slice[-1] === '.') { // at end
                            tokens[index] = numberWithCommas(element.split('.')[0]) + '.'
                        } else { // dot somewhere in the middle
                            const arr = element.split('.')
                            tokens[index] = numberWithCommas(arr[0]) + '.' + arr[1]
                        }
                    }
                }
            }
        });
        return tokens.join('');
    }

    function onKeyboardInput(event) {
        console.log(event.key);
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(event.key)) {
            const button = document.getElementById('button' + event.key);
            button.click();
        }
        if (['+', '-', '*', '/', '.', 'Escape', '=', 'd', 'e', 'a', 's', 'x', 'c',
            'Backspace', 'Delete', 'b', 'r', 't', 'f', 'g'].includes(event.key)) {
            const mapper = {
                '+': 'Add',
                'a': 'Add',
                '-': 'Sub',
                's': 'Sub',
                '*': 'Mul',
                'x': 'Mul',
                '/': 'Div',
                'd': 'Div',
                '.': 'Dot',
                'Escape': 'AC',
                'c': 'AC',
                '=': 'Eq',
                'e': 'Eq',
                'Backspace': 'Undo',
                'Delete': 'Undo',
                'b': 'Undo',
                'r': '00',
                'f': '00',
                't': '000',
                'g': '000',
            }
            const button = document.getElementById('button' + mapper[event.key]);
            button.click();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onKeyboardInput, false);
        return () => window.removeEventListener('keydown', onKeyboardInput, false);
    }, []);

    return (
        <>
            <div className="grid grid-cols-4 gap-2 w-80">
                <div className="border-2 border-stone-300 rounded-md mb-1 px-1 h-20 bg-gray-300 col-span-4 text-right text-2xl overflow-x-auto"
                >{formatInput(input)}</div>

                <div className="grid grid-cols-8 w-80 col-span-4">

                    <div className="border-2 border-green-600 rounded-l-md col-span-1 mb-2 px-1 h-10 bg-green-600 text-white text-left text-2xl">=</div>
                    <div className="border-2 border-green-600 rounded-r-md mb-2 px-1 h-10 
                        bg-green-600 text-white col-span-7 text-right text-2xl">
                        {error ? 'Error' : formatResult(result)}
                    </div>
                </div>

                <HelpModel isOpen={isHelpModalOpen} onClose={closeHelpModal} />

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded 
                        ${!fade1 ? "text-2xl" : "text-xl"}`} id="button1"
                    onClick={() => {
                        setFade1(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input1());
                        setTimeout(() => setFade1(false), 100)
                    }}
                >1 </button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                        ${!fade2 ? "text-2xl" : "text-xl"}`} id="button2"
                    onClick={() => {
                        setFade2(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input2());
                        setTimeout(() => setFade2(false), 100)
                    }}
                >2</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded 
                     ${!fade3 ? "text-2xl" : "text-xl"}`} id="button3"
                    onClick={() => {
                        setFade3(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input3());
                        setTimeout(() => setFade3(false), 100)
                    }}
                >3</button>

                <button className={`bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded
                    ${!fadeAdd ? "text-2xl" : "text-xl"} `} id="buttonAdd"
                    onClick={() => {
                        setFadeAdd(true);
                        if (equalled) {
                            dispatch(continueCal());
                        }
                        dispatch(inputAdd());
                        setTimeout(() => setFadeAdd(false), 100)
                    }}
                >+</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                    ${!fade4 ? "text-2xl" : "text-xl"} `} id="button4"
                    onClick={() => {
                        setFade4(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input4());
                        setTimeout(() => setFade4(false), 100)
                    }}
                >4</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                    ${!fade5 ? "text-2xl" : "text-xl"} `} id="button5"
                    onClick={() => {
                        setFade5(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input5());
                        setTimeout(() => setFade5(false), 100)
                    }}
                >5</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                    ${!fade6 ? "text-2xl" : "text-xl"} `} id="button6"
                    onClick={() => {
                        setFade6(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input6());
                        setTimeout(() => setFade6(false), 100)
                    }}
                >6</button>

                <button className={`bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded
                    ${!fadeSub ? "text-2xl" : "text-xl"} `} id="buttonSub"
                    onClick={() => {
                        setFadeSub(true);
                        if (equalled) {
                            dispatch(continueCal());
                        }
                        dispatch(inputSub());
                        setTimeout(() => setFadeSub(false), 100)
                    }}
                >-</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                    ${!fade7 ? "text-2xl" : "text-xl"} `} id="button7"
                    onClick={() => {
                        setFade7(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input7());
                        setTimeout(() => setFade7(false), 100)
                    }}
                >7</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                    ${!fade8 ? "text-2xl" : "text-xl"} `} id="button8"
                    onClick={() => {
                        setFade8(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input8());
                        setTimeout(() => setFade8(false), 100)
                    }}
                >8</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                    ${!fade9 ? "text-2xl" : "text-xl"} `} id="button9"
                    onClick={() => {
                        setFade9(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input9());
                        setTimeout(() => setFade9(false), 100)
                    }}
                >9</button>

                <button className={`bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded
                        ${!fadeMul ? "text-2xl" : "text-xl"} `} id="buttonMul"
                    onClick={() => {
                        setFadeMul(true);
                        if (equalled) {
                            dispatch(continueCal());
                        }
                        dispatch(inputMul());
                        setTimeout(() => setFadeMul(false), 100)
                    }}
                >*</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                        ${!fade0 ? "text-2xl" : "text-xl"} `} id="button0"
                    onClick={() => {
                        setFade0(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input0());
                        setTimeout(() => setFade0(false), 100)
                    }}
                >0</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                        ${!fade00 ? "text-2xl" : "text-xl"} `} id="button00"
                    onClick={() => {
                        setFade00(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input00());
                        setTimeout(() => setFade00(false), 100)
                    }}
                >00</button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                        ${!fade000 ? "text-2xl" : "text-xl"} `} id="button000"
                    onClick={() => {
                        setFade000(true);
                        if (equalled) {
                            dispatch(inputAC());
                        }
                        dispatch(input000());
                        setTimeout(() => setFade000(false), 100)
                    }}
                >000</button>

                <button className={`bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded
                    ${!fadeDiv ? "text-2xl" : "text-xl"} `} id="buttonDiv"
                    onClick={() => {
                        setFadeDiv(true);
                        if (equalled) {
                            dispatch(continueCal());
                        }
                        dispatch(inputDiv());
                        setTimeout(() => setFadeDiv(false), 100)
                    }}
                >/</button>

                <button className={`bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded
                        ${!fadeAC ? "text-2xl" : "text-xl"} `} id="buttonAC"
                    onClick={() => {
                        setFadeAC(true);
                        dispatch(inputAC());
                        setTimeout(() => setFadeAC(false), 100)
                    }}
                > AC </button>

                <button className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded
                        ${!fadeDot ? "text-2xl" : "text-xl"} `} id="buttonDot"
                    onClick={() => {
                        setFadeDot(true);
                        dispatch(inputDot());
                        setTimeout(() => setFadeDot(false), 100)
                    }}
                >.</button>

                <button className={`bg-violet-600 hover:bg-violet-800 text-white py-2 px-4 rounded
                        ${!fadeUndo ? "text-2xl" : "text-xl"} `} id="buttonUndo"
                    onClick={() => {
                        setFadeUndo(true);
                        dispatch(inputUndo());
                        setTimeout(() => setFadeUndo(false), 100)
                    }}
                >&#9003;</button>

                <button className={`bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded
                        ${!fadeEq ? "text-2xl" : "text-xl"} `} id="buttonEq"
                    onClick={() => {
                        setFadeEq(true);
                        dispatch(inputEq());
                        setTimeout(() => setFadeEq(false), 100)
                    }}
                >=</button>


                {/* <div className="border-2 border-stone-300 rounded-md mb-1 px-1 h-5 bg-gray-300 col-span-4 
                    text-center text-sm flex items-center justify-center"
                >
                    Keyboard Shortcuts
                </div> */}
                {/*  add more buttons later -> "+/-"  "("  ")" "<" "<<" "Prev Ans? %" */}
            </div>
            <div onClick={openHelpModal} className="flex mt-2 cursor-pointer">
                <img className="pt-1 px-1 h-6" style={{ display: 'inline' }} src={keyboardlogo} alt="keyboard shortcuts" />
                <div className="pt-1 font-mono text-base">Keyboard Shortcuts</div>
            </div>
            <a href="https://github.com/codifyer/simple-react-redux-calculator" target="_blank">Source Code</a>
        </>

    )
}