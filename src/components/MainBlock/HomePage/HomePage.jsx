import s from "./HomePage.module.css"
import { Link, Redirect } from 'react-router-dom';
import OLetter from "./../../../assets/photos/windmill2.png"
import treeImage from "../../../assets/photos/tree.png"
import factory1 from "../../../assets/photos/factory1.png"
import factory2 from "../../../assets/photos/factory2.png"
import man1 from "../../../assets/photos/man1.png"
import man2 from "../../../assets/photos/man2.png"


export default function HomePage() {

	const errorMessage = "Oops, something wrong" 

    return (
    	<div className={s.wrapper}>
    		<div className={s.header}>
    			Welc<img src={OLetter} alt="O" className={s.letter}/>me to the 2D&V
    		</div>
    		<div className={s.main}>    			
                <div className={s.video}>
                    <iframe title="video" className={s.videoblock} src="https://www.youtube.com/embed/dufFJEM9RzI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className={s.info}>
                    <p>One day, <span className={s.infoDark}>oil</span>,
                        <span className={s.infoDark}> gas </span>
                        and other<span className={s.infoDark}> exhaustible </span>
                        sources of energy will run out</p>
                    <p>but the <span className={s.infoGreen}>sun </span>
                         will shine for a long time, just like the <span className={s.infoGreen}>wind</span> blows</p>
                    <p>Our company proposes to step into the future with <span className={s.infoGreen}>
                        green</span> technologies</p>
                    <p>such as <span className={s.infoGreen}>solar panels </span>
                        and <span className={s.infoGreen}>wind farms</span></p>
                </div>    
    			<div className={s.lower}>
    				<img src={treeImage} alt={errorMessage}  className={s.treeImage}/>
    				<Link to={"/services"}>
	    				<img src={factory1} alt={errorMessage} className={s.factory + " " + s.factory1} />
	    				<div className={s.modal + " " + s.first}>
	    					<div className={s.modalLeft}>   						
	    						SAVE THE TREE
	    					</div>
	    				</div>	
	    				<img src={factory2} alt={errorMessage} className={s.factory + " " + s.factory2}/>
	    				<div className={s.modal + " " + s.second}>
	    					<div className={s.modalRight}>
	    						BUILD A GREEN FUTURE
	    					</div>
	    				</div>
    				</Link>
    				<img src={man1} alt={errorMessage} className={s.man + " " + s.man1} />
    				<img src={man2} alt={errorMessage} className={s.man + " " + s.man2} />    				   				
    			</div>
    		</div>
    		
    	</div>
 	)
}
