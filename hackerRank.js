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

// function designerPDFViewer(h, word){
//     var dict = {};
//     var alpha = "abcdefghijklmnopqrstuvwxyz";
//     for (var i=0; i<h.length; i++){
//         dict[alpha[i]] = h[i]; 
//     }
//     var max = 0;
//     for (var i=0; i<word.length; i++){
//         if (dict[word[i]] > max){
//             max = dict[word[i]]
//         }
//     }
//     return max*word.length;
// }
// console.log(designerPDFViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"abc"));
// console.log(designerPDFViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],"zaba"));

// function utopianTree(n) {
//     var height = 1;
//     for (var i=0; i<n; i++){
//         if (i % 2 == 1){
//             height += 1;
//         }
//         else {
//             height *= 2;
//         }
//     }
//     return height;
// }
// console.log(utopianTree(0));
// console.log(utopianTree(1));
// console.log(utopianTree(4));

// function angryProfessor(k, a) {
//     var count = 0;
//     for (var i=0; i<a.length; i++){
//         if (a[i] <= 0){
//             count++;
//         }
//     }
//     if (count >= k){
//         return "NO";
//     }
//     return "YES";
// }
// console.log(angryProfessor(3,[-1,-3,4,2]));
// console.log(angryProfessor(2,[0,-1,2,1]));

// function beautifulDays(i, j, k) {
//     var count = 0;
//     for (var i = i; i<=j; i++){
//         var reverse = String(i).split("").reverse().join("");
//         if (Math.abs(i-reverse) % k == 0){
//             count++
//         }
//     }
//     return count;
// }
// console.log(beautifulDays(20,23,6));

// function viralAdvertising(n) {
//     var people = 5;
//     var sum = 0;
//     for (var i=0; i<n; i++){
//         people = Math.floor(people/2);
//         sum += people
//         people *= 3;
//     }
//     return sum;
// }
// console.log(viralAdvertising(3));
// console.log(viralAdvertising(4));

// function saveThePrisoner(n, m, s) {
//     // sneaky way since 0 is false
//     // return (m-1 + s)%n || n;

//     var position = (m+s-1)%n
//     if (position == 0){
//         return n;
//     }
//     return position;
// }
// console.log(saveThePrisoner(5,2,1));
// console.log(saveThePrisoner(5,2,2));
// console.log(saveThePrisoner(7,19,2));
// console.log(saveThePrisoner(3,7,3));

// function circularArrayRotation(a, k, queries) {
//     k=k%a.length;
//     for (var i=0; i<k; i++){
//         a.unshift(a.pop());
//     }
//     var results=[];
//     for (var j=0; j<queries.length; j++){
//         results.push(a[queries[j]]);
//     }
//     return results;
// }
// console.log(circularArrayRotation([1,2,3],2,[0,1,2]));
// console.log(circularArrayRotation([1,2,3],4,[0,1,2]));

// function permutationEquation(p) {
//     var arr = []
//     // indexOf returns index of p where it is found so we need to add 1
//     // since our p starts at 2 and not 0
//     for (let i = 1; i <= p.length; i++) {
//         arr.push(p.indexOf(p.indexOf(i) + 1) + 1)
//     }
//     return arr
// }
// console.log(permutationEquation([2,3,1]));
// console.log(permutationEquation([4,3,5,1,2]));

// function jumpingOnClouds(c, k) {
//     var energy = 100;
//     for (var i=0; i<c.length ; i+=k){
//         if(c[i] == 1){
//             energy -= 3;
//         }
//         else{
//             energy--;
//         }
//     }
//     return energy;
// }
// console.log(jumpingOnClouds([0,0,1,0,0,1,1,0],2));
// console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0],3))

// function findDigits(n) {
//     var count = 0;
//     var n = String(n);
//     for (var i=0; i<n.length; i++){
//         if (n % parseInt(n[i]) == 0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findDigits(12));
// console.log(findDigits(1012));

// function appendAndDelete(s, t, k) {
//     var count = 0;
//     for (var i=0; i<Math.min(s.length,t.length); i++){
//         if (s[i] == t[i]){
//             count++;
//         }
//         else {
//             break;
//         }
//     }
//     if ((s.length+t.length-2*count)>k){
//         return "No";
//     }
//     else if ((s.length+t.length-2*count)%2 == k%2){
//         return "Yes";
//     }
//     else if ((s.length+t.length)<k){
//         return "Yes";
//     }
//     else {
//         return "No"
//     }
// }
// console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
// console.log(appendAndDelete("aba", "aba", 7));
// console.log(appendAndDelete("ashley", "ash", 2));

// // times out
// function squares(a, b) {
//     var count = 0;
//     for (var i=a; i<=b; i++){
//         var sqrt = Math.sqrt(i);
//         if (Number.isInteger(sqrt)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(squares(3,9));

// function squares(a, b) {
//     var start = Math.floor(Math.sqrt(a));
//     var end = Math.floor(Math.sqrt(b));
//     var length = end - start;
//     if (Number.isInteger(Math.sqrt(a))){
//         length++
//     }
//     return length;
// }
// console.log(squares(3,9));
// console.log(squares(17,24));
// console.log(squares(35,70));
// console.log(squares(100,1000));

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     if (y2<y1){
//         return 10000;
//     }
//     else if (m2<m1 && y2==y1){
//         return (m1-m2)*500;
//     }
//     else if (d2<d1 && m2==m1 && y2==y1) {
//         return (d1-d2)*15;
//     }
//     else {
//         return 0;
//     }
// }
// console.log(libraryFine(9, 6, 2015, 6, 6, 2015))

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     if (y2<y1){
//         return 10000;
//     }
//     if (y2==y1){
//         if (m2<m1){
//             return (m1-m2)*500;
//         }
//         if (m2==m1 && d2<d1){
//             return (d1-d2)*15;
//         }
//     }
//     return 0;
// }
// console.log(libraryFine(9, 6, 2015, 6, 6, 2015))

// function cutTheSticks(arr) {
//     var lengths =[];
//     for (var k=0; k<=arr.length; k++){
//         lengths.push(arr.length);
//         var min = arr[0];
//         for (var i=0; i<arr.length; i++){
//             if (arr[i]<min){
//                 min = arr[i];
//             }
//         }
//         var temp = [];
//         for (var j=0; j<arr.length; j++){
//             arr[j] = arr[j]-min;
//             if (arr[j] > 0){
//                 temp.push(arr[j]);
//             }
//         }
//         arr = temp;
//         console.log(arr)
//     }
//     lengths.push(1)
//     return lengths;
// }
// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
// console.log(cutTheSticks([1,2,3,4,3,3,2,1]));

// function cutTheSticks(arr) {
//     var lengths =[];
//     while (arr.length>0){
//         lengths.push(arr.length);
//         var min = arr[0];
//         for (var i=0; i<arr.length; i++){
//             if (arr[i]<min){
//                 min = arr[i];
//             }
//         }
//         var temp = [];
//         for (var j=0; j<arr.length; j++){
//             arr[j] = arr[j]-min;
//             if (arr[j] > 0){
//                 temp.push(arr[j]);
//             }
//         }
//         arr = temp;
//     }
//     return lengths;
// }
// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
// console.log(cutTheSticks([1,2,3,4,3,3,2,1]));

// function repeatedString(s, n) {
//     var count=0;
//     for (var i=0; i<s.length; i++){
//         if (s[i] == "a"){
//             count++
//         }
//     }
//     var repeated = Math.floor(n/s.length);
//     count *= repeated;
//     var remainder = n % s.length;
//     for (var i=0; i<remainder; i++){
//         if (s[i] == "a"){
//             count++
//         }
//     }
//     return count;
// }
// console.log(repeatedString("aba", 10));
// console.log(repeatedString("a", 1000000000000));

// function jumpingOnClouds(c) {
//     var count=0;
//     for (var i=0; i<c.length-1; i++){
//         if (c[i+2] != null && c[i+2] != 1){
//             i++;
//         }
//         count++;
//     }
//     return count;
// }
// console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
// console.log(jumpingOnClouds([0,0,0,0,1,0]))

// function equalizeArray(arr) {
//     var dict={};
//     for (var i=0; i<arr.length; i++){
//         if (dict[arr[i]] != null){
//             dict[arr[i]]++;
//         }
//         else {
//             dict[arr[i]] = 1;
//         }
//     }
//     var max = 0;
//     var count = 0;
//     for (var key in dict){
//         if (dict[key] > max){
//             max = dict[key];
//         }
//         count += dict[key]
//     }
//     count -= max;
//     return count;
// }
// console.log(equalizeArray([3,3,2,1,3]));

// function acmTeam(topic) {
//     var max = 0;
//     var teams = 0;
//     for (var i=0; i<topic.length-1; i++) {
//         for (var j=i+1; j<topic.length; j++) {
//             var count = 0;
//             for (var k=0; k<topic[i].length; k++){
//                 if (topic[i][k] == 1 || topic[j][k] == 1) {
//                     count++;
//                 }
//             }
//             if (count > max) {
//                 max = count;
//                 teams = 1
//             }
//             else if (count == max) {
//                 teams++;
//             }
//         }
//     }
//     var results =[max, teams];
//     return results;
// }
// acmTeam(["10101", "11100", "11010", "00101"]);


// // breaks on larg numbers in JS
// function taumBday(b, w, bc, wc, z) {
//     var total = b*bc + w*wc;
//     if ( bc < wc ) {
//         if ( (bc + z) >= wc ) {
//             return total;
//         }
//         total = b*(bc) + w*(bc+z);
//         return total;
//     }
//     else if ( bc > wc ) {
//         if ( (wc + z) >= bc ) {
//             return total;
//         }
//         total = w*(wc) + b*(wc+z)
//         return total;
//     }
//     return total;
// }
// console.log(taumBday(10,10,1,1,1));
// console.log(taumBday(5,9,2,3,4));
// console.log(taumBday(3,6,9,1,1));
// console.log(taumBday(7,7,4,2,1));
// console.log(taumBday(3,3,1,9,2));

// Python solutiom
// def taumBday(b, w, bc, wc, z):
//     total = b * bc + w * wc
//     if bc < wc:
//         if (bc+z) >= wc:
//             return total;
//         total = b * bc + w * (bc+z)
//         return total;
//     elif bc > wc:
//         if (wc+z) >= bc:
//             return total
//         total = w*wc + b*(wc+z)
//         return total
//     return total

// function kaprekarNumbers(p, q) {
//     var stringAnswer = ""
//     var check = false;
//     for (var i = p; i <= q; i++) {
//         var string = (i * i).toString();
//         var r = string.substring(string.length - i.toString().length);
//         var l = string.substring(0, string.length - i.toString().length)
//         if (i == parseInt(r) + parseInt(l) || i == 1) {
//             stringAnswer += i + " "
//             check = true;
//         }

//     }
//     if (check == true) {
//         console.log(stringAnswer);

//     } else {
//         console.log("INVALID RANGE")
//     }
// }

function beautifulTriplets(d, arr) {
    var count = 0;
    for (var i=0; i<arr.length-2; i++) {
        for (var j=i+1; j<arr.length-1; j++) {
            if ((arr[i] + d) == arr[j]) {
                for (var k=j+1; k<arr.length; k++) {
                    if ((arr[j] + d) == arr[k]) {
                        count++
                    }
                }
            }
        }
    }
    return count;
}
console.log(beautifulTriplets(3, [1,2,4,5,7,8,10]));