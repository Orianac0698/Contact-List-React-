const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getContact: () => {

				fetch("https://playground.4geeks.com/contact/agendas/Oriana/contacts")
					.then((results) => results.json())
					.then((data) => {
						let Store = getStore()
						setStore({ ...Store, contacts: data.contacts })
					}
					)
					.catch((Error)=> {
						console.log("Error", Error)
					})
			},

			getDelete: async(id) =>{
				
				try{
					const response= await fetch(`https://playground.4geeks.com/contact/agendas/Oriana/contacts/${id}`,{
						method:"DELETE",
						// headers:{
						// 	"Content-Type":"Application/json"
						// },
					
						// body:JSON.stringify()
					})
					if (response.ok){
						let actions = getActions()
						actions.getContact()
					}

				}
				catch(error){
					console.error("No se pudo ejecutar")
				}
			},
	
			editContacts: async(id,data) =>{
				console.log(id)
				try{
					const response= await fetch(`https://playground.4geeks.com/contact/agendas/Oriana/contacts/${id}`,{
						method:"PUT",
						headers:{
							"Content-Type":"Application/json"
						},
					
						body:JSON.stringify(data)
					})
					if (response.ok){
						let actions = getActions()
						actions.getContact()
						alert("Contacto Actualizado")
					}

				}
				catch(error){
					console.error("No se pudo ejecutar")
				}
			},
	
			addContacts: async(data) =>{
				
				try{
					const response= await fetch("https://playground.4geeks.com/contact/agendas/Oriana/contacts/",{
						method:"POST",
						headers:{
							"Content-Type":"Application/json"
						},
					
						body:JSON.stringify(data)
					})
					if (response.ok){
						let actions = getActions()
						actions.getContact()
						alert("Contacto creado exitosamente")
					}

				}
				catch(error){
					console.error("No se pudo ejecutar")
				}
			},




			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
