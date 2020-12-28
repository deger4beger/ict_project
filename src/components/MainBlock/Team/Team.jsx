import s from "./Team.module.css"
import TeamItem from "./TeamItem"
import ava1 from "../../../assets/photos/Ava1.jpg"
import ava2 from "../../../assets/photos/Ava2.jpg"
import ava3 from "../../../assets/photos/Ava3.jpg"

const members = [
	{id: 1, ava: ava1, name: "Shokorov Vladislav", role: "Team manager & Backend engineer"},
	{id: 2, ava: ava2, name: "Kochinov Danila", role: "Mining & Frontend engineer"},
	{id: 3, ava: ava3, name: "Ragutskiy Danil", role: "Construction engineer & Promoter"}
]

export default function Team() {
    return (
    	<div className={s.body}>
    		<span className={s.title}>Founders</span>
	    	<div className={s.container}>
	    		{members.map(m => <TeamItem ava={m.ava} name={m.name} role={m.role} key={m.id}/>)}	    		    		
	    	</div>
    	</div>
 	);
}

