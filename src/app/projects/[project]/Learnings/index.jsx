export default function Learnings({ learnings }) {
  return (
    <ul className="flex flex-col p-4 lg:p-0 gap-2 lg:gap-[0.6rem] text-[.8rem] lg:text-[.9rem] italic">
      {learnings.map((project, index) => (
        <li key={index}>{project.learning}</li>
      ))}
    </ul>
  );
}
