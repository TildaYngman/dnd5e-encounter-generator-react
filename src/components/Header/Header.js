import banner from "../../assets/images/title_image.png";
import { updateDifficultyIndicator } from "../../scripts/rendering"


function Header(props) {
  const diffMessage = updateDifficultyIndicator(props);

  return (
    <header id="header">
        <section id="banner">
            <img src={banner} alt="Banner text" />
        </section>
        <section id="difficulty-meter">
            {diffMessage}
        </section>
    </header>
  );
}

export default Header;