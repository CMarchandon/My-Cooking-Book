import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

export default function About() {
    return (
        <>
        <NavBar/>
        <main>
            <div className="top-about">
                <div className="about-content">
                    <img src="src/assets/img/about-us_food.png" alt="picture of somes healty food"/>
                    <div>
                        <h1>Let's talk about us!</h1>
                        <p>What is My Cooking Book? </p>
                        <p>My Cooking Book is a project created during a web development course. 
                        The goal is to address a personal challenge: the struggle of managing our own recipes!</p>
                    </div>
                </div>
            </div>
            <div className="bottom-around">
                <div className="about-content">
                    <img src="src/assets/img/about-us_computer.png" alt="picture of a computer"/>
                    <div>
                        <h2>Who are we?</h2>
                        <p>We are two young developers, constantly striving to improve ourselves. 
                            Manon specializes in back-end development, responsible for everything you can't see, including data management for your account and more. Camille specializes in front-end development, responsible for designing the visible part of the website. 
                            Together, we have worked diligently to provide you with an enjoyable and practical website!</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer/>
        </>

    )
    
    }