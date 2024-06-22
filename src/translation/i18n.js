import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      english: "English",
      georgian: "Georgian",
      home: "Home",
      about: "About us",
      contact: "Contact",
      language: "Language",
      search: "Search",
      cart: "Cart",
      login: "Log In",
      signup: "Sign Up",
      userName: "User Name",
      password: "Password",
      alreadyHaveAnAccount: "Already have an account?",
      noAccountYet: "No account yet?",
      sort: "Sort",
      filter: "Filter",
      priceIncreasing: "Price Increasing",
      priceDecreasing: "Price Decreasing",
      ourProducts: "Our Products",
      noprodsfound: "No products found",
      addToCart: "Add to Cart",
      maxReached: "Max Reached",
      remove: "Remove",
      total: "Total",
      emptycart: "There are no items in the Cart",
      itemAdded: "item has been added to cart",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
      thanksforcontacting: "Thank you for contacting us!",
      contactUs: "Contact Us",
      youcanalsocreateanaccountwith: "You can also create an account with ",
      loginwith: "Log in with",
      contactInformation: "Contact Information",
      followUs: "Follow Us",
      address: "Address",
      phone: "Phone",
      newsletterSubscription: "Subscribe to the newsletter",
      profile: "Profile",
      logout: "Log Out"
    }
  },
  ge: {
    translation: {
      english: "ინგლისური",
      georgian: "ქართული",
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      contact: "კონტაქტი",
      language: "ენა",
      search: "ძიება",
      cart: "კალათა",
      login: "შესვლა",
      signup: "რეგისტრაცია",
      userName: "მომხმარებლის სახელი",
      password: "პაროლი",
      alreadyHaveAnAccount: "გაქვთ უკვე აქაუნთი?",
      noAccountYet: "არ გაქვთ ჯერ აქაუნთი?",
      sort: "სორტირება",
      filter: "ფილტრი",
      priceIncreasing: "ფასი ზრდადობით",
      priceDecreasing: "ფასი კლებადობით",
      ourProducts: "ჩვენი პროდუქტები",
      noprodsfound: "პროდუქტები არ მოიპოვება",
      addToCart: "კალათაში დამატება",
      maxReached: "მაქსიმალური",
      remove: "წაშლა",
      total: "მთელი",
      emptycart: "კალათა ცარიელია",
      itemAdded: "ნივთი კალათაში ჩაემატა",
      name: "სახელი",
      email: "მეილი",
      message: "მესიჯი",
      submit: "გაგზავნა",
      thanksforcontacting: "მადლობა დაკონტაქტებისთვის",
      contactUs: "დაგვეკონტაქტეთ",
      youcanalsocreateanaccountwith: "ასევე შეგიძლიათ აქაუნთი შექმნათ: ",
      loginwith: "შედი: ",
      contactInformation: "საკონტაქტო ინფორმაცია",
      followUs: "დაგვაფოლოვეთ",
      address: "მისამართი",
      phone: "ტელეფონი",
      newsletterSubscription: "გამოიწერეთ სიახლეები",
      profile: "პროფილი",
      logout: "გამოსვლა"
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
