const person = {
  name: 'Eduardo',
  email: 'edudardo@mail.com',
  social: {
    facebook: 'Eduardo Garcia',
    twitter: 'EduGar'
  }
}

const person2 = Object.assign({}, person)

person2.name = 'Eduardo Miguel'
person
/* {
  name: 'Eduardo',
  email: 'edudardo@mail.com',
  social: { facebook: 'Eduardo Garcia', twitter: 'EduGar' }
} */

person2
/* {
  name: 'Eduardo Miguel',
  email: 'edudardo@mail.com',
  social: { facebook: 'Eduardo Garcia', twitter: 'EduGar' }
} */

person2.social.facebook = 'Eduardo Miguel Garcia'
person
/* {
  name: 'Eduardo',
  email: 'edudardo@mail.com',
  social: { facebook: 'Eduardo Miguel Garcia', twitter: 'EduGar' }
} */

person2
/* {
  name: 'Eduardo Miguel',
  email: 'edudardo@mail.com',
  social: { facebook: 'Eduardo Miguel Garcia', twitter: 'EduGar' }
} */