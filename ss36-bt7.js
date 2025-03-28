let users = JSON.parse(localStorage.getItem("users")) || [];

let userName = document.getElementById("userName");
let userPassWord = document.getElementById("userPassWord");

function logIn() {
  let user = users.find(
    (el) => el.user === userName.value && el.passWord === userPassWord.value
  );

  if (user) {
    alert("Đăng nhập thành công!");
    location.href = "ss36-bt7-home.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

function register() {
  let userExist = users.some((el) => el.user === userName.value);

  if (userExist) {
    alert("Tên đăng nhập đã tồn tại!");
  } else {
    users.push({
      user: userName.value,
      passWord: userPassWord.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    location.href = "ss36-bt7-logIn.html";
  }
}

function logOut() {
  location.href = "ss36-bt7-logIn.html";
}
