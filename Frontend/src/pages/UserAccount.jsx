
import NavBar from '../components/NavBar'
import UserBooks from '../components/UserBooks'
import UserProfile from '../components/UserProfile'

function UserAccount() {
  return (
    <section className='max-container padding-container'>
        <NavBar />
        <h2 className=''>Account</h2>
        <UserProfile />
        <UserBooks />
    </section>
  )
}

export default UserAccount