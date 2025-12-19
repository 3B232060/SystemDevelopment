// 建立一個物件 user，包含 name & age 兩個屬性
var user = {
    name: '結語',  // 初始名字
    age: '100',     // 初始年齡
    showMsg: function () {
        alert("我是" + this.name + "，今天" + this.age + "歲");
    }
};

// 修改 user 物件的名字屬性
// user.name = "椅存";

// 修改 user 物件的年齡屬性
// user.age = "100";

document.getElementById("user").placeholder = user.name;
document.getElementById("user").placeholder = user.age;


// 將 user 的資訊寫入到 id = "user" 的 HTML 元素，中顯示格式： 椅存100歲
document.getElementById("user").innerHTML = user.name + user.age + "歲";

// alert(user.name + user.age);

var score = {
    math: 0,
    English: 100,
    showMsg: function () {
        alert("數學" + this.math + "，英文" + this.English);
    }
}