# 在ubuntu20.04上设置python2为默认方式

> Python 2已经从ubuntu20.04中移除，但是如果您有需要旧Python的遗留程序，仍然可以安装和配置。

## 步骤1 安装Python 2

SSH到您的Ubuntu 20.04服务器并使用apt安装Python 2。

```bash
$ sudo apt install python2

# 检查Python版本。
$ python2 -V
Python 2.7.17
```

## 步骤2 检查可用的Python版本

```bash
# 检查系统上可用的Python版本。
$ ls /usr/bin/python*
/usr/bin/python2  /usr/bin/python2.7  /usr/bin/python3  /usr/bin/python3.8

#查看是否配置了Python替代方案。
$ sudo update-alternatives --list python
update-alternatives: error: no alternatives for python
```

## 步骤3 设置替代版本

```bash
# 设置两个Python替代:Python2和Python3。
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python2 1
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 2

#确认两个备选方案都可以使用:
$ sudo update-alternatives --list python
/usr/bin/python2
/usr/bin/python3

#选择可选的Python版本。
$ sudo update-alternatives --config python

There are 2 choices for the alternative python (providing /usr/bin/python).
  Selection    Path              Priority   Status
------------------------------------------------------------
* 0            /usr/bin/python3   2         auto mode
  1            /usr/bin/python2   1         manual mode
  2            /usr/bin/python3   2         manual mode
Press  to keep the current choice[*], or type 

selection number: 1

# 输入您的选择。在本例中，选择1来选择python2。

# 检查你的python版本:
$ python -V
Python 2.7.18rc1 

# 安装pip

curl https://bootstrap.pypa.io/pip/2.7/get-pip.py --output get-pip.py

sudo python2 get-pip.py
```
