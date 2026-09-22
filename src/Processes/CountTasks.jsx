import initialTasks from "../data/tasks.jsx"

const CountTasks = (props) => {

    const count = initialTasks.reduce((tasks,task) => task.status === props.taskStatus ? tasks + 1 : tasks ,0);

    return (
        <div>
            {count}
        </div>
    )
}

export default CountTasks;