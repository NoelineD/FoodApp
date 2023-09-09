const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="container w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2"> 
            {/* py padding on each side */}
                <div className="logo-wrapper pl-4 flex items-center">
                    <img src="/" alt="logo"/>
                </div>

                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    {/* space X space in between the items */}
                    <div>Home</div>
                    <div>About</div>
                </div>
                <div className="flex items-center justify-center space-x-4" >
                    <div>Cart</div>
                    <div>Log In</div>
                    <div>Sign up</div>
                </div>
            </div>
        </nav>
    );
}

export default Header;