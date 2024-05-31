/* eslint-disable import/no-anonymous-default-export */
import { buttonEn } from "./buttonEn";
import { commonEn } from "./commonEn";
import { formEn } from "./formEn";
import { aboutEn, contactEn } from "./pageEn";

export default {
    ...commonEn,
    ...buttonEn, 
    ...aboutEn, 
    ...contactEn,
    ...formEn
};
