import { useState } from "react";


export const useMyImage = ()=>{
    const [myimage,setMyImage] = useState("");
    return{myimage,setMyImage}
}