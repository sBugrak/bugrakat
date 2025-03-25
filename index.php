<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline';">
    <title>BUGRAKAT</title>
    <link rel="stylesheet" href="style/reset.css">
    <link rel="stylesheet" href="style/main.css">
    <link rel="stylesheet" href="style/navbar.css">
    <link rel="stylesheet" href="style/fonts.css">
</head>
<body>
    <nav class="navbar">
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="burger-menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                <g> 
                    <path d="M5 12H20" stroke="#eff6e0" stroke-width="2" stroke-linecap="round"/>
                    <path d="M5 17H20" stroke="#eff6e0" stroke-width="2" stroke-linecap="round"/>
                    <path d="M5 7H20" stroke="#eff6e0" stroke-width="2" stroke-linecap="round"/>
                </g>
            </svg>
        </label>
        <h1 class="title"><a style="cursor: pointer;">ツ Bugkat</a></h1>
        <ul class="link-list">
            <li onclick="loadContent('about')">About Me</li>
            <li onclick="loadContent('register')">Register</li>
            <li onclick="loadContent('enter')">Enter</li>
        </ul>
    </nav>
    <div id="content">
    </div>
    <script src="scripts/index/index.js"></script>
</body>
</html>