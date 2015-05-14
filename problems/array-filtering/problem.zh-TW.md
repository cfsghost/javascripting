---

# 過濾陣列

陣列有好幾種操作的方法。

一個常用的功能是把陣列過濾到剩下指定的內容。

我們可以用 `.filter()` 方法做到這個功能。

這是一個例子：

```js
var pets = ['cat', 'dog', 'elephant'];

var filtered = pets.filter(function (pet) {
  return (pet !== 'elephant');
});
```

現在，變數 `filtered` 只含有 `cat` 和 `dog` 了。

## 挑戰

建立一個名為 `array-filtering.js` 的檔案。

在這個檔案內，定義一個名為 `numbers` 的變數，並且賦予這個變數陣列：


```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

像前面一樣，把 `numbers.filter()` 的結果賦予給變數 `filtered`。

傳給 `.filter()` 的函式應該看起來像這樣：

```js
function evenNumbers (number) {
  return number % 2 === 0;
}
```

使用 `console.log()` 把 `filtered` 陣列顯示到終端機。

執行下面的命令，測試你的程式是不是正確地執行：

`javascripting verify array-filtering.js`

---
