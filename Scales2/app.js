var Scales = /** @class */ (function () {
    function Scales() {
        //массив добавленных на весы Продуктов (объектов класса Product);
        this.arrayOfProduct = [];
    }
    //метод add для добавления нового Продукта на весы;
    Scales.prototype.add = function (prod) {
        this.arrayOfProduct.push(prod);
        console.log("add", this.arrayOfProduct);
    };
    //метод getSumScale для получения суммарного веса добавленных Продуктов;
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.arrayOfProduct.length; i++) {
            sumScale += this.arrayOfProduct[i].getScale();
        }
        console.log("sumScale: ", sumScale);
        return sumScale;
    };
    //метод getNameList для получения списка наименований добавленных Продуктов в виде массива.
    Scales.prototype.getNameList = function () {
        var listOfNames = [];
        for (var i = 0; i < this.arrayOfProduct.length; i++) {
            listOfNames.push(this.arrayOfProduct[i].getName());
        }
        console.log("listOfNames: ", listOfNames);
        return listOfNames;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var scales = new Scales();
var apple = new Apple("Apple red", 100);
var apple2 = new Apple("Apple green", 200);
var apple3 = new Apple("Apple orange", 300);
scales.add(apple);
scales.add(apple2);
scales.add(apple3);
scales.getNameList();
scales.getSumScale();
var scales2 = new Scales();
var tomato = new Tomato("Tomato red", 150);
var tomato2 = new Tomato("Tomato green", 250);
var tomato3 = new Tomato("Tomato orange", 350);
scales2.add(tomato);
scales2.add(tomato2);
scales2.add(tomato3);
scales2.getNameList();
scales2.getSumScale();
//# sourceMappingURL=app.js.map