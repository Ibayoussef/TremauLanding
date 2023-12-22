
import logo from '../assets/logo.png'
function NavBar() {
    return (
        <header className='fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-full border-b h-14 bg-gray-50/50 backdrop-blur-md '>
            <div className='flex items-center justify-between w-full max-w-6xl mx-auto'>
                <img src={logo} className='h-8 w-21' alt="logo" />
                <div className="flex flex-row gap-8">
                    <a href="#" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200"></a>
                    <a href="#" className="px-4 py-2 text-gray-700 rounded hover:bg-gray-200"></a>
                </div>
            </div>
        </header>
    )
}

export default NavBar