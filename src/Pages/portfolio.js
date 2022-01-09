import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import PortfolioBox from "../Components/PortfolioBox";
//import aslImg from "../images/ASLRocket.jpg";
//import aslImg from "../asl.jpg";
import db from "../firebase";

export default function Portfolio() {
  const [projectInfo, setProjectInfo] = useState([]);
  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    db.collection("projects").onSnapshot((snapshot) => {
      setProjectInfo(snapshot.docs);
    });
  }, []);

  // useEffect(() => {
  //   for (let i = 0; i < 8; i++) {
  //     console.log(count);
  //     if (count < 2) setCount(count + 1);
  //   }
  // }, [count]);

  // for (let i = 0; i < 8; i++) {
  //   setCount(count + 1);
  // }
  // let newCar = {
  //   name: "Benz" + i,
  // };

  // let updatedCarsArray = [...cars, newCar];

  // setCars(updatedCarsArray);
  // };

  // useEffect(() => {
  //   for (let i = 0; i < 3; i++) {
  //     const newCar = {
  //       name: "Benz",
  //       type: "sedan",
  //     };

  //     const updatedCarsArray = [...cars, newCar];

  //     setCars(updatedCarsArray);
  //   }
  //   console.log(cars);
  // }, []);

  // useEffect(() => {
  //   for (let i = 0; i < 3; i++) {
  //     const rowOneInfo = [...rowOne, { title: "Hello" }]; // new array need to update
  //     setRowOne(rowOneInfo);
  //     // let file = { title: "Hello" + i };
  //     // setRowOne([file]);
  //   }
  //   console.log(rowOne);
  // }, []);

  //console.log(projectInfo);

  return (
    <div className="mainContent">
      <div className="textIntro wrapper">
        <h1 className="typing-demo">
          Hello World!
        </h1>
        <h1>
          My name is Michael Wright.
        </h1>
        <p id="about-me">
          I am a 3rd year Computer Science student at Sheridan College inerested in web and mobile application development. I am passionate about creating beautiful and intuitive user experiences.<br/>
        </p>
        <div>
          <img src="../linkedin.png" alt="resume" />
        </div>
        <p id="about-me">
          Check out some of of my recent projects:
        </p>
      </div>
      <div className="project-holder">
        {projectInfo.map((info, i) => {
          if (i < 3) {
            console.log(info.data().title);
            // console.log(info.data().icons);
            return (
              <PortfolioBox
                thumbnail={`url(${info.data().thumbnail})`}
                id={i}
                title={info.data().title}
                desc={info.data().body}
                icons={info.data().icons}
              />

              // <div
              //   className="boxBg"
              //   style={{
              //     backgroundImage: `url(${info.data().thumbnail})`,
              //     backgroundPosition: "center",
              //     backgroundSize: "cover",
              //     backgroundRepeat: "no-repeat",
              //   }}
              // >
              //   <div className="gradient">

              //   </div>
              // </div>
            );
          }
        })}
      </div>
      <div className="project-holder">
        {projectInfo.map((info, i) => {
          if (i > 2 && i < 6) {
            // console.log(info.data().title);
            return (
              <PortfolioBox
                thumbnail={`url(${info.data().thumbnail})`}
                id={i}
                title={info.data().title}
                desc={info.data().body}
                icons={info.data().icons}
              />

              // <div
              //   className="boxBg"
              //   style={{
              //     backgroundImage: `url(${info.data().thumbnail})`,
              //     backgroundPosition: "center",
              //     backgroundSize: "cover",
              //     backgroundRepeat: "no-repeat",
              //   }}
              // >
              //   <div className="gradient">
              //     <PortfolioBox
              //       id={i}
              //       title={info.data().title}
              //       desc={info.data().body}
              //     />
              //   </div>
              // </div>
            );
          }
        })}
      </div>
    </div>
  );
}