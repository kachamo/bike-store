import Description from "../Description"
import "./HomeScreen.css"
import Background from "../BackgroundImages";
import bike04 from "../../assets/bike-02o.jpg"
import Footer from "../Footer";
import Badge from "../Badge";
const ForthPage = () => {
  return (
    <Background imageUrl={bike04}>
      <Badge />
      <Description
        title="Welcome to our Bike Store"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mauris in nulla laoreet lobortis vitae eu arcu."
      />
      <Footer bikeId= "bike001"/>
    </Background>
  );
}

export default ForthPage