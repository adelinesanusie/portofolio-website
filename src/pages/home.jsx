import ProfilePicture from "../assets/profile-picture2.jpg"

function Home() {
    
    return (
        <div class="home" id="home">
            <div class="container-home">
                <div class="title-home">
                    <h3>THIS IS ME</h3>
                    <h1>ADELINE SANUSIE</h1>
                    <p>I’m an undergraduate student from University of Indonesia, majoring in Computer Science.
                        I'm deeply passionate about drawing, photography, and sports.
                        I'm currently actively involved as a UI/UX designer and front-end developer,
                        dedicated to creating captivating digital experiences that seamlessly blend aesthetics and functionality.
                    </p>
                </div>
                <div class="profile">
                    <img src={ProfilePicture}/>
                </div>
            </div>
        </div>
    );
}
  
export default Home;