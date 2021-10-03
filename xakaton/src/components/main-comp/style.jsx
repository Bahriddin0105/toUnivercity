import styled from 'styled-components';

const Container = styled.div`
  &{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#ffffff, #00d4ff);
    .slider{
      transition: all .8s ease-out;
    }
    .box{
      width: 1100px;
      height: 700px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      overflow: hidden;
    }
    .place{
      width: 1000px;
      height: 600px;
      background: #bcfcfc;
      box-shadow: 5px 15px 30px rgb(1, 134, 134);
      border-radius: 20px;
      overflow: hidden;
      margin: 30px 20px 80px 20px;
      .scrol{
        height: 10px;
        background: rgba(17, 255, 255, 0.842);
        border-radius: 20px 20px 0 0;
        div{
          background: rgb(30, 240, 240);
          width: 500px;
          height: 10px;
        }
      }
      .question{
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        p{
          font-weight: bold;
        }
        h5{
          font-size: 24px;
          width: 70%;
        }
      }
      hr{
        border: 0;
        height: 1px;
        box-shadow:inset 0 1px 3px rgba(50, 153, 153, 0.719), 0 -1px 1px rgba(50, 153, 153, 0.719), 0 1px 3px rgb(229, 248, 248), inset 0 -1px 2px rgb(227, 255, 255) ;
      }
      .variants{
        height: 439px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
const Variant = styled.div `
  &{
    display: flex;
    align-items: center;
    width: 450px;
    height: 60px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .4);
    margin: 15px 0;
    padding: 0 20px;
    cursor: pointer;
    transition: all .3s linear;
    &:hover{
      background: rgba(48, 255, 255, 0.842);
      color: #fff;
      .order{
        /* background: #00355f; */
        /* background: #181847; */
        background: #090979;
        color: #fff;
      }
    }
    .order{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 20px;
      background: rgba(0, 255, 255, 0.178);
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .3s linear;
    }
    span{
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export  {Container, Variant};


// background: #1A2980;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to top, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to top, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
