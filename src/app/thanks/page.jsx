import dynamic from "next/dynamic";

const ThanksModules = dynamic(() => import("@/modules/thanks"));

const ThanksPage = () => {
  return (
    <>
      <ThanksModules />
    </>
  );
};

export default ThanksPage;
