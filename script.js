function valideRecherche(){
  var recherche = document.getElementById("recherche").value;
  if(recherche){
    recherche.submit();
  }
  else{
    $("#myModal").modal()
  }
}
