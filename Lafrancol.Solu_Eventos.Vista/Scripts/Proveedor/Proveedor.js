var objHome = new home();
$(document).ready(function () {
    objHome.leerProveedores();
});

function home() {
    this.leerProveedores = function () {
        

        var data = {  };
        $.ajax({
            type: "GET",
            url: "leerProveedores",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(),
            success: function (data) {
        
                var tr;
                $.each(data, function (d, i) {


                    tr = $('<tr/>');
                    tr.append("<td>" + i.idProveedor + "</td>");
                    tr.append("<td>" + i.nit + "</td>");
                    tr.append("<td>" + i.razonSocial + "</td>");
                    tr.append("<td>" + i.personaContacto + "</td>");
                    tr.append("<td>" + i.telefono + "</td>");
                    tr.append("<td>" + i.direccion + "</td>");
                    $('#grid').append(tr);
                });
                
            }
        });
    };
}