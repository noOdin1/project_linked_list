<h1>Project Linked List - TOP 75%</h1>

This project will implement a common data structure, the Linked List.<br>

<h3>The objectives for this project:</h3>

| Project Objectives                                                                                                              | status        | 
| ------------------------------------------------------------------------------------------------------------------------------- |:-------------:| 
| 1. Create a class/factory called LinkedList                                                                                     | [done]        | 
| 2. Create a class/factory called Node                                                                                           | [done]        | 
| &emsp;'value' to be present in this class/factory, set to null initially                                                        | [done]        |
| &emsp;'nextNode' to be present in this class/factory, set to null initially                                                     | [done]        |
| 3. append(value) function to add a new node with 'value' to the end of the list.                                                | [done]        | 
| 4. prepend(value) function to add a new node with 'value' to the start of the list.                                             | [done]        |
| 5. size() returns the total number of nodes in the list.                                                                        | [done]        |  
| 6. head() should return the value of the first node in the list.<br>&emsp;If the list is empty, it should return undefined.     | [done]        |
| 7. tail() should return the value of the final node in the list.<br>&emsp;If the list is empty, it should return undefined.     | [done]        |
| 8. at(index) should return the value of the node at the given index, undefined otherwise.                                       | [done]        |
| 9. pop() should remove the head node from the list and return its value, undefined on empty list                                | [done]        |
| 10. contains(value) returns true if the passed in value is in the list<br>&emsp;&ensp;otherwise returns false.                  | [done]        |
| 11. findIndex(value) returns the index of the node containing the given value.<br>&emsp;&ensp;No matching value then it should return -1.<br>&emsp;&ensp;Return the index of the first node with the matching value if more than one node has the same value.<br>                                     | [done]        |
| 12. toString() represents the LinkedList objects as strings.<br>&emsp;&ensp;If the list is empty, it should return an empty string.<br>&emsp;&ensp;The format should be: ( value ) -> ( value ) -> ( value ) -> null.<br>                                                                                  | [done]        |

Other objectives:<br>
&emsp;1. [done] insertAt(index, ...values) should insert new nodes with the given values at the given index.<br>
&emsp;2. [done] removeAt(index) that removes the node at the given index.<br>

Test suite:<br>
&emsp;1. [done] Test all the methods/functions in LinkedList class with empty list.<br>
&emsp;2. [done] Test all the methods/functions in LinkedList class with list containing 1 item only.<br>
