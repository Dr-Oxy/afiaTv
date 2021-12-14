const cardRow = document.querySelector('.news-grid');

window.addEventListener('DOMContentLoaded', function () {
  getFeeds();
});

const getFeeds = async () => {
  try {
    const res = await axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kelechi.agbara',
    );

    const feeds = await res.data.items;

    let cardDiv = '';

    for (i = 0; i < feeds.length; i++) {
      let feed = feeds[i];

      cardDiv += `
            <div class="mb-4 mb-lg-0 col-12 col-sm-6 col-lg-4">
              <div class="card p-0 border-0 bg-light">
                <img
                  src="../afiaTv/Assets/Images/studio-image.png"
                  class="card-img-top"
                  alt="news-image"
                />
                <div class="card-body">
                  <h5 class="card-title text-dark fs-2 fw-bolder">
                    ${feed.title}
                  </h5>
                  <p class="card-text">
                   ${feed.content.replace(/<[^>]+>/g, '').substring(0, 200)}...
                  </p>
                  <a href=${
                    feed.link
                  } target="_blank" class="btn text-white fs-6 py-2 px-3">Read More</a>
                </div>
              </div>
            </div>`;

      cardRow.innerHTML = cardDiv;
    }

    // const posts = feeds.filter((item) => item.title.length > 0);

    console.log(feeds);
  } catch (err) {
    console.log(err);
  }
};
