Docker启动命令
===

```bash
# 创建数据目录
mkdir /some/dir/nexus-data && chown -R 200 /some/dir/nexus-data

# 启动
sudo docker run -d -p 8081:8081 --name nexus -v /some/dir/nexus-data:/nexus-data -e INSTALL4J_ADD_VM_PARAMS="-Xms512m -Xmx512m -XX:MaxDirectMemorySize=512m" sonatype/nexus3
```

[官方说明](https://hub.docker.com/r/sonatype/nexus3/)