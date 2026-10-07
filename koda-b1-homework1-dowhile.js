let n = 4
let spasi = "    "
let bintang = "*"

let i = 1
do{
    console.log(spasi + bintang)

  if (i === 1) {
    spasi = "   "
  }
  else if (i === 2){
    spasi = "  "
  }
  else if (i === 3){
    spasi = " "
  }
  else if (i === 4){
    spasi = ""
  }
  bintang = bintang + "**"
  i++;
}while(i<=n)