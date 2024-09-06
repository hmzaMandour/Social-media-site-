import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/image.png";
import images from "../../constant/images";
import { CiDark } from "react-icons/ci";
import { dataContext } from "../../App";

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [randomOne, setRandomOne] = useState(0);
  const [random, setRandom] = useState(0);

  let obj = useContext(dataContext);

  let isTrue = false;

  const checkUserInfo = () => {
    if (
      obj.email === email &&
      obj.password === password &&
      Number(randomOne) === Number(random) &&
      random !== 0
    ) {
      // isTrue = true;
      // navigate("/home")
      alert("seems good " + random + randomOne);
    } else {
      alert("somthing is wrong " + random + " " + randomOne);
      // isTrue = false;
    }
  };

  // notification------------------
  function notify() {
    let random = Math.ceil(Math.random() * 8999) + 1000;
    setRandomOne(random);
    isTrue = true;

    const notification = new Notification("Your code is:", {
      body: random,
      icon: logo,
    });

    setTimeout(() => notification.close(), 8000);
  }

  const notification = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        notify();
      } else {
        Notification.requestPermission().then((res) => {
          if (res === "granted") {
            notify();
          } else {
            console.error("Did not receive permission for notifications");
          }
        });
      }
    } else {
      console.error("Browser does not support notifications");
    }
  };
  // notification-end---------------------------

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
        <div className="h-[70vh] w-[60vw] flex signup-container justify-center items-center rounded-[30px] bg-white backdrop-blur-md">
          <div className="h-[100%] w-[60%] rounded-l-[30px] flex flex-col items-center justify-center gap-[2vh]">
            <h1 className="text-2xl text-[#6e009e] font-bold pb-5">Log in!</h1>

            <div>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="h-[45px] shadow-border w-[300px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                placeholder="E-mail"
                type="email"
              />
            </div>
            <div>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="h-[45px] shadow-border w-[300px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex gap-2">
              <input
                onChange={(e) => {
                  setRandom(e.target.value);
                }}
                className="h-[45px] shadow-border w-[195px] rounded-[15px] px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                placeholder="Verify Code"
                type="number"
              />
              <button
                onClick={() => {
                  notification();
                }}
                className="h-[45px] text-[#b535eb]   w-[100px] rounded-[20px] text-[14px] font-semibold cursor-pointer underline"
              >
                Send Code
              </button>
            </div>
            <div className="overflow-hidden rounded-[15px]  h-[45px] w-[200px] mt-5">
              <button
                onClick={() => checkUserInfo()}
                className="signup-button text-white h-[100%] w-[100%] rounded-[20px] text-[13px] font-semibold cursor-pointer hover:bg-[#b535eb]"
              >
                LOG IN
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
