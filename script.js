search.onkeyup  = function(){
    if(search.value === ''){
        console.log('empty')
    }
    else{
    fetch(`http://localhost:5000/users/${search.value}`)
    .then(res => {
        return res.json()
    })
    .then(obj => {
      console.log(obj)
      con.innerHTML = ''
      obj.forEach(element => {
      let list = document.createElement('ul')
      list.innerHTML = `<li>${element.first_name}</li><li> ${element.last_name}</li><li>${element.email}</li><li> ${element.gender}</li><li>${element.ip_address}</li>`
      con.appendChild(list)
      });       
    });
}
  }
