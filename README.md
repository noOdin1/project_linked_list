<h1>Project Linked List - TOP 75%</h1>

This project will implement a common data structure, the Linked List.<br>

<h3>The objectives for this project:</h3>
&emsp;1. Create a class/factory called LinkedList<br>
&emsp;2. Create a class/factory called Node<br>
&emsp;&emsp;&emsp;a. 'value' to be present in this class/factory, set to null initially<br>
&emsp;&emsp;&emsp;b. 'nextNode' to be present in this class/factory, set to null initially<br>
&emsp;3. append(value) adds a new node containing value to the end of the list.<br>
&emsp;4. prepend(value) adds a new node containing value to the start of the list.<br>
&emsp;5. size() returns the total number of nodes in the list.<br>
&emsp;6. head() should return the value of the first node in the list. If the list is empty, it should return undefined.<br>
&emsp;7. tail() should return the value of the final node in the list. If the list is empty, it should return undefined.<br>
&emsp;8. at(index) should return the value of the node at the given index. If there’s no node at the given index, it should return undefined.<br>
&emsp;9. pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined.<br>
&emsp;10. contains(value) returns true if the passed in value is in the list and otherwise returns false.<br>
findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1. If more than one node has a value matching the given value, it should return the index of the first node with the matching value.<br>
&emsp;11. toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.<br>
