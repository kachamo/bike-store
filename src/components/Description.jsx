import PropTypes from "prop-types";
import "./Description.css";

function Description(props) {
  return (
    <div className="description-container">
      <div className="title">{props.title}</div>
      <p className="description">{props.description}</p>
      
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Description.defaultProps = {
  title: "Default title",
  description: "Default description",
};

export default Description;