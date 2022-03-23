import { db } from './firebase';
import { useEffect, useState } from 'react'
const queryParams = new URLSearchParams(window.location.search);
const refID = queryParams.get("refID")
import { collection, getDoc, doc, updateDoc, getDocs, addDoc, query, where } from "firebase/firestore"

function App() {

  const [value, setValue] = useState("")
  const [email, setEmail] = useState("yes.vikash.mes@outlook.com")

  useEffect(() => {
    (async () => {
      const usersref = collection(db, 'users');
      const userq = query(usersref, where("refID", "==", refID))
      const q = query(usersref, where("email", '==', email))
      const querySnapshor = await getDocs(q);
      const usersExist = querySnapshor.docs.length !== 0 ? querySnapshor.docs[0].data() : undefined

      console.log(usersExist)
      if (usersExist) {
        console.log("email already exist")
      } else {
        const refUserSnapshot = await getDocs(userq);
        if (!refUserSnapshot.empty) {
          const refuseID = refUserSnapshot.docs[0].id
          const refUser = refUserSnapshot.docs[0].data()
          //  check for refID 
          if (refID == refUser.refID) {
            console.log("increment the points ")
            // let docref = doc(usersref, refUser.id))
            const docref = doc(usersref, refuseID)
            updateDoc(docref, {
              points: refUser.points + 1
            })
            console.log("add new user ")
          }
        } else {
          console.log("wrong ref id ")
        }

      }
    }
    )()
  }, [])



  return (
    <div className=" ">
      <input className='outline' type="text" value={value} onChange={(e) => {
        setValue(e.target.value)
      }} />
      <input className='outline' type="text" value={email} onChange={(e) => {
        setEmail(e.target.value)
      }} />
      <button className='px-2 py-1'>Submit</button>


    </div>
  )
}

export default App
