document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  // compliment naming
  const compForm = document.getElementById("add-form")
  const compDisplay = document.getElementById("compliment-display")
  const compEdit = document.getElementById("edit-zone")

  const handleDisplay = arr => {
      while (compDisplay.childeNodes.length > 0) {
          compDisplay.removeChild(compDisplay.lastChild)
      }
      for (let i = 0; i < arr.length; i++) {
          displayCompliments(arr[i])
      }
  }

  //function that takes in compliments
  const displayCompliments = comp => {
      console.log('DM', comp.id)
      
      //creating a div for the compliments, then adding the information into the innerHTML
      let compContainer = document.createElement('div')
      compContainer.className = "compliment-container"
      compContainer.innerHTML = `<h2>Compliment:</h2> <p>${comp.new}</p>
      <button id='edit-id-${comp.id}'>Edit</button> 
      <button id='delete-id-${comp.id}'>Delete</button>
      `
      compDisplay.appendChild(compContainer)
      
      document.getElementById(`edit-id-${comp.id}`).addEventListener("click", e => {
          editCompliment(comp)
        })
        
        console.log(document.getElementById(`delete-id-${moto.id}`))
        
        document.getElementById(`delete-id-${comp.id}`).addEventListener('click', e =>{
            console.log('event listener')
            deleteCompliment(comp.id)
        })
    }
        const getCompliment = () => {
            axios.get("http://localhost:4000/api/compliment/")
            .then (res => {
                handleDisplay(res.data)
            })
            .catch(err => console.log(err))
        }

        const addCompliment = e => {
            e.preventDefault()

        const newCompliment = {
            compliment: document.getElementById('new-compliment').value
        }
            axios
            .post(`"http://localhost:4000/api/compliment/"`, newCompliment)
            .then (res => {
                handleDisplay(res.data)
            })
            .catch(err => console.log(err))

            document.getElementById('new-compliment').value ="" 
        }

        compForm.addEventListener('submit', addCompliment)
        
        const editCompliment = comp => {
            console.log("cop")
            const editForm = document.createElement('form')
            editForm.className = 'edit-form'
            editForm.innerHTML = `<input id='compliment-input' placeholder='compliment' class='form-input' value='${comp.new}'/>
            <button>save changes</button>
            `
            compEdit.appendChild(editForm)

            editForm.addEventListener('submit', e => {
                e.preventDefault()

            let updates = {
                compliment: document.getElementById('new-compliment').value
            }

            axios 
            .put("http://localhost:4000/api/compliment/${comp.id}", updates)
            .then(res => {
                handleDisplay(res.data)
                editForm.remove()
                })
                .catch(err => console.log(err))
            })
        }
    const deleteCompliment = id => {
        console.log('hit delete')
        axios
        .delete("http://localhost:4000/api/compliment/${id}")
        .then(res => {
            console.log(res)
            handleDisplay(res.data)
        })
        .catch(err => console.log(err))
    }

getCompliment()