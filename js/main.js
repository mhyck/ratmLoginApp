// existing users
var userArray = [
	{
		username: "zach",
		password: "vocalist",
    	image: "img/zach.jpg"
	},
	{
		username: "tom",
		password: "guitarist",
    	image: "img/tom.jpg"
	},
	{
		username: "timmy",
		password: "bassist",
    	image: "img/timmy.jpg"
	},
	{
		username: "brad",
		password: "drummer",
    	image: "img/brad.jpg"
	}
]



// button function
function getInfo() {
	var username = document.getElementById("username").value.toLowerCase()
	var password = document.getElementById("password").value.toLowerCase()
  var fail = document.getElementById("img").src = "img/zachrage.gif"
	for (i = 0; i < userArray.length; i++) {
		if(username == userArray[i].username && password == userArray[i].password)
		{
			console.log(username + " is logged in!")
			document.getElementById("message").innerHTML = "Welcome " + username + " You are logged in!"
      document.getElementById("img").src = userArray[i].image
			return
		}
    if(username.length === 0 || password.length === 0) {
      alert("Please fill in member's name and band position.")
      return
    }
    
    else {
      document.getElementById("img").src = fail
			document.getElementById("message").innerHTML = "Sorry " + username + " you are not a band member."
		}
	}
	console.log("Incorrect username or password")
}



