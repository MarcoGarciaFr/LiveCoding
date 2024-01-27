/*

	Desarrollador: Marco Antonio Garcia Franco
	
	Entrevistador: Pedro Antonio Roldán Linares
	
	Evaluación: Competente 5/6, ya que solo falto la impresión, pero el código estaba adecuado. 
	
	
	
	Comentarios: No deje tantas pausas largas al escribir el código. Puse atención a las instrucciones y pregunte los requerimentos adecuadamente. Debo trabajar en mis nervios y ser un poco mas veloz explicando, ya que pierdo mucho tiempo tratando de explicar las cosas. Que no le tenga miedo a equivocarme porque digo mucho la palabra "me parece".
	
*/

package live_coding_4;

public class FizzBuzz {
	
	public void imprimir() {
		
		for(int i = 1; i <= 100; i++) {
			
			if(i%5 == 0 && i%3 == 0) {
				
				System.out.println("FizzBuzz");
				
			}else if(i%5 == 0){
				
				System.out.println("Buzz");
				
			}else if(i%3 == 0){
				
				System.out.println("Fizz"); 
				
		}else {
			
			System.out.println(i);
			
		}
			
	}
		
}
	
	public static void main(String[] args) {
	
      // Se agrego despues del tiempo de la entrevista:
		
		FizzBuzz fb = new FizzBuzz();
		
		fb.imprimir();
	
	}

}

