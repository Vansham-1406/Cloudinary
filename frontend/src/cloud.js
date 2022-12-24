import React,{useState} from 'react'
import axios from 'axios'

const Cloud = () => {
    const [file, setFile] = useState({
        name:"vansham",
        image:""
    })

    const handleFile = (e) => {
        const file = new FileReader();
        file.readAsDataURL(e.target.files[0]);
        file.onloadend = () => {
        setFile({...file,image : file.result})
        };
        file.onerror = () => {
        alert("error in image upload");
        };
    }   

    const handleSubmit = () => {
        axios.post("http://localhost:8340/upload",{
            ...file})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }
  return (
    <div>
        <input type="file" onChange={handleFile}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Cloud