let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

let container = document.getElementById("container");
createTree(container,data);

function createTree(contaier,data){
    
    let listElem = document.createElement('li');
    container.append(listElem);
}