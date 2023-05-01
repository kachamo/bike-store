import Description from "../Description"
import "./HomeScreen.css"
import Background from "../BackgroundImages";
import bike01 from "../../assets/bike-01w.jpg"
import Footer from "../Footer";
import Badge from "../Badge";
const HomeScreen = () => {
    return (
      <Background imageUrl={bike01}>
        <Badge />
        <Description
          title="Specialzed Allez E5 Race Bike"
          description="The Allez E5's premium allay frame is built for versatility, combining sturdy, confident handling, with the rocket-like feeling of a race bike."
        />
        <Footer bikeId= "bike001"/>
      </Background>
    );
  }
  

export default HomeScreen