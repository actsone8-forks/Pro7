import Store from "../store";
/**
 * This function is used to check if the user is authenticated or not.
 *
 * @param {*} to
 * @param {*} from
 * @param {*} next
 */
export const userCanAccessRoute = (to, from, next) => {
  const isLoggedIn = Store.getters.isLoggedIn;
  console.log("isLoggedIn", isLoggedIn);
  if (isLoggedIn) {
    // If the user is logged in, continue to the next (desired) page
    next();
    return true;
  } else {
    // If the user is not logged in, redirect to the login page
    next("/login");
    return false;
  }
};