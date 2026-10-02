import initialTasks from "../data/tasks.jsx"

const Progress = () => {

    const getPercent = (status) => {
        var percent = 0;

        const numTasks = initialTasks.reduce((accumulator, currentValue) => { return currentValue.status == status ? accumulator + 1 : accumulator
         }, 0);

         percent = numTasks / initialTasks.length;

        return (
            percent*100
        )
    }

    return (
        <div className="flex flex-col justify-center items-center h-1/3 w-full">
        <label className="peer-hover:text-gray-50 text-gray-100">completed {getPercent("completed")}%</label>
         <div className="peer flex flex-row h-6 border border-gray-300 rounded-xl w-1/3 mt-2 bg-gray-100 hover:border-gray-50">
             <div className="bg-green-400 h-full rounded-l-xl" style={{width: `${getPercent("completed")}%`}} ></div>
             <div className="bg-orange-300 h-full" style={{width: `${getPercent("in-progress")}%`}} > </div>
             <div className="bg-red-400 h-full rounded-r-xl" style={{width: `${getPercent("todo")}%`}} ></div>
         </div>
        </div>
    )
}

export default Progress;