import { AiFillGithub } from "react-icons/ai";
import "../style/footer.scss";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/tomcoso" rel="noreferrer" target="_blank">
        <AiFillGithub size="1.2rem" />
      </a>
      <span>
        Copyright &copy; {new Date().getFullYear()} <a href="/">Tomas Dessy</a>
      </span>
    </footer>
  );
};

export default Footer;
