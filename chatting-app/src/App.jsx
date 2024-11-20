import React from 'react';
import Chat_head from './Pages/Customer/main_body/chat_body';
import Chat_body from './Pages/Customer/main_body/Chat_body/Chat_body';
import ProfileBar from './Pages/Customer/ProfilePage/ProfileBar';
import Starting_page from './Pages/Customer/Login Page/Starting_page';
import Loginpopup from './Pages/Customer/Login Page/Loginpopup';
import Signuppopup from './Pages/Customer/Login Page/Signuppopup';

function App() {
  // Replace these with the actual latitude and longitude values
  // const yourLatitude = 28.785; // Example latitude
  // const yourLongitude = 84.4194; // Example longitude

  return (
    <>
    <Chat_body/>
    <Starting_page/>
   
    
   
    {/* <ProfileBar/> */}
   
</>
    
       
  );
}

export default App;
