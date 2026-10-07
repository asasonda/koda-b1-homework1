let n = 4
let spasi = "    "
let bintang = "*"

for (let i = 1; i <= n; i++) {
  console.log(spasi + bintang);
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
}