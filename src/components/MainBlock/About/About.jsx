import s from "./About.module.css"
import { Link } from 'react-router-dom';
import poster from "../../../assets/photos/Poster.png"

export default function About() {
    return (
    	<div className={s.wrapper}>
    		<div className={s.mainBlock}>
	    		<div className={s.title}>
	    			About Us
	    		</div>
	    		<div className={s.content}>
	    			<p>We are a company that specializes in the design and installation of alternative energy sources in the <span className={s.big}>mining industry</span></p>
	    			<p>Our team includes experienced IT-specialists, construction and mining engineers</p>
	    			<p>We undertake the entire project part of the work, from geological exploration to the implementation of software for remote control over stations</p>
	    			<p>Read more about our services <Link to="/services">here</Link></p>
	    		</div>
	    		<div>
	    			<img src={poster} alt="#" className={s.poster}/>
	    		</div>
    		</div>
    	</div>
 	);
}
