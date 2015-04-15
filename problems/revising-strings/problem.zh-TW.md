---

# 倒轉字串

你將常常需要改變字串的內容。

字串內建了檢查和處理字串內容的功能。

這裡是一個使用 `.replace()` 方法的範例：

```js
var example = 'this example exists';
example = example.replace('exists', 'is awesome');
console.log(example);
```

注意，要改變原本賦予 `example` 變數的內容，我們要再一次使用等號，這次在等號右邊放上 `example.replace()` 方法。

## 作業：

建立一個名為 `revising-strings.js` 的檔案。

定義一個名為 `pizza` 的變數，並且賦予這個變數一個字串：`pizza is alright`。

使用 `.replace()` 方法把字串裡的 `alright` 換成 `wonderful`。

使用 `console.log()` 把 `.replace()` 方法的結果顯示在終端機。

執行下面的命令，測試你的程式是不是正確地執行：

`javascripting verify revising-strings.js`

---
