---

# 遍歷陣列

在這個挑戰中我們將會使用 **For 迴圈** 存取與操作陣列裡值的清單

可以用整數來存取陣列裡的值。

陣列裡的每個元素都可以用數值識別，從 `0` 開始。

所以在下面這個陣列裡，`hi` 可以用數值 `1` 識別：

```js
var greetings = ['hello', 'hi', 'good morning'];
```

可以像這樣存取：

```js
greetings[1];
```

所以在 **For 迴圈** 內部，我們可以在陣列後面的方括號內使用變數 `i` 取代直接使用整數。

So inside a **for loop** we would use the `i` variable inside the square brackets instead of directly using an integer.

## 挑戰

建立一個名為 `looping-through-arrays.js` 的檔案。

在這個檔案內，定義一個名為 `pets` 的變數，並賦予一個陣列：

```js
['cat', 'dog', 'rat'];
```

建立一個 For 迴圈，可以改變陣列裡的每個字串成為複數型態。

Create a for loop that changes each string in the array so that they are plural.

你可以在 For 迴圈裡使用這樣的程式碼：

```js
pets[i] = pets[i] + 's';
```

使用 `console.log()` 把 `pets` 陣列顯示到終端機。

執行下面的命令，測試你的程式是不是正確地執行：

`javascripting verify looping-through-arrays.js`

---
