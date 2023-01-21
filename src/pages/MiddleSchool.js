import {BrowserRouter, Link, Outlet, Route, Routes, useParams} from "react-router-dom";
import {React, lazy, Suspense} from "react";
import LayoutGrade6 from "./LayoutGrade6";
import LayoutGrade7 from "./LayoutGrade7";
import LayoutGrade8 from "./LayoutGrade8";
import Article from "./ArticleCard";


function ArticleLoader() {
    let {id} = useParams();
    const SpecificArticle = lazy(() => import('./articles/' + id));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SpecificArticle/>
        </Suspense>
    )
}

function MiddleSchoolMenu() {
    return (
        <>
            <nav className={"Menu SubMenu"}>
                <ul>
                    <li>
                        <Link to={"Grade6"}>Grade 6</Link>
                    </li>
                    <li>
                        <Link to={"Grade7"}>Grade 7</Link>
                    </li>
                    <li>
                        <Link to={"Grade8"}>Grade 8</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

function MiddleSchoolHome() {
    return <p>Select a Grade !</p>;
}

const MiddleSchool = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MiddleSchoolMenu/>}>
                    {/*<Route index element={<MiddleSchoolHome/>}/>*/}
                    <Route path="Grade6" element={<LayoutGrade6/>}/>
                    <Route path="Grade7" element={<LayoutGrade7/>}/>
                    <Route path="Grade8" element={<LayoutGrade8/>}/>
                </Route>
                <Route path=":grade/:id" element={<ArticleLoader/>}/>
            </Routes>
        </>
    )
};
export default MiddleSchool;
