import s from "./TeamItem.module.css"

export default function TeamItem({ava, name, role}) {
    return (
    	<div className={s.box}>
    		<div className={s.imgBx}>
    			<img src={ava} alt="" />
    		</div>
    		<div className={s.content}>
    			<h2 className={s.name}>{name}<br/><span className={s.role}>{role}</span></h2>
    		</div>
    	</div>
 	);
}

