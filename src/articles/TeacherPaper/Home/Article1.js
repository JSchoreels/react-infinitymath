import affichearticle54 from "./cards/AFFICHE ARTICLE-54.jpg"

function Teacherpaper1() {
    return (<>
        <h1> Teacher Portfolio </h1>
        <p> Hello everyone,</p>

        <p>in this article, you will find a blank file to complete to prepare you for your interview as a teacher.</p>
        <p>You will be able to come up with ideas to be prepared for possible questions from the director.</p>
        <p>I share the document in PDF and in google slide, so you can complete it either by hand or on the
            computer.</p>
        <img src={affichearticle54}/>
        <a href="/assets/Template%20My%20teaching%20portfolio.pdf" download>Download the PDF !</a>
        <p> Consult the Google Slide.</p>
        <a href="https://docs.google.com/presentation/d/1qTbAtIGxVq5QCcPyz8xkh6YVhKoMYP6ATPgpZ5le8LQ/edit?usp=sharing"
           target="_blank">Click Here !</a>
    </>)
}

export default Teacherpaper1