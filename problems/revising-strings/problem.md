---

# REVISING STRINGS

你將常會需要修改字串的內容。字串有內建的函數可以讓你查看和操作內容。以下範例使用了 .replace() 方法。

var example = 'this example exists';


example = example.replace('exists', 'is awesome');


console.log(example);


注意到為了改變example變數的值，我們需要再次使用等號。使其等於右側example.replace() 方法執行後的值。

挑戰：
建立一個檔案名為 revising-string.js。定義一個名為 pizza 的變數，設定其字串 'pizza is alright'。使用 .replace() 方法來改變 alright 成 wonderful。再來使用 console.log() 來印出最後結果。

Check to see if your program is correct by running this command:

`javascripting verify revising-strings.js`

---
