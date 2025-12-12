// 點擊 ID = "addBotton" 的按鈕，觸發函式⬇️
document.getElementById("addBotton").onclick = function () {

    // 創建新按鈕
    const btn = document.createElement("button");

    // 新按鈕的文本為 "給我錢"
    btn.textContent = "給我錢";

    // 把創建的按鈕添加到 ID = "container"
    document.getElementById("container").appendChild(btn);
}