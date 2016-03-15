jQuery(document).ready(function() { 
  
   function niceStoreName(str) {
     var names={};
     names["amazon"]="Amazon";
     names["binu"]="biNu";
     names["getjar"]="GetJar";
     names["google"]="Google";
     names["opera"]="Opera";
     names["safaricom"]="Safari";
     names["imimobile"]="IMImobile";
     names["vodacom"]="Vodacom";

     var niceName=str;
     if (names.hasOwnProperty(str)) {
        niceName=names[str];
     }
     return niceName;

   }

  function initJavaSelect() {
    //for an example of this in action, see http://innovation.bbg.gov/blog/bbgs-new-java-based-apps-are-built-for-very-low-end-or-feature-phones/
    entities = [{
        "value": "VOA",
        "display": "VOA News"
    }, {
        "value": "Alhurra",
        "display": "Alhurra TV"
    }, {
        "value": "Marti",
        "display": "Martí Noticias"
    }, {
        "value": "RFERL",
        "display": "Radio Free Europe/Radio Liberty"
    }, {
        "value": "RFA",
        "display": "Radio Free Asia"
    }];
  

    stores = ["binu", "opera", "getjar"];

    var links={};
    links["Alhurra"]={};
    links["Alhurra"]["binu"]={};
    links["Alhurra"]["getjar"]={};
    links["Alhurra"]["opera"]={};
    links["Alhurra"]["binu"]["multi"]="http://m.binu.com/alh/";
    links["Alhurra"]["getjar"]["multi"]="http://www.getjar.mobi/mobile/848171/-Alhurra-for-Java-Phones";
    links["Alhurra"]["opera"]["multi"]="http://java.apps.opera.com/en_us/alhurra_for_java_phones.html?dm=1&multi=1";

    links["Marti"]={};
    links["Marti"]["binu"]={};
    links["Marti"]["getjar"]={};
    links["Marti"]["opera"]={};
    links["Marti"]["binu"]["multi"]="http://m.binu.com/mar/";
    links["Marti"]["getjar"]["multi"]="http://www.getjar.mobi/mobile/848168/OCB-Mart-Noticias-for-Java-Phones";
    links["Marti"]["opera"]["multi"]="http://java.apps.opera.com/en_us/marti_noticias_for_java_phones.html?dm=1&multi=1";

    links["RFA"]={};
    links["RFA"]["binu"]={};
    links["RFA"]["getjar"]={};
    links["RFA"]["opera"]={};
    links["RFA"]["binu"]["multi"]="http://m.binu.com/rfa/";
    links["RFA"]["getjar"]["Chinese_Simplified"]="http://www.getjar.mobi/mobile/848351/RFA-Chinese-Simplified-for-Java-Phones";
    links["RFA"]["getjar"]["Chinese_Traditional"]="http://www.getjar.mobi/mobile/848352/RFA-Chinese-Traditional-for-Java-Phones";
    links["RFA"]["getjar"]["English"]="http://www.getjar.mobi/mobile/848349/RFA-English-for-Java-Phones";
    links["RFA"]["getjar"]["Korean"]="http://www.getjar.mobi/mobile/848353/RFA-Korean-for-Java-Phones";
    links["RFA"]["getjar"]["Vietnamese"]="http://www.getjar.mobi/mobile/848354/RFA-Vietnamese-for-Java-Phones";
    links["RFA"]["opera"]["multi"]="http://java.apps.opera.com/en_us/radio_free_asia_rfa_for_java_phones.html?dm=1&multi=1&set_lang=en";

    links["RFERL"]={};
    links["RFERL"]["binu"]={};
    links["RFERL"]["getjar"]={};
    links["RFERL"]["opera"]={};
    links["RFERL"]["binu"]["multi"]="http://m.binu.com/rfe/";
    links["RFERL"]["getjar"]["Belarusian"]="http://www.getjar.mobi/mobile/848341/RFERL-Belarusian-for-Java-Phones";
    links["RFERL"]["getjar"]["English"]="http://www.getjar.mobi/mobile/848340/RFERL-English-for-Java-Phones";
    links["RFERL"]["getjar"]["Persian"]="http://www.getjar.mobi/mobile/848343/RFERL-Persian-for-Java-Phones";
    links["RFERL"]["getjar"]["Russian"]="http://www.getjar.mobi/mobile/848344/RFERL-Russian-for-Java-Phones";
    links["RFERL"]["getjar"]["Ukrainian"]="http://www.getjar.mobi/mobile/848345/RFERL-Ukrainian-for-Java-Phones";
    links["RFERL"]["opera"]["multi"]="http://java.apps.opera.com/en_us/rferl_for_java_phones.html?dm=1&multi=1&set_lang=en";

    links["VOA"]={};
    links["VOA"]["binu"]={};
    links["VOA"]["getjar"]={};
    links["VOA"]["opera"]={};
    links["VOA"]["binu"]["multi"]="http://m.binu.com/voa/";     
    links["VOA"]["getjar"]["English"] = "http://www.getjar.mobi/mobile/847025/VOA-News-for-Java-Phones";
    links["VOA"]["getjar"]["French"] = "http://www.getjar.mobi/mobile/848176/VOA-French-for-Java-Phones";
    links["VOA"]["getjar"]["Indonesian"] = "http://www.getjar.mobi/mobile/848263/VOA-Indonesian-for-Java-Phones";
    links["VOA"]["getjar"]["Korean"] = "http://www.getjar.mobi/mobile/848269/VOA-Korean-for-Java-Phones";
    links["VOA"]["getjar"]["Persian"] = "http://www.getjar.mobi/mobile/848262/VOA-Persian-for-Java-Phones";
    links["VOA"]["getjar"]["Portuguese"] = "http://www.getjar.mobi/mobile/848253/VOA-Portuguese-for-Java-Phones";
    links["VOA"]["getjar"]["Russian"] = "http://www.getjar.mobi/mobile/848272/VOA-Russian-for-Java-Phones";
    links["VOA"]["getjar"]["Serbian"] = "http://www.getjar.mobi/mobile/848274/VOA-Serbian-for-Java-Phones";
    links["VOA"]["getjar"]["Spanish"] = "http://www.getjar.mobi/mobile/848260/VOA-Spanish-for-Java-Phones";
    links["VOA"]["getjar"]["Swahili"] = "http://www.getjar.mobi/mobile/848254/VOA-Swahili-for-Java-Phones";
    links["VOA"]["getjar"]["Thai"] = "http://www.getjar.mobi/mobile/848264/VOA-Thai-for-Java-Phones";
    links["VOA"]["getjar"]["Turkish"] = "http://www.getjar.mobi/mobile/848271/VOA-Turkish-for-Java-Phones";
    links["VOA"]["getjar"]["Ukrainian"] = "http://www.getjar.mobi/mobile/848273/VOA-Ukrainian-for-Java-Phones";
    links["VOA"]["getjar"]["Vietnamese"] = "http://www.getjar.mobi/mobile/848268/VOA-Vietnamese-for-Java-Phones";
    links["VOA"]["getjar"]["Amharic"] = "http://www.getjar.mobi/mobile/848255/VOA-Amharic-for-Java-Phones";
    links["VOA"]["getjar"]["Chinese Simplified"] = "http://www.getjar.mobi/mobile/848265/VOA-Chinese-Simplified-for-Java-Phones";
    links["VOA"]["getjar"]["Chinese Traditional"] = "http://www.getjar.mobi/mobile/848266/VOA-Chinese-Traditional-for-Java-Phones";
    links["VOA"]["opera"]["multi"]="http://java.apps.opera.com/en_us/voa_news_for_java_phones.html?dm=1&multi=1&set_lang=en";

    /*** Populate the entity selector ****/
    var str = "";
    for (var i = 0; i < entities.length; i++) {
        str += "<option value=" + entities[i].value + ">" + entities[i].display + "</option>";
    }
    jQuery("#appSelect-java select[name=entity]").append(str);

    /*** Populate the store selector ****/
    str="";
    for (var i = 0; i < stores.length; i++) {
        str += "<option value=" + stores[i] + ">" + niceStoreName(stores[i]) + "</option>";
    }
    jQuery("#appSelect-java select[name=store]").append(str);    
    jQuery("#stores").hide();

    

    /*** Show the form (we keep it hidden until it has data) ****/
    jQuery("#appSelect-java").css("display", "block");

    function refreshLanguages() {
        jQuery("select[name=language]").empty();
        var selectedEntity= jQuery("select[name=entity]").val();
        var selectedStore= jQuery("select[name=store]").val();
        var languages = links[selectedEntity][selectedStore];

        var str = '<option value="" disabled selected>Select a language</option>';
        var hasMulti=false;
        for (var key in languages) {
            if (languages.hasOwnProperty(key)) {
                if (key == "multi") {
                    hasMulti=true;
                } else {
                    str += "<option value=" + key + ">" + key + "</option>";
                }
            }
        }

        jQuery("select[name=language]").append(str);    
        if (!hasMulti) {
            jQuery("#languages").show();
            jQuery("select[name=language]").prop('selectedIndex',0);
            jQuery("input[name=btnGo]").hide();
        } else {

            jQuery("#languages").hide();
            jQuery("select[name=language]").prop('selectedIndex',1);
            jQuery("input[name=btnGo]").show();
        }
    }

    /*** when entity is changed, clear the store selection and remove language options***/
    jQuery("select[name=entity]").change(function() {
        var newEntity = jQuery(this).val();
        jQuery("#appSelect-java select[name=store]").prop('selectedIndex',0);
        jQuery("#appSelect-java select[name=language]").empty();
        jQuery("#languages").hide();
        jQuery("input[name=btnGo]").hide();
        jQuery("#stores").show();

    })

    /*** when store is changed, fill in the languages ***/
    jQuery("select[name=store]").change(function() {
        var storeValue = jQuery("select[name=store]").val();
        if (storeValue != "") {
            refreshLanguages();
        } else {
            jQuery("#languages").hide();
            jQuery("input[name=btnGo]").hide();
        }
    })

    jQuery("select[name=language]").change(function() {
        jQuery("input[name=btnGo]").show();
    });

    jQuery("input[name=btnGo]").click(function() {
        var entityValue = jQuery("select[name=entity]").val();
        var storeValue = jQuery("select[name=store]").val();
        var languageValue = jQuery("select[name=language] option:selected").text();
        var targetUrl = "";
        if (links[entityValue][storeValue].hasOwnProperty("multi")) {
            targetUrl=links[entityValue][storeValue]["multi"];
        } else {
            targetUrl=links[entityValue][storeValue][languageValue];
        }
        if (targetUrl != "") {
            window.open(targetUrl, '_blank');
        }
    });

    jQuery("#languages").hide();
    jQuery("input[name=btnGo]").hide();

  }

  function initSmartSelect() {

  }

  function initSawaSelect() {

    var osList=["iOS","Android","Java"]
    var javaStores = ["binu", "opera", "getjar"];
    var androidStores=["amazon","getjar","google","opera"];
    
    var iOSLink="https://itunes.apple.com/app/radyw-swa-radio-sawa/id886220964?ls=1&mt=8";

    var str = "";

    var links={};

    function fillStores(storeType) {
        var stores=(storeType=="Java") ? javaStores : androidStores;
         /*** Populate the store selector ****/
        str = '<option value="" disabled selected>Select a store</option>';
        for (var i = 0; i < stores.length; i++) {
            str += "<option value=" + stores[i] + ">" + niceStoreName(stores[i]) + "</option>";
        }
        jQuery("select[name=store]").empty();
        jQuery("select[name=store]").append(str);    
        
    }


    links["Java"]={};
    links["Java"]["binu"]={};
    links["Java"]["getjar"]={};
    links["Java"]["opera"]={};
    links["Java"]["binu"]["multi"]="http://m.binu.com/sawa/";
    links["Java"]["getjar"]["multi"]="http://www.getjar.mobi/mobile/851300/-Radio-Sawa-for-Java-Phones";
    links["Java"]["opera"]["multi"]="http://java.apps.opera.com/en_us/radio_sawa_for_java_phones.html?pm=1&multi=1";

    links["Android"]={}
    links["Android"]["amazon"]={}
    links["Android"]["getjar"]={}
    links["Android"]["google"]={}
    links["Android"]["opera"]={}

    links["Android"]["amazon"]["multi"]="http://www.amazon.com/gp/mas/dl/android?p=com.bbg.radiosawa";
    links["Android"]["google"]["multi"]="https://play.google.com/store/apps/details?id=com.bbg.radiosawa";
    links["Android"]["opera"]["multi"]="http://apps.opera.com/en_us/radio_sawa_r9511.html?dm=1&multi=1";
    
    links["Android"]["getjar"]["Arabic"] = "http://www.getjar.mobi/mobile/851300/-Radio-Sawa-for-Java-Phones";
    links["Android"]["getjar"]["English"] = "http://www.getjar.mobi/mobile/821090/Radio-Sawa";

    /*** Populate the entity selector ****/
    str="";
    for (var i = 0; i < osList.length; i++) {
        str += "<option value=" + osList[i] + ">" + osList[i] + "</option>";
    }
    jQuery("select[name=os]").append(str);

    jQuery("#stores").hide();   

    /*** Show the form (we keep it hidden until it has data) ****/
    jQuery("#appSelect-sawa").css("display", "block");

    function refreshLanguages() {
        jQuery("select[name=language]").empty();
        var selectedOS= jQuery("select[name=os]").val();
        var selectedStore= jQuery("select[name=store]").val();
        var languages = links[selectedOS][selectedStore];

        var str = '<option value="" disabled selected>Select a language</option>';
        var hasMulti=false;
        for (var key in languages) {
            if (languages.hasOwnProperty(key)) {
                if (key == "multi") {
                    hasMulti=true;
                } else {
                    str += "<option value=" + key + ">" + key + "</option>";
                }
            }
        }
        jQuery("select[name=language]").append(str);    
        if (!hasMulti) {
            jQuery("#languages").show();
            jQuery("input[name=btnGo]").hide();
        } else {
            jQuery("#languages").hide();
            jQuery("select[name=language]").prop('selectedIndex',1);
            jQuery("input[name=btnGo]").show();
        }
    }

    /*** when entity is changed, clear the store selection and remove language options***/
    jQuery("select[name=os]").change(function() {
        var newOS = jQuery(this).val();
        jQuery("#languages").hide();
        
        if (newOS == "iOS") {
            jQuery("input[name=btnGo]").show();
            jQuery("#stores").hide();
        } else if (newOS == "") {
            jQuery("#stores").hide();   
            jQuery("input[name=btnGo]").hide(); 
        } else {
            jQuery("input[name=btnGo]").hide(); 
            
            fillStores(newOS);

            jQuery("#stores").show(); 
        }
    })

    /*** when store is changed, fill in the languages ***/
    jQuery("select[name=store]").change(function() {
        var storeValue = jQuery("select[name=store]").val();
        if (storeValue != "") {
            refreshLanguages();
        } else {
            jQuery("#languages").hide();
            jQuery("input[name=btnGo]").hide();
        }
    })

    jQuery("select[name=language]").change(function() {
        jQuery("input[name=btnGo]").show();
    });

    jQuery("input[name=btnGo]").click(function() {
        var osValue = jQuery("select[name=os]").val();
        var storeValue = jQuery("select[name=store]").val();
        var languageValue = jQuery("select[name=language] option:selected").text();
        var targetUrl = "";

        if (osValue=="iOS") {
            targetUrl=iOSLink;
        } else {
            if (links[osValue][storeValue].hasOwnProperty("multi")) {
                targetUrl=links[osValue][storeValue]["multi"];
            } else {
                targetUrl=links[osValue][storeValue][languageValue];
            }
        }

        if (targetUrl != "") {
            window.open(targetUrl, '_blank');
        }
    });

    jQuery("#languages").hide();
    jQuery("input[name=btnGo]").hide();
}

  function initStreamerSelect() {
    var osList=["iOS","Android"]
    var androidStores=["amazon","getjar","google","imimobile","opera","safaricom","vodacom"];
    
    var iOSLink="https://itunes.apple.com/app/voa-mobile-streamer/id1000757271?ls=1&mt=8+";

    var str = "";

    var links={};

    function fillStores() {
        var stores=androidStores;
         /*** Populate the store selector ****/
        str = '<option value="" disabled selected>Select a store</option>';
        for (var i = 0; i < stores.length; i++) {
            str += "<option value=" + stores[i] + ">" + niceStoreName(stores[i]) + "</option>";
        }
        jQuery("select[name=store]").empty();
        jQuery("select[name=store]").append(str);    
        
    }

    links["Android"]={}
    links["Android"]["amazon"]={}
    links["Android"]["getjar"]={}
    links["Android"]["google"]={}
    links["Android"]["imimobile"]={}
    links["Android"]["opera"]={}
    links["Android"]["safaricom"]={}
    links["Android"]["vodacom"]={}

    links["Android"]["amazon"]["multi"]="http://www.amazon.com/gp/mas/dl/android?p=com.audionowdigital.player.voa";
    links["Android"]["google"]["multi"]="https://play.google.com/store/apps/details?id=com.audionowdigital.player.voa";
    links["Android"]["opera"]["multi"]="http://apps.opera.com/en_us/voa_mobile_streamer.html?pm=1&multi=1";
    
    links["Android"]["getjar"]["Amharic"] = "www.getjar.mobi/mobile/856571/VOA-Amharic-Mobile-Streamer";
    links["Android"]["getjar"]["Bangla"] = "www.getjar.mobi/mobile/856573/VOA-Bengali-Mobile-Streamer";
    links["Android"]["getjar"]["Burmese"] = "www.getjar.mobi/mobile/856574/VOA-Burmese-Mobile-Streamer";
    links["Android"]["getjar"]["Chinese Simplified"] = "www.getjar.mobi/mobile/856575/VOA-Chinese-Simplified-Mobile-Streamer";
    links["Android"]["getjar"]["Chinese Traditional"] = "www.getjar.mobi/mobile/856577/VOA-Chinese-Traditional-Mobile-Streamer";
    links["Android"]["getjar"]["English"] = "www.getjar.mobi/mobile/856570/VOA-Mobile-Streamer";
    links["Android"]["getjar"]["French"] = "www.getjar.mobi/mobile/856578/VOA-French-Mobile-Streamer";
    links["Android"]["getjar"]["Indonesian"] = "www.getjar.mobi/mobile/856579/VOA-Indonesian-Mobile-Streamer";
    links["Android"]["getjar"]["Khmer"] = "www.getjar.mobi/mobile/856582/VOA-Khmer-Mobile-Streamer";
    links["Android"]["getjar"]["Korean"] = "www.getjar.mobi/mobile/856583/VOA-Korean-Mobile-Streamer";
    links["Android"]["getjar"]["Lao"] = "www.getjar.mobi/mobile/856585/VOA-Lao-Mobile-Streamer";
    links["Android"]["getjar"]["Portuguese"] = "www.getjar.mobi/mobile/856587/VOA-Portuguese-Mobile-Streamer";
    links["Android"]["getjar"]["Spanish"] = "www.getjar.mobi/mobile/856588/VOA-Spanish-Mobile-Streamer";
    links["Android"]["getjar"]["Swahili"] = "www.getjar.mobi/mobile/856590/VOA-Swahili-Mobile-Streamer";
    links["Android"]["getjar"]["Thai"] = "www.getjar.mobi/mobile/856591/VOA-Thai-Mobile-Streamer";
    links["Android"]["getjar"]["Vietnamese"] = "www.getjar.mobi/mobile/856592/VOA-Vietnamese-Mobile-Streamer";

    links["Android"]["imimobile"]["English (SA)"] = "http://vfsa-mstore.imimobile.co/Defaultx.aspx?mnu=prev&ctype=AP&cc=147533";
    links["Android"]["imimobile"]["Swahili (SA)"] = "http://vfsa-mstore.imimobile.co/Defaultx.aspx?mnu=prev&ctype=AP&cc=147534";

    links["Android"]["safaricom"]["Swahili"] = "http://appstore.safaricom.com/web/shop/details.aspx?cid=147534&ct=AP";
    links["Android"]["safaricom"]["English"] = "http://appstore.safaricom.com/web/shop/details.aspx?cid=147533&ct=AP";
    links["Android"]["safaricom"]["English (Kenya)"] = "http://appstore.safaricom.com/Portal/Defaultx.aspx?mnu=prev&ctype=AP&cc=147533";
    links["Android"]["safaricom"]["Swahili (Kenya)"] = "http://appstore.safaricom.com/Portal/Defaultx.aspx?mnu=prev&ctype=AP&cc=147534";

    links["Android"]["vodacom"]["English (Tanzania)"] = "http://appstore.vodacom.co.tz/Defaultx.aspx?mnu=prev&ctype=AP&cc=147533";
    links["Android"]["vodacom"]["Swahili (Tanzania)"] = "http://appstore.vodacom.co.tz/Defaultx.aspx?mnu=prev&ctype=AP&cc=147534";

    /*** Populate the entity selector ****/
    str="";
    for (var i = 0; i < osList.length; i++) {
        str += "<option value=" + osList[i] + ">" + osList[i] + "</option>";
    }
    jQuery("select[name=os]").append(str);

    jQuery("#stores").hide();   

    /*** Show the form (we keep it hidden until it has data) ****/
    jQuery("#appSelect-streamer").css("display", "block");

    function refreshLanguages() {
        jQuery("select[name=language]").empty();
        var selectedOS= jQuery("select[name=os]").val();
        var selectedStore= jQuery("select[name=store]").val();
        var languages = links[selectedOS][selectedStore];

        var str = '<option value="" disabled selected>Select a language</option>';
        var hasMulti=false;
        for (var key in languages) {
            if (languages.hasOwnProperty(key)) {
                if (key == "multi") {
                    hasMulti=true;
                } else {
                    str += "<option value=" + key + ">" + key + "</option>";
                }
            }
        }
        jQuery("select[name=language]").append(str);    
        if (!hasMulti) {
            jQuery("#languages").show();
            jQuery("input[name=btnGo]").hide();
        } else {
            jQuery("#languages").hide();
            jQuery("select[name=language]").prop('selectedIndex',1);
            jQuery("input[name=btnGo]").show();
        }
    }

    /*** when entity is changed, clear the store selection and remove language options***/
    jQuery("select[name=os]").change(function() {
        var newOS = jQuery(this).val();
        jQuery("#appSelect-streamer select[name=store]").prop('selectedIndex',0);
        jQuery("#appSelect-streamer select[name=language]").empty();
        jQuery("#languages").hide();
        
        if (newOS == "iOS") {
            jQuery("input[name=btnGo]").show();
            jQuery("#stores").hide();
        } else if (newOS == "") {
            jQuery("#stores").hide();   
            jQuery("input[name=btnGo]").hide(); 
        } else {
            jQuery("input[name=btnGo]").hide(); 
            
            fillStores(newOS);

            jQuery("#stores").show(); 
        }
    })

    /*** when store is changed, fill in the languages ***/
    jQuery("select[name=store]").change(function() {
        var storeValue = jQuery("select[name=store]").val();
        if (storeValue != "") {
            refreshLanguages();
        } else {
            jQuery("#languages").hide();
            jQuery("input[name=btnGo]").hide();
        }
    })

    jQuery("select[name=language]").change(function() {
        jQuery("input[name=btnGo]").show();
    });

    jQuery("input[name=btnGo]").click(function() {
        var osValue = jQuery("select[name=os]").val();
        var storeValue = jQuery("select[name=store]").val();
        var languageValue = jQuery("select[name=language] option:selected").text();
        var targetUrl = "";

        if (osValue=="iOS") {
            targetUrl=iOSLink;
        } else {
            if (links[osValue][storeValue].hasOwnProperty("multi")) {
                targetUrl=links[osValue][storeValue]["multi"];
            } else {
                targetUrl=links[osValue][storeValue][languageValue];
            }
        }

        if (targetUrl != "") {
            window.open(targetUrl, '_blank');
        }
    });

    jQuery("#languages").hide();
    jQuery("input[name=btnGo]").hide();

  }

  if (jQuery("#appSelect-java").length) {
    initJavaSelect();
  }
  if (jQuery("#appSelect-sawa").length) {
    initSawaSelect();
  }
  if (jQuery("#appSelect-streamer").length) {
    initStreamerSelect();
  }

});