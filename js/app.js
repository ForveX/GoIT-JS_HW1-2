var customPow = function() {
	var a=prompt("Введите число для возведения в степень:");
	if (a!='' && a!=null) {
		var result=a;
		var b=prompt("укажите степень для возведения:");
		if(b!=''&& b!=null){
			for (var i=1; i<b; i++) {
				result=result*a;
			};
			alert(result);
			}
			else {
				alert ("Некорректный ввод");
			};
		}
	else {
	alert ("Некорректный ввод");
	};
};

var autorization = function() {
	var names = [];
	var userName;

	for (var i=0; i<5; i++) {
		names[i] = prompt("Введите имя " + (i+1) + " для заполнения массива");
		console.log(names[i]);
		if (names[i]==='' || names[i]===null) {
			alert ("Некорректный ввод");
			break;}
		}

if (names.length>1)/*(names[0]!=='' && names[0]!==null)*/ {
	userName = prompt("Введите ваше имя:");
	var autorized='not';

	if (userName!='' && userName!=null){
		for (var v=0; v<names.length; v++) {
			if (userName==names[v]) {
				autorized=userName
			}
		}
	}

		if (autorized=='not') {
			alert("error");
		}

		else {
			alert(autorized + " Вы успешно вошли")
		}
	}
	else {
			alert("error");
	}
};
customPow();
autorization();
