function getRandomItem(array) {
    if(array) {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }
}

export default getRandomItem;
  