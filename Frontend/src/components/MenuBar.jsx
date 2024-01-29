
import LoginDropdown from './LoginDropdown';

const MenuBar = () => {
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            <div className="flex">
                <div className="mr-4">Logo</div>
                <ul className="flex">
                    <li className="mr-4">Home</li>
                    <li className="mr-4">Shop</li>
                    <li className="mr-4">Über uns</li>
                </ul>
            </div>
            <LoginDropdown />
        </div>
    );
};

export default MenuBar;
