/*
 * Super 3
 * Versión: 1.3.2
 * Libraría utilitaria para C3
 */

//Almacea el objeto runtime para poder ser urtilizado en los métodos de la clase

class SuperObject {
  constructor({ name, rt, ref }) {
    if (ref) {
      //Rerencia de una instancia obtenida de un arreglo de instancias
      this.obj = ref;
    } else {
      if (rt) {
        const objects = rt.objects[name];
        if (objects) {
          this.obj = objects.getFirstPickedInstance();
        } else {
          console.error(`Objeto "${name}" no creado. 
Debe revisar si escribió el nombre de forma correcta.`);
        }
      } else {
        //obteniendo elobjeto runtime
        if (name) {
          console.error(`Objeto runtime no no definido en SuperObject
Debe llamar antes la función setRuntime`);
        } else {
          console.error("Debe proporcionar un nombre para el objeto");
        }
      }
    }
  }

  setPos(x, y) {
    if (x) {
      this.obj.x = x;
    }
    if (y) {
      this.obj.y = y;
    }
  }

  getPos() {
    return { posX: this.obj.x, posY: this.obj.y };
  }

  //Manipulación de textos en las cajas de texto:
  setText(txt) {
    this.obj.text = txt;
  }

  getText() {
    return this.obj.text;
  }

  setVisible(state) {
    this.obj.isVisible = state;
  }

  getVisible() {
    return this.obj.isVisible;
  }

  setSize(h, w) {
    if (h) {
      this.obj.height = h;
    }

    if (w) {
      this.obj.width = w;
    }
  }

  getSize() {
    return { height: this.obj.height, width: this.obj.width };
  }

  setAnimation(name) {
    this.obj.setAnimation(name);
  }

  getAnimation() {
    return this.obj.animationName;
  }

  //Saca" el elemento del layout para que no interfiera
  //con las interacciones del usuario:
  outer() {
    this.obj.x = -900;
    this.obj.y = -900;
  }

  //oculta los botones para colocarlos delante de una
  //imagen y simular que la imagen es el botón
  hide() {
    this.obj.setCssStyle("background", "transparent");
    this.obj.setCssStyle("border", "hidden");
  }

  //Variables de instancia:
  setVar(name, val) {
    this.obj.instVars[name] = val;
  }

  getVar(name) {
    return this.obj.instVars[name];
  }

  //Establece el ángulo del objeto dado en grados para luego convertirlos en radianes:
  setAngle(degrees) {
    const radians = (degrees * Math.PI) / 180;
    this.obj.angle = radians;
  }

  //Obtiene el ángulo del objeto en radianes par aluego devolver su valor en grados:
  getAngle() {
    const radians = this.obj.angle;
    const degrees = (radians * 180) / Math.PI;
    return degrees;
  }

  //posicion z en la capa
  moveTop() {
    this.obj.moveToTop();
  }

  moveBottom() {
    this.obj.moveToBottom();
  }

  //Destructor de objeto
  destroy() {
    this.obj.destroy();
  }

  //Estilos para los botones
  setStyle({ bg, font, color, border, bRadius }) {
    this.obj.setCssStyle("background-color", bg);
    this.obj.setCssStyle("font", font);
    this.obj.setCssStyle("color", color);
    this.obj.setCssStyle("border", border);
    this.obj.setCssStyle("border-radius", bRadius);
  }
}

export default SuperObject;
