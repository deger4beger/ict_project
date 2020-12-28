import s from "./Contacts.module.css"
import GoogleApiWrapper from "./../../Other/GoogleMapsWrapper"


export default function Contacts() {
    return (
    	<div className={s.wrapper}>
    		<div className={s.mainBlock}>
	    		<div className={s.left}>
	    			<p>Work schedule - 24/7, <span className={s.span3}>we will consider your order as soon as possible</span></p>
	    			<p>Work email <span className={s.span1}>( only for business proposals )</span> - <span className={s.span2}>twodandv@gmail.com</span></p>
	    			<p>Support email <span className={s.span1}>( For other questions )</span> - <span className={s.span2}>twodandv_support@gmail.com</span></p>
	    			<p>Phone number <span className={s.span1}>( only for extreme cases )</span> - <span className={s.span2}>+7-999-999-99-99</span></p>
	    		</div>
	    		<div className={s.right}>
	    			<div className={s.right_header}>
	    				We are here
	    			</div>
	    			<div className={s.map}>
	    				<GoogleApiWrapper
						    isMarkerShown
						    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvt6UqOQerhAoNEiQz3OW6GSYNYcbdmyQ&v=3.exp&libraries=geometry,drawing,places"
						    loadingElement={<div style={{ height: `100%` }} />}
						    containerElement={<div style={{ height: `400px` }} />}
						    mapElement={<div style={{ height: `100%`, borderRadius: '5px' }} />}
						/>
	    			</div>
	    		</div>
    		</div>
    	</div>
 	);
}

