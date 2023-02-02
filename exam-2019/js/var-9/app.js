function applyBlackFriday(products, discount) {
    return new Promise((resolve, reject) => {
      if (typeof discount !== 'number') {
        reject(new Error('Invalid discount'));
      }
      if (discount <= 0 || discount > 10) {
        reject(new Error('Discount not applicable'));
      }
      if (!Array.isArray(products) || !products.every(product => typeof product === 'object' && product.hasOwnProperty('name') && product.hasOwnProperty('price'))) {
        reject(new Error('Invalid array format'));
      }
      resolve(products.map(product => {
        product.price *= (1 - discount / 100);
        return product;
      }));
    });
  }
  

const app = {
    applyBlackFriday: applyBlackFriday
};
module.exports = app;