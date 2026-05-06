<h1>Project Linked List - TOP 75%</h1>

This project will implement a common data structure, the Linked List.<br>

<h3>The objectives for this project:</h3>

| Project Objectives                                                                                                            |          status           |
| ----------------------------------------------------------------------------------------------------------------------------- | :-----------------------: |
| 1. Create a class/factory called LinkedList                                                                                   | [done] :white_check_mark: |
| 2. Create a class/factory called Node                                                                                         | [done] :white_check_mark: |
| &emsp;'value' to be present in this class/factory, set to null initially                                                      | [done] :white_check_mark: |
| &emsp;'nextNode' to be present in this class/factory, set to null initially                                                   | [done] :white_check_mark: |
| 3. append(value) function to add a new node with 'value'<br>&emsp;to the end of the list.                                     | [done] :white_check_mark: |
| 4. prepend(value) function to add a new node with 'value'<br>&emsp;to the start of the list.                                  | [done] :white_check_mark: |
| 5. size() returns the total number of nodes in the list.                                                                      | [done] :white_check_mark: |
| 6. head() should return the value of the first node in the list.<br>&emsp;If the list is empty, it should return undefined.   | [done] :white_check_mark: |
| 7. tail() should return the value of the final node in the list.<br>&emsp;If the list is empty, it should return undefined.   | [done] :white_check_mark: |
| 8. at(index) should return the value of the node at the given index,<br>&emsp;undefined otherwise.                            | [done] :white_check_mark: |
| 9. pop() should remove the head node from the list and return its value,<br>&emsp;undefined on empty list                     | [done] :white_check_mark: |
| 10. contains(value) returns true if the passed in value is in the list<br>&emsp;&ensp;otherwise returns false.                | [done] :white_check_mark: |
| 11. findIndex(value) returns the index of the node containing the given value.<br>&emsp;&ensp;No matching value then it should return -1.<br>&emsp;&ensp;Return the index of the first node with the matching value<br>&emsp;&ensp;if more than one node has the same value.<br> | [done] :white_check_mark: |
| 12. toString() represents the LinkedList objects as strings.<br>&emsp;&ensp;If the list is empty, it should return an empty string.<br>&emsp;&ensp;The format should be: ( value ) -> ( value ) -> ( value ) -> null.<br>                                                        | [done] :white_check_mark: |


| Extra Credit Objectives                                                                             |          status           |
| --------------------------------------------------------------------------------------------------- | :-----------------------: |
| 1. insertAt(index, ...values) should insert new nodes with the given values at the given index.<br> | [done] :white_check_mark: |
| 2. removeAt(index) that removes the node at the given index.<br>                                    | [done] :white_check_mark: |


| Test Suite                                                                                  |                 status                 |
| ------------------------------------------------------------------------------------------- | :------------------------------------: |
| 1. Test all the methods/functions in LinkedList class with empty list.<br>                  |       [done] :white_check_mark:        |
| 2. Test all the methods/functions in LinkedList class with list containing 1 item only.<br> |       [done] :white_check_mark:        |
| 3. Test all the methods/functions in LinkedList class with list containing 2 item only.<br> | [in progress] :hourglass_flowing_sand: |


This project has objective and 'good' to have objectives. This leaves some area for my own design.<br>
The following is a list of my design criteria for this project:<br>

| Design criteria                                                                                    |          status           |
| -------------------------------------------------------------------------------------------------- | :-----------------------: |
| 1. Linked List starts with index 1.<br>                                                            | [done] :white_check_mark: |
| 2. When the linked list is empty, prepending or appending items acts like normal adding items.<br> | [done] :white_check_mark: |
| 3. If the linked list is empty, the function insertAt() with index 1 would add items normally.<br> | [done] :white_check_mark: |
| 4. Empty linked list, insertAt() with index 0 or 2 would throw RangeError.<br>                     | [done] :white_check_mark: |
| 5. Linked list with 1 item, insertAt() with index 0 and 3 would throw RangeError.<br>              | [done] :white_check_mark: |
| 6. Linked list with 1 item, insertAt() with index 1 would prepend the new item.<br>                | [done] :white_check_mark: |
| 7. Linked list with 1 item, insertAt() with index 2 would append the new item.<br>                 | [done] :white_check_mark: |
| 8. Linked list with 0 item, removeAt() with index any number would throw RangeError.<br>           | [done] :white_check_mark: |
| 9. Linked list with 1 item, removeAt() with index 0 or 2 would throw RangeError.<br>               | [done] :white_check_mark: |
