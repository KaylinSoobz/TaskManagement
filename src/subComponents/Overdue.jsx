import initialTasks from "../data/tasks.jsx"

const Overdue = () => {
    
    const getOverdue = () => {
        return (
            initialTasks.filter(task => new Date(task.dueDate) < (new Date))
        )
    };

    const  FormattedOverdue = getOverdue().map((task) => {
        return (
        <li key={task.id} className="p-1 text-center font-semibold">
            {task.title} - ({task.dueDate})
        </li>
        )
    })

    return ( 
        <div className="flex w-1/3 h-full flex-col border-1 border-purple-600 items-center shadow-lg rounded-xl bg-white">
            <h1 className="text-red-600 mb-8 pt-3 font-semibold">Overdue</h1>
            <ul>
                {FormattedOverdue}
            </ul>
        </div>

    )
}

export default Overdue;