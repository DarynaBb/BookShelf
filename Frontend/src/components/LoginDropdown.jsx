import { useState } from 'react';

const LoginDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Anmelden</button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                        <li className="py-2 px-4 hover:bg-gray-100">Option 1</li>
                        <li className="py-2 px-4 hover:bg-gray-100">Option 2</li>
                        <li className="py-2 px-4 hover:bg-gray-100">Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LoginDropdown;
