
const Header = () => {
    return (
        <header className="flex bg-white border border-gray-200 justify-between p-6 ">
            <div></div>
            <div className="text-indigo-600 text-lg font-semibold">Section Title</div>
            <div className="flex flew-row">
                <div className="pr-3"><input type="checkbox"/></div>
                <div>Profile</div>
            </div>
        </header>
    )
}

export default Header;