export default function ProjectDetails({ title, description }) {
  return (
    <div className="px-[1rem]">
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-[.9rem] w-full leading-[1.5rem] p-4 lg:p-0 max-w-[40rem]">
        {description}
      </p>
    </div>
  );
}
