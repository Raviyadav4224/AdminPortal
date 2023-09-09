import userRoles from "./userRoles";

const getAllowedPages = (role='*') => {
   return userRoles[role]
};
export default getAllowedPages
