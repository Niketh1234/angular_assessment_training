# Angular  Assessment - BookApp    --   Max Duration: 2hr 30 mts

## Objective

This is an angular application, where, you can add the details of a book and display the details of all the added books in a Table Format. Complete  this BookApp by using Angular 18 with standalone disabled and module enabled. Submit it within the alloted time. 

## Things to do

1. The app is composed of 4 Components, 1 Service and 1 Model.

			- Components (App, Header, AddBook and ShowBook)
			- Service (BookService)  
            - Model (Book)

2. AppComponent is the RootComponent and should contain HeaderComponent and a router-outlet to route other components.

3. Header Component contain the 'Navbar' and should display the App Title, which is, "BookApp and Add Book and Show Book menu itmes".
4. On clicking of AddBook and Show Book menu items AddBook and Show Book  components should be routed to the router outlet.

5. Add Book should Display a Form, for getting the details of the book to be added from the user, and a Table, which shows the details of the books that are already added.

6. The form should contain the below input fileds:

			- Input of type text for getting the Book Name.

			- Input of type text for getting the Author Name.

			- Input of type text for getting the Publishing Year.

			- Input of type text for getting the Language.
			- Add Appropriate buttons to submit and rest the form

-  Apply the appropriate validator to each of the Input fields, so that, the form should be valid only when all the field is containing the value.

- Bind the Input fields to the appropriate properties of the Book Model Object, using ngModel.

7. Show Book Component  should display the details as a table.    

		-  Should display serial number, name, author, year and language for each book.
		- Each row should be dynamically created using approriate structural directive depending upon the number of books, the component, received from the server.  
		- Use String Interpolation to bind the values of book object to table data cell content.
        - This component will fetch data from BookService by calling getBooks() method

8.  Book Service should contain a Book model Array to hold the Book details accepted through the AddBook comp.

			- getBooks() - return the array of the stored books.
			- newBook() -  Adds the Book to the Books array.  


