console.log(" vehicle Information ");
console.log("");
class vehicle {
    constructor(name, price,engine ,transmission,fuelType)
    {
        this.name = name;
        this.price =price;
        this.engine =engine;
        this.transmission = transmission;
        this.fuelType = fuelType;
    }
    showDetails()
    {
        console.log(` Name :${this.name} ,price : ${this.price},Engin :${this.engine} ,Transmission :${this.transmission}, FuelType : ${this.fuelType}`);
        console.log(" ");

    }
}
const tatasafari = new vehicle(" tata safari","18.62 lakh", "1956cc","Manual","Diesel");
const lamborgini = new vehicle("Lamborghini Huracan EVO","4.99cr","5204cc","AUtomatic","petrol");
const tatatiago  = new vehicle("Tata Tiago","5.82 lakh","1199cc","Manual","petrol");
const mclaren    = new vehicle("mclaren 7205","4.65cr","3994cc","Automatic","petrol");
const mercedes   = new vehicle("Mercedes-Benz","4.65cr","3994cc","Automatic","pectrol");

const arryOfVehicles =[tatasafari,lamborgini,tatatiago,mclaren,mercedes];
for(const element of arryOfVehicles){
    element.showDetails();

}

console.log("college indormation");
console.log(" ");
class college{
    constructor(name,phone,landmark,collegecode){
        this.Name =name;
        this.Phone = phone;
        this.Landmark =landmark;
        this.Collegecode =collegecode;
    }
}
const tilakVidyapeethclg = new college("Tilak Maharashtra vidyapeeth","436745774537","T.M.V.Colony,Mukunda Nagar" ,"4552145521",)
const vishwakarmaclg = new college(" vishwakarma Institute of Techonology","7846532225","Upper indira nagar,Bibwewadi","89451214")
const alardclg = new college("Alard Instiude of Management", "765556222145","Rajiv Gandhi IT","2558756645")
const dyclg = new college("Dr.D.Y.Patil College","2588459552","Dangat patil Nagar","784489557464");

function traverObject(obj)
{
    for (const key in obj)
    {
        console.log(`${key} : ${obj[key]}`);  
        
    }
}
traverObject(tilakVidyapeethclg);
console.log(" ");
traverObject(vishwakarmaclg);
console.log(" ");
traverObject(alardclg);
console.log(" ");
traverObject(dyclg);
console.log(" ");

