export default class {
  constructor() {}
  getHtml() {
    return `
    <nav class="navbar navbar-light main-navbar">
      <div class="container-fluid">
        <a class="navbar-brand m-sm-2 mb-0" href="/">
          InSpace
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item dropdown">
            <a class="nav-link userIcon" href="javascript:void(0);" data-bs-toggle="dropdown">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li data-bs-toggle="modal" data-bs-target="#userInfoModal">
                <a class="dropdown-item" href="javascript:void(0);">개인 정보 수정</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#logoutModal">로그아웃</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="border-line-bg">
      <hr class="border-line">
    </div>
      <div
        class="modal fade"
        id="userInfoModal"
        tabindex="-1"
        aria-labelledby="userInfoModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-yellow">
              <h5 class="modal-title" id="userInfoModalLabel">
                계정 정보 수정
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3 row">
                <label for="userId" class="col-sm-4 col-form-label">ID</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="userId"
                    value="email@example.com"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="userName" class="col-sm-4 col-form-label"
                  >이름</label
                >
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="userName" />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="newPassword" class="col-sm-4 col-form-label"
                  >비밀번호</label
                >
                <div class="col-sm-6">
                  <div class="d-grid">
                    <button
                      class="btn btn-primary"
                      data-bs-target="#modifyPwdModal"
                      data-bs-toggle="modal"
                    >
                      비밀번호 변경 하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
              <button type="button" class="btn btn-primary" id="userInfo-modify-btn" data-bs-dismiss="modal">수정하기</button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="modifyPwdModal"
        aria-hidden="true"
        aria-labelledby="modifyPwdModalLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modifyPwdModalLabel">비밀번호</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="oldPasswordInput"
                  placeholder="Password"
                />
                <label for="oldPasswordInput">비밀번호</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="newPasswordInput"
                  placeholder="Password"
                />
                <label for="newPasswordInput">새 비밀번호</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="newPasswordComfirm"
                  placeholder="Password"
                />
                <label for="newPasswordComfirm">새 비밀번호 확인</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                data-bs-target="#userInfoModal"
                data-bs-toggle="modal"
              >
                뒤로 가기
              </button>
              <button type="button" class="btn btn-primary" id="pwd-change-btn">
                비밀번호 변경
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="logoutModalLabel">정말 로그아웃하시겠습니까? <br> 로그아웃하면 자동 퇴실처리가 됩니다. </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" class="btn btn-primary" id="logout-btn" data-bs-dismiss="modal">확인</button>
            </div>
          </div>
        </div>
      </div>
      
      `;
  }
  defaultFunc() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    document.getElementById("root").appendChild(script);

    const $userId = document.getElementById("userId");
    $userId.value = localStorage.getItem("userId");
    const $name = document.getElementById("userName");
    $name.value = localStorage.getItem("name");

    const $password = document.getElementById("oldPasswordInput");
    const $newpassword = document.getElementById("newPasswordInput");
    const $confirmpassword = document.getElementById("newPasswordComfirm");

    const $infoBtn = document.getElementById("userInfo-modify-btn");
    const $pwdBtn = document.getElementById("pwd-change-btn");
    const $logoutBtn = document.getElementById("logout-btn");
    const $modifyPwdModal = document.getElementById("modifyPwdModal");

    let flag = true;

    $infoBtn.addEventListener("click", () => {
      const userInfo = {
        name: $name.value,
      };

      const loginURL =
        "http://elice-kdt-sw-1st-vm08.koreacentral.cloudapp.azure.com:5000/info-change-name";
      //서버 fetch
      fetch(loginURL, {
        method: "POST",
        body: JSON.stringify(userInfo),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            localStorage.setItem("name", $name.value);
            alert("정상적으로 변경되었습니다.");
          } else {
            $name.value = localStorage.getItem("name");
            alert("변경이 안됐습니다.");
            throw new Error("변경이 안됐습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    $pwdBtn.addEventListener("click", () => {
      const pwdInfo = {
        password: $password.value,
        newpassword: $newpassword.value,
        confirmpassword: $confirmpassword.value,
      };

      console.log(pwdInfo);

      const loginURL =
        "http://elice-kdt-sw-1st-vm08.koreacentral.cloudapp.azure.com:5000/info-change-password";
      //서버 fetch
      fetch(loginURL, {
        method: "POST",
        body: JSON.stringify(pwdInfo),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            alert("정상적으로 변경되었습니다.");
          } else {
            alert("변경이 안됐습니다.");
            throw new Error("변경이 안됐습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    $logoutBtn.addEventListener("click", () => {
      fetch(
        `http://elice-kdt-sw-1st-vm08.koreacentral.cloudapp.azure.com:5000/logout`
      )
        .then((res) => {
          if (res.ok) {
            location.href = "/";
          }
        })
        .catch((err) => console.log(err));
    });

    // $modifyPwdModal.addEventListener("show.bs.modal", function (event) {
    //   console.log(event);
    //   if (!flag) {
    //     return event.preventDefault(); // stops modal from being shown
    //   }
    // });
  }
}
