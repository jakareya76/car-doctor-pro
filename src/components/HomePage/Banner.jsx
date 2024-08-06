const Banner = () => {
  return (
    <div className="text-white">
      <div className="carousel flex w-full mt-4">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-top bg-no-repeat bg-cover py-40 rounded-xl"
          >
            <div className="h-full  w-full flex justify-center md:justify-start items-center md:pl-36">
              <div className="space-y-6">
                <h1 className="md:text-6xl text-4xl  max-w-sm font-bold">
                  {banner.title}
                </h1>
                <p className="max-w-md">{banner.text}</p>
                <button className="btn btn-primary mr-4">Discover More</button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12">
              <a href={banner.prev} className="btn btn-primary btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-primary btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    text: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    text: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    text: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    text: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
