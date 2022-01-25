<html lang="ko">
    <head>
        <?php include("../include/header.php"); ?>
        <?php include("../asset/css/login.css"); ?>
    </head>
    <body width="100%" height="100%">
        <form action="index.html" method="post" class="loginForm">
            <h2>Login</h2>
            <div class="idForm">
                <input type="text" class="id" placeholder="ID">
            </div>
            <div class="passForm">
                <input type="password" class="pw" placeholder="PW">
            </div>
            <button type="button" class="btn" id="login">LOG IN</button>
            <button type="button" class="btn" id="signin">SIGN IN</button>
        </form>
    </body>
</html>