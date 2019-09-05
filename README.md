### 中文转成拼音

---

#### 如何使用

```
getTranscription(str, split, uppercase, first)
// str 要转的汉字
// split 拼音分隔符
// uppercase 是否大写
// first 是否是获取首字母
```

```
npm install interpretchinese

import InterpretChinese from 'interpretchinese'
```

- 转拼音

```
InterpretChinese.getTranscription('你', '-', true)

你：ni
```

- 转首字母

```
InterpretChinese.getTranscription('你', '-', true, true)
你：N
```
