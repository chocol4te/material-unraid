I think that the unRAID UI doesn't look as nice as modern website design allows, and is certainly not as responsive at it could be. My goal is to design a new UI, using Google's Material Design spec and modern JavaScript frameworks. 
To be honest, this is more my personal learning than a serious effort to replace the existing system. I also respect the value of reliability and tried-and-tested software over the latest and "greatest" in JavaScript front-end development.

Every feature of the existing UI will be ported over to JavaScript in the form of cards. Each card has it's own file, and can be managed and categorised independently. This allows the end user to re-arrange their UI however they wish. EG Array devices card could be moved to dashboad, active users card moved to other page.

| Description of issue | Solution |
| --- | --- |
| Switching tabs is slow, whole page must reload | Create a Single Page Application, where switching tabs is instant |
| Sluggish to interact with. (Changing settings takes time, 1 Hz refresh of stats) | React uses an observer model for changes, and can occur in the background while the user continues working (No more waiting for a refresh) |
| Occasional rendering issues, such as floating text or overlapping elements | Using a JavaScript framework instead of plain HTML and CSS may fix these issues |
| Overall theme doesn't seem very unified | Material UI design will hopefully make it easier to maintain consistent colours and styles |


| Category | Feature | Completed |
| --- | --- | --- |
| Dashboard | Apps | |
|  | Statistics | |
|  | Parity Status | |
|  | System Status | |
|  | Users List | |
|  | Shares List | |
| Main | Array Devices | |
| | Cache Devices | |
| | Boot Devices | |
| | Array Operation | |
| Shares | User shares | |
| | Disk shares | |
| Users | Users | | 
| Settings | \* | |
| Plugins | Installed | |
| | New | |
| Docker | Containers | |
| | Repositories | |
| VMs | Virtual Machines | | 
| | Templates\*\* | |
| Stats | Disk Stats | | 
| | System Stats | |
| Tools | unRAID OS | |
| | WebGUI | |
| | About | |

\* Needs its own special page, or maybe not at all if each card has a settings menu

\*\* This would be redesigned as a plus icon on the page, that when clicked opens a window for configuring the VM. VMs may have their own card(?)
