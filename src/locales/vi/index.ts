import { buttonVi } from "./buttonVi";
import { commonVi } from "./commonVi";
import { formVi } from "./formVi";
import { aboutVi, contactVi } from "./pageVi";


/* eslint-disable import/no-anonymous-default-export */
export default {
    ...commonVi,
    ...buttonVi,
    ...aboutVi, 
    ...contactVi, 
    ...formVi
};
