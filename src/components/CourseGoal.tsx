import type { PropsWithChildren, FC } from "react";

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div className="p-4 border bg-gray-700 m-0.5 shadow-xl shadow-cyan-500/30">
        <div className="flex items-center">
          <h2 className="m-0 text-gray-500">{title}</h2>
          <button className="ml-auto">Delete</button>
        </div>

        <span className="text-gray-200">{children}</span>
      </div>
    </article>
  );
};
export default CourseGoal;
