class Basil{
  name:string;
  color: string;
  constructor(name:string, StartColor:string){
    //console.log("Hello " + name)
    //this.color = StartColor
  }

  getColor(){
    console.log(this.color)
  }
}

let world = new Basil("World","green")

//let basil = new Basil("Basil", "bright green")

//basil.getColor()
//world.getColor()

//console.log(basil.color)

class BasilGreen extends Basil{

  constructor(name:string,startColor:string){
    super(name,startColor)
    this.name = name
    this.color = startColor
  }

  setNewColor(newcolor:string){
    this.color = newcolor
    super.getColor()
  }
}

let basil3 = new BasilGreen("basil", "brite green")

basil3.getColor()
basil3.setNewColor("Red")
basil3.getColor()
