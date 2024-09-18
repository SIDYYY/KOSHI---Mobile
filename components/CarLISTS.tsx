export const carModels = {
  Ford: [
    {
      id: '1',
      brand: 'Ford',
      model: 'Ford Mustang 2024',
      year: 2024,
      type: 'Coupe',
      price: 'Php 3,800,000',
      image: 'https://autotijd.be/images/ford/2024/mustang/nieuw/ford-mustang-2024-01.jpg',
      features: [
        {id: 'f1', engine: '5.0L V8', seat: '4'}
      ],
      gallery: [
        'https://autotijd.be/images/ford/2024/mustang/nieuw/ford-mustang-2024-01.jpg',
        'https://autotijd.be/images/ford/2024/mustang/nieuw/ford-mustang-2024-02.jpg',
        'https://autotijd.be/images/ford/2024/mustang/nieuw/ford-mustang-2024-03.jpg'
      ],
      variants: [
        { id: '1a', variant: 'Base', price: 'Php 3,800,000' },
        { id: '1b', variant: 'GT', price: 'Php 4,200,000' },
        { id: '1c', variant: 'Mach 1', price: 'Php 5,000,000' }
      ]
    },
    {
      id: '2',
      brand: 'Ford',
      model: 'Ford F-150 2024',
      year: 2024,
      type: 'Pickup Truck',
      price: 'Php 4,200,000',
      image: 'https://cdn-ds.com/chrome/2024-Ford-F-150-STX-Owego-NY/seo/MzI0ODgwXk1lZGlhIEdhbGxlcnk/DqRJog7xp6BEP-KQtqPz6ccZDauiKXKR00a7xUL_SUzjRc1FxihD5SodQDtapyv8rNHXmHjiSj9auUwwcwU9MDEQs6HFUFOjTGFSbqBE99yYEVaqkaE-qeMQZmb2bI93c6g7Zy5ldQj7TKdBNn44xbcRlBgVevLw2kX2Q8Ryobd9ByTb3XVq6CN6SBWyM7cF/cc_2024FOT110088_01_1280_DR.jpg',
      variants: [
        { id: '2a', variant: 'XLT', price: 'Php 4,200,000' },
        { id: '2b', variant: 'Lariat', price: 'Php 4,800,000' },
        { id: '2c', variant: 'King Ranch', price: 'Php 5,500,000' }
      ]
    },
    {
      id: '3',
      model: 'Ford Explorer 2024',
      brand: 'Ford',
      year: 2024,
      type: 'SUV',
      price: 'Php 3,500,000',
      image: 'https://di-uploads-pod39.dealerinspire.com/kingsford/uploads/2021/02/2021-Ford-Explorer-Overview-Left.jpg',
      variants: [
        { id: '3a', variant: 'Base', price: 'Php 3,500,000' },
        { id: '3b', variant: 'XLT', price: 'Php 4,000,000' },
        { id: '3c', variant: 'Platinum', price: 'Php 5,000,000' }
      ]
    },
    {
      id: '4',
      model: 'Ford Escape 2024',
      brand: 'Ford',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,800,000',
      image: 'https://build.ford.com/dig/Ford/Escape/2024/HD-TILE/Image%5B%7CFord%7CEscape%7C2024%7C1%7C1.%7C700A...PK1..88H.89B.641.68B.FWD.99Z.PHEV.%5D/EXT/1/vehicle.png',
      variants: [
        { id: '4a', variant: 'S', price: 'Php 2,800,000' },
        { id: '4b', variant: 'SE', price: 'Php 3,200,000' },
        { id: '4c', variant: 'Titanium', price: 'Php 3,800,000' }
      ]
    },
    {
      id: '5',
      model: 'Ford Fiesta 2024',
      brand: 'Ford',
      year: 2024,
      type: 'Hatchback',
      price: 'Php 1,500,000',
      image: 'https://images.hgmsites.net/lrg/2019-ford-fiesta-st-hatch-angular-front-exterior-view_100674207_l.jpg',
      variants: [
        { id: '5a', variant: 'S', price: 'Php 1,500,000' },
        { id: '5b', variant: 'SE', price: 'Php 1,800,000' },
        { id: '5c', variant: 'Titanium', price: 'Php 2,000,000' }
      ]
    },
    {
      id: '6',
      model: 'Ford Edge 2024',
      brand: 'Ford',
      year: 2024,
      type: 'SUV',
      price: 'Php 3,000,000',
      image: 'https://platform.cstatic-images.com/in/v2/stock_photos/b1beba72-a141-4137-a122-6f12c87ee8d7/d54d4d21-bc10-42df-9f01-324915279d80.png',
      variants: [
        { id: '6a', variant: 'SE', price: 'Php 3,000,000' },
        { id: '6b', variant: 'SEL', price: 'Php 3,500,000' },
        { id: '6c', variant: 'ST', price: 'Php 4,000,000' }
      ]
    }
  ],
  Nissan: [
    {
      id: '7',
      model: 'Nissan Altima 2024',
      brand: 'Nissan',
      year: 2024,
      type: 'Sedan',
      price: 'Php 2,200,000',
      image: 'https://di-uploads-development.dealerinspire.com/hanovernissan/uploads/2019/10/2019-Altima.png',
      variants: [
        { id: '1a', variant: 'S', price: 'Php 2,200,000' },
        { id: '1b', variant: 'SV', price: 'Php 2,500,000' },
        { id: '1c', variant: 'SR', price: 'Php 2,800,000' }
      ]
    },
    {
      id: '8',
      model: 'Nissan Rogue 2024',
      brand: 'Nissan',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,700,000',
      image: 'https://images.dealer.com/autodata/us/640/color/2024/USD40NIS111C0/XEW.jpg',
      variants: [
        { id: '2a', variant: 'S', price: 'Php 2,700,000' },
        { id: '2b', variant: 'SV', price: 'Php 3,000,000' },
        { id: '2c', variant: 'SL', price: 'Php 3,300,000' }
      ]
    },
    {
      id: '9',
      model: 'Nissan Sentra 2024',
      brand: 'Nissan',
      year: 2024,
      type: 'Sedan',
      price: 'Php 1,800,000',
      image: 'https://images.dealer.com/autodata/us/color/2025/USD50NIC061A0/KAD.jpg?impolicy=resize&w=640',
      variants: [
        { id: '3a', variant: 'S', price: 'Php 1,800,000' },
        { id: '3b', variant: 'SV', price: 'Php 2,000,000' },
        { id: '3c', variant: 'SR', price: 'Php 2,200,000' }
      ]
    },
    {
      id: '10',
      model: 'Nissan Pathfinder 2024',
      brand: 'Nissan',
      year: 2024,
      type: 'SUV',
      price: 'Php 3,300,000',
      image: 'https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2021/04/2022-Nissan-Pathfinder-S-Model-Left.jpg',
      variants: [
        { id: '4a', variant: 'S', price: 'Php 3,300,000' },
        { id: '4b', variant: 'SV', price: 'Php 3,600,000' },
        { id: '4c', variant: 'Platinum', price: 'Php 4,000,000' }
      ]
    },
    {
      id: '11',
      model: 'Nissan Murano 2024',
      brand: 'Nissan',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,900,000',
      image: 'https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2020/12/2021-Nissan-Murano-S-Model-Left.jpg',
      variants: [
        { id: '5a', variant: 'S', price: 'Php 2,900,000' },
        { id: '5b', variant: 'SV', price: 'Php 3,300,000' },
        { id: '5c', variant: 'Platinum', price: 'Php 3,700,000' }
      ]
    },
    {
      id: '12',
      model: 'Nissan 370Z 2024',
      brand: 'Nissan',
      year: 2024,
      type: 'Coupe',
      price: 'Php 2,500,000',
      image: 'https://images.hgmsites.net/lrg/2017-nissan-370z-coupe-nismo-manual-angular-front-exterior-view_100573440_l.jpg',
      variants: [
        { id: '6a',variant: 'Base', price: 'Php 2,500,000' },
        { id: '6b',variant: 'Nismo', price: 'Php 3,000,000' }
      ]
    }
  ],
  Mitsubishi: [
    {
      id: '13',
      model: 'Mitsubishi Outlander 2024',
      brand: 'Mitsubishi',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,800,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/Outlander%20Sport/SUV/color/Oak%20Brown%20Metallic-C22-101,82,74-640-en_US.jpg',
      variants: [
        { id: '1a',variant: 'ES', price: 'Php 2,800,000' },
        { id: '1b',variant: 'LE', price: 'Php 3,100,000' },
        { id: '1c',variant: 'SEL', price: 'Php 3,500,000' }
      ]
    },
    {
      id: '14',
      model: 'Mitsubishi Pajero 2024',
      brand: 'Mitsubishi',
      year: 2024,
      type: 'SUV',
      price: 'Php 3,200,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/Pajero/SUV/color/White%20Diamond-T74-103%2C83%2C74-640-en_US.jpg',
      variants: [
        { id: '2a',variant: 'GLS', price: 'Php 3,200,000' },
        { id: '2b',variant: 'GSR', price: 'Php 3,600,000' },
        { id: '2c',variant: 'GT', price: 'Php 4,000,000' }
      ]
    },
    {
      id: '15',
      model: 'Mitsubishi Lancer 2024',
      brand: 'Mitsubishi',
      year: 2024,
      type: 'Sedan',
      price: 'Php 1,700,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/Lancer/Sedan/color/Silver-Metallic-T03-105%2C80%2C70-640-en_US.jpg',
      variants: [
        { id: '3a',variant: 'Base', price: 'Php 1,700,000' },
        { id: '3b',variant: 'ES', price: 'Php 1,900,000' },
        { id: '3c',variant: 'GSR', price: 'Php 2,200,000' }
      ]
    },
    {
      id: '16',
      model: 'Mitsubishi Montero Sport 2024',
      brand: 'Mitsubishi',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,900,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/Montero%20Sport/SUV/color/White%20Diamond-6D7-100%2C81%2C74-640-en_US.jpg',
      variants: [
        { id: '4a',variant: 'GLS', price: 'Php 2,900,000' },
        { id: '4b',variant: 'GT', price: 'Php 3,300,000' },
        { id: '4c',variant: 'VGT', price: 'Php 3,600,000' }
      ]
    },
    {
      id: '17',
      model: 'Mitsubishi ASX 2024',
      brand: 'Mitsubishi',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,500,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/ASX/SUV/color/Silver-Metallic-S12-104%2C82%2C71-640-en_US.jpg',
      variants: [
        { id: '5a',variant: 'Base', price: 'Php 2,500,000' },
        { id: '5b',variant: 'ES', price: 'Php 2,800,000' },
        { id: '5c',variant: 'GSR', price: 'Php 3,000,000' }
      ]
    },
    {
      id: '18',
      model: 'Mitsubishi Eclipse Cross 2024',
      brand: 'Mitsubishi',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,900,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Mitsubishi/Eclipse%20Cross/SUV/color/Silver-Metallic-2C5-104%2C82%2C71-640-en_US.jpg',
      variants: [
        { id: '6a',variant: 'Base', price: 'Php 2,900,000' },
        { id: '6b',variant: 'GT', price: 'Php 3,300,000' }
      ]
    }
  ],
  BMW: [
    {
      id: '19',
      model: 'BMW 3 Series 2024',
      brand: 'BMW',
      year: 2024,
      type: 'Sedan',
      price: 'Php 3,600,000',
      image: 'https://mediapool.bmwgroup.com/cache/P9/201809/P90323736/P90323736-the-all-new-bmw-3-series-sedan-luxury-line-model-10-2018-599px.jpg',
      variants: [
        { id: '1a',variant: '320i', price: 'Php 3,600,000' },
        { id: '1b',variant: '330i', price: 'Php 4,000,000' },
        { id: '1c',variant: 'M340i', price: 'Php 5,000,000' }
      ]
    },
    {
      id: '20',
      model: 'BMW X5 2024',
      brand: 'BMW',
      year: 2024,
      type: 'SUV',
      price: 'Php 5,000,000',
      image: 'https://mediapool.bmwgroup.com/cache/P9/202012/P90382038/P90382038-the-new-bmw-x5-m-competition-12-2020-599px.jpg',
      variants: [
        { id: '2a',variant: 'X5 xDrive40i', price: 'Php 5,000,000' },
        { id: '2b',variant: 'X5 xDrive50i', price: 'Php 5,500,000' },
        { id: '2c',variant: 'X5 M', price: 'Php 6,500,000' }
      ]
    },
    {
      id: '21',
      model: 'BMW X3 2024',
      brand: 'BMW',
      year: 2024,
      type: 'SUV',
      price: 'Php 4,000,000',
      image: 'https://mediapool.bmwgroup.com/cache/P9/201811/P90306355/P90306355-the-new-bmw-x3-xdrive30i-10-2018-599px.jpg',
      variants: [
        { id: '3a',variant: 'X3 xDrive30i', price: 'Php 4,000,000' },
        { id: '3b',variant: 'X3 xDrive40i', price: 'Php 4,500,000' },
        { id: '3c',variant: 'X3 M', price: 'Php 5,500,000' }
      ]
    },
    {
      id: '22',
      model: 'BMW 5 Series 2024',
      brand: 'BMW',
      year: 2024,
      type: 'Sedan',
      price: 'Php 4,500,000',
      image: 'https://mediapool.bmwgroup.com/cache/P9/201909/P90365224/P90365224-the-new-bmw-5-series-sedan-m-sport-09-2019-599px.jpg',
      variants: [
        { id: '4a',variant: '530i', price: 'Php 4,500,000' },
        { id: '4b',variant: '540i', price: 'Php 5,000,000' },
        { id: '4c',variant: 'M550i', price: 'Php 6,000,000' }
      ]
    },
    {
      id: '23',
      model: 'BMW X7 2024',
      brand: 'BMW',
      year: 2024,
      type: 'SUV',
      price: 'Php 6,500,000',
      image: 'https://mediapool.bmwgroup.com/cache/P9/201911/P90360736/P90360736-the-new-bmw-x7-xdrive50i-11-2019-599px.jpg',
      variants: [
        { id: '5a',variant: 'X7 xDrive40i', price: 'Php 6,500,000' },
        { id: '5b',variant: 'X7 xDrive50i', price: 'Php 7,000,000' },
        { id: '5c',variant: 'X7 M50i', price: 'Php 8,000,000' }
      ]
    },
    {
      id: '24',
      model: 'BMW Z4 2024',
      brand: 'BMW',
      year: 2024,
      type: 'Convertible',
      price: 'Php 4,000,000',
      image: 'https://mediapool.bmwgroup.com/cache/P9/201809/P90323735/P90323735-the-new-bmw-z4-m40i-10-2018-599px.jpg',
      variants: [
        { id: '6a',variant: 'Z4 sDrive30i', price: 'Php 4,000,000' },
        { id: '6b',variant: 'Z4 M40i', price: 'Php 5,000,000' }
      ]
    }
  ],
  Toyota: [
    {
      id: '25',
      model: 'Toyota Camry 2024',
      brand: 'Toyota',
      year: 2024,
      type: 'Sedan',
      price: 'Php 1,800,000',
      image: 'https://images.dealer.com/ddc/vehicles/2025/Toyota/Camry/Sedan/trim_LE_4b85cc/color/Midnight%20Black%20Metallic-218-105%2C82%2C70-640-en_US.jpg',
      variants: [
        { id: "1a",variant: 'LE', price: 'Php 1,800,000' },
        { id: "1b",variant: 'SE', price: 'Php 2,000,000' },
        { id: "1c",variant: 'XSE', price: 'Php 2,300,000' }
      ]
    },
    {
      id: '26',
      model: 'Toyota RAV4 2024',
      brand: 'Toyota',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,200,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Toyota/RAV4/SUV/color/Blueprint-21-103%2C81%2C69-640-en_US.jpg',
      variants: [
        { id: "2a",variant: 'LE', price: 'Php 2,200,000' },
        { id: "2b",variant: 'XLE', price: 'Php 2,500,000' },
        { id: "2c",variant: 'XSE', price: 'Php 2,800,000' }
      ]
    },
    {
      id: '27',
      model: 'Toyota Hilux 2024',
      brand: 'Toyota',
      year: 2024,
      type: 'Pickup',
      price: 'Php 1,900,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Toyota/Hilux/Pickup/color/Silver-Metallic-2C6-105%2C83%2C71-640-en_US.jpg',
      variants: [
        { id: "3a",variant: 'E', price: 'Php 1,900,000' },
        { id: "3b",variant: 'G', price: 'Php 2,200,000' },
        { id: "3c",variant: 'V', price: 'Php 2,500,000' }
      ]
    },
    {
      id: '28',
      model: 'Toyota Fortuner 2024',
      brand: 'Toyota',
      year: 2024,
      type: 'SUV',
      price: 'Php 2,700,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Toyota/Fortuner/SUV/color/Phantom%20Brown%20Metallic-22-101%2C82%2C69-640-en_US.jpg',
      variants: [
        { id: "4a",variant: 'G', price: 'Php 2,700,000' },
        { id: "4b",variant: 'V', price: 'Php 3,000,000' },
        { id: "4c",variant: 'Q', price: 'Php 3,400,000' }
      ]
    },
    {
      id: '29',
      model: 'Toyota Land Cruiser 2024',
      brand: 'Toyota',
      year: 2024,
      type: 'SUV',
      price: 'Php 5,000,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Toyota/Land%20Cruiser/SUV/color/Midnight%20Black%20Metallic-21-103%2C82%2C70-640-en_US.jpg',
      variants: [
        { id: "5a",variant: 'G', price: 'Php 5,000,000' },
        { id: "5b",variant: 'VX', price: 'Php 5,500,000' },
        { id: "5c",variant: 'VXL', price: 'Php 6,000,000' }
      ]
    },
    {
      id: '30',
      model: 'Toyota Supra 2024',
      brand: 'Toyota',
      year: 2024,
      type: 'Sports',
      price: 'Php 4,500,000',
      image: 'https://images.dealer.com/ddc/vehicles/2024/Toyota/Supra/Sports/color/Midnight%20Black%20Metallic-21-103%2C82%2C70-640-en_US.jpg',
      variants: [
        {id: "6a", variant: '2.0', price: 'Php 4,500,000' },
        {id: "6b", variant: '3.0', price: 'Php 5,000,000' }
      ]
    }
  ],
    Chevrolet: [
      {
        id: "31",
        model: "Chevrolet Malibu 2024",
        brand: 'Chevrolet',
        year: 2024,
        type: "Sedan",
        price: "Php 1,700,000",
        image: "https://inv.assets.ansira.net/RTT/Chevrolet/2024/6057663/default/ext_GXP_deg01.jpg",
        variants: [
          {
            id: "1a",
            variant: "LT",
            price: "Php 1,800,000"
          },
          {
            id: "1b",
            variant: "Premier",
            price: "Php 2,000,000"
          }
        ]
      },
      {
        id: "32",
        model: "Chevrolet Equinox 2024",
        brand: 'Chevrolet',
        year: 2024,
        type: "SUV",
        price: "Php 1,900,000",
        image: "https://di-uploads-pod9.dealerinspire.com/blossomchevy/uploads/2022/11/2023-Chevy-Equinox-left-fuel.jpg",
        variants: [
          {
            id: "2a",
            variant: "LT",
            price: "Php 2,000,000"
          },
          {
            id: "2b",
            variant: "Premier",
            price: "Php 2,200,000"
          }
        ]
      },
      {
        id: "33",
        model: "Chevrolet Silverado 2024",
        brand: 'Chevrolet',
        year: 2024,
        type: "Pickup Truck",
        price: "Php 3,400,000",
        image: "https://di-uploads-pod25.dealerinspire.com/rickhendrickcitychevy/uploads/2023/08/mlp-img-top-2024-1500.png",
        variants: [
          {
            id: "3a",
            variant: "WT",
            price: "Php 3,500,000"
          },
          {
            id: "3b",
            variant: "LTZ",
            price: "Php 3,800,000"
          },
          {
            id: "3c",
            variant: "High Country",
            price: "Php 4,200,000"
          }
        ]
      },
      {
        id: "34",
        model: "Chevrolet Traverse 2024",
        brand: 'Chevrolet',
        year: 2024,
        type: "SUV",
        price: "Php 2,700,000",
        image: "https://di-uploads-pod9.dealerinspire.com/blossomchevy/uploads/2022/09/2023-Chevy-Traverse-left-.jpg",
        variants: [
          {
            id: "4a",
            variant: "LS",
            price: "Php 2,800,000"
          },
          {
            id: "4b",
            variant: "RS",
            price: "Php 3,000,000"
          },
          {
            id: "4c",
            variant: "Premier",
            price: "Php 3,300,000"
          }
        ]
      },
      {
        id: "35",
        model: "Chevrolet Camaro 2024",
        brand: 'Chevrolet',
        year: 2024,
        type: "Coupe",
        price: "Php 2,500,000",
        image: "https://www.motortrend.com/uploads/sites/10/2019/10/2019-chevrolet-camaro-1lt-coupe-angular-front.png",
        variants: [
          {
            id: "5a",
            variant: "1LT",
            price: "Php 2,600,000"
          },
          {
            id: "5b",
            variant: "2SS",
            price: "Php 3,000,000"
          },
          {
            id: "5c",
            variant: "ZL1",
            price: "Php 3,500,000"
          }
        ]
      },
      {
        id: "36",
        model: "Chevrolet Tahoe 2024",
        brand: 'Chevrolet',
        year: 2024,
        type: "SUV",
        price: "Php 4,000,000",
        image: "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2024CHS110033_01_1280_G1W.png",
        variants: [
          {
            id: "6a",
            variant: "LS",
            price: "Php 4,200,000"
          },
          {
            id: "6b",
            variant: "LT",
            price: "Php 4,500,000"
          },
          {
            id: "6c",
            variant: "Premier",
            price: "Php 4,800,000"
          }
        ]
      }
    ]
  }
  