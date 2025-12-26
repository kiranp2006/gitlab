$ git init
Initialized empty Git repository in C:/Users/STUDENT/Desktop/see/.git/

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ echo "Main content" >>text.txt

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ git add text.txt
warning: in the working copy of 'text.txt', LF will be replaced by CRLF the next
 time Git touches it

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ git commit -m"Initial commit"
[main (root-commit) 7928c67] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 text.txt

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ git push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository us
ing

    git remote add <name> <url>

and then push using the remote name

    git push <name>


STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ git remote add origin https://github.com/AishwaryaS77/GITT.git

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ git branch -M main

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$ git push -u origin main
remote: Permission to AishwaryaS77/GITT.git denied to kiranp2006.
fatal: unable to access 'https://github.com/AishwaryaS77/GITT.git/': The requested URL returned error: 403

STUDENT@AN-LAB-28 MINGW64 ~/Desktop/see (main)
$

