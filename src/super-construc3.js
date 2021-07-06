import SuperObject from "./super-object.js";

class S3 {


	constructor(runtime) {			
		this.rt = runtime;	
  	}

	createRef (name) {
		const obj = new SuperObject(name, this.rt );
		return obj;
	}


	
	getRuntime () {
		return this.rt;		
	}
	
	goTo(name) {
		this.rt.goToLayout(name);
	}
	
	//Obtiene el valor de varibles globales mediante runtime global vars
	getGlobal (name) {		
		return this.rt.globalVars[name];
	}
	
	//Llama una función de "event sheet" meidant el objeto runtime
	call (nameFunction) {		
		this.rt.callFunction(nameFunction)
	}

	//Devuelve el valor de una instancia de una varible por
	//el nombre de un objeto
	getByName ( item, name  ) {		
		const objects =  this.rt.objects[item];
		item = objects.getFirstPickedInstance();
		return item.instVars[name];		
		
	}
	
	
	
	
	/*
	Obtiene la instancia de un arreglo de instancias
	por id (vairable de instancia)	
	En este caso se obtiene la instancia de un objeto que no tien el foco
	*/
	getInstById (nameObject, id) {
		console.log("id",id);
		//id = `"${id}"`;
		
		console.log  ( "colores", this.rt.objects[nameObject].getAllInstances() )
		
		const instances = this.rt.objects[nameObject].getAllInstances();
		let instance;
		instances.map((item, i)=> {
		console.log ("id--->",  item.instVars.id );
		console.log ("id", id);
			
			
		if (item.instVars.id == id  ) {
			instance = item;
		}  
	});
		return instance;
	}
	
	/*
	Obtiene el valor de la variable de instancia llamada "id" de un arreglo de objetos
	En este caso debe tener el foco activo (estar seleccionado);
	*/
	getIdPicked (nameObject) {
		const selected = this.rt.objects[nameObject].getFirstPickedInstance();	
		return selected.instVars.id;
	}
	
	/*
	** Obtiene la instancia seleccionada de un array  
	*/
	getPicked (nameObject) {			
		const obj = new SuperObject(nameObject, this.rt );
		return obj;	
		
	}
	
	}


export default S3;