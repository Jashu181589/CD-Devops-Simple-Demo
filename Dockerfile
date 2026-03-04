# Use official nginx alpine image for lightweight container
FROM nginx:alpine

# Copy all website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx runs automatically when container starts
CMD ["nginx", "-g", "daemon off;"]
