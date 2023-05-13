const config = require("./config.json");
const Compare = require('./compare');

const { browsers, options, V3_41_1, V4_44 } = config;

let screenshotsRoot = '../screenshots';

// 1. Eliminar page
async function executeTestForEliminarPages() {
  const eliminar_page = new Compare(screenshotsRoot, 'eliminar-page', browsers, options, V3_41_1, V4_44)
  if (!eliminar_page.checkBrowsers()) return;
  return await eliminar_page.compareImages();;
}
(async () => console.log(await executeTestForEliminarPages()))();

// 2. Crear post borrador
async function executeTestForCrearPostBorrador() {
  const crear_post_borrador = new Compare(screenshotsRoot, 'crear-post-borrador', browsers, options, V3_41_1, V4_44)
  if (!crear_post_borrador.checkBrowsers()) return;
  return await crear_post_borrador.compareImages();;
}
(async () => console.log(await executeTestForCrearPostBorrador()))();

// 3. Crear tag
async function executeTestForCrearTag() {
  const crear_tag = new Compare(screenshotsRoot, 'crear-tag', browsers, options, V3_41_1, V4_44)
  if (!crear_tag.checkBrowsers()) return;
  return await crear_tag.compareImages();;
}
(async () => console.log(await executeTestForCrearTag()))();

// 4. Eliminar tag
async function executeTestForEliminarTag() {
  const eliminar_tag = new Compare(screenshotsRoot, 'eliminar-tag', browsers, options, V3_41_1, V4_44)
  if (!eliminar_tag.checkBrowsers()) return;
  return await eliminar_tag.compareImages();;
}
(async () => console.log(await executeTestForEliminarTag()))();

// 5. Crear page
async function executeTestForCrearPage() {
  const crear_page = new Compare(screenshotsRoot, 'crear-page', browsers, options, V3_41_1, V4_44)
  if (!crear_page.checkBrowsers()) return;
  return await crear_page.compareImages();;
}
(async () => console.log(await executeTestForCrearPage()))();

// 6. Crear post publicado
async function executeTestForCrearPostPublicado() {
  const crear_post_publicado = new Compare(screenshotsRoot, 'crear-post-publicado', browsers, options, V3_41_1, V4_44)
  if (!crear_post_publicado.checkBrowsers()) return;
  return await crear_post_publicado.compareImages();;
}
(async () => console.log(await executeTestForCrearPostPublicado()))();

// 7. Eliminar post
async function executeTestForEliminarPost() {
  const eliminar_post = new Compare(screenshotsRoot, 'eliminar-post', browsers, options, V3_41_1, V4_44)
  if (!eliminar_post.checkBrowsers()) return;
  return await eliminar_post.compareImages();;
}
(async () => console.log(await executeTestForEliminarPost()))();

// 8. Ver internal tag
async function executeTestForVerInternalTag() {
  const ver_internal_tag = new Compare(screenshotsRoot, 'ver-internal-tag', browsers, options, V3_41_1, V4_44)
  if (!ver_internal_tag.checkBrowsers()) return;
  return await ver_internal_tag.compareImages();;
}
(async () => console.log(await executeTestForVerInternalTag()))();

// 9. Invitar usuario
async function executeTestForInvitarUsuario() {
  const invitar_usuario = new Compare(screenshotsRoot, 'invitar-usuario', browsers, options, V3_41_1, V4_44)
  if (!invitar_usuario.checkBrowsers()) return;
  return await invitar_usuario.compareImages();;
}
(async () => console.log(await executeTestForInvitarUsuario()))();

// 10. Private page general
async function executeTestForPrivatePageGeneral() {
  const private_page_general = new Compare(screenshotsRoot, 'private-page-general', browsers, options, V3_41_1, V4_44)
  if (!private_page_general.checkBrowsers()) return;
  return await private_page_general.compareImages();;
}
(async () => console.log(await executeTestForPrivatePageGeneral()))();
