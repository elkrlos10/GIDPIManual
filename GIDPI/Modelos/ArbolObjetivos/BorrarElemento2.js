function borrarElemento(e) {
    elementoBorrar = e.parentNode.parentNode.parentNode; //guarda el span del elemento a borrar y selecciona su abuelo (osea el li)
    idElementoBorrar = elementoBorrar.getAttribute("id");
    imgBorrar = document.querySelector("#" + idElementoBorrar + "img");
    indirectoBorrar = document.querySelector("#" + idElementoBorrar + "indirecto");
    elementoBorrar.parentNode.removeChild(elementoBorrar);
    imgBorrar.parentNode.removeChild(imgBorrar);
    indirectoBorrar.parentNode.removeChild(indirectoBorrar);
}

function borrarElemento2(e) {
    elementoBorrar = e.parentNode.parentNode;
    var idElementoPadre = elementoBorrar.parentNode.getAttribute("id");
    document.querySelector("#" + idElementoPadre).removeChild(elementoBorrar);
}