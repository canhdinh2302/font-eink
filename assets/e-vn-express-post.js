$(document).ready(function () {
  const target = location.hostname === "e.vnexpress.net" && location.pathname.endsWith(".html");
  if (!target) return;

  const title = e__formatText($("h1.title_post").text());
  const postImg = $(".thumb_detail_top img").attr("data-original");
  const postImgDescription = e__formatText($(".caption_thumb_detail_top").text());
  const contents = [];
  const relativePosts = e__getLink(".box-news-relative .title_news_site a");
  $(".box-news-relative").remove();
  contents.push(e__formatText($(".lead_post_detail").text()));
  $(".fck_detail p").each(function () {
    contents.push(e__formatText($(this).text()));
  });

  e__linkBody();
  e__addHomeBtn();

  $("body").append(`<h1 class="e-ink---title">${title}</h1>`);

  if (postImg) {
    $("body").append(`
      <div class="e-ink---title-img-container">
      <img class="e-ink---title-img" src="${postImg}" />
      <p class="e-ink---title-img-description">${postImgDescription}</p>
      </div>
    `);
  }

  $("body").append(`
    <div>
      ${contents.map((text) => `<p class="e-ink---text">${text}</p>`).join("")}
    </div>
  `);

  if (relativePosts.length) {
    $("body").append(`<h2 class="e-ink---sub-title">Related posts</h2>`);

    $("body").append(`
    <div class="e-ink---related-post-container">
    ${relativePosts.map(({ text, href }) => `<p><a href="${href}">${text}</a></p>`).join("")}
    </div>
    `);
  }
});
