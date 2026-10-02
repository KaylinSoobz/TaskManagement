import Overdue from "../subComponents/Overdue.jsx"
import FilterTasks from "../subComponents/FilterTasks.jsx"
import DisplayTaskStatus from "../subComponents/DisplayTaskStatus.jsx"
import Progress from "../subComponents/Progress.jsx"

const DashBoard = () => {
    return (
        <div className="flex flex-col flex-1 h-full bg-gray-100 items-center bg-gradient-to-r from-pink-400 to-indigo-600 rounded">
                 <DisplayTaskStatus/>
                 <Progress/>
            <div className="flex flex-row w-full h-1/3 mt-6 justify-around">
                 <Overdue/>
                 <FilterTasks/>
            </div>
        </div>
    );
};

export default DashBoard;