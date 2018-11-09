
interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
} 
class Scales<StorageEngine extends IStorageEngine>{
    storage:StorageEngine;
    //метод add для добавления нового Storage на весы;
    add(prod:StorageEngine):void{
        this.storage = prod;
    } 
    //метод getSumScale для получения суммарного веса добавленных Продуктов;
    getSumScale():number{
        let sumScale = 0;
        for(let j = 0; j < this.storage.getCount(); j++){
            sumScale += this.storage.getItem(j).getScale();
        }
        console.log("sumScale: ", sumScale);
        return sumScale;
    } 
    //метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
    getNameList():string[]{
        let listOfNames = [];
        for(let j = 0; j < this.storage.getCount(); j++){
            listOfNames.push(this.storage.getItem(j).getName());
        }
        console.log("listOfNames: ", listOfNames);
        return listOfNames;
    }  
}

class Product {
    private name:string;
    private scale:number;
    
    constructor(_name:string, _scale:number){
         this.name = _name;
         this.scale = _scale;
    }

    getName():string{
        return this.name;
    }

    getScale():number{
        return this.scale;
    }
}

//для хранения в Array<тип>;
class ScalesStorageEngineArray implements IStorageEngine{
    private listOfProducts:Product[] = [];
    addItem(item:Product):void{
        this.listOfProducts.push(item);
    }
    getItem(index:number):Product{
        return this.listOfProducts[index];
    }
    getCount():number{
        return this.listOfProducts.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    addItem(item:Product):void {
        let arrayOfProducts:Product[] = [];
        arrayOfProducts = JSON.parse(localStorage.getItem("Products"));
        if(arrayOfProducts == null){
            arrayOfProducts = [];
        }
        arrayOfProducts.push(item);
        localStorage.setItem("Products", JSON.stringify(arrayOfProducts));
    }

    getItem(index:number):Product {
        let rawProducts = JSON.parse(localStorage.getItem("Products"));
        return new Product(rawProducts[index].name, rawProducts[index].scale) ;
    }

    getCount():number {
        return JSON.parse(localStorage.getItem("Products")).length;
    }

}


let scales = new Scales<ScalesStorageEngineArray>();

 let apple:Product = new Product("Apple red", 100); 
 let apple2:Product = new Product("Apple green", 200); 
 let apple3:Product = new Product("Apple orange", 300); 

 
 let lykoshko:ScalesStorageEngineArray = new ScalesStorageEngineArray();
 lykoshko.addItem(apple);
 lykoshko.addItem(apple2);
 lykoshko.addItem(apple3);

 scales.add(lykoshko);
 
 scales.getSumScale();
 scales.getNameList();

 localStorage.clear();
 let scales2 = new Scales<ScalesStorageEngineLocalStorage>();

 let orange:Product = new Product("orange red", 100); 
 let orange2:Product = new Product("orange green", 900); 
 let orange3:Product = new Product("orange orange", 7000); 
 
 let lykoshko2:ScalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();

 lykoshko2.addItem(orange);
 lykoshko2.addItem(orange2);
 lykoshko2.addItem(orange3);

 scales2.add(lykoshko2);

 scales2.getSumScale();
 scales2.getNameList();
 






