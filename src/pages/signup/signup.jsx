import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../constant/images";
import { CiDark } from "react-icons/ci";
import { dataContext } from "../../App";

export const Signup = () => {
  let {user, setUser } = useContext(dataContext);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);

  const [isNameEmpty, setisNameEmpty] = useState(true);
  const [isEmailEmpty, setisEmailEmpty] = useState(true);
  const [isPasswordEmpty, setisPasswordEmpty] = useState(true);
  const [isBirthdayEmpty, setIsBirthdayEmpty] = useState(true);

  const navigate = useNavigate();

  //^ name check------------------

  function nameFormating(name = "") {
    let scndName = name.trim();
    scndName =
      scndName.charAt(0).toUpperCase() + scndName.slice(1).toLowerCase();

    if (scndName.includes(" ")) {
      let newName = "";
      let splitArr = scndName.split(" ");
      splitArr.forEach((ele) => {
        newName +=
          ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() + " ";
      });
      scndName = newName.trim();
    }

    if (scndName === "") {
      setisNameEmpty(true);
    }

    setisNameEmpty(false);
    return scndName;
  }
  //^ name check end---------------

  //^ Email check -----------------

  const handleEmailChange = (email) => {
    const newEmail = email;

    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(newEmail));

    //setUser.email = newEmail;
    setUser({...user, email: newEmail})
    setisEmailEmpty(false);

    if (email === "") {
      setisEmailEmpty(true);
    }
  };

  //^ Email check end---------------

  //^ Password check -----------------

  const handlePasswordChange = (pass) => {
    const newPassword = pass;

    // Basic email validation using a regular expression
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[^\s]{8,}$/;
    setIsValidPass(passwordRegex.test(newPassword));

    //setUser.password = newPassword;
    setUser({...user, password: newPassword})
    setisPasswordEmpty(false);

    if (pass === "") {
      setisPasswordEmpty(true);
    }
  };

  //^ Password check end---------------

  return (
    <>
      <nav className="flex justify-between pt-5 px-10 m-0 items-center ">
        <div className="logo m-0">
          <p
            onClick={() => {
              navigate("/");
            }}
            className="font-bold m-0 text-[28px] cursor-pointer text-[#6e009e]"
          >
            FRIDAT<span className="text-[#e040fb] text-3xl">.</span>
          </p>
        </div>
        <div>
          <button>
            <CiDark size={24} className="text-[#e040fb]" />
          </button>
        </div>
      </nav>

      <div className="h-[85vh] w-[100vw] bg-white overflow-hidden flex justify-center items-center">
        <div className="h-[70vh] w-[60vw] flex signup-container justify-center items-center rounded-[30px] bg-white backdrop-blur-md  ">
          <div className="h-[100%] w-[60%] rounded-l-[30px] flex flex-col items-center justify-center gap-[10px]">
            <h1 className="text-2xl text-[#6e009e] font-bold pt-3 pb-2 ">
              Sign Up!
            </h1>
            <div>
              <input
                onChange={(e) => {
                  //setUser.name = nameFormating(e.target.value);
                  setUser({...user, name:  nameFormating(e.target.value)})
                }}
                className="h-[45px] shadow-border w-[300px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] "
                placeholder="FullName"
                type="text"
              />
            </div>
            <div>
              <input
                id="email"
                onChange={(e) => {
                  //handleEmailChange(e.target.value)
                  handleEmailChange(e.target.value)
                }}
                className="h-[45px] shadow-border w-[300px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                placeholder="E-mail"
                type="email"
              />
              {isValidEmail ? (
                <p className="ps-5 text-green-500">Email is valid</p>
              ) : (
                <p className="ps-5 text-red-500">Email is invalid</p>
              )}
            </div>
            <div>
              <input
                onChange={(e) => {
                  //handlePasswordChange(e.target.value)
                  handlePasswordChange(e.target.value)
                }}
                className="h-[45px] shadow-border w-[300px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                placeholder="Password"
                type="password"
              />
              {isValidPass ? (
                <p className="ps-5 text-green-500">Password is valid</p>
              ) : (
                <p className="ps-5 text-red-500">Password is invalid</p>
              )}
            </div>
            <div>
              <input
                onChange={(e) => {
                  setIsBirthdayEmpty(false)
                  //setUser.birthday = e.target.value;
                  setUser({...user, birthday:  e.target.value})
                }}
                className="h-[45px] text-[#9ca3af] pl-[15px] shadow-border w-[300px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                placeholder="Date"
                type="date"
              />
            </div>
            <div className="px-5">
              <select
                className="px-4 h-[45px] shadow-border w-[300px] rounded-[15px] bg-white flex justify-center items-center text-[#9ca3af] gap-[130px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={(e) => {
                  //setUser.gender = e.target.select;
                  setUser({...user, gender:  e.target.value})
                }}
                name=""
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="overflow-hidden rounded-[15px]  h-[45px] w-[200px]">
              <button
                onClick={() => {
                  if (
                    isNameEmpty !== true &&
                    isEmailEmpty !== true &&
                    isPasswordEmpty !== true &&
                    isBirthdayEmpty !== true &&
                    isValidEmail === true &&
                    isValidPass === true
                  ) {
                    console.log(user);
                    
                    navigate("/signIn");
                  } else {
                    if (isValidEmail !== true) {
                      alert("Enter a valid Email");
                    } else if (isValidPass !== true) {
                      alert("Enter a valid Password");
                    } else {
                      alert("Fill all Fields");
                    }
                  }
                }}
                className="signup-button  h-[100%] w-[100%] rounded-[20px]  text-white   text-[14px] font-semibold cursor-pointer hover:bg-[#b535eb]"
              >
                Create Account
              </button>
            </div>
          </div>

          <div className="h-[100%] w-[40%] rounded-r-[30px] signup-second-div">
            <img
              src={images.loginImg}
              alt=""
              className="w-[100%] h-[100%] rounded-r-[30px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
