<html lang="ko">
    <head>
        <?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.php"); ?>
        <link href="/asset/css/login.css" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="/asset/js/login.js"></script>
    </head>
    <body width="100%" height="100%">
        <div class="title">8ugust</div>
        <form action="index.html" method="post" class="loginForm">
            <h2>Login</h2>
            <div class="idForm">
                <input type="text" class="em" id="email" onkeypress="enterKey('login');" placeholder="EMAIL">
            </div>
            <div class="passForm">
                <input type="password" class="pw" id="password" onkeypress="enterKey('login');" placeholder="PW">
            </div>
            <button type="button" class="btn login" id="login">LOG IN</button>
            <button type="button" class="btn signin" id="signin">SIGN IN</button>
        </form>
    </body>
    <script>
        loginScript();
    </script>
</html>