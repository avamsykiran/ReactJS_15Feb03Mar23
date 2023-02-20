
/*const Header = (props) => (
    <nav className="banner">
        <h3>{props.appTitle}</h3>
        <h5>{props.tagLine}</h5>
    </nav>
);
*/

const Header = ({appTitle,tagLine}) => (
    <nav className="banner">
        <h3>{appTitle}</h3>
        <h5>{tagLine}</h5>
    </nav>
);

export default Header;