import NavLink from "./navLink.jsx";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            url="https://github.com/KJB88/TechEd_SD-W06"
            ariaLabel="A link to access the repo for this website."
            innerText="Repo"
          />
        </li>
        <li>
          <NavLink
            url="https://github.com/KJB88"
            ariaLabel="A link to access the Github of the author of this website."
            innerText="Github"
          />
        </li>
        <li>
          <NavLink
            url="https://www.linkedin.com/in/kevin-barr1988/"
            ariaLabel="A link to access the LinkedIn of the author of this website."
            innerText="LinkedIn"
          />
        </li>
        <li>
          <NavLink
            url="https://kjb88.github.io/"
            ariaLabel="A link to access the Personal Website of the author of this website."
            innerText="Website"
          />
        </li>
      </ul>
    </nav>
  );
}
