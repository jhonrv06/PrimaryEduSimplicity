import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_XIBxkixS.mjs';
/* empty css                                     */
import { $ as $$MainLayout } from '../chunks/MainLayout_CVzw8EEN.mjs';
export { renderers } from '../renderers.mjs';

const $$TusClasesContenido = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container"> <section class="section__container --transición"> <h3>Transición</h3> </section> <section class="section__container --primero"> <h3>Primero</h3> </section> <section class="section__container --segundo"> <h3>Segundo</h3> </section> <section class="section__container --tercero"> <h3>Tercero</h3> </section> </div>`;
}, "/home/jhon/Desarrollo_Web/PrimaryEduSimplicity/src/components/TusClasesContenido.astro", void 0);

const $$TusCursos$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-qyanbd7h> <div class="container__grupo" data-astro-cid-qyanbd7h> <aside data-astro-cid-qyanbd7h> <h3 data-astro-cid-qyanbd7h>Cursos</h3> <button class="button" id="Transición" data-astro-cid-qyanbd7h>Transición</button> <button class="button" id="Primero" data-astro-cid-qyanbd7h>Primero</button> <button class="button" id="Segundo" data-astro-cid-qyanbd7h>Segundo</button> <button class="button" id="Tercero" data-astro-cid-qyanbd7h>Tercero</button> <button class="button" id="Cuarto" data-astro-cid-qyanbd7h>Cuarto</button> <button class="button" id="Quinto" data-astro-cid-qyanbd7h>Quinto</button> </aside> <main data-astro-cid-qyanbd7h> ${renderComponent($$result, "TusClasesContenido", $$TusClasesContenido, { "data-astro-cid-qyanbd7h": true })} </main> </div> </div> `;
}, "/home/jhon/Desarrollo_Web/PrimaryEduSimplicity/src/components/Tus_Cursos.astro", void 0);

const $$TusCursos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tus cursos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Tus_Cursos", $$TusCursos$1, {})} ` })}`;
}, "/home/jhon/Desarrollo_Web/PrimaryEduSimplicity/src/pages/tusCursos.astro", void 0);

const $$file = "/home/jhon/Desarrollo_Web/PrimaryEduSimplicity/src/pages/tusCursos.astro";
const $$url = "/tusCursos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TusCursos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
