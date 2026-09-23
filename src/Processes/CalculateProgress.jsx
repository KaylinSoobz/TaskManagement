import initialTasks from "../data/tasks.jsx"

const colorMap = {
    green : "bg-emerald-500",
    orange : "bg-orange-500",
    gray : "bg-gray-200"

}

const CalculateProgress = (props) => {

    const count = initialTasks.reduce((tasks,task) => task.status === props.taskStatus ? tasks + 1 : tasks ,0);

    const width = (count/initialTasks.length)*100

    return (
        <div 
             style={{width : `${width}%`}}
             className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${colorMap[props.color]}`}
        />
    )
}
 export default CalculateProgress;
