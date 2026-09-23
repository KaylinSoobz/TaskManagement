import CountTasks from "../Processes/CountTasks.jsx"
import CalculateProgress from "../Processes/CalculateProgress.jsx"
import DisplayPriority from "../Processes/DisplayPriority.jsx"
import CalculateCompletedPercentage from "../Processes/CalculateCompletedPercentage.jsx"

const DashBoard = () => {
    return (
        <div className="flex flex-col flex-1 h-full bg-gray-100 items-center">
            <label className="pt-3">Tasks</label>
            <div className="flex flex-row justify-between m-4">
                <span className="flex flex-col items-center border border-gray-200 bg-white p-6">
                    <CountTasks taskStatus="completed" />
                    <label>Completed</label>
                </span>
                <span className="flex flex-col items-center border border-gray-200 bg-white p-6">
                    <CountTasks taskStatus="in-progress" />
                    <label>In Progress</label>
                </span>
                <span className="flex flex-col items-center border border-gray-200 bg-white p-6">
                    <CountTasks taskStatus="todo" />
                    <label>To Do</label>
                </span>
            </div>
            <div className="relative pt-1 mx-5 w-full max-w-md pt-3">
                <div className="flex">
                <h3 className="pl-2 mr-2">Progress</h3>
                <CalculateCompletedPercentage/>             
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200 border border-gray-300">
                    <CalculateProgress taskStatus="completed" color="green"/>
                    <CalculateProgress taskStatus="in-progress" color="orange"/>
                    <CalculateProgress taskStatus="todo" color="gray"/>
                </div>
            </div>

            <DisplayPriority/>

        </div>
    )
}

export default DashBoard;