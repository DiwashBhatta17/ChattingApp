import React, { useState } from 'react'

function Signuppopup(props) {
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
        checkbox: false,
      });
      console.log(signupData);

    const [errorMessage, setErrormessage] = useState("");

    const generateUsername = () => {
        const adjectives = ['Cool', 'Fast', 'Smart', 'Quick', 'Brave', 'Bright'];
        const nouns = ['Tiger', 'Eagle', 'Panda', 'Lion', 'Shark', 'Wolf'];
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const timestamp = Date.now().toString(36); // Convert timestamp to a base36 string
        const randomSuffix = Math.random().toString(36).substring(2, 8); // Random 6-character string
    
        // Combine parts to form a unique username
        const uniqueUsername = `${randomAdjective}${randomNoun}${timestamp}${randomSuffix}`;
        setSignupData({...signupData, username: uniqueUsername});
      };
    

    async function handelClick() {
        if (signupData.username === "") {
          setErrormessage("Username cant be empty!");
        } else if (signupData.password === "") {
          setErrormessage("password cant be empty!");
        } else {
          setErrormessage("");
          const signupDataApi = {
            username: signupData.username,
            password: signupData.password,
          };
          try{

          }
          catch(e){}
        }
    }
    return props.signup ? (
        <>
          <div className="flex z-40 top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
            <div className="bg-white  w-[400px]  h-[500px] flex ">
              <div className="text-right ">
            
    
               
              </div>
    
              {/* ist one */}
              <div className="justify-center flex-col w-[100%] p-5 flex">
                <div className="text-3xl font-bold">Create Account</div>
                <div className="mb-4 flex justify-end pt-4">
                  <button onClick={() => props.setSignup(false)}>
                    <i className="absolute text-right top-[150px]  text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="flex items-center justify-center">
                 
                </div>
    
                <div className=" text-center  rounded-lg alert-danger" role="alert">
                  {errorMessage}
                </div>
    
                <div className="h-[300px]">
                  <label className="text-black mb-3">Username</label>
                  <br />
                  <input
                    className=" w-full bg-[#84df6636] h-[30px] rounded-lg outline-none border-black"
                    type="text"
                    placeholder="  Your Username"
                    name="username"
                    value={signupData.username}
                    onChange={(e) =>
                      setSignupData({ ...signupData, username: e.target.value })
                    }
                  ></input>
                  <br></br>
                  <label className="text-black mb-3">Email (optional)</label>
                  <br />
                  <input
                    className=" w-full bg-[#84df6636] h-[30px] rounded-lg outline-none border-black"
                    type="text"
                    placeholder="  Email (Optional)"
                    name="username"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                  ></input>
                  <br></br>
                  <label className="mt-3 mb-3" htmlFor="">
                    Password
                  </label>
                  <br />
                  <input
                    className="rounded-lg bg-[#84df6636] h-[30px] w-full border-t-0  border-black outline-none"
                    type="password"
                    name="password"
                    placeholder=" ******************"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />{" "}
                  <br />
                  <br />
                  <div className="flex justify-between ">
                    <div className="flex gap-2">

                      <p>Add the email to restore your password.</p>
                    </div>
                    <p className="text-[#5387c6]">
                    </p>
                  </div>
                  <div className="mt-3 flex gap-5 text-center w-full ">
                  <button
                      onClick={generateUsername}
                      className="hover:bg-[#737d9f] bg-[#7da0d2] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white"
                    >
                      Generate
                    </button>
                    <button
                    
                      onClick={handelClick}
                      className="hover:bg-[#737d9f] bg-[#76e36a] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white"
                    >
                      Create
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        
        </>
      ) : (
        ""
      );
    
}


export default Signuppopup
