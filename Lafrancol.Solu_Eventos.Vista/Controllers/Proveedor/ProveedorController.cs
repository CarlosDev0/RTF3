using Lafrancol.Solu_Eventos.Entidades;
using Negocios.ProveedorDominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace RTVSS.Controllers.ProveedorController
{
    public class ProveedorController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public List<ProveedorDto> leerProveedores()
        {
            List<Proveedor> listaProveedoresEncontrados = new ProveedorDominio().buscarTodos();
            var listaProveedoresDto = new List<ProveedorDto>();

            //Convierte el listado de Proveedores encontrados en List<ProveedorDto: 
            foreach (Proveedor itemProveedor in listaProveedoresEncontrados) {
                ProveedorDto itemDto = ProveedorDto.convertirProveedorADto(itemProveedor);
                listaProveedoresDto.Add(itemDto);
            };


            
            return listaProveedoresDto;

        }

        public ActionResult nuevoProveedor()
        {
            return View();
        }
        [HttpPost]
        public ProveedorDto guardarProveedor(ProveedorDto proveedorAGuardarDto)
        {
            ProveedorDominio proveedorDominio = new ProveedorDominio();
            Proveedor proveedorGuardado = proveedorDominio.guardarProveedor(proveedorAGuardarDto);

            ProveedorDto proveedorGuardadoDto = ProveedorDto.convertirProveedorADto(proveedorGuardado);
            Proveedor proveedorAGuardar = new Proveedor();

            return proveedorGuardadoDto;

        }
    }
}