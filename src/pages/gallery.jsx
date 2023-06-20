import Spiderman from "../assets/Spiderman.jpg"
import Thor from "../assets/Thor.jpg"
import Marvel from "../assets/Marvel.jpg"

function Gallery() {
    
    return (
        <div class="gallery" id="gallery">
        <div class="container-gallery">
            <div class="title-gallery">
                <h2>DRAWING COLLECTIONS</h2>
                <p>
                </p>
            </div>
            <div class="draw">
                <img src={Spiderman}/>
                <img src={Thor}/>
                <img src={Marvel}/>
            </div>
        </div>
        </div>
    );
}
  
export default Gallery;