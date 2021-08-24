#include<stdio.h>

long result;
int n;

long factorial(int n){
    if (n == 0)
        return 1;
    else
        return (n* factorial(n-1));
}

int main(int argc, char const *argv[])
{
    printf("write your number to calculate\n");
    scanf("%d",&n);
    if (n<0)
    {
        printf("The number must be positive\n");
    }
    else
    {
        result = factorial(n);
        printf("%d! = %ld\n", n, result);
    }
    return 0;
}
