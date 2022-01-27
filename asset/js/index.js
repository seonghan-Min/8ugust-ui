function index_init () {

    // 전역변수
    var global = new Object;
    global.access_token = '';
    global.user_name    = '';

    setting_default();
    setting_event();

    function setting_default () {
        global.access_token = localStorage.getItem('access_token');
        if (global.access_token !== null) {
            $('#userDropdown').css('display', 'block');
            $('#userLoginBtn').css('display', 'none');
        }
    }

    function setting_event () {
        console.log('Event Setting');
    }
}