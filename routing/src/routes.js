// import Home from "./Home.vue";
// import Header from "./Header.vue";
// import User from "./components/User.vue";
// import UserStart from "./components/UserStart.vue";
// import UserEdit from "./components/UserEdit.vue";
// import UserDetail from "./components/UserDetail.vue";
// import NotFound from "./components/NotFound.vue";

const Home = resolve => {
  require.ensure(["./Home.vue"], () => {
    resolve(require("./Home.vue"));
  });
};
const Header = resolve => {
  require.ensure(["./Header.vue"], () => {
    resolve(require("./Header.vue"));
  });
};
const User = resolve => {
  require.ensure(["./components/User.vue"], () => {
    resolve(require("./components/User.vue"));
  },"user");
};
const UserStart = resolve => {
  require.ensure(["./components/UserStart.vue"], () => {
    resolve(require("./components/UserStart.vue"));
  },"user");
};
const UserEdit = resolve => {
  require.ensure(["./components/UserEdit.vue"], () => {
    resolve(require("./components/UserEdit.vue"));
  },"user");
};
const UserDetail = resolve => {
  require.ensure(["./components/UserDetail.vue"], () => {
    resolve(require("./components/UserDetail.vue"));
  },"user");
};
const NotFound = resolve => {
  require.ensure(["./components/NotFound.vue"], () => {
    resolve(require("./components/NotFound.vue"));
  });
};

export const routes = [
  {
    path: "/",
    components: {
      default: Home,
      "header-top": Header
    }
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header
    },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("beforeEnter");
          next();
        }
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  {
    path: "/404",
    components: {
      default: NotFound,
      "header-top": Header
    }
  },
  { path: "/redirect-me", redirect: "/" },
  { path: "*", redirect: "/404" }
];
