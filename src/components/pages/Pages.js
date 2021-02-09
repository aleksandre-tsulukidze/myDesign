import React,{useState} from "react";

import ImageGrid from "../photos/imageGrid";
import SlideShow from "../photos/SlideShow/SlideShow";
import Modal from "../UI/Modal/Modal";

const Pages = (props) =>  {

    const [selectedImg, setSelectedImg] = useState(null)
    
    let char = props.match.url
    let cat = ""
    for (let i = 6; i < char.length; i++) {
        cat = cat+char[i]
    }

    console.log(cat)

    if (props.match.url === '/home') {
        return (
            <div>
                <SlideShow />
            </div>
        )
    } 

    return (
        <div>
            <ImageGrid collection={cat} setSelectedImg = {setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg}  setSelectedImg={setSelectedImg}/>}
        </div>
    )
}

export default Pages