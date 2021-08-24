/* 1.we search the minimum coins possible to get total change taking coins to the coins set
2.we need an auxiliar "res" to each coin works  like a recursive stack.
3.create a recursive function to find the value, iterating until you find what is the coin going to used
4.returns the necessary coins for the change
 */

#include <iostream>
#include <climits>
using namespace std;

int greedyChange(int coinSet[], int n, int N){
  if (N==0)
    return 0;
  
  if (N<0)
    return INT_MAX;
  
  int coins = INT_MAX;
  //going through our entire coin set aka options to give change
  for(int i = 0; i<n, i++)
  {
    int res = greedyChange(coinSet, n, N- coinSet[i]);
    if(res != INT_MAX)
      coins = min(coins, res+1);
  }

  return coins;
}
int main(int argc, char const *argv[])
{
  int coinSet[]={1,5,10,15,20};
  int n = sizeof(coinSet)/sizeof(coinSet[0]);

  int N= 27;

  cout << "the minimum coins to give the change is:"
          << greedyChange(coinSet, n, N);
  return 0;
}