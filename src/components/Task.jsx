import initialTasks from "../data/tasks.jsx"

const formattedTasks = () => {
    return (
        initialTasks.map(task => 
            <div className="flex flex-col items-start p-3 m-1 h-37 w-65 bg-white rounded-lg">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>{task.category} - {task.priority} priority</p>
                <section className="flex p-2 flex-row flex-grow justify-end items-end w-full">
                    <button className=" mr-3 hover:cursor-pointer hover:bg-slate-300 hover:rounded-md p-1">
                        <img
                        src="/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                        alt="EditButton"
                        className="w-5 h-5"
                        />
                    </button>
                    <button className="hover:cursor-pointer hover:bg-slate-300 hover:rounded-md p-1">
                        <img
                        src="/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png"
                        alt="DeleteButton"
                        className="w-5 h-5 "
                        />
                    </button>

                </section>
            </div>
        )
    )
}

const Task = () => {
    return (
        <div className="flex flex-wrap content-start  h-full bg-gray-100 bg-gradient-to-r from-pink-400 to-indigo-600 rounded m-0 p-0">
            {formattedTasks()}
        </div>
    );
};

export default Task;