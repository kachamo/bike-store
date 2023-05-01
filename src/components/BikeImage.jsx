import wheel from "../assets/wheel01.png"
import gear from "../assets/gear.jpg"
import tyre from "../assets/tyre.jpg"
import "./Footer.css"

function BikeImage() {
  return (
    <div className="images">
            <img src={wheel} alt={`Wheel of bike`} />
            <img src={gear} alt={`Gear of bike`} />
            <img src={tyre} alt={`Tyre of bike`} />
     </div>
  )
}

export default BikeImage