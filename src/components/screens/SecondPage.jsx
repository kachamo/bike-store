import Description from "../Description"
import "./HomeScreen.css"
import Background from "../BackgroundImages";
import bike02 from "../../assets/bike-03p.jpg"
import Footer from "../Footer";
import Badge from "../Badge";

const SecondPage = () => {
  return (
    <Background imageUrl={bike02}>
      <Badge />
      <Description
        title="Welcome to our Bike Store"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mauris in nulla laoreet lobortis vitae eu arcu."
      />
      <Footer bikeId= "bike001"/>
    </Background>
  );
}

export default SecondPage