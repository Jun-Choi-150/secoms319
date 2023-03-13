function fetchData(url, containerClass, itemKey) {
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        appendData(data, containerClass, itemKey);
      })
      .catch(function(err) {
        console.log('error:' + err)
      });
  }
  
  function appendData(data, containerClass, itemKey) {
    let mainContainer = document.getElementsByClassName(containerClass);
  
    for (let element of data[itemKey]) {
      let mainContainer2 = document.getElementById("card");
      mainContainer2.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";
  
      let col = document.createElement("div");
      let card = document.createElement("div");
      col.className = "col";
      card.className = "card shadow-sm";
      let image = document.createElement("img");
      image.className = "card-img-top";
      image.src = element["imgscr"];
  
      card.appendChild(image);
  
      let div = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
  
      div2.innerHTML = element["productID"];
      div.innerHTML = element["description"];
      div3.innerHTML = element["price"];
  
      div2.className = "card-title";
      div.className = "card-text";
      div3.className = "card-text";
  
      div2.style = "font-weight: bold;"
      div3.style = "font-weight: bold;"
      card.appendChild(div2);
      card.appendChild(div);
      card.appendChild(div3);
      col.appendChild(card);
      mainContainer2.append(col);
    }
  }
  
  // Call the function with the desired parameters
//   fetchData('./data.json', 'populateCards', 'plants');
//   fetchData('./dataPlanters.json', 'populateCards', 'planters');