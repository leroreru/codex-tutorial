import NavBar from './komponen/navBar2'
import TopNavbar from './topNavBar'

const Layout=({ children }: any)=>{
    return (
        <>
        <NavBar/>
        {children}
        </>
    )
}

export default Layout