// 3...ПРОДОВЖЕННЯ... Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час
// відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let sessionsJSON = localStorage.getItem('sessions');
let dateTimes = JSON.parse(sessionsJSON);
console.log(dateTimes);
let divWrapData = document.createElement('div');
divWrapData.classList.add('data-wrapper');
dateTimes.forEach((dateTime) => {
    let div = document.createElement('div');
    div.innerText = `${dateTime.date}  
      
     ${dateTime.time}`;
    div.style.border = '2px solid #a18c0d';
    divWrapData.appendChild(div);
    });
document.body.appendChild(divWrapData);

//  4. зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

        //    https://www.pexels.com/search/cosmetic%20product/
        //    let cardsArr = [...document.getElementsByClassName('BreakpointGrid_item__RSMyf')];
        //    console.log(cardsArr);
        //    let links = [];
        //    let arr = cardsArr.map( card => {
        //        // console.log(card);
        //        links.push({
        //            img:  card.querySelector('img').src,
        //            src:  card.querySelector('img').alt,
        //        })
        //    });
        //    console.log(links);

let imgProductsArray = [
    {
        "img": "https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman Applying Lotion on Hand Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140908/pexels-photo-8140908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Dropper With Liquid Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4938449/pexels-photo-4938449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding a Dropper of Brown Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7795849/pexels-photo-7795849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Amber Dropper on Brown Textile Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797735/pexels-photo-7797735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Bottle with a Dropper Stock Photo"
    },
    {
        "img": "https://media.istockphoto.com/id/1289220585/photo/woman-applying-moisturiser-on-face-during-morning-routine.jpg?b=1&s=612x612&w=0&k=20&c=l2q4ovY7XMcckkeyueXE7FbCKVcdsVB_oPx_ErzhgIc=",
        "src": "Free stock photo of beauty care, beauty products, beauty regimen Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140899/pexels-photo-8140899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Cream In White Tube Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7608081/pexels-photo-7608081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Bath Essentials on a Table Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796453/pexels-photo-7796453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Serum Glass Bottle on a Glass Surface Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8131589/pexels-photo-8131589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Skin Care Cream In White Tube  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6925478/pexels-photo-6925478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Person Holding White Cream in White Plastic Container Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8605912/pexels-photo-8605912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-Up Shot of a Beauty Product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7795451/pexels-photo-7795451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Liquid in a Brown Bottle With Dropper Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6690221/pexels-photo-6690221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Top View of Bar Soap and Eucalyptus Leaves Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8131575/pexels-photo-8131575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Brown Spray Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8605908/pexels-photo-8605908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-Up Shot of a Beauty Product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796597/pexels-photo-7796597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Bottle with Dropper on White Surface Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/13347115/pexels-photo-13347115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-up of Woman Holding a Cosmetic Product in a Glass Container Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6800938/pexels-photo-6800938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Cosmetic Product with Drop Pipette Cap Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797450/pexels-photo-7797450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Bottle on Top of Dried Plants Stock Photo"
    },
    {
        "img": "https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?b=1&s=612x612&w=0&k=20&c=5pIU1QhI9LO2I2Z-b65bipXwArZuACWkq39CMjQKiHk=",
        "src": ""
    },
    {
        "img": "https://images.pexels.com/photos/6914613/pexels-photo-6914613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-up of a Pipette Lying on White Background Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796378/pexels-photo-7796378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Bottle with Oil and a Pipette Lying on a Mirror  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/19049367/pexels-photo-19049367/free-photo-of-a-tube-of-a-cosmetic-product-without-a-label.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Tube of a Cosmetic Product without a Label  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797527/pexels-photo-7797527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Bottle on Pink Surface Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6811020/pexels-photo-6811020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman Applying Cream on Her Face Beside a Sink Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796380/pexels-photo-7796380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Dropper and Glass Bottle on Round Mirror Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796460/pexels-photo-7796460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Bottle with Dropper Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797231/pexels-photo-7797231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Bottle with Green Dropper Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/9748715/pexels-photo-9748715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Black Bikini and Cosmetic Products on a Beach Sand Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8131581/pexels-photo-8131581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding Brown Glass Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797439/pexels-photo-7797439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Bottle on a Cream Surface Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4735938/pexels-photo-4735938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-up of Woman Holding a Serum in a Glass Bottle and a Pipette  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6417908/pexels-photo-6417908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free stock photo of beauty, beauty care, beauty product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8128692/pexels-photo-8128692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Blush On Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6811381/pexels-photo-6811381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman Applying Cream on Her Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796375/pexels-photo-7796375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Bottle with Oil and a Pipette Lying on a Mirror  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/10608366/pexels-photo-10608366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-Up Shot of a Person Holding a Cosmetic Product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/9748710/pexels-photo-9748710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Cosmetic Products on a Beach Sand  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/19049365/pexels-photo-19049365/free-photo-of-a-tube-of-a-cosmetic-product-without-a-label.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Tube of a Cosmetic Product without a Label  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/9748637/pexels-photo-9748637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Cosmetic Brand held by a Person  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/9957567/pexels-photo-9957567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-Up View of Pink Perfume Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/5205698/pexels-photo-5205698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Black Long Sleeve Robe and Head Towel Applying Cream on Her Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/3997353/pexels-photo-3997353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Black Long Sleeve Shirt and Blue Denim Jeans Sitting on Chair Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6811012/pexels-photo-6811012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman Applying Skin Care on Her Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4812636/pexels-photo-4812636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Man With White Powder on Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6800936/pexels-photo-6800936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Cosmetic Product over a Box Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796379/pexels-photo-7796379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding Brown Glass Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8903695/pexels-photo-8903695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Silver Spray Bottle on White Textile Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8131568/pexels-photo-8131568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Crop Photo Of Woman Holding Brown Glass Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/9774608/pexels-photo-9774608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman holding cosmetic container Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7608307/pexels-photo-7608307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Applying a Cream on Her Face while Looking at the Mirror Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140914/pexels-photo-8140914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Hand Cream Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8129896/pexels-photo-8129896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in White Tank Top Applying Blush On Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/5128271/pexels-photo-5128271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Applying Mascara Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6338257/pexels-photo-6338257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Person Holding a Cosmetic Face Mask with Flowers Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6728397/pexels-photo-6728397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-up of a Woman Holding a Bottle with a Cosmetic Product  Stock Photo"
    },
    // {
    //     "img": "https://images.pexels.com/photos/7588571/pexels-photo-7588571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "src": "Free Covering a Scar with Concealer Stock Photo"
    // },
    // {
    //     "img": "https://images.pexels.com/photos/8128060/pexels-photo-8128060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "src": "Free Clear Glass Bottle Of Tonic Stock Photo"
    // },
    {
        "img": "https://images.pexels.com/photos/8128062/pexels-photo-8128062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Bottle Of Tonic Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140907/pexels-photo-8140907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Purple Tank Top Using A Facial Roller Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6418017/pexels-photo-6418017.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free stock photo of anonymous, beauty care, beauty product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8989961/pexels-photo-8989961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Cleaning her Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140913/pexels-photo-8140913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Purple Tank Top Holding A Dropper With Liquid Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6417913/pexels-photo-6417913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free stock photo of adult, alluring, attractive Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796173/pexels-photo-7796173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Glass Bottle with a Pipette Lying on Fabric with Flowers Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140898/pexels-photo-8140898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding Brown Glass Bottle Of Serum Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8142200/pexels-photo-8142200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A White Cosmetic Mask Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140917/pexels-photo-8140917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Brown Glass Bottle Of Serum Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8946946/pexels-photo-8946946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Face Covered with Mud Mask Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8128059/pexels-photo-8128059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Clear Glass Bottle With White Label Stock Photo"
    },
    // {
    //     "img": "https://images.pexels.com/photos/8140902/pexels-photo-8140902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "src": "Free Woman Applying Cream On Face Stock Photo"
    // },
    {
        "img": "https://images.pexels.com/photos/7796465/pexels-photo-7796465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Glass Bottle on Top of a Round Mirror Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8946864/pexels-photo-8946864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman with Facial Cream on Her Cheek Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6417955/pexels-photo-6417955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free stock photo of beauty care, beauty products, beauty regimen Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797006/pexels-photo-7797006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Photo of Brown Bottle with Dropper Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140910/pexels-photo-8140910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Purple Tank Top Holding A Dropper With Liquid Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7795829/pexels-photo-7795829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Glass Bottle With Dropper on Rectangular Wooden Tray Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/5849420/pexels-photo-5849420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Beauty Products on the Floor Near a White Ceramic Bathtub Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7795814/pexels-photo-7795814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Dropper Glass Bottle on Linen Beside Lavender Stems Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796158/pexels-photo-7796158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Cosmetic Brown Glass Bottle on Wooden Tray Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8490228/pexels-photo-8490228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Oil in a Bottle with a Pipette and a Leaf  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7795845/pexels-photo-7795845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close Up Shot of Brown Glass Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8946878/pexels-photo-8946878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Wearing a Mud Mask Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8989956/pexels-photo-8989956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Using a Cosmetic Product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140903/pexels-photo-8140903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Purple Tank Top Applying Cream On Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796307/pexels-photo-7796307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Clear Glass Bottle With Dropper Near Round Mirror Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796457/pexels-photo-7796457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Clear Glass Bottle on a Round Mirror Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796592/pexels-photo-7796592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Clear Glass Bottle with Green Dropper Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8015487/pexels-photo-8015487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-up Photo of Cosmetic Products  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4620838/pexels-photo-4620838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Powder on White Ceramic Plate Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8131586/pexels-photo-8131586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding Brown Glass Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6954639/pexels-photo-6954639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Woman Holding a Perfume Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/14770374/pexels-photo-14770374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman Holding a Skincare Product  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796985/pexels-photo-7796985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Bottle with Dropper Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6417958/pexels-photo-6417958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free stock photo of beauty care, beauty products, beauty regimen Stock Photo"
    },
    {
        "img": "https://media.istockphoto.com/id/1015450734/photo/testers-of-different-lipsticks.jpg?b=1&s=612x612&w=0&k=20&c=pKwSpvSysWR0fLMK6bkhkp_E90cEhjLqDeAikjZD4jQ=",
        "src": "Free stock photo of beauty care, beauty products, beauty regimen Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8128072/pexels-photo-8128072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Cosmetic Product beside Crystals Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796225/pexels-photo-7796225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Close-up of a Glass Spray Bottle Standing on a Mirror  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8076167/pexels-photo-8076167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Young Woman with a Face Mask for Skin Care Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8789609/pexels-photo-8789609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Bottle of Perfume Over Cobblestones Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6945538/pexels-photo-6945538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Women With Facial Patches Under the Eyes Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7795767/pexels-photo-7795767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Glass Bottles on Round Wooden Tray  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4735934/pexels-photo-4735934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding a Small Round Bottle of White Cream  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796381/pexels-photo-7796381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Clear Bottle with Liquid Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/5128090/pexels-photo-5128090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Person Holding Black and Red Eyelash Brush Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6945563/pexels-photo-6945563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Women Wearing Bathrobes Indoors Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6682972/pexels-photo-6682972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Bar Soap on a White Table Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796318/pexels-photo-7796318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Clear Glass Bottle With Yellow Liquid Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7796451/pexels-photo-7796451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Brown Glass Bottle with Massage Oil  Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8990697/pexels-photo-8990697.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in White Shirt Holding Cosmetic Products Stock Photo"
    },
    {
        "img": "https://media.istockphoto.com/id/1306102673/photo/set-of-female-skin-care-products.jpg?b=1&s=612x612&w=0&k=20&c=vWHeqnvOQL-LErZQRP6_5gMzwrH8zUF1VWREn1Fb7-c=",
        "src": "Free stock photo of beauty care, beauty products, beauty regimen Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8140911/pexels-photo-8140911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman in Purple Tank Top Using A Facial Roller Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6690251/pexels-photo-6690251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Moisturizing Cream on a Container Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4812658/pexels-photo-4812658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Man in Brown Crew Neck T-shirt Holding Round Mirror Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4426558/pexels-photo-4426558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding Orange and Black Plastic Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/7797734/pexels-photo-7797734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Flatlay Photo of a Cosmetic Product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/4154194/pexels-photo-4154194.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Orange and Black Pump Bottle Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6945546/pexels-photo-6945546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Sisters Wearing Facial Patches  Stock Photo"
    },
    // {
    //     "img": "https://images.pexels.com/photos/6945554/pexels-photo-6945554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     "src": "Free Sisters Happy Times Together Stock Photo"
    // },
    {
        "img": "https://images.pexels.com/photos/6560346/pexels-photo-6560346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Woman Applying Cream on Her Face Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/11179661/pexels-photo-11179661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free A Curly-Haired Woman Holding a Beauty Product Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/8129909/pexels-photo-8129909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Holding A Lip Balm Stock Photo"
    },
    {
        "img": "https://images.pexels.com/photos/6811192/pexels-photo-6811192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "src": "Free Person Applying Cosmetic Product on Her Face While Looking at the Mirror Stock Photo"
    }
];

function addImages (min, max) {
    for (let i = min; i < max; i++) {
        let divImageWrap = document.createElement('div');
        divImageWrap.classList.add('wrapper');
        let img = document.createElement('img');
        img.src = imgProductsArray[i].img;
        divImageWrap.appendChild(img);
        imagesDiv.appendChild(divImageWrap);
    }
}
function addNewPage(min, max) {
    let j = 0;
    for (let i = min; i < max; i++) {
        let image = imgProductsArray[i];
        let images = document.getElementsByTagName('img');
        images[j].src = image.img;
        (image.img)?(images[j].src = image.img):null;
        j++;
    }
}
let min = 0;
let max = 10;
let imagesDiv = document.getElementById('images');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
    window.addEventListener('load', function (e){
        e.preventDefault();
         addImages(0, 10);
    });
next.addEventListener('click', function (e){
    e.preventDefault();
     if(min < (imgProductsArray.length - 10) &&  max < imgProductsArray.length ) {
         min += 10;
         max += 10;
         console.log(min, max);
         console.log(imgProductsArray.length);
        addNewPage(min, max);
    } else {
        return null;
    }
})
prev.addEventListener('click', function (e){
    e.preventDefault();
    if(min >= 0 && max >= 20) {
        min -= 10;
        max -= 10;
        addNewPage(min, max);
    } else {
        return  null;
    }
})
