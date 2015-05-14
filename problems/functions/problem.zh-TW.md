---

# 函式（function）

函式就是一段可以處理輸入，並且產生輸出的程式碼。

以下是範例：

```js
function example (x) {
  return x * 2;
}
```

我們可以用下面的方式 **呼叫（call）** 函式，並得到數值10的結果：

```js
example(5)
```

下面的範例假設 `example` 函式將會使用數值作為輸入參數，並將會返回數值乘以二的結果。

## 挑戰

建立一個名為 `functions.js` 的檔案。

在檔案裡，定義一個名為 `eat` ，並且使用一個 `food` 參數的函式。這個參數應該會是一個字串（string）。

在函式裡，會像這樣返回 `food` 參數：

```js
return food + ' tasted really good.';
```

在 `console.log()` 的小括號裡，呼叫 `eat()` 函式，並把字串 `bananas` 作為參數傳入。

執行下面的命令，測試你的程式是不是正確地執行：

`javascripting verify functions.js` 

---
