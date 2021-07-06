import S3 from "./super-construc3.js";

let s3;
let btn1;

export function setup (rt) {
	 s3 = new S3(rt);
	btn1 = s3.createRef("btn1");
	console.log(btn1);
	
}



export function obtenerColor () {
	const id = s3.getIdPicked("colores");
	console.log(id);
}



export function mover () {
	const current = s3.getPicked("colores");
	//current.setPos (300, 300 );
	current.setAnimation("Azul");
	
}


export function cambiarTamano () {
	const lapiz = s3.createRef("lapiz");
	lapiz.setSize(64,64);
}


export function moverX () {
	const rojo = s3.getInstById ("colores", "rojo");
	rojo.setPos(400, 600);
}

export function obtenrUrl () {
	const current =  s3.getPicked("colores");
	console.log( current.getVar("url") );
}

