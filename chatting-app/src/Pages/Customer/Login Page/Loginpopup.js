import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import loginService from '../../../Services/Login/loginService';

function Loginpopup(props) {
  const navigate = useNavigate();
    
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        checkbox: false,
      });
      console.log(loginData);

    const [errorMessage, setErrormessage] = useState("");

    async function handelClick() {
        if (loginData.username == "") {
          setErrormessage("Username cant be empty!");
        } else if (loginData.password == "") {
          setErrormessage("password cant be empty!");
        } else {
          setErrormessage("");
          const loginDataApi = {
            username: loginData.username,
            password: loginData.password,
          };
          try{
            const response = await loginService(loginDataApi);
            console.log(response);
            localStorage.setItem('username', response.username);
            localStorage.setItem('token', response.token);
            navigate('/')
          

          }
          catch(e){
            console.log(e);
          }
        }
    }
    return props.login ? (
        <>
          <div className="flex z-40 top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
            <div className="bg-white  w-[400px]  h-[500px] flex ">
              <div className="text-right ">
            
    
               
              </div>
    
              {/* ist one */}
              <div className="justify-center flex-col w-[100%] p-5 flex">
                <div className="text-3xl font-bold">Login</div>
                <div className="mb-4 flex justify-end pt-4">
                  <button onClick={() => props.setLogin(false)}>
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
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
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
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />{" "}
                  <br />
                  <br />
                  <div className="flex justify-between ">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        checked={loginData.checkbox} // Use "checked" instead of "value" for checkboxes
                        onChange={(e) =>
                          setLoginData({ ...loginData, checkbox: e.target.checked })
                        }
                      />
                      <p>Remember Me?</p>
                    </div>
                    <p className="text-[#5387c6]">
                      <a href="#">Forget Password?</a>
                    </p>
                  </div>
                  <div className="mt-3 text-center w-full ">
                    <button
                      onClick={handelClick}
                      className="hover:bg-[#737d9f] bg-[#407fd5] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white"
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex mt-4 justify-between w-[9">
                    <p>Don't have an account?</p>
    
                    <button className="text-[#3aa94b]">Register?</button>
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


export default Loginpopup
