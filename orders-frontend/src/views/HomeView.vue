<template>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body class="p-3 mb-2 text-white">
     <h3 class="text-center">McDonalds Tubigon</h3>
      <div class="container" >
        <div class="row">
          <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="@/assets/bundle.png" class="card-img-top" alt="mcbundle">
                <div class="card-body text-dark">
                    <h5 class="card-title ">McBundle</h5>
                    <p class="card-text">1 bucket nuggets with 2 regular Mcburgers, 2 Cheesy Mcburgers, 2 Chicken McSandwich, 3 Medium Fries, 4 Sundae and, 4 cups of Drinks </p>
                    <h6>P399.00 + delivery fee</h6>
                    <a href="#" class="btn btn-primary" id="myOrder" onclick="javascript:alert('You successfully added your order! Shop more!')">Add to Cart</a>
                </div>
            </div>
          </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="@/assets/McBurger.png" class="card-img-top" alt="mcbundle">
                    <div class="card-body text-dark">
                    <h5 class="card-title ">Classic McBurger</h5>
                    <p class="card-text">1 Mcburger with Fries. Classic McBurger contains: Tomatoes, Pickles, Lettuce, Cheese and Meat Patty</p>
                    <h6>99.00 + delivery fee</h6>
                    <a href="#" class="btn btn-primary" id="myOrder" onclick="javascript:alert('You successfully added your order! Shop more!')">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;" id="orders">
                    <img src="@/assets/b.png" class="card-img-top" alt="mcbundle">
                    <div class="card-body text-dark">
                        <h5 class="card-title ">Combo Meal</h5>
                        <p class="card-text">1pc Chicken Mcdo with Rice and Regular McBurger with Medium Fries and a Drink</p>
                        <h6>P205.00 + delivery fee</h6>
                        <a href="#" class="btn btn-primary" id="myOrder" onclick="javascript:alert('You successfully added your order! Shop more!')">Add to Cart</a>
                    </div>
                </div>
              </div>
          </div>
        </div>
  </body>
</html>
</template>