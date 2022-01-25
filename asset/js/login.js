function loginScript () {

    // 전역변수
    var global = new Object;
    global.login_em = '';
    global.login_pw = '';

    setting_default();
    setting_event();

    function setting_default () {
        console.log('Login Page');
    }

    function setting_event () {

        // 로그인 버튼
        $('#login').on('click', function () {
            global.login_em = $('#email').val();
            global.login_pw = $('#password').val();

            if (global.login_em == '') {alert('이메일을 입력하세요.'); return;}     // return_alert 공용함수 제작 예정
            if (global.login_pw == '') {alert('비밀번호를 입력하세요.'); return;}
            callLoginApi();
        });

        // 회원가입 버튼
        $('#signin').on('click', function () {
            console.log('SIGN IN');
        });
    }


    // 로그인 API
    function callLoginApi () {
        console.log('login_api');
        $.ajax({
            url: "http://localhost:4685/api/v1" + "/auth/login",
            type: "POST",
            timeout: 600000,
            data: {
                email    : global.login_em,
                password : global.login_pw
            },
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                if (err.statusText == 'Unauthorized') {
                    alert('이메일 또는 비밀번호를 확인해주세요.');
                    return;
                }
            }
        });
    }

    

    
}