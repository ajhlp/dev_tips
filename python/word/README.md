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

## 6. Lists 列表集合

> 文件中的所有列表 👉[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.lists?view=word-pia)

```cmd
# 文件中列表的数量
exist_document.Lists.Count
```

## 7. List 列表

> 一个列表对象 👉[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.list?view=word-pia)

```cmd
for list in exist_document.Lists:

    # 获取列表的所有段落
    list.ListParagraphs

    # 获取ListFormat对象，进而获取更多list的属性
    list.Range.ListFormat

    # 列表值转为文本
    list.ConvertNumbersToText()
```

## 8. ListFormat 列表格式属性

> 代表可应用于范围中各段落的列表格式属性 👉[官方文档](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.office.interop.word.listformat?view=word-pia)


**ListType 枚举值**
 
|值|说明|
|--|--|
2|项目符号列表
1|可在段落正文中使用的 ListNum 域
5|混合数字列表
0|不带项目符号、编号或分级显示的列表
4|分级显示的列表
6|图片项目符号列表
3|简单数字列表


```cmd
# 获取列表编号
for list in exist_document.Lists:

    # 列表类型
    list.Range.ListFormat.ListType

    # 列表值转为文本
    list.Range.ListFormat.ConvertNumbersToText()

    # 获取列表的所有段落(注意：迭代顺序是倒序)
    for paragraph in list.ListParagraphs:
        
        # 列表编号
        paragraph.Range.ListFormat.ListString

        # 列表级别
        paragraph.Range.ListFormat.ListLevelNumber

        # 列表本级别内的值
        paragraph.Range.ListFormat.ListValue
```