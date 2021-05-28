import React, { useState, useEffect } from 'react';

const UploadForm = ({uploader}) => {
    const handleChange = (e) =>{
        uploader(e.target.files[0])
    }

    const [url, setUrl] =useState('');
    const uploader = (file) =>{
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        localStorage.setItem('recent-image',reader.result)
    })
    reader.readAsDataURL(file);
}
useEffect(() => {
    setUrl(localStorage.getItem('recent-image'));
}, [])


    return <form>
        <input type="file" accept ="image/*" onChange ={handleChange}/>
        <UploadForm uploader = {uploader}/>
    </form>;
    

    
}

export default UploadForm;