import s from "./ServicesItem.module.css"
import Modal from "../../Other/Modal/Modal"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesItem({name, description, readMore, about, footer, bgImg, price}) {
    const style = {
        backgroundImage: `url(${bgImg})`
    }

    const [modalActive, setModalActive] = useState(false)
    return (
        <div>
            <div className={s.card}>
                <div className={s.circle} style={style}>
                    <h4 className={s.title}>{name}</h4>
                </div>
                <div className={s.content}>
                    <p className={s.description}>{description}</p>
                    <div href="#" className={s.button} onClick={() => setModalActive(true)}>Read more</div>
                </div>
            </div>
            <div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <p className={s.modal_title}>Description</p>
                    <p className={s.modal_readMore}>{readMore}</p>
                    {about.length !== 0 && <p className={s.modal_title}>Characteristics</p>}
                    {about.map(elem => <p className={s.about_elem}>{elem}</p>)}
                    <div className={s.modal_footer}>
                        {footer.map(elem => <p className={s.modal_footer_elem}>{elem}</p>)}
                    </div>
                    <div className={s.modal_price}>
                        {price[0] && <div>                           
                            <span className={s.modal_pricetitle}>Item price: </span><span className={s.modal_itemprice}>{price[0]}</span>
                        </div>}                       
                        <div>
                            <span className={s.modal_pricetitle}>Installation price: </span><span className={s.modal_itemprice}>{price[1]}</span>
                        </div>
                    </div>
                    <Link to={"/order"}>
                        <div className={s.modal_button}>Make Order</div>
                    </Link>

                </Modal>
            </div>
        </div>

     );
}