import react, { Fragment, useState } from "react";
import '../style/app-header.css';
import HamburgerMenu from "react-hamburger-menu";
// import AppNavigator from "./app-navigator";

const AppHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <Fragment>
            <header>
                <HamburgerMenu color='white' strokeWidth={2} height={13} width={21} menuClicked={handleMenuClick} isOpen={isMenuOpen}></HamburgerMenu>
                <h1>LEAD</h1>
            </header>
            {/* <AppNavigator isMenuOpen={isMenuOpen}></AppNavigator> */}
        </Fragment>
    );
};

export default AppHeader;