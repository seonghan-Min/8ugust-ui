function index_init () {

    // 전역변수
    var global = new Object;
    global.access_token = '';
    global.user_name    = '';
    global.login_yn     = '';

    setting_default();
    setting_event();

    function setting_default () {
        global.access_token = localStorage.getItem('access_token');
        global.login_yn     = localStorage.getItem('login_yn');
        if (global.login_yn == 'Y') {
            var base64Payload = global.access_token.split('.')[1];
            var payload = window.atob(base64Payload); 
            var jwt = JSON.parse(payload.toString())

            if (jwt.exp*1000 > Date.now()) {
                $.ajax({
                    url : "http://localhost:4330/api/v1" + "/auth/me",
                    type: "POST",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("Content-type", "application/json");
                        xhr.setRequestHeader("Authorization", "Bearer " + global.access_token);
                    },
                    timeout: 600000,
                    success: function (res) {
                        alert(res);
                    },
                    error: function (err) {
                        alert(err);
                    }
                });
                $('#userDropdown').css('display', 'flex');
                $('#userLoginBtn').css('display', 'none');
                checkTokenAPI(global.access_token);
            }
        }
    }

    function setting_event () {
        console.log('Event Setting');
    }
}