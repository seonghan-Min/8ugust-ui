function errorDetail(error) {
    alert(error);
}

function isEmpty(object) {
    // Object
    // String
    // Array
}

// 엔터키 이벤트
function enterKey(page) {
    if (window.event.keyCode == 13) {
        switch (page) {
            case 'login':
                $('#login').click();
                break;
            default:
                break;
        }
    }
}

// 토큰 유효성 검사
function checkTokenAPI(token) {
    alert('검사 할 시간');
}