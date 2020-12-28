import s from "./Header.module.css"
import image from "../../assets/photos/headerImage.png"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={s.wrapper}>
    	<div className={s.content}>
    		<Link to={"/homepage"} className={s.titleLink}>
		    	<div className={s.title}>
		    		<span><span className={s.amper}>2</span>Danilas<span className={s.amper}>&</span>Vlad</span>
		    	</div>
	    	</Link>
	    	<div className={s.menu}>
		    	<li className={s.menuLink}><Link to={"/about"} className={s.menuItem}>About us</Link></li>
		    	<li className={s.menuLink}><Link to={"/services"} className={s.menuItem}>Our services</Link></li>
		    	<li className={s.menuLink}><Link to={"/order"} className={s.menuItem}>Make order</Link></li>
		    	<li className={s.menuLink}><Link to={"/contacts"} className={s.menuItem}>Our contacts</Link></li>
		    	<li className={s.menuLink}><Link to={"/team"} className={s.menuItem}>Our team</Link></li>
	    		<li className={s.menuLink}><Link to={"/feedback"} className={s.menuItem}>Feedback</Link></li>
	    	</div>
		    	
    	</div>
    </div>
  );
}

export default Header;