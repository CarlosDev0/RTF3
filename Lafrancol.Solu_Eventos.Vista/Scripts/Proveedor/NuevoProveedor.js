var ObjHome = new Home();
$(document).ready(function () {
    $('#btnGuardar').on('click', function () {
        guardarProveedor();
    });
    
});

function guardarProveedor() {
    var ProveedorDto = {};
    ProveedorDto.razonSocial = $('#txtNombreProveedor').val();
    ProveedorDto.nit = $('#txtNitProveedor').val();
    ProveedorDto.personaContacto = $('#txtPersonaContacto').val();
    ProveedorDto.telefono = $('#txtTelefono').val();
    ProveedorDto.direccion = $('#txtDireccion').val();
    


    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/guardarProveedor" + "?razonSocial=" + ProveedorDto.razonSocial + "&nit=" + ProveedorDto.nit + "&personaContacto=" + ProveedorDto.personaContacto + "&telefono=" + ProveedorDto.telefono + "&direccion=" + ProveedorDto.direccion, true); //true: is processed asynchronously
    xhr.responseType = 'json';
    xhr.onload = function () {
        poemDisplay.textContent = request.response;
    };
    xhr.send();
    xhr.onload = function () {
        var data = xhr.response;

        alertify.success("Transacción Exitosa");
    };

}




    //if (ProveedorDto.razonSocial == "" && ProveedorDto.nit == "") {
    //    alertify.error("Por favor ingrese los campos obligatorios: Nombre y Nit");
    //} else {

    //    $.ajax({
    //    type: "POST",
    //    url: "guardarProveedor",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    data: JSON.stringify(ProveedorDto),
    //    success: function (Data) {
    //        var resultado = false;
    //        $.each(Data, function (i, v) {
    //            if (v.idProveedor)
    //                retultado = true;
    //        });
    //        if (Data) {
    //            alertify.success("Transacción Exitosa");
    //        } else {
    //            alertify.error("Se generó un error durante la transacción.")
    //        }
            
    //    }
    //    });
    //}
//}

function Home() {
    this.LeerProveedores = function () {
    }
}
