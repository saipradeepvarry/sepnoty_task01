import styled from "styled-components";

export const TotalContainer = styled.div`
    height: 100vh;
    background-size: cover;
    `;
  
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  `;
  
export const AdvancedServices = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    width: 500px;
    border: 150px;
    padding: 100px;
  `;
  
  export const OurName = styled.span`
    color: white;
    background-color: #3d3d3f;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    margin-right: 5px;
    font-family: 'roboto';
  `;
  
  export const Headline  = styled.h1`
    font-family: "Serif";
  `
  
  export const Services = styled.span`
    color: blue;
    font-family:'roboto';
  `;
  export const ButtonSection = styled.div`
  .button-section 
    display: flex;
    flex-direction: row;
  `;
 export const ParagraphTwo = styled.p`
    font-size: 15px;
    padding: 5px;
    margin: 5px;
  `
  export const ButtonOne = styled.button`
    background-color: #5367ab;
    color: white;
    height: 40px;
    width: 180px;
    font-size: 20px;
    font-family: bold;
    border: 5px;
    border-radius: 30px;
  `
export const Modules = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-width:2px;
    box-shadow:black;
    height: 600px;
`
export const Wapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    margin: -100px;
`
export const Slider  = styled.div`
    height: 150px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 90%;
`;
  export const SlideTrack  = styled.div`
    -webkit-animation: scroll 30s linear infinite;
    animation: scroll 30s linear infinite;
    display: flex;
    width: calc(250px * 14);
`
  // .slide {
  //   height: 200px;
  //   width: 350px;
  // }
  
  // .slide img {
  //   width: auto;
  //   height: 100px;
  //   margin-right: 20px;
  //   margin-left: 20px;
  //   border-radius: 10px;
  //   border-width: 0px;
  // }
  
  // @-webkit-keyframes scroll {
  //   0% {
  //     transform: translateX(0);
  //   }
  
  //   100% {
  //     transform: translateX(calc(-250px * 7));
  //   }
  // }
  
  // @keyframes scroll {
  //   0% {
  //     transform: translateX(0);
  //   }
  
  //   100% {
  //     transform: translateX(calc(-250px * 7));
  //   }
  // }
  export const FinalContainer = styled.div`
    background-color: #f2f2f2;
    border-radius: 20px;
    height: 400px;
    width: 1200px;
    background-size: cover;
    display: flex;
    flex-direction: row;
    margin-left: 8%;
`
export const InnerContainer = styled.div`
    background-color: white;
    height: 250px;
    width: 500px;
    padding: 5px;
    margin-top:100px;
    border-radius: 20px;
    margin-left: 25px;
`
export const HadingFour = styled.h1`
    text-align: center;
  `
export const FinalPara = styled.p`
    text-align: center;
`
export const FinalImg = styled.div`
    padding: 20px;
    margin-top: 20px;
    height: 350px;
    width: 550px;
  `
  export const FinalImg2 = styled.img`
  padding: 20px;
  margin-top: 20px;
  height: 350px;
  width: 550px;
`
export const Para = styled.p`
font-family:"Roboto";
color:black;
`;