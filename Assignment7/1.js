function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "pass") ok();
  else fail();
}

let user = {
  name: "Kalab",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.call(user), user.loginFail.call(user));
