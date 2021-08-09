# python 使用 windows com api

> 仅限于windows环境. 👉[.NET API 官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word?view=word-pia)

## 1. 初始化应用实例

```cmd
# 启动word应用程序
word = client.gencache.EnsureDispatch("Word.Application")
```

## 2. 初始化文档实例

```cmd
# 新建空白文档
new_document = word.Documents.Add()

# 打开已有文档
exist_document = word.Documents.Open(r"D:\xxx\xxx.docx")
```

## 3. Paragraph 段落

> 段落可以修改样式、设置大纲级别等. 👉[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.paragraph?view=word-pia)

```
# 遍历文档中的所有段落
for paragraph in exist_document.Paragraphs:
    # 获取大纲级别 (1-9级, 10普通文本)
    paragraph.OutlineLevel

    # 首行缩进
    paragraph.FirstLineIndent

    # 行距 (1行12磅)
    paragraph.LineSpacing   

    # 文档内容
    paragraph.Range

    # 格式
    paragraph.Format
```

## 4. Sections 节

> WORD文件中通过分节符区分的块内容. 👉[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.sections?view=word-pia)

```cmd
# 通过Range获取指定区域内的节
paragraph.Range.Sections

# 通过Document获取文档全部节
exist_document.Sections
```

## 5. Fields 域

> 选定内容、 范围或文档中的域. 👉[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.field?view=word-pia)
>
> [具体类型](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.wdfieldtype?view=word-pia)
>
> **13 目录域**

```cmd
# 获取文件中所有域
exist_document.Fields

# 删除
field.Delete()

# 更新
field.Update()
```