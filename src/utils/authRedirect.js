// Auth redirect utility
let navigateRef = null;

export const setNavigateRef = (navigate) => {
  navigateRef = navigate;
};

export const authRedirect = (path) => {
  if (navigateRef) {
    navigateRef(path);
  } else {
    // Fallback to window location if navigate is not available
    window.location.href = path;
  }
};
