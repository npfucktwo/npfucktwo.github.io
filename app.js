document.getElementById('getHello').addEventListener('click', () => {

    fetch('http://localhost:3000/api/hello')


        .then(response => response.json())


        .then(data => {


            document.getElementById('response').innerText = JSON.stringify(data);


        })


        .catch(error => {


            console.error('Error:', error);


        });


});


document.getElementById('postData').addEventListener('click', () => {


    fetch('http://localhost:3000/api/data', {


        method: 'POST',


        headers: {


            'Content-Type': 'application/json'


        },


        body: JSON.stringify({ name: 'John', age: 30 })


    })


        .then(response => response.json())


        .then(data => {


            document.getElementById('response').innerText = JSON.stringify(data);


        })


        .catch(error => {


            console.error('Error:', error);


        });


});



