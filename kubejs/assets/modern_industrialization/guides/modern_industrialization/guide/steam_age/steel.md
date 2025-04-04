---
navigation:
  parent: steam_age/index.md
  title: Your First Steel
  icon: steel_ingot
  position: 10

item_ids:
  - steel_ingot
  - steam_blast_furnace
---

# Your First Steel

<GameScene zoom="3" interactive={true}>
 <ImportStructure src='../assets/structures/steam_blast_furnace.snbt' />

 <BoxAnnotation color="#dddddd" min="0 0 0" max="3 1 3">
   Valid Hatch positions
 </BoxAnnotation>

 <BoxAnnotation color="#dddddd" min="0 3 0" max="3 4 3">
   Valid Hatch positions (Except for the middle)
 </BoxAnnotation>
</GameScene>

You can macerate coke to obtain Coke Dust, which you can combine with iron to get Uncooked Steel Dust. Using the mixer will give you a better ratio, of course. Now, you will need a Steam Blast Furnace to turn that into steel.

Craft the controller, 29 Fire Clay Bricks and the same three hatches as the Coke Oven.

## The Blast Furnace

<Recipe id="modern_industrialization:steam_age/fireclay/steam_blast_furnace" />

The Blast Furnace's structure is the same as the Coke Oven's, with Bricks replaced by Fire Clay Bricks and one extra hollow layer on top.
