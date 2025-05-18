export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({
  request
}) => {
  try {
    const {
      question,
      text
    } = await request.json();
    return Response.json({
      mensaje: "funciona"
    });
  } catch (error) {
    console.error("Error:", error);
  }
  return Response.json({
    mensaje: "Error"
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   POST,
   prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
