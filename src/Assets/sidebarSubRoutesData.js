const sidebarSubRoutesData = [
  //RPO Subroutes
  {
    role: "RPO",
    pageName: [
      {
        name: "PBO PROCESSING",
        pages: [
          {
            name: "Cancel Passport",
            path: "",
          },
          {
            name: "Print Passport",
            path: "",
          },
          {
            name: "Handle PSK Cases",
            path: "",
          },
          {
            name: "Review Objetion Response",
            path: "",
          },
        ],
      },
      {
        name: "SEARCH APPLICATION",
        pages: [
          {
            name: "With Passport Number",
            path: "",
          },
          {
            name: "Without Passport Number",
            path: "",
          },
        ],
      },
    ],
  },

  //PIA Subroutes
  {
    role: "PIA",
    pageName: [
      {
        name: "PBO PROCESSING",
        pages: [
          {
            name: "Cancel Passport",
            path: "",
          },
          {
            name: "Delete Index/Caution Remarks",
            path: "",
          },
        ],
      },
    ],
  },

  // LGA Subroutes
  {
    role: "LGA",
    pageName: [
      {
        name: "PBO PROCESSING",
        pages: [
          {
            name: "View Applicant Form",
            path: "",
          },
          {
            name: "Impose Penalty",
            path: "",
          },
          {
            name: "Handle PSK Cases",
            path: "",
          },
        ],
      },
      {
        name: "MIS REPORTS",
        pages: [
          {
            name: "With Passport Number",
            path: "",
          },
          {
            name: "Without Passport Number",
            path: "",
          },
        ],
      },
    ],
  },
];
export default sidebarSubRoutesData;
