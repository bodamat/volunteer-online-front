export const activities: ActivityItem[] = [
  {
    slug: "test",
    title: "Test",
    imageUrl: [
      "/volunteer_dog.jpg",
      "/volunteer_dog.jpg",
      "/volunteer_dog.jpg",
      "/volunteer_dog.jpg",
    ],
    shortDescription: "Short test",
    socialContactURL: [
      "https://google.com",
      "https://google.com",
      "https://google.com",
      "https://google.com",
    ],
    city: "Kyiv",
    tags: ["Medicine", "Animals"],
    createdAt: 1714918056000,
    updatedAt: 1715090856000,
  },
  {
    slug: "test2",
    title: "Test",
    imageUrl: [
      "https://media.geeksforgeeks.org/wp-content/uploads/20210205135735/Screenshot219.png",
    ],
    shortDescription: "Short test",
    socialContactURL: ["https://google.com", "https://google.com"],
    city: "Zhytomyr",
    tags: ["Army"],
    createdAt: 1714918056000,
    updatedAt: 1715263656000,
  },
];

export interface ActivityItem {
  slug: string;
  title: string;
  imageUrl: string[];
  shortDescription: string;
  socialContactURL: string[];
  city: string;
  tags?: string[];
  createdAt: number;
  updatedAt: number;
}
