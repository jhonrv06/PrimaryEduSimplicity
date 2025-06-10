import { useEffect, useState, useRef} from  'preact/hooks'
//import * as pdfjsLib from 'pdfjs-dist';

import { getDocument, GlobalWorkerOptions  } from "pdfjs-dist/legacy/build/pdf.mjs";



const urlPdf = 'https://primaryedusimplicity.com/wp-content/uploads/2025/05/MONTHS-OF-THE-YEAR.pdf';

export  default  function Guias(){
    
    const canva = useRef<HTMLCanvasElement>(null);
    
    console.log("componente funcionando")
   
    useEffect(() =>{
        async function renderPdf() {
        GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        try{
            const loadingTask =  getDocument(urlPdf);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 0.5 });
            const canvasCurrent = canva.current;

            if (!canvasCurrent) return;
            const contex = canvasCurrent?.getContext('2d');
            canvasCurrent.height = viewport.height;
            canvasCurrent.width = viewport.width;

            await page.render({ canvasContext: contex!, viewport }).promise;
          
            console.log(contex);
            return

        }catch(error){
            console.log(`Error al obtener el PDF ${error}`)
        }
        
    }
     renderPdf()
    
        //console.log(canvasCurrent);
    },[])

     return(
        <>
            <canvas width={"40"} height={"40"} ref={canva} style={{ border: '1px solid black' }}>
                
            </canvas>
        </>
)}