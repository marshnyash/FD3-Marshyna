var Scales = /** @class */ (function () {
    function Scales() {
        this.arrayOfStorages = [];
    }
    //метод add для добавления нового Storage на весы;
    Scales.prototype.add = function (prod) {
        this.arrayOfStorages.push(prod);
    };
    //метод getSumScale для получения суммарного веса добавленных Продуктов;
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.arrayOfStorages.length; i++) {
            for (var j = 0; j < this.arrayOfStorages[i].getCount(); j++) {
                sumScale += this.arrayOfStorages[i].getItem(j).getScale();
            }
        }
        console.log("sumScale: ", sumScale);
        return sumScale;
    };
    //метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
    Scales.prototype.getNameList = function () {
        var listOfNames = [];
        for (var i = 0; i < this.arrayOfStorages.length; i++) {
            for (var j = 0; j < this.arrayOfStorages[i].getCount(); j++) {
                listOfNames.push(this.arrayOfStorages[i].getItem(j).getName());
            }
        }
        console.log("listOfNames: ", listOfNames);
        return listOfNames;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
//для хранения в Array<тип>;
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.listOfProducts = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.listOfProducts.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.listOfProducts[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.listOfProducts.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        localStorage.setItem(item.getName(), JSON.stringify(item));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var elementName = localStorage.key(index);
        var rawProduct = JSON.parse(localStorage.getItem(elementName));
        return new Product(rawProduct.name, rawProduct.scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var scales = new Scales();
var apple = new Product("Apple red", 100);
var apple2 = new Product("Apple green", 200);
var apple3 = new Product("Apple orange", 300);
var lykoshko = new ScalesStorageEngineArray();
lykoshko.addItem(apple);
lykoshko.addItem(apple2);
lykoshko.addItem(apple3);
scales.add(lykoshko);
scales.getSumScale();
scales.getNameList();
localStorage.clear();
var scales2 = new Scales();
var orange = new Product("orange red", 100);
var orange2 = new Product("orange green", 900);
var orange3 = new Product("orange orange", 7000);
var lykoshko2 = new ScalesStorageEngineLocalStorage();
lykoshko2.addItem(orange);
lykoshko2.addItem(orange2);
lykoshko2.addItem(orange3);
scales2.add(lykoshko2);
scales2.getSumScale();
scales2.getNameList();
//# sourceMappingURL=app.js.map