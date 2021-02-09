import React from "react";
import useFirestore from "../../hooks/useFirestore";

import Img from "../photos/Image/Img";
import classes from "./imageGrid.module.css";
import {motion} from 'framer-motion'
import { projectFirestore } from "../../firebase/index";

const ImageGrid = (props) => {
    const {docs} = useFirestore(props.collection);


    const onClickEvent = async (doc) => {
        if (window.confirm('Are You Sure To Delete This Image')) { 
            projectFirestore.collection(props.collection).doc(doc.id).delete()
                .then(response => {
                console.log(response,"Document successfully deleted!");
                }).catch(err => {
                console.error("Error removing document: ", err);
                });
        };
    };

    

    return (
        <div className={classes.ImgGrid}>
            {docs && docs.map((doc) => (
                <motion.div
                    layout
                    whileHover={{opacity: 1}}
                    className='img=wrap'
                    key={doc.id} >
                    <Img
                        src={doc.url}
                        alt='aploaded at'
                        deleteClicked={() => onClickEvent(doc)}
                        modalClicked={() => props.setSelectedImg(doc.url)}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid