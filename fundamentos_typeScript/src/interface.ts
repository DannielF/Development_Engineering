// function to show a picture
/**
 * @interface -->  interfaces fill the role of naming these types, and are a  powerful way of defining contracts within your code as well as contracts with code outside of your project.
 *
 */
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(`[title: ${picture.title}, 
                 date: ${picture.date}, 
                 orientation: ${picture.orientation}]`);
}

let myPic = {
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);
showPicture({
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait,
  // extra: 'test'// Error
});

// interface with optional properties

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: 'Default', date: '2020-03' };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' });
console.log('picture', picture);

// Interface : User
interface User {
  readonly id: number; // read-only
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: 'jhon', isPro: true };
console.log('user', user);
user.username = 'Mark';
// user.id = 20; //Error!
console.log('user', user);
