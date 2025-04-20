import "./Home.css";
import robotImage from "../Images/robot.jpg";

function Home() {
  return (
    <>
      <div className="container">
        <div className="div1">
            <div>
          <div className="heading">
            <h1>
              Hi, I'm <span className="name">Ashish</span>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            inventore earum culpa sequi nostrum excepturi perspiciatis
            asperiores ratione aut, ut recusandae laudantium amet fugit suscipit
            voluptas labore consequuntur quas optio delectus natus quidem quis.
          </p>
          </div>
        </div>
        <div className="div2">
          <div className="img">
          <img src={robotImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
