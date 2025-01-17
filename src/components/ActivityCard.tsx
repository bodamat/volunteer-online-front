import { ActivityItem } from "@/constants/activities";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/router";

export function ActivityCard({ activity }: { activity: ActivityItem }) {
  const router = useRouter();

  return (
    <Card
      className="md:max-w-sm overflow-hidden shadow-card hover:cursor-pointer hover:shadow-xl"
      onClick={() => router.push(`/activity/${activity.slug}`)}
    >
      <CardHeader className={"p-0 pb-1"}>
        <div className="overflow-hidden">
          <img
            src={activity.imageUrl[0]}
            alt={activity.title}
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
      </CardHeader>
      <CardContent className={"p-4"}>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>{activity.shortDescription}</CardDescription>
      </CardContent>
    </Card>
  );
}
