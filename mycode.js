// Various functions to demonstrate merge conflicts, and resolutions
/* Version: v0.2`
 * Author : NuclearBanane
 * Email  : nuclearbanane@gmail.com
 * Contributors : Stickler (Stickler@gmail.com) 
 */ 

/* Fibonacci Series
 * 	Returns n-th number in the Fibonacci series
 *
 * Author : NuclearBanane
 * Contributers : Stickler
 */
function fib(n){
	if( n == 0 || n == 1){
		return 1;
	} 
	return fib(n-1) + fib(n-2);
}

