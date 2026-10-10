import initialTasks from "../data/tasks.jsx"

const formattedTasks = () => {
    return (
        initialTasks.map(task => 
            <div className="flex flex-col items-start p-3 m-1 h-35 w-65 bg-white rounded-lg">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>{task.category} - {task.priority} priority</p>
            </div>
        )
    )
}

const Task = () => {
    return (
        <div className="flex flex-wrap  h-full bg-gray-100 bg-gradient-to-r from-pink-400 to-indigo-600 rounded m-0 p-0">
            {formattedTasks()}
        </div>
    );
};

export default Task;