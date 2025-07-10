// Ubicación: src/pages/_document.tsx

import data from '@/data';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  // Asegúrate de que esta URL sea la de tu sitio web final
  const URL = 'https://andresmunoz.vercel.app'; 

  return (
    <Html lang="en">
      <Head>
        {/* --- Metadatos Clave para SEO y Redes Sociales --- */}
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={data.keywords} name="keywords" />
        
        {/* --- Favicons (iconos del navegador) --- */}
        <link href="/logo.svg" rel="icon" />
        <link href="/icon.png" rel="apple-touch-icon" />

        {/* --- Open Graph (cómo se ve tu sitio al compartirlo en Facebook, LinkedIn, etc.) --- */}
        <meta content="website" property="og:type" />
        <meta content={URL} property="og:url" />
        <meta content={data.name} property="og:title" />
        <meta content={data.intro} property="og:description" />
        <meta content={`${URL}/og-image.png`} property="og:image" /> 
        {/* Te recomiendo crear una imagen de 1200x630px llamada 'og-image.png' y ponerla en tu carpeta 'public' */}

        {/* --- Twitter Card (cómo se ve al compartir en Twitter/X) --- */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={data.username} name="twitter:site" />
        <meta content={data.name} name="twitter:title" />
        <meta content={data.intro} name="twitter:description" />
        <meta content={`${URL}/og-image.png`} name="twitter:image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;