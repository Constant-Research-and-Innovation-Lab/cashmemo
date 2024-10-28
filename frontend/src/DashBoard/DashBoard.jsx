import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="grid grid-cols-6 gap-10 w-full h-screen">
            <div className="text-black h-full bg-orange-500">Profile <br /> Dash</div>
            <div className="col-span-5 bg-pink-500 p-12 w-full"><Outlet/></div>
        </div>
    );
};

export default DashBoard;