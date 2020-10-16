基于vue-element-admin的测试工具交互系统

静态资源nginx.conf访问配置参考如下，自行替换后端地址

#user                                    admin admin;
events 
{
                                        worker_connections 65535;
}
http 
{
        include                         mime.types;
        default_type                    application/octet-stream;
        server_tokens                   on;
        log_format main                 '$remote_addr - $remote_user [$time_local] "$http_x_forwarded_for" "$http_j_forwarded_for" '
                                                        '"$request" $status $bytes_sent '
                                                        '"$http_referer" "$http_user_agent" '
                                                        '"$gzip_ratio"';
        #charset                        utf-8;
        server_names_hash_bucket_size   128;
        client_header_buffer_size       32k;
        large_client_header_buffers     4 32k;
        client_max_body_size            300m;
        sendfile                        on;
        tcp_nopush                      on;
        keepalive_timeout               0;
        tcp_nodelay                     on;
        client_body_buffer_size         512k;
        fastcgi_intercept_errors        on;
        proxy_connect_timeout           90;
        proxy_read_timeout              180;
        proxy_send_timeout              180;
        proxy_buffer_size               256k;
        proxy_buffers                   4 256k;
        proxy_busy_buffers_size         256k;
        proxy_temp_file_write_size      256k;
        proxy_intercept_errors          on;
        server_name_in_redirect         off;
        proxy_hide_header       X-Powered-By;

        gzip                            on;
        gzip_min_length                 100;
        gzip_buffers                    4 16k;
        gzip_http_version               1.0;
        gzip_comp_level                 9;
        gzip_types                      text/plain application/x-javascript text/css application/xml;
        gzip_vary                       on;
        gzip_proxied                       any;
        #error_page 400 401 402 403 404 405 408 410 412 413 414 415 500 501 502 503 506 = http://www.jd.com/error.html;

log_format realaddr_47837            '$remote_addr - $remote_user [$time_local] "$http_x_forwarded_for" "$http_j_forwarded_for" '
                                '"$request" $status $bytes_sent '
                                '"$http_referer" "$http_user_agent" '
                                '"$gzip_ratio" '
                                '$request_time $upstream_response_time';

upstream tomcat_vue_element {
    server 127.0.0.1:8011  weight=10 max_fails=2 fail_timeout=30s ;
}			
								
server {
    listen          8080;

    location / {
		root             /dist/;
    index            index.html;
    }
	
location /back-end/ {
      proxy_next_upstream     http_500 http_502 http_503 http_504 error timeout invalid_header;
  proxy_set_header        Host  $host;
      proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_pass       http://tomcat_vue_element;
  expires                 0;
      add_header 'Access-Control-Allow-Origin' $http_origin;
      add_header 'Access-Control-Allow-Credentials' 'true';
      add_header 'Access-Control-Allow-Methods' 'GET,POST';
}

location /logs/ {
    autoindex       off;
    deny all;
}

}
}
