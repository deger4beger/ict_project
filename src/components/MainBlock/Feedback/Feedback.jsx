import { Field, Form } from 'react-final-form'
import s from "./Feedback.module.css"
import {Element} from "../../Other/FormsControls/FormsControls"
import { maxLenghtCreator, required} from "../../Other/Validators/Validator"
import {FeedbackApi} from "../../api/api"
import { useState } from 'react';
import loader from "../../../assets/loaders/loader.svg"
import Modal from "../../Other/Modal/Modal"

const Textarea = Element("textarea")
const Lenght500 = maxLenghtCreator(500)

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export default function Feedback() {

	const [isLoading, setIsLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const sendData = async (message) => {
		try { 
			setIsLoading(true)
			const data = await FeedbackApi.sendFeedback(message)
			setIsLoading(false)
			setLoaded(true)
		} catch(err) {
			console.log(err)
		}	
	}


	function onSubmit(payload) {
		sendData(payload.message)
	}

    return (
    	<div className={s.body}>
	    	<div className={s.container}>
    		<div className={s.title}>Share us your feedback, we will be very appreciated</div>
				<div className={s.form}>
					<Form
					onSubmit={onSubmit}>
						{({ handleSubmit, form }) => (
							<form onSubmit={handleSubmit}>
								{isLoading && <img src={loader} alt="" className={s.loader}/> }
								<div className={s.form_block}>
									<div className={s.block + " " + s.description}>
										<div className={s.descr}>
											<Field placeholder={"Write your description here"} name={"message"} className={s.input + " " + s.description}
												component={Textarea} validate={composeValidators(Lenght500, required)} type="text"/>
										</div>		
									</div>		
									<div className={s.buttons}>																										
										<div className={s.buttonBlock}>
											<button className={s.button + " " + s.leftButton} type={"submit"}>Send feedback</button>
										</div>
										<div className={s.buttonBlock}>
											<button type="button" onClick={form.reset} className={s.button + " " + s.rightButton}>Reset</button>
										</div>
									</div>	
								</div>
							</form>
						)}
					</Form>
					<Modal active={loaded} setActive={setLoaded}>
	                    <p className={s.modal_succes}>Success</p>
	                    <p className={s.modal_succes}>Thank you for your feedback!</p>                     
            		</Modal>
				</div>    		    		
	    	</div>
    	</div>
 	);
}
