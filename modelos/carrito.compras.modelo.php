<?php 

require_once "conexion.php";

class CarritoComprasModelos
{
    /*===========================================================* 
     Mostrar contenido del sitio web, de forma dinamica tomando valores de la tabla
     =============================================================*/
    static public function mdlMostrarInformacionWeb($tabla)
    {
        $sql = "SELECT * FROM $tabla";

        $stmt = Conexion::conectar()->prepare($sql);
        $stmt->execute();

        return $stmt->fetch();

        $stmt = null;
    }
}
?>