// import "../../styles/css/Header.css";
import banner from "../../assets/images/title_image.png"

function Header() {
  return (
    <header id="header">
        <section id="banner">
            <img src={banner} alt="Banner text image" />
        </section>
        <section id="difficulty-meter">
            <h2>Add some monsters to begin!</h2>
        </section>
    </header>
  );
}

export default Header;