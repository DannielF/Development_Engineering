/* call libraries */
#include "stdlib.h" /* standar library */
#include "stdio.h" /* Print and recover info */
#include "string.h" /* work with strings */

/* create user_data_type */
struct client
{
  char Name[50]; /* array 50 characters */
  char Id[10];
  float Credit;
  char Address[100];  
};

int main(int argc, char const *argv[])
{
  struct client client1 = {0}; /* start values 0(zero) */
  strcpy(client1.Name , "Camilo Valencia");
  strcpy(client1.Id , "000000001");
  client1.Credit = 1000000;
  strcpy(client1.Address , "Calle 1, Carrera 1, ciudad bolivar");

  printf("The Client Name is: %s \n", client1.Name); /* %s print characters */
  printf("The Client Id is: %s \n", client1.Id);
  printf("The Client Credit is: %f \n", client1.Credit); /* %d print numbers float */
  printf("The Client Address is: %s \n", client1.Address);
  /* \n line break */
  return 0;
}

