const SectionTitle = ({
  title,
  paragraph,
  name,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  name: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <section itemScope  id={name}>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h1 itemProp="headline" className="mb-4 text-3xl font-bold !leading-tight text-black  ">
          {title}
        </h1>
        <p itemProp="description"  className="text-base !leading-relaxed text-body-color ">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default SectionTitle;
