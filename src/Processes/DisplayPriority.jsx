import initialTasks from "../data/tasks.jsx"

const DisplayPriority = () => {

    function findPriority (priority){
        return initialTasks.filter((task) => task.priority === priority)
    }

    return (
        <div className="flex flex-col items-center mt-6">
        <label className="pb-3">Task Summary</label>
        <table className="border border-gray-400 border-spacing-y-3">
            <thead>
            <tr className="pr-6">
                <th className="pr-6">Priority</th>
                <th>Task</th>
            </tr>
            </thead>

            <tbody>
            <tr className="border-b border-gray-300">
                <td className="p-3">
                    Low
                </td>
                <td className=" pr-1.5">
                    <div>{findPriority("low").map((task) => (
                    <p key={task.id} className="flex justify-center">{task.title}</p>
                    ))}
                    </div>
                </td>   
            </tr>

            <tr className="border-b border-gray-300">
                <td className=" p-3">
                    Medium
                </td>
                <td className=" pr-1.5">
                    <div>{findPriority("medium").map((task) => (
                    <p key={task.id} className="flex justify-center">{task.title}</p>
                    ))}
                    </div>
                </td>   
            </tr>

            <tr>
                <td className="p-3">
                    High
                </td>
                <td className=" pr-1.5"> 
                    <div >{findPriority("high").map((task) => (
                    <p key={task.id} className="flex justify-center">{task.title}</p>
                    ))}
                    </div>
                </td>   
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default DisplayPriority;