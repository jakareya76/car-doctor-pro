import Image from "next/image";

const About = () => {
  return (
    <div className="py-20 px-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="relative w-full md:w-1/2">
          <Image
            src="/assets/images/about_us/person.jpg"
            width={500}
            height={550}
            className="top-0 left-0 rounded-xl w-full"
          />
          <Image
            src="/assets/images/about_us/parts.jpg"
            width={300}
            height={350}
            className="absolute -bottom-10 -right-16 w-[250px] border-[10px] md:w-[280px] lg:w-[450px] border-white"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-primary font-semibold">About Us</h2>
          <h1 className="text-black font-bold max-w-sm text-2xl leading-tight md:text-5xl">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-600 max-w-lg mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <br />
          <p className="text-gray-600 max-w-lg">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn px-8 btn-primary text-lg mt-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
