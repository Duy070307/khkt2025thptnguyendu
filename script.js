body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url('background.jpg'); /* Thay thế với đường dẫn đến hình nền của bạn */
    background-size: cover;
    background-position: center;
}

header {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav ul li {
    margin: 0 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 20px;
    color: white;
}

.intro {
    margin-bottom: 40px;
}

#tools {
    margin-bottom: 80px;
}

input[type="file"] {
    margin: 20px 0;
}

button {
    padding: 10px;
    border: none;
    background: #555;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #333;
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 10px;
}
