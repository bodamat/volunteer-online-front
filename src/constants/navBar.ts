export const navBar: NavBarItem[] = [
  {
    name: "Activity",
    link: "/",
  },
  {
    name: "Favourites",
    link: "/favourites",
  },
];

interface NavBarItem {
  name: string;
  link: string;
}

export const isRegistered: boolean = true;
