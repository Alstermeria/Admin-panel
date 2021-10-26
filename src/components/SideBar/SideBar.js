import React from "react";
import SideBarListElement from "./SideBarListElement";

function SideBar(props) {
  const sideBarElements = React.useMemo(() => {
    return [
      {
        id: 1,
        icon: "img/home.png",
        title: "Dashboard",
      },
      {
        id: 2,
        icon: "img/profile.png",
        title: "Customer",
      },
      {
        id: 3,
        icon: "img/message.png",
        title: "Message",
      },
      {
        id: 4,
        icon: "img/info.png",
        title: "Help",
      },
      {
        id: 5,
        icon: "img/settings.png",
        title: "Setting",
      },
      {
        id: 6,
        icon: "img/locked.png",
        title: "Password",
      },
      {
        id: 7,
        icon: "img/exit.png",
        title: "Sing Out",
        action: () => {
          props.logout();
        },
      },
    ];
  }, [props]);

  return (
    <div>
      {sideBarElements.map((el) => {
        return (
          <SideBarListElement
            onClick={el.action}
            key={el.id}
            img={el.icon}
            name={el.title}
          />
        );
      })}
    </div>
  );
}

export default SideBar;
