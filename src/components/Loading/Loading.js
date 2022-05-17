import loadingImage from "../../assets/images/dragon.png"

function Loading() {
  return (
    <section id="loading-screen">
        <img src={loadingImage} alt="Large dragon" />
        <h1>Retrieving monsters...</h1>
    </section>
  );
}

export default Loading;