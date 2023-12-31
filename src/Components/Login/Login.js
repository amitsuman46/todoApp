import React, { useRef } from "react";
import { Displaytask, H2, TaskContainer } from "../../Common/CommonComponents";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  function loginHandler() {
    props.onLogin(emailRef.current.value, passRef.current.value);
  }

  return (
    <Displaytask
      style={{
        marginTop: "80px",
        padding: "0",
        width: "55%",
        height: "70vh",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <AccountCircleOutlinedIcon
        sx={{ fontSize: "64px", color: "#F5EBEB", marginTop: "20px" }}
      />
      <H2>LOGIN</H2>
      <TaskContainer
        style={{
          height: "10%",
          margin: "0",
          padding: "0",
          width: "60%",
          background: "#F5EBEB",
          zIndex: "10",
        }}
      >
        <input
          ref={emailRef}
          placeholder="Enter Email"
          type="email"
          id="emailInput"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            opacity: "1",
            background: "rgba(0,0,0,0)",
            color: "#952323",
            margin: "auto",
            border: "none",
            height: "100%",
            outline: "none",
            overflow: "wrap",
            "::placeholder": {
              color: "#952323",
            },
          }}
        />
      </TaskContainer>
      <TaskContainer
        style={{
          height: "10%",
          margin: "0",
          padding: "0",
          width: "60%",
          background: "#F5EBEB",
          zIndex: "10",
          marginTop: "25px",
        }}
      >
        <input
          ref={passRef}
          placeholder="Enter password"
          type="password"
          id="passwordInput"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            opacity: "1",
            background: "rgba(0,0,0,0)",
            color: "#952323",
            margin: "auto",
            border: "none",
            height: "100%",
            outline: "none",
            overflow: "wrap",
            "::placeholder": {
              color: "#952323",
            },
          }}
        />
      </TaskContainer>

      <TaskContainer
        style={{
          height: "10%",
          margin: "0",
          padding: "0",
          width: "30%",
          background: "#F5EBEB",
          zIndex: "10",
          marginTop: "40px",
        }}
      >
        <button
          type="password"
          id="passwordInput"
          style={{
            width: "100%",
            cursor: "pointer",
            textAlign: "center",
            fontSize: "24px",
            opacity: "1",
            background: "rgba(0,0,0,0)",
            color: "#952323",
            margin: "auto",
            border: "none",
            height: "100%",
            outline: "none",
            overflow: "wrap",
            "::placeholder": {
              color: "#952323",
            },
          }}
          onClick={loginHandler}
        >
          Sign In
        </button>
      </TaskContainer>

      <TaskContainer
        style={{
          height: "10%",
          margin: "0",
          padding: "0",
          width: "30%",
          background: "#F5EBEB",
          zIndex: "10",
          marginTop: "40px",
        }}
      >
        <button
          type="password"
          id="passwordInput"
          style={{
            width: "100%",
            cursor: "pointer",
            textAlign: "center",
            fontSize: "24px",
            opacity: "1",
            background: "rgba(0,0,0,0)",
            color: "#952323",
            margin: "auto",
            border: "none",
            height: "100%",
            outline: "none",
            overflow: "wrap",
            "::placeholder": {
              color: "#952323",
            },
          }}
          onClick={() => {
            navigate("/todoApp/signup");
          }}
        >
          Sign Up
        </button>
      </TaskContainer>
    </Displaytask>
  );
};

export default Login;
