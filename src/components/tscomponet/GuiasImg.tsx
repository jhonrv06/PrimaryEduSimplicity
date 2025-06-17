import { useEffect, useState, useRef} from  'preact/hooks'


type Props = {
  urlPdf: string;
};
 const urlPdf2 = `/thumbnails/GUÍA1 SEGUNDO-PRIMER PERIODO.png`;


export  default  function GuiasImg( { urlPdf }: Props){
  
    //console.log(urlPdf)
  

    useEffect(() =>{
       
        
    },[])

     return(
        <>
            <img src={urlPdf2} width={"200px"} height={"auto"}  alt="" style={{ border: '1px solid black'
        } }/>

        </>
)}