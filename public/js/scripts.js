const cardList = [
    {
      title: "Kitten 1",
      image: "images/cat1.png",
      link: "#",
      description: "Meet our first adorable kitten!"
    },
    {
      title: "Kitten 2",
      image: "images/cat2.png",
      link: "#",
      description: "Here's our second beautiful kitten!"
    },
    {
      title: "Kitten 3",
      image: "images/cat3.png",
      link: "#",
      description: "And finally, our third charming kitten!"
    }
  ];
  
  const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
  };
  
  const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend = `
        <div class="col s4 center-align">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.image}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
              <p><a href="${item.link}">About this kitten</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
              <p>${item.description}</p>
            </div>
          </div>
        </div>`;
      $("#card-section").append(itemToAppend);
    });
  };
  
  $(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
      clickMe();
    });
    addCards(cardList);
    $('.modal').modal();
  });
  