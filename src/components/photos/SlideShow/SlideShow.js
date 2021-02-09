import React, { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import { connect } from "react-redux";

import useFirestore from "../../../hooks/useFirestore";
import Img from '../Image/Img';
import classes from "./SlideShow.module.css";
import Spinner from "../../UI/Spinner/Spinner";


const SlideShow = (props) => {
    const {docs} = useFirestore('slideshow');
    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        setCurrent( current === 4 - 1 ? 0: current + 1 )
        clearTimeout()
    }

    const prevSlide = () => {
        setCurrent( current === 0 ? 4 - 1 : current - 1 )
    }

    // if (props.token == null) {
    //     setTimeout(() => {
    //         nextSlide()
    //         clearTimeout()
    //     }, 4000)
    // }


    let page = ( <div style={{margin: '90px, auto'}}> <Spinner /> </div> )

    if (docs) {
        page = (
            <div className={classes.Wraper}>
                {props.token ? null: <GrPrevious onClick={prevSlide} />}
                {props.token ? null: <GrNext onClick={nextSlide} />}
                {docs.map((img, index) => (
                    <div 
                        className={ index === current? classes.Active: classes.Slides}
                        key={index}>
                        {index === current && (<Img src={img.url} />)}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {page}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(SlideShow);