import { useEffect, useState, useRef} from  'preact/hooks'
//import * as pdfjsLib from 'pdfjs-dist';

import { getDocument, GlobalWorkerOptions  } from "pdfjs-dist/legacy/build/pdf.mjs";



const urlPdf = 'https://primaryedusimplicity.com/wp-content/uploads/2025/05/MONTHS-OF-THE-YEAR.pdf';

export  default  function Guias(){
    const [urlPdfiamgen, seturlPdfiamgen] = useState();

    const canva = useRef<HTMLCanvasElement>(null);
    
    console.log("componente funcionando")
   
    useEffect(() =>{
        async function renderPdf() {
        GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        try{
            const loadingTask =  getDocument(urlPdf);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 0.2 });
            const canvasCurrent = canva.current;

            if (!canvasCurrent) return;
            const contex = canvasCurrent?.getContext('2d');
            canvasCurrent.height = viewport.height;
            canvasCurrent.width = viewport.width;

            await page.render({ canvasContext: contex!, viewport }).promise;
          
            const dataUrl = canvasCurrent.toDataURL('img/png'); // base64 string
            console.log(dataUrl);
            seturlPdfiamgen(dataUrl);
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
            <canvas  ref={canva} style={{ display: 'none' }}/>
            <img src={urlPdfiamgen} width={"100px"} height={"100px"}  alt="" />

        </>
)}