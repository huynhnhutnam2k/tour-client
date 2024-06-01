const SectionLeft = ({ data }) => {
  return (
    <div
      className="w-full lg:w-9/12 bg-gray-primary lg:bg-white rounded-md lg:p-4 overflow-hidden"
      dangerouslySetInnerHTML={{
        __html: data?.content || "",
      }}
    ></div>
  );
};

export default SectionLeft;
