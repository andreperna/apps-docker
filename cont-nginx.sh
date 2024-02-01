docker exec nginx sh -c "apk update && apk update && apk add nginx-mod-http-fancyindex"
docker exec -it nginx sh