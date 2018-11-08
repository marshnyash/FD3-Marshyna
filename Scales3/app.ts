
interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
} 
class Scales<StorageEngine extends IStorageEngine>{
    arrayOfStorages:StorageEngine[] = [];
    //метод add для добавления нового Storage на весы;
    add(prod:StorageEngine):void{
        this.arrayOfStorages.push(prod);
    } 
    //метод getSumScale для получения суммарного веса добавленных Продуктов;
    getSumScale():number{
        let sumScale = 0;
        for(let i = 0; i < this.arrayOfStorages.length; i++){
            for(let j = 0; j < this.arrayOfStorages[i].getCount(); j++){
                sumScale += this.arrayOfStorages[i].getItem(j).getScale();
            }
        }
        console.log("sumScale: ", sumScale);
        return sumScale;
    } 
    //метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
    getNameList():string[]{
        let listOfNames = [];
        for(let i = 0; i < this.arrayOfStorages.length; i++){
            for(let j = 0; j < this.arrayOfStorages[i].getCount(); j++){
                listOfNames.push(this.arrayOfStorages[i].getItem(j).getName());
            }
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
        localStorage.setItem(item.getName(), JSON.stringify(item));
    }

    getItem(index:number):Product {
        let elementName = localStorage.key(index);
        let rawProduct = JSON.parse(localStorage.getItem(elementName));
        return new Product(rawProduct.name, rawProduct.scale);
    }

    getCount():number {
        return localStorage.length;
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
 






