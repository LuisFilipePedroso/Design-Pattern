## Observer Pattern

## 🔥 The problem

Create a solution that allows send an email every moment that a new product is registered using the Observer Pattern.

## 👨🏻‍🔧 Technologies

To resolve this problem, was used Typescript.

## 📝 Explation of the code

To implement this pattern, we must have to create two interfaces, Observer and Subject. 
We also need to create the classes that is going to implements this interfaces. 
In this case, I created two classes, **ProductObserver** and **ConcreteObserver**. 
One important thing to mention here is that ConcreteObserver is an generic class, and we will know will as soon as the main class is going to be shown. 
So, as I said, the ProductObserver class is going to implement the Observer interface and the ConcreteObserver class is going to implement Subject interface. 
To increment the solution, I also created a simple class called Mail that contains a method called sendEmail, just to return a fake log that the email is going to be send.  
And to finish, the main class is going to import ConcreteSubject class and the observers classes. As I mentioned before, we must have a generic subject class, because, in this way, we can pass any value on setValue method that this class have.
