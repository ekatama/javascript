function nestedarray() {

  var array = [["Kawan SD","Topan","Arman","Rangga"],
            ["Kawan SMP","Valdi","Rahmat"],
            ["KawanSMA","Adit","Ilham"]]
  var tama = array[0].length


  if (array[1].length>tama)
    console.log("Maaf")
    else {
      console.log("Oke");
    }




}

nestedarray()
