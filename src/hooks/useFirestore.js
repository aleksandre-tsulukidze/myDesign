import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/index";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    // const [length, setLenght] = useState(null);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'decs')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
                // setLenght(documents.length)
            });

        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore