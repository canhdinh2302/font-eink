import { formatText } from "../../@shared/formatText";
const categories = ["News", "Business", "Travel", "Life", "Sports"];

const getFolderList = (): TFolder[] =>
  $(".block_folder")
    .toArray()
    .map((folder) => ({
      name: formatText($(folder).find(".folder_name").text()),
      posts: $(folder)
        .find(".item-news")
        .map(function () {
          return {
            image: $(this).find(".thumb_size img").attr("data-original"),
            title: formatText($(this).find(".title_news_site a:first-child").text()),
            description: formatText($(this).find(".lead_news_site").text()),
            url: $(this).find(".title_news_site a:first-child").attr("href"),
          };
        })
        .toArray(),
    }))
    .filter(({ name, posts }) => categories.includes(name) && posts.length !== 0);

const getMenuList = () =>
  $(".col_menu_footer")
    .toArray()
    .map((menu) => ({
      parent: formatText($(menu).find("> a.parent_menu").text()),
      parentUrl: $(menu).find("> a.parent_menu").attr("href"),
      children: $(menu)
        .find("> a:not(:first-child)")
        .toArray()
        .map((chid) => ({
          name: formatText($(chid).text()),
          url: $(chid).attr("href"),
        })),
    }))
    .filter(({ parent }) => categories.includes(parent));

const handleHomePageData = () => {
  const folderList = getFolderList();
  const menuList = getMenuList();
  return { folderList, menuList };
};

export { handleHomePageData };

export type TPost = {
  image: string | undefined;
  title: string;
  description: string;
  url: string | undefined;
};

export type TFolder = {
  name: string;
  posts: TPost[];
};
