let clicked = 0
function clear()
{
	if(document.getElementById('buttonn1').classList.contains('ansdiv')){ buttonn1.style.border = "none" }
	if(document.getElementById('buttonn2').classList.contains('ansdiv')){ buttonn2.style.border = "none" }
	if(document.getElementById('buttonn3').classList.contains('ansdiv')){ buttonn3.style.border = "none" }
	if(document.getElementById('buttonn4').classList.contains('ansdiv')){ buttonn4.style.border = "none" }
	document.getElementById('confirmbuttonn').classList.remove('unchoosed')
	document.getElementById('confirmbuttonn').classList.add('choosed')
	answer.innerHTML = ""
}
function button1()
{
	if(document.getElementById('buttonn1').classList.contains('ansdiv')) {
		clear()
		buttonn1.style.border = "solid #bd83f7"
		clicked = 1
	}
}
function button2()
{
	if(document.getElementById('buttonn2').classList.contains('ansdiv')) {
		clear()
		buttonn2.style.border = "solid #bd83f7"
		clicked = 2
	}
}
function button3()
{
	if(document.getElementById('buttonn3').classList.contains('ansdiv')) {
		clear()
		buttonn3.style.border = "solid #bd83f7"
		clicked = 3
	}
}
function button4()
{
	if(document.getElementById('buttonn4').classList.contains('ansdiv')) {
		clear()
		buttonn4.style.border = "solid #bd83f7"
		clicked = 4
	}
}
function finish() 
{
	if(document.getElementById('confirmbuttonn').value == "Продолжить")
	{
		window.location.href = "html4.html"
	}
	if(document.getElementById('confirmbuttonn').classList.contains('choosed') && document.getElementById('confirmbuttonn').value != "Продолжить") 
	{
		if(clicked == 1) {
			document.getElementById('confirmbuttonn').classList.remove('choosed')
			document.getElementById('confirmbuttonn').classList.add('unchoosed')
			document.getElementById('buttonn1').classList.remove('ansdiv')
			document.getElementById('buttonn1').classList.add('disabled')
			buttonn1.style.border = "solid red"
			answer.innerHTML = "Ну, по крайней мере это было близко..."
			answer.style.color = "red"
		}
		if(clicked == 2) {
			document.getElementById('confirmbuttonn').classList.remove('choosed')
			document.getElementById('confirmbuttonn').classList.add('unchoosed')
			document.getElementById('buttonn2').classList.remove('ansdiv')
			document.getElementById('buttonn2').classList.add('disabled')
			buttonn2.style.border = "solid red"
			answer.innerHTML = "Ладно..."
			answer.style.color = "red"
		}
		if(clicked == 3) {
			document.getElementById('confirmbuttonn').classList.remove('choosed')
			document.getElementById('confirmbuttonn').classList.add('unchoosed')
			document.getElementById('buttonn3').classList.remove('ansdiv')
			document.getElementById('buttonn3').classList.add('disabled')
			buttonn3.style.border = "solid red"
			answer.innerHTML = "ХММ. ЛАДНО."
			answer.style.color = "red"
		}
		if(clicked == 4) {
			document.getElementById('buttonn4').classList.remove('ansdiv')
			document.getElementById('buttonn4').classList.add('disabled')
			buttonn4.style.border = "solid #3fff00"
			answer.innerHTML = "Ну как, что переводчик сказал? Если бы тут было текстовое поле, ты бы правильно ответил. Так что даю засчет"
			answer.style.color = "#38e200"
			document.getElementById('buttonn1').classList.remove('ansdiv')
			document.getElementById('buttonn1').classList.add('disabled')
			document.getElementById('buttonn2').classList.remove('ansdiv')
			document.getElementById('buttonn2').classList.add('disabled')
			document.getElementById('buttonn3').classList.remove('ansdiv')
			document.getElementById('buttonn3').classList.add('disabled')
			document.getElementById('confirmbuttonn').value = "Продолжить"
		}
	}
}