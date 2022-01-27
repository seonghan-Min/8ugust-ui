<?php ?>
<html lang="ko">
    <head>
        <? include($_SERVER["DOCUMENT_ROOT"]."/include/header.php"); ?>
        <script type="text/javascript" src="/asset/js/index.js"></script>
    </head>
    <body>
        <!-- Page Wrapper -->
        <div id="wrapper">
            <!-- Side Bar -->
            <? include($_SERVER["DOCUMENT_ROOT"]."/include/sidebar.php"); ?>
            <!-- Side Bar -->
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
                <!-- Content -->
                <div id="content">
                    <!-- Top Bar -->
                    <? include($_SERVER["DOCUMENT_ROOT"]."/include/topbar.php"); ?>
                    <!-- Top Bar -->
                </div>
                <!-- Content -->
                <!-- Footer -->
                <footer class="sticky-footer bg-white">

                </footer>
                <!-- Footer -->
            </div>
            <!-- Content Wrapper -->
        </div>
        <!-- Page Wrapper -->
    </body>
    <script>
        index_init();
    </script>
</html>