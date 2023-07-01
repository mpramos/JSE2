let texto="HolaMundo"

test('Debe contener un texto en especifico', () => {
    expect(texto).toMatch(/Mundo/)
 })
//Crea un arreglo que contenga al menos un icono de una mujer
 const personas=['👩🏻','👨🏻','🧑🏻']

 test('¿Tenemos al menos un icono de una mujer 👩🏻?',()=>{
    expect(personas).toContain('👩🏻')
 })
 //Comprueba si el numero es mayor
 test('Es un numero mayor?', () => { 
    expect(10).toBeGreaterThan(0)
  })
test('Verdadero', () => { 
    expect(false).toBeTruthy()
 })