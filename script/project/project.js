var dataJson = [
  {
    "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    "title": "CanaraHSBC Life Insurance",
    "paragraph": "Developed Flutter Application for Mobile and Web from same codebase and Implemented Getx for State Management",
    "url": "https://play.google.com/store/apps/details?id=com.choiceapp.genius&hl=en_IN"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    "title": "Akbar Travel",
    "paragraph": "Developed Flights and Hotels Booking Application with BLOC and Providers",
    "url": "https://play.google.com/store/search?q=akbar+travels&c=apps&hl=en_IN"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    "title": "Worked on Tata Neu Ecommerce App",
    "paragraph": "Working on Payments Module of Tata Neu App under Tata Digital as a client and Worked on UI Designs and API Integrations",
    "url": "https://play.google.com/store/search?q=tata+neu&c=apps&hl=en_IN"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/2156/2156009.png",
    "title": "Droom Second Hand Bike Selling Application",
    "paragraph": "Worked with Droom Team to develop module for droom clients to purchase bikes and Used Bloc, Firebase, Hive, Rest Api's and multiple Flutter Tools",
    "url": "https://play.google.com/store/search?q=droom+bike+app&c=apps&hl=en_IN"
  }
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content; cursor: pointer;
    "
    >
    <div
      style="padding: 12px; height: 200px;"
      class="project-card progress mb-5 align-items-center">
      <div class="mt-3 ms-3 row">
    
        <h2 style="color: txt-color; font-size: medium"><b>${item.title}</b></h2>
        <p style="color: txt-color; font-size: small">
        ${item.paragraph}
        </p>
        <a
        rel="noopener"
        href="${item.url}"
        target="_blank"
        title="${item.title}">
        <button type="button" class="btn btn-secondary">
          View
        </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;
