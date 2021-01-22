<?php

class CarritoComprasControladores
{
    /*===========================================================* 
     Mostrar contenido de la tabla info_web
     =============================================================*/
     static public function ctrMostrarInformacionWeb()
     {

     	$tabla = "tbl_info_web";

     	$respuesta = CarritoComprasModelos::mdlMostrarInformacionWeb($tabla);

     	return $respuesta;
     }
}
?>