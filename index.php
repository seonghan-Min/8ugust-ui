<?php ?>
<html lang="ko">
    <head>
        <?php include("include/header.php"); ?>
    </head>
    <body>
        <!-- Page Wrapper -->
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div class="sidebar-brand-text mx-3">8ugust</div>
                </a>
                <hr class="sidebar-divider my-0">   <!-- Side Bar divider -->
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">
                        <i class="icon-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <hr class="sidebar-divider">   <!-- Side Bar divider -->
                <div class="sidebar-heading">Contents</div>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar" style="">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Custom Components:</h6>
                            <a class="collapse-item" href="#">Buttons</a>
                            <a class="collapse-item" href="#">Cards</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Page Wrapper -->
    </body>
</html>