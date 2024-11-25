import "../assets/css/Footer.css"
import logo from "../assets/images/Behind_PXL_orgi.png"
export default function Footer() {
    return (
        <div className="FooterContainer">
            <div className="LeftContent">
                <div className="LogoContainers">
                    <img className="logos" alt="react-logo" src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" />
                    <img className="logos" alt="react-logo" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff" />
                    <img className="logos" alt="react-logo" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" />
                    <img className="logos" alt="react-logo" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
                    <img className="logos" alt="react-logo" src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff" />
                    <img className="logos" alt="react-logo" src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff" />
                </div>
            </div>
            <div className="CenterContent">
                <p className="text">
                    This React project explores the library <span>react-virtualized</span>, and how to optimize
                    rendering of thousands of data in realtime. The data rendered is generated using
                    a library called <span>faker</span>.
                </p>
            </div>
            <div className="RightContent">
                <div className="logoContainer">
                    <a className="logo" target="https://github.com/ashikrai">
                        <img alt="github_logo" src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"/>
                    </a>
                    <a className="logo" target="https://medium.com/@ashikthulungrai7">
                        <img alt="Medium_logo" src="https://img.shields.io/badge/Medium-%23000000.svg?logo=medium&logoColor=white"/>
                    </a>
                    <a className="logo" target="https://www.linkedin.com/in/ashik-rai/">
                        <img alt="linked_logo" src="https://img.shields.io/badge/Linkedin-%230077B5.svg?logo=linkedin&logoColor=white"/>
                    </a>
                    <a className="logo" target="https://www.instagram.com/behind_pixl/">
                        <img alt="instagram_logo" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white"/>
                    </a>
                    <a className="logo">
                        <img src={logo} alt="Logo" className="logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
