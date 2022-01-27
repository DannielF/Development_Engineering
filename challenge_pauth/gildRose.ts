/**
 * Creates a new Item.
 * @exports Item
 *
 */
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

/**
 *
 * @exports GildedRose
 * @description sellIn == 0 -- quality drops as twice as fast
 * @description quality never drops below 0
 * @description "Aged Brie" actually increases in Quality the older it gets
 * @description The Quality of an item is never more than 50
 * @description "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
 * @description "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
 * @description "Conjured" items degrade in Quality twice as fast as normal items
 */

export class GildedRose {
  items: Array<Item>;

  /**@constructor GildedRose
   * @param {Item[]} items - array of items
   */
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * @memberof GildedRose
   * @returns array of items
   * @method updateQuality - updates quality of items
   */
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name !=
          ('Aged Brie' &&
            'Backstage passes to a TAFKAL80ETC concert' &&
            'Sulfuras, Hand of Ragnaros') &&
        this.items[i].quality > 0
      ) {
        this.items[i].quality -= 1;
      }

      if (this.items[i].quality < 50) {
        this.items[i].quality += 1;
      }

      if (
        this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' &&
        this.items[i].sellIn < 11 &&
        this.items[i].quality < 50
      ) {
        this.items[i].quality += 2;
      }

      if (
        this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' &&
        this.items[i].sellIn < 6 &&
        this.items[i].quality < 50
      ) {
        this.items[i].quality += 3;
      }

      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -= 1;
      }

      if (
        this.items[i].sellIn < 0 &&
        this.items[i].name !=
          ('Aged Brie' &&
            'Backstage passes to a TAFKAL80ETC concert' &&
            'Sulfuras, Hand of Ragnaros')
      ) {
        this.items[i].quality = this.items[i].quality - this.items[i].quality;
      }
    }
    return this.items;
  }

  /**
   * @memberof GildedRose
   * @returns array of items
   * @method updateQuality - updates quality of conjured items
   */
  updateConjuredItems() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].sellIn -= 1;
      if (this.items[i].sellIn == 0) {
        this.items[i].quality = this.items[i].quality - this.items[i].quality;
      }
    }

    return this.items;
  }
}
