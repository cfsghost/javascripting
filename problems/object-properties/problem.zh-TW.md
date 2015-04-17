---

# 物件屬性（property）

你可以用類似陣列的方法，存取並操作物件屬性（property） –– 也就是物件所包含的鍵值（key）與數值（value）。

這裡是一個使用 **方括號（square brackets）** 的範例：

```js
var example = {
  pizza: 'yummy'
};

console.log(example['pizza']);
```

下面的程式碼將會把字串 `'yummy'` 顯示到終端機。

你也可以使用 **點（dot notation）** 來取得相同的結果：

```js
example.pizza;

example['pizza'];
```

這兩行程式碼都會回應相同的 `yummy`。

## 挑戰

建立一個名為 `object-properties.js` 的檔案。

在檔案裡，定義一個名為 `food` 的變數，像這樣：

```js
var food = {
  types: 'only pizza'
};
```
使用 `console.log()` 把物件 `food` 的屬性 `types` 顯示到終端機。

執行下面的命令，測試你的程式是不是正確地執行：

`javascripting verify object-properties.js`

---
