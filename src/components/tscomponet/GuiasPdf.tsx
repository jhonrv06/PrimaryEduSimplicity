import { useEffect, useState, useRef} from  'preact/hooks'
//import * as pdfjsLib from 'pdfjs-dist';
import  './styles/img.css';
import { getDocument, GlobalWorkerOptions  } from "pdfjs-dist/legacy/build/pdf.mjs";


export  default  function Guias(){
    const [urlPdfiamgen, seturlPdfiamgen] = useState();
    const [containerVisible, setcontainerVisible] = useState("");

    const imgInfo = document.querySelectorAll('.contenImg');

    imgInfo.forEach(element => {
        
        element.addEventListener("click", (e) => {
            const target = e.currentTarget;
            const dataInfo = target.dataset.info;

            seturlPdfiamgen(dataInfo);
            setcontainerVisible("container__Guia_pdf_visible");
            console.log(dataInfo)
        });
    })
   
    const urlPdf = `/guiasPdf/${urlPdfiamgen}.pdf`;
        
    const canva = useRef<HTMLCanvasElement>(null);
    console.log(urlPdf)
    console.log("componente funcionando")
   
    useEffect(() =>{
        async function renderPdf() {
        console.log(urlPdf)
        GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
            
        try{
            
            const loadingTask =  getDocument(urlPdf);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 1.5 });
            const canvasCurrent = canva.current;

            if (!canvasCurrent) return;
            const contex = canvasCurrent?.getContext('2d');
            canvasCurrent.height = viewport.height;
            canvasCurrent.width = viewport.width;
            
            await page.render({ canvasContext: contex!, viewport }).promise;
            
            return

        }catch(error){
            console.log(`Error al obtener el PDF ${error}`)
        }
        
    }
     renderPdf()
    
        //console.log(canvasCurrent);
    },[urlPdfiamgen])

     return(
        <> 
            <section className={`container__Guia_pdf ${containerVisible}`} >
                <div class={'container__canvas'}>
                    <canvas class={'canvas__render'}  ref={canva} />
                </div>
            </section>
        </>
)}