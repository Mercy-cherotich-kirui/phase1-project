function getImages() {
    fetch(imageAddress)
      .then((response) => response.json())
      .then(getImagesComments)
      .catch((err) => console.log("Addresses not found"));
  }