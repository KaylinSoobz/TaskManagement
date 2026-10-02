import initialTasks from "../data/tasks.jsx"

const Progress = () => {

    const getPercent = (status) => {

        const percent = initialTasks.reduce((accumulator, currentValue) => {
         return accumulator + currentValue;
         }, 0);

        return (

        )
    }

    return (
        <div></div>
    )
}