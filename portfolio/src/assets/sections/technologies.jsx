import {technologies, iconProps} from "../constants/tech";

export default function Tech() {
  const techImages = technologies.map((svg, index) => (
    <svg key={index} {...iconProps}>
      <path d={svg.path} />
    </svg>
  ))
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 glass">
        {techImages.map((techImage, index) => (
          <article
            className="p-2 mb-2 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
            key={index}
          >
            <div className="relative rounded-2xl">{techImage}</div>
          </article>
        ))}
      </div>
    </>
  );
}
