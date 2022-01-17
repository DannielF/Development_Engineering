export {};
/**
 * @abstract - a class cannot be instantiated
 * @static - it's possible to call a static method without instantiating the class
 * @protected - allows access only to the class and its subclasses
 */

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// SUPER class
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }
  // set id(id: number) {
  //     this._id = id;
  // }
  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}

// get and set

class Picture extends Item {
  public static photoOrientation = PhotoOrientation;
  // Properties
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }
  get orientation() {
    return this._orientation;
  }
  set orientation(o: PhotoOrientation) {
    this._orientation = o;
  }

  // Methods
  public toString() {
    return `[id: ${this.id}, 
                 title: ${this.title}, 
                 orientation: ${this._orientation}]`;
  }
}

class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title); // Super class constructor
    this.pictures = [];
  }
  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(
  1,
  'Platzi session',
  PhotoOrientation.Square
);
album.addPicture(picture);
console.log('album', album);

// Accessing the public members
console.log('picture.id', picture.id); // get id()
// picture.id = 100; // private, set id(100);
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; //private
console.log('album', album);

// const item = new Item(1, 'Test title');
// console.log('item', item);

// Test the static member
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
