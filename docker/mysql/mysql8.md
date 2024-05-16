# create instance

```bash
sudo docker run --name mysql8 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:8.4
```

# enable remote connect

```bash

sudo docker exec -it mysql8 /bin/bash

mysql -p

```

```bash
mysql> ALTER USER 'root'@'%' IDENTIFIED BY '123456';

mysql> flush privileges;
```
