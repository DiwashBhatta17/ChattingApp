import React from 'react'

function Menu(props) {
  const {menu, setMenu} = props;



  return (menu)?
  <div className="flex left-8 w-[120px] absolute py-4 bg-[#444242] h-screen text-white">
  <div className="flex flex-col w-full justify-between items-center">
    <div className="flex items-center justify-center">
    </div>

    <div className="flex flex-col items-start  w-full top-1 text-sm justify-center gap-3">
        <div className="px-3">Favorite chats</div>
        <div className="px-3">Archive Chats</div>
        <hr className="w-full border-[#e8bdbd] my-1" />

        <div className="px-3">Setting</div>
      </div>
    </div>
  </div>:"";
  
}

export default Menu
