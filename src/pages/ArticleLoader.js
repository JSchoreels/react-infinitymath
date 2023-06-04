import {useParams} from "react-router-dom";
import {lazy, React, Suspense} from "react";
import "./ArticleLoader.scss"

function ArticleLoader() {
    let {section, subsection, article} = useParams();
    const SpecificArticle = lazy(() => import(`../articles/${section}/${subsection}/${article}`));
    return (
        <div className={"article"}>
            <Suspense fallback={<div>Loading...</div>}>
                <SpecificArticle/>
            </Suspense>
        </div>
    )
}

export default ArticleLoader;