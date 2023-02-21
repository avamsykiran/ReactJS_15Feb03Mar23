
const Header = ({appTitle}) => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">{appTitle}</a>
        </div>
    </nav>
);

export default Header;