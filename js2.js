function finish() 
{
	if(document.getElementById('confirmbuttonn').value == "Продолжить")
	{
		window.location.href = "html3.html"
	}
	else {
		if(document.getElementById('textboxx').value != 4) {
			textboxx.style.border = "solid red"
			answer.innerHTML = "Упс... Похоже, это неправильный ответ"
			answer.style.color = "red"
			textboxx.value = ""
		}
		if(document.getElementById('textboxx').value == 4) {
			textboxx.style.border = "solid #3fff00"
			answer.innerHTML = "Правильный ответ!"
			answer.style.color = "#38e200"
			document.getElementById('confirmbuttonn').value = "Продолжить"
		}
	}
}