import TokoDizital from "../assets/Experiences/TOKO DIZITAL.png"
import BemFia from "../assets/Experiences/BEM FIA.png"
import Berdonasi from "../assets/Experiences/BERDONASI.png"
import FinEd from "../assets/Experiences/FIN ED.png"
import KonserKan from "../assets/Experiences/KONSERKAN.png"
import Bangkit from "../assets/Experiences/BANGKIT.png"
import BemFasilkom from "../assets/Experiences/BEM FASILKOM.png"
import KMK from "../assets/Experiences/KMK.png"
import Compfest from "../assets/Experiences/COMPFEST.png"
import PMB from "../assets/Experiences/PMB.png"
import Perak from "../assets/Experiences/PERAK.png"
import $ from "jquery";
import { useEffect } from "react"


function Experiences() {

    const expandPanel = (index) => {
        const panel  = document.getElementsByClassName("panel")
        const targetPanel = panel[index];
        if (targetPanel.classList.contains("active")) {
            targetPanel.classList.remove("active");
            $(targetPanel).slideUp();
        }
        else {
            targetPanel.classList.add("active");
            $(targetPanel).slideDown();
        }
    }

    useEffect(() => {
        const allPanels = $(document.getElementsByClassName("panel"))
        allPanels.slideUp(0, () => {
            allPanels.removeClass("not-ready");
        });
    }, []);

    return (
        <div class="accordion-page" id="experiences">
        {/* WORK */}
        <div class="work">
            <h2>WORKING EXPERIENCES</h2>
            <div class="main-accordion">
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(0)}>
                        <div>
                            <img src={TokoDizital}/>
                        </div>
                        <div>
                            <span class="title">Toko Dizital Intern</span><br/>
                            <span class="subtitle">UI/UX Designer and Machine Learning Engineer</span><br/>
                            <span class="date">May 2023 - July 2023</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>As a Toko Dizital intern, I have developed a plant disease detection application which is a comprehensive digital solution designed to support sustainable agriculture, empower farmers with accurate disease identification, and provide valuable insights for effective disease management.</p>
                        <li>Created mockups and interactive prototypes for a plant disease detection application</li>
                        <li>Developed and implemented a machine learning model for plant diseases detection</li>
                        <a href="https://www.figma.com/proto/UoMqrbbWroGLMcg5tOYI8z/Aplikasi-Pendeteksi-Penyakit-Tanaman---Toko-Dizital?page-id=0%3A1&type=design&node-id=30-53&viewport=-305%2C-799%2C0.22&scaling=min-zoom&starting-point-node-id=30%3A53&show-proto-sidebar=1" class="button" target="_blank">Prototype</a>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(1)}>
                        <div>
                            <img src={BemFia}/>
                        </div>
                        <div>
                            <span class="title">Student Executive Board of the Faculty of Administrative Science Website</span><br/>
                            <span class="subtitle">UI/UX Designer</span><br/>
                            <span class="date">March 2023 - Present</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>The Student Executive Board of the Faculty of Administrative Science requires a website to facilitate the registration process of Student Executive Board 2023 members.</p>
                        <li>Conducted research and gathered user requirements to understand the target audience’s needs</li>
                        <li>Created mockups and interactive prototypes for the Student Executive Board website</li>
                        <li>Conducted usability testing and gathered feedback from users to iteratively refine the design and enhance the user experience</li>
                        <div class="button-group">
                            <a href="https://bem-fia.herokuapp.com/" class="button" target="_blank">Website</a>
                            <a href="https://www.figma.com/proto/gcizzmml91Evb8hxlZh4jS/BEM-FIA?page-id=0%3A1&type=design&node-id=313-351&viewport=265%2C-552%2C0.13&scaling=contain&starting-point-node-id=313%3A351" class="button" target="_blank">Prototype</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* PROJECT */}
        <div class="project">
            <br></br>
            <h2>PROJECT EXPERIENCES</h2>
            <div class="main-accordion">
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(2)}>
                        <div>
                            <img src={Berdonasi}/>
                        </div>
                        <div>
                            <span class="title">Berdonasi Mobile Application</span><br/>
                            <span class="subtitle">UI/UX Designer and FrontEnd Engineer</span><br/>
                            <span class="date">June 2023</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>Berdonasi is a platform that enables individuals to provide monetary or product donations to those in need.
                            One of the advantages of Berdonasi is the ability to donate essential products such as groceries.
                        </p>
                        <li>Created wireframes, mockups, and interactive prototypes for a donation application</li>
                        <li>Designed a logo for the mobile application interface</li>
                        <li>Conducted usability testing and gathered user feedback to iteratively refine the design and enhance the user experience</li>
                        <li>Develop a mobile application using the Flutter framework</li>
                        <a href="https://www.figma.com/proto/ZnWze7wE2BhPng0YjLIg40/Berdonasi---Proyek-Perangkat-Lunak?page-id=1%3A12&type=design&node-id=802-1643&viewport=-3934%2C-770%2C0.22&scaling=min-zoom&starting-point-node-id=802%3A1643" class="button" target="_blank">Prototype</a>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(3)}>
                        <div>
                            <img src={FinEd}/>
                        </div>
                        <div>
                            <span class="title">Fin-Ed Mobile Application</span><br/>
                            <span class="subtitle">UI/UX Designer</span><br/>
                            <span class="date">December 2022</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>Fin-Ed is an online course application that provides learning materials on financial management.
                            This application is created in response to the low financial literacy index of 38.03% and the low financial inclusion index of 76.19% in Indonesia as of 2019.</p>
                        <li>Created a report to investigate the lack of learning resources on finance and investment in the education curriculum in Indonesia</li>
                        <li>Created mockups and interactive prototypes for a financial e-learning application</li>
                        <a href="https://www.figma.com/proto/0t8GP8z5Iypr8uQoDBt9ph/Fin-Ed---Pengajaran-Berbantuan-Komputer?page-id=53%3A1982&type=design&node-id=213-4&viewport=590%2C649%2C0.21&scaling=min-zoom&starting-point-node-id=213%3A4" class="button" target="_blank">Prototype</a>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(4)}>
                        <div>
                            <img src={KonserKan}/>
                        </div>
                        <div>
                            <span class="title">KonserKan Mobile Application</span><br/>
                            <span class="subtitle">UI/UX Designer and Researcher</span><br/>
                            <span class="date">June 2022</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>KonserKan is an application for purchasing live concert tickets and organizing live concerts.</p>
                        <li>Conducted Value Proposition Canvas analysis to define and refine the interaction system</li>
                        <li>Conducted user research to gain insights into user needs, preferences, and behaviors</li>
                        <li>Created user journey maps to visualize and understand the end-to-end user experience</li>
                        <li>Applied information architecture and design principles for optimal usability</li>
                        <li>Conducted usability testing to refine the system based on user feedback</li>
                        <li>Created mockups and interactive prototypes for a live concert application</li>
                        <a href="https://www.figma.com/proto/22qxtJwMPAS259KwTv70ON/KonserKan---Sistem-Interaksi?page-id=133%3A77&type=design&node-id=128-1840&viewport=533%2C773%2C0.31&scaling=min-zoom&starting-point-node-id=128%3A1840" class="button" target="_blank">Prototype</a>
                    </div>
                </div>
            </div>
        </div>

        {/* LEADERSHIP */}
        <div class="activities">
            <br></br>
            <h2>ACTIVITIES AND LEADERSHIP EXPERIENCES</h2>
            <div class="main-accordion">
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(5)}>
                        <div>
                            <img src={Bangkit}/>
                        </div>
                        <div>
                            <span class="title">Bangkit Academy 2023 By Google, Gojek, Tokopedia, & Traveloka</span><br/>
                            <span class="subtitle">Machine Learning Path</span><br/>
                            <span class="date">February 2023 - July 2023</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>Independent Machine Learning Developer Study activities include individual learning and a final team project. In individual learning, each participant will take online classes through learning modules on Dicoding Academy and Coursera.</p>
                        <li>Explored a comprehensive range of machine learning courses</li>
                        <li>Developed essential soft skills to enhance interpersonal communication, leadership, and teamwork abilities</li>
                        <br></br>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(6)}>
                        <div>
                            <img src={BemFasilkom}/>
                        </div>
                        <div>
                            <span class="title">Student Executive Board of the Faculty of Computer Science</span><br/>
                            <span class="subtitle">Staff of Research and Strategic Action</span><br/>
                            <span class="date">March 2021 - January 2023</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>The Department of Research and Strategic Action is a department that plays a crucial role as the driving force behind the student movement in the Faculty of Computer Science, University of Indonesia. This department is focused on creative studies to popularize issues and is responsive to various movements and tangible actions as a form of contribution and response to social and political issues at the faculty, university, national, and international levels.</p>
                        <li>Designed an infographics content about social politics which was viewed by 5500+ until 6000+ followers</li>
                        <li>Responsible for the planning of UI Gerak Bersama event held by the Faculty of Law, University of Indonesia</li>
                        <br></br>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(7)}>
                        <div>
                            <img src={KMK}/>
                        </div>
                        <div>
                            <span class="title">Catholic Student Organization of the Faculty of Computer Science</span><br/>
                            <span class="subtitle">Staff of Event & Person in Charge of Event</span><br/>
                            <span class="date">February 2021 - December 2022</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>The Catholic Student Organization serves for Catholic students at the Faculty of Computer Science, University of Indonesia, to build relationships and support each other in their studies and personal lives.</p>
                        <li>Organized an events for the Catholic Student Organization</li>
                        <li>Guide the staff for planning and technical issue of the events</li>
                        <a href="https://drive.google.com/file/d/1KW2Gp-q19uK-LyDTrXJzDCz2tBuJcuyG/view?usp=sharing" class="button" target="_blank">Certificate</a>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(8)}>
                        <div>
                            <img src={Compfest}/>
                        </div>
                        <div>
                            <span class="title">COMPFEST</span><br/>
                            <span class="subtitle">Staff of Sponsorship & Staff of Playground with Job and Intern Fair</span><br/>
                            <span class="date">March 2021 - November 2022</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>COMPFEST is the largest annual Technology Science event organized by the students of the Faculty of Computer Science, University of Indonesia.</p>
                        <li>Find a new exhibitors for Computer Festival 14</li>
                        <li>Managed the planning and technical issue of Playground events</li>
                        <br></br>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(9)}>
                        <div>
                            <img src={PMB}/>
                        </div>
                        <div>
                            <span class="title">Freshman Orientation of the Faculty of Computer Science</span><br/>
                            <span class="subtitle">Staff of Event</span><br/>
                            <span class="date">July 2021 - November 2021</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>Freshman Orientation is an event for new students to familiarize themselves with the academic journey at the Faculty of Computer Science.
                            Freshman Orientation consists of a series of activities that introduce the values and culture that new students will embrace.</p>
                        <li>Made schedule, technical field, and technical instruction</li>
                        <li>Organized an events for the new students of the Faculty of Computer Science</li>
                        <br></br>
                    </div>
                </div>
                <div class="item">
                    <button class="accordion" id="accordion" onClick={() => expandPanel(10)}>
                        <div>
                            <img src={Perak}/>
                        </div>
                        <div>
                            <span class="title">PERAK</span><br/>
                            <span class="subtitle">Staff of Competitive Games</span><br/>
                            <span class="date">February 2021 - May 2021</span>
                        </div>
                    </button>
                    <div class="panel  not-ready" id="panel">
                        <p>PERAK is the largest internal event in the Faculty of Computer Science, University of Indonesia. The purpose of PERAK is to strengthen the relationships among its members.</p>
                        <li>Managed Valorant match which participated by 20+ teams</li>
                        <li>Made a schedule and a tournament bracket for Valorant match</li>
                        <li>Responsible as a caster and live streaming for Valorant match</li>
                        <a href="https://drive.google.com/file/d/1vZ4cugc6mXCmw9eYk8mijdDqDC0PeM8G/view?usp=sharing" class="button" target="_blank">Certificate</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
  
export default Experiences;