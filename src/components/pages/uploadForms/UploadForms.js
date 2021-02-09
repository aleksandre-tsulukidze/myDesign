import React, { useState }  from "react";
import { connect } from "react-redux";

import Propgressbar from "../../UI/ProgressBar/ProgressBar";
import * as actions from "../../../store/actions/index";
import Button from "../../UI/Button/Button";
import classes from "./UploadForms.module.css";

const UploadForms = (props) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [cat, setCat] = useState('');
    const [sub, setSub] = useState(null);

    const types= ['image/png', 'image/jpeg']


    const selectChangeHandler = (event) => {
            let selected = event.target.value
            setCat(selected)
        }


    const inputChangeHandler = (event) => {
        let selected = event.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setError('Please select an image file (png or jpeg)')
            setFile(null);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); 
        setSub(1)
    }

    return (
        <form style={{display: "inline-block", marginTop: '30px'}} onSubmit={onSubmitHandler} >
            <input type='file' id='input' className={classes.Input} accept={types} onChange={inputChangeHandler}/>
            <label 
                htmlFor='input' 
                className={classes.Label}>
                    <span className="material-icons">
                        add_photo_alternate
                    </span>
                    Choose Your Image
            </label>
            <div className={classes.SelectBtn} >
                <select defaultValue='Choose Page' className={classes.Select} onChange={selectChangeHandler}>
                    <option disabled>Choose Page</option>
                    {props.pages.map(page => (
                        <option className={classes.Option} key={page.value} value={page.value}>{page.name}</option>
                    ))}
                </select>
                <Button >SUBMIT</Button>
            </div>
            <div className={classes.Output}>
                { error && <div className='error'> {error}</div> }
                { file && <div> File Name:  "{file.name}" </div>}
                { file && sub ? <Propgressbar file={file} setFile={setFile} cat={cat} setSub={setSub} />: null }
            </div>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        pages: state.category.pages,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCat: () => dispatch(actions.cat())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForms)