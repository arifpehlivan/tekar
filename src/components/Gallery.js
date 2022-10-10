import React, { useContext, useState } from 'react'
import "./gallery.css"
import { data } from './Data'
import ImagePopup from './ImagePopup'
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion"
import { Context } from '../context';

const Gallery = () => {
    const { mode } = useContext(Context);
    const [popup, setPopup] = useState(false);
    const [layoutid, setLayoutId] = useState(null);
    const poper = (id) => {
        if (popup === false) {
            setLayoutId(id);
            setPopup(!popup);
            console.log("first");
        } else {
            setPopup(popup);
            setLayoutId(id);
            console.log(id)
            console.log("second");
        }
    }
    const poper1 = () => {
        setPopup(!popup)
    }
    return (
        <div className={mode ? "dark" : "light"}>
            <AnimateSharedLayout>
                <div className="image_grid">
                    {data.map((item) => {
                        return (
                            <div key={item.id} className="image_card" onClick={() => poper(item.id)}>
                                <motion.img src={`../img/${item.image}`} alt="" layoutid={item.id} />
                            </div>
                        )
                    })}
                </div>
                <div className="image_pop_up">
                    <AnimatePresence>
                        {popup && <ImagePopup poper={poper} poper1={poper1} layoutid={layoutid} />}
                    </AnimatePresence>
                </div>
            </AnimateSharedLayout>
        </div>
    )
}

export default Gallery