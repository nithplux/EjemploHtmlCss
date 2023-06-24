function resp(){
    let var1 = parseInt( document.getElementById("var1").value);
    let var2 =  parseInt (document.getElementById("var2").value);
     
    let sol;
    
    sol = var1 + var2;

    document.getElementById("resultado").innerHTML = sol;
}



   
function secciones(sectionId){

  const section = document.getElementById(sectionId);
  
  if (sectionId === 'home') {
    // Acciones específicas para la sección "home"
    
  } else if (sectionId === 'section2') {
    
    // Acciones específicas para la sección "section2"

  } else if (sectionId === 'section3') {
    // Acciones específicas para la sección "section3"

 
  }
  
  section.scrollIntoView({ behavior: 'smooth' });
          }



    


      

