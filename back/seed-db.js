const { Product, Category } = require("./api/Models/index");
const Sequelize = require('sequelize')

//const categ = [{name: 'Cuerdas'}, {name: 'Percusion'}, {name: 'Teclados'}, {name: 'Vientos'}]

const instrumento1 = Product.create({
  name: "Guitarra",
  stock: 2000,
  price: 5500,
  imgUrl: 'https://bairesrocks.vteximg.com.br/arquivos/ids/221130-1500-1500/D_NQ_NP_2X_975172-MLA43908744581_102020-F.jpg?v=637396862058470000',
  description: "*****GUITARRA ROMULO GARCIA ESTUDIO SUPERIOR********",
});

const instrumento2 = Product.create({
  name: "Bajo Electrico Ibanez 4 Cuerdas Gsr180bem Blue Metallic",
  stock: 2000,
  price: 15860,
  imgUrl:
    "https://bairesrocks.vteximg.com.br/arquivos/ids/221003-900-900/D_NQ_NP_860642-MLA43674208747_102020-O.jpg?v=637395919638170000",
  description:
    "Con el Ibanez Gio GSR180-BEM Baltic Blue Metallic la compañía tradicional japonesa demuestra una vez más que incluso en la gama de principiantes se puede avanzar en el juego con bajos eléctricos procesados de alta calidad y de excelente sonido",
});

const instrumento3 = Product.create({
  name: "Ukelele Soprano Kala",
  stock: 2000,
  price: 9239,
  imgUrl:
    "https://bairesrocks.vteximg.com.br/arquivos/ids/220464-1500-1500/681586-MLA27134859059_042018-F.jpg?v=637320876291170000",
  description:
    "Ukelele soprano. Tapa de agathis. Cuerpo de agathis. Mástil de caoba. Escala: 347mm. 12 trastes de latón. Diapasón de palisandro.Puente de palisandro. Clavijas de afinación con engranajes. Acabado: Satinado.",
});

const instrumento4 = Product.create({
  name: "Arranger Profesional Teclado Arreglista 76 Teclas Korg Pa4x",
  stock: "100",
  price: "553220",
  imgUrl:
    "https://bairesrocks.vteximg.com.br/arquivos/ids/208606-1500-1500/715624-MLA27872000587_072018-F.jpg?v=637313081133500000",
  description:
    '76 teclas semi pesadas con dinámica sensible y Aftertouch, Polifonía de 128 notas, 1500 sonidos, más de 500 Styles, Disco duro interno de 500 GB, Nuevo motor de sonido EDS-X con tecnología Streaming, Nuevos Multisamples y Drum-Sounds, Efectos para Mastering - Waves Audio Ltd. MAXX Suite (MaxxEQ, MaxxBass, MaxxVolume, MaxxTreble, MaxxStereo) TC Helicon Vocal Processing, Órgano digital de tiradores con 9 zonas de pie, Sampling: Wave, AIFF y formato SoundFront Format (almacenamiento: Formatos Wave, AIFF), PCM Ram Memory 400 MB de usuario, Secuenciador de acorde 512 sonidos de usuario y 128 espacios de almacenamiento para kits de batería de usuarios, Doble secuenciador XDS con Crossfader, Reproduce formatos MP3,MP3+G, KAR y Midi, Secuenciador de 16 pistas, Grabador de Audio, Banco de datos Songbook Music, Completamente compatible con dos los modelos ""i"" y ""Pa"", Ribbon Controller, 8 Faders definibles, Pantalla táctil de 7"" Colour Touch View TFT Conexiones: Micro SD card, USB to Host, USB to Device, Audio out L/R y salida individual 1 y 2, Video Out, RCA, Entrada de micrófono XLR/Jack con alimentación Phantom, Toma de auriculares, Medidas,(An x Pr x Al): 1192 x 364 x 126 mm,  Peso: 16,3 kg',
});

const instrumento5 = Product.create({
  name: "Piano Digital Kurzweil Ka90 88 Teclas Pesadas + Accesorio",
  stock: 3000,
  price: 87617,
  imgUrl:
    "https://bairesrocks.vteximg.com.br/arquivos/ids/205924-1500-1500/772996-MLA31036159662_062019-F.jpg?v=637313072846070000",
  description:
    "El Piano KA90 ofrece una excelente e inmejorable relacion Calidad/Precio, siendo la mejor introducción a los pianos digitales con teclas pesadas a un precio razonable. Trae un mecanismo de teclado pesado con sistema martillo para emular la sensacion de estar tocando un piano acustico, Sonido de piano real y la posibilidad de transportarlo comodamente gracias a su ligero peso (solo 12 kg) 50 estilos de acompañamiento: Ritmos de acompañamiento con la mano izquierda para crear arreglos en tiempo real, acompañamiento interactivo integrado en una gran variedad de géneros musicales. Cuenta con 20 sonidos de alta calidad incorporados ademas de efectos como REVERB y CHORUS y la posibilidad de usarlo como controlador con conexion MIDI USB. Este piano es la eleccion ideal para estudiantes, o para pianistas profesionales que necesitan un instrumentos multiuso sin renunciar al tacto y calidad de sonido de un piano de calidad. Tambien es muy utilizado por profesores para dictar sus clases y en Conservatorios de Musica.",
});

const instrumento6 = Product.create({
  name: "Saxo Tenor Yamaha Modelo Yts480 Incluye Estuche",
  stock: 5,
  price: 186499,
  imgUrl:
    "https://bairesrocks.vteximg.com.br/arquivos/ids/220445-700-700/939624-MLA27134654575_042018-F.jpg?v=637320259246670000",
  description:
    "Laca de saxofón tenor YTS-480 intermedia Bb. Con un diseño influenciado por los saxofones Yamaha de gama alta, el YTS-480 cuenta con entonación muy precisa, un tono cálido y una respuesta rápida. Es ligero pero duradero, y viene con un cuello de calidad profesional estilo 62 para una calidad de sonido más madura. Un mecanismo mejorado de B-C# bajo asegura el cierre constante de la tecla C # baja y promueve una respuesta clara de las notas en el rango bajo del instrumento. Está diseñado desde arriba hacia abajo en lugar de abajo hacia arriba, y la calidad del sonido y la jugabilidad se refleja en esa cultura. ",
});

const categ1 = Category.create({ name: "Cuerdas" });
const categ2 = Category.create({ name: "Percusion" });
const categ3 = Category.create({ name: "Teclados" });
const categ4 = Category.create({ name: "vientos" });

Promise.all([instrumento1, categ1]).then(([i1, c1]) => {
  i1.addCategory([c1]);
});

Promise.all([instrumento2, categ1]).then(([i2, c1]) => {
  i2.addCategory([c1]);
});
Promise.all([instrumento3, categ1]).then(([i3, c1]) => {
    i3.addCategory([c1]);
  });

Promise.all([instrumento4, categ3]).then(([i4, c3]) => {
  i4.addCategory([c3]);
});

Promise.all([instrumento5, categ1, categ3]).then(
  ([i5, c1, c3]) => {
    i5.addCategory([c1, c3]);
  }
);

Promise.all([instrumento6, categ4]).then(([i6, c4]) => {
  i6.addCategory([c4]);
});
