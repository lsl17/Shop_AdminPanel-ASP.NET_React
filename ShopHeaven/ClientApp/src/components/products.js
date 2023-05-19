export const products = [
  {
    id: "1",
    isAvailable: true,
    name: "Laptop Lenovo 2200",
    description: "The best laptop you ever seen",
    createdBy: "vasil",
    reviewsCount: 4,
    currency: { 
      id: "1",
      code: "USD",
      name: "US Dollar"
    },
    rating: 2.3,
    price: 20.50,
    discount: 10,
    quantity: 12,
    brand: "Apple Inc",
    hasGuarantee: true,
    tags: ["auto", "home", "pets"],
    specifications: [
      {
        id: "1",
        key: "Material",
        value: "Rubber",
      },
      {
        id: "2",
        key: "Year",
        value: "1991",
      },
      {
        id: "3",
        key: "Age",
        value: "18+",
      },
    ],
    image: "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
    images: [
      "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
      "https://images.hdqwalls.com/download/winter-snow-trees-mountains-landscape-hdr-4k-aj-1920x1080.jpg",
      "https://static.timesofisrael.com/www/uploads/2021/10/%D7%9E%D7%A2%D7%91%D7%93-%D7%90%D7%9C%D7%93%D7%A8-%D7%9C%D7%99%D7%99%D7%A7-%D7%A7%D7%A8%D7%93%D7%99%D7%98-%D7%90%D7%95%D7%94%D7%93-%D7%A4%D7%90%D7%9C%D7%99%D7%A7.jpg",
      "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_na.jpg",
      "https://www.hansetextil.com/media/catalog/category/HANSE_pillows.jpg",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80",
      "https://cdn.mos.cms.futurecdn.net/xjGinGFYRvmcog5cX92WYk.jpg",
      "https://assets.epicurious.com/photos/5e38ae1259e5e50008b35cc6/16:9/w_2560%2Cc_limit/DemitasseSpoons_HERO_012920_082_VOG_final.jpg",
      "https://www.philips.com/c-dam/b2c/master/experience/consistency-campaign/airfryer/EU7/philips-airfryer-uk-thumbnail.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2022/01/nintendo-switch-2048px-1011437-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
    ],
    subcategory:
      {
        id: "1-1",
        name: "Product 1 Subcategory",
      },
  },


  {
    id: "2",
    isAvailable: false,
    name: "Car Volga USSR Style",
    description: "The best car you ever seen",
    createdBy: "brejnev",
    reviewsCount: 244,
    currency: { 
      id: "2",
      code: "EUR",
      name: "Euro"
    },
    rating: 3.6,
    price: 1220.00,
    discount: 0,
    quantity: 5,
    brand: "AZLK Inc",
    hasGuarantee: false,
    tags: ["auto", "car", "volga"],
    specifications: [
      {
        id: "1",
        key: "Material",
        value: "Iron",
      },
      {
        id: "2",
        key: "Year",
        value: "1961",
      },
      {
        id: "3",
        key: "Fuel",
        value: "Gas",
      },
    ],
    image: "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
    images: [
      "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
      "https://images.hdqwalls.com/download/winter-snow-trees-mountains-landscape-hdr-4k-aj-1920x1080.jpg",
      "https://static.timesofisrael.com/www/uploads/2021/10/%D7%9E%D7%A2%D7%91%D7%93-%D7%90%D7%9C%D7%93%D7%A8-%D7%9C%D7%99%D7%99%D7%A7-%D7%A7%D7%A8%D7%93%D7%99%D7%98-%D7%90%D7%95%D7%94%D7%93-%D7%A4%D7%90%D7%9C%D7%99%D7%A7.jpg",
      "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_na.jpg",
      "https://www.hansetextil.com/media/catalog/category/HANSE_pillows.jpg",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80",
      "https://cdn.mos.cms.futurecdn.net/xjGinGFYRvmcog5cX92WYk.jpg",
      "https://assets.epicurious.com/photos/5e38ae1259e5e50008b35cc6/16:9/w_2560%2Cc_limit/DemitasseSpoons_HERO_012920_082_VOG_final.jpg",
      "https://www.philips.com/c-dam/b2c/master/experience/consistency-campaign/airfryer/EU7/philips-airfryer-uk-thumbnail.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2022/01/nintendo-switch-2048px-1011437-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
    ],
    subcategory:
    {
      id: "2-1",
      name: "Product 2 Subcategory",
    },
  },

  {
    id: "3",
    isAvailable: true,
    name: "CD Ivana Doza Lubov album",
    description: "The best CD you ever seen",
    createdBy: "mitko",
    reviewsCount: 65,
    currency: { 
      id: "3",
      code: "BGN",
      name: "Bulgarian lev"
    },
    rating: 4.1,
    price: 10.00,
    discount: 8,
    quantity: 54,
    brand: "Payner Music",
    hasGuarantee: true,
    tags: ["CD", "music", "Ivana", "chalga","bulgarian"],
    specifications: [
      {
        id: "1",
        key: "Country",
        value: "Bulgaria",
      },
      {
        id: "2",
        key: "Year",
        value: "2006",
      },
      {
        id: "3",
        key: "Is sexy",
        value: "No",
      },
    ],
    image: "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
    images: [
      "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
      "https://images.hdqwalls.com/download/winter-snow-trees-mountains-landscape-hdr-4k-aj-1920x1080.jpg",
      "https://static.timesofisrael.com/www/uploads/2021/10/%D7%9E%D7%A2%D7%91%D7%93-%D7%90%D7%9C%D7%93%D7%A8-%D7%9C%D7%99%D7%99%D7%A7-%D7%A7%D7%A8%D7%93%D7%99%D7%98-%D7%90%D7%95%D7%94%D7%93-%D7%A4%D7%90%D7%9C%D7%99%D7%A7.jpg",
      "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_na.jpg",
      "https://www.hansetextil.com/media/catalog/category/HANSE_pillows.jpg",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80",
      "https://cdn.mos.cms.futurecdn.net/xjGinGFYRvmcog5cX92WYk.jpg",
      "https://assets.epicurious.com/photos/5e38ae1259e5e50008b35cc6/16:9/w_2560%2Cc_limit/DemitasseSpoons_HERO_012920_082_VOG_final.jpg",
      "https://www.philips.com/c-dam/b2c/master/experience/consistency-campaign/airfryer/EU7/philips-airfryer-uk-thumbnail.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2022/01/nintendo-switch-2048px-1011437-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
    ],
    subcategory:
      {
        id: "3-1",
        name: "Product 3 Subcategory",
      },
  },

  {
    id: "4",
    isAvailable: true,
    name: "Leberkeze German style",
    description: "The best leberkeze you ever taste",
    createdBy: "pecata",
    reviewsCount: 22,
    currency: { 
      id: "4",
      code: "BGN",
      name: "lev"
    },
    rating: 4.5,
    price: 23.50,
    discount: 2,
    quantity: 41,
    brand: "Mesko Petrich",
    hasGuarantee: false,
    tags: ["leberkeze", "meat", "german", "chalga", "kurvi", "smelo", "debamamati", "slipknot", "bogove", "ubivam", "ta", "chuk", "smazvam ta", "napravo"],
    specifications: [
      {
        id: "1",
        key: "Country",
        value: "Bulgaria",
      },
      {
        id: "2",
        key: "Meat",
        value: "Pig",
      },
      {
        id: "3",
        key: "Vegan",
        value: "No",
      },
    ],
    image: "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
    images: [
      "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
      "https://images.hdqwalls.com/download/winter-snow-trees-mountains-landscape-hdr-4k-aj-1920x1080.jpg",
      "https://static.timesofisrael.com/www/uploads/2021/10/%D7%9E%D7%A2%D7%91%D7%93-%D7%90%D7%9C%D7%93%D7%A8-%D7%9C%D7%99%D7%99%D7%A7-%D7%A7%D7%A8%D7%93%D7%99%D7%98-%D7%90%D7%95%D7%94%D7%93-%D7%A4%D7%90%D7%9C%D7%99%D7%A7.jpg",
      "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_na.jpg",
      "https://www.hansetextil.com/media/catalog/category/HANSE_pillows.jpg",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80",
      "https://cdn.mos.cms.futurecdn.net/xjGinGFYRvmcog5cX92WYk.jpg",
      "https://assets.epicurious.com/photos/5e38ae1259e5e50008b35cc6/16:9/w_2560%2Cc_limit/DemitasseSpoons_HERO_012920_082_VOG_final.jpg",
      "https://www.philips.com/c-dam/b2c/master/experience/consistency-campaign/airfryer/EU7/philips-airfryer-uk-thumbnail.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2022/01/nintendo-switch-2048px-1011437-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
    ],
    subcategory:
      {
        id: "4-1",
        name: "Product 4 Subcategory",
      },
  },

  {
    id: "5",
    isAvailable: true,
    name: "Ehtiopian Coffee",
    description: "The best coffee you ever taste",
    createdBy: "nasri",
    reviewsCount: 3,
    currency: { 
      id: "5",
      code: "USD",
      name: "US Dollar"
    },
    rating: 2.0,
    price: 13.50,
    discount: 5,
    quantity: 39,
    brand: "Nescafe",
    hasGuarantee: false,
    tags: ["coffee", "ethiopian"],
    specifications: [
      {
        id: "1",
        key: "Country",
        value: "Belgium",
      },
      {
        id: "2",
        key: "Type",
        value: "Ethiopian",
      },
      {
        id: "3",
        key: "Color",
        value: "Black",
      },
    ],
    image: "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
    images: [
      "https://levvvel.com/wp-content/uploads/2560-x-1440-vs-1920-x-1080-resolution.jpg",
      "https://images.hdqwalls.com/download/winter-snow-trees-mountains-landscape-hdr-4k-aj-1920x1080.jpg",
      "https://static.timesofisrael.com/www/uploads/2021/10/%D7%9E%D7%A2%D7%91%D7%93-%D7%90%D7%9C%D7%93%D7%A8-%D7%9C%D7%99%D7%99%D7%A7-%D7%A7%D7%A8%D7%93%D7%99%D7%98-%D7%90%D7%95%D7%94%D7%93-%D7%A4%D7%90%D7%9C%D7%99%D7%A7.jpg",
      "https://www.ibanez.com/common/product_artist_file/file/pc_main_electric_guitars_na.jpg",
      "https://www.hansetextil.com/media/catalog/category/HANSE_pillows.jpg",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80",
      "https://cdn.mos.cms.futurecdn.net/xjGinGFYRvmcog5cX92WYk.jpg",
      "https://assets.epicurious.com/photos/5e38ae1259e5e50008b35cc6/16:9/w_2560%2Cc_limit/DemitasseSpoons_HERO_012920_082_VOG_final.jpg",
      "https://www.philips.com/c-dam/b2c/master/experience/consistency-campaign/airfryer/EU7/philips-airfryer-uk-thumbnail.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2022/01/nintendo-switch-2048px-1011437-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
    ],
    subcategory:
      {
        id: "5-1",
        name: "Product 5 Subcategory",
      },
  },
];
