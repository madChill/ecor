import React from 'react';
import { render } from 'react-dom';

//import logo from '../assets/img/logo.svg';
import classes from './index.css';

const Popup = () => {
  console.log(11);
  console.log(classes, "===classes===");
  return (
    <div className="App">
      <div className={classes.atPanelAsideMain}>
        <div className="at-widgets-panel__arrow-wrapper"><svg width={6} height={18} viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l4 8-4 8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
        </div>
        <div className={classes.atWidgetsPanel} >
          <div id="list-items-selected" className={classes.atWidgetsHistoryItems}>
            <a href="https://www.aliexpress.com/item/1005003203837551.html?af=1015756&afref=&cv=47843&dp=5d323d6d9c2919e9724d2a763d6caa7a&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=700eec5b6d3a4357b936f73396160170-1631893954618-06397-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=700eec5b6d3a4357b936f73396160170-1631893954618-06397-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280"
              className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer">
              <img alt="" src="file:///C:/Users/congnh2/Downloads/White-Smile-Face-Graphic-Short-Sleeve-Social-Men-Shirts-2021-New-Arrival-Print-Camisa-Masculina-Loose.webp" />
              <div className="at-widgets-history-mask" />
              <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005001372935613.html" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hdd12f025c09c46a1aac0bb4e01f95618n/Bridgewater-Summer-Men-s-Print-Shirts-Hong-Kong-Style-Trendy-Student-All-Match-High-Quality-Comfortable.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280"
              className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005003033979535.html?aff_fcid=f332b75401104bb18a1c57df7f55877d-1629474658163-08680-_ePNSNV&aff_fsk=_ePNSNV&algo_exp_id=fc4eb052-0e67-458b-b275-2ffe719ffb41-43&algo_pvid=fc4eb052-0e67-458b-b275-2ffe719ffb41&spm=a2g0o.productlist.0.0.ba992095y2HN2K&af=1015756&afref=&cv=47843&dp=546a427dc8228052b022eb91920041f0&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=ea42e20c9a054aa2ab3c6b4febbde622-1631803495192-00545-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hd8d4e27c3c1c4b8c87134a83420c0668q/Weekeep-Vintage-Solid-Pleated-Skirt-With-Shorts-Women-High-Waist-Loose-Skirts-Summer-Harajuku-Korean-Casual.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005002262401876.html?_t=gps-id%3ApcDetailBottomMoreOtherSeller%2Cscm-url%3A1007.14452.226710.0%2Cpvid%3Ab3639bf3-8f25-4b1b-bd1c-b9fd13e3ff40%2Ctpp_buckets%3A4452%230%23226710%230_4452%233474%2316498%23638_4452%234862%2324463%23579_4452%233098%239599%23145_4452%235108%2323442%23978_4452%233564%2316062%23146_21387%230%23233228%230_24525%230%23239210%237&aff_fcid=c15badd324aa4609a2d4f1cfcf3d7fdc-1629537653773-04420-_ePNSNV&aff_fsk=_ePNSNV&gps-id=pcDetailBottomMoreOtherSeller&pvid=b3639bf3-8f25-4b1b-bd1c-b9fd13e3ff40&scm=1007.14452.226710.0&scm-url=1007.14452.226710.0&scm_id=1007.14452.226710.0&af=1015756&afref=&cv=47843&dp=0d42aed3b77beb82bdaa50894398e1d2&mall_affr=pr3&utm_campaign=1015756&utm_content=47843&utm_medium=cpa&utm_source=admitad&aff_fcid=794d755c691e44f2bdcad6330ca8f69b-1631803452907-00787-_ePNSNV&aff_fsk=_ePNSNV&aff_platform=portals-tool&sk=_ePNSNV&aff_trace_key=794d755c691e44f2bdcad6330ca8f69b-1631803452907-00787-_ePNSNV&terminal_id=eeada1e4d35d4d9ea59b2d5407617280" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/H561b2559ca7f442d89e6aa7b7063cfb1k/ATSUNNY-2021-Hip-Hop-Streetwear-Vintage-Style-Harajuku-Knitting-Sweater-Anime-Girl-Knitted-Death-Note-Sweater.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005001372935613.html" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hdd12f025c09c46a1aac0bb4e01f95618n/Bridgewater-Summer-Men-s-Print-Shirts-Hong-Kong-Style-Trendy-Student-All-Match-High-Quality-Comfortable.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005001372935613.html" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hdd12f025c09c46a1aac0bb4e01f95618n/Bridgewater-Summer-Men-s-Print-Shirts-Hong-Kong-Style-Trendy-Student-All-Match-High-Quality-Comfortable.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005001372935613.html" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hdd12f025c09c46a1aac0bb4e01f95618n/Bridgewater-Summer-Men-s-Print-Shirts-Hong-Kong-Style-Trendy-Student-All-Match-High-Quality-Comfortable.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005001372935613.html" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hdd12f025c09c46a1aac0bb4e01f95618n/Bridgewater-Summer-Men-s-Print-Shirts-Hong-Kong-Style-Trendy-Student-All-Match-High-Quality-Comfortable.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
            <a href="https://www.aliexpress.com/item/1005001372935613.html" className={classes.atWidgetsHistoryItem} target="_blank" rel="noreferrer"><img alt="" src="https://ae01.alicdn.com/kf/Hdd12f025c09c46a1aac0bb4e01f95618n/Bridgewater-Summer-Men-s-Print-Shirts-Hong-Kong-Style-Trendy-Student-All-Match-High-Quality-Comfortable.jpg" />
              <div className="at-widgets-history-mask" /><svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widgets-history__link">
                <path d="M.5 1.5V1a.5.5 0 0 0-.5.5h.5zm0 6H0a.5.5 0 0 0 .5.5v-.5zm6 0V8a.5.5 0 0 0 .5-.5h-.5zm.5-2a.5.5 0 0 0-1 0h1zM2.5 2a.5.5 0 0 0 0-1v1zm.646 2.146a.5.5 0 1 0 .708.708l-.708-.708zM7.5.5H8a.5.5 0 0 0-.5-.5v.5zm-3-.5a.5.5 0 0 0 0 1V0zM7 3.5a.5.5 0 0 0 1 0H7zm-7-2v6h1v-6H0zM.5 8h6V7h-6v1zM7 7.5v-2H6v2h1zM.5 2h2V1h-2v1zm3.354 2.854l4-4-.708-.708-4 4 .708.708zM7.5 0h-3v1h3V0zM7 .5v3h1v-3H7z" fill="#fff" />
              </svg>
            </a>
          </div>
          <div className={classes.ecor2}>
            <div className={classes.atWidgetAllHistory}>
              {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="at-widget-all-history__icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.08 1.718a7.425 7.425 0 1 1-3.318 12.975.675.675 0 0 1 .867-1.035A6.075 6.075 0 1 0 3.454 9h1.842c.233 0 .35.283.185.448l-2.33 2.33a.525.525 0 0 1-.743 0l-2.33-2.33A.262.262 0 0 1 .262 9h1.841a7.425 7.425 0 0 1 5.977-7.282zm1.224 3.907c.373 0 .675.302.675.675v2.768l1.923 1.153a.675.675 0 0 1-.695 1.158l-2.25-1.35a.675.675 0 0 1-.328-.579V6.3c0-.373.303-.675.675-.675z">
                            </path>
                        </svg> */}
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="at-widget-all-history__icon" data-spm-anchor-id="a2g0o.detail.0.i7.67096481kwQWpj">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.08 1.718a7.425 7.425 0 1 1-3.318 12.975.675.675 0 0 1 .867-1.035A6.075 6.075 0 1 0 3.454 9h1.842c.233 0 .35.283.185.448l-2.33 2.33a.525.525 0 0 1-.743 0l-2.33-2.33A.262.262 0 0 1 .262 9h1.841a7.425 7.425 0 0 1 5.977-7.282zm1.224 3.907c.373 0 .675.302.675.675v2.768l1.923 1.153a.675.675 0 0 1-.695 1.158l-2.25-1.35a.675.675 0 0 1-.328-.579V6.3c0-.373.303-.675.675-.675z">
                </path>
              </svg>
              <button className={ classes.buyNoWrap, "next-btn next-large"} >
                <p>ADD</p>
              </button>
              <button className={classes.buyNowWrapSync}>
                <p style={{whiteSpace: 'break-spaces'}}>SYNC to Admin</p>
              </button>
            </div>
          </div>
        </div>
        <div className={classes.ecor3} />
      </div>
    </div>
  );
};
export default Popup;

render(<Popup />, window.document.querySelector('#root-react'));
