import { useState } from "react";
import initialTasks from "../data/tasks.jsx"

const FilterTasks = () => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState(initialTasks);

    const handleEvent = (event ,property,value) => {

        const checked = event.target.checked;

        if (checked){
            const newFilter = [
                ...selectedFilters,{property : property, value:value}
            ];
            setSelectedFilters(newFilter)
            const FilteredTasks = initialTasks.filter(task =>
            newFilter.some(filter =>
            task[filter.property] === filter.value
             )
            );
            setSelectedTasks(FilteredTasks)
        }
        else
        {
            const newFilter = selectedFilters.filter(filter => !(filter.property === property && filter.value === value));
            setSelectedFilters(newFilter);

            if (newFilter.length === 0){
                setSelectedTasks(initialTasks);
            } else {
            const FilteredTasks = initialTasks.filter(task =>
            newFilter.some(filter =>
            task[filter.property] === filter.value
             )
            );
            setSelectedTasks(FilteredTasks)}
        }

    }




return (
                    <div className="flex w-1/3 h-full flex-col shadow-lg rounded-xl bg-white p-2 text-gray-600">
                        <h2 className="text-gray-800" >Filter</h2>
                        <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-1/3 ml-1">
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="WorkCheckbox " onChange={(event) => handleEvent(event,"category", "work")}/>
                             <label className="ml-1">Work</label>  
                            </div>
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="LearningCheckbox" onChange={(event) => handleEvent(event,"category", "learning")}/>
                             <label className="ml-1">Learning</label>  
                            </div>
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="PersonalCheckbox" onChange={(event) => handleEvent(event,"category", "personal")}/>
                             <label className="ml-1">Personal</label>  
                            </div>
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="HealthCheckbox" onChange={(event) => handleEvent(event,"category", "health")}/>
                             <label className="ml-1">Health</label>  
                            </div>
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="PriorityCheckbox" onChange={(event) => handleEvent(event,"priority", "high")}/>
                             <label className="ml-1">High Priority</label>  
                            </div>
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="MediumCheckbox" onChange={(event) => handleEvent(event,"priority", "medium")}/>
                             <label className="ml-1">Medium Priority</label>  
                            </div>
                            <div>
                             <input className="hover:cursor-pointer" type="checkbox" id="HighCheckbox" onChange={(event) => handleEvent(event,"priority", "low")}/>
                             <label className="ml-1">Low Priority</label>  
                            </div>
                        </div>
                        <div className="h-9/10 w-2/3 mr-3 border border-gray-300 ">
                        <ul className="pl-1">
                            {
                              selectedTasks.map(task => 
                              <li key={task.id}>
                              {task.title}
                               </li>)
                            }
                        </ul>
                        </div>
                        </div>
                    </div>
                )}


export default FilterTasks;