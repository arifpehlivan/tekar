import React from 'react'
import { data } from './Data'
import "./gallery.css"
import { motion } from "framer-motion"

const ImagePopup = ({poper,layoutId}) => {
    const singleImage = data.find((item) => item.id === layoutId);
    return (
        <div className='pop_up_container'>
            <div className="close_button">
                <p onClick={poper}>X</p>
            </div>
            <div className="pop_up_image">
            <motion.img src={`../img/${singleImage.image}`} alt="" layoutId={layoutId}/>
            </div>
            <div className="pop_tabs">
            {data.map((item) => {
                        return (
                            <div key={item.id} className="tab" onClick={()=> poper(item.id)}>
                                <img src={`../img/${item.image}`} alt="" layoutId={item.id}/>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ImagePopup