import React, { useState } from "react";
import Menu from "./Menu";

function ProfileBar() {

    const [menu , setMenu] = useState(false);
    
  return (
    <>
    <>
  <div className="flex w-[45px] py-4 bg-[#444242] h-screen text-white">
    <div className="flex flex-col w-full justify-between items-center">
      <div className="flex items-center justify-center">
        <button onClick={() => setMenu(!menu)} className="fa-solid fa-bars" />
      </div>

      <div className="flex flex-col items-center w-full justify-center gap-3">
        <div className="fa-regular fa-star"></div>
        <div className="fa-solid fa-box-archive"></div>

        {/* Divider Line */}
        <hr className="w-full border-[#e8bdbd] my-2" />

        <div className="fa-solid fa-gear"></div>
      </div>
    </div>
  </div>
</>


    <Menu menu={menu} setMenu={setMenu}/>
    </>
    
  );
}

export default ProfileBar;
