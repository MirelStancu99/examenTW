function applyDiscount(vehicles, discount) {
    return new Promise((resolve, reject) => {
        if (typeof discount !== 'number') {
            reject(new Error('Invalid discount'));
            return;
        }

        for (const vehicle of vehicles) {
            if (!vehicle.make || typeof vehicle.price !== 'number') {
                reject(new Error('Invalid array format'));
                return;
            }
        }

        const minPrice = Math.min(...vehicles.map(vehicle => vehicle.price));
        if (discount > 0.5 * minPrice) {
            reject('Discount too big');
            return;
        }

        resolve(vehicles.map(vehicle => ({
            make: vehicle.make,
            price: vehicle.price - vehicle.price * discount / 100
        })));
    });
}

  

const app = {
    applyDiscount: applyDiscount
};

module.exports = app;