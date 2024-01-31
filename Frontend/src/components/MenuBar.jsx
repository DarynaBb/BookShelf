import Logout from './Logout';
import UserProfile from "../pages/UserProfile"


const MenuBar = () => {

    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            <div className="flex">
                <div className="mr-4">Logo</div>
                <ul className="flex">
                    <li className="mr-4">Home</li>
                    <li className="mr-4">Shop</li>
                    <li className="mr-4">About us</li>
                </ul>
            </div>
            <UserProfile/>
              <Logout /> 
        </div>
    );
};

export default MenuBar;
