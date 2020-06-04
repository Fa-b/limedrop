Ladder mulefile resetter by Fa-b
Date: 2020/06/04

To reset mule files from ladder to non-ladder status.
By default, all ladder files will be turned into nonladder files.
Directories can be skipped by providing '-skip foldername1,foldername2'

Drop the 'reset.exe' into your mules folder or any subdirectory there,
then either run from command prompt or by double clicking.
 
The default behaviour can be overwritten using flags -old & -new
(so you can reverse from non-ladder to ladder also if you accidentally converted a bunch)

Just specify a comma separated list of extensions (But make sure to match the indices of both lists).

Default behaviour is:
path/to/reset.exe -old .sel.txt,.hel.txt,.scl.txt,.hcl.txt -new .sen.txt,.hen.txt,.scn.txt,.hcn.txt

have fun

