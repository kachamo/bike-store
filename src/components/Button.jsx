import PropTypes from 'prop-types';
import "./Button.css"

function Button(props) {
  const { onClick, text } = props;
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
