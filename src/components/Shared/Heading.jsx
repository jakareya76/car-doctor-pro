const Heading = ({ title, heading, text }) => {
  return (
    <div className="text-center">
      <h2 className="text-primary font-bold text-lg">{title}</h2>
      <h1 className="text-4xl text-black font-bold leading-relaxed">
        {heading}
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto">{text}</p>
    </div>
  );
};

export default Heading;
