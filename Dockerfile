# # Usar la imagen oficial de Nginx
# FROM nginx

# # Remplazar la configuración de Nginx con la tuya
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copiar tus archivos HTML, CSS y JS al contenedor
# COPY *.html /usr/share/nginx/html/
# COPY *.css /usr/share/nginx/html/
# COPY *.js /usr/share/nginx/html/

# # Copiar tus imágenes, modelos 3D y archivos de audio
# COPY src /usr/share/nginx/html/src
FROM nginx:latest

# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./ /usr/share/nginx/html/juegos/

# Expone el puerto 80 para que puedas acceder a tu aplicación desde el navegador
EXPOSE 80