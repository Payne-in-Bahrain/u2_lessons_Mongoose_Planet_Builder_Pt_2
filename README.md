 
<img src="https://i.imgur.com/ar38s90.jpg" width="60%">
 
# Mongoose Planet Builder - Part 2

## Intro

Today in the Intro to Mongoose lesson you Created and Read documents using a `Movie` Model.

In this lab, you'll do the same, except you'll create and use a `Plant` Model. 

You'll continue to work in the directory that you created for Planet Builder Part 1.  

When you're done with part 2, make sure to push your code to github.  

There is one more part to this lab, so make sure to keep up. 

#### Each part of  `mongoose-planet-builder` (parts 1 thru 3) will be a deliverable and you will make a pull request each time to this same repo to submit each part.

## Exercises

👉 Refer to `mongoose-movies` as needed!

1. Create a `plantSchema` that will provide the structure for _planet_ subdocuments with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `name`| `String`| Required | n/a | 
	| `color`| `String`| Required | n/a |
	| `poisonous`| `String`| Required<br>`enum` to include<br>'true' & 'false'| n/a | 
	| `altitude`| `Number`| n/a | n/a | 

  Remember this schema should be defined in the same file as the planetSchema.  Define the plantSchema above the planetSchema and reference it as    a property of planets, just as we referenced reviews within movies.  

2. Add the following property to the `Planet` Model:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `planets`| `[planetsSchema]`| n/a | n/a | 
  
3. Implement the following User Stories:

  - AAU, when viewing the list of planets, I want to click on a "detail" link displayed next to each planet to view all of the properties for that planet (`show` view)_

	- AAU, when I click on a planet's detail page I want to view a list of all plants associated with that planet that displays each plant's name, color, whether or not the plant is poisonous and the altitude at which it is grown (alternatively display the properties you provided to your planet schema).  _You do not need a separate route, or controller for this_.     
	
	- AAU, I want to create plants by entering information into a form on a planet's detail page.  Although this only requires a create functionality, please create a separate router and controller for plants, as we did for reviews in the earlier lesson. 

## Bonuses

1. Sort the list of `plants` for a planet alphabetically when passing them the view.  You will need to do this in the planets controller where the planets are found and passed to the planets index view.  You can access a planet's plants property in your controller using _dot_ notation. 
2. Be creative and have fun with styling your app! 

### This is a deliverable (Part 3, the final part, will build upon this)
