import React, { useContext } from 'react'
import { data } from './Data'
import "./gallery.css"
import { motion } from "framer-motion"
import { Context } from '../context';

const ImagePopup = ({ poper, poper1, layoutid }) => {
    const { mode } = useContext(Context);
    const singleImage = data.find((item) => item.id === layoutid);
    return (
        <div className={mode ? "dark" : "light"}>
            <div className='pop_up_container'>
                <div className="close_button">
                    <p onClick={poper1}>X</p>
                </div>
                <div className="pop_up_image">
                    <motion.img src={`../img/${singleImage.image}`} alt="" layoutid={layoutid} />
                </div>
                <div className="pop_tabs">
                    {data.map((item) => {
                        return (
                            <div key={item.id} className="tab" onClick={() => poper(item.id)}>
                                <img src={`../img/${item.image}`} alt="" layoutid={item.id} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default ImagePopup