# props

### Book with props 

### First Props Result : We gave the random props value in our Book component 
props looks like a parameter in function , we can name what ever we want 
In this case; 
We have the different property of Component in two books. 
First has { } book property { jpb : "developer"}
Second book has { } two properties { title: "random title" , number: 22 }

<Book job="developer"> -- We gave the job property for this component 
<Book title = "random title" numer = {22}> -- We give the two properties 
In our Book Component if we render 
Note : use the paragraph element 
{props.job}
{props.title}
{props.number}
which will print whatever properties it has, as the following result. 

<img src="props/Images/book_props1.png" alt=" " />

### Two books have different specific props

<img src="props/Images/book_props2.png" alt=" " />

### Props Desturing 

const Book = (props) => { 
const {img, title, author} = props;  --> By doing that we dont need to type props repeatedly. 
}
or 

Use it as the parameter directly instead of (props) parameter 
const Book = ( {img, title, author} ) => { 

}


### Props - children 

We need to put the children between the two component tag 
Here , Description is the chldren of the Book components. 

<img src="props/Images/book_props3.png" alt=" " />
