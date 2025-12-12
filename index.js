// 在網頁上直接寫入文字（插入到文件最前面）
document.write("哈囉");

//<noscript>
//    您的瀏覽器未啟用 JavaScript，某些功能可能無法使用。
//</noscript>

// 彈跳視窗警告訊息
// alert("iiiiii");

// 把 id="txt" 的 div 內容改成 "您好"
document.getElementById("txt").textContent = "您好";

// -------------------------------
// 建立一個新 <p> 段落
const p = document.createElement("p");
// 設定段落內容文字
p.textContent = "段落叫做 paragraph";
// 將段落加到 <body> 的最後面
document.body.appendChild(p);
// -------------------------------

// 把 id="heading" 的 div 改成一個真正的 <h1> 標題
document.getElementById("heading").innerHTML = "<h1> 嘩啦嘩啦 </h1>";
