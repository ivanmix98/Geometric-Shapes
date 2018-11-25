

function myFunction() {

  //Primer agafo els elements del altre document per mitjà d'un valor
  var canvas = document.getElementById("canvas"); 
  var context = canvas.getContext("2d");

  var checkBox = document.getElementById("myCheck");
  var tipus = document.getElementById("tipus").value;
  var color3 = document.getElementById("color3").value;
  var mida = document.getElementById("mida").value;

  //Si l'usuari activa la casella del text, es mostra a la figura les seves característiques i descripcions i 
  // s'aplicarà el color seleccionat per el text i la seva mida
  if (checkBox.checked == true) {

    if (tipus == 'rectangle' && mida == 'normal') { 
      context.clearRect(0, 360, canvas.width, canvas.height);
      context.clearRect(460, 220, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('base', 300, 400);
      context.restore();

      context.save();
      context.translate(500,250);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('altura', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Rectangle', 230, 450);
    }

    if (tipus == 'rectangle' && mida == 'small')  {
      context.clearRect(0, 360, canvas.width, canvas.height);
      context.clearRect(460, 220, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('base', 300, 400);

      context.restore();

      context.save();
      context.translate(500,250);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('altura', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Rectangle', 230, 450);
    }

    if (tipus == 'rectangle' && mida == 'little')  {
      context.clearRect(0, 360, canvas.width, canvas.height);
      context.clearRect(460, 220, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('base', 300, 400);

      context.restore();

      context.save();
      context.translate(500,250);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('altura', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Rectangle', 230, 450);
    }

    if (tipus == 'quadrat' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(410, 270, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(450,300);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Quadrat', 250, 450);
    }

    if (tipus == 'quadrat' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(410, 270, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(450,300);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Quadrat', 250, 450);
    }

    if (tipus == 'quadrat' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(410, 270, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(450,300);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Quadrat', 250, 450);
    }

    if (tipus == 'triangle' && mida == 'normal') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(230, 160, 65, 30);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('angle', 270, 180);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Triangle', 220, 350);
    }

    if (tipus == 'triangle' && mida == 'small') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(230, 160, 65, 30);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('angle', 270, 180);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Triangle', 220, 350);
    }

    if (tipus == 'triangle' && mida == 'little') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(230, 160, 65, 30);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('angle', 270, 180);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Triangle', 220, 350);
    }

    if (tipus == 'cercle' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Cercle', 250, 450);
    }

    if (tipus == 'cercle' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Cercle', 250, 450);
    }

    if (tipus == 'cercle' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Cercle', 250, 450);
    }

    if (tipus == 'pentagon' && mida == 'normal') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(200, 170, 85, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(260,200);
      context.rotate(-Math.PI/9);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Pentàgon', 230, 450);
    }

    if (tipus == 'pentagon' && mida == 'small') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(200, 170, 85, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(260,200);
      context.rotate(-Math.PI/9);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Pentàgon', 230, 450);
    }

    if (tipus == 'pentagon' && mida == 'little') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(200, 170, 85, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(260,200);
      context.rotate(-Math.PI/9);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Pentàgon', 230, 450);
    }

    if (tipus == 'octaedre' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(240,190);
      context.rotate(-Math.PI/9);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Octàedre', 250, 450);
    }

    if (tipus == 'octaedre' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(240,190);
      context.rotate(-Math.PI/9);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Octàedre', 250, 450);
    }

    if (tipus == 'octaedre' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(240,190);
      context.rotate(-Math.PI/9);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Octàedre', 250, 450);
    }

    if (tipus == 'dodecaedre' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(250,190);
      context.rotate(-Math.PI/11);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Dodecàedre', 230, 450);
    }

    if (tipus == 'dodecaedre' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(250,190);
      context.rotate(-Math.PI/11);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Dodecàedre', 230, 450);
    }

    if (tipus == 'dodecaedre' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(250,190);
      context.rotate(-Math.PI/11);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Dodecàedre', 230, 450);
    }

    if (tipus == 'rombe' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(190, 180, 60, 50);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(220,210);
      context.rotate(-Math.PI/4);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Rombe', 250, 450);
    }

    if (tipus == 'rombe' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(190, 180, 60, 50);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(220,210);
      context.rotate(-Math.PI/4);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Rombe', 250, 450);
    }

    if (tipus == 'rombe' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(190, 180, 60, 50);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.translate(220,210);
      context.rotate(-Math.PI/4);
      context.textAlign = "center";
      context.fillText('costat', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Rombe', 250, 450);
    }

    if (tipus == 'romboide' && mida == 'normal') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(410, 200, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('base', 270, 330);
      context.restore();

      context.save();
      context.translate(430,250);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('altura', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Romboide', 200, 400);
    }

    if (tipus == 'romboide' && mida == 'small') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(410, 200, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('base', 270, 330);
      context.restore();

      context.save();
      context.translate(430,250);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('altura', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Romboide', 200, 400);
    }

    if (tipus == 'romboide' && mida == 'little') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(410, 200, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 2D', 300, 50);
      context.restore();

      context.save();
      context.textAlign = "center";
      context.fillText('base', 270, 330);
      context.restore();

      context.save();
      context.translate(430,250);
      context.rotate(-Math.PI/2);
      context.textAlign = "center";
      context.fillText('altura', 0, 0);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Romboide', 200, 400);
    }

    if (tipus == 'esfera' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '20px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '50px sans-serif';
      context.fillText('Figura 3D', 300, 50);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '30px sans-serif';
      context.fillText('Esfera', 250, 450);
    }

    if (tipus == 'esfera' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '15px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '45px sans-serif';
      context.fillText('Figura 3D', 300, 50);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '25px sans-serif';
      context.fillText('Esfera', 250, 450);
    }

    if (tipus == 'esfera' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
      context.font = '10px sans-serif';
      context.fillStyle = color3;

      context.save();
      context.textAlign = "center";
      context.font = '40px sans-serif';
      context.fillText('Figura 3D', 300, 50);
      context.restore();

      context.textBaseline = 'bottom';
      context.font = '20px sans-serif';
      context.fillText('Esfera', 250, 450);
    }
    //Si no està activat no es veurà res del text
  } else {

    if (tipus == 'rectangle' && mida == 'normal') {
      context.clearRect(0, 360, canvas.width, canvas.height);
      context.clearRect(460, 220, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'rectangle' && mida == 'small') {
      context.clearRect(0, 360, canvas.width, canvas.height);
      context.clearRect(460, 220, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'rectangle' && mida == 'little') {
      context.clearRect(0, 360, canvas.width, canvas.height);
      context.clearRect(460, 220, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'quadrat' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(410, 270, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'quadrat' && mida == 'small') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(410, 270, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'quadrat' && mida == 'little') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(410, 270, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'triangle' && mida == 'normal') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(230, 160, 65, 30);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'triangle' && mida == 'small') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(230, 160, 65, 30);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'triangle' && mida == 'little') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(230, 160, 65, 30);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'cercle' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'cercle' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'cercle' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'pentagon' && mida == 'normal') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(200, 170, 85, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'pentagon' && mida == 'small') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(200, 170, 85, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'pentagon' && mida == 'little') {
      context.clearRect(0, 400, canvas.width, canvas.height);
      context.clearRect(200, 170, 85, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'octaedre' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'octaedre' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'octaedre' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'dodecaedre' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'dodecaedre' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'dodecaedre' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(200, 160, 90, 40);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'rombe' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(190, 180, 60, 50);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'rombe' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(190, 180, 60, 50);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'rombe' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(190, 180, 60, 50);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'romboide' && mida == 'normal') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(410, 200, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'romboide' && mida == 'small') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(410, 200, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'romboide' && mida == 'little') {
      context.clearRect(0, 310, canvas.width, canvas.height);
      context.clearRect(410, 200, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'esfera' && mida == 'normal') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'esfera' && mida == 'small') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }

    if (tipus == 'esfera' && mida == 'little') {
      context.clearRect(0, 410, canvas.width, canvas.height);
      context.clearRect(150, 0, 500, 100);
    }
  }
}

//Aquesta funció s'encarrega del dibuix de la figura, dels colors i del tipus i grossor de linea
function dibujarCanvas() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var color = document.getElementById("color").value;
  var color2 = document.getElementById("color2").value;
  var tipus = document.getElementById("tipus").value;
  var grosor = document.getElementById("grosor").value;

  var disc = document.getElementById('dis').value;
  console.log(tipus);

  if (tipus == 'rectangle') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.beginPath();
      context.fillRect(150, 150, 300, 200);
      context.strokeRect(150, 150, 300, 200);
      context.closePath();
      setTimeout('myFunction()',0); //això serveis per que quan s'apliqui els canvis de dibuix de figura
                                    //, el text (de la funció my function) no desaparegui
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.beginPath();
    context.fillRect(150, 150, 300, 200);
    context.strokeRect(150, 150, 300, 200);
    context.closePath();
    setTimeout('myFunction()',0);
  }


  }

  if (tipus == 'quadrat') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.beginPath();
    context.fillRect(200, 200, 200, 200);
    context.strokeRect(200, 200, 200, 200);
    context.closePath();
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.beginPath();
    context.fillRect(200, 200, 200, 200);
    context.strokeRect(200, 200, 200, 200);
    context.closePath();
    setTimeout('myFunction()',0);
  }

  }

  if (tipus == 'triangle') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.beginPath();
      context.moveTo(275, 200);
      context.lineTo(200, 300);
      context.lineTo(350, 300);
      context.closePath();
      context.fill();
      context.stroke();
      setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.beginPath();
    context.moveTo(275, 200);
    context.lineTo(200, 300);
    context.lineTo(350, 300);
    context.closePath();
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }


  }

  if (tipus == 'cercle') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.beginPath();
    context.arc(300, 300, 100, 0, (Math.PI / 180) * 360, true);
    context.closePath();
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.beginPath();
    context.arc(300, 300, 100, 0, (Math.PI / 180) * 360, true);
    context.closePath();
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }

  }

  if (tipus == 'pentagon') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 100;
    var L = 5;
    var rad = (2 * Math.PI) / L;

    context.beginPath();
    for (var i = 0; i < L; i++) {
      x = X + R * Math.cos(rad * i);
      y = Y + R * Math.sin(rad * i);
      context.lineTo(x, y);
    }
    context.closePath();
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.fill();
      context.stroke();
      setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }

  }

  if (tipus == 'octaedre') {
    context.clearRect(0, 0, canvas.width, canvas.height);

    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 100;
    var L = 8;
    var rad = (2 * Math.PI) / L;

    context.beginPath();
    for (var i = 0; i < L; i++) {
      x = X + R * Math.cos(rad * i);
      y = Y + R * Math.sin(rad * i);
      context.lineTo(x, y);
    }
    context.closePath();
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }

  }

  if (tipus == 'dodecaedre') {
    context.clearRect(0, 0, canvas.width, canvas.height);

    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 100;
    var L = 12;
    var rad = (2 * Math.PI) / L;

    context.beginPath();
    for (var i = 0; i < L; i++) {
      x = X + R * Math.cos(rad * i);
      y = Y + R * Math.sin(rad * i);
      context.lineTo(x, y);
    }
    context.closePath();
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }
  }

  if (tipus == 'rombe') {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(200, 300);
    context.lineTo(300, 200);
    context.lineTo(400, 300);
    context.lineTo(300, 400);

    context.closePath();
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }
  }

  if (tipus == 'romboide') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.beginPath();
    context.moveTo(275, 200);
    context.lineTo(200, 300);
    context.lineTo(325, 300);
    context.lineTo(400, 200);
    context.closePath();
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.beginPath();
    context.moveTo(275, 200);
    context.lineTo(200, 300);
    context.lineTo(325, 300);
    context.lineTo(400, 200);
    context.closePath();
    context.fill();
    context.stroke();
    setTimeout('myFunction()',0);
  }

  }

  if (tipus == 'esfera') {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = color;
    context.strokeStyle = color2;
    if (grosor == 'x1') {
      context.lineWidth = 2;

    }
    if (grosor == 'x1.5') {
      context.lineWidth = 3;
    }
    if (grosor == 'x2') {
      context.lineWidth = 4;
    }
    if (disc == 'continua') {
      context.setLineDash([0, 0]);
      context.beginPath();
    context.arc(300, 300, 100, 0, (Math.PI / 180) * 360, true);
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath();
    context.ellipse(300, 300, 100, 45, Math.PI / 25, 0, 2 * Math.PI);
    context.stroke();
    setTimeout('myFunction()',0);
    }
    if (disc == 'discontinua'){
    context.setLineDash([5, 3]);
    context.beginPath();
    context.arc(300, 300, 100, 0, (Math.PI / 180) * 360, true);
    context.closePath();
    context.fill();
    context.stroke();
    context.beginPath();
    context.ellipse(300, 300, 100, 45, Math.PI / 25, 0, 2 * Math.PI);
    context.stroke();
    setTimeout('myFunction()',0);
  }

  }
}
//aqui utilitzem un segon canvas per posar les imatges de fons
function fondo() {

  var canvas = document.getElementById("canvas2");
  var context = canvas.getContext("2d");
  var img= new Image();
  var fondo = document.getElementById('fondo').value;

    if (fondo == 'cap') {
      context.clearRect(0, 0, canvas.width, canvas.height);}
    if (fondo == 'fondo1') {
      img.src = 'fondo1.png';}
    if (fondo == 'fondo2') {
      img.src = 'fondo2.jpeg';}
    if (fondo == 'fondo3') {
      img.src = 'fondo3.jpg';}
      img.onload = function(){
      context.drawImage(img, 0, 0);}

}
//aquí definim el tipus de bitmap a utilitzar
function bitmap() {

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var bitmap = document.getElementById('bitmap').value;

  if (bitmap == 'cap') {
    dibujarCanvas();

  }
  if (bitmap == 'negatiu') {

    var imgNegatiu = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imgNegatiu.data;

    for (var i = 0; i < pixels.length; i += 4) {
      pixels[i] = 255 - pixels[i];
      pixels[i + 1] = 255 - pixels[i + 1];
      pixels[i + 2] = 255 - pixels[i + 2];
    } context.putImageData(imgNegatiu, 0, 0);
  }

  if (bitmap == 'bn') {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    for (var i = 0; i < data.length; i +=4){
      var brightness = 0.34 * data[i] + 0.5  * data[i + 1] + 0.16 * data[i + 2];
      data[i] = brightness;
      data[i + 1] = brightness;
      data[i + 2] = brightness;
    } context.putImageData(imageData, 0, 0);
  }


  if (bitmap == 'sepia') {
    var imgData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
		var pixels = imgData.data;
		for (var i = 0; i < pixels.length; i += 4) {
		  //calcula la luminosidad percibida para este pixel
		  var luminosidad = .3 * pixels[i] + .6 * pixels[i + 1] + .1 * pixels[i + 2];
		  pixels[i] = Math.min(luminosidad + 40, 255); // rojo
		  pixels[i + 1] = Math.min(luminosidad + 15, 255); // verde
		  pixels[i + 2] = luminosidad; // azul
		}
		context.putImageData(imgData, 0, 0);
  }
}
