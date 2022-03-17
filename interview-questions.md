# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props in React are properties that contain some form of data. Props are passed from parent to child components for read-only use. Props are not mutable! This is to maintain flow in one direction in your applications. You can use props by passing them to your component call and access them in your component using this.props.<propName>

  Researched answer: In React, are a snapshot from the state passed from the parent component. Props allow for the displaying or interaction of data to the user. Props are passed similarly to how you pass an argument to a function.

2. What is a DOM event?

  Your answer: A DOM event is an event that happens when the user interacts with the webpage. An example of this can be when a user clicks on a button. As a programmer you can capture that event and tell your application what to do. A cool thing you can do is access the web element by using event.target.

  Researched answer: There are many DOM events, which are the interactions a user can make within an application. Programmers can make listeners for these interactions and write to any code to be executed based on their needs.

3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming or OOP relies on the use of objects. Object-oriented programming is good because it is the cross-section between data and behavior. We can associate data and specific functions (methods) to these objects by class. It also allows the use of class inheritance which can keep your code dry. Functional programming does not have the ability to associate specific data and behavior, so you would have to call the function by name and pass all data manually every time you want to call on it.

  Researched answer: Object oriented programming is the go to for for projects on a larger scale. It allows big problems to be broken down into smaller, more solvable chunks. You can also shapeshift functions to match the needs of your data more easily rather than rewrite longer functions that effectively do the same thing.

4. What is the difference between a Float and an Integer in Ruby?

  Your answer: A float in Ruby is a number with a decimal whereas an Integer does not/cannot have decimals. When doing math in ruby, if you are operating on two integers for an example, it will return an integer. On the contrary, if you are operating with two floats (or one float and one integer) it will return a float.

  Researched answer: Integers are whole numbers with no additional fraction and floats are numbers with fraction parts (decimal points). For the most part, integers require 2 bytes of memory. On the other hand, floats usually require 4 bytes of memory. Bytes are a group of binary digits or bits operated on by the computer.

5. Ruby has an implicit return. What does that mean?

  Your answer: Ruby's implicit return means that when you write a method, you do not need to use the return keyword. It assumes that you want to return the last line in the method if not specified.

  Researched answer: The problem with implicit return is that you may get a return that you are not expecting. So, with ruby you have to be cautious of how your function executes to get the expected output every time. Programming languages that have explicit return don't necessarily run into the same problem because if your function does not specify a return, it will just return undefined. This is a little easier for trouble shooting.

## Looking Ahead: Terms for Next Week

1. Instance Variable: An instance variable is where you instantiate an object of the class and assign it to new variable for reference.

2. PostgreSQL: PostgreSQL is a data storage/database that allows for the storage of data, such as usernames, passwords and other user data.

3. Ruby on Rails: Ruby on Rails is a server-side open source web application framework written in Ruby. Primarily it is used for handling the communication/connection of data from the front-end to the back-end.

4. ORM: ORM or Object-relational mapping is a programming technique for converting data so it can be compatible with the language you are using.

5. Active Record: Active Record query allows you to make queries to databases without the need of SQL directly which is more ideal for programmers.
