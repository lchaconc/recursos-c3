/*
* Super 3 
* Versión: 1.3.2
* Libraría utilitaria para C3
*/

//Almacea el objeto runtime para poder ser urtilizado en los métodos de la clase
let rt;


class S3 {
  
	constructor(name) {			
		if (rt) {
			const objects = rt.objects[name];
				if (objects) {
					this.obj =  objects.getFirstPickedInstance();			
				} else {
					console.error
						(`Objeto "${name}" no creado. 
Debe revisar si escribió el nombre de forma correcta.`
						);
				} 
		} else {			
			//obteniendo elobjeto runtime			
			if (name) {
				console.error (`Objeto runtime no no definido en S3
Debe llamar antes la función setRuntime`);
			} 
		}
    	
  	}
	
  	setPos (x,y) {
		if (x) {
			this.obj.x = x;  
	  	};
	  	if (y) {
			this.obj.y = y; 
	  	}	  
  	}
	
	getPos () {
		return { posX: this.obj.x, posY: this.obj.y};	
	}
	
	//Manipulación de textos en las cajas de texto:
	setText (txt) {
		this.obj.text = txt;
	}
	
	getText () {
		return this.obj.text;
	}
	
	setVisible (state) {
		this.obj.isVisible = state;		
	}
	
	getVisible () {
		return this.obj.isVisible;
	}
	
	setSize (h, w ) {
		if (h) {
			this.obj.height = h;	
		}
		
		if (w) {
			this.obj.width = w;	
		}		
	}
	
	getSize () {
		return {height: this.obj.height, width: this.obj.width }
	}
	
	setAnimation (name) {
		this.obj.setAnimation(name);		
	}
	
	getAnimation () {
		return this.obj.animationName;
	}	
	
	//Saca" el elemento del layout para que no interfiera 
	//con las interacciones del usuario:
	outer () {
		this.obj.x = -900;
		this.obj.y = -900;
	}
	
	//oculta los botones para colocarlos delante de una 
	//imagen y simular que la imagen es el botón
	hide () {
		this.obj.setCssStyle ( "background", "transparent" );
		this.obj.setCssStyle ( "border", "hidden" );
	}
	
	//Variables de instancia:
	setVar (name,val ) {
		this.obj.instVars[name] = val;
	}
	
	getVar (name) {
		return this.obj.instVars[name];
	}
	
	//Establece el ángulo del objeto dado en grados para luego convertirlos en radianes:
	setAngle (degrees) {		
		const radians = degrees * Math.PI / 180;		
		this.obj.angle= radians;
	}
	
	//Obtiene el ángulo del objeto en radianes par aluego devolver su valor en grados:
	getAngle () {			
		const radians = this.obj.angle;
		const degrees = radians * 180 / Math.PI;
		return degrees;
	}
	
	//posicion z en la capa
	moveTop () {		
		this.obj.moveToTop();				
	}
	
	moveBottom () {
		this.obj.moveToBottom();		
	}
	
	//Destructor de objeto
	destroy () {	
		this.obj.destroy();
	}	
	
	//Estilos para los botones
	setStyle ({bg, font, color, border, bRadius}) {		
		this.obj.setCssStyle ("background-color", bg);
		this.obj.setCssStyle ("font", font);
		this.obj.setCssStyle ("color", color);
		this.obj.setCssStyle ("border", border);
		this.obj.setCssStyle ("border-radius", bRadius);
	}
	/*   ------------------------------------- instancia s3 ---------------------------------------- */
		 
	//Objeto runtime: 
	setRuntime (runtime) {
		rt = runtime;
		console.log("rt para la clase S3", rt);
	}
	
	getRuntime () {
		return rt;		
	}
	
	goTo(name) {
		rt.goToLayout(name);
	}
	
	//Obtiene el valor de varibles globales mediante runtime global vars
	getGlobal (name) {		
		return rt.globalVars[name];
	}
	
	//Llama una función de "event sheet" meidant el objeto runtime
	call (nameFunction) {		
		rt.callFunction(nameFunction)
	}

	//Devuelve el valor de una instancia de una varible por
	//el nombre de un objeto
	getByName ( item, name  ) {		
		const objects =  rt.objects[item];
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
		id = `"${id}"`;
		
		console.log  ( "colores", rt.objects[nameObject].getAllInstances() )
		
		const instances = rt.objects[nameObject].getAllInstances();
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
		const selected = rt.objects[nameObject].getFirstPickedInstance();	
		console.log(seleccionado.instVars.id ) 
	}
	
	/*
	** Obtiene la instancia seleccionada de un array  
	*/
	getPicked (nameObject) {
		const selected = rt.objects[nameObject].getFirstPickedInstance();
		
	}
	

	
}

export default S3;