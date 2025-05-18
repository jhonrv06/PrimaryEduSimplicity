import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabase = createClient("https://vbxgiuknlxiuwpivweny.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZieGdpdWtubHhpdXdwaXZ3ZW55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMDc5NzMsImV4cCI6MjA2MjU4Mzk3M30.vzIfBfC8oR0bhvLlhI9cs6KHJdySSYTDGGvLZCm_Li4");

const prerender = false;
const POST = async ({
  request
}) => {
  try {
    const {
      question,
      text
    } = await request.json();
    const {
      data,
      error
    } = await supabase.from("encuestas_respuestas").insert([{
      respuesta: question,
      respuesta_texto: text,
      fecha: /* @__PURE__ */ new Date()
    }]);
    if (error) {
      console.log("error al insertar datos", error);
    } else {
      console.log("datos insertados ", data);
    }
    return Response.json({
      mensaje: "funciona"
    });
  } catch (error) {
    console.error("Error:", error);
  }
  return Response.json("Error interno", {
    status: 500
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
