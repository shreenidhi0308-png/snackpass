import React, { useEffect, useState } from "react";
import pizzaImage from "./assets/pizza.webp";
import cakeImage from "./assets/cake.webp";
import masalaDosaImage from "./assets/masaladosa.webp";
import paneerNoodlesImage from "./assets/paneernoodles.avif";
import vegMaggiImage from "./assets/foods/noodles/vegmaggi.jpg";
import cheeseMaggiImage from "./assets/foods/noodles/cheesemaggi.jpg";
import masalaMaggiImage from "./assets/foods/noodles/masalamaggi.jpg";
import burgerImage from "./assets/burger.jpeg";
import friesImage from "./assets/frenchfries.jpeg";
import vegThaliImage from "./assets/vegthali.jpeg";
import vegFriedRiceImage from "./assets/foods/rice/friedrice.jpg";
import schezwanFriedRiceImage from "./assets/foods/rice/shezwanfried.jpg";
import paneerFriedRiceImage from "./assets/foods/rice/paneerfried.jpg";
import gobiFriedRiceImage from "./assets/foods/rice/gobifried.jpg";
import cornFriedRiceImage from "./assets/foods/rice/cornfried.jpg";
import paneerRiceBowlImage from "./assets/foods/rice/paneerricebowl.jpg";
import vegPulaoImage from "./assets/foods/rice/vegpulao.jpg";
import southIndianMealsImage from "./assets/foods/rice/thaali.jpeg";
import curdRiceImage from "./assets/foods/rice/curd.jpeg";
import lemonRiceImage from "./assets/foods/rice/lemon.jpeg";
import sambarRiceImage from "./assets/foods/rice/sambar.jpeg";
import tomatoRiceImage from "./assets/foods/rice/tomato.jpeg";
import vegThaaliRiceImage from "./assets/foods/rice/thaali.jpeg";
import vegBiryaniImage from "./assets/foods/rice/vegbiryani.jpeg";
import paneerBiryaniImage from "./assets/foods/rice/paneerbiryani.jpg";
import mushroomBiryaniImage from "./assets/foods/rice/mushroombiryani.jpg";
import hyderabadiVegBiryaniImage from "./assets/foods/rice/hyderabadivegbiryani.jpg";
import alooBondaImage from "./assets/foods/snacks/aloobonda.jpg";
import alooSamosaImage from "./assets/foods/snacks/aloosamosa.jpg";
import babyCorn65Image from "./assets/foods/snacks/babycorn65.jpg";
import cheeseBurgerImage from "./assets/foods/snacks/cheese.jpeg";
import cheeseRollImage from "./assets/foods/snacks/cheeseroll.jpg";
import cornCheeseImage from "./assets/foods/snacks/corncheese.jpeg";
import frenchFriesImage from "./assets/foods/snacks/french.jpeg";
import gobi65Image from "./assets/foods/snacks/gobi65.jpg";
import gobiManchurianImage from "./assets/foods/snacks/gobimanchurian.jpg";
import masalaFriesImage from "./assets/foods/snacks/masala.jpeg";
import masalaVadaImage from "./assets/foods/snacks/masalavada.jpg";
import mushroom65Image from "./assets/foods/snacks/mushroom65.jpg";
import mysoreBondaImage from "./assets/foods/snacks/mysorebonda.jpg";
import onionPakodaImage from "./assets/foods/snacks/onionpakoda.jpg";
import paneerBurgerImage from "./assets/foods/snacks/paneer.jpeg";
import paneerManchurianImage from "./assets/foods/snacks/paneermanchurian.jpg";
import paneerSamosaImage from "./assets/foods/snacks/paneersamosa.jpg";
import paneerTikkaImage from "./assets/foods/snacks/paneertikka.jpg";
import periPeriFriesImage from "./assets/foods/snacks/periperi.jpeg";
import periPeriPaneerWrapImage from "./assets/foods/snacks/periperipaneerwrap.jpg";
import tandooriPaneerWrapImage from "./assets/foods/snacks/tandooripaneerwrap.jpg";
import vegBurgerImage from "./assets/foods/snacks/veg.jpeg";
import vegCutletImage from "./assets/foods/snacks/vegcutlet.jpg";
import vegRollImage from "./assets/foods/snacks/vegroll.jpg";
import samosaChatImage from "./assets/foods/chat/samosachat.jpg";
import paniPuriImage from "./assets/foods/chat/panipuri.jpg";
import bhelPuriImage from "./assets/foods/chat/bhelpuri.jpg";
import dahiPuriImage from "./assets/foods/chat/dahipuri.jpg";
import alooTikkiChatImage from "./assets/foods/chat/alootikkichat.jpg";
import curdVadaImage from "./assets/foods/chat/curdvada.jpg";
import papdiChatImage from "./assets/foods/chat/papdichat.jpg";
import cornChatImage from "./assets/foods/chat/cornchat.jpg";
import basketChatImage from "./assets/foods/chat/basketchat.jpg";
import alooGobiMasalaImage from "./assets/foods/lunch/aloogobimasala.jpg";
import butterNaanImage from "./assets/foods/lunch/butternaan.jpg";
import chilliParottaImage from "./assets/foods/lunch/chilliparotta.jpg";
import jeeraRiceImage from "./assets/foods/lunch/jeerarice.jpg";
import kadaiMushroomImage from "./assets/foods/lunch/kadaimushroom.jpg";
import mushroomChettinadImage from "./assets/foods/lunch/mushroomchettinad.jpg";
import mushroomMasalaImage from "./assets/foods/lunch/mushroommasala.jpg";
import palakPaneerImage from "./assets/foods/lunch/palakpaneer.jpg";
import paneerButterMasalaImage from "./assets/foods/lunch/paneerbuttermasala.jpg";
import paneerKothuParottaImage from "./assets/foods/lunch/paneerkothuparotta.jpg";
import paneerTikkaMasalaImage from "./assets/foods/lunch/paneertikkamasala.jpg";
import plainNaanImage from "./assets/foods/lunch/plainnaan.jpg";
import soyaPepperGravyImage from "./assets/foods/lunch/soyapeppergravy.jpg";
import vegKothuParottaImage from "./assets/foods/lunch/vegkothuparotta.jpg";
import cornSaladImage from "./assets/foods/salads/cornsalad.jpg";
import cucumberSaladImage from "./assets/foods/salads/cucumbersalad.jpg";
import freshGardenSaladImage from "./assets/foods/salads/freshgardensalad.jpg";
import fruitSaladImage from "./assets/foods/salads/fruitsalad.jpg";
import greekyogurtBowlImage from "./assets/foods/salads/greekyoghurt.jpg";
import sproutsSaladImage from "./assets/foods/salads/sproutssalad.jpg";
import badamMilkImage from "./assets/foods/drinks/badammilk.jpg";
import coldCoffeeImage from "./assets/foods/drinks/coldcoffee.jpg";
import filterCoffeeImage from "./assets/foods/drinks/filtercoffee.jpg";
import freshLimeJuiceImage from "./assets/foods/drinks/freshlimejuice.jpg";
import mangoLassiImage from "./assets/foods/drinks/mangolassi.jpg";
import mosambiJuiceImage from "./assets/foods/drinks/mosambijuice.jpg";
import orangeJuiceImage from "./assets/foods/drinks/orangejuice.jpg";
import pineappleJuiceImage from "./assets/foods/drinks/pineapplejuice.jpg";
import pomegranateJuiceImage from "./assets/foods/drinks/pomojuice.jpg";
import roseMilkImage from "./assets/foods/drinks/rosemilk.jpg";
import watermelonJuiceImage from "./assets/foods/drinks/watermelonjuice.jpg";
import butterscotchMilkshakeImage from "./assets/foods/milkshakes/butterscotch.jpg";
import mangoMilkshakeImage from "./assets/foods/milkshakes/mango.jpg";
import oreoMilkshakeImage from "./assets/foods/milkshakes/oreo.jpg";
import strawberryMilkshakeImage from "./assets/foods/milkshakes/strawberry.jpg";
import chocolateMilkshakeImage from "./assets/foods/milkshakes/chocolatemilkshake.jpg";
import vanillaMilkshakeImage from "./assets/foods/milkshakes/vanilla.jpg";
import chocolateMousseImage from "./assets/foods/desserts/chocolatemousse.jpg";
import gulabJamunImage from "./assets/foods/desserts/gulabjamun.jpg";
import iceCreamImage from "./assets/foods/desserts/icecream.jpg";
import jalebiImage from "./assets/foods/desserts/jalebi.jpg";
import kesariImage from "./assets/foods/desserts/kesari.jpg";
import kulfiImage from "./assets/foods/desserts/kulfi.jpg";
import payasamImage from "./assets/foods/desserts/payasam.jpg";
import rasmalaiImage from "./assets/foods/desserts/rasmalai.jpg";
import blackForestCakeImage from "./assets/foods/cakes/blackforest.jpg";
import butterscotchCakeImage from "./assets/foods/cakes/butterscotch.jpg";
import chocolateCakeImage from "./assets/foods/cakes/chocolatecake.jpg";
import chocolateTruffleCakeImage from "./assets/foods/cakes/chocotruffle.jpg";
import pineappleCakeImage from "./assets/foods/cakes/pineapple.jpg";
import redVelvetCakeImage from "./assets/foods/cakes/redvelvet.jpg";
import strawberryCakeImage from "./assets/foods/cakes/strawberry.jpg";
import vanillaCakeImage from "./assets/foods/cakes/vanilla.jpg";
import whiteForestCakeImage from "./assets/foods/cakes/whiteforest.jpg";
// ================= SET 1 IMAGE LOADER =================

const set1Images = import.meta.glob(
  "./assets/foods/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const set1Folders = {
  Breakfast: "breakfast",
  Sandwich: "sandwich",
  Pizza: "pizza",
  Noodles: "noodles",
  Rice: "rice",
  Biryani: "rice",
  Snacks: "snacks",
  Chat: "chat",
  Lunch: "lunch",
  Salads: "salads",
  Drinks: "drinks",
  Milkshakes: "milkshakes",
  Desserts: "desserts",
  Cakes: "cakes",
};

const set1Aliases = {
  // Breakfast
  "Poori Masala": "poori",
  "Ven Pongal": "pongal",
  "Rava Upma": "rava",
  "Vegetable Upma": "vegetablerava",
  "Medhu Vada": "medhuvada",
  "Kuzhi Paniyaram": "kuzhipaniyaram",
  "Plain Dosa": "plain.webp",
  "Onion Dosa": "onion.webp",
  "Ghee Dosa": "ghee.webp",
  "Podi Dosa": "podi.webp",
  "Paneer Dosa": "paneer.webp",
  "Cheese Dosa": "cheese.webp",
  "Mysore Masala Dosa": "mysoremasala.jpg",
  "Paneer Cheese Dosa": "paneercheese.jpg",
  "Garlic Dosa": "garlic.jpg",
  "Paneer Podi Dosa": "paneerpodi.webp",
  "Spring Dosa": "spring.jpg",
  "Rava Dosa": "rava.webp",
  "Onion Rava Dosa": "onionrava.webp",
  "Podi Masala Dosa": "podimasala.jpg",
  "Paneer Masala Dosa": "paneermasala.webp",
  "Corn Dosa": "corn.jpg",
  "Tomato Dosa": "tomato.jpg",
   "Plain Idli": "plainidli.webp",
  "Mini Idli": "mini.webp",
  "Podi Idli": "podiidli.jpg",
  "Ghee Idli": "ghee.jpg",
  "Kanchipuram Idli": "kanchipuram.jpg",
  "Idli Fry": "idlyfry.jpg",
  "Butter Toast":"buttertoast.jpg",
  "Cheese Toast":"cheesetoast.jpg",
  "Garlic Toast":"garlictoast.jpg",
  "Jam Toast":"jamtoast.jpg",

  // Sandwich
  "Veg Sandwich": "veg",
  "Cheese Sandwich": "cheese",
  "Paneer Sandwich": "paneer",
  "Corn Cheese Sandwich": "corncheese",

  // Pizza
  "Margherita Pizza": "mergherita",
  "Paneer Pizza": "paneer",
  "Peri Peri Pizza": "periperi",
  "Cheese Corn Pizza": "cheesecorn",

  // Noodles
  "Veg Noodles": "veg",
  "Gobi Noodles": "gobi",
  "Paneer Noodles": "paneer",
  "Schezwan Noodles": "shezwan",
  "Chilli Garlic Noodles": "chilligarlic",
  "Hakka Noodles": "hakka",
  "Veg Maggi": "vegmaggi.jpg",
  "Cheese Maggi": "cheesemaggi.jpg",
  "Masala Maggi": "masalamaggi.jpg",

  // Rice
"Veg Fried Rice": "friedrice.jpg",
"Schezwan Fried Rice": "shezwanfried.jpg",
"Paneer Fried Rice": "paneerfried.jpg",
"Gobi Fried Rice": "gobifried.jpg",
"Corn Fried Rice": "cornfried.jpg",

"Paneer Rice Bowl": "paneerricebowl.jpg",

"Veg Pulao": "vegpulao.jpg",

"South Indian Meals": "thaali.jpeg",
"Curd Rice": "curd.jpeg",
"Lemon Rice": "lemon.jpeg",
"Sambar Rice": "sambar.jpeg",
"Tomato Rice": "tomato.jpeg",
"Veg Thaali": "thaali.jpeg",

  // Snacks
  "Aloo Bonda": "aloobonda.jpg",
  "Aloo Samosa": "aloosamosa.jpg",
  "Baby Corn 65": "babycorn65.jpg",
  "Cheese Burger": "cheese.jpeg",
  "Cheese Roll": "cheeseroll.jpg",
  "Corn Cheese": "corncheese.jpeg",
  "French Fries": "french.jpeg",
  "Gobi 65": "gobi65.jpg",
  "Gobi Manchurian": "gobimanchurian.jpg",
  "Masala Fries": "masala.jpeg",
  "Masala Vada": "masalavada.jpg",
  "Mushroom 65": "mushroom65.jpg",
  "Mysore Bonda": "mysorebonda.jpg",
  "Onion Pakoda": "onionpakoda.jpg",
  "Paneer Burger": "paneer.jpeg",
  "Paneer Manchurian": "paneermanchurian.jpg",
  "Paneer Samosa": "paneersamosa.jpg",
  "Paneer Tikka": "paneertikka.jpg",
  "Peri Peri Fries": "periperi.jpeg",
  "Peri Peri Paneer Wrap": "periperipaneerwrap.jpg",
  "Tandoori Paneer Wrap": "tandooripaneerwrap.jpg",
  "Veg Burger": "veg.jpeg",
  "Veg Cutlet": "vegcutlet.jpg",
  "Veg Roll": "vegroll.jpg",

  // Chat
"Samosa Chat": "samosachat.jpg",
"Pani Puri": "panipuri.jpg",
"Bhel Puri": "bhelpuri.jpg",
"Dahi Puri": "dahipuri.jpg",
"Aloo Tikki Chat": "alootikkichat.jpg",
"Curd Vada": "curdvada.jpg",
"Papdi Chat": "papdichat.jpg",
"Corn Chat": "cornchat.jpg",
"Basket Chat": "basketchat.jpg",

// Lunch
"Aloo Gobi Masala": "aloogobimasala.jpg",
"Butter Naan": "butternaan.jpg",
"Chilli Parotta": "chilliparotta.jpg",
"Jeera Rice": "jeerarice.jpg",
"Kadai Mushroom": "kadaimushroom.jpg",
"Mushroom Chettinad": "mushroomchettinad.jpg",
"Mushroom Masala": "mushroommasala.jpg",
"Palak Paneer": "palakpaneer.jpg",
"Paneer Butter Masala": "paneerbuttermasala.jpg",
"Paneer Kothu Parotta": "paneerkothuparotta.jpg",
"Paneer Tikka Masala": "paneertikkamasala.jpg",
"Plain Naan": "plainnaan.jpg",
"Soya Pepper Gravy": "soyapeppergravy.jpg",
"Veg Kothu Parotta": "vegkothuparotta.jpg",

// Salads
"Corn Salad": "cornsalad.jpg",
"Cucumber Salad": "cucumbersalad.jpg",
"Fresh Garden Salad": "freshgardensalad.jpg",
"Fruit Salad": "fruitsalad.jpg",
"Greek Yogurt Bowl": "greekyoghurt.jpg",
"Sprouts Salad": "sproutssalad.jpg",

// Drinks
"Mango Lassi": "mangolassi.jpg",
"Badam Milk": "badammilk.jpg",
"Filter Coffee": "filtercoffee.jpg",
"Cold Coffee": "coldcoffee.jpg",
"Rose Milk": "rosemilk.jpg",
"Fresh Lime Juice": "freshlimejuice.jpg",
"Watermelon Juice": "watermelonjuice.jpg",
"Pineapple Juice": "pineapplejuice.jpg",
"Orange Juice": "orangejuice.jpg",
"Mosambi Juice": "mosambijuice.jpg",
"Pomegranate Juice": "pomojuice.jpg",

// Milkshakes
"Chocolate Milkshake": "chocolatemilkshake.jpg",
"Vanilla Milkshake": "vanilla.jpg",
"Strawberry Milkshake": "strawberry.jpg",
"Oreo Milkshake": "oreo.jpg",
"Mango Milkshake": "mango.jpg",
"Butterscotch Milkshake": "butterscotch.jpg",

// Desserts
"Gulab Jamun": "gulabjamun.jpg",
"Rasmalai": "rasmalai.jpg",
"Jalebi": "jalebi.jpg",
"Kesari": "kesari.jpg",
"Payasam": "payasam.jpg",
"Kulfi": "kulfi.jpg",
"Chocolate Mousse": "chocolatemousse.jpg",
"Ice Cream": "icecream.jpg",

};

function cleanImageName(name) {
  return name
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp|avif)$/i, "")
    .replace(/[^a-z0-9]/g, "");
}

function getSet1Image(name, category) {

  const folder = set1Folders[category];

  if (!folder) return null;

  const wanted = cleanImageName(
    set1Aliases[name] || name
  );

  for (const [path, image] of Object.entries(set1Images)) {

    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const imageFolder = parts[parts.length - 2];

    if (
      imageFolder.toLowerCase() === folder.toLowerCase() &&
      cleanImageName(filename) === wanted
    ) {
      return image;
    }
  }

  return null;
}

const dosaImages = import.meta.glob(
  "./assets/foods/dosa/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const dosaImageMap = {
  "Plain Dosa": "plain.webp",
  "Onion Dosa": "onion.webp",
  "Ghee Dosa": "ghee.webp",
  "Podi Dosa": "podi.webp",
  "Paneer Dosa": "paneer.webp",
  "Cheese Dosa": "cheese.webp",
  "Mysore Masala Dosa": "mysoremasala.jpg",
  "Paneer Cheese Dosa": "paneercheese.jpg",
  "Garlic Dosa": "garlic.jpg",
  "Paneer Podi Dosa": "paneerpodi.webp",
  "Spring Dosa": "spring.jpg",
  "Rava Dosa": "rava.webp",
  "Onion Rava Dosa": "onionrava.webp",
  "Podi Masala Dosa": "podimasala.jpg",
  "Paneer Masala Dosa": "paneermasala.webp",
  "Corn Dosa": "corn.jpg",
  "Tomato Dosa": "tomato.jpg",
  "Plain Idli": "plain.webp",
  "Mini Idli": "mini.webp",
  "Podi Idli": "podiidli.jpg",
  "Ghee Idli": "ghee.jpg",
  "Kanchipuram Idli": "kanchipuram.jpg",
  "Idli Fry": "idlyfry.jpg",
};

function getDosaImage(name) {
  // Masala Dosa already has its own generated/imported image
  if (name === "Masala Dosa") {
    return masalaDosaImage;
  }

  const filename = dosaImageMap[name];

  if (!filename) return null;

  return dosaImages[`./assets/foods/dosa/${filename}`] || null;
}
const idliImages = import.meta.glob(
  "./assets/foods/idli/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const idliImageMap = {
  "Plain Idli": "plainidli.webp",
  "Mini Idli": "mini.webp",
  "Podi Idli": "podiidli.jpg",
  "Ghee Idli": "ghee.jpg",
  "Kanchipuram Idli": "kanchipuram.jpg",
  "Idli Fry": "idlyfry.jpg",
};

function getIdliImage(name) {
  const filename = idliImageMap[name];

  if (!filename) return null;

  const key = Object.keys(idliImages).find(
    (path) =>
      path.toLowerCase() ===
      `./assets/foods/idli/${filename}`.toLowerCase()
  );

  return key ? idliImages[key] : null;
}
const USER_KEY = "snackpass_user";
function getRiceImage(name) {
  const aliases = {
    "Veg Fried Rice": "friedrice",
    "Schezwan Fried Rice": "shezwanfried",
    "Paneer Fried Rice": "paneerfried",
    "Gobi Fried Rice": "gobifried",
    "Corn Fried Rice": "cornfried",

    "Paneer Rice Bowl": "paneerricebowl",
    "Veg Pulao": "vegpulao",

    "South Indian Meals": "thaali",
    "Curd Rice": "curd",
    "Lemon Rice": "lemon",
    "Sambar Rice": "sambar",
    "Tomato Rice": "tomato",
    "Veg Thaali": "thaali",

    "Veg Biryani": "vegbiryani",
    "Paneer Biryani": "paneerbiryani",
    "Mushroom Biryani": "mushroombiryani",
    "Hyderabadi Veg Biryani": "hyderabadivegbiryani",
  };

  const wanted = aliases[name];

  if (!wanted) return null;

  for (const [path, image] of Object.entries(set1Images)) {
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const folder = parts[parts.length - 2];

    if (
      folder.toLowerCase() === "rice" &&
      cleanImageName(filename) === wanted
    ) {
      return image;
    }
  }

  return null;
}

const make = (items, cat, price, taste = "Savory", emoji = "🍽️") =>
 items
  .split("|")
  .map(name => name.trim())
  .filter(Boolean)
  .map((name, i) => ({    id: `${cat}-${i}-${name}`,
    name,
    cat,
    price: price + (i % 4) * 5,
    rating: +(4.4 + (i % 6) * 0.1).toFixed(1),
    time: 4 + (i % 7),
    type: i % 7 === 0 ? "Vegan" : "Veg",
    taste,
    emoji,
    image:
  cat === "Dosa"
    ? getDosaImage(name)
    : cat === "Idli"
      ? getIdliImage(name)
      : cat === "Rice" || cat === "Biryani"
        ? getRiceImage(name)
        : getSet1Image(name, cat),
  }));

const foods = [
  ...make(
    "Plain Dosa|Masala Dosa|Onion Dosa|Ghee Dosa|Podi Dosa|Paneer Dosa|Cheese Dosa|Mysore Masala Dosa|Paneer Cheese Dosa|Garlic Dosa|Paneer Podi Dosa|Spring Dosa",
    "Dosa", 35, "Savory", "🥞"
  ),

  ...make(
    "Rava Dosa|Onion Rava Dosa|Podi Masala Dosa|Paneer Masala Dosa|Corn Dosa|Tomato Dosa|",
    "Dosa", 40, "Savory", "🥞"
  ),

  ...make(
    "Plain Idli|Mini Idli|Podi Idli|Ghee Idli|Kanchipuram Idli|Idli Fry",
    "Idli", 30, "Savory", "⚪"
  ),

  ...make(
    "Poori Masala|Ven Pongal|Rava Upma|Vegetable Upma|medhu Vada|Kuzhi Paniyaram",
    "Breakfast", 30, "Savory", "🍛"
  ),
  ...make(
  "Plain Dosa|Masala Dosa|Onion Dosa|Ghee Dosa|Podi Dosa|Paneer Dosa|Cheese Dosa|Mysore Masala Dosa|Paneer Cheese Dosa|Garlic Dosa|Paneer Podi Dosa|Spring Dosa|Rava Dosa|Onion Rava Dosa|Podi Masala Dosa|Paneer Masala Dosa|Corn Dosa|Tomato Dosa|Plain Idli|Mini Idli|Podi Idli|Ghee Idli|Kanchipuram Idli|Idli Fry|Poori Masala|Ven Pongal|Rava Upma|Vegetable Upma|medhu Vada|Kuzhi Paniyaram",
  "Breakfast",
  30,
  "Savory",
  "🍛"
  ),
  ...make(
    "Veg Sandwich|Cheese Sandwich|Paneer Sandwich|Corn Cheese Sandwich",
    "Sandwich", 45, "Savory", "🥪"
  ),

  ...make(
    "Margherita Pizza|Paneer Pizza|Peri Peri Pizza|Cheese Corn Pizza",
    "Pizza", 90, "Savory", "🍕"
  ),

  ...make(
    "Veg Noodles|Paneer Noodles|Schezwan Noodles|Chilli Garlic Noodles|Hakka Noodles",
    "Noodles", 60, "Spicy", "🍜"
  ),

  ...make(
    "Veg Maggi|Cheese Maggi|Masala Maggi",
    "Noodles", 40, "Spicy", "🍜"
  ),

  ...make(
    "Veg Fried Rice|Schezwan Fried Rice|Paneer Fried Rice|Gobi Fried Rice|Corn Fried Rice",
    "Rice", 65, "Savory", "🍚"
  ),

  ...make(
    "Paneer Rice Bowl",
    "Rice", 75, "Spicy", "🍚"
  ),

  ...make(
    "Veg Pulao",
    "Rice", 65, "Savory", "🍚"
  ),
  ...make(
    "South Indian Meals|Curd Rice|Lemon Rice|Sambar Rice|Tomato Rice",
    "Rice", 45, "Savory", "🍱"
  ),

  ...make(
    "Veg Thaali",
    "Rice", 100, "Savory", "🍱"
  ),

  ...make(
    "Veg Biryani|Paneer Biryani|Mushroom Biryani|Hyderabadi Veg Biryani",
    "Rice", 75, "Spicy", "🍛"
  ),

  ...make(
    "Veg Biryani|Paneer Biryani|Mushroom Biryani|Hyderabadi Veg Biryani",
    "Biryani", 75, "Spicy", "🍛"
  ),

  ...make(
    "Veg Roll|Cheese Roll|Peri Peri Paneer Wrap|Tandoori Paneer Wrap|Veg Burger|Paneer Burger|Cheese Burger",
    "Snacks", 50, "Spicy", "🌯"
  ),

  ...make(
    "French Fries|Peri Peri Fries|Masala Fries",
    "Snacks", 40, "Savory", "🍟"
  ),

  ...make(
    "Paneer Tikka|Gobi 65|Baby Corn 65|Gobi Manchurian|Paneer Manchurian|Mushroom 65",
    "Snacks", 55, "Spicy", "🥘"
  ),

  ...make(
    "Aloo Samosa|Paneer Samosa|Onion Pakoda|Masala Vada|Mysore Bonda|Aloo Bonda|Veg Cutlet",
    "Snacks", 30, "Savory", "🍽️"
  ),

  ...make(
    "Butter Naan|Plain Naan|Paneer Butter Masala|Palak Paneer|Jeera Rice",
    "Lunch", 35, "Spicy", "🫓"
  ),

  ...make(
    "Veg Kothu Parotta|Paneer Kothu Parotta|Chilli Parotta",
    "Lunch", 60, "Spicy", "🫓"
  ),

  ...make(
    "Paneer Tikka Masala|Mushroom Masala|Aloo Gobi Masala|Kadai Mushroom",
    "Lunch", 75, "Spicy", "🍛"
  ),

  ...make(
    "Soya Pepper Gravy|Mushroom Chettinad",
    "Lunch", 70, "Spicy", "🍄"
  ),

  ...make(
    "Samosa Chat|Pani Puri|Bhel Puri|Dahi Puri|Aloo Tikki Chat|Curd Vada|Papdi Chat|Corn Chat|Basket Chat",
    "Chat", 30, "Spicy", "🥗"
  ),

  ...make(
    "Fresh Garden Salad|Corn Salad|Sprouts Salad|Fruit Salad|Greek Yogurt Bowl|Cucumber Salad",
    "Salads", 40, "Healthy", "🥗"
  ),

  ...make(
    "Chocolate Milkshake|Vanilla Milkshake|Strawberry Milkshake|Oreo Milkshake|Mango Milkshake|Butterscotch Milkshake",
    "Milkshakes", 50, "Sweet", "🥤"
  ),

  ...make(
    "Mango Lassi|Badam Milk|Filter Coffee|Cold Coffee|Rose Milk|Fresh Lime Juice|Watermelon Juice|Pineapple Juice|Orange Juice|Mosambi Juice|Pomegranate Juice",
    "Drinks", 25, "Sweet", "🥤"
  ),

  ...make(
    "Butter Toast|Cheese Toast|Garlic Toast|Jam Toast",
    "Breakfast", 35, "Savory", "🍞"
  ),

  ...make(
    "Gulab Jamun|Rasmalai|Jalebi|Kesari|Payasam|Kulfi|Chocolate Mousse|Ice Cream",
    "Desserts", 40, "Sweet", "🍰"
  ),

  ...make(
    "Chocolate Cake|Black Forest Cake|White Forest Cake|Red Velvet Cake|Vanilla Cake|Pineapple Cake|Butterscotch Cake|Chocolate Truffle Cake|Strawberry Cake",
    "Cakes", 60, "Sweet", "🍰"
  )
];

console.log("SnackPass menu:", foods.length);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem(USER_KEY) || "null")
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;

  if (!user) {
    return (
      <Auth
        onLogin={(name, email) => {
          const newUser = { name, email };
          localStorage.setItem(USER_KEY, JSON.stringify(newUser));
          setUser(newUser);
        }}
      />
    );
  }

  return (
    <Layout
      user={user}
      onLogout={() => {
        localStorage.removeItem(USER_KEY);
        setUser(null);
      }}
    />
  );
}

function Splash() {
  return (
    <main className="splash">
      <div className="splash-content">
        <div className="crown">👑</div>
        <h1>SnackPass</h1>
        <p>Rule Your Cravings.</p>
      </div>
    </main>
  );
}

function Auth({ onLogin }) {
  const [signup, setSignup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const update = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();

    if (!/^\d{9}@sastra\.ac\.in$/.test(form.email)) {
      alert(
        "Wrong mail ID. Use your 9-digit register number@sastra.ac.in"
      );
      return;
    }

    if (signup && form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    onLogin(
      signup ? form.name : form.email.split("@")[0],
      form.email
    );
  };

  return (
    <main className="auth">
      <div className="auth-card">
        <div className="auth-brand">
          <span>👑</span>
          <b>SnackPass</b>
        </div>

        <h1>
          {signup
            ? "Join SnackPass 👑"
            : "Welcome to SnackPass 👋"}
        </h1>

        <p>
          {signup
            ? "Create your account and rule your cravings."
            : "Your cravings are waiting."}
        </p>

        <form onSubmit={submit}>
          {signup && (
            <>
              <label>Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Enter your full name"
                required
              />
            </>
          )}

          <label>College Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            placeholder="129003467@sastra.ac.in"
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={update}
            placeholder="Enter your password"
            required
          />

          {signup && (
            <>
              <label>Confirm Password</label>
              <input
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={update}
                placeholder="Confirm your password"
                required
              />
            </>
          )}

          <button className="auth-btn">
            {signup ? "CREATE ACCOUNT" : "SIGN IN"}
          </button>
        </form>

        {!signup && (
          <button className="forgot">
            Forgot Password?
          </button>
        )}

        <div className="auth-switch">
          {signup
            ? "Already have an account?"
            : "Don't have an account?"}

          <button onClick={() => setSignup(!signup)}>
            {signup ? " Sign In" : " Sign Up"}
          </button>
        </div>
      </div>
    </main>
  );
}

function Layout({ user, onLogout }) {
  const [page, setPage] = useState("Home");
  const [selectedFood, setSelectedFood] = useState(null);
const [cart, setCart] = useState([]);
const [favorites, setFavorites] = useState([]);
const [points, setPoints] = useState(0);
const [order, setOrder] = useState(null);
const [showMobileMenu, setShowMobileMenu] = useState(false);
  const nav = [
    ["Home", "⌂"],
    ["Explore", "⌕"],
    ["Boss", "♛"],
    ["Orders", "📦"],
    ["Token", "🎟️"],
    ["Passport", "🛂"],
    ["Achievements", "🏆"],
    ["Favorites", "♥"],
    ["Profile", "♙"]
  ];

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="side-brand">
          <span>👑</span>
          <b>SnackPass</b>
        </div>

        <nav>
          {nav.map(([name, icon]) => (
            <button
              key={name}
              className={
                page === name ? "nav-active" : ""
              }
              onClick={() => setPage(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </nav>

        <button className="logout" onClick={onLogout}>
          ⇥ Logout
        </button>
      </aside>

      <main className="main-content">
  <header className="topbar">
    <div className="mobile-brand">
      <span>👑</span>
      <b>SnackPass</b>
    </div>

    <div className="top-actions">
  <button
    className="cart-top"
    onClick={() => setPage("Cart")}
  >
    🛒
    {cart.length > 0 && <span>{cart.length}</span>}
  </button>

  <button
  className="notification"
  onClick={() => setPage("Notifications")}
>
  🔔<i />
</button>
</div>
  </header>

  {page === "Home" && (
    <HomePage
  user={user}
  onFoodClick={setSelectedFood}
  foods={foods}
  favorites={favorites}
  setFavorites={setFavorites}
/>
  )}

  {page === "Explore" && (
  <Explore
    onFoodClick={setSelectedFood}
    favorites={favorites}
    setFavorites={setFavorites}
  />
)}

{page === "Cart" && (
  <Cart
    cart={cart}
    setCart={setCart}
    onCheckout={() => setPage("Checkout")}
  />
)}
{page === "Checkout" && (
  <Checkout
    cart={cart}
    setCart={setCart}
    setPage={setPage}
    setOrder={setOrder}
  />
)}

{page === "Token" && (
  <Token
    order={order}
    setPage={setPage}
    setOrder={setOrder}
  />
)}
{page === "Orders" && (
  <OrdersPage order={order} setPage={setPage} />
)}

{page === "Profile" && (
  <ProfilePage user={user} onLogout={onLogout} />
)}

{page === "Favorites" && (
  <FavoritesPage
    favorites={favorites}
    setFavorites={setFavorites}
    setPage={setPage}
    onFoodClick={setSelectedFood}
  />
)}
{page === "Passport" && (
  <PassportPage exploredCount={order ? 1 : 0} />
)}

{page === "Achievements" && (
  <AchievementsPage order={order} />
)}

{page === "Boss" && (
  <BossPage
    setPage={setPage}
    order={order}
  />
)}

{page === "Notifications" && (
  <NotificationsPage order={order} />
)}

  {selectedFood && (
    <FoodDetails
      food={selectedFood}
      onClose={() => setSelectedFood(null)}
      onAdd={item => {
        setCart([...cart, item]);
        setSelectedFood(null);
      }}
    />
  )}
</main>

      <nav className="mobile-nav">
        <MobileItem
          icon="⌂"
          text="Home"
          active={page === "Home"}
          onClick={() => setPage("Home")}
        />

        <MobileItem
          icon="⌕"
          text="Explore"
          active={page === "Explore"}
          onClick={() => setPage("Explore")}
        />

        <button
          className="boss-button"
          onClick={() => setPage("Boss")}
        >
          👑
        </button>

        <MobileItem
          icon="🛒"
          text="Cart"
          active={page === "Cart"}
          onClick={() => setPage("Cart")}
        />

        <MobileItem
  icon="♙"
  text="Me"
  active={showMobileMenu}
  onClick={() => setShowMobileMenu(!showMobileMenu)}
/>
      </nav>
      {showMobileMenu && (
  <div className="mobile-menu">

    <button onClick={() => {
      setPage("Profile");
      setShowMobileMenu(false);
    }}>
      ♙ Profile
    </button>

    <button onClick={() => {
      setPage("Orders");
      setShowMobileMenu(false);
    }}>
      📦 Orders
    </button>

    <button onClick={() => {
      setPage("Token");
      setShowMobileMenu(false);
    }}>
      🎟️ Token
    </button>

    <button onClick={() => {
      setPage("Passport");
      setShowMobileMenu(false);
    }}>
      🛂 Passport
    </button>

    <button onClick={() => {
      setPage("Achievements");
      setShowMobileMenu(false);
    }}>
      🏆 Achievements
    </button>

    <button onClick={() => {
      setPage("Favorites");
      setShowMobileMenu(false);
    }}>
      ♥ Favorites
    </button>

    <button
      className="mobile-menu-logout"
      onClick={onLogout}
    >
      ⇥ Logout
    </button>

  </div>
)}
    </div>
  );
}

function HomePage({
  user,
  onFoodClick,
  favorites,
  setFavorites,
  foods,
  setSelectedFood
}) {
  const moods = [
    ["🔥", "Spicy"],
    ["💰", "Cheap"],
    ["🥗", "Healthy"],
    ["🍫", "Sweet"],
    ["⚡", "Quick"]
  ];

  const trending = [
  foods.find(x => x.name === "Margherita Pizza"),
  foods.find(x => x.name === "Chocolate Cake"),
  foods.find(x => x.name === "Chocolate Milkshake"),
  foods.find(x => x.name === "Masala Dosa"),
  foods.find(x => x.name === "Paneer Noodles"),
  foods.find(x => x.name === "Watermelon Juice"),
  foods.find(x => x.name === "Veg Thaali"),
  foods.find(x => x.name === "Paneer Burger"),
  foods.find(x => x.name === "French Fries")
].filter(Boolean);

  return (
    <section className="home-page">
      <div className="home-heading">
        <div>
          <p className="muted">Good Afternoon,</p>
          <h1>{user.name} 👋</h1>
          <p>What are you craving?</p>
        </div>

        <div className="xp-mini">
          <span>⭐</span>
          <div>
            <b>Level 1</b>
            <small>Food Explorer</small>
          </div>
        </div>
      </div>

      <div className="moods">
  {moods.map(([icon, name]) => (
    <button
      className="mood"
      key={name}
      onClick={() => {
        const matches = foods.filter(food => {
          const text = `${food.name} ${food.category || ""} ${food.taste || ""}`.toLowerCase();

          if (name === "Spicy") return text.includes("spicy");
          if (name === "Cheap") return Number(food.price) <= 50;
          if (name === "Healthy") return text.includes("healthy");
          if (name === "Sweet") return text.includes("sweet") || text.includes("cake") || text.includes("chocolate");
          if (name === "Quick") return Number(food.time || 99) <= 5;
          if (name === "Comfort") return text.includes("comfort");
          if (name === "Filling") return text.includes("filling");

          return false;
        });

        if (matches.length > 0) {
          onFoodClick(matches[Math.floor(Math.random() * matches.length)]);
        } else {
          alert(`No ${name.toLowerCase()} food found.`);
        }
      }}
    >
      <span>{icon}</span>
      {name}
    </button>
  ))}
</div>

      <section className="match-card">
        <div className="match-content">
          <span className="eyebrow">
            ✨ YOUR FOOD MATCH
          </span>

          <h2>🌶️ Paneer Noodles</h2>

          <div className="match-score">
            <strong>96%</strong>
            <span>MATCH</span>
          </div>

          <div className="match-info">
            <b>₹80</b>
            <span>🔥 Spicy</span>
            <span>⏱ 8 min</span>
            <span>⭐ 4.6</span>
          </div>

          <button
  className="match-btn"
  onClick={() => {
    const food = foods.find(
      item => item.name === "Paneer Noodles"
    );

    if (food) {
      onFoodClick(food);
    }
  }}
>
  CUSTOMIZE →
</button>
        </div>

        <div className="match-art">🍜</div>
      </section>

      <div className="section-title">
  <h2>🔥 Trending Today</h2>
</div>

<div className="trending-slider auto-scroll">
  {[...trending, ...trending].map((food, index) => {
   let image = null;

if (food.name === "Masala Dosa") {
  image = masalaDosaImage;
} else if (food.name === "Paneer Noodles") {
  image = paneerNoodlesImage;
} else if (food.name === "Chocolate Milkshake") {
  image = chocolateMilkshakeImage;
} else if (food.name === "Watermelon Juice") {
  image = watermelonJuiceImage;
} else if (food.name === "Veg Thaali") {
  image = vegThaliImage;
} else if (food.name === "Paneer Burger") {
  image = burgerImage;
} else if (food.name === "French Fries") {
  image = friesImage;
} else if (food.name === "Margherita Pizza") {
  image = pizzaImage;
} else if (food.name === "Chocolate Cake") {
  image = cakeImage;
}

    return (
      <div
        className="trending-card"
        key={`${food.id}-${index}`}
        onClick={() => onFoodClick(food)}
      >
        <div className="trending-image">
          {image ? (
            <img src={image} alt={food.name} />
          ) : (
            <span>{food.emoji}</span>
          )}
        </div>

        <div className="trending-info">
          <h3>{food.name}</h3>
          <p>⭐ {food.rating} · ⏱ {food.time} min</p>
          <strong>₹{food.price}</strong>
        </div>
      </div>
    );
  })}
</div>

      

          
     

      <section className="surprise">
        <div>
          <span className="eyebrow">
            🎲 CAN'T DECIDE?
          </span>

          <h2>Let SnackPass choose.</h2>

          <p>
            One tap. One random craving. Zero overthinking.
          </p>
        </div>
        <button
  onClick={() => {
    const randomFood =
      foods[Math.floor(Math.random() * foods.length)];

    onFoodClick(randomFood);
  }}
>
  🎲 SURPRISE ME
</button>

       
      </section>
    </section>
  );
}

function Explore({
  onFoodClick,
  favorites,
  setFavorites
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [taste, setTaste] = useState("All");
  const [price, setPrice] = useState("All");

  const categories = [
    "All",
    "Breakfast",
    "Dosa",
    "Idli",
    "Sandwich",
    "Pizza",
    "Noodles",
    "Rice",
    "Biryani",
    "Snacks",
    "Chat",
    "Lunch",
    "Salads",
    "Drinks",
    "Milkshakes",
    "Cakes",
    "Desserts"
  ];

  const filtered = foods.filter(food => {
    const q = search.toLowerCase();

    const searchMatch =
      !q ||
      food.name.toLowerCase().includes(q) ||
      food.cat.toLowerCase().includes(q) ||
      food.taste.toLowerCase().includes(q) ||
      (q === "cheap" && food.price <= 50) ||
      (q === "quick" && food.time <= 5) ||
      (q === "spicy" && food.taste === "Spicy") ||
      (q === "healthy" && food.taste === "Healthy") ||
      (q === "dessert" &&
        ["Desserts", "Cakes"].includes(food.cat));

    const categoryMatch =
      category === "All" || food.cat === category;

    

    const tasteMatch =
      taste === "All" || food.taste === taste;

    const priceMatch =
      price === "All" ||
      (price === "50" && food.price <= 50) ||
      (price === "100" &&
        food.price > 50 &&
        food.price <= 100) ||
      (price === "101" && food.price > 100);

    return (
      searchMatch &&
      categoryMatch &&
      tasteMatch &&
      priceMatch
    );
  });

  return (
    <section className="explore">
      <p className="eyebrow">DISCOVER</p>
      <h1>Explore Cravings</h1>

      <input
        className="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search food or craving..."
      />

      <div className="category-box">
        <div className="category-title">
          <b>Browse Categories</b>
          <span>{filtered.length} items</span>
        </div>

        <div className="category-row">
          {categories.map(x => (
            <button
              key={x}
              className={category === x ? "filter-active" : ""}
              onClick={() => setCategory(x)}
            >
              {x === "Breakfast" && "🍳 "}
              {x === "Dosa" && "🥞 "}
              {x === "Idli" && "⚪ "}
              {x === "Sandwich" && "🥪 "}
              {x === "Pizza" && "🍕 "}
              {x === "Noodles" && "🍜 "}
              {x === "Rice" && "🍚 "}
              {x === "Biryani" && "🍛 "}
              {x === "Snacks" && "🍟 "}
              {x === "Chat" && "🥙 "}
              {x === "Lunch" && "🍱 "}
              {x === "Salads" && "🥗 "}
              {x === "Drinks" && "🥤 "}
              {x === "Milkshakes" && "🥛 "}
              {x === "Cakes" && "🍰 "}
              {x === "Desserts" && "🍨 "}
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="filters">
        <Filter
          title="Price"
          value={price}
          setValue={setPrice}
          options={[
            ["All", "All Prices"],
            ["50", "Under ₹50"],
            ["100", "₹50–₹100"],
            ["101", "Above ₹100"]
          ]}
        />


        <Filter
          title="Taste"
          value={taste}
          setValue={setTaste}
          options={[
            ["All", "All Tastes"],
            ["Spicy", "🌶️ Spicy"],
            ["Sweet", "🍫 Sweet"],
            ["Savory", "🥘 Savory"],
            ["Healthy", "🥗 Healthy"]
          ]}
        />
      </div>

      <div className="explore-heading">
        <div>
          <p className="eyebrow">
            {category === "All"
              ? "ALL CRAVINGS"
              : category.toUpperCase()}
          </p>

          <h2>
            {category === "All"
              ? "What are you craving?"
              : `${category} Menu`}
          </h2>
        </div>

        {(search ||
          category !== "All" ||
          taste !== "All" ||
          price !== "All") && (
          <button
            className="clear-filter"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setTaste("All");
              setPrice("All");
            }}
          >
            Clear all
          </button>
        )}
      </div>

      <div className="explore-grid">
        {filtered.map(food => (
     <FoodCard
  key={food.id}
  food={food}
  onClick={() => onFoodClick(food)}
  favorites={favorites}
  setFavorites={setFavorites}
/> ))}
      </div>

      {!filtered.length && (
        <div className="empty">
          🔎
          <h2>No cravings found</h2>
          <p>Try another category or search.</p>
        </div>
      )}
    </section>
  );
}

function Filter({ title, value, setValue, options }) {
  return (
    <label className="filter">
      <b>{title}</b>

      <select
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        {options.map(([value, text]) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </label>
  );
}

function FoodCard({
  food,
  onClick,
  favorites,
  setFavorites
}) {
 
  return (
    <article className="food-card" onClick={onClick}>
      <div className="food-image">
        {food.image ? (
          <img
            src={food.image}
            alt={food.name}
            className="food-card-img"
          />
        ) : (
          <span>{food.emoji}</span>
        )}

        <button
          className="heart"
          onClick={e => e.stopPropagation()}
        >
          ♡
        </button>
      </div>

      <div className="food-info">
        <div className="food-title">
          <h3>{food.name}</h3>
          <strong>₹{food.price}</strong>
        </div>

        <p>
          ⭐ {food.rating} · ⏱ {food.time} min
        </p>

        <small>
          {food.taste} · {food.cat}
        </small>
      </div>
    </article>
  );
}
function FoodImage({ food, className = "" }) {
  if (food?.image) {
    return (
      <img
        src={food.image}
        alt={food.name}
        className={className}
      />
    );
  }

  return (
    <div className={className}>
      {food?.emoji || "🍽️"}
    </div>
  );
}
function FoodDetails({ food, onClose, onAdd }) {
  const [qty, setQty] = useState(1);
  const [cheese, setCheese] = useState(false);
  const [fries, setFries] = useState(false);
  const [sauce, setSauce] = useState(false);
  const [spice, setSpice] = useState("Medium");

  const total =
    (food.price +
      (cheese ? 15 : 0) +
      (fries ? 25 : 0) +
      (sauce ? 10 : 0)) * qty;

  return (
    <div className="food-modal" onClick={onClose}>
      <div
        className="food-details"
        onClick={e => e.stopPropagation()}
      >
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
        <div className="detail-image">
  {food.image ? (
    <img
      src={food.image}
      alt={food.name}
      className="detail-food-img"
    />
  ) : (
    <span>{food.emoji || "🍽️"}</span>
  )}
</div>

        

        <div className="detail-content">
          <span className="eyebrow">{food.cat}</span>

          <h1>{food.name}</h1>

          <div className="detail-rating">
            ⭐ {food.rating} · ⏱ {food.time} min
          </div>

          <h2>₹{food.price}</h2>

          <p className="detail-description">
            Delicious campus favourite made fresh for your
            cravings.
          </p>

          <h3>Customize</h3>

          <label className="option">
            <span>Cheese +₹15</span>
            <input
              type="checkbox"
              checked={cheese}
              onChange={e => setCheese(e.target.checked)}
            />
          </label>

          <label className="option">
            <span>Fries +₹25</span>
            <input
              type="checkbox"
              checked={fries}
              onChange={e => setFries(e.target.checked)}
            />
          </label>

          <label className="option">
            <span>Extra Sauce +₹10</span>
            <input
              type="checkbox"
              checked={sauce}
              onChange={e => setSauce(e.target.checked)}
            />
          </label>

          <h3>Spice Level</h3>

          <div className="spice-options">
            {["Mild", "Medium", "Hot", "Extreme 🔥"].map(x => (
              <button
                key={x}
                className={spice === x ? "spice-active" : ""}
                onClick={() => setSpice(x)}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="quantity">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>
              −
            </button>

            <b>{qty}</b>

            <button onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>

          <button
            className="add-cart-btn"
            onClick={() =>
              onAdd({
                ...food,
                qty,
                cheese,
                fries,
                sauce,
                spice,
                total
              })
            }
          >
            ADD TO CART · ₹{total}
          </button>
        </div>
      </div>
    </div>
  );
}
function Cart({ cart, setCart, onCheckout }) {
  const increaseQty = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index
          ? {
              ...item,
              qty: (item.qty || 1) + 1,
              total: item.price * ((item.qty || 1) + 1),
            }
          : item
      )
    );
  };

  const decreaseQty = (index) => {
    const item = cart[index];

    if ((item.qty || 1) <= 1) {
      setCart(cart.filter((_, i) => i !== index));
      return;
    }

    setCart(
      cart.map((item, i) =>
        i === index
          ? {
              ...item,
              qty: item.qty - 1,
              total: item.price * (item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.total || item.price * (item.qty || 1)),
    0
  );

 
  const discount = subtotal >= 300 ? 30 : 0;
  const total = subtotal - discount;

  if (cart.length === 0) {
    return (
      <section className="page cart-page">
        <p className="eyebrow">YOUR ORDER</p>

        <h1>🛒 Your Cart</h1>

        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is hungry.</h2>
          <p>Let's fix that. Add something delicious from Explore.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page cart-page">
      <p className="eyebrow">YOUR ORDER</p>

      <div className="cart-heading">
        <div>
          <h1>🛒 Your Cart</h1>
          <p>{cart.length} item{cart.length !== 1 ? "s" : ""} in your cart</p>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <div className="cart-item-image">
  <FoodImage food={item} className="cart-item-img" />
</div>

              <div className="cart-info">
                <h3>{item.name}</h3>

                <p>
                  {item.spice || "Regular"} • ₹{item.price} each
                </p>

                {item.cheese && <small>+ Cheese</small>}
                {item.fries && <small> + Fries</small>}
                {item.sauce && <small> + Extra Sauce</small>}
              </div>

              <div className="cart-quantity">
                <button onClick={() => decreaseQty(index)}>−</button>

                <strong>{item.qty || 1}</strong>

                <button onClick={() => increaseQty(index)}>+</button>
              </div>

              <div className="cart-price">
                <strong>
                  ₹{item.total || item.price * (item.qty || 1)}
                </strong>

                <button
                  className="remove-cart"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{subtotal}</strong>
          </div>

          

          <div className="summary-row discount-row">
            <span>Discount</span>
            <strong>- ₹{discount}</strong>
          </div>

          {subtotal < 300 && (
            <p className="discount-hint">
              Add ₹{300 - subtotal} more to get ₹30 off 🎉
            </p>
          )}

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button className="checkout-btn" onClick={onCheckout}>
            PROCEED TO CHECKOUT →
          </button>
        </aside>
      </div>
    </section>
  );
}
function Checkout({
  cart,
  setCart,
  setPage,
  setOrder,
  setPoints
}){
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [payment, setPayment] = React.useState("UPI");
  const [orderPlaced, setOrderPlaced] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.total * (item.qty || 1),
    0
  );

 
  const total = subtotal ;


  const placeOrder = () => {
  if (!name.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  
  const token =
    String.fromCharCode(65 + Math.floor(Math.random() * 3)) +
    "-" +
    Math.floor(100 + Math.random() * 900);

  const newOrder = {
    id: "SP" + Math.floor(10000 + Math.random() * 90000),
    token,
    name,
    phone,
    payment,
    total,
    items: cart,
    status: "WAITING",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
  };
setOrderNumber(newOrder.id);
  setOrder(newOrder);
  setOrderPlaced(true);
};

  const shareOrder = async () => {
    const shareText =
      `SnackPass Order Confirmed 🎉\n\n` +
      `Order ID: ${orderNumber}\n` +
      `Name: ${name}\n` +
      `Total: ₹${total}\n\n` +
      `Thank you for ordering from SnackPass!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "SnackPass Order",
          text: shareText
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("Order details copied. You can paste them anywhere to share.");
      } catch (error) {
        alert(shareText);
      }
    }
  };

  const finishOrder = () => {
  setCart([]);
  setOrderPlaced(false);
  setPage("Token");
};

  if (orderPlaced) {
    return (
      <section className="order-success-page">
        <div className="order-success-card">

          <div className="success-check">
            ✓
          </div>

          <p className="success-small-title">
            SNACKPASS
          </p>

          <h1>
            Order Placed Successfully!
          </h1>

          <p className="success-message">
            Your order has been confirmed 🎉
          </p>

          <div className="order-number-box">
            <span>ORDER ID</span>
            <strong>{orderNumber}</strong>
          </div>

          <div className="success-details">

            <div className="success-detail-row">
              <span>👤 Name</span>
              <strong>{name}</strong>
            </div>

            <div className="success-detail-row">
              <span>💳 Payment</span>
              <strong>{payment}</strong>
            </div>

            <div className="success-detail-row">
              <span>💰 Total Paid</span>
              <strong>₹{total}</strong>
            </div>

          </div>

          <div className="success-actions">

            <button
              className="share-order-btn"
              onClick={shareOrder}
            >
              ↗ Share Order
            </button>

            <button
              className="done-order-btn"
              onClick={finishOrder}
            >
              ✓ Done
            </button>

          </div>

          <p className="success-footer">
            Thank you for ordering with SnackPass ❤️
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">

      <div className="checkout-header">
        <p className="eyebrow">SNACKPASS</p>

        <h1>Checkout</h1>

        <p>
          Complete your details and place your order.
        </p>
      </div>

      <div className="checkout-layout">

        <div className="checkout-main">

         


          <div className="checkout-card">

            <div className="checkout-card-heading">
              <div className="checkout-icon">
                📍
              </div>

              <div>
                <h2>Pickup Details</h2>
                <p>Where should we prepare your order?</p>
              </div>
            </div>


            <div className="checkout-form">

              <div className="form-group">
                <label>
                  Your Name <span>*</span>
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>


              <div className="form-group">
                <label>
                  Phone Number <span>*</span>
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  placeholder="10-digit phone number"
                  maxLength="10"
                />
              </div>


            </div>

          </div>


          <div className="checkout-card">

            <div className="checkout-card-heading">
              <div className="checkout-icon">
                💳
              </div>

              <div>
                <h2>Payment Method</h2>
                <p>Choose how you want to pay</p>
              </div>
            </div>


            <div className="payment-options">

              <label
                className={
                  payment === "UPI"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={payment === "UPI"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <strong>UPI</strong>
                  <small>Pay using UPI</small>
                </div>

              </label>


              <label
                className={
                  payment === "Cash at Counter"
                    ? "payment-option selected"
                    : "payment-option"
                }
              >
                <input
                  type="radio"
                  name="payment"
                  value="Cash at Counter"
                  checked={payment === "Cash at Counter"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <div>
                  <strong>Cash at Counter</strong>
                  <small>Pay when collecting your order</small>
                </div>

              </label>

            </div>

          </div>

        </div>


        <aside className="checkout-summary">

          <div className="summary-header">
            <div>
              <h2>Order Summary</h2>
              <p>Your SnackPass order</p>
            </div>

            <div className="summary-count">
              {cart.length}
            </div>
          </div>


          <div className="summary-line">
            <span>Subtotal</span>
            <strong>₹{subtotal}</strong>
          </div>

          

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>


          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            PLACE ORDER →
          </button>


          <button
            className="back-cart-btn"
            onClick={() => setPage("Cart")}
          >
            ← BACK TO CART
          </button>


          <p className="secure-checkout">
            🔒 Secure & safe checkout
          </p>

        </aside>

      </div>

    </section>
  );
}
function Token({ order, setPage, setOrder }) {
  const [status, setStatus] = useState(order?.status || "WAITING");

  useEffect(() => {
    const steps = ["WAITING", "PREPARING", "READY", "COMPLETED"];
    let i = steps.indexOf(status);

    if (i >= 0 && i < steps.length - 1) {
      const timer = setTimeout(() => {
        const nextStatus = steps[i + 1];

setStatus(nextStatus);

setOrder(prev =>
  prev ? { ...prev, status: nextStatus } : prev
);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const shareToken = async () => {
    const text =
      `SnackPass Order 🎟️\n` +
      `Token: ${order.token}\n` +
      `Order: #${order.id}\n`;

    if (navigator.share) {
      await navigator.share({
        title: "SnackPass Order",
        text
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Token copied!");
    }
  };

  return (
    <section className="token-page">

      <div className="token-card">

        <p className="eyebrow">SNACKPASS</p>

        <div className="token-icon">🎟️</div>

        <h1>MY TOKEN</h1>

        <div className="token-number">
          {order?.token}
        </div>

        <p className="token-order">
          Order #{order?.id}
        </p>

        <div className={`token-status ${status.toLowerCase()}`}>
          {status === "WAITING" && "🟡 Waiting"}
          {status === "PREPARING" && "👨‍🍳 Being Prepared"}
          {status === "READY" && "🎉 Order Ready!"}
          {status === "COMPLETED" && "✓ Completed"}
        </div>

        <div className="token-info">

      
          <div>
            <span>Payment</span>
            <strong>{order?.payment}</strong>
          </div>

          <div>
            <span>Total</span>
            <strong>₹{order?.total}</strong>
          </div>

        </div>

        <div className="order-timeline">

          <div className={status !== "" ? "done" : ""}>
            <span>✓</span>
            <p>Order Placed</p>
          </div>

          <div className={
            ["PREPARING", "READY", "COMPLETED"].includes(status)
              ? "done"
              : ""
          }>
            <span>👨‍🍳</span>
            <p>Preparing</p>
          </div>

          <div className={
            ["READY", "COMPLETED"].includes(status)
              ? "done"
              : ""
          }>
            <span>📦</span>
            <p>Ready</p>
          </div>

          <div className={
            status === "COMPLETED" ? "done" : ""
          }>
            <span>🎉</span>
            <p>Completed</p>
          </div>

        </div>

        <div className="token-qr">
          <div>▦</div>
          <span>SHOW TOKEN AT COUNTER</span>
        </div>

        {status === "READY" && (
          <div className="ready-message">
            🎉 YOUR ORDER IS READY!
            <small>
            </small>
          </div>
        )}

        <div className="token-actions">

          <button
            className="share-order-btn"
            onClick={shareToken}
          >
            ↗ Share Token
          </button>

          <button
            className="done-order-btn"
            onClick={() => setPage("Home")}
          >
            DONE
          </button>

        </div>

      </div>

    </section>
  );
}
function OrdersPage({ order, setPage }) {
  return (
    <section className="page feature-page">
      <p className="eyebrow">SNACKPASS</p>
      <h1>📦 My Orders</h1>
      <p className="page-subtitle">
        Track your SnackPass orders.
      </p>

      {!order ? (
        <div className="feature-empty">
          <div>📦</div>
          <h2>No orders yet</h2>
          <p>Your placed orders will appear here.</p>

          <button onClick={() => setPage("Explore")}>
            EXPLORE FOOD →
          </button>
        </div>
      ) : (
        <div className="order-history-card">
          <div className="history-top">
            <div>
              <span>ORDER ID</span>
              <h3>#{order.id}</h3>
            </div>

            <strong className="history-token">
              🎟️ {order.token}
            </strong>
          </div>

          <div className="history-status">
            🟡 {order.status}
          </div>

          <div className="history-info">
            <span>{order.items?.length || 0} items</span>
            <strong>₹{order.total}</strong>
          </div>

          <button
            className="primary-feature-btn"
            onClick={() => setPage("Token")}
          >
            VIEW TOKEN →
          </button>
        </div>
      )}
    </section>
  );
}
function PassportPage({ exploredCount = 0 }) {
  const progress = Math.min(exploredCount, 20);
  const percentage = (progress / 20) * 100;

  return (
    <section className="page feature-page">
      <p className="eyebrow">SNACKPASS REWARDS</p>
      <h1>🛂 Food Passport</h1>

      <div className="passport-card">
        <div className="passport-crown">👑</div>

        <h2>Campus Food Explorer</h2>

        <p>
          Explore different food categories and collect
          your SnackPass journey.
        </p>

        <div className="passport-progress">
          <div>
            <span>Food explored</span>
            <strong>{progress} / 20</strong>
          </div>

          <div className="progress-bar">
            <span style={{ width: `${percentage}%` }} />
          </div>
        </div>

        <div className="passport-badges">
          <span>🥞</span>
          <span>🍕</span>
          <span>🍜</span>
          <span>🍰</span>
          <span>🥤</span>
        </div>
      </div>
    </section>
  );
}


function ProfilePage({ user, onLogout }) {
  return (
    <section className="page feature-page">
      <p className="eyebrow">MY ACCOUNT</p>
      <h1>♙ Profile</h1>

      <div className="profile-card">
        <div className="profile-avatar">
          {user?.name?.charAt(0)?.toUpperCase() || "S"}
        </div>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <div className="profile-stats">
          <div>
            <strong>1</strong>
            <span>Level</span>
          </div>

          <div>
            <strong>0</strong>
            <span>Orders</span>
          </div>

          <div>
            <strong>0</strong>
            <span>Points</span>
          </div>
        </div>

        <button
          className="logout-profile"
          onClick={onLogout}
        >
          LOGOUT
        </button>
      </div>
    </section>
  );
}


function FavoritesPage({
  favorites,
  setFavorites,
  setPage,
  onFoodClick
}) {
  return (
    <section className="page feature-page">
      <p className="eyebrow">YOUR PICKS</p>
      <h1>♥ Favorites</h1>

      {favorites.length === 0 ? (
        <div className="feature-empty">
          <div>♥</div>
          <h2>Your favorites are empty</h2>
          <p>Tap the heart on any food to save it here.</p>

          <button onClick={() => setPage("Explore")}>
            FIND FOOD →
          </button>
        </div>
      ) : (
        <>
          <div className="explore-grid">
            {favorites.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                onClick={() => onFoodClick(food)}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </div>

          <button
            className="clear-filter"
            onClick={() => setFavorites([])}
          >
            CLEAR FAVORITES
          </button>
        </>
      )}
    </section>
  );
}


function AchievementsPage({ order }) {
  const hasOrder = !!order;
  const completedToken = order?.status === "COMPLETED";

  const achievements = [
    ["🌱", "First Bite", "Place your first order", hasOrder],
    ["🔥", "Spice Master", "Try a spicy food", false],
    ["🍕", "Food Explorer", "Explore 5 categories", false],
    ["🎟️", "Token Boss", "Complete your first token", completedToken],
    ["👑", "Snack King", "Become a campus food legend", completedToken]
  ];

  return (
    <section className="page feature-page">
      <p className="eyebrow">LEVEL UP</p>
      <h1>🏆 Achievements</h1>

      <div className="achievement-grid">
        {achievements.map(([icon, title, text, unlocked]) => (
          <div
            className={`achievement-card ${
              unlocked ? "achievement-unlocked" : ""
            }`}
            key={title}
          >
            <div>{icon}</div>

            <h3>{title}</h3>

            <p>{text}</p>

            <span>
              {unlocked ? "🏆 UNLOCKED" : "🔒 LOCKED"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}


function BossPage({ setPage, order }) {
  const orders = order ? 1 : 0;
  const points = order ? 10 : 0;
  const achievements = order ? 1 : 0;

  return (
    <section className="page feature-page">
      <p className="eyebrow">SNACKPASS HQ</p>

      <div className="boss-hero">
        <div className="boss-crown">👑</div>

        <h1>Welcome, Food Boss</h1>

        <p>
          Rule your cravings. Beat the queue.
          Conquer campus hunger.
        </p>

        <div className="boss-level">
          <strong>
            {orders >= 5 ? "LEVEL 2" : "LEVEL 1"}
          </strong>

          <span>
            {orders >= 5 ? "FOOD MASTER" : "FOOD EXPLORER"}
          </span>
        </div>
      </div>

      <div className="boss-grid">
        <div>
          <strong>{orders}</strong>
          <span>Orders</span>
        </div>

        <div>
          <strong>{points}</strong>
          <span>Points</span>
        </div>

        <div>
          <strong>{achievements}</strong>
          <span>Achievements</span>
        </div>
      </div>

      <button
        className="primary-feature-btn"
        onClick={() => setPage("Explore")}
      >
        START EXPLORING →
      </button>
    </section>
  );
}

function NotificationsPage({ order }) {  return (
    <section className="page feature-page">
      <p className="eyebrow">STAY UPDATED</p>
      <h1>🔔 Notifications</h1>

      <div className="notification-list">

        <div className="notification-card">
  <div className="notification-icon">🎟️</div>

  <div>
    <h3>Token updates</h3>

    {!order ? (
      <p>No active order yet.</p>
    ) : (
      <p>
        Order #{order.id} —{" "}
        {order.status === "WAITING" && "Order placed and waiting."}
        {order.status === "PREPARING" && "Your food is being prepared."}
        {order.status === "READY" && "🎉 Your order is ready! Show your token at the canteen."}
        {order.status === "COMPLETED" && "✓ Order completed."}
      </p>
    )}
  </div>
</div>

        <div className="notification-card">
          <div>🎉</div>
          <div>
            <strong>SnackPass rewards</strong>
            <p>
              New achievements and rewards will appear here.
            </p>
          </div>
        </div>

        <div className="notification-card">
          <div>🍕</div>
          <div>
            <strong>Campus cravings</strong>
            <p>
              Discover what's trending on SnackPass.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
function MobileItem({
  icon,
  text,
  active,
  onClick
}) {
  return (
    <button
      className={active ? "mobile-active" : ""}
      onClick={onClick}
    >
      <span>{icon}</span>
      <small>{text}</small>
    </button>
  );
}