import { useEffect, useState, useRef} from  'preact/hooks'
import  './styles/img.css';

type Props = {
  urlPdf: string;
  linkPdf: string;
};
 const urlPdf2 = `/thumbnails/GUÍA 4 TRANSICIÓN-PRIMER PERIODO.png`;

export  default  function GuiasImg( { urlPdf, linkPdf }: Props){

  const urlPdfRender = `/thumbnails/${urlPdf}.png`
     return(
        <>
           <img className={"contenImg"} src={urlPdfRender} width={"200px"} height={"auto"}  alt="" data-info={urlPdf}/>
        </>
)}