import React, { useState } from 'react'
import "./gallery.css"
import { data } from './Data'
import ImagePopup from './ImagePopup'
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion"

const Gallery = () => {
    const [popup, setPopup] = useState(false);
    const [layoutid, setLayoutId] = useState(null);
    const poper = (id) =>{
        if(popup===false){
            setLayoutId(id);
            setPopup(!popup);
            console.log("first");
        }else{
            setPopup(popup);
            setLayoutId(id);
            console.log(id)
            console.log("second");
        }
        
    }
    const poper1 = () =>{
        setPopup(!popup)
    }
    return (
        <div>
            <AnimateSharedLayout>
                <div className="image_grid">
                    {data.map((item) => {
                        return (
                            <div key={item.id} className="image_card" onClick={()=> poper(item.id)}>
                                <motion.img src={`../img/${item.image}`} alt="" layoutid={item.id} />
                            </div>
                        )
                    })}
                </div>
                <div className="image_pop_up">
                    <AnimatePresence>
                        {popup && <ImagePopup  poper={poper} poper1={poper1} layoutid={layoutid}/>}
                    </AnimatePresence>
                </div>
            </AnimateSharedLayout>
        </div>
        // <div className='container' id="gallery">
        //     <h2>Foto Galeri</h2>
        //     <div className="cards">
        //         <div className="card">
        //             <img src={first} alt="" />
        //             <h3>Lorem ipsum dolor sit amet.</h3>
        //         </div>
        //         <div className="card">
        //             <img src={first} alt="" />
        //             <h3>Lorem ipsum dolor sit amet.</h3>
        //         </div>
        //         <div className="card">
        //             <img src={first} alt="" />
        //             <h3>Lorem ipsum dolor sit amet.</h3>
        //         </div>
        //         <div className="card">
        //             <img src={first} alt="" />
        //             <h3>Lorem ipsum dolor sit amet.</h3>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Gallery