import initialTasks from "../data/tasks.jsx"
import DisplayPriority from "../Processes/DisplayPriority.jsx"


const colorMap = {
    green : "bg-emerald-500",
    orange : "bg-orange-500",
    gray : "bg-gray-200"
}

    const TaskProcess = (props) => {
        const count = initialTasks.reduce((tasks,task) => task.status === props.taskStatus ? tasks + 1 : tasks ,0);
        const width = (count/initialTasks.length)*100
        const percent = (count/initialTasks.length)*100
        const Process = () => {
            if (props.process === "countTasks"){
             return (
                 <div>
                     {count}
                 </div>
             )}
             else if (props.process === "calculateProgress"){
             return (
                 <div 
                 style={{width : `${width}%`}}
                 className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${colorMap[props.color]}`}
                 />
             )}
            else if(props.process === "getPercentComplete"){
             return (
                <div className="flex">
                     <h3 className="pl-2 mr-2">Completed</h3>
                     <section className="text-green-500">{percent}%</section>
                </div>
             )}
            else if (props.process === "displayCategories"){
                return (
                    <div className="flex w-1/3 h-full flex-col border border-gray-4000">
                        <h2 >Category</h2>
                        <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-1/3">
                            <div>
                             <input type="checkbox"/>
                             <label className="ml-1">All</label>  
                            </div>
                            <div>
                             <input type="checkbox"/>
                             <label className="ml-1">Work</label>  
                            </div>
                            <div>
                             <input type="checkbox"/>
                             <label className="ml-1">Learning</label>  
                            </div>
                            <div>
                             <input type="checkbox"/>
                             <label className="ml-1">Personal</label>  
                            </div>
                            <div>
                             <input type="checkbox"/>
                             <label className="ml-1">Health</label>  
                            </div>
                        </div>
                        <div className="h-full w-full border border-gray-300 ml-1 ">

                        </div>
                        </div>
                    </div>
                )
            }
            else if (props.process === "displayPriority"){
                return (
                    <div className="flex w-1/3 h-full flex-col border border-gray-400">
                        <h2 className="text-end">Priority</h2>
                        <div className="flex flex-row w-full h-full">
                        <div className="h-full w-full border border-gray-300 ml-1 ">

                        </div>
                        <div className="flex flex-col w-1/3 items-end">
                            <fieldset >
                            <div className="flex justify-end">
                            <label className="mr-1">Low</label>
                             <input type="radio" name="priority" value="low"/>  
                            </div>
                            <div className="flex justify-end">
                            <label className="mr-1">Medium</label>
                             <input type="radio" name="priority" value="medium"/>  
                            </div>
                            <div className="flex justify-end">
                            <label className="mr-1">High</label>
                             <input type="radio" name="priority" value="high"/> 
                             </div> 
                            </fieldset>
                        </div>
                        </div>
                    </div>
                )
            }
        };


             return Process();
    }

const DashBoard = () => {
    return (
        <div className="flex flex-col flex-1 h-full bg-gray-100 items-center">
            <div className="flex flex-row w-1/2 h-2/15 justify-around mt-6">
                <span className="flex flex-col w-1/5 items-center justify-center border border-gray-200 bg-white p-6 hover:border-green-500">
                    <TaskProcess
                        process="countTasks"
                        taskStatus="completed"
                    />
                    <h4>Completed</h4>
                </span>
                <span className="flex flex-col w-1/5 items-center justify-center border border-gray-200 bg-white p-6 hover:border-orange-500">
                    <TaskProcess
                        process="countTasks"
                        taskStatus="in-progress"
                    />
                    <h4>In-progress</h4>
                </span>
                <span className="flex flex-col w-1/5 items-center justify-center border border-gray-200 bg-white p-6 hover:border-red-500">
                    <TaskProcess
                        process="countTasks"
                        taskStatus="todo"
                    />
                    <h4>To-do</h4>
                </span>
            </div>
            <div className="relative pt-1 mx-5 w-full max-w-md mt-3">
                <div className="flex">
                    <TaskProcess
                        process="getPercentComplete"
                        taskStatus="completed"
                    />
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200 border border-gray-300">
                    <TaskProcess
                        process="calculateProgress"
                        taskStatus="completed"
                        color="green"
                    />
                    <TaskProcess
                        process="calculateProgress"
                        taskStatus="in-progress"
                        color="orange"
                    />
                    <TaskProcess
                        process="calculateProgress"
                        taskStatus="todo"
                        color="gray"
                    />
                </div>
            </div>
            <DisplayPriority />
            <div className="flex flex-row w-full h-1/3 mt-6 justify-around">
                    <TaskProcess
                        process="displayCategories"
                        taskStatus="todo"
                        color="gray"
                    />
                    <TaskProcess
                        process="displayPriority"
                        taskStatus="todo"
                        color="gray"
                    />
            </div>
                </div>
    );
};

export default DashBoard;