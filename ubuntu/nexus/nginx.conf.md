Nginx反向代理配置
===

```
server {
    listen   *:80;
    server_name  nexus.xxx.com;
    
    # allow large uploads of files
    client_max_body_size 1G;
    
    # optimize downloading files larger than 1G
    #proxy_max_temp_file_size 2G;
    
    location / { 
      # Use IPv4 upstream address instead of DNS name to avoid attempts by nginx to use IPv6 DNS lookup
      proxy_pass http://127.0.0.1:8081/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto "http";
    }
}
```