// import { doc } from "prettier";
// import { response } from "express";
//import e from "express";
// import e from "express";
import AbstractView from "./AbstractView.js";
import userData from "../js/data.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }
  getHtml() {
    return `
    <style>
      @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
    </style>
    <div class="bg">
      <main class="sign-in">
        <aside class="left">
          <div class="logo_container">
            <!-- <img class="logo" src="/static/assets/images/logo.png" /> -->
            <h1>inspace</h1>
          </div>
        </aside>
        <article class="right">
          <div id="login-box">
            <h3>Log in</h3>
            <form action="post" id="login-form">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  name="ID"
                  id="ID"
                  class="form-control login-input"
                  placeholder="name@example.com"
                />
                <label for="ID">Email address</label>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control login-input"
                  id="password"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>

              <!-- <input
                type="text"
                name="ID"
                id="ID"
                placeholder="ID"
                class="login-input"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
                class="login-input"
              /> -->
              <a href="/" data-link
                ><input type="button" id="login-Btn" value="로그인"
              /></a>
              <button id="google-login">
                <!-- <img
                  src="/static/assets/images/Google_2015_logo.svg.png"
                  width="40"
                /> -->
                <!-- <img src="../../assets/images/google-logo.png" width="40" /> -->
                Google 계정으로 로그인
              </button>
            </form>
            <div id="form-box">
              <ul>
                <a href="/signup" data-link
                  ><button id="register-Btn">회원가입</button></a
                >
                <li>|</li>
                <a href="/find" data-link
                  ><button id="find-Btn">비밀번호 찾기</button></a
                >
              </ul>
            </div>
          </div>
        </article>
        
      </main>
    </div>
  `;
  }

  defaultFunc() {
    sessionStorage.clear();
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    document.getElementById("root").appendChild(script);

    // @@@@@ 로그인 기능 @@@@@@
    const $loginBtn = document.getElementById("login-Btn");
    $loginBtn.addEventListener("click", () => {
      // id, password 입력값 받기

      // let loginSuccess = false;

      let ID = document.getElementById("ID").value;
      let PASSWORD = document.getElementById("password").value;

      // 예외처리
      if (ID.length < 6) {
        alert("6자 이상 아이디를 입력해주세요.");
      } else if (PASSWORD.length < 8) {
        alert("8자 이상 비밀번호를 입력해주세요.");
      } else {
        // 전달할 유저 데이터
        const loginUser = {
          userId: ID,
          password: PASSWORD, // 유저스키마에 패스워드 저장할 때 해시값 사용하면 해시값으로 변경후 password 전송
        };

        const loginURL =
          "http://elice-kdt-sw-1st-vm08.koreacentral.cloudapp.azure.com:5000/login";
        //서버 fetch
        fetch(loginURL, {
          method: "POST",
          body: JSON.stringify(loginUser),
          // cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log("res.ok", res);
            return;
            if (res.ok) {
              // $loginBtn.parentElement.href = "/main";
              return res.json();
            } else {
              alert("존재하지 않는 회원이거나 아이디 비밀번호가 틀립니다.");
              throw new Error("아이디가 틀립니다.");
            }
          })
          .then((data) => {
            localStorage.setItem("checkIn", data.checkIn);
            localStorage.setItem("id", data.id);
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("name", data.name);

            window.location = "/main";
          })
          .catch((err) => {
            console.log(err);
          });
        // sessionStorage.setItem("history", "login");
        // function movePage() {
        //   $loginBtn.parentElement.href = "/main";
        //}
      }
    });
  }
  // });
}
