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