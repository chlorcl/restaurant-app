"use client";

const Menu = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-100 py-4 px-8">
            <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                <h1 className="ml-2 text-xl font-bold">Logo</h1>
            </div>
            <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-800 hover:text-blue-500">Home</a>
                <a href="/" className="text-gray-800 hover:text-blue-500">Menu</a>
                <a href="/" className="text-gray-800 hover:text-blue-500">Service</a>
                <a href="/" className="text-gray-800 hover:text-blue-500">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-800 hover:text-blue-500">
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M2 6a6 6 0 1110.74 3.459A7.982 7.982 0 0118 13c0 1.718-.53 3.307-1.426 4.596l-.902-1.508A5.965 5.965 0 0016 13a6 6 0 00-11.458-2.46L2.425 8.425A5.98 5.98 0 002 13a7.98 7.98 0 01.26-1.983A6 6 0 012 6zm0 2a4 4 0 100 8 4 4 0 000-8z"
                        ></path>
                    </svg>
                </a>
                <a href="/" className="text-gray-800 hover:text-blue-500">
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm1 2v8a2 2 0 002 2h10a2 2 0 002-2V7h1a1 1 0 011 1v8a4 4 0 01-4 4H4a4 4 0 01-4-4V8a1 1 0 011-1h1z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M8 10a2 2 0 114 0 2 2 0 01-4 0zm5-3a1 1 0 100-2 1 1 0 000 2zm-10 0a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </nav>
    );
};
export default Menu;
