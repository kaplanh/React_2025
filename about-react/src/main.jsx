import { createRoot } from "react-dom/client";
import "./App.css";
import { StrictMode } from "react";
const rootElement = document.querySelector("#root");
const teamMembersData = [
    {
        name: "Chris Coyier",
        description:
            "Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.",
        image: "https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120",
        codepenLink: "https://codepen.io/chriscoyier/",
        codepenName: "@chriscoyier",
        isCofunder: true,
    },
    {
        name: "Alex Vazquez",
        description:
            "Alex is a full stack developer. Alex does JavaScript development for CodePen, both front end and back, and just about everything else.",
        image: "https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120",
        codepenLink: "https://codepen.io/quezo/",
        codepenName: "@quezo",
        isCofunder: true,
    },
    {
        name: "Marie Mosley",
        description:
            "Marie wears a lot of hats. She is our documentation lead, customer support maestra, editor, and community manager.",
        image: "https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120",
        codepenLink: "https://codepen.io/mariemosley/",
        codepenName: "@mariemosley",
        isCofunder: false,
    },
    {
        name: "Stephen Shaw",
        description:
            "Stephen is a designer/developer residing in Houston. He likes to build animations with CSS & JavaScript.",
        image: "https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120",
        codepenLink: "https://codepen.io/shshaw/",
        codepenName: "@shshaw",
        isCofunder: false,
    },
];

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
            {teamMembersData.map((member) => (
                <TeamMember
                    key={member.name}
                    // Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
                    name={member.name}
                    description={member.description}
                    image={member.image}
                    codepenLink={member.codepenLink}
                    codepenName={member.codepenName}
                    isCofunder={member.isCofunder}
                />
            ))}

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

function TeamMember({
    //Destructuring
    name,
    description,
    image,
    codepenLink,
    codepenName,
    isCofunder,
}) {
    // console.log(props);

    return (
        <li className={`member ${isCofunder ? "co-funder" : ""}`}>
            <div className="thumb">
                <img src={image} />
            </div>
            <div className="description">
                <h3>{name}</h3>
                <p>
                    {description}
                    <br />
                    <a href={codepenLink}>{codepenName}</a>
                </p>
            </div>
        </li>
    );
}

createRoot(rootElement).render(
    //?We use StrictMode to give more advanced errors during project development.
    <StrictMode>
        <App />
    </StrictMode>
);
