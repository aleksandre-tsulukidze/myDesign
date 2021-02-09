import { useState, useEffect } from "react";

import { projectStorage, projectFirestore, timestamp } from "../firebase/index";

const useStorage = (file, cat) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name + Math.random());
        const collectionRef = projectFirestore.collection(cat);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url: url, createdAt });
            setUrl(url)
        })
    }, [file, cat]);

    return {progress, url, error}
}


export default useStorage
