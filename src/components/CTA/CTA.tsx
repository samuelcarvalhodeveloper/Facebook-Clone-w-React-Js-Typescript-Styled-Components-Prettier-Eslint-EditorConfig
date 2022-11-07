import CTAStyled from "./Styled";
import FacebookLogo from "../../assets/img/FacebookLogo.svg";

function CTA() {
  return (
    <CTAStyled>
      <h1 className="cta__title">
        <img
          src={FacebookLogo}
          alt="FacebookL Logo"
          className="cta__logo"
        />
      </h1>
      <h2 className="cta__label">
        Connect with friends and the world around you on Facebook.
      </h2>
    </CTAStyled>
  );
}

export default CTA;
