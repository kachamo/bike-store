import PropTypes from "prop-types";

function Background({ imageUrl, children }) {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return <div style={styles}>{children}</div>;
}

Background.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Background;
