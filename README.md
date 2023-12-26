This is a simple CI/CD example using Github Action and AWS EC2.
===============

Nginx config:

    server {
      server_name YOUR_URL;
    
      location / {
                    proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_pass http://localhost:3000;
    
            }
    }

Configuring the self-hosted runner application as a service (after config host runner):

    sudo ./svc.sh install
    sudo ./svc.sh start

Associate domain to server and add free ssl:

1. Replace YOUR_URL in nginx configuration
2. Add A record in DNS management
3. Install certbot
