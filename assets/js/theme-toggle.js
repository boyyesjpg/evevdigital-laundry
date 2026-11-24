/* ==========================================================================
   EVEVDIGITAL DUAL THEME SWITCHER ENGINE (Anti-FOUC + Smooth Dark/Light)
   Dapat dimuat di <head> (Anti-FOUC instan) atau di akhir <body>.
   ========================================================================== */

(function () {
  const STORAGE_KEY = "evev_theme_preference";
  const LEGACY_KEY = "evev_theme";

  const SUN_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="5"></circle>' +
    '<line x1="12" y1="1" x2="12" y2="3"></line>' +
    '<line x1="12" y1="21" x2="12" y2="23"></line>' +
    '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>' +
    '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>' +
    '<line x1="1" y1="12" x2="3" y2="12"></line>' +
    '<line x1="21" y1="12" x2="23" y2="12"></line>' +
    '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>' +
    '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>' +
    "</svg>";

  const MOON_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>' +
    "</svg>";

  function safeGetStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSetStorage(key, val) {
    try {
      window.localStorage.setItem(key, val);
    } catch (e) {
      // Ignore storage quota / private mode errors
    }
  }

  function getPreferredTheme() {
    const saved = safeGetStorage(STORAGE_KEY) || safeGetStorage(LEGACY_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    if (window.PROFIL_USAHA && (window.PROFIL_USAHA.temaDefault === "dark" || window.PROFIL_USAHA.temaDefault === "light")) {
      return window.PROFIL_USAHA.temaDefault;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function syncToggleButtons(theme) {
    const isDark = theme === "dark";
    const buttons = document.querySelectorAll(".theme-toggle-btn, #themeToggleBtn");
    buttons.forEach(function (btn) {
      btn.innerHTML = isDark ? SUN_ICON : MOON_ICON;
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("title", isDark ? "Beralih ke Mode Terang (Light Mode)" : "Beralih ke Mode Gelap (Dark Mode)");
      btn.setAttribute("aria-label", isDark ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap");
    });
  }

  function applyTheme(theme, persist) {
    const normalized = theme === "dark" ? "dark" : "light";
    const root = document.documentElement;
    root.setAttribute("data-theme", normalized);
    root.style.colorScheme = normalized;

    if (document.body) {
      document.body.classList.toggle("dark-theme", normalized === "dark");
    }

    if (persist !== false) {
      safeSetStorage(STORAGE_KEY, normalized);
      safeSetStorage(LEGACY_KEY, normalized);
    }

    syncToggleButtons(normalized);
  }

  // Anti-FOUC: Eksekusi langsung sebelum paint pertama
  document.documentElement.classList.add("theme-preload");
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);
  document.documentElement.style.colorScheme = initialTheme;

  // Expose public API
  window.setTheme = function (theme) {
    applyTheme(theme, true);
  };

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark", true);
  };

  // Alias kompatibilitas
  window.toggleThemeMode = window.toggleTheme;

  function initThemeControls() {
    const current = getPreferredTheme();
    applyTheme(current, false);

    // Lepaskan class preload setelah frame pertama agar transisi mulus saat diklik
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        document.documentElement.classList.remove("theme-preload");
      });
    });

    const buttons = document.querySelectorAll(".theme-toggle-btn, #themeToggleBtn");
    buttons.forEach(function (btn) {
      if (btn.dataset.themeBound === "true") return;
      btn.dataset.themeBound = "true";
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.toggleTheme();
      });
    });

    // Ikuti perubahan tema OS jika user belum menyimpan preferensi manual
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemChange = function (e) {
        if (!safeGetStorage(STORAGE_KEY) && !safeGetStorage(LEGACY_KEY)) {
          applyTheme(e.matches ? "dark" : "light", false);
        }
      };
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleSystemChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleSystemChange);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeControls);
  } else {
    initThemeControls();
  }
})();
