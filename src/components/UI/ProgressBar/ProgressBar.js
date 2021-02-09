import React from 'react';
import { useEffect } from 'react';
import useStorage from '../../../hooks/useStorage';

const ProgressBar = ({file, setFile, cat, setSub}) => {
    const {url, progress} = useStorage(file, cat);
    
    useEffect(() => {
        if (url) {
            setFile(null)
            setSub(null)
        }
    }, [url, setFile, setSub,])

    return (
        <div
            style={{ width: progress + '%' }} 
            className='progress-bar'/>
    )
};

export default ProgressBar