const SectionLeft = ({ data }) => {
  return (
    <div
      className="w-full lg:w-9/12 bg-white rounded-md lg:p-4 overflow-hidden text-[17px] leading-[1.6]"
      dangerouslySetInnerHTML={{
        __html: data?.content || "",
      }}
    ></div>
  );
};

export default SectionLeft;
