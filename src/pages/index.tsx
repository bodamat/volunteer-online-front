import { ActivityCard } from "@/components/ActivityCard";
import { activities } from "@/constants/activities";

export default function Home() {
  return (
    <div
      className={
        "p-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      }
    >
      {activities.map((activity, index) => (
        <ActivityCard key={index} activity={activity} />
      ))}
    </div>
  );
}
