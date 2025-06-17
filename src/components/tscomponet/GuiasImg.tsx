import { useEffect, useState, useRef} from  'preact/hooks'


type Props = {
  urlPdf: string;
};
 const urlPdf2 = `/thumbnails/GUÍA 4 TRANSICIÓN-PRIMER PERIODO.png`;


export  default  function GuiasImg( { urlPdf }: Props){

  const urlPdfRender = `/thumbnails/${urlPdf}.png`

    useEffect(() =>{
       
        
    },[])

     return(
        <>
            <img src={urlPdfRender} width={"200px"} height={"auto"}  alt="" style={{ border: '1px solid black'
        } }/>

        </>
)}