import "./style/index.css";
import "./style/media-Mobile-S-320px.css";
import "./style/media-Mobile-M-360px.css";
import "./style/media-Mobile-M-375px.css";
import "./style/media-Mobile-L-384px.css";
import "./style/media-Mobile-L-414px.css";
import "./style/media-Mobile-Landscape-480px.css";
import "./style/media-Mobile-Landscape-568px.css";
import "./style/media-Mobile-Landscape-592px.css";
import "./style/media-Mobile-Landscape-640px.css";
import "./style/media-Mobile-Landscape-667px.css";
import "./style/media-Mobile-Landscape-736px.css";
import "./style/media-Mobile-Landscape-800px.css";
import "./style/media-4K-2560px.css";
import Typewriter from "typewriter-effect";

let header1 = "<h3>Hello World</h3>";
let text1 =
  "<p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>";
// let length1 = text1.length - 7;

let header2 = "<h3>Wedding Cakes</h3>";
let text2 =
  "<p>There are few things we appreciate more than a decadent wedding cake—both in taste and style. Dessert trends come and go, but nothing takes the place of a delicious cake that satisfies more than one of your senses.</p>";

let header3 = "<h3>Birthday Cakes</h3>";
let text3 =
  "<p>Write wishes on birthday cake to express your concern with them. Say thank you for their appearance in your life by text birthday cake.</p>";

function Type() {
  return (
    <>
      <div className="typing">
        <Typewriter
          options={{
            loop: true,
            cursorClassName: "noCursor",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(header1)
              .pauseFor(500)
              .changeDelay(1)
              .typeString(text1)
              .pauseFor(5000)
              // .changeDeleteSpeed(1)
              // .deleteChars(length1)
              // .stop()
              // .deleteAll('natural')
              .deleteAll(1)
              .pauseFor(500)
              .changeDelay("natural")
              .typeString(header2)
              .pauseFor(500)
              .changeDelay(1)
              .typeString(text2)
              .pauseFor(5000)
              .deleteAll(1)
              .pauseFor(500)
              .changeDelay("natural")
              .typeString(header3)
              .pauseFor(500)
              .changeDelay(1)
              .typeString(text3)
              .pauseFor(5000)
              .deleteAll(1)
              .start();
          }}
        />
      </div>
    </>
  );
}

export default Type;
