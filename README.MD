# Installation

npm install

# STAGE

http://209.97.132.2/

# Get production build

npm run deploy

# Config

./config.json

# Quick dev start

npm run dev

The website is served http://localhost:8080

# Apache config example
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Nginx config example
server {
  listen 80;
  #listen [::]:80 default_server;
  server_name cashier.boosterpetrovich.com;
  root /var/www/cashier/spa;
  index index.html;
  location / {
    #expires 4h;
    try_files $uri /index.html;

  }
  location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
    expires 30d;
    add_header Pragma public;
    add_header Cache-Control "public";
    access_log off;
  }
}
