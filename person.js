// 建立一個物件 user，包含 name & age 兩個屬性
var user = { 
    name: '結語',  // 初始名字
    age: '0'      // 初始年齡
};

// 修改 user 物件的名字屬性
user.name = "椅存";

// 修改 user 物件的年齡屬性
user.age = "100";

// 將 user 的資訊寫入到 id = "user" 的 HTML 元素中
// 顯示格式： 椅存100歲
document.getElementById("user").innerHTML = user.name + user.age + "歲";
