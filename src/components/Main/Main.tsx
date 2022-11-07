/* eslint-disable */

import CTA from "../CTA/CTA";
import Login from "../Login/Login";
import MainStyled from "./Styled";

function Main() {
  return (
    <MainStyled>
      <div className="main__container">
        <CTA />
        <Login />
      </div>
    </MainStyled>
  );
}

export default Main;
