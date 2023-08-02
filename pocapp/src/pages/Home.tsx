import React from "react";
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



export default function Home(){
    
    return (
        <div className="App">
            <header className="App-header">
                <Fade delay={2e2} duration={1.5e3} cascade> 
                    <h2>Test de plusieurs type de scrutins</h2>
                    <Button variant="primary" href="/scrutinMaj"> Start the experiment </Button>
                </Fade>
            </header>
        </div>
       
    )
}