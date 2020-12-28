import { Field, Form } from 'react-final-form'
import s from "./Order.module.css"
import {Element} from "../../Other/FormsControls/FormsControls"
import { maxLenghtCreator, required} from "../../Other/Validators/Validator"
import loader from "../../../assets/loaders/loader.svg"
import { useState } from 'react';
import {OrderApi} from "../../api/api"
import Modal from "../../Other/Modal/Modal"

const Input = Element("input")
const Textarea = Element("textarea")
const Select = Element("select")
const Lenght50 = maxLenghtCreator(50)
const Lenght500 = maxLenghtCreator(500)

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


const Order = () => {

	const [isLoading, setIsLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)
	const [error, setError] = useState(false)

	const sendData = async (payload) => {
		try { 
			setIsLoading(true)
			const data = await OrderApi.sendOrder(payload)
			setIsLoading(false)
			setLoaded(true)
		} catch(err) {
			setIsLoading(false)
			setError(true)
		}	
	}

	const onSubmit = (payload) => {
		sendData(payload)
	}

    return (
    	<div className={s.body}>
	    	<div className={s.container}>
				<div className={s.form}>
					<Form
					onSubmit={onSubmit}>
						{({ handleSubmit, form }) => (
							<form onSubmit={handleSubmit}>
								<div className={s.form_block}>
									<div className={s.block + " " + s.name}>
										<div className={s.title}>
											Your Full name
										</div>
										<div>
											<Field placeholder={"Full name"} name={"name"} className={s.input}
												component={Input} validate={composeValidators(required, Lenght50)}/>
										</div>
									</div>
									<div className={s.block + " " + s.email}>
										<div className={s.title}>
											Your mail
										</div>
										<div>
											<Field placeholder={"Mail"} name={"email"} className={s.input}
												component={Input} validate={composeValidators(required, Lenght50)} type="email"/>
										</div>
									</div>
									<div className={s.block + " " + s.orders}>
										<div className={s.title}>
											Choose order
										</div>
										<div>
											<Field name="order_type" validate={required} component={Select} className={s.input + " " + s.select}>
								              <option />
								              <option value="WindFarm" checked>Wind farm</option>
								              <option value="WindFarmInst">Wind farm & installation</option>
								              <option value="Solar">Solar panel</option>
								              <option value="SolarInst">Solar panel & installation</option>
								              <option value="Software">Software implementation</option>
								            </Field>
										</div>
									</div>
									<div className={s.block + " " + s.description}>
										<div className={s.title}>
											Your description
										</div>
										<div>
											<Field placeholder={"Write your description here"} name={"message"} className={s.input + " " + s.description}
												component={Textarea} validate={Lenght500} type="text"/>
										</div>		
									</div>	
									<div className={s.buttons}>																																									
										<div className={s.buttonBlock}>
											<button disabled={isLoading}className={s.button + " " + s.leftButton} type={"submit"}>Make order</button>
										</div>
										<div className={s.buttonBlock}>
											<button disabled={isLoading}type="button" onClick={form.reset} className={s.button + " " + s.rightButton}>Reset</button>
										</div>
									</div>									
								</div>
							</form>
						)}
					</Form>
					{ isLoading && <img src={loader} alt="" className={s.loader}/> }	
				</div>    		    		
	    	</div>
	    	<Modal active={loaded} setActive={setLoaded}>
                    <p className={s.modal_succes}>Your order has been sent succesfully</p>
                    <p className={s.modal_succes}>Wait for a reply to your mail within 2 days</p>                     
            </Modal>
            <Modal active={error} setActive={setError}>
                    <p className={s.modal_error}>Something Wrong</p>
                    <p className={s.modal_error}>Check your email</p>                     
            </Modal>           
    	</div>
 	)
}

export default Order
