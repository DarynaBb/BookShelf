import React, { useContext, useState} from 'react';
import { TestContext } from '../context/TestContext';
import { useNavigate } from 'react-router-dom';
import search from "../assets/search_icon.svg"

function NewSearchBar() {
    const {searchRequest, setSearchRequest} = useContext(TestContext);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const onClickHandler = () => {
        setSearchRequest(inputValue);
        setInputValue('');
        navigate("/testresult");
    }

  return (
    <div className='flex justify-center'>
        <form action="" className='py-[15px] w-full flex justify-between items-center mb-[20px] max-w-[800px] border-b-[1px] border-black'> 
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search by title or author ' className='bg-bg-beige basis-[80%] inter-medium outline-none' type="text" />
            <button type="submit" onClick={onClickHandler}>
                <img src={search} alt="" />
            </button>
        </form>
        {console.log(inputValue)}
    </div>
  )

}

export default NewSearchBar