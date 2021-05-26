const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var texto2 = document.getElementById("texto2");

const cipher = {
    encode: (texto1, offset) => {

        offset = (offset % 26) % 26;

        if (texto1) {

            for (var i = 0; i < texto1.length; i++) {
                if (texto1[i] == " ") { texto2.value += " "; } /*Este If busca si hay un espacio,si es así lo trae*/
                for (var n = 0; n < abc.length; n++) {
                    if (texto1[i].toUpperCase() == abc[n]) { /*El valor de i es = a el valor de n? Si no es así,pasa la siguiente iteración*/
                        var formula = (n + offset) % 26;
                        texto2.value += abc[formula]; /* Texto2= a Texto2 + el resultado de la formula*/
                    }
                }
            }
        }
    },

    decode: (texto1, offset) => {


        offset = (offset % 26) % 26;
        /*Esta formula se ocupa para calcular el desplazamiento,
               El 26 es para que al llegar a Z,vuelva a A */


        /* Bucle para que vaya recorriendo el texto y vaya cifrando*/
        if (texto1) {
            for (var i = 0; i < texto1.length; i++) {
                if (texto1[i].trim() == "") { texto2.value.trim() += ""; }
                for (var n = 0; n < abc.length; n++) {
                    if (texto1[i].toUpperCase() == abc[n]) {
                        var formula = (n - offset) % 26;
                        if(formula >= 0){
                            texto2.value += abc[formula];
                        }else{
                            texto2.value +- abc[(formula*-1)];
                        }                      
                    }
                }
            }
        }



    },
};
export default cipher;