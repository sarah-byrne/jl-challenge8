# jl-challenge8

To test: `npm run test`
To check the types using Flow: `npm run flow`

## The challenge

In this challenge the objective will be to create some complex data types.

This challenge is the first part of creating a board game called “Shopopoly” which is a bit like the game Monopoly. In this game the objective of each player is to acquire assets such as shops and then make money by charging other players a fee when they visit your shops or other assets. When a player runs out of money they leave the game and the winner is the last player to be left in the game.

This challenge only requires you to design the data types that represent each Location on the playing board.

For now, a Location can be any of the following:

Free Parking. There is only one of these. Players are not charged a fee for visiting this location and cannot purchase this location.

Go. This is the location on the board that all players start from. Players passing through this location pick up a fee of £100.

A factory or warehouse. There are four of these, each with a unique name. They all have a purchase price of £100 and the rent is £20 for anybody visiting any of them.

A retail site. There will be up to 20 of these. They each have a unique name and a purchase price. It is possible for an owner to build a shop on a retail site in one of three sizes (mini store, supermarket, megastore) . The cost of building each type of shop is a property of the retail site. Each retail sites with an owner will charge different amounts to any visitors that aren’t the owner. The rent at each site is different depending on whether the site is undeveloped, contains a ministore, a supermarket or a megastore. Each retail site belongs to a group which can contain either two or three retail sites.

In this challenge you need to create the Location data type that is easy to use and as far as reasonably possible, prevents you from creating an invalid instance of a Location. Instances of Location are never changed after they’ve been created and each instance doesn’t know it’s position on the board or whether anybody is visiting it or owns it.

We may add additional types of Location in later challenges but apply YAGNI principle for now.

Unit tests on simple constructors are not always necessary but it would be good to have tests which show examples of each variant of Location being constructed.

N.b. Any monetary values are whole positive values of GBP sterling.
