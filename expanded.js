function expandedForm(num) {
    // Your code here
   

    return num.toString().split('').reverse().map((a,i) => a * Math.pow(10, i)).filter(a => a > 0 ).reverse().join(" + ");

}
expandedForm(12)