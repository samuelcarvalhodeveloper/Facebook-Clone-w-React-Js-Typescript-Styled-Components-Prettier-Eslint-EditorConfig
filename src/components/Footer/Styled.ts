import styled from "styled-components";

const FooterStyled = styled.footer`
  height: 100%;
  max-width: 107rem;
  padding: 0 4rem;
  margin: 0 auto;

  .footer__lang {
    border-bottom: .1rem solid #dddfe2;
    padding: .8rem 0;
    margin: 2rem 0 .8rem 0;

    .footer__langlist{
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      gap: 1rem;

      .footer__langlist__item {
        list-style-type: none;

        .footer__select {
          text-decoration: none;
          color: #737373;
          font-size: 1.2rem;
        }

        .footer__select:hover {
          text-decoration: underline;
        }

        .footer__plus {
          padding: 1rem .8rem .9rem .8rem;
          display: flex;
          justify-content: center;
          font-size: 2rem;
          line-height: 0;
          border: .1rem solid #ccd0d5;
          background: #f5f6f7;
          color: #4b4f56;
          border-radius: .2rem;
          cursor: pointer;
        }

        .footer__plus:active {
          background: #dddfe2;
        }
      }
    }
  }

  .footer__more {

    .footer__link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: row wrap;

      .footer__link__item {
        list-style-type: none;
        margin: 0 2rem .5rem 0;

        .footer__redirect {
          color: #8a8d91;
          text-decoration: none;
          font-size: 1.4rem;
        }

        .footer__redirect:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer__copyright {
    margin: 2rem 0 5rem 0;

    .footer__copyright__text {
      font-size: 1.4rem;
      color: #737373;
    }
  }
`;

export default FooterStyled;
