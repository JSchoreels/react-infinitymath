import {Outlet, NavLink} from "react-router-dom";
import React, {useState} from "react";
import './Menu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


function ExpandableNavLink({menuActive, to, children}) {
    const preventMenuEnabling = (e) => {
        if (!menuActive) {
            e.stopPropagation();
        }
    }
    return <NavLink onClick={preventMenuEnabling} style={menuActive ? {display: 'inline'} : null} to={to}>{children}</NavLink>;
}

const LayoutMainMenu = () => {
    const [menuActive, setMenuActive] = useState(false);


    return (
        <>
            <nav className={"Menu MainMenu"} onClick={() => setMenuActive(!menuActive)}>
                <ExpandableNavLink menuActive={menuActive} to={"/"}>Accueil</ExpandableNavLink>
                <ExpandableNavLink menuActive={menuActive} to={"/MiddleSchool"}>Tronc Commun</ExpandableNavLink>
                <ExpandableNavLink menuActive={menuActive} to={"/TeacherPaper"}>Papier de l'enseignant</ExpandableNavLink>
                <ExpandableNavLink menuActive={menuActive} to={"/Digital"}>Numérique</ExpandableNavLink>
                <FontAwesomeIcon className={"icon"} icon={faBars}/>
            </nav>
            <Outlet/>
        </>
    )
}

export default LayoutMainMenu;