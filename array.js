//Функция наполнения произвольного массива элементами, quantity - количество элементов массива, массив формируется из случайных чисел в диапазоне от  Min до Max(необязательные параметры). Если Min и Max не передаются, то массив заполняется случайными числами от 1 до 100.
Array.prototype.fill=function(quantity,min=1,max=100){
	for(i=0;i<quantity;i++ ){
		this[i]=Math.floor(Math.random() * (max - min + 1)) + min;
	}

}
//Функция перебора элементов массива с помощью перебора свойств объекта (for - in)
Array.prototype.ForIn=function(){
	for(var element in this) {
		if ( this.hasOwnProperty(element) ) {
	        console.log(this[element]);
	    }
	}
}
//Функция перебора элементов массива с помощью ф-ции for
Array.prototype.For=function(){
	for (var i = 0; i < this.length; i++) {
    console.log(this[i]);
	}
}


//Функция перебора элементов массива с помощью ф-ции for вариант2
Array.prototype.For2=function(){
	var i=0;
	for (;this[i]; ) {
    console.log(this[i]);
	i++;
	}
}
//Функция перебора элементов массива с помощью ф-ции for вариант3
Array.prototype.For3=function(){
	var i=0;
	for (;;i++ ) {
		if (i==this.length) break;
    	console.log(this[i]);
	
	}
}
//Функция перебора элементов массива с помощью ф-ции While
Array.prototype.While=function(){
	var i=0;
	while (i<this.length){
	  console.log(this[i]);
	  i++;
	 }
}

//Функция перебора элементов массива с помощью ф-ции While вариант2
Array.prototype.While2=function(){
	var i=0;
	while (this[i]){
	  console.log(this[i]);
	  i++;
	 }
}
//Функция перебора элементов массива с помощью конструкции do..While..Следует учитывать, что массив не может быть пустым. Соответствующую проверку следует выполнять до вызова метода doWhile 
Array.prototype.doWhile=function(){
	var i=0;
	do{
	  console.log(this[i]);
	  i++;
	}
	while (i<this.length);
};


//Функция перебора элементов массива с помощью метода forEach(IE>=9)
Array.prototype.Foreach=function(){
	this.forEach(function(element){
		console.log(element);				  
	});
}

//Функция перебора элементов массива с помощью метода map(IE>=9)
Array.prototype.Map=function(){
	this.map(function(element){
		console.log(element);				  
	});
}

//создаем массив
var x = new Array;
//заполним массив 
x.fill(5);
//Осуществляем перебор массива различными способами
x.ForIn(x);
x.For(x);
x.For2(x);
x.For3(x);
x.While(x);
x.While2(x);
x.doWhile(x);
x.Foreach(x);
x.Map(x);

