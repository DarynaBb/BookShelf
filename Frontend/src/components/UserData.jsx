import React, {useContext} from 'react'
import { UserProfileContext } from '../context/UserProfileContext';

function UserData() {
    const {isLoading, user, isEditing, setIsEditing } = useContext(UserProfileContext);
  return (
    <div>
              <div className='flex items-end gap-[20px]'>
                <div>
                  <img className='max-w-[210px]' src={user.photo} alt="user photo" />
                </div>
                <div className='flex flex-col gap-[15px] '>
                  {isLoading ? (
                      <>
                        <p className='uppercase inter-medium'>{user.firstName} {user.lastName}</p>
                        <p className='inter-medium'>{user.favoriteBooks.length} books in colection</p>
                        <div className='inter-medium'>
                          <p className='inter-medium'>Currently reading: {user.favoriteBooks.filter(book => book.shelfType === "currentlyReading").length}</p>
                          <p className='inter-medium'>Want to read: {user.favoriteBooks.filter(book => book.shelfType === "wantToRead").length}</p>
                          <p className='inter-medium'>Read: {user.favoriteBooks.filter(book => book.shelfType === "wantToRead").length}</p>
                        </div>
                      </>
                  ) 
                  : (<p>Is Loading...</p>)}
                </div>
              </div>
              <div className='mt-[15px]'>
                <button onClick={() => setIsEditing(true)} className={!isEditing ? "block bg-black py-[20px] w-[210px] text-white" : "hidden"}>EDIT YOUR PROFILE</button>
              </div>
            </div>
  )
}

export default UserData