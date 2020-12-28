import s from "./Services.module.css"
import ServicesItem from "./ServicesItem"
import ava1 from "../../../assets/photos/Ava1.jpg"
import ava2 from "../../../assets/photos/Ava2.jpg"
import ava3 from "../../../assets/photos/Ava3.jpg"

// Data imports 
import bgImg1 from "../../../assets/photos/bgImg1.jpg"
import bgImg2 from "../../../assets/photos/bgImg2.png"
import bgImg3 from "../../../assets/photos/bgImg3.jpg"

const names = [
	"Solar panel",

	"Wind farm",

	"Software implementation"
]

const descriptions = [
	"Solar panel with an efficiency of 30% in normal light conditions",

	"Single-blade or three-blade wind turbine with a capacity of 10 kW with a wind wheel diameter of 7 meters",

	"Specially designed SOFTWARE for SOLAR PANELS and WIND FARMS"
]

const readMores = [
	"They are made of first-class materials of famous world leaders. \
	 The applied tempered glass of the highest quality provides high indicators of strength of the panel. \
	 This panel will withstand any hail, snow and wind, and the surface of the panel is not subject to scratches.",

	 "This model of wind turbine in both of its variations, both single-blade and three-blade, \
	 is mainly designed to meet industrial / commercial electricity needs. After all, its performance varies \
	 from one to two megawatt-hours of electricity per month, which is usually unnecessary for domestic needs.",

	 "Our special software that collects data from stations and reports on the amount of energy \
	 generated and emergency situations"
]

const abouts = [
	["Solar panel - 100W * 2 pcs. or 200W * 1pc",
	"Rechargeable battery - maintenance-free specially for FES, 12 V, 80 Ah. * 2 pcs",
	"Inverter - 1000 W",
	"Controller - 10 A; 12 / 24V",
	"Delivery time - within 7-10 days"],

	["EnergyWind model - 10 kW",
	"Service life - 25 years",
	"Warranty service - 36 months",
	"Number of blades - 3 pcs",
	"Controller External Energy Wind 5-10 kW",
	"Wind turbine diameter - 7 m",
	"Working range of wind speeds - 3 - 40 m / s",
	"Weight with packaging - 180 kg",
	"Battery voltage - 48 V"],
	[]
]

const footers = [
	["The service life of solar panels is 20 years",
	"Factory defect warranty - 1 year",
	"Included: solar panels, controller, batteries, inverter (converter)"],

	["The service life of wind farm is 25 years",
	"Factory defect warranty - 3 year"],

	["SOFTWARE warranty - 1 month"]
]

const bgImgs = [
	bgImg1,
	bgImg2,
	bgImg3
]

const prices = [
	["100 000 KZT", "30 000 KZT"],
	["3 000 000 KZT", "500 000 KZT"],
	["", "100 000 KZT"]
]

const Thing = 3

let services = []

let i = 0
while (i < Thing) {
	services.push({id: i + 1, name: names[i], description: descriptions[i],
		readMore: readMores[i], about: abouts[i], footer: footers[i],
		bgImg: bgImgs[i], price: prices[i]})
	i++		
}

export default function Services() {
    return (
    	<div className={s.body}>
    		<div className={s.container}>
    			{services.map(s => <ServicesItem key={s.id} name={s.name}
    				description={s.description} readMore={s.readMore}
    				about={s.about} footer={s.footer}
    				bgImg={s.bgImg} price={s.price} />)}
    		</div>
    	</div>
 	);
}