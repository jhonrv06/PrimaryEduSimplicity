import fs from 'fs';
import path from 'path';
import { fromPath } from 'pdf2pic';
import dotenv from 'dotenv';
dotenv.config();

const WP = process.env.WP_BASE_URL;
const routeApi: string = "/wp-json/wp/v2/";

async function getAllMedia() {
    try{
        const response = await fetch(`${WP}${routeApi}media?mime_type=application/pdf&per_page=100`);
        const data = await response.json();

        
        console.log(data);
    }catch(error){
        console.log(`Error al obtener los recursos${error}`)
    }

}

const pdfUrl = 'https://primaryedusimplicity.com/wp-content/uploads/2025/05/MONTHS-OF-THE-YEAR.pdf';
const localPdfPath = './temp/months.pdf';

console.log("Iniciando descarga y conversión de PDF a imagen...");

async function descargarYConvertirPDF() {

    try {
        const pdfs = await getAllMedia();

      
        const response = await fetch(pdfUrl);
        if (!response.ok) throw new Error(`Error al descargar PDF: ${response.statusText}`);

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        fs.mkdirSync('./temp', { recursive: true });

        fs.writeFileSync(localPdfPath, buffer);
        console.log("✅ PDF descargado y guardado localmente.");
        /*
        const outputDir = './public/thumbnails';
        fs.mkdirSync(outputDir, { recursive: true });

        const convert = fromPath(localPdfPath, {
        density: 150,
        saveFilename: "months",
        savePath: outputDir,
        format: "png",
        width: 600,
        height: 800
        });

        console.log("🖼️ Convirtiendo PDF a imagen...");
        await convert(1); // solo la primera página
        console.log("✅ Imagen generada correctamente en 'public/thumbnails/months.png'");*/

    }catch (error) {
        console.error("❌ Error durante la descarga o conversión:", error);
    }
    
}



descargarYConvertirPDF();

