import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {

    const [documents,setDocuments] = useState(null)

    useEffect(()=>{

        let ref = collection(db,c)

        //realtime listener listens to new snapshots of the collection
        const unsub = onSnapshot(ref,(snapshot)=>{
            
            let snapshotDocuments = []
            
            //for the latest collection loop over each document in col and 
            // append to list of documents
            snapshot.forEach((doc)=>{
                snapshotDocuments.push({id:doc.id,...doc.data()})
            })

            setDocuments(snapshotDocuments)
        })
        //clean-up function
        return ()=>unsub()
    },[c])

    //hook output
    return documents
}
