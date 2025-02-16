/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "utfs.io"}]
        // carregar imagens da aplicação, dominio que permite renderizar a imagem
    }
};

export default nextConfig;
