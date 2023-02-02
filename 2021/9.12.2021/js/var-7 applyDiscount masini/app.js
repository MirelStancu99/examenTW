function applyDiscount(vehicles, discount){
    return new  Promise((resolve,reject)=>{
        if(typeof discount!=='number'){
            reject(new Error('Invalid discount'));
        }
        let celMaiMicPret=vehicles[0].price;
        let newVehicles=[];
        vehicles.forEach(vehicle=>{
            if(typeof vehicle.price!=='number' || typeof vehicle.make!=='string'){
                reject(new Error('Invalid array format'));
            }
        })
        for(let i=0;i<vehicles.length;i++){
          
            
            if(vehicles[i].price<celMaiMicPret){
                celMaiMicPret=vehicles[i];
            }
            newVehicles.push({make:vehicles[i].make, price:vehicles[i].price-discount});
            if(discount>0.5*celMaiMicPret){
                reject('Discount too big');
            }
            else
            {
                resolve(newVehicles);
            }
        }

    });
}
  
  

const app = {
    applyDiscount: applyDiscount
};

module.exports = app;