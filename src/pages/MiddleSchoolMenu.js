import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";
import {React} from "react";
import './Menu.scss';
import LayoutArticles from "./LayoutArticles";



function MiddleSchoolMenu() {
    return (
        <>
            <nav className={"Menu SubMenu"}>
                <NavLink to={"Grade6"}>1 Commune</NavLink>
                <NavLink to={"Grade7"}>2 Commune</NavLink>
                <NavLink to={"Grade8"}>3 Commune</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}

const MiddleSchool = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MiddleSchoolMenu/>}>
                    <Route index element={<LayoutArticles section={'MiddleSchool'} subsection={'Home'}/>}/>
                    <Route path=":subsection" element={<LayoutArticles section={'MiddleSchool'}/>}/>
                </Route>
            </Routes>
        </>
    )
};
export default MiddleSchool;
