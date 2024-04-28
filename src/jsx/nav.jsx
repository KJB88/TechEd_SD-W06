import AnchorLink from "./anchorLink.jsx";
import "../css/header.css";

export default function Nav() {
  const htmlLinks = personalLinks.map((link) => (
    <AnchorLink
      key={link.innerText}
      url={link.url}
      ariaLabel={link.ariaLabel}
      innerText={link.innerText}
    />
  ));
  return (
    <nav>
      <ul>{htmlLinks}</ul>
    </nav>
  );
}

const personalLinks = [
  {
    url: "https://github.com/KJB88/TechEd_SD-W06",
    ariaLabel: "A link to access the repo for this website.",
    innerText: "Repo",
  },
  {
    url: "https://github.com/KJB88",
    ariaLabel: "A link to access the Github of the author of this website.",
    innerText: "Github",
  },
  {
    url: "https://www.linkedin.com/in/kevin-barr1988/",
    ariaLabel: "A link to access the LinkedIn of the author of this website.",
    innerText: "LinkedIn",
  },
  {
    url: "https://kjb88.github.io/",
    ariaLabel:
      "A link to access the Personal Website of the author of this website.",
    innerText: "Website",
  },
];
