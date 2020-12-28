import s from "./Footer.module.css"
import vk from "../../assets/photos/vkLogo.png"
import inst from "../../assets/photos/instLogo.png"

export default function Footer() {
    return (
    	<div className={s.wrapper}>
    		<div className={s.inner}>
	    		<div className={s.firstBlock} >
	    			<div className={s.title}>
	    				<div className={s.logo}>
		    				<span>2</span>Danilas<span>&</span>Vlad
	    				</div>
	    				<div>
	    					<a href="https://vk.com" target="_blank"><img src={vk} alt="" /></a>
	    					<a href="https://instagram.com" target="_blank"><img src={inst} alt="" /></a>
	    				</div>
	    			</div>
	    			<div className={s.rights}>
	    				© 2020, twodandv.com
	    			</div>
	    		</div>
	    		<div className={s.secondBlock}>    			
	    			<div className={s.secdiv}>
	    				<span>E-MAIL</span> twodandv@gmail.com
	    			</div>
	    			<div className={s.secdiv}>
	    				<span>WORK SCHEDULE</span> 24/7
	    			</div>
	    			<div className={s.secdiv}>
	    				<span>OTHER CONTACTS</span> ... ... ...
	    			</div>
	    		</div>
    		</div>
    	</div>
 	)
}
