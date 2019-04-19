修改sh默认使用bash
===

## 查看当前指向

```bash
ls -l /bin/sh

# out
lrwxrwxrwx 1 root root 4 Feb 19  2014 /bin/sh -> dash
```

## 切换sh为bash

```bash
sudo dpkg-reconfigure dash
```

然后选择**\<否\>** 或 **\<No\>**

## 再次执行查看是否修改成功

```bash
ls -l /bin/sh

# out
lrwxrwxrwx 1 root root 4 Apr 19 10:20 /bin/sh -> bash
```
