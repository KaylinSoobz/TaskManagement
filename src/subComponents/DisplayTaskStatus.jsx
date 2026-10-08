import initialTasks from "../data/tasks.jsx"

const DisplayTaskStatus = () => {



 function CountTask(taskStatus) {
    return (
        initialTasks.reduce((numberTasks,task) => task.status === taskStatus ? numberTasks + 1 : numberTasks ,0)
    )
 } ;

 return (
    <div className="flex flex-row  justify-around mt-8 w-4/5">
        <article className=" flex flex-col items-center shadow-xl rounded-md p-8 bg-white w-1/7 border-2 border-transparent hover:border-green-500 hover:cursor-pointer">
            <p className="text-gray-500 font-semibold"> {CountTask("completed")}</p>
            <p  className="text-green-500">Completed</p>
        </article>
        <article className="flex flex-col items-center shadow-xl rounded-md p-8 bg-white w-1/7 border-2 border-transparent hover:border-orange-400 hover:cursor-pointer">
            <p className="text-gray-500 font-semibold">{CountTask("in-progress")}</p>
            <p className="text-orange-400">in-progress</p>
        </article>
        <article className="flex flex-col items-center shadow-xl rounded-md p-8 bg-white w-1/7 border-2 border-transparent hover:border-red-500 hover:cursor-pointer">
            <p className="text-gray-500 font-semibold">{CountTask("todo")}</p>
            <p className="text-red-500">to-do</p>
        </article>
    </div>
 )
}

export default DisplayTaskStatus;