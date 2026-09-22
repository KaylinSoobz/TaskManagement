import CountTasks from "../Processes/CountTasks.jsx"

const DashBoard = () => {
    return (
        <div className="flex flex-col flex-1 h-full bg-gray-100 items-center">
            <label>Tasks</label>
            <div className="flex flex-row justify-between m-4 ">
                <span className="flex flex-col items-center border border-gray-200 bg-white p-6 ">
                    <CountTasks taskStatus="todo"/>
                    <label>To Do</label>
                </span>
                <span className="flex flex-col items-center border border-gray-200  bg-white p-6 ">
                    <CountTasks taskStatus="in-progress"/>
                    <label>In Progress</label>
                </span>
                <span className="flex flex-col items-center border border-gray-200 bg-white p-6  ">
                    <CountTasks taskStatus="completed"/>
                    <label>Completed</label>
                </span>
            </div>
        </div>
    )
}

export default DashBoard;