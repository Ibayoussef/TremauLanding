
import logo from '../assets/minilogo.png'
const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center shadow-lg border-b p-8 border-gray-400 bg-white h-screen">
            <div className="bg-white p-6 rounded-lg  text-center">
                <div className="flex justify-center">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className=" text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[650px] leading-tight md:leading-tight lg:leading-tight">Trust & Safety experts helping platforms better protect users</h1>
                <p className="font-mono text-sm mt-6 text-gray-600 ">
                    streamline content moderation & comply in a fast-changing
                    regulatory environment                </p>
            </div>
        </div>
    );
};

export default Header;
