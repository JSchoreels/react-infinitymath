import React from "react";
import aboutme from "../img/AFFICHE ARTICLE-3.jpg";
import trouverici from "../img/AFFICHE ARTICLE-2.jpg";
import HomeSlideshow from "./HomeSlideshow";

function AboutMe() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> A propos </h2>
                        <p>Une professeure un peu folle qui s’est lancée dans un projet fou !</p>
                        <p> Je suis une professeure (un peu moins) débutante, qui enseigne les mathématiques. j’ai
                            enseigné dans l’enseignement ordinaire ainsi que dans le spécialisé.</p>
                        <p> Ayant remarqué que les élèves étaient demandeurs de leçons plus dynamiques, j’ai remis ma
                            pratique en question et changé mes perspectives !
                            J’ai commencé par réaliser des recherches pour trouver des idées sur le net. Quelle galère !
                            Les contenus était principalement destinés au primaire et difficilement applicables en
                            secondaire (élèves de 12 à 20 ans).</p>
                        <p> Je me suis alors posé les questions suivantes : Pourquoi ne pas tout rassembler au même
                            endroit ? Pourquoi ne pas avoir un site pédagogique pour l’enseignement secondaire ?</p>
                        <p>J’ai donc décidé de créer moi-même un endroit où l’on pourrait venir chercher l’inspiration
                            où tout simplement du contenu tout prêt.</p>
                        <p>Ce blog est destiné à vous aider dans votre pratique et partager avec vous ma passion,
                            l’enseignement des mathématiques !</p>
                        <img style={{width: "50%"}} src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FindHere() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> Que trouverez-vous ici ? </h2>

                        <p>C’est le rôle essentiel du professeur d’éveiller la joie de travailler et de connaitre ! –
                            Albert Einstein</p>
                        <p>Bienvenue !</p>
                        <p>Vous êtes professeurs de mathématiques et vous cherchez un lieu où trouver différentes
                            ressources pédagogiques ! Vous êtes au bon endroit !</p>
                        <p> Vous trouverez ici une multitude d’activités et d’idées concrètes pour l’enseignement
                            des mathématiques aux élèves du nouveau tronc commun.</p>
                        <p> Vous pourrez découvrir des leçons complètes et basées sur le nouveau programme belge, mais pas
                            seulement ! Vous aurez accès à du contenus sur l’apprentissage par le jeu et par les
                            nouvelles technologies.</p>
                        <p>Je vous invite à explorer mon blog pour y découvrir toutes les surprises qui s’y cachent.</p>
                        <img style={{width: "50%"}} src={trouverici} alt={trouverici}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <>
            <div className={"Home"}>
                <HomeSlideshow/>
                <AboutMe/>
                <FindHere/>
            </div>
        </>
    )
};
export default Home;

