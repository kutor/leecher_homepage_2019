/* DATABASE FOR LEECHERMUSIC.COM
*
*  To anyone who is interested in the code enough to read it:
*  Yes, it would have been much better to do this in a decent way, like php/mysql or something. This is what I could come up with in two weeks, with only basic knowledge of PHP I had to rely on what I knew: beginner-level JS.
*  Yeah there will be a proper CMS behind this eventually, probably PHP or NodeJS. Soon. (Please refer to Blizzard Entertainment's definition of "Soon")
*  Kutor


*  To anyone wanting to edit the database:
*  PLEASE ONLY MESS WITH THE CODE IF YOU KNOW WHAT YOU ARE DOING.
*  YOU CAN FUCK THE ENTIRE WEBPAGE UP BY MISTYPING EVEN ONE CHARACTER AT THE WRONG PLACE.
*  YOU SHOULD CONTACT ME AND I WILL PUT IN WHAT YOU WANT.
*  THANKS
*/


//								*** NEWS ***
/* EXAMPLE
{
newsTitleEn: "English Title for This News Element",
newsTitleHu: "Magyar Cím Ehhez a Hírhez",
newsTextEn: "English text for this news element, blah blah blah.",
newsTextHu: "Magyar szöveg ehhez a hírhez, bla bla bla, legyen kicsit hosszabb, mint az angol, valamivel tesztelni kell a div hosszúság adjusztert.",
newsDate: new Date(year, month, day, hours, minutes),
},

*/

const news = [

{
	newsTitleEn: 'Messengers of Fear premiere',
	newsTitleHu: 'Messengers of Fear bemutató',
	newsTextEn: 'Hello everyone!<br><br>The day has come for us to reveal the first taste of our next album, the song \'Messengers of Fear\'!<br><br>In the video below you can see some moments from our October tour, studio works and our live performences of the song. <br><br>Our goal is for the entire album to be made in a similar way, with the advice and contribution of a music producer.<br><br>We would like to say thanks to the people without whom this record wouldn\'t be here now:<br><br>- György Strasser and B-Monitor Studio<br>- Frank Pitters, producer and engineer<br>- Anton/Axuruk from Blodiga Skald (harsh vocals)<br>- Hendrik Schroeder who shot the video at FemMe<br>- Kiril Gruev who shot the video of the show at Sofia<br>...and of course YOU, our audiences, fans and supporters who have been helping us to be where we are now!<br><br>We are very happy to see how much you have helped us. We are having wonderful times with a lot of things happening. And it\'s not over yet! If you want to support us, you can do so for four days still. <br><br>Stay tuned for the final days of the campaign! Share & Comment!<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/SEi3tm5Zz0c"></iframe><br>',
	newsTextHu: 'Sziasztok!<br><br>Eljött a nap, amikor bemutatjuk a következő lemezünk első hírmondóját, a Messengers of Fear című dalt!<br><br>Az alábbi videóban a dal mellett láthatjátok az októberi turnénk, a stúdiózás és a dal élő előadásai<br>nak legjobb pillanatait is.<br>A célunk, hogy az egész lemez hasonló módon, produceri tanácsok és felügyelet mellett készüljön el.<br>Szeretnénk megköszönni a munkát és a segítséget mindazoknak, akik nélkül nem jöhetett volna létre a felvétel:<br><br>- Strasser György és a B-Monitor stúdió<br>- Frank Pitters producer és hangmérnök<br>- Anton/Axuruk a Blodiga Skald zenekarból (hörgés)<br>- Hendrik Schroeder, akinek a FemMe fesztivál videóit köszönhetjük<br>- Kiril Gruev, aki a bolgár koncert videóit készítette<br>...és természetesen TI, a közönségünk, a rajongóink és a támogatóink, akik nélkül nem lehetnénk most itt!<br>Nagyon örülünk, hogy eddig is ennyien segítettetek. Csodálatos időszakot élünk most át, rengeteg dolog történik velünk... és még nincs vége!!! Ha szeretnétek részt vállalni a második lemezünk elkészülésében, még négy napig megtehetitek. <br><br>Maradjatok velünk! Osszátok, kommenteljétek!<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/SEi3tm5Zz0c"></iframe><br>',
	newsDate: "2018-11-18 17:45"
},
{
	newsTitleEn: 'European Tour - Back Home',
	newsTitleHu: 'Európai Turné - Újra itthon',
	newsTextEn: 'Hey everyone! Last night we got back home from our tour in Europe! It was a great experience for everyone and we had a great time visiting beautiful places and getting to know some awesome people! A huge thanks to our orcish friends <a href="https://www.facebook.com/blodigaskald/">Blodiga Skald</a> for their participation, technical assistance, music and simply for being cool people! <br><br>Next stop: November 2, Budapest!',
	newsTextHu: 'Üdv mindenkinek! Tegnap este hazaérkeztünk az európai turnénkról, amit mindannyian nagyon élveztünk, szép helyeken járhattunk és remek embereket ismerhettünk meg. Külön köszönet ork barátainknak a <a href="https://www.facebook.com/blodigaskald/">Blodiga Skald</a>-ban, akik technikai segítségükkel, zenéjükkel és személyiségükkel emelték a turné fényét! <br><br>Következő állomás: november 2, Budapest!',
	newsDate: "2018-10-22 17:30"
},
{
	newsTitleEn: 'Recording our Second Album & European Tour',
	newsTitleHu: 'Második lemez & Európai Turné',
	newsTextEn: 'Hi!<br><br>In the past few weeks, we\'ve been hinting at something coming!<br><br>Soon we will start recording our second studio album, which we aim to do in a professional studio alongside an experienced music producer, who has the ears and knowledge to help us to give you the best possible quality and experience.<br><br>For this, we will need YOUR help as well!<br><br>If you like our music and would like to support us in taking our music to the next level, you can do so through our crowdfunding campaign. We have exclusive items for you, like limited edition shirts and our very own board game too!<br><br><a href="https://www.indiegogo.com/projects/leecher-a-symphonic-cello-metal-album/x/19573514#/">You can find everything through this link.</a><br><br>A thousand thanks to you for all the help and support we’ve been getting from you through the years!<br><br><br><br>Also, soon the first show of our Autumn European Tour will start. Tonight: Le Lapin Blanc, Réding, France!',
	newsTextHu: 'Sziasztok!<br><br>Az elmúlt hetekben már célozgattunk rá, hogy egy új akcióval jelentkezünk, íme!<br><br>Hamarosan hozzákezdünk a második lemezünk felvételeihez, amiből szeretnénk a lehető legtöbbet kihozni! A munkálatokat egy profi stúdióban, egy tapasztalt producer mellett tennénk meg, aki a fülével és a tudásával segítene minket abban, hogy a lehető legjobb minőséget tehessük le nektek az asztalra.<br><br>Ehhez most a ti segítségeteket szeretnénk kérni!<br><br>Ha szeretitek a munkásságunkat, szívesen követitek figyelemmel az utunkat és támogatnátok is minket abban, hogy szintet léphessünk, akkor most meg tudjátok ezt tenni egy kampány keretében. Exkluzív ajándékokkal is készültünk nektek,mint például limitált kiadású pólókkal és egyedi társasjátékkal.<br><br><a href="https://www.indiegogo.com/projects/leecher-a-symphonic-cello-metal-album/x/19573514#/">Ezen a linken minden infót megtaláltok!</a><br><br>Ezer köszönet nektek minden segítségért és a folyamatos támogatásért, amit évek óta kapunk tőletek!<br><br><br><br>Más hírek: az őszi európai turné első koncertje hamarosan elkezdődik! Mai helyszín: Le Lapin Blanc, Réding, Franciaország!',
	newsDate: "2018-10-12 16:58"
},
{
	newsTitleEn: 'European Tour!',
	newsTitleHu: 'Európai turné!',
	newsTextEn: 'On our way to FemMe and back, we will give some shows throughout Europe! Check hot the <a href="http://leechermusic.com/live.html">Live Section</a>! Shows to be announced for the 16-17th too!',
	newsTextHu: 'A Leecher európai turnéra indul! A FemMe fesztivál meghívásának eleget téve koncertekkel szórjuk meg az oda- és visszautat, amelyekről a <a href="http://leechermusic.com/live.html">Koncertek részlegen</a> tájékozódhatsz! 16-17-ére további koncertek várhatóak!',
	newsDate: "2018-09-03 20:15"
},
{
	newsTitleEn: 'New Live Dates!',
	newsTitleHu: 'Új koncertek!',
	newsTextEn: 'A bunch of live dates had been added to the <a href="http://leechermusic.com/live.html">Live Section</a>!',
	newsTextHu: 'Rengeteg új koncertdátumot találhattok a <a href="http://leechermusic.com/live.html">Koncertek részlegen</a>! Itthon Budapesten és Zalaegerszegen láthattok minket májusban!',
	newsDate: "2018-04-06 11:15"
},
{
	newsTitleEn: 'Winter Tour Video',
	newsTitleHu: 'Téli turné videó',
	newsTextEn: 'At the beginning of February, we had a three-stop tour supporting Arkona at Zagreb (Croatia), Novi Sad (Serbia) and Cluj-Napoca (Romania). We have gathered some of the highlights for you, with some insight into band life outside the stage. Enjoy! <br><br> <iframe class="iframe_youtube" src="https://www.youtube.com/embed/CelwCw0Urj8" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
	newsTextHu: 'Február elején egy rövid turnén vettünk részt Zágrábban, Újvidéken és Kolozsrávott. Összegyűjtöttünk néhány pillanatot az útról, ahol azs it láthatjátok, milyen a színpadon kívüli élet! <br><br> <iframe class="iframe_youtube" src="https://www.youtube.com/embed/CelwCw0Urj8" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
	newsDate: "2018-02-28 16:15"
},

{
	newsTitleEn: 'Return of the Cellos',
	newsTitleHu: 'A csellók visszatérnek!',
	newsTextEn: 'Dear Friends, <br> First of all, we wish you a happy new year! <br><br> With the photo shooting completed, we can finally announce a change we have been waiting for a long time. <br> The sad news is that Ati is leaving the band. For more than a year, he has been helping us not only as a bassist, but as a driver and a human being. We thank you for your help and hope we can share the stage sometime in the future. <br> The reason for this is that Leecher finally has three cellos in out lineup again! Please welcome Barabás, who returns the long-awaited third cello to the band!',
	newsTextHu: 'Kedves Barátaink!<br>Mindenekelőtt boldog új évet kíván a Leecher! <br><br> A fotózás végeztével a honlapon is megtehetjük a bejelentést, amire hosszú ideje vártunk. <br> A szomorú hír az, hogy Ati elhagyja a zenekart. Az elmúlt több, mint egy évben számtalanszor segített ki minket nem csak mint basszusgitáros, hanem mint sofór és barát. Reméljük, még állhatunk egy színpadon együtt a jövőben! <br> Távozásának oka nem más, mint hogy a Leecherbe visszatért a hosszasan hiányzó harmadik cselló! Fogadjátok szeretettel Barabást, aki betöltötte a régóta fájó hiányt!',
	newsDate: "2018-01-07 16:57"
},
{
	newsTitleEn: 'Hungarian Lyrics!',
	newsTitleHu: 'Magyar dalszövegek!',
	newsTextEn: 'Dear Friends,<br>From now on we will present our songs in Hungarian when playing in Hungary. Those of you living abroad will remain unaffected by this change and hear the English versions as before (any new songs too).<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/sb4rKwdPZ-s"></iframe><br>',
	newsTextHu: 'Kedves barátaink!<br>Ideje, hogy bejelentsünk egy váratlan fordulatot (csak semmi aggodalom)! A közkívánat és a zenekaron belüli megfontolás eredményeképpen is arra jutottunk, hogy a jövőben itthon a dalainkat MAGYARUL fogjuk előadni! Jelenleg is az utolsó simítások zajlanak a fordításokon/átiratokon, amik hamarosan megjelennek a honlapon. Mindemellett nem is olyan sokára érkezni fog a lemez néhány dalának akusztikus verziója magyar szövegekkel. Ennek a sorozatnak az előfutára és koronája a Fading magyar verziója, amit fogadjatok szeretettel!<br><br><br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/sb4rKwdPZ-s"></iframe><br>',
	newsDate: "2017-07-30 21:03"
},
{
	newsTitleEn: 'SIGHTLESS Anniversary!',
	newsTitleHu: 'Egy éves a SIGHTLESS!',
	newsTextEn: 'How fast time flies! Exactly one year ago our first album SIGHTLESS was released. We want to thank everyone who took the time to listen to our music, and for all the positive feedback! More music is in the making! New songs, and some surprises from this album...<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/1io2BX-ZIGI?list=PLoUSUrcUhVSfJ6m44b3vwDsTLo8sEg8D7"></iframe><br>',
	newsTextHu: 'Egy éve ezen a napon jelent meg az első lemezünk, a SIGHTLESS! Szeretnénk megköszönni mindenkinek, aki időt áldozott a zenénk hallgatására, egyúttal a sok pozitív visszajelzésért is hálásak vagyunk. Jelenleg is készülnek új dalok, és pár meglepetés erről a lemezről is...<br><br><br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/1io2BX-ZIGI?list=PLoUSUrcUhVSfJ6m44b3vwDsTLo8sEg8D7"></iframe><br>',
	newsDate: "2017-06-09 21:40"
},
{
	newsTitleEn: '"Slaves to a Dream" Live Lyrics Video!',
	newsTitleHu: '"Slaves to a Dream élő szöveges videó!',
	newsTextEn: 'We are happy and proud to present a new video, composed of footage from our 2016 shows!<br><br>Watch it now on YouTube!<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/Cxl9EM7IMAk"></iframe><br>',
	newsTextHu: 'Örömmel mutatjuk be a "Slaves to a Dream" szöveges videóját, melyet a 2016-os koncertek felvételei kísérnek!<br><br><br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/Cxl9EM7IMAk"></iframe><br>',
	newsDate: "2017-01-22 21:03"
},
{
	newsTitleEn: 'Happy New Year!',
	newsTitleHu: 'Boldog Újévet!',
	newsTextEn: '2016 has been a busy year for Leecher!<br>In June our first album was released -- the first months of the year were spent with preparations. We finished designing the visuals and listened to the mixes as they were getting closer to what we wanted to hear. During summer we worked in the background to get it out to everyone and also to make the music video for the song "Fading". As autumn began, so did we start doing shows, ending the year with a busy December as we visited other cities.<br>We are very happy the album and our music was received well and want to thank all our supporters. Work on new music, new shows and new projects has already begun in the background, so stay tuned for brand-new Leecher stuff!<br>We wish you a happy new year!',
	newsTextHu: '2016 sűrű év volt a Leechernek!<br>Júniusban megjelent az első stúdiólemezünk -- az év első fele az erre való felkészüléssel telt: elkészültünk a designnal és mixeket hallgattunk, amíg olyan nem lett, ahogyan a dalok a fejünkben szóltak. Nyáron tovább dolgoztunk a háttérben, hogy a lemez eljusson mindenkihez és klipet is forgattunk. Az ősz érkezésével beindult a koncertezés is, az évet pedig egy sűrű decemberrel fejeztük be.<br>Igazán örülünk a lemez és a zenénk fogadtatásának és szeretnénk köszönetet mondani minden támogatónknak. Már dolgozunk az új dalokon, új koncerteken és új projekteken, úgyhogy álljatok készen a következő évben is!<br>Boldog újévet kíván a Leecher!',
	newsDate: "2016-12-31 17:30"
},
{
	newsTitleEn: 'New Live Dates!',
	newsTitleHu: 'Új koncertek!',
	newsTextEn: 'A bunch of live dates had been added to the <a href="http://leechermusic.com/live.html">Live Section</a>!',
	newsTextHu: 'Az őszi-téli időszakban sem tétlenkedünk, ezúttal több vidéki városban is élőben meghallgathattok minket! Dátumok a <a href="http://leechermusic.com/live.html">Koncertek részlegen</a>!',
	newsDate: "2016-10-18 12:15"
},
{
	newsTitleEn: '"Fading" Music Video!',
	newsTitleHu: '"Fading" Klip!',
	newsTextEn: 'Dear Friends! We are happy to present the music video for our song "Fading"!<br><br>Watch it now on YouTube!<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/No6WFQC_XDk"</iframe><br><br>Thanks to:<br>Video: <a href="http://facebook.com/balazska.gerocs">Balázs Gerócs</a><br>Shot at: <a href="http://www.csendespeter.hu/studioberles">Vintage \'69 Multimedia Studio</a><br>Make-up: <a href="https://www.facebook.com/Cs%C3%B3k%C3%A1ssy-Vikt%C3%B3ria-Sminkes-%C3%A9s-Szempilla-Stylist-918205918248711/">Viktória Csókássy</a>',
	newsTextHu: 'Kedves barátaink! Örömmel mutatjuk be a "Fading" klipjét!<br><br><br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/No6WFQC_XDk"</iframe><br><br>Köszönet:<br>Videó: <a href="http://facebook.com/balazska.gerocs">Gerócs Balázs</a><br>Helyszín: <a href="http://www.csendespeter.hu/studioberles">Vintage \'69 Multimedia Studio</a><br>Smink: <a href="https://www.facebook.com/Cs%C3%B3k%C3%A1ssy-Vikt%C3%B3ria-Sminkes-%C3%A9s-Szempilla-Stylist-918205918248711/">Csókássy Viktória</a>',
	newsDate: "2016-08-22 20:03"
},
{
	newsTitleEn: '"Fading" Video Teaser',
	newsTitleHu: '"Fading" Video előzetes',
	newsTextEn: 'Prepare for the 22nd! <br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/PsGPL48DcjI"</iframe>',
	newsTextHu: 'Huszonkettedikén érkezik!<br><br><iframe class="iframe_youtube" class="iframe_youtube" src="https://youtube.com/embed/PsGPL48DcjI"</iframe>',
	newsDate: "2016-08-15 20:21"
},
{
	newsTitleEn: "Album Available Internationally",
	newsTitleHu: "Megvásárolható a CD",
	newsTextEn: "Dear Friends, the wait is finally over! From now on EU residents can<a href='http://www.metalshop.hu/product_info.php?products_id=18097&language=en'> get their hands on the 'Sightless' album</a> in its physical form as well! Get yours now!",
	newsTextHu: "Kedves barátaink, a várakozásnak vége! Mostantól a Sightless CD-t önmagában is megvásárolhatjátok a <a href='http://www.metalshop.hu/product_info.php?products_id=18097'>metalshop.hu</a>-n!",
	newsDate: "2016-08-01 10:15"
},
{
	newsTitleEn: "New Album Out: Phase 2!",
	newsTitleHu: "Megjelent a lemez: második fázis!",
	newsTextEn: "Now you can listen to the album on <a href='http://bit.ly/1UvJ2CF' target='blank'>Spotify</a>! We can call this an international release...<br><br>Also it is available on <a href='http://bit.ly/1Uziq3R' target='blank'>Google Play</a> for you to buy it.<br><br>UPDATE 2: <a href='http://www.deezer.com/album/13328607' target='_blank'>Deezer</a> links are up as well!<br><br>More links will be posted as they go live!",
	newsTextHu: "Mostantól a <a href='http://bit.ly/1UvJ2CF' target='blank'>Spotify</a>-on is meghallgathatjátok a lemezt!<br><br>Ezen kívül a <a href='http://bit.ly/1Uziq3R' target='blank'>Google Play</a>-en is megvásárolható!<br><br>UPDATE 2: A <a href='http://www.deezer.com/album/13328607' target='_blank'>Deezer</a> link is felkerült!<br><br>A további linkeket folyamatosan ki fogjuk tenni, ahogy élesednek!",
	newsDate: "2016-06-13 19:32"
},
{
	newsTitleEn: "New Album Out: Phase 1!",
	newsTitleHu: "Megjelent a lemez: az első lépés!",
	newsTextEn: "Leecher's first album 'Sightless' is out now in Hungary! If you happen to be here, you can grab a physical copy by getting the June issue of HammerWorld Magazine. Online release is scheduled for Monday, you will be able to find it on Spotify and Deezer.<br>We wish to thank everyone who helped us in making this album a real thing!<br>Have fun listening!<br>",
	newsTextHu: "Megjelent a Leecher első nagylemeze, a Sightless! Egyelőre a Metal Hammer júniusi számának mellékleteként szerezhetitek be, de hétfőtől a Spotify-on és a Deezeren is hallgatható lesz!<br>Szeretnénk megköszönni mindenkinek, aki hozzájárult ahhoz, hogy a lemez megjelenhessen!<br>Hallgassátok örömmel!<br>",
	newsDate: "2016-06-10 11:23"
},
{
	newsTitleEn: "Website Now Live!",
	newsTitleHu: "A honlap működik!",
	newsTextEn: "We are happy to inform you that Leecher's Official Homepage is up and working! Feel free to take a look around and see all the stuff. While you can find a lot of this content elsewhere too, for example the lyrics are exclusive to this page.<br><br>(Also, for those with a good eye for details, MAYBE now would be a good time to watch the 'All the Stars' video again...)",
	newsTextHu: "Örömmel jelentjük, hogy a Leecher hivatalos honlapja elkészült és üzemel! Nézzetek szét! Bár sok dolgot másutt is megtalálhattok a zenekarról, a szövegek például csak itt olvashatók.<br><br>(És az igazán jó szeműeknek LEHETSÉGES, hogy most érdemes újra megnézniük az 'All the Stars' videót...)",
	newsDate: "2016-06-10 11:23"
},
{
	newsTitleEn: "SHOCKING! DRAMATIC! Lyrics Video for 'All the Stars' released!",
	newsTitleHu: "SOKKOLÓ! DRÁMAI! Szöveges videó az 'All the Stars'-hoz!",
	newsTextEn: 'We are happy to present you the first song from our upcoming new album! It is called "All the Stars" and is accompanied by a lyrics video! <br> Enjoy!<br><article><iframe class="iframe_youtube" src="https://www.youtube.com/embed/2zLOpB7_IJE" frameborder="0" allowfullscreen></iframe></article>',
	newsTextHu: 'Örömmel mutatjuk be az első dalt a hamarosan megérkező lemezről! A címe "All the Stars" és egy videót is kaptok hozzá! <br> Fogadjátok szeretettel!<br><article><iframe class="iframe_youtube" src="https://www.youtube.com/embed/2zLOpB7_IJE" frameborder="0" allowfullscreen></iframe></article>',
	newsDate: "2016-05-17 12:19"
}
];

//								*** LIVE ***

/* EXAMPLE

const live = [
{
showDate: "1111-11-11",
showCountry: "Country1 where show will be",
showCity: "City1 where the show will be",
showVenue: "Venue1 where the show will be,
showVenueWeb: "http://venues.website.here",
showComment: "Something about the show 1",
showTickets: "http://link.for.tickets",
},
];

*/

const live = [

	{
		showDate: "2018-10-12",
		showCountry: "France",
		showCity: "Réding",
		showVenue: "Le Lapin Blanc",
		showVenueWeb: "https://www.facebook.com/events/336076003553900/",
		showComment: "",
		showTickets: "",
	},
	{
		showDate: "2018-10-13",
		showCountry: "Germany",
		showCity: "Giessen",
		showVenue: "Café Amelie",
		showVenueWeb: "https://www.facebook.com/events/2162031770786439/",
		showComment: "",
		showTickets: "",
	},
	{
		showDate: "2018-10-14",
		showCountry: "The Netherlands",
		showCity: "Eindhoven",
		showVenue: "PopEi",
		showVenueWeb: "https://www.facebook.com/events/649217891938712/",
		showComment: "FemMe Festival",
		showTickets: "",
	},
	{
		showDate: "2018-10-18",
		showCountry: "France",
		showCity: "Lyon",
		showVenue: "Rocn 'n' Eat",
		showVenueWeb: "https://www.facebook.com/events/534725810256341/",
		showComment: "",
		showTickets: "",
	},
	{
		showDate: "2018-10-19",
		showCountry: "Switzerland",
		showCity: "Lenzburg",
		showVenue: "Met-Bar",
		showVenueWeb: "https://www.facebook.com/events/187061828604386/",
		showComment: "",
		showTickets: "",
	},
	{
		showDate: "2018-10-20",
		showCountry: "Italy",
		showCity: "Milan",
		showVenue: "The One Metal Live",
		showVenueWeb: "https://www.facebook.com/events/2143214212560839/",
		showComment: "",
		showTickets: "",
	},
];


//						    	***	MEDIA ***

/* EXAMPLE

const mediaVideos = [
{
videoName: "Name For Video",
videoLink: "www.youtube.com/embed/linkForTheVideo",
videoDescription: "Say something about this video"
}
];

const mediaPhotos = [
{
photoName: "Name For photo",
photoLink: "www.whatever.com/linkForThePhoto",
photoDescription: "Say something about this photo"
}
];

*/

const mediaVideos = [
	{
		videoName: "Fading (Music Video 2016)",
		videoLink: "https://www.youtube.com/embed/No6WFQC_XDk",
		videoDescription: 'Music video for the song "Fading", from our first studio album "Sightless".'
	},
	{
		videoName: "Slaves to a Dream (Live Lyrics Video)",
		videoLink: "https://www.youtube.com/embed/Cxl9EM7IMAk",
		videoDescription: 'Lyrics video for the song "Slaves to a Dream", from our first studio album "Sightless", with footage from 2016 shows.'
	},
	{
		videoName: "All the Stars (Lyrics Video)",
		videoLink: "https://www.youtube.com/embed/2zLOpB7_IJE",
		videoDescription: 'Lyrics video for "All the Stars", from our first studio album "Sightless".'
	},
	{
		videoName: "Kezünkben a láng ('Fading' Hungarian Acoustic Version)",
		videoLink: "https://www.youtube.com/embed/sb4rKwdPZ-s",
		videoDescription: 'A Fading című dalunk magyar változata / Hungarian version of our song "Fading".'
	},

	{
		videoName: "Leecher in the Studio",
		videoLink: "https://www.youtube.com/embed/Pkr52IkKcOU",
		videoDescription: 'Recording our first album.'
	},
];


const mediaPhotosPath = "./src/img/media/";
const mediaPhotos = [
	{
		photoName: "Leecher Official 1",
		photoLink: `${mediaPhotosPath}leecher_band_full_2018.jpg`,
		photoDescription: "Official photo of the band #1."
	},
	{
		photoName: "Leecher Official 2",
		photoLink: `${mediaPhotosPath}leecher_band_lines_2018.jpg`,
		photoDescription: "Official photo of the band #2."
	},
	{
		photoName: "Sightless Album Wallpaper",
		photoLink: `${mediaPhotosPath}wallpaper_cdcover.jpg`,
		photoDescription: "FHD Wallpaper with the 'Sightless' album cover."
	},
	{
		photoName: "Sightless Album Wallpaper (Cello)",
		photoLink: `${mediaPhotosPath}wallpaper_cdcover_onlycello.jpg`,
		photoDescription: "FHD Wallpaper with the 'Sightless' album cover, only the cello."
	},
	{
		photoName: "Sightless Album 'Movie Poster'",
		photoLink: `${mediaPhotosPath}band_albumPoster.jpg`,
		photoDescription: "Movie poster style promo for the 'Sightless' album."
	},
	{
		photoName: "Sightless Album 'Movie Poster' #2",
		photoLink: `${mediaPhotosPath}albumPoster2.jpg`,
		photoDescription: "Movie poster style promo for the 'Sightless' album."
	},
];

//							    	*** CONTACT ***

/* EXAMPLE

const contacts = [
{
contactName: "Organisation",
contactPerson: "The person to seek out in email",
contactEmail: "emailof@the.contact",
contactWebName: "name of the contacts website1",
contactWeb: "http://website.of.the.contact.if.any",
},
];

*/

const contacts = [
	{
		contactName: "Leecher: The Band",
		contactPerson: "Management",
		contactEmail: "<a href='mailto:management@leechermusic.com' target='_blank'> email </a>",
		contactWebName: "www.leechermusic.com",
		contactWeb: "http://www.leechermusic.com",
	},
	{
		contactName: "Leecher: Telephone",
		contactPerson: "Márton Krómer",
		contactEmail: "(36) (30) 201 88 74",
		contactWebName: "",
		contactWeb: "",
	},
];



// ---------- PAGE PARTS ---------

const socialIconsPath = "../img/social/";

const social = [
    {
        name: "Facebook",
        icon: `../img/social/social_facebook.png`,
		link: "https://facebook.com/leechermusic",
    },
    {
        name: "YouTube",
        icon: `../img/social/social_youtube.png`,
        link: "https://youtube.com/leechermusic"
    },
    {
        name: "Instagram",
        icon: `../img/social/social_instagram.png`,
		link: "https://instagram.com/leechermusic",
    },
    {
        name: "Twitter",
        icon: `../img/social/social_twitter.png`,
		link: "https://twitter.com/leechermusic",
		contactWeb: "https://www.twitter.com/leechermusic",
    },
    {
        name: "Spotify",
        icon: `../img/social/social_spotify.png`,
        link: "https://play.spotify.com/artist/2SNVSRMO7kNMPvDqHKzC5Z"
    },
    {
        name: "Deezer",
        icon: `../img/social/social_deezer.png`,
        link: "http://www.deezer.com/album/13328607"
    },
    {
        name: "Google Play",
        icon: `../img/social/social_googleplay.png`,
        link: "https://play.google.com/store/music/album/Leecher_Sightless?id=B7q67njdqyt5nxpsidt3shskiq4",
    },
    {
        name: "iTunes",
        icon: `../img/social/social_itunes.png`,
        link: "https://itunes.apple.com/hu/album/sightless/id1123598343"
    },
]

export default social;

