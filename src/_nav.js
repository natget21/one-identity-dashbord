const adminNav = {
  items: [
    {
      name: 'Dashbord',
      url: '/dashbord',
      icon: 'icon-speedometer',
    },
    {
      divider: true,
    },
    {
      name: 'Register',
      url: '/register/accounts',
      icon: 'icon-note',
      // children: [
      //   {
      //     name: "Add Account",
      //     url: "/register/accounts",
      //     icon: "icon-user-follow"
      //   },
      //   {
      //     name: "Add Company",
      //     url: "/register/Company",
      //     icon: "icon-plus"
      //   }
      // ]
    },
    {
      divider: true,
    },
    {
      name: 'Management',
      icon: 'icon-calculator',
      children: [
        {
          name: "User Accounts",
          url: "/management/user",
          icon: "cui-user"
         },
        // {
        //   name: "Admin Accounts",
        //   url: "/management/registeral",
        //   icon: "icon-user"
        // },
        // {
        //   name: "Whitelist Company",
        //   url: "/management/whitelist",
        //   icon: "cui-layers"
        // }
      ]
    },
    {
      divider: true,
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'icon-user'
    },
  ]
};

const registeralNav = {
  items: [
    {
      name: 'Dashbord',
      url: '/dashbord',
      icon: 'icon-speedometer',
    },
    {
      divider: true,
    },
    {
      name: 'Add Identity',
      url: '/identity/new',
      icon: 'icon-user-follow',
    },
    {
      divider: true,
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'icon-user'
    },
  ]
};

const navigation = {
  "admin": adminNav,
  "registeral": registeralNav,
};

export default navigation;