export const activities: ActivityItem[] = [
  {
    title: "Test",
    imageUrl: ["/volunteer_dog.jpg"],
    shortDescription: "Short test",
    socialContactURL: ["https://google.com"],
    city: "Ukraine",
    createdAt: "1256234",
    updatedAt: "456234",
  },
  {
    title: "Test",
    imageUrl: [
      "https://media.geeksforgeeks.org/wp-content/uploads/20210205135735/Screenshot219.png",
    ],
    shortDescription: "Short test",
    socialContactURL: ["https://google.com"],
    city: "Ukraine",
    createdAt: "1256234",
    updatedAt: "456234",
  },
];

export interface ActivityItem {
  title: string;
  imageUrl: string[];
  shortDescription: string;
  socialContactURL: string[];
  city: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}
