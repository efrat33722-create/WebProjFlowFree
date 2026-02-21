
function register() {
    // שליפת הנתונים ברגע הלחיצה
    let nameVal = document.querySelector("#username").value;
    let passVal = document.querySelector("#password").value;
    let emailVal = document.querySelector("#email").value;
    let msg = document.querySelector("#register-message");

   
    if (nameVal === "" || passVal === "" || emailVal === "") {
        alert("נא למלא את כל השדות");
        return; 
    }

    if (nameVal.length < 3) {
        alert("שם המשתמש חייב להיות לפחות 3 תווים");
        return;
    }

    
    let users = JSON.parse(localStorage.getItem("users")) || {};

    
    if (users[emailVal]) {
        msg.innerText = "האימייל הזה כבר רשום במערכת";
       
    } else {
        // יצירת משתמש חדש ושמירה
        users[emailVal] = {
            username: nameVal,
            password: passVal,
            maxLevel: 1,
            history: []
        };

        localStorage.setItem("users", JSON.stringify(users));
        msg.innerText = "נרשמת בהצלחה!";
        sessionStorage.setItem("currentUser", emailVal);
        window.location.href = "opening.html"; 
    }
}

function login() {
    let emailVal = document.querySelector("#email").value;
    let passVal = document.querySelector("#password").value;
    let nameVal = document.querySelector("#username").value;

    let users = JSON.parse(localStorage.getItem("users")) || {};

    
    if (users[emailVal]) {
        
        if (users[emailVal].password === passVal&& users[emailVal].username === nameVal) {
            alert("התחברת בהצלחה!");
            sessionStorage.setItem("currentUser", emailVal);
            window.location.href = "opening.html";
        } else {
            alert("סיסמה או שם שגויים");
        }
    } else {
        
        alert("משתמש לא נמצא, מבצע רישום...");
        register();
    }
}