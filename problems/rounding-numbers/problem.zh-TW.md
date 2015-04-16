---

# 四捨五入

我們可以使用熟悉的運算子，如 `+`、`-`、`*`（乘）、`/`（除）及 `%`（求餘數）來做基礎的數學運算。

如果要做複雜的數學操作，可以使用 `Math` 物件。

在這個挑戰中，我們將會使用 `Math` 物件對數值四捨五入。

## 挑戰

建立一個名為 `rounding-numbers.js` 的檔案。

在這個檔案中定義一個名為 `roundUp` 的變數，並賦予變數浮點數 `1.5`。

我們將會使用 `Math.round()` 方法對數值做四捨五入的運算。

`Math.round()` 的使用範例如下：

```js
Math.round(0.5);
```

把 `roundUp` 變數作為參數傳遞給 `Math.round()` 方法，並把輸出結果賦予給第二個名為 `rounded` 的變數。

使用 `console.log()` 把 `pets` 陣列顯示到終端機。

執行下面的命令，測試你的程式是不是正確地執行：

`javascripting verify rounding-numbers.js`

---
