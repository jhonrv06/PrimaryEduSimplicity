import { useRef, useState, useEffect } from 'preact/hooks';
import {TEXTMODAL} from '../../scripts/modalArrayQuestions.ts'
import  './styles/modal.css';

export default function ModalSurvey() {
    const openM = useRef<HTMLDialogElement>(null);
    const [response, setResponse] = useState('');
    const [dataResponse, setdataResponse] = useState({question: "", text:""});
    const [mesagge, setMesagge] = useState("");

    function closeModal() {
       openM.current?.close();
    }

    async function getData(e: Event) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const question = formData.get('question') as string;
        const question2 = formData.get('text1') as string;

        const data = {
            question: question,
            text: question2
        };
        setdataResponse(data);
        setResponse("Gracias por responder la encuesta");
        return data
    }
    
    async function sendData() {
    await fetch('api/endpointEncuesta', {
           method:  'POST',
           headers: {'content-type': 'application/json'},
           body: JSON.stringify(dataResponse),
    });
    //const inf = await POSTDATA;
    }


    useEffect(()=>{
//comprobar si dataResponse esta con datos para no enviar datos vacíos al enpoind
        const isEmpty = Object.values(dataResponse).every(dataObj =>  dataObj == "");

        if(!isEmpty){
            sendData();
            setMesagge("form__message");
        }
    },[dataResponse])

    return(
    <>
        <section class="containerModal">
            <dialog class="modal__container" id="modal" open ref={openM}>
                <header>
                    <button onClick={closeModal}>X</button>
                    <h3>{TEXTMODAL[0]}</h3>
                    <p>{response}</p>
                </header>
                <form className={mesagge}  onSubmit={getData} >
                    <label>
                        <input type="radio" name="question" id="MuyFacil" value="MuyFacil" />
                        Muy fácil
                    </label>
                    <label>
                        <input type="radio" name="question" id="Fácil" value="Fácil" />
                        Fácil
                    </label>
                    <label>
                        <input type="radio" name="question" id="Regular" value="Regular" />
                        Regular
                    </label>
                    <label>
                        <input type="radio" name="question" id="Difícil" value="Difícil"/>
                        Difícil
                    </label>
                    <label>
                        <input type="radio" name="question" id="MuyDifícil" value="MuyDifícil"/>
                        Muy Difícil
                    </label>
                    <label>
                        Ingresa un comentario
                        <input type="text" name="text1" id="Comentario"/>
                    </label>  
                    <button type="submit" className="button__modal" >Enviar</button>
                </form>
            </dialog>
        </section>
    </>

    )
    
}