import affichearticle12 from "./cards/AFFICHE ARTICLE-4.jpg"

function MiddleSchool12() {
    return (<>
        <h1> The Last Week - Day #2 </h1>
        <p> Hello everyone,</p>

        <p>This week, I'm sharing with you the 5 activities I do with my students during the last week of school.</p>
        <p>DAY #2 : Mathematic is the queen of science !</p>
        <p>In this activity, students discover the importance of mathematics by watching a film. They have to answer questions. During the pooling, I lead a debate with the students.</p>
        <p>Correction are available.</p>
        <p>The file is FREE.</p>
        <img src={affichearticle12}/>
        <iframe width="420" height="315"
                src="https://www.youtube.com/embed/8mve0UoSxTo">
        </iframe>
        <a href="/assets/Math%20Movie.pdf" download>Download the PDF !</a>
    </>)
}

export default MiddleSchool12