$(document).ready(function () {
  const target = location.hostname === "e.vnexpress.net" && location.pathname === "/";
  if (!target) return;

  const mostRead = e__getLink(".item_most_read .title_news_site a:first-child");

  const folders = $(".block_folder")
    .map(function () {
      return {
        title: e__formatText($(this).find(".folder_name").text()),
        items: e__getLink($(this).find(".title_news_site a:first-child")),
      };
    })
    .toArray();

  e__linkBody();

  $("body").append(`<h2 class="e-ink---sub-title">Most read</h2>`);

  $("body").append(`
    <div class="e-ink---related-post-container">
      ${mostRead.map(({ text, href }) => `<p><a href="${href}">${text}</a></p>`).join("")}
    </div>
  `);

  folders.forEach((folder) => {
    $("body").append(`<h2 class="e-ink---sub-title">${folder.title}</h2>`);

    $("body").append(`
      <div class="e-ink---related-post-container">
        ${folder.items.map(({ text, href }) => `<p><a href="${href}">${text}</a></p>`).join("")}
      </div>
    `);
  });
});
