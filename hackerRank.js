// function divisibleSumPairs(k, ar){
//     var count =0;
//     for (var i=0; i<ar.length-1; i++){
//         for ( var j=i+1; j<ar.length; j++){
//             if ( i<j ){
//                 if ( (ar[i] + ar[j]) % k == 0){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }
// console.log(divisibleSumPairs(3,[1,3,2,6,1,2]));

// function migratoryBirds(arr){
//     var dict ={};
//     arr.sort();
//     for (var i=0; i<arr.length; i++){
//         if (dict[arr[i]] != null){
//             dict[arr[i]]++;
//         }
//         else {
//             dict[arr[i]]=1;
//         }        
//     }
//     var max = arr[0];
//     for (var key in dict){
//         if (dict[key] > dict[max]){
//             max = key;
//         }
//     }
//     return max;
// }
// console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));

// function dayOfProgrammer(year){ 
//     if (year == 1918){
//         return "26.09."+year;
//     }   
//     else if (year % 4 == 0 && year < 1918){
//         return "12.09."+year;
//     }
//     else if ((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) && year > 1918){
//         return "12.09."+year;
//     }
//     else {
//         return "13.09."+year;
//     }
// }
// console.log(dayOfProgrammer(1918));


// k = idx of item not to count
// b = what anna paid

// function bonAppetit(bill,k, b){
//     var sum = 0;
//     for (var i=0; i<bill.length; i++){
//         if (i != k){
//             sum += bill[i];
//         }
//     }
//     var avg = (sum/(2));
//     if (avg == b){
//         return "Bon Appetit";
//     }
//     else {
//         return b-avg;
//     }
// }
// console.log(bonAppetit([3,10,2,9],1,12));
// console.log(bonAppetit([3,10,2,9],1,7))

// function sockMerchant(ar){
//     var dict = {};
//     var count = 0;
//     for (var i=0; i<ar.length; i++){
//         if (dict[ar[i]] == null){
//             dict[ar[i]] = 1;
//         }
//         else {
//             dict[ar[i]]++;
//         }
//     }
//     for (var key in dict){
//         var pairs = Math.floor(dict[key]/2);
//         count += pairs;
//     }
//     return count;
// }

// console.log(sockMerchant([1,2,1,2,1,3,2]));
// console.log(sockMerchant([10,20,20,10,10,30,50,10,20]));

// function drawingBook(n,p){
//     var front = p-1;
//     var back = n-p;
//     if (front < back){
//         return Math.ceil(front/2);
//     }
//     else if (n % 2 == 0){
//         return Math.ceil(back/2);
//     }
//     else {
//         return Math.floor(back/2);
//     }
// }

// console.log(drawingBook(5,4));
// console.log(drawingBook(6,2));

// function countingValleys(s){
//     var currentLevel = 0;
//     var count = 0;
//     for (var i=0; i<s.length; i++){
//         if (s[i] == "U"){
//             currentLevel++;
//             if ( currentLevel == 0){
//                 count++;
//             }
//         }
//         else {
//             currentLevel--;
//         }
//     }
//     return count;
// }
// console.log(countingValleys('UDDDUDUU'));

// function getMoneySpent(keyboards, drives, b){
//     var max = 0;
//     for (var i=0; i<keyboards.length; i++){
//         for (var j=0; j<drives.length; j++){
//             var spent = keyboards[i] + drives[j];
//             if (spent > max && spent <= b){
//                 max = spent;
//             }
//         }
//     }
//     if (max == 0){
//         return -1;
//     }
//     else {
//         return max;
//     }
// }
// console.log(getMoneySpent([3,1],[5,2,8],10));
// console.log(getMoneySpent([4],[5],5));

// function catAndMouse(x,y,z){
//     var catA = Math.abs(z-x);
//     var catB = Math.abs(z-y);
//     if (catA < catB){
//         return "Cat A";
//     }
//     else if (catA > catB){
//         return "Cat B";
//     }
//     else {
//         return "Mouse C"
//     }
// }
// console.log(catAndMouse(1,2,3));
// console.log(catAndMouse(1,3,2));

// function pickingNumbers(a){
//     var dict ={};
//     var max = 0;
//     for (var i=0; i<a.length; i++){
//         if (dict[a[i]] == null){
//             dict[a[i]] = 1;
//         }
//         else {
//             dict[a[i]]++;
//         }
//     }
//     for (var key in dict){
//         if (dict[key+1] == null){
//             dict[key+1] = 0
//         }
//         if (dict[key-1] == null){
//             dict[key-1] = 0
//         }
//         if (dict[key+1] != null && (dict[key] + dict[key+1]) > max){
//             max = dict[key] + dict[key+1]
//         }
//         if (dict[key-1] != null && (dict[key] + dict[key-1]) > max){
//             max = dict[key] + dict[key-1]
//         }
//     }
//     return max;
// }
// console.log(pickingNumbers([4,6,5,3,3,1]));
// console.log(pickingNumbers([1,2,2,3,1,2]));
// console.log(pickingNumbers([6,6,6,6,6,6,6]));

// function hurdleRace(k,height){
//     var max = k;
//     for (var i=0; i<height.length; i++){
//         if (height[i] > max){
//             max = height[i]
//         }
//     }
//     return max - k; 
// }
// console.log(hurdleRace(4,[1,6,3,5,2]));

