import initialTasks from "../data/tasks.jsx"

const GetTask = (props) => {

    function FilterObjects (property,value){
        return initialTasks.filter((task) => task.property[property] === value)
    }

        return (
                <div>{FilterObjects(props.property , props.value).map((task) => (
                <p key={task.id} className="flex justify-center">{task.title}</p>
                ))}
                </div>
        )
    }

export default GetTask;