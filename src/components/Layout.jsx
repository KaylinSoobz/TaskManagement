import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex flex-1 flex-col ">
        <Header />

        <main className="flex-1 bg-gray-50 p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
