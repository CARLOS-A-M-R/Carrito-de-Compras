<?php

class Conexion
{
     static public function conectar()
     {
          $conexion = new PDO("mysql:host=192.168.1.72:3306;dbname=bd_carrito_compras",
                               "DBASIGAI",
                               "#seguridad2020");

          $conexion->exec("set names utf8");
          
          return $conexion;
     }
}

?>