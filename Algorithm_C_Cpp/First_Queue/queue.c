/* 1 - Crear pointer para saber que hay en front y rear
2 - colocar estos valores en -1 al inicializar
3 - incrementar en 1 el valor de "rear"
    cuando agreguemos un elemento
4 - Retornar el valor de front al quitar un elemento 
    e incrementar en 1 el valor de
    front al usar dequeue,
5.- antes de agregar un elemento revisar si hay espacio
6.- antes de remover un elemento revisamos que existan elementos
7.- asegurarnos de que al remover todos los elementos 
    resetear nuestro front y rear a -1 
    y agregar el valor de 0 a Front al hacer nuestro primer enqueue 

 */
#include<stdio.h>
#define SIZE 5 /* size array */
int values[SIZE], front = -1, rear = -1;

void enQueue(int value){ /* No retornar nada solo toma el dato y lo pone en Queue */
    if(rear == SIZE-1) /* check that is not full if not print it's full */
        printf("Nuestro Queue esta lleno\n" );
    else {
        if(front == -1)
            front = 0; /* Reset to 0 */
        rear++;
        values[rear] = value; /* asignar el nuevo valor al array */
        printf("Se inserto el valor %d correctamente\n", value);
    
    }
}

void deQueue(){
    if(front == -1)
        printf("Nuestro Queue esta vacio\n" );
    else{
        printf("se elimino el valor %d\n", values[front]);
        front++;
        if(front > rear)
        front = rear = -1;
    }

}

int main(int argc, char const *argv[])
{
  enQueue(1);
  enQueue(2);
  enQueue(3);
  enQueue(4);
  enQueue(5);
  deQueue();
  deQueue();
  deQueue();
  deQueue();
  deQueue();
  enQueue(10);
  return 0;
}
