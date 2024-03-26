import React from "react";
import ReactDOM from "react-dom/client";
import { Folder } from "./components/Folder";
import { handleHomePageData } from "./service";

const { folderList, menuList } = handleHomePageData();

const HomeRender = () => (
  <>
    {folderList.map((folder, index) => (
      <Folder folder={folder} key={index} />
    ))}
  </>
);

const renderEVnExpressHome = () => {
  $("body").attr("id", "render-e-vn-express-home");

  ReactDOM.createRoot(document.getElementById("render-e-vn-express-home") as HTMLElement).render(
    <React.StrictMode>
      <HomeRender />
    </React.StrictMode>
  );

  $("body").addClass("-----e-vnexpress-home");
};

export { renderEVnExpressHome };
