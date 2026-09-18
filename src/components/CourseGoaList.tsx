import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";
import InfoBox from "./InfoBox";
import type { ReactNode } from "react";
import { useRef, useEffect } from "react";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [goals]);
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul className="grid grid-cols-2 gap-4 h-[300px] overflow-y-auto overflow-x-hidden">
        {goals.map((goals) => (
          <li className="only:col-span-2" key={goals.id}>
            <CourseGoal
              id={goals.id}
              title={goals.title}
              onDelete={onDeleteGoal}
            >
              <span>{goals.description}</span>
            </CourseGoal>
          </li>
        ))}
      </ul>
      <div ref={bottomRef} />
    </>
  );
}
