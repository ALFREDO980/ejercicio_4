$(document).ready(function(){


    function valida_telefono(){
        telefono=$('#registro_telefono').val();
        telefono=parseInt(telefono);
        if( telefono<0){
            swal('alerta en el telefono','No existen numeros telefonicos NEGATIVOS ','warnig');
            return false;
        }else{
            telefono=telefono.toString();
            if(telefono.length >10){
                swal('alerta en el telefono',
                'No debes de tener mas de 10 digitos\n '
                + 'Recuerda que  en la zona metropolitana los numeros inician con 55 y 56 \n '+
                'Ejemplo: 5545456767',
                'warninf');
                return false;
        }else if(telefono.length <10){
            swal('alerta en el telefono',
                'No debes de tener menor de 10 digitos\n '
                + 'Recuerda que  en la zona metropolitana los numeros inician con 55 y 56 \n '+
                'Ejemplo: 5545456767',
                'warninf');
                return false;
        }else{
            registro_telefono=$('#registro_telefono').val();
        }
    }
}


    function valida_fecha_nacimiento(){
        
        if($('#registro_fecha_de_nacimiento').val() !=""){
            fecha_ingresada=$('#registro_fecha_de_nacimiento').val().split("-");
            edad=2021-fecha_ingresada[0];
            if(edad<16 || edad>99){
                swal('alerta en fecha de nacimiento','La fecha no es valida : eres muy joven o demasiiado viejo ' ,'warnig');
            return false;
            }else{
                regristro_fecha=$('#registro_fecha_de_nacimiento').val();
                valida_telefono();
            }
        }
    }    

    function hola(){
        regexp1=/[^\w\s]/gi;
        regexp2=/[^A-Z\s]/gi;

        resultado1 = cadena.match(regexp1);
        resultado2 = cadena.match(regexp2);
    }


    
    function valida_construccion_alfabetica(){
        cadena=$('#registro_nombre').val();
        regexp1=/[^\w\s]/gi;
        regexp2=/[^A-Z\s]/gi;

        resultado1 = cadena.match(regexp1);
        resultado2 = cadena.match(regexp2);

        if (resultado1 !=null || resultado2 !=null){
            if(resultado1 == null){
                resultado1="";
            }
            if(resultado2 == null){
                resultado2="";
            }
            swal('alerta en el nombre...','lo siguiente caracteres no son validos:\n\n'+
            resultado2 + resultado1,'warning');
            return false

        }else{
            registro_nombre = $('#registro_nombre').val().trim().toUpperCase();
            

            cadena=$('#registro_paterno').val();
            resultado1 = cadena.match(regexp1);
            resultado2 = cadena.match(regexp2);


            if (resultado1 !=null || resultado2 !=null){
                if(resultado1 == null){
                    resultado1="";
                }
                if(resultado2 == null){
                    resultado2="";
                }
                swal('alerta en el apellido paterno...','lo siguiente caracteres no son validos:\n\n'+
                resultado2 + resultado1,'warning');
                return false
    
        }else{
    
            registro_paterno= $('#registro_paterno').val().trim().toUpperCase();
            
            
            cadena=$('#registro_materno').val();
            resultado1 = cadena.match(regexp1);
            resultado2 = cadena.match(regexp2);


            if (resultado1 !=null || resultado2 !=null){
                if(resultado1 == null){
                    resultado1="";
                }
                if(resultado2 == null){
                    resultado2="";
                }
                swal('alerta en el apellido materno...','lo siguiente caracteres no son validos:\n\n'+
                resultado2 + resultado1,'warning');
                return false
    
            }else{
                registro_materno= $('#registro_materno').val().trim().toUpperCase();;
                

               // alert("texto listo");
                valida_fecha_nacimiento();
            }
            
        }
        
    }
}


    function valida_vacios(){
        if($('#registro_nombre').val()==""){
            swal('upps','ingresa tu "nombre" por favor','warnig');
            return false;
        }else if($('#registro_paterno').val()==""){
            swal('upps','ingresa tu "apellido paterno" por favor','warnig');
            return false;
        }else if($('#registro_materno').val()==""){
            swal('upps','ingresa tu "apellido materno" por favor','warnig');
            return false;
        }else if($('#registro_fecha_de_nacimiento').val()==""){
            swal('upps','ingresa tu "fecha" por favor','warnig');
            return false;
        }else if($('#registro_telefono').val()==""){
            swal('upps','ingresa tu "telefono" por favor','warnig');
            return false;
        }else if($('#registro_carrera').val()==""){
            swal('upps','ingresa tu "carrera" por favor','warnig');
            return false;
        }else if($('#registro_email').val()==""){
            swal('upps','ingresa tu "mail" por favor','warnig');
            return false;
        }else if($('#registro_password').val()==""){
            swal('upps','ingresa tu "password" por favor','warnig');
            return false;
        }else if($('#registro_password_confirmacion').val()==""){
            swal('upps','ingresa tu "confirmacion de password" por favor','warnig');
            return false;
        }else{
            swal('Yeah','Todos los campos tienen algun dato','success');
            valida_construccion_alfabetica();
        }
    }    
    

    
    $('#btn_registro_usuario').click(function(){

        valida_vacios();

    })
});
