export class StayGetAll {
  constructor({
    id,
    titulo,
    imagen,
    tarifa,
    pais,
    estado,
    ciudad,
    categoriaId,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.imagen = imagen;
    this.tarifa = tarifa;
    this.pais = pais;
    this.provincia = estado;
    this.ciudad = ciudad;
    this.categoria = categoriaId;
  }
}
