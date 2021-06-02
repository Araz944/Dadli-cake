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

const Contacts = () => {
  return (
    <footer>
      <div className="footerSVG" id="contacts">
        <div className="contactsContainer">
          <h1 className="contactsWord">Contacts</h1>
          <div className="flexContactsContainer">
            <span className="firstSpan">
              <p>Instagram</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Whatsapp</p>
            </span>
            <span className="secondSpan">
              <div className="instagramIcon"></div>
              <div className="emailIcon"></div>
              <div className="phoneIcon"></div>
              <div className="whatsappIcon"></div>
            </span>
            <span className="thirdSpan">
              <a href="#">instagram.profile</a>
              <a href="#">email@address.com</a>
              <a href="#">+(994) 50 437 17 77</a>
              <a href="#">+(994) 50 437 17 77</a>
            </span>
          </div>
        </div>
        <p className="copyright">Copyright &copy; 2021. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contacts;
