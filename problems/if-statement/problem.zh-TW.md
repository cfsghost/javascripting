---

# IF 判斷式

狀態判斷式會基於指定的布林值（boolean），改變程式的執行方式。

一個狀態判斷式長得像這樣：

```js
if(n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less or equal than 1.');
}
```

你必須在小括弧中插入邏輯判斷，這個判斷應該會返回真（true）或假（false）。

如果邏輯判斷返回假（false），else 區塊的程式碼就會執行。這個區塊可以省略。

## 挑戰

建立一個名為 `if-statement.js` 的檔案。

在檔案內，宣告一個名為 `fruit` 的變數，並賦予變數內容為 **orange**。

如果 `fruit` 變數內的字串長度大於五，使用 `console.log()` 顯示「**The fruit name has more than five characters.**」。如果沒有大於五，則顯示「**The fruit name has less or equal than five characters.**」。

**執行下面的命令，測試你的程式是不是正確地執行：**

`javascripting verify if-statement.js`

---
