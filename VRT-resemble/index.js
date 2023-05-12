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