/* General Body Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-image: url(yellow.png);
    background-size: cover; /* Cover the entire page */
    background-position: center;
    background-repeat: no-repeat; 
    color:#333333;
}

/* Header Styles */
header {
    background-color: #70d4b4;
    color: #ffffff;
    padding: 10px 20px;
    text-align: center;
    
}

/* Navigation Menu Styles */
nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
}

/* Hover effect for nav links */
nav ul li a:hover {
    color: #c7d92c;
}

/* Main section styling */
main {
    padding: 20px;
    margin-top: 20px;
}

/* Section styling */
section {
    background-color:  #aaaaaa;
    border: 1px solid #d59bf6;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px #ffffff;
}

/* Footer styling */
footer {
    text-align: center;
    padding: 10px 20px;
    background-color:  #70d4b4; 
    color: #fff;
    
}

/* Responsive styling */
@media (max-width: 600px) {
    nav ul li {
        display: block;
        text-align: center;
    }
}

