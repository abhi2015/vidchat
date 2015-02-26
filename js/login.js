function login() {
    console.log("hi");
    var getJSON = function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };



    getJSON("data/userdata.json").then(function(data) {

        console.log(data.pub_key);
        console.log("hi");



        var username = document.getElementById("user").value;
        var password = document.getElementById("pass1").value;

        console.log(username);


        var loc = "chat.html";

        if (username.toUpperCase() === data.users[3].username.toUpperCase() && password === data.users[3].password) {

            window.location = loc + "?call=" + data.users[2].phone_no + "&number=" + data.users[3].phone_no + "&username=" + data.users[3].username + "&type=" + data.users[3].type;
        } 
        else if (username.toUpperCase() === data.users[4].username.toUpperCase() && password === data.users[4].password) {

            window.location = loc + "?call=" + data.users[1].phone_no + "&number=" + data.users[4].phone_no + "&username=" + data.users[4].username + "&type=" + data.users[4].type;
        }

        else if (username.toUpperCase() === data.users[5].username.toUpperCase() && password === data.users[5].password) {

            window.location = loc + "?call=" + data.users[0].phone_no + "&number=" + data.users[5].phone_no + "&username=" + data.users[5].username + "&type=" + data.users[5].type;
        }

        else if (username.toUpperCase() === data.users[0].username.toUpperCase() && password === data.users[0].password) {

            window.location = loc + "?call=" + data.users[5].phone_no + "&number=" + data.users[0].phone_no + "&username=" + data.users[0].username + "&type=" + data.users[0].type;
          }

        else if (username.toUpperCase() === data.users[1].username.toUpperCase() && password === data.users[1].password) {

            window.location = loc + "?call=" + data.users[4].phone_no + "&number=" + data.users[1].phone_no + "&username=" + data.users[1].username + "&type=" + data.users[1].type;
          }

        else if (username.toUpperCase() === data.users[2].username.toUpperCase() && password === data.users[2].password) {

            window.location = loc + "?call=" + data.users[3].phone_no + "&number=" + data.users[2].phone_no + "&username=" + data.users[2].username + "&type=" + data.users[2].type;
          }
        


        else {
            return false;
        }



    }, function(status) {
        alert('Something went wrong.');
    });


}
