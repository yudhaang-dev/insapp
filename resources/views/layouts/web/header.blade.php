<header id="page-topbar">
  <div class="layout-width">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box horizontal-logo">
          <a href="{{ route('dashboard.index') }}" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="{{ asset('storage/base/logo-dark.png') }}" alt="" height="22">
                        </span>
            <span class="logo-lg">
                            <img src="{{ asset('storage/base/logo-dark.png') }}" alt="" height="17">
                        </span>
          </a>

          <a href="{{ route('dashboard.index') }}" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="{{ asset('storage/base/logo.png') }}" alt="" height="22">
                        </span>
            <span class="logo-lg">
                            <img src="{{ asset('storage/base/logo.png') }}" alt="" height="17">
                        </span>
          </a>
        </div>

        <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
          <span class="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
          </span>
        </button>
      </div>

      <div class="d-flex align-items-center">
        <div class="dropdown ms-sm-3 header-item topbar-user">
          <button type="button" class="btn shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
            <span class="d-flex align-items-center">
                <img class="rounded-circle header-profile-user"
                     src="{{ auth()->user()->picture != NULL ? asset("storage/images/original/".auth()->user()->picture) : asset('assets/images/no-content.svg') }}"
                     alt="Header Avatar">
                <span class="text-start ms-xl-2">
                    <span
                      class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ auth()->user()->fullname }}</span>

                </span>
            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <h6 class="dropdown-header">Welcome {{ auth()->user()->fullname }}</h6>
            <a class="dropdown-item" href="{{ route('profile.index') }}"><i
                class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Profile</span></a>
            <a class="dropdown-item" href="{{ route('change-password.index') }}"><i
                class="mdi mdi-key text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Ubah Password</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="{{ route('logout') }}"><i
                class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle"
                                                                                     data-key="t-logout">Logout</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
