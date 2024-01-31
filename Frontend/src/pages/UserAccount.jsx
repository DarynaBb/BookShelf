
import UserBooks from '../components/UserBooks'
import UserProfile from '../components/UserProfile'

function UserAccount() {
  return (
    <section>
        <h2 className='p-[30px]'>Account</h2>
        <UserProfile />
        <UserBooks />
    </section>
  )
}

export default UserAccount