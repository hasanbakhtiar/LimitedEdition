const infoData = "JavaScript";
const infoData1 = infoData.search("Script");
console.log(infoData1);


console.log();
// console.log(eval("infoData"));
// console.log(infoData.length);


// 1.JS`də dəyişkənlər üçün olan methodlar
//   1.1.lenght -> dəyişkənin içində olanların sayını göstərir.
//                 metn = "Salam";
//                 lenght.metn;
//   1.2.eval() -> mətn kimi yazılan yazıları js koduna çevirmək üçün istifadə olunur
//                 var qiymet1 = 10;
//                 var qiymet2 = 20;
//                 var netice = eval("qiymet1 + qiymet2");
//                 var netice1 = eval("10*40");
//                 function yoxlama(){
//                   document.write("Salam");
//                 }
//                 var setr = eval("yoxlama()");
//                 document.write(setr);
//   1.3.search()  -> Dəyişkən içərisində parametrik olaraq dəyəri axtarır və ilk uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
//             var metn = "JavaScript";
//             var netice = metn.search("Script"); bu formada yazılan zaman böyük və kiçik hərfə həssas formada olur.
//             var netice1 = metn.search(/script/i); bu formada yazılan zaman böyük və kiçik hərfə həssas formada olmur <<</script/--i-->>> hərfi vacibdir
//   1.4.slice() -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.
//   qeyd:başlanğıc parametrəsi bitiş parametrəsindən heç vaxt böyük ola bilməz.
//                 var melumat = "JavaScript is international language";
//                 document.write(melumat);

//                 var netice = melumat.slice(15) ->slice(15,25);
//                 document.write(netice);
//   1.5.substring() -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.(Parametr ->Başlanğıc və Bitiş)
//                     var metn = "JavaScript Programming Language";
//                     document.write(metn);
//                     var netice = metn.substring();
//                     document.write(netice);

//    substr()      -> Dəyişkənin içərisindəki məlumatları parametrlər ilə kopyalayır.(Parametr ->Başlanğıc və Bitiş(neçə simvol almaq istənilirsə onu qeyd edirik))
//    var netice = metn.substring(-15,10) mənfi olan zaman sağdan sola sayır

//   1.6.concat()   -> Bir dəyişkəni əsas sayaraq parametr hissəsinə yazılan dəyişkəni yenidən hazırlayır.
//               var misal = 1;
//               var misal1 = misal.concat() 
        
//   1.7.repeat()   -> dəyişkənin içindəki dəyəri parametrəyə yazılan say qədər çoxaldır
//             metn.repeat(100);
//   1.8.toString() -> dəyişkənin içindəki dəyəri mətinləşdirir.
//             metn.toString();
//   1.9.String()   -> dəyişkənin içindəki dəyəri mütləq mətinləşdirir.
//             String(metn);
//   1.10.Number()  -> dəyişkənin içindəki dəyəri mütləq rəqəmləşdirir
//   1.11.valueOf() ->
//   1.12.indexOf() ->Dəyişkən içərisində parametrik olaraq dəyəri axtarır və ilk uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
//             var metn = 'JavaScript'; -> böyük və kiçik hərf həssasdır.
//             document.write(metn);
//             var netice = metn.indexOf("Java");
//             var netice = metn.indexOf("Java",15);rəqəmdən sora harada varsa onu tapır.
//             qeyd: əgər məlumat orada yoxdursa -1 dəyəri alır.
//             document.write(netice);

//   lastIndexOf()  -> Dəyişkən içərisində parametrik olaraq dəyəri axtarır və son uyğun gələn dəyişkənin içindəki indis/index dəyəri göstərər.
//              var metn = 'JavaScript Java';
//             document.write(metn);
//             var netice = metn.LastIndexOf("Java",32);sonuncu "Java" sözünü tapır.Yazılan rəqəm sayı qədər olan hissəyə qədər axtarır.
//             document.write(netice);
//   1.13.startWith() -> hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin ƏVVƏLİNDƏ olub olmamasını Boolean(true/false) data tipi ilə göstərir 
//             var metn = "JavaScript superdir";
//             metn.startWith("JavaScript");
//        endsWith()  -> hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin SONUNDA olub olmamasını Boolean(true/false) data tipi ilə göstərir 
//             var metn = "JavaScript superdir";
//             metn.endsWith("superdir");
//   1.14.trim() ->Dəyişkənin içindəki əvvəlindəki və sonundakı boşluqları təmizləyir.(misal.trim())
//   1.15.includes() ->hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin içində olub olmamasını Boolean(true/false) data tipi ilə göstərir 
//   qeyd: böyük və kiçik hərfə həssasdır.
//             var metn = "JavaScript";
//             varr netice = metn.includes("Script"); //true 
//             varr netice = metn.includes("asdasfa"); //false
//   1.16.match() ->  hər hansı bir dəyəri methodun parametr hissəsinə daxil edərək dəyişkənin içərisində varsa o dəyərin özünü göstərər.
//       g - dəyişkənin içindəkilərin hamısını nəzərə alar -> metn.match(/Javascript/g);
//       i - böyük və kiçik hərf həssaslığını aradan qaldırar -> metn.match(/Javascript/i);
//       metn.match(/Javascript/gi); hər iki xüsusiyyət işləyər
//        var metn = "JavaScript superdir";
//        metn.match("JavaScript");
//   1.17.replace() ->  hər hansı bir dəyəri methodun birinci parametr hissəsinə daxil edərək dəyişkənin içərisində varsa ikinci parametrdə olan dəyəri birinci parametrdə qeyd olunan dəyərin yerində göstərir.
//         g - dəyişkənin içindəkilərin hamısını nəzərə alar -> metn.replace(/Javascript/g, "php");
//       i - böyük və kiçik hərf həssaslığını aradan qaldırar -> metn.repeat(/Javascript/i, "php");
//         var metn = "JavaScript";
//         document.write(metn.replace("JavaScript","php"));
//   1.18.split() -> dəyişkənin içindəki dəyəri array data tipinə çevirir və parametrik olaraq müdaxilələr edə bilir
//   birinci parametrdə qeyd oluanan hissə arrayın vergül qoyaraq ayırması tələb olunan hissədir.
//   qeyd: böyük və kiçik hərfə həssasdır.
//         var metn = "JavaScript dərsləri";
//         document.write(metn);
//         document.write(metn[2]);
        
//         var netice = metn.split("a",3); //2ci parametr limit parametridir
//         document.write(netice);

//         var netice = metn.split(" ",3); //2ci parametr limit parametridir
//         document.write(netice);

//         var netice = metn.split(" ");
//         document.write(netice[2]);
        
//   1.19.localCompare -> iki dəyişkənin içindəki dəyərləri parametrik olaraq unikod`a əsasən yəni browserə əsasən qarşılaşdırır.
//                       -1 :  birinci dəyişkənin dəyəri ikinci dəyişkənin dəyərindəndən ƏVVƏL gəlirsə
//                        0 :  birinci dəyişkənin dəyəri ikinci dəyişkənin dəyərinə bərabərsə
//                        1 :  birinci dəyişkənin dəyəri ikinci dəyişkənin dəyərindəndən SONRA gəlirsə
//                       var soz1 = "abc";
//                       var soz2 = "abd";
//                       var netice = soz1.localCompare(soz2);
//                       document.write(netice); 
//   1.20.charAt()        ->   dəyişkənin dəyərinin index nömrəsini parametr hissəsinə daxil etdikdə həmin index nömrəsində olan dəyəri göstərir.
//                         var metn = "JavaScript";
//                         document.write(metn.charAt(0));
//        charCodeAt()    -> dəyişkənin dəyərinin index nömrəsini parametr hissəsinə daxil etdikdə həmin dəyərin unicode`unu göstərir.
//                         var metn = "JavaScript";
//                         document.write(metn.charCodeAt(0));
//        fromCharCode()  -> methodun parametr hissəsinə unicodu daxil etdikdə onun hansı simvol olmasını göstərir.
//                         var metn = String.fromCharCode(57);
//                         document.write(metn);
//   1.21.encodeURI()     -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatına salır.
//                         var metn = "JavaScript";
//                         document.write(encodeURI(metn));
//        decodeURI()     -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatından çıxardır.
//                         var metn = "JavaScript";
//                         document.write(decodeURI(metn));                 
//   1.22.encodeURIComponent() -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatına salır.
//                         var metn = "JavaScript";
//                         document.write(encodeURIComponent(metn));
//        decodeURIComponent() -> dəyişkənin içində olan bütün dəyərləri UTF-8 formatından çıxardır.
//                         var metn = "JavaScript";
//                         document.write(decodeURIComponent(metn));
//   1.23.escape()   ->dəyişkənin içində olan bütün dəyərlərin xüsusi simvolları unicode formatına salır.
//                         //escape(metn);
//        unescape() ->dəyişkənin içində olan bütün dəyərlərin xüsusi simvolları unicode formatından çıxardır.
//                         //escape(metn);
//   1.24.toUpperCase() ->dəyişkənin içindəki mətnin hərflərini hamısını BÖYÜK hərf edir.
//                     metn.toUpperCase();
//        toLowerCase() ->dəyişkənin içindəki mətnin hərflərini hamısını KİÇİK hərf edir.
//                     metn.toLowerCase();
//   1.25.toLocaleUpperCase() -> dəyişkənin içindəki mətnin bütün simvollar daxil (UTF-8) hərflərini hamısını BÖYÜK hərf edir.
//                     metn.toLocaleUpperCase();
//        toLocaleLowerCase() -> dəyişkənin içindəki mətnin bütün simvollar daxil (UTF-8) hərflərini hamısını KİÇİK hərf edir.
//                     metn.toLocaleLowerCase();
//   1.26.sub() -> dəyişkənin dəyərini alt simvola çevirir.
//                     var element1 = "C";
//                     var element2 = "2";
//                     document.write(element1 + element2.sub());
//        sup() -> dəyişkənin dəyərini üst simvola çevirir.
//                     var element1 = "C";
//                     var element2 = "2";
//                     document.write(element1 + element2.sup());
//   1.27.big()    -> dəyişkənin dəyərinin fontunu BÖYÜK edir.
//                     metn.big();
//        small()  ->dəyişkənin dəyərinin fontunu KİÇİK edir.
//                     metn.small();
//   1.28.bold()     ->dəyişkənin dəyərinin fontunu bold(qalin) edir.
//                      metn.bold();
//        italics()  ->dəyişkənin dəyərinin fontunu italic edir.
//                      metn.italic();
//        strike()   ->dəyişkənin dəyərinin fontunu üstündən xətt çəkilmiş formaya salır.
//                      metn.strike();
//        fixed()    ->dəyişkənin dəyərinin fontunu teletype fontlu vəziyyətə salır.
//                      metn.fixed();
//   1.29.fontcolor() ->dəyişkənin dəyərini rəngləndirir.//parametrik
//                     var reng = "JavaScript";
//                     document.write(reng.fontcolor("green"));
//                     document.write(reng.fontcolor("#000"));
//        fontsize()  ->dəyişkənin dəyərinin fontuna ölçüləndirir.//parametrik
//                     var metn = "JavaScript";
//                     document.write(metn.fontsize(1)) 1->7 ə qədərdir.

//   1.30.anchor() ->dəyişkənin dəyərinə link xüsusiyyəti verir parametr hissəsi isə linkin  'name' hissənini doldurur.
//                     var metn = "Google";
//                     document.write(metn.anchor("send");
//        link()   ->dəyişkənin dəyərinə link xüsusiyyəti verir parametr hissəsi isə linkin  'href' hissənini doldurur.
//                     var metn = "Google";
//                     document.write(metn.link("http://google.com");