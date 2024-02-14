let data = [
    {id: 1, name: "Debarjit", email: "debarjit@gmail.com"},

   ]

   function readAll(){
    var tableData = document.querySelector(".table_data");
    var elements = '';
    data.map(obj => (
        elements += `<tr>
            <td>${obj.name}</td>
            <td>${obj.email}</td>
            <td id= btn>
                <button  onclick={edit(${obj.id})} style="background-color: green; color: white; padding: 3px;">Update</button>
                <button onclick={delet(${obj.id})} style="background-color: #B9290A; color: white; padding: 3px;">Delete</button>
            </td>
            </tr>`
    ))
       tableData.innerHTML = elements;
   }
   function create(){
     var name = document.querySelector(".name").value;
     var email = document.querySelector(".email").value;
     var obj = {id: 2, name: name, email: email};
     data.push(obj);
     readAll();
    document.querySelector(".name").value = "";
     var email = document.querySelector(".email").value = "";
 
    

   }
   

   function edit(id){
    document.querySelector('.create_form').style.display = "none";
    document.querySelector('.update_form').style.display = "block";
    var object = data.find(obj => obj.id === id);

    document.querySelector(".uname").value = object.name;
    document.querySelector(".uemail").value = object.email;
    document.querySelector(".id").value = object.id;
   }
   
   function update(){
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var id = parseInt(document.querySelector(".id").value);
    var index = data.findIndex( d => d.id === id);
    data[index] = {id, name, email};
    document.querySelector('.create_form').style.display="block";
    document.querySelector('.update_form').style.display="none";
    readAll();
   }

   function delet(id) {
    data = data.filter( d => d.id !== id);
    readAll();
   }
