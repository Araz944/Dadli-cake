//dependencies

//components
import Type from "../Typewriter";

//utils
import Recently from "../utils/Recently.utils";

//includes (images)
import chefHat from "../images/Chef-Hat-2-icon.png";
import candy from "../images/Holidays-Christmas-Candy-icon.png";
import cupcake from "../images/Food-Cupcake-icon.png";
import cake from "../images/Food-Birthday-Cake-icon.png";
import doughnut from "../images/Food-Doughnut-icon.png";
import croissant from "../images/Croissant-icon.png";
import cookie from "../images/Food-Cookies-icon.png";
import logoTransparent from "../images/logo_transparent.png";

//includes (.css files)
import "../style/index.css";
import "../style/media-Mobile-S-320px.css";
import "../style/media-Mobile-M-360px.css";
import "../style/media-Mobile-M-375px.css";
import "../style/media-Mobile-L-384px.css";
import "../style/media-Mobile-L-414px.css";
import "../style/media-Mobile-Landscape-480px.css";
import "../style/media-Mobile-Landscape-568px.css";
import "../style/media-Mobile-Landscape-592px.css";
import "../style/media-Mobile-Landscape-640px.css";
import "../style/media-Mobile-Landscape-667px.css";
import "../style/media-Mobile-Landscape-736px.css";
import "../style/media-Mobile-Landscape-800px.css";
import "../style/media-4K-2560px.css";

const Homepage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="fixedBg bg1">
          <img
            src={logoTransparent}
            alt="logo transparent"
            className="logoTransparent"
          />
        </div>

        <div className="scrollBg">
          <div className="menuContainer">
            <img src={chefHat} alt="chef hat" />
            <h1 className="menuWord">Menu</h1>
          </div>
          <div className="flexMenuContainer">
            <div className="flexItems">
              <h1>01</h1>
              <h2>high quality</h2>
              <p>
                We serve the highest quality of prepared meals at a great value,
                in a home-like and friendly environment. Lorem ipsum dolor sit
                amet consectetur adipiscing nullam.
              </p>
            </div>
            <div className="flexItems">
              <h1>02</h1>
              <h2>best recipes</h2>
              <p>
                We use cookies and similar tracking and storage technologies on
                our site to enhance your user experience. Lorem ipsum dolor sit
                amet consectetur adipiscing nullam.
              </p>
            </div>
            <div className="flexItems">
              <h1>03</h1>
              <h2>real taste</h2>
              <p>
                A light, sour wheat dough with roasted walnuts and freshly
                picked rosemary, thyme, poppy seeds, parsley and sage. Lorem
                ipsum dolor sit amet consectetur adipiscing nullam.
              </p>
            </div>
          </div>
        </div>

        <div className="fixedBg bg2">
          <section className="typeSection">
            <Type />
          </section>
          <div id="imageHolder"></div>
          <div className="slide slideImage1"></div>
          <div className="slide slideImage2"></div>
          <div className="slide slideImage3"></div>
        </div>

        <div className="scrollBg">
          <div className="recentlyContainer">
            <img src={chefHat} alt="chef hat" />
            <h1 className="recentlyWord">Recently</h1>
          </div>
          <div className="flexRecentlyContainer">
            <Recently />
          </div>
        </div>

        <div className="fixedBg bg3">
          <section className="gridServicesContainer">
            <div>
              <img src={candy} alt="candies icon" />
              <h3>Candies</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
            <div>
              <img src={cupcake} alt="cupcake icon" />
              <h3>Cupcakes</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
            <div>
              <img src={cake} alt="cake icon" />
              <h3>Cakes</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
            <div>
              <img src={doughnut} alt="doughnut icon" />
              <h3>Doughnuts</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
            <div>
              <img src={croissant} alt="croissants icon" />
              <h3>Croissants</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
            <div>
              <img src={cookie} alt="cookies icon" />
              <h3>Cookies</h3>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Homepage;
