function century(year) {

    if (year <= 0)
        document.write("0 and negative is not allow"
            + "for a year");
 
    else if (year <= 100)
        document.write("1st century\n");

    else if (year % 100 == 0)
        document.write(parseInt(year / 100) + " century");

    else
        document.write(parseInt(year / 100) + 1 + " century");
}
let year = 2016;
century(year);






