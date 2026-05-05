<h1>Project Linked List - TOP 75%</h1>

This project will implement a common data structure, the Linked List.<br>

<h3>The objectives for this project:</h3>
&emsp;1. [done] Create a class/factory called LinkedList<br>
&emsp;2. [done] Create a class/factory called Node<br>
&emsp;&emsp;&emsp;a. [done] 'value' to be present in this class/factory, set to null initially<br>
&emsp;&emsp;&emsp;b. [done] 'nextNode' to be present in this class/factory, set to null initially<br>
&emsp;3. [done] append(value) function to add a new node with 'value' to the end of the list.<br>
&emsp;4. [done] prepend(value) function to add a new node with 'value' to the start of the list.<br>
&emsp;5. [done] size() returns the total number of nodes in the list.<br>
&emsp;6. [done] head() should return the value of the first node in the list.<br>
&emsp;&emsp;&nbsp;If the list is empty, it should return undefined.<br>
&emsp;7. [done] tail() should return the value of the final node in the list.<br>
&emsp;&emsp;&nbsp;If the list is empty, it should return undefined.<br>
&emsp;8. [done] at(index) should return the value of the node at the given index.<br>
&emsp;&emsp;&nbsp;If there’s no node at the given index, it should return undefined.<br>
&emsp;9. [done] pop() should remove the head node from the list and return its value.<br>
&emsp;&emsp;&nbsp;If it’s used on an empty list, it should just return undefined.<br>
&emsp;10. [done] contains(value) returns true if the passed in value is in the list<br>
&emsp;&emsp;&ensp;and otherwise returns false.<br>
&emsp;11. [done] findIndex(value) returns the index of the node containing the given value.<br>
&emsp;&emsp;&ensp;If the value can’t be found in the list, it should return -1.<br>
&emsp;&emsp;&ensp;If more than one node has a value matching the given value,<br>
&emsp;&emsp;&ensp;it should return the index of the first node with the matching value.<br>
&emsp;12. [done] toString() represents your LinkedList objects as strings,<br>
&emsp;&emsp;&ensp;so you can print them out and preview them in the console.<br>
&emsp;&emsp;&ensp;If the list is empty, it should return an empty string.<br>
&emsp;&emsp;&ensp;The format should be: ( value ) -> ( value ) -> ( value ) -> null.<br>

Other objectives:<br>
&emsp;1. [done] insertAt(index, ...values) should insert new nodes with the given values at the given index.<br>
&emsp;2. [done] removeAt(index) that removes the node at the given index.<br>

Test suite:<br>
&emsp;1. [done] Test all the methods/functions in LinkedList class with empty list.<br>
&emsp;2. [done] Test all the methods/functions in LinkedList class with list containing 1 item only.<br>
