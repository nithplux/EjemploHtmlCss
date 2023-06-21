function resp(){
    let var1 = parseInt( document.getElementById("var1").value);
    let var2 =  parseInt (document.getElementById("var2").value);
     
    let sol;
    
    sol = var1 + var2;

    document.getElementById("resultado").innerHTML = sol;
}


    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    const section3 = document.querySelector('#section3');

    function handleScroll() {
        // Código para manejar el evento de desplazamiento
        const scrollPosition = window.scrollY;

  if (scrollPosition >= section1.offsetTop && scrollPosition < section2.offsetTop) {
    console.log('Estás en la sección 1');
  } else if (scrollPosition >= section2.offsetTop && scrollPosition < section3.offsetTop) {
    console.log('Estás en la sección 2');
  } else if (scrollPosition >= section3.offsetTop) {
    console.log('Estás en la sección 3');
  }
      }
      
      window.addEventListener('scroll', handleScroll);

function secciones(){

      
        const section2 = document.getElementById('section2');

       
            section2.scrollIntoView({ behavior: 'smooth' });
          }



}      


      

