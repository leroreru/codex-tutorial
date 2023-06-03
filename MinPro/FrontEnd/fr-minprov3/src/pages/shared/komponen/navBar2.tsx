import { useEffect, useState } from "react";

const NavBar = () => {

    {/* Hamburger Button */ }
    const [isActive, setIsActive] = useState(false);

    const handleHamOnClick = () => {
        setIsActive(!isActive);
        toggleBodyScroll()
    };

    {/* Navbar Fixed */ }
    const [isFixed, setIsFixed] = useState(false);

    const toggleBodyScroll = () => {
        const body:any = document.querySelector("body");
        body.classList.toggle("scroll-lock");
      };

    useEffect(() => {
        const handleScroll = () => {
            const header: any = document.querySelector('header');
            const fixedNav = header.offsetTop;

            if (window.pageYOffset > fixedNav) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isFixed ? "navbar-fixed" : ""
                }`}>
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            {/*LOGO*/}
                            <a href="/" className="font-bold text-lg block text-blue-500 py-6">CodeXAcademy</a>
                        </div>
                        <div className="flex items-center px-4">
                            <button onClick={handleHamOnClick} id="hamburger" className={`z-50 block absolute right-4 lg:hidden ${isActive ? "hamburger-active " : ""}`}>
                                <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${isActive ? "hamburger-line-white " : ""}`}></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${isActive ? "hamburger-line-white " : ""}`}></span>
                            </button>

                            <div className={`z-40 fixed w-56 h-screen bg-blue-500 top-0 right-0 transform transition-transform duration-400 ease-in-out lg:block lg:static lg:bg-transparent lg:shadow-none lg:rounded-none lg:w-full lg:h-min ${isActive ? "translate-x-0" : "lg:translate-x-0 translate-x-full"}`}>
                                <ul className="block pt-20 lg:flex lg:pt-0">
                                    <div className="divide-y-[1px] divide-dashed lg:divide-none lg:flex">
                                    <li className="group">
                                        <a href="#" className="font-semibold text-white text-base py-2 mx-8 flex group-hover:text-blue-200 lg:text-black lg:group-hover:text-blue-500">Program</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="font-semibold text-white text-base py-2 mx-8 flex group-hover:text-blue-200 lg:text-black lg:group-hover:text-blue-500">Online Course</a>
                                    </li>
                                    <li className="group">
                                        <a href="/jobs" className="font-semibold text-white text-base py-2 mx-8 flex group-hover:text-blue-200 lg:text-black lg:group-hover:text-blue-500">Job Hiring</a>
                                    </li>
                                    <li className="group">
                                        <a href="#" className="font-semibold text-white text-base py-2 mx-8 flex group-hover:text-blue-200 lg:text-black lg:group-hover:text-blue-500">About</a>
                                    </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



        </div>
    )
}
export default NavBar