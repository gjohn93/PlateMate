import { useState } from "react";
import { useToken } from "./AuthenticateUser";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useToken();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loginValidation() === false) {
      return;
    }
    login(email, password);
    setEmail("");
    setPassword("");
    navigate("/");
    // error handle for if not a valid account
  };

  function loginValidation() {
    let blankInputs = 0;
    if (email.length === 0) {
      blankInputs++;
    }
    if (password.length === 0) {
      blankInputs++;
    }

    if (blankInputs === 2) {
      setErrorMessage("Login form is completely blank.");
      setSuccessMessage("");
      return false;
    }
  }

  return (
    <>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="login"
        tabIndex="-1"
        aria-labelledby="loginLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#F0C797] bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header p-6 mt-2 text-center">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold mr-2">LOGIN</h1>
                <img src={require("../images/lock.png")} width="40px" />
              </div>
              <svg
                className="cursor-pointer w-9 h-9 absolute top-3 right-2.5 text-black bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-[#FEF5ED] hover:text-white ease-linear transition-all duration-150"
                fillRule="currentColor"
                data-bs-dismiss="modal"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="modal-body relative p-4">
              <form
                className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-3"
                onSubmit={handleFormSubmit}
              >
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-sm"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errorMessage ? (
                  <div className="flex p-4 mb-4 text-sm text-red-700 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 items-center">
                    <img
                      src={require("../images/warning.png")}
                      width="30px"
                      style={{ marginRight: "15px" }}
                    />
                    {errorMessage}
                  </div>
                ) : successMessage ? (
                  <div className="flex p-4 mb-4 text-sm text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 items-center">
                    <img
                      src={require("../images/success.png")}
                      width="30px"
                      style={{ marginRight: "15px" }}
                    />
                    {successMessage}
                  </div>
                ) : null}
                <button className="bg-black text-white font-bold uppercase text-sm px-6 py-3 rounded inline-flex group items-center justify-center cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#F0C797] group-hover:w-32 group-hover:h-24 opacity-10"></span>
                  Order up!
                </button>
              </form>
              <div className="flex items-center">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#signup"
                  className="mb-6 mt-4 mx-auto text-black-500 background-transparent font-bold underline uppercase text-sm focus:outline-none ease-linear transition-all duration-150 hover:text-white cursor-pointer"
                >
                  Don't have an account?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
