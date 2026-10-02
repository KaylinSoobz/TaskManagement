import initialTasks from "../data/tasks.jsx"

const FilterTasks = () => {



return (
                    <div className="flex w-1/3 h-full flex-col shadow-lg rounded-xl bg-white p-2 text-gray-600">
                        <h2 className="text-gray-800" >Filter</h2>
                        <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-1/3 ml-1">
                            <div>
                             <input type="checkbox" id="allCheckbox"/>
                             <label className="ml-1">All</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="WorkCheckbox"/>
                             <label className="ml-1">Work</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="LearningCheckbox"/>
                             <label className="ml-1">Learning</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="PersonalCheckbox"/>
                             <label className="ml-1">Personal</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="HealthCheckbox"/>
                             <label className="ml-1">Health</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="PriorityCheckbox"/>
                             <label className="ml-1">Low Priority</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="MediumCheckbox"/>
                             <label className="ml-1">Medium Priority</label>  
                            </div>
                            <div>
                             <input type="checkbox" id="HighCheckbox" />
                             <label className="ml-1">High Priority</label>  
                            </div>
                        </div>
                        <div className="h-9/10 w-2/3 mr-3 border border-gray-300 ">

                        </div>
                        </div>
                    </div>
                )}


export default FilterTasks;