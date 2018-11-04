
interface IScalable{
    getScale():number;
    getName():string;
}
class Scales {
    //массив добавленных на весы Продуктов (объектов класса Product);
    arrayOfProduct:IScalable[] = [];
    //метод add для добавления нового Продукта на весы;
    add(prod:IScalable):void{
        this.arrayOfProduct.push(prod);
        console.log("add", this.arrayOfProduct);
    } 
    //метод getSumScale для получения суммарного веса добавленных Продуктов;
    getSumScale():number{
        let sumScale = 0;
        for(let i = 0; i < this.arrayOfProduct.length; i++){
            sumScale += this.arrayOfProduct[i].getScale();
        }
        console.log("sumScale: ", sumScale);
        return sumScale;
    } 
    //метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
    getNameList():string[]{
        let listOfNames = [];
        for(let i = 0; i < this.arrayOfProduct.length; i++){
            listOfNames.push(this.arrayOfProduct[i].getName());
        }
        console.log("listOfNames: ", listOfNames);
        return listOfNames;
    }  
}

class Apple implements IScalable{
    private name:string;
    private scale:number;
    
    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }
    getScale():number{
        return this.scale;
    }
    getName():string{
        return this.name;
    }
}

class Tomato implements IScalable{
    private name:string;
    private scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }
    getScale():number{
        return this.scale;
    }
    getName():string{
        return this.name;
    }
}

let scales:Scales = new Scales();

let apple:Apple = new Apple("Apple red", 100); 
let apple2:Apple = new Apple("Apple green", 200); 
let apple3:Apple = new Apple("Apple orange", 300); 
scales.add(apple);
scales.add(apple2);
scales.add(apple3);
scales.getNameList();
scales.getSumScale();

let scales2:Scales = new Scales();
let tomato:Tomato = new Tomato("Tomato red", 150); 
let tomato2:Tomato = new Tomato("Tomato green", 250); 
let tomato3:Tomato = new Tomato("Tomato orange", 350); 
scales2.add(tomato);
scales2.add(tomato2);
scales2.add(tomato3);
scales2.getNameList();
scales2.getSumScale();



