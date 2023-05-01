import "./Footer.css";
import PropTypes from 'prop-types';
import bikesData from './data/bikesData.json'
import BikeImage from "./BikeImage";

function Footer(props) {

  const bikeData = bikesData.find((bike) => bike.id === props.bikeId);


  return (
    <div className='footer'>
      <div className="footer-title">
        <h1>Details</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h1>Size</h1>
          <p>{bikeData.size}</p>
        </div>
        <div className="grid-item">
          <h1>Brakes</h1>
          <p>{bikeData.brakes}</p>
        </div>
        <div className="grid-item">
          <h1>Shift Levels</h1>
          <p>{bikeData.shiftLevels}</p>
        </div>
        <div className="grid-item">
          <h1>Crankset</h1>
          <p>{bikeData.crankset}</p>
        </div>
        <div className="grid-item">
          <h1>Chain</h1>
          <p>{bikeData.chain}</p>
        </div>
        <div className="grid-item">
          <h1>Bars</h1>
          <p>{bikeData.bars}</p>
        </div>
        <div className="grid-item">
          <h1>Wheels</h1>
          <p>{bikeData.wheels}</p>
        </div>
        <div className="grid-item">
          <h1>Tyres</h1>
          <p>{bikeData.tyres}</p>
        </div>
      </div>
      <div className="images">
        <BikeImage id ="01"/>
      </div>
    </div>
  );
}

Footer.propTypes = {
  bikeId: PropTypes.string.isRequired,
};

export default Footer;
