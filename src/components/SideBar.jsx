
const SideBar = () => {
    return (
        <div className="flex h-screen flex-col justify-between bg-white w-64 border border-gray-200">

            <div className="flex justify-center p-6 border-b border-gray-200 text-xl font-semibold text-indigo-600">
                TaskFlow
            </div>

            <div className="flex-1 p-6">
                <ul>
                    <li className=" p-3 rounded-lg text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer ">
                        Dashboard
                    </li>
                    <li className="p-3 rounded-lg  text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer">
                        Tasks
                    </li>
                </ul>
            </div>

            <div className="p-3 text-center text-gray-600 hover:bg-gray-50 hover:text-gray-800">
                <button className="hover:cursor-pointer">Settings</button>
            </div>

        </div>
    )
}

export default SideBar;