# No DB Review (Puppy Smugglers)

## Front-End Checklist
- reset.css ==> eric meyers 2.0 reset
- package.json
    - main: server/index.js
- setupProxy.js => 4000

### Front-End File-Structure
- src/
    - App.js => class
    - index.js
    - App.css
    - index.css => paste reset here
    - setupProxy.js
    - components/
        - PuppyCard.js
        - PuppyList.js
        - Button.js
        - PuppyForm.js

### Front-End Dependencies
- axios
- http-proxy-middleware
- react-icons

## Back-End Checklist

### Back-End File-Structure
 - server/
    - index.js
    - controller/
        - puppyController.js

### Back-End Dependencies
- express

### API Routes
- get: `/api/puppies`
- getById: `/api/puppy/:id`
- post: `/api/puppy`
- delete: `/api/unsmuggle/:id`
- put: `/api/puppy/:id` {body: name, age, temperment, size}
```js
app.put(`/api/puppy/:id`, (req, res, next) => {
    const {name, age, temperment, size} = req.body
})
```

### Data
```js
const puppy = {
    id: Number,
    age: Number,
    name: String,
    breed: String,
    color: String,
    DateSmuggled: Date,
    temperment: String,
    size: String,
    gender: String
}
```