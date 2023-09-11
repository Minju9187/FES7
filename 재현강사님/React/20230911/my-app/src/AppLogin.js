import React, { useState } from "react";
import Homepage from "./login-components/Homepage";
import Login from "./login-components/Login";

export default function AppLogin() {
  const user = {
    idUser: "alswn1583@naver.com",
    pwUser: 1234,
  };
  //로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);

  return login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />;
}
