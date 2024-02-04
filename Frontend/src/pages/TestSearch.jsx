import React, { useContext, useState} from 'react'
import { TestContext } from '../context/TestContext'
import { useNavigate } from 'react-router-dom';

function TestSearch() {
    const {searchRequest, setSearchRequest} = useContext(TestContext);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const onClickHandler = () => {
        setSearchRequest(inputValue);
        setInputValue('');
        navigate("/testresult");
    }

  return (
    <div className='flex justify-center items-center h-[500px]'>
        <form action="">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search by title or author ' className='border-black border-[2px] w-[300px]' type="text" />
            <button type="submit" onClick={onClickHandler}>Search</button>
        </form>
        {console.log(inputValue)}
    </div>
  )
}

export default TestSearch