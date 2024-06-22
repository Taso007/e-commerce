import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const[loggedIn, setLoggedIn] = useState(false);
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const [products, setProducts] = useState([
    { 
      title: "Xiaomi Curved 30 inch Gaming Monitor Black", 
      img: "https://s3.zoommer.ge/zoommer-images/thumbs/0193821_xiaomi-curved-30-inch-gaming-monitor-black_550.jpeg", 
      price: 699, 
      id: 1, 
      brand: "Xiaomi", 
      amount: 1, 
      quantity: 10,
      description: "The ultra-narrow bezel increases the screen-to-body ratio while reducing visual noise. Combined with a wide 21:9 aspect ratio, the curved screen surrounds you, for an immersive cinematic viewing experience. Say goodbye to stuttering and ghosting thanks to a gaming refresh rate of up to 200Hz.",
      url: "https://zoommer.ge/monitorebi/xiaomi-curved-30-inch-gaming-monitor-black-p36095" 
    },
    { 
      title: "Acer KA220HQ UM.WX0EE.001 Black", 
      img: "https://s3.zoommer.ge/zoommer-images/thumbs/0175820_acer-ka220hq-umwx0ee001-black_550.jpeg", 
      price: 269, 
      id: 2, 
      brand: "Acer", 
      amount: 1, 
      quantity: 9,
      description: "The KA0 series is optimised for a comfortable viewing experience. The display is easy on the eyes with low response times and special technology to reduce glare and harsh blue light1. Easy adjustments and a wide viewing angle1 help you find the perfect position.",
      url: "https://zoommer.ge/monitorebi/acer-ka220hq-um-wx0ee-001-black-p18529" 
    },
    { 
      title: "Apple iMac 24 M3 chip MQRA3RU/A 8c CPU 8c GPU 8GB/256GB Green", 
      img: "https://s3.zoommer.ge/site/e317aeb4-7dd4-41a6-a045-7bfeadfebc5c_Thumb.jpeg", 
      price: 4599, 
      id: 3, 
      brand: "Apple", 
      amount: 1, 
      quantity: 5,
      description: "The ultimate all-in-one PC, now supercharged with the M3 chip. With a stunning 24-inch display◊Refer to legal disclaimers that gives you all the space you need and a unique design that brings life to any space.",
      url: "https://zoommer.ge/all-in-one/apple-imac-24-m3-chip-mqra3ru-a-8c-cpu-8c-gpu-8gb-256gb-green-p42152" 
    },
    { 
      title: "Xiaomi Gaming Monitor G27i Black", 
      img: "https://s3.zoommer.ge/site/f716ca83-12fb-43cf-aa6d-a92806d5e4ce_Thumb.jpeg", 
      price: 499, 
      id: 4, 
      brand: "Xiaomi", 
      amount: 1, 
      quantity: 0,
      description: "Xiaomi Gaming Monitor G27i | Xiaomi Global. This 27-inch e-sports display has a resolution as high as 1920 × 1080. It adopts a fast IPS LCD, allowing you to respond to quick-time events swiftly.",
      url: "https://zoommer.ge/gaming-monitorebi/xiaomi-gaming-monitor-g27i-black-p41216" 
    },
    { 
      title: "Xiaomi Monitor 1C BHR4510GL Black", 
      img: "https://s3.zoommer.ge/zoommer-images/thumbs/0146993_xiaomi-monitor-1c-bhr4510gl-black_550.jpeg", 
      price: 329, 
      id: 5, 
      brand: "Xiaomi", 
      amount: 1, 
      quantity: 5,
      description: "The 60Hz refresh rate and 6ms response time ensure smooth images Mi 23.8'' Desktop Monitor 1C Compact size, unrestricted visibility Wide field of view The monitor offers a field of view of up to 178° with a vivid and realistic image from every angle Push your limits with a near-frameless design.",
      url: "https://zoommer.ge/monitorebi/xiaomi-monitor-1c-bhr4510gl-black-p19535" 
    },
    { 
      title: "Xiaomi Monitor A27i Black", 
      img: "https://s3.zoommer.ge/site/92adbee4-8d15-4eb8-b0c1-266a6abe35e9_Thumb.jpeg", 
      price: 399, 
      id: 6, 
      brand: "Xiaomi", 
      amount: 1, 
      quantity: 15,
      description: "Xiaomi Monitor A27i | Xiaomi Global. The IPS hard screen with a 178° visual angle and 1920 × 1080 resolution ensures high-definition picture quality and a vivid viewing experience, whether you're viewing tables and documents, or watching videos. *Chip supports the HDR function.",
      url: "https://zoommer.ge/monitorebi/xiaomi-monitor-a27i-black-p41215" 
    },
    { 
      title: "Apple iMac 24 MGPH3 8C, MacOS", 
      img: "https://s3.zoommer.ge/zoommer-images/thumbs/0174413_apple-imac-24-mgph3-8c-256gb-green_550.jpeg", 
      price: 3899, 
      id: 7, 
      brand: "Apple", 
      amount: 1, 
      quantity: 0,
      description: "M1 and macOS Ventura elevate iMac with exceptional performance, efficiency, and security. Enjoy instant wake, swift app launches, and smooth responsiveness. With up to 85% faster CPU and 2x faster graphics, tasks like coding and photo editing are lightning-fast. iMac stays cool and quiet under heavy loads, thanks to seamless hardware, software, and silicon integration.",
      url: "https://zoommer.ge/all-in-one/apple-imac-24-mgph3-8c-256gb-green-apple-m1-chip-8c-cpu-apple-m1-chip-8c-gpu-8-p28424" 
    },
    { 
      title: "Acer EK241YHBI UM.QE1EE.H02 Black", 
      img: "https://s3.zoommer.ge/site/e44f2dad-688d-4783-b0b6-64de6b31e8a3_Thumb.jpeg", 
      price: 329, 
      id: 8, 
      brand: "Acer", 
      amount: 1, 
      quantity: 2,
      description: "ACER EK241YHBI (UM.QE1EE.H02) ACER 60CM 23.8' W, EK241YHBI Widescreen ,Screen Size 23.8-VA ; Ultra slim , LCD Monitor ; Full HD-1920 x 1080 (Aspect Ratio 16:9; Response 1 MS;Refresh Rate 100 Hz; Colour Support 16.7 million ; Contrast Ratio 100,000,000:1; Viewing Angle 178° (H), 178° (V)Brightness 200 cd/m²;Backlight LED ; Ports & Connectors HDMI®- VGA Port™; Colours BLACK ; include Hdmi cable.",
      url: "https://zoommer.ge/monitorebi/acer-ek241yhbi-um-qe1ee-h02-black-p37138" 
    },
    { 
      title: "Acer EK271HBI UM.HE1EE.H02 Black", 
      img: "https://s3.zoommer.ge/site/d592976d-71c5-4220-9b7f-7c2154be2e69_Thumb.jpeg", 
      price: 369, 
      id: 9, 
      brand: "Acer", 
      amount: 1, 
      quantity: 20,
      description: "Acer EK271HBI (UM.HE1EE.H02) ACER 69CM 27' W, EK271HBI ,Screen Size 27.0-VA ; Ultra slim , LCD Monitor ; Full HD-1920 x 1080 (Aspect Ratio 16:9; Response 1 MS;Refresh Rate 100 Hz; Colour Support 16.7 million ; Contrast Ratio 100,000,000:1; Viewing Angle 178° (H), 178° (V)Brightness 250 cd/m²;Backlight LED ; Ports & Connectors HDMI®- VGA ; Colours BLACK ; include Hdmi cable.",
      url: "https://zoommer.ge/monitorebi/acer-ek271hbi-um-he1ee-h02-black-p37140" 
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts, loggedIn, setLoggedIn, userName, setuserName, password, setPassword }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
