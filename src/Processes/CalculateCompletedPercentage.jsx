import initialTasks from "../data/tasks.jsx"

const CalculateCompletedPercentage = () => {

const count = initialTasks.reduce((tasks,task) => task.status === "completed" ? tasks + 1 : tasks ,0);
const percent = (count/initialTasks.length)*100

    return (
        <section className="text-green-500">{percent}%</section>
    )
}

export default CalculateCompletedPercentage;