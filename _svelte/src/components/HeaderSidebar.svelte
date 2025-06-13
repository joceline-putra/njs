<header id="page-topbar">
    <div class="layout-width">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box horizontal-logo">
                    <a href="/" class="logo logo-dark" aria-label="Home">
                        <span class="logo-sm">
                            <img src="../public/assets/velzon/images/logo-sm.png" alt="" height="26">
                        </span>
                        <span class="logo-lg">
                            <img src="../public/assets/velzon/images/logo-dark.png" alt="" height="22">
                        </span>
                    </a>

                    <a href="/" class="logo logo-light" aria-label="Home">
                        <span class="logo-sm">
                            <img src="../public/assets/velzon/images/logo-sm.png" alt="" height="26">                            
                        </span>
                        <span class="logo-lg">
                            <img src="../public/assets/velzon/images/logo-light.png" alt="" height="22">                            
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon" aria-label="Open navigation menu">
                    <span class="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <!-- App Search-->
                <form class="app-search d-none d-md-block" style="display:none!important;">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Search..." autocomplete="off" id="search-options" value="">
                        <span class="mdi mdi-magnify search-widget-icon"></span>
                        <span class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                    </div>
                    <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                        <div data-simplebar style="max-height: 320px;">
                            <!-- item-->
                            <div class="dropdown-header">
                                <h6 class="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                            </div>

                            <div class="dropdown-item bg-transparent text-wrap">
                                <a href="<?php echo base_url(); ?>" class="btn btn-soft-secondary btn-sm rounded-pill">how to setup <i class="mdi mdi-magnify ms-1"></i></a>
                                <a href="<?php echo base_url(); ?>" class="btn btn-soft-secondary btn-sm rounded-pill">buttons <i class="mdi mdi-magnify ms-1"></i></a>
                            </div>
                            <!-- item-->
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                            </div>

                            <!-- item-->
                            <button type="button" class="dropdown-item notify-item" aria-label="Open Analytics Dashboard">
    <i class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
    <span>Analytics Dashboard</span>
</button>

                            <!-- item-->
                            <button type="button" class="dropdown-item notify-item" aria-label="Open Help Center">
    <i class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
    <span>Help Center</span>
</button>

                            <!-- item-->
                            <button type="button" class="dropdown-item notify-item" aria-label="Open My Account Settings">
    <i class="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
    <span>My account settings</span>
</button>

                            <!-- item-->
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                            </div>

                            <div class="notification-list">
                                <!-- item -->
                                <button type="button" class="dropdown-item notify-item py-2" aria-label="Open user notification">
    <div class="d-flex">
        <img src="<?php echo base_url();?>../public/assets/velzon/images/users/avatar-2.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic">
        <div class="flex-grow-1">
            <h6 class="m-0">Angela Bernier</h6>
            <span class="fs-11 mb-0 text-muted">Manager</span>
        </div>
    </div>
</button>
                                <!-- item -->
                                <button type="button" class="dropdown-item notify-item py-2" aria-label="Open user notification">
    <div class="d-flex">
        <img src="<?php echo base_url();?>../public/assets/velzon/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic">
        <div class="flex-grow-1">
            <h6 class="m-0">David Grasso</h6>
            <span class="fs-11 mb-0 text-muted">Web Designer</span>
        </div>
    </div>
</button>
                                <!-- item -->
                                <button type="button" class="dropdown-item notify-item py-2" aria-label="Open user notification">
    <div class="d-flex">
        <img src="<?php echo base_url();?>../public/assets/velzon/images/users/avatar-5.jpg" class="me-3 rounded-circle avatar-xs" alt="user-pic">
        <div class="flex-grow-1">
            <h6 class="m-0">Mike Bunch</h6>
            <span class="fs-11 mb-0 text-muted">React Developer</span>
        </div>
    </div>
</button>
                            </div>
                        </div>

                        <div class="text-center pt-3 pb-1">
                            <a href="pages-search-results.html" class="btn btn-primary btn-sm">View All Results <i class="ri-arrow-right-line ms-1"></i></a>
                        </div>
                    </div>
                </form>
            </div>

            <div class="d-flex align-items-center">

                <!-- Search Bar -->
                <div class="dropdown d-md-none topbar-head-dropdown header-item" style="display:none!important;">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Open search">
                        <i class="bx bx-search fs-22"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                    <button class="btn btn-primary" type="submit" aria-label="Search"><i class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Fullscreen -->
                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen" aria-label="Toggle Fullscreen">
                        <i class='bx bx-fullscreen fs-22'></i>
                    </button>
                </div>
                <!-- Fullscreen -->
                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode" aria-label="Toggle Light/Dark Mode">
                        <i class='bx bx-moon fs-22'></i>
                    </button>
                </div>
                <div class="ms-1 header-item d-none d-sm-flex">
                    <button id="btn_volume_up" type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle btn_volume_up" aria-label="Volume Up">
                        <i class='mdi mdi-volume-high fs-22'></i>
                    </button>
                </div>
                <div class="ms-1 header-item d-none d-sm-flex">
                    <button id="volume_value" type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
                        0
                    </button>
                </div>                            
                <div class="ms-1 header-item d-none d-sm-flex">
                    <button id="btn_volume_down" type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle btn_volume_down" aria-label="Volume Down">
                        <i class='mdi mdi-volume-medium fs-22'></i>
                    </button>
                </div>     
                <!-- Profile -->
                <div class="dropdown ms-sm-3 header-item topbar-user">
                    <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Toggle Profile Menu">
                        <span class="d-flex align-items-center">
                            <!-- site_url('../public/assets/velzon/images/users/user-dummy-img.jpg') -->
                            <img class="rounded-circle header-profile-user" src="../public/assets/velzon/images/users/user-dummy-img.jpg" alt="Header Avatar">
                            <span class="text-start ms-xl-2">
                                <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">John Doe</span>
                                <span class="d-none d-xl-block ms-1 fs-12 user-name-sub-text">john@example.com</span>
                            </span>
                        </span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <h6 class="dropdown-header">Welcome!</h6>
                        <a class="dropdown-item" href="/profile" id="btn_profile" data-s="SESSION-USER" data-bs-toggle="offcanvas" data-bs-target="#div_form_profile" aria-controls="div_form_profile" aria-label="Ganti Gambar"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Ganti Gambar</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="btn_relogin dropdown-item" href="/relogin" id="btn_relogin" data-s="SESSION-USER" aria-label="Relogin"><i class="mdi mdi-account-convert text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Relogin</span></a>    
                        <a class="btn_volume_up dropdown-item" href="/volume_up" id="btn_volume_up" aria-label="Volume Up"><i class="mdi mdi-volume-high text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Volume Up</span></a>                                                             
                        <a class="dropdown-item" href="/logout" aria-label="Logout"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Logout</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="app-menu navbar-menu">
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="/" class="logo logo-dark" aria-label="Home">
            <span class="logo-sm">
                <img src="../public/assets/velzon/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="../public/assets/velzon/images/logo-dark.png" alt="" height="17">
            </span>
        </a>
        <!-- Light Logo-->
        <a href="/" class="logo logo-light" aria-label="Home">
            <span class="logo-sm">
                <img src="../public/assets/velzon/images/logo-sm.png" alt="" height="22">
            </span>
            <span class="logo-lg">
                <img src="../public/assets/velzon/images/logo-light.png" alt="" height="17">
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover" aria-label="Toggle Menu">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">
            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link menu-link" href="/" aria-label="Home">
                        <i class="bx bx-home"></i> <span data-key="t-home">Home</span>
                    </a>
                </li>   
            </ul>      
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title">
                    <span data-key="t-menu">User Workspaces</span>
                </li>    
                <li class="nav-item">
                    <a href="#sidebar-USER-SESSION" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebar-USER-SESSION" data-key="t-USER-SESSION">
                        Menu
                    </a>
                    <div class="menu-dropdown collapse show" id="sidebar-USER-SESSION">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="/mailbox" class="nav-link" data-key="t-mailbox"> Hai</a>
                            </li>
                        </ul>
                    </div>
                </li>                         
            </ul>
           
        </div>
    </div>

    <div class="sidebar-background"></div>
</div>

<!-- removeNotificationModal -->
<div id="removeNotificationModal" class="modal fade zoomIn" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
            </div>
            <div class="modal-body">
                <div class="mt-2 text-center">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style="width:100px;height:100px"></lord-icon>
                    <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p class="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                    </div>
                </div>
                <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
                </div>
            </div>

        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>

<div class="vertical-overlay"></div>