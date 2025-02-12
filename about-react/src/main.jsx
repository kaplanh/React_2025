import { createRoot } from "react-dom/client";
import "./App.css";
const rootElement = document.querySelector("#root");

function App() {
    return (
        <>
            <Header />
            <TeamMembers />
        </>
    );
}

function Header() {
    return (
        <div className="title">
            <h1>Team Members</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
}

function TeamMembers() {
    return (
        <ul className="team">
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            {/* <li className="member co-funder">
                <div className="thumb">
                    <img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120" />
                </div>
                <div className="description">
                    <h3>Chris Coyier</h3>
                    <p>
                        Chris is a front-end developer and designer. He writes a
                        bunch of HTML, CSS, and JavaScript and shakes the
                        pom-poms for CodePen.
                        <br />
                        <a href="https://codepen.io/chriscoyier/">
                            @chriscoyier
                        </a>
                    </p>
                </div>
            </li>
            <li className="member co-funder">
                <div className="thumb">
                    <img src="https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120" />
                </div>
                <div className="description">
                    <h3>Alex Vazquez</h3>
                    <p>
                        Alex is a full stack developer. Alex does JavaScript
                        development for CodePen, both front end and back, and
                        just about everything else.
                        <br />
                        <a href="https://codepen.io/quezo/">@quezo</a>
                    </p>
                </div>
            </li>
            <li className="member">
                <div className="thumb">
                    <img src="https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120" />
                </div>
                <div className="description">
                    <h3>Marie Mosley</h3>
                    <p>
                        Marie wears a lot of hats. She is our documentation
                        lead, customer support maestra, editor, and community
                        manager.
                        <br />
                        <a href="https://codepen.io/mariemosley/">
                            @mariemosley
                        </a>
                    </p>
                </div>
            </li>
            <li className="member">
                <div className="thumb">
                    <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
                </div>
                <div className="description">
                    <h3>Stephen Shaw</h3>
                    <p>
                        Stephen is a designer/developer residing in Houston. He
                        likes to build animations with CSS & JavaScript.
                        <br />
                        <a href="https://codepen.io/shshaw/">@shshaw</a>
                    </p>
                </div>
            </li> */}
        </ul>
    );
}

function TeamMember() {
    return (
        <li className="member co-funder">
            <div className="thumb">
                <img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120" />
            </div>
            <div className="description">
                <h3>Chris Coyier</h3>
                <p>
                    Chris is a front-end developer and designer. He writes a
                    bunch of HTML, CSS, and JavaScript and shakes the pom-poms
                    for CodePen.
                    <br />
                    <a href="https://codepen.io/chriscoyier/">@chriscoyier</a>
                </p>
            </div>
        </li>
    );
}

createRoot(rootElement).render(<App />);
