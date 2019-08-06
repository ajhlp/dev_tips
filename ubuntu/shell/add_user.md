新建系统用户
===

1. 创建组

```bash
groupadd dev    
```

2. 增加用户，并指定所属组

```bash
useradd -m -g dev -G adm,sudo -s /bin/bash liuzhijie
```

