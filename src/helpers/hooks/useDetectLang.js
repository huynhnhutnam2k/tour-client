'use client'

import { useEffect, useState } from "react";
import { __ } from "../utils";

export const useDetectLang = () => {
  const [lang, setLang] = useState("vi");
  
  useEffect(() => {
    setLang(document.documentElement.lang);
  }, []);


  return {
    lang,
    setLang,
    trans: (key, name = "default") => {
        return __(lang, key, name);
    },
  };
};

