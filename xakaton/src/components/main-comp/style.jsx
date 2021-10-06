import styled from 'styled-components';

const Container = styled.div`
  &{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#ffffff, #0055ff);
    .slider{
      transition: all .8s ease-out;
      .d-flex{
        height: 500px;
        .btn{
          width: 300px;
          height: 80px;
          border-radius: 20px;
          font-size: 22px;
          animation: btn 1.5s infinite;
        }
      }
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
    color: #0a0a4e;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .4);
    margin: 15px 0;
    padding: 0 20px;
    cursor: pointer;
    transition: all .3s linear;
    &:hover{
      background: #0099ff;
      color: #fff;
      .order{
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
