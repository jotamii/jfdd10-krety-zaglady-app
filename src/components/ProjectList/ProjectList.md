Obraz okna bez żadnego przykładowego projektu

```js
<ProjectList projects={[]} />
```

Obraz okna z jednym projektem wyświetlanym w liście

```js
<ProjectList
  projects={[
    {
      id: 1,
      userName: "Stefan",
      userSurname: "Kowalski",
      userImage:
        "https://cdn3.iconfinder.com/data/icons/avatar-55/64/Gardener-avatar-occupation-profession-woman-human-512.png",
      fruits: [
        {
          image:
            "https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png",
          alt: "carrot"
        },
        {
          image:
            "https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png",
          alt: "apple"
        },
        {
          image:
            "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png",
          alt: "cherry"
        },
        {
          image:
            "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png",
          alt: "plum"
        },
        {
          image:
            "https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png",
          alt: "tomato"
        }
      ],
      description: "I like gardening and my dream is to grow my own vegetables",
      boardImage:
        "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png"
    }
  ]}
/>
```

Obraz okna z listą wielu projektów

```js
<ProjectList
  projects={
    [
      {
        id: 1,
        userName: "Michael",
        userSurname: "Cranberry",
        userImage:
          "https://cdn3.iconfinder.com/data/icons/avatar-55/64/Businessman-avatar-occupation-profession-man-human-512.png",
        fruits: [
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png",
            alt: "carrot"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png",
            alt: "apple"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png",
            alt: "cherry"
          }
        ],
        description:
          "I wanted to try something new and bought a garden I want to design",
        boardImage:
          "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png"
      }
  ,
      {
        id: 2,
        userName: "Stefan",
        userSurname: "Kowalski",
        userImage:
          "https://cdn3.iconfinder.com/data/icons/avatar-55/64/Gardener-avatar-occupation-profession-woman-human-512.png",
        fruits: [
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png",
            alt: "carrot"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-512.png",
            alt: "apple"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_cerejas-512.png",
            alt: "cherry"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png",
            alt: "plum"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/veggies/512/tomato.png",
            alt: "tomato"
          }
        ],
        description:
          "I want to have the most beautiful and practical garden of all times!",
        boardImage:
          "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png"
      }
   ,
      {
        id: 3,
        userName: "Angelika",
        userSurname: "Nowak",
        userImage:
          "https://cdn3.iconfinder.com/data/icons/avatar-55/64/Singer-avatar-occupation-profession-woman-human-512.png",
        fruits: [
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/spring-23/32/carrot-vegetable-spring-food-512.png",
            alt: "carrot"
          },
          {
            image:
              "https://cdn1.iconfinder.com/data/icons/fresh-fruit-2/128/pear-512.png",
            alt: "pear"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Black_Berries-512.png",
            alt: "blueberries"
          },
          {
            image:
              "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_ameixa-512.png",
            alt: "plum"
          },
          {
            image:
              "https://cdn4.iconfinder.com/data/icons/breakfast-14/48/broccoli-512.png",
            alt: "broccoli"
          }
        ],
        description:
          "I like gardening and my dream is to grow my own vegetables",
        boardImage:
          "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678074-map-512.png"
      }
    ]
  }
/>
```