function InverserNombre(nombre)
{
	nombre = nombre + "";
	return nombre.split("").reverse().join(""); // le join on choisir l'arugument qu'on veut entre les guilletmets
}
console.log(InverserNombre(32243));