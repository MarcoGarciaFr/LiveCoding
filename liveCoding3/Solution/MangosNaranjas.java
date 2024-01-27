/*

	Desarrollador: Marco Antonio Garcia Franco
	
	Entrevistador: Pedro Antonio Roldán Linares
	
	Comentarios: Se explicar los procedimientos pero dejo pausas muy largas cuando escribo código. Pongo atención a las instrucciones de manera adecuada, tengo un lenguaje formal. Debo practicar explicar de manera mas técnica cada parte que desarrollo del código. Y trabajar mucho los nervios.
	
*/

package org.generation.frutas;

import java.util.Scanner;

public class MangosNaranjas {

	public static void main(String[] args) {


		class Frutas {
			
			private int mangos;
			
			private int naranjas;

			public Frutas(int mangos, int naranjas) {
				
				this.mangos = mangos;
				
				this.naranjas = naranjas;

			}
			
			private int calcularCajasF() {
				
				int variable;
				
			}

		}

		Scanner scanner = new Scanner(System.in);

		System.out.println("Escribe el número de Mangos: ");
		
		int mangos = scanner.nextInt();
		
		System.out.println("Escribe el número de Naranjas: ");
		
		int naranjas = scanner.nextInt();

		Frutas frutas = new Frutas(mangos, naranjas);


		scanner.close();
		
	}

}
