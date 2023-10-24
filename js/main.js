(() => {
  //console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

const infoBoxes = [
  {
    title: "Noise-cancelling microphones",
    text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
    image: "images/pathtoimage.jpg"
  },

  {
    title: "Rubber Blablabla",
    text: "Test do rubber Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
    //image: "images/pathtoimage.jpg"
  },


]

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);


      const hstittle = document.createElement('h2');
      hstittle.textContent = infoBox.title

      const hstext = document.createElement('p');
      hstext.textContent = infoBox.text


      const immage = document.createElement('img');
      immage.src = infoBox.image

      //document create image element
      //image atribute = infoBox.image

      // console.log(infoBox.title);
      // console.log(infoBox.text);

      selected.appendChild(immage);
      selected.appendChild(hstittle);
      selected.appendChild(hstext);
    });
  }

  loadInfo();


  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.