import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";
import DashBoard from "./DashBoard";
import Task from "./Task";
import ScrumBoard from "./ScrumBoard";

const Layout = () => {
  const componentA = <DashBoard/> ;
  const componentB = <Task/>;
  const componentC = <ScrumBoard/>;

  const [activeComponent,setActiveComponent] = useState(componentA);
  
  return (
    <div className="flex h-screen">
        <div className="flex h-screen flex-col justify-between bg-white w-64 border border-gray-200">

            <div className="flex justify-center p-6 border-b border-gray-200 text-xl font-semibold text-indigo-600">
                TaskFlow
            </div>

            <div className="flex-1 p-6">
                <ul>
                    <li className=" p-3 rounded-lg text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer " onClick={() => setActiveComponent(componentA)}>
                        Dashboard
                    </li>
                    <li className="p-3 rounded-lg  text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer" onClick={() => setActiveComponent(componentB)}>
                        Tasks
                    </li>
                    <li className="p-3 rounded-lg  text-center text-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer" onClick={() => setActiveComponent(componentC)}>
                        scrum board
                    </li>
                </ul>
            </div>

            <div className="p-3 text-center text-gray-600 hover:bg-gray-50 hover:text-gray-800">
                <button className="hover:cursor-pointer">Settings</button>
            </div>

        </div>
      <div className="flex flex-1 flex-col ">
        <header className="flex bg-white border border-gray-200 justify-between p-6 ">
            <div></div>
            <div className="text-indigo-600 text-lg font-semibold">Section Title</div>
            <div className="flex flew-row">
                <div className="pr-3"><input type="checkbox"/></div>
                <div>Profile</div>
            </div>
        </header>

        <main className="flex-1 bg-gray-100 p-6 ">
          {activeComponent}
        </main>
      </div>
    </div>
  );
};

export default Layout;
