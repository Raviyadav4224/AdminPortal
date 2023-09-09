const sidebarRoutesData = [
  //RPO
  {
    role: "RPO",
    path: "page1",
    pageName: [
      {
        name: "HOME",
        path: "",
        subRoutes: false,
      },
      {
        name: "PBO PROCESSING",
        path: "",
        subRoutes: true,
      },
      {
        name: "SEARCH APPLICATION",
        path: "",
        subRoutes: true,
      },
    ],
  },

  //PIA
  {
    role: "PIA",
    path: "page2",
    pageName: [
      {
        name: "HOME",
        path: "",
        subRoutes: false,
      },
      {
        name: "PBO PROCESSING",
        path: "",
        subRoutes: true,
      },
    ],
  },

  //LGA
  {
    role: "LGA",
    path: "page3",
    pageName: [
      {
        name: "HOME",
        path: "",
        subRoutes: false,
      },
      {
        name: "MIS REPORTS",
        path: "",
        subRoutes: false,
      },
    ],
  },
];
export default sidebarRoutesData;
