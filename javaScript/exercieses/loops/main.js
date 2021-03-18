// In der Browser Console sollen folgende Ausgaben erstellt werden

// 1.
/*
1
2
3
4
5
6
7
8
9
10
*/

// 2.

/*
1
2
3
4
5
4
3
2
1
*/
console.log('start');
let i = 0,
    x = 0,
    addition = true;
while (i <= 10) {
    console.log(x);
    if (i === 5) {
        addition = false;
    }
    if (addition === true) {
        x++
    } else {
        x--;
    }
    i++;
}

// 3.

/*
1
12
123
1234
12345
123456
1234567
12345678
123456789
1234567890
*/

// 4.

/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

// 5.

/*
 *
 ***
 *****
 *******
 *********
 *******
 *****
 ***
 *
 */
