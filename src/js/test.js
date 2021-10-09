// setInterval(function() {
//   // add gio hang
//   if (document.getElementById('add-to-cart-button')) {
//     document.getElementById('add-to-cart-button').click();
//   }

//   // thanh toan
//   if (window.location.href.includes('huc') && document.getElementById('hlb-ptc-btn-native')) {
//     document.getElementById('hlb-ptc-btn-native').click();
//   }
//   // giao hang
//   var getElement4 = null;
//   [...document.getElementsByClassName('a-declarative')].forEach(function(item) {
//     if (item && item.href && item.href.includes('www.amazon.com/gp/buy/addressselect/handlers/continue.html/ref=ox_shipaddress_ship_to_this_1')) {
//       getElement4 = item;
//       return;
//     }
//   });
//   if (getElement4) {
//     getElement4.click();
//   }

//   // giao hang 2
//   var getElement5 = document.getElementsByClassName('a-button-text')[0];
//   if (this.location.href.includes('/buy/shipoptionselect/handlers') && getElement5) {
//     getElement5.click();
//   }

//   if (window.location.href.includes('signin') && document.getElementById('signInSubmit')) {
//     document.getElementById('signInSubmit').click();
//   }

// }, 3000);

// //card 1
// setInterval(function() {
//   if (this.location.href.includes('buy/payselect/handlers') && document.getElementById('continue-top')) {
//     document.getElementById('continue-top').click();
//   }
// }, 4000);


// //nếu có đủ sẵn info
// setInterval(function() {
//   if (this.location.href.includes('buy/spc/handlers') && document.getElementById('placeYourOrder')) {
//     document.getElementById('placeYourOrder').click();
//   }
// }, 4000);


// //mã PO
// setInterval(function() {
//   // gp/huc
//   if (!this.location.href.includes('gp/huc') && document.getElementById('a-autoid-0')) {
//     document.getElementById('a-autoid-0').getElementsByTagName('span')[0].getElementsByTagName('input')[0].click();
//   }
// }, 4000);
// if ((this.location.href.includes('gp/buy') || this.location.href.includes('gp/cart')) && document.getElementById('a-autoid-0')) {
//   document.getElementById('cof-text-input-value-0').value = 'TEST';
//   try {
//     // setInterval(function() {
//     //   document.getElementById('a-autoid-0').getElementsByTagName('span')[0].getElementsByTagName('input')[0].click();
//     // }, 500);
//   } catch (e) {
//     alert('có lỗi xảy ra! rất tiếc');
//   }
// }



