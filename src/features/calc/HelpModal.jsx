import { useRef, useState, useEffect } from "react";

export default function HelpModel({ isOpen, onClose }) {

    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog ref={modalRef} onKeyDown={handleKeyDown} className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-md shadow-xl">
            <table className="font-mono text-base mx-2">
                <thead>
                    <tr>
                        <th className="underline">Button</th>
                        <th className="px-2 text-left underline"><span className="ml-2">Keyboard Shortcut</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="px-1 bg-blue-500 rounded-md text-white">0</span>
                            <span className="px-1">-</span>
                            <span className="px-1 bg-blue-500 rounded-md text-white">9</span>
                        </td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">0</span>
                                <span className="px-1 text-sm">-</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">9</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-blue-500 rounded-md text-white">.</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2"><span className="px-1 bg-slate-300 rounded-md text-slate-600">.</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-blue-500 rounded-md text-white">00</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2"><span className="px-1 bg-slate-300 rounded-md text-slate-600">q</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-blue-500 rounded-md text-white">000</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2"><span className="px-1 bg-slate-300 rounded-md text-slate-600">w</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-gray-600 rounded-md text-white">+</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">+</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">a</span>
                                <span className="px-1 text-sm">(add)</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-gray-600 rounded-md text-white">-</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">-</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">s</span>
                                <span className="px-1 text-sm">(subtract)</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-gray-600 rounded-md text-white">*</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">*</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">x</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-gray-600 rounded-md text-white">/</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">/</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">d</span>
                                <span className="px-1 text-sm">(divide)</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-violet-600 rounded-md text-white">&#9003;</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">BackSpace</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">Delete</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">b</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-green-600 rounded-md text-white">=</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">=</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">e</span>
                                <span className="px-1 text-sm">(equals)</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="px-1 bg-red-500 rounded-md text-white">AC</span></td>
                        <td className="px-2 text-left">
                            <span className="ml-2">
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">Esc</span>
                                <span className="px-1 text-sm">or</span>
                                <span className="px-1 bg-slate-300 rounded-md text-slate-600">c</span>
                                <span className="px-1 text-sm">(clear)</span>
                            </span>
                        </td>
                    </tr>


                </tbody>
            </table>
            <button onClick={handleCloseModal} 
                className="mt-2 mb-4 px-2 bg-yellow-800 hover:bg-yellow-600 border-0 text-sm h-5 rounded shadow border-yellow-800 text-white">
                Close (Esc)
            </button>
        </dialog>

    );
}