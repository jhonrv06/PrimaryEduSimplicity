import fs from 'fs';
import path from 'path';
import { fromPath } from 'pdf2pic';
import dotenv from 'dotenv';
dotenv.config();

const WP = process.env.WP_BASE_URL;
const routeApi: string = "/wp-json/wp/v2/";

async function getAllMedia(pagesTotal: number) {
    try{/*
        let dataTotal = [];
        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100`);
        const pagesTotal = response.headers.get('X-WP-TotalPages');
        const data = await response.json();

        dataTotal = [...data];
        
        for(let i = 0; i < pagesTotal; i++){

            dataTotal.map( ({title, guid}) =>{
                const titleR = title.rendered;
                const pdfUrl = guid.rendered;
                console.log("iniciando descarga " + i)
            descargarPdf(pdfUrl, titleR );
        })

            const response1 = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100&page=${pagesTotal}`);
            const data2 = await response1.json();

            dataTotal = [...data2];
        }*/

        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100&page=${pagesTotal}`);
        const data = await response.json();

        
        const media = data.map( ({title, guid}) =>{
            const titleR = title.rendered;
            const pdfUrl = guid.rendered;
            
            descargarPdf(pdfUrl, titleR )
            
        })

        return media ;
        
    }catch(error){
        console.log(`Error al obtener los recursos${error}`)
    }

}

async function descargarPdf(url:string, title: string) {
    //console.log("Iniciando descarga y conversión de PDF a imagen...");
    
    const name = title.replace("#"," ");
    const localPdfPath = `./temp/${name}.pdf`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error al descargar PDF: ${response.statusText}`);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    fs.mkdirSync('./temp', { recursive: true });
                
    fs.writeFileSync(localPdfPath, buffer);
    console.log("✅ PDF descargado y guardado localmente.");

    ConvertirPDF(localPdfPath, title)
    return
    
}

await getAllMedia(1);

async function ConvertirPDF(routePDF: string, namePdf: string) {

    try {
         
        /*
        const psfprueba = [ {title: "archivo1", url: 'https://primaryedusimplicity.com/wp-content/uploads/2025/05/INTRODUCING-MYSELF.pdf' },
                            {title: "archivo2", url: 'https://primaryedusimplicity.com/wp-content/uploads/2025/05/DOMESTIC-ANIMALS.pdf' }
         ]*/
            
               
                const outputDir = './public/thumbnails';
                fs.mkdirSync(outputDir, { recursive: true });

                
                const convert = fromPath(routePDF, {
                density: 150,
                saveFilename: namePdf,
                savePath: outputDir,
                
                format: "png",
                width: 600,
                height: 800
                });
                
                console.log("🖼️ Convirtiendo PDF a imagen...");
                await convert(1); // solo la primera página
                const oldPath = path.join('./public/thumbnails', `${namePdf}.1.png`);
                const newPath = path.join('./public/thumbnails', `${namePdf}.png`);
                fs.renameSync(oldPath, newPath);
                console.log("✅ Imagen generada correctamente en 'public/thumbnails/months.png'");

                return
                
    }catch (error) {
        console.error("❌ Error durante la descarga o conversión:", error);
    }
    
}



