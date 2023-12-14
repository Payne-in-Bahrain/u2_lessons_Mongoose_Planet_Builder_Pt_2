<img src="https://i.imgur.com/ar38s90.jpg" width="60%">

# Mongoose Planet Builder - Part 2

## Intro

Today in the _Mongoose - Embedding Related Data_ lesson you:

- Created a schema used to embed _review_ subdocuments in a _movie_ document.

- Created routes and a controller for the _reviews_ data resource.

- Created UI for creating and displaying the _reviews_ on the **show** view of a movie.

- Wrote a `create` action that retrieved a _movie_ document, pushed the _review_ (`req.body`) into the document's `reviews` array, saved the _movie_ doc, and redirected back to the show view for that movie.

Similar to what we did in the lesson, in this lab you'll be adding functionality to the `mongoose-planet-builder` project you created in the _part 1_ lab.

## Goal

The goal of this lab is to add the ability to specify a list (array) of `plants` for the  planet.

Styling is secondary, spend time on it only after the functionality has been implemented.

## Exercises

👉 Refer to `mongoose-movies` as needed!

1. Create a `plantSchema` that will provide the structure for _planet_ subdocuments with the following properties:

   | Property   | Type    | Validations                                 | Default Value |
   |------------|---------|---------------------------------------------|---------------|
   | `name`     | `String`| Required                                    | n/a           |
   | `color`    | `String`| Required                                    | n/a           |
   | `poisonous`| `String`| Required<br>`enum` to include<br>'true' & 'false'| n/a       |
   | `altitude` | `Number`| n/a                                         | n/a           |

   Remember this schema should be defined in the same file as the `planetSchema`. Define the `plantSchema` above the `planetSchema`, so that it can be properly referenced. 

2. Add the following property to the `Planet` Model:

   | Property | Type               | Validations | Default Value |
   |----------|--------------------|-------------|---------------|
   | `planets`| `[plantsSchema]`   | n/a         | n/a           |

3. Implement the following User Stories:

   - AAU, while viewing the list of planets, I want to be able to click on a planet's name to view all of its properties in the `show` view. To achieve this, update the planet's index page to display only the names of the planets. Wrap each planet's name in `<a>` tags that reference the URL for the planet detail
     
   - AAU, when I'm on a planet's detail page, I want to view a list of all plants associated with that planet, displaying each plant's name, color, whether or not the plant is poisonous, and the altitude at which it is grown (alternatively display the properties you provided to your plantSchema). _You do not need a separate route or controller for this_.

   - AAU, I want to create plants by entering information into a form on a planet's detail page. Although this only requires a create functionality, please create a separate router and controller for plants, as we did for reviews in the earlier lesson.

## Bonuses

1. Sort the list of `plants` for a planet alphabetically when passing them to the view. You will need to do this in the planets controller where the planets are queried and passed to the planets index view. You can access a planet's plants property in your controller using _dot_ notation.
2. Be creative and have fun with styling your app!

### This is a deliverable (Part 3, the final part, will build upon this)
