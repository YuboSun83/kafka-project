# kafka-project

This is a web app to describe how kafka work

# Daily Log
## 3/22/2022 problems
1. in producer page, when click setting the frame will move down for giving space for the hidden stuff. 
Solved. set upper tag position as absolute, and change the lower levels as float. then the lower level will leave the text stream. it will show upon the frame.
2. change acks from input to select or other way to easier change value cuz ack only have 3 different values. 
Solved. chage input to select as 1 0 -1
3. cannot get producer's data in animation component.
Solved. send whole parent state to child state.

## 3/23/2022 problems
1. mobile view fix
Basically solved. looks better.
2. design producer to broker animition.
need to talk about steps