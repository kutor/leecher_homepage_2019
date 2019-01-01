import React, { Component } from 'react';
//import ErrorBoundary from '../errorBoundary.js';
import social from '../database/database.js';
import compMenu from '../database/compMenu.js';
import dataBandBio from '../database/dataBandBio.js';
import dataBandAlbums from '../database/dataBandAlbums.js';
import dataBandMembers from '../database/dataBandMembers.js';
import dataMediaVideos from "../database/dataMediaVideos.js";
import dataMediaPhotos from "../database/dataMediaPhotos.js";
import dataShop from "../database/dataShop.js";
import dataContacts from "../database/dataContacts.js";



class App extends Component{
  render() {
    return (
      <React.Fragment>
        <div id="sticky">
          <SocialLine />
          <Menu />
        </div>
        <BandImage />
        <MainBody />
        <Bottom />
      </React.Fragment>
    )
  }
}

// ------------------------------------ 


/*

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => CODE);
}

*/

class SocialIcon extends React.Component{
  render(){
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img className="social_img" alt={this.props.name} src={this.props.icon}></img>
      </a>
    )
  }
}


class SocialLine extends Component {
  render() {
    return (
      <div id="headerUpperLine">
        {
          social.map((icon, i) => {
            return ( 
              <SocialIcon 
                name={social[i].name} 
                icon={social[i].icon} 
                link={social[i].link}
              />
            );
          })
        }
      </div>
    );
  }
}


class Menu extends Component {
  render() {
    return (
      <div>
        <nav id="headerMenu">
          <div id="navbarDropdownLi">NAVIGATION</div>
          <ul id="menu">
            {compMenu.map((element, i) => {
              return(
                <MenuElement 
                  name = {compMenu[i].name}
                  link = {compMenu[i].fill.link}
                />
              );
            }
            )}
          </ul>
        </nav>
        <div id="line"></div>
      </div>
    );
  }
}

class MenuElement extends Component {
   
  render() {
    return(
      <li id={`menu_${this.props.name}`} className="menu_link"><a href={`#${this.props.link}`}>{this.props.name}</a> </li> //TODO
    )
  }
}




class BandImage extends Component {
  render() {
    return (
      <div id="div_band_image">
        <img src="../img/index/band_img_0.png" alt="the band" className="band_image"></img>
      </div>
    );
  }
}


class MainBody extends Component {

  render() {
    return (
      <div>         
        <div id="main_content">
          <ContentNews /> 
          <ContentBand /> 
          <ContentAlbums /> 
          <ContentLive /> 
          <ContentMedia /> 
          <ContentShop /> 
          <ContentContact />
        </div>
      </div>
    );
  }
}


class Bottom extends Component {
  render() {
    return (
      <div id="div_footer">-  © 2016-2018 Leecher  -  coded by kutor  -  contact: <a href="mailto:management@leechermusic.com" target="_blank" rel="noopener noreferrer">management@leechermusic.com</a>  -  <a href="legal.html">legal & privacy policy</a>  -</div>
    );
  }
}

// ---------- ---------- ---------- SUBPAGES ---------- ---------- ---------- 

// ---------- NEWS

class ContentNews extends Component {

  constructor() {
    super()
    this.state = {
      dataNews: [],
    }
  }

  componentDidMount() {
    fetch("/json/dataNews.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataNews: resp.dataNews}
      ))
  }

  render() {
    return (
      <div id="link_news" className="anchor">
        <h2 className="centered">News / Hírek</h2>
        <div id="div_news" className="content_container">
        {this.state.dataNews.map((newsitem, i) => {
          return ( 
            <React.Fragment>
              <DivNews 
                newsTitle = {this.state.dataNews[i].newsTitleEn}
                newsText = {this.state.dataNews[i].newsTextEn}
                newsDate = {this.state.dataNews[i].newsDate}
              /> 
              <DivNews 
                newsTitle = {this.state.dataNews[i].newsTitleHu}
                newsText = {this.state.dataNews[i].newsTextHu}
                newsDate = {this.state.dataNews[i].newsDate}
              />
            </React.Fragment>
          );
        })}
        </div>
      </div>
    );
  }
}

class DivNews extends Component {
  render() {
    return (
      <div className="div_news_small">
        <h5>{this.props.newsTitle}</h5>
        <p dangerouslySetInnerHTML={{ __html: this.props.newsText }} />
        <h6>{this.props.newsDate}</h6>
      </div>
    );
  }
}


// ---------- BAND

class ContentBand extends Component {
  render() {
    return (
      <div id="link_band" className="anchor">
        <h2 className="centered">The Band / A Zenekar</h2>
        <div id="div_band" className="content_container">
          <DivBandBio />
          <DivBandMembers />
        </div>
      </div>
    );
  }
}

class DivBandBio extends Component {
  render() {
    return (
      dataBandBio.map((bio, i) => {
        return ( 
            <DivNews 
              newsTitle = {<h4>{dataBandBio[i].dataBandBioTitle}</h4>}
              newsText = {dataBandBio[i].dataBandBioText}
            /> 
        );
      })
    );
  }
}

class DivBandMembers extends Component {
  render() {
    return (
      <div id="band_members content_container">
        <h2 className="centered">Band Members / Tagok</h2>
        <div id="members">
        {dataBandMembers.map((member, i) => {
            return ( 
              <div className="bandMemberProfile">
                <img src={dataBandMembers[i].bandMemberImage} alt={dataBandMembers[i].bandMemberName}/>
                <h3>{dataBandMembers[i].bandMemberName}</h3>
                <p>{dataBandMembers[i].bandMemberTextEn}</p>
                <br />
                <p>{dataBandMembers[i].bandMemberTextHu}</p>
              </div>
            );
          })}
          </div>
      </div>
    );
  }
}


// ---------- ALBUMS

class ContentAlbums extends Component {
  render() {
    return (
      <div id="link_albums" className="anchor">
        <h2 className="centered">Discography & Lyrics / Lemezek & Szövegek</h2>
        <div id="div_discography" className="content_container">
        
          {dataBandAlbums.map((album, i) => {
            return ( 
              <div className="div_album">
                <br />
                <h4>{`${dataBandAlbums[i].albumTitle} (${dataBandAlbums[i].albumYear})`}</h4>
                <img className="img_album" src={dataBandAlbums[i].albumCover} alt={dataBandAlbums[i].albumTitle} />
                {dataBandAlbums[i].albumSongsAndLyrics.map((song, j) => {
                  return ( 
                    <Song
                      songNumber = {dataBandAlbums[i].albumSongsAndLyrics[j].number}
                      songTitle = {dataBandAlbums[i].albumSongsAndLyrics[j].title}
                      songLyrics = {dataBandAlbums[i].albumSongsAndLyrics[j].lyrics}
                    />
                  );
                })}
              </div>
            );
          })}
          <br />
        </div>
      </div>
    );
  }
}

class Song extends React.Component { // credits to https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
  constructor() {
    super();
    
    this.state = {
      showLyrics: false,
    }
    
    this.showLyrics = this.showLyrics.bind(this);
    this.closeLyrics = this.closeLyrics.bind(this);
  }
  
  showLyrics(event) {
    event.preventDefault();
    
    this.setState({ showLyrics: true }, () => {
      document.addEventListener('click', this.closeLyrics);
    });
  }
  
  closeLyrics() {
    this.setState({ showLyrics: false }, () => {
      document.removeEventListener('click', this.closeLyrics);
    });
  }


  render() {
    return(
      <ul className="songtitle" onClick={this.showLyrics}> {this.props.songNumber}. {this.props.songTitle}
        {this.state.showLyrics ? (
          <li className="lyrics" dangerouslySetInnerHTML={{ __html: this.props.songLyrics}} ></li>
        ) : (
          null
        )}
      </ul>
    )
  }
}


// ---------- LIVE

class ContentLive extends Component {

  constructor() {
    super()
    this.state = {
      dataLive: [],
    }
  }

  componentDidMount() {
    fetch("/json/dataLive.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataLive: resp.dataLive}
      ));
  }

  render() {
    return (
      <div id="link_live" className="anchor">
        <h2 className="centered">Live Shows / Élő Koncertek</h2>
        <div id="div_live" className="content_container">
        
          {this.state.dataLive.map((liveshow, i) => {
            return ( 
              <DivLive 
                showDate = {this.state.dataLive[i].showDate}
                showCountry = {this.state.dataLive[i].showCountry}
                showCity = {this.state.dataLive[i].showCity}                  
                showVenue = {this.state.dataLive[i].showVenue}
                showVenueWeb = {this.state.dataLive[i].showVenueWeb}
                showComment = {this.state.dataLive[i].showComment}
                showTickets = {this.state.dataLive[i].showTickets}                    
                /> 
            );
          })}
          
        </div>
      </div>
    );
  }
}

class DivLive extends Component {
  render() {
    return (
      <div className="div_liveshow">
        <div className="div_liveshow_sub">
          <div>{this.props.showDate}</div>
          <div>{this.props.showCountry}</div>
          <div>{this.props.showCity}</div>
          <div><a href={this.props.showVenueWeb}>{this.props.showVenue}</a></div>
        </div>
        <div className="div_liveshow_sub">
          <div dangerouslySetInnerHTML={{ __html: this.props.showComment }}></div>
        </div>
        <div className="div_liveshow_sub">
          <div>{this.props.showTickets}</div>
        </div>
      </div>
    );
  }
}


// ---------- MEDIA

class ContentMedia extends Component {
  render() {
    return (
      <div id="link_media" className="anchor">
        <h2 className="centered">Music & Videos / Zene & Videók</h2>
        <div id="div_media" className="content_container">
          
          <div id="media_videos">
            {dataMediaVideos.map((video, i) => {
              return ( 
                <DivMediaVideo 
                  videoName = {dataMediaVideos[i].videoName}
                  videoLink = {dataMediaVideos[i].videoLink}
                  videoDescription = {dataMediaVideos[i].videoDescription}
                /> 
              );
            })}
          </div>
            
          <h2 className="centered">Photos / Fotók</h2>
          <div id="div_media_photos">
            {dataMediaPhotos.map((photo, j) => {
              return ( 
                <DivMediaPhoto
                  photoName = {dataMediaPhotos[j].photoName}
                  photoLink = {dataMediaPhotos[j].photoLink}
                  photoDescription = {dataMediaPhotos[j].photoDescription}
                /> 
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class DivMediaVideo extends Component {
  render() {
    return (
      <div className="div_media_video">
        <h3>{this.props.videoName}</h3>
        <iframe title={this.props.videoName} className="iframe_youtube" src={this.props.videoLink}>
        </iframe>
        <p>{this.props.videoDescription}</p>
      </div>
    );
  }
}

class DivMediaPhoto extends Component {
  render() {
    return (
      <div className="div_media_photo">
        <h3>{this.props.PhotoName}</h3>
        <a href={this.props.photoLink} target="_blank" rel="noopener noreferrer"><img src={this.props.photoLink} alt={this.props.photoDescription} /></a>
        <p>{this.props.photoDescription}</p>
      </div>
    );
  }
}

// ---------- SHOP

class ContentShop extends Component {
  render() {
    return (
      <div id="link_shop" className="anchor">
        <h2 className="centered">Shop / Bolt</h2>
        <div id="div_shop" className="content_container">
          {dataShop.map((shopItem, i) => {
            return ( 
              <DivShop
                itemName = {dataShop[i].itemName}
                itemImage = {dataShop[i].itemImage}
                itemLink = {dataShop[i].itemLink}
                itemDescriptionEn = {dataShop[i].itemDescriptionEn}
                itemDescriptionHu = {dataShop[i].itemDescriptionHu}
              /> 
            );
          })}
          <h6>EN - Please note that metalshop.hu is not 'the official Leecher shop' (that will come eventually too), it is run by our record label. Should you have any questions, please contact <a href="http://www.metalshop.hu/contact_us.php" target="_blank" rel="noopener noreferrer">them</a>.</h6>
          <h6>HU - Szeretnénk jelezni, hogy a metalshop.hu nem "a Leecher hivatalos shopja" (idővel az is lesz!), hanem a kiadónk működteti. Ezért az esetleges kérdésekkel <a href="http://www.metalshop.hu/contact_us.php?language=hu" target="_blank" rel="noopener noreferrer">hozzájuk</a> fordulhattok.</h6>
          <p className="shop_comingSoon">[COMING SOON / HAMAROSAN]</p>
        </div>
      </div>
    );
  }
}

class DivShop extends Component {
  render() {
    return (
      <article className="article_contact">
        <a href={this.props.itemLink} target="_blank" rel="noopener noreferrer">
          <img src={this.props.itemImage} alt={this.props.itemName} />
          <h3>{this.props.itemName}</h3>
          <br />
          <p>{this.props.itemDescriptionEn}</p>
          <p>{this.props.itemDescriptionHu}</p>
        </a>
      </article>
    );
  }
}


// ---------- CONTACT

class ContentContact extends Component {
  render() {
    return (
      <div id="link_contact" className="anchor">
        <h2 className="centered">Contact / Kapcsolat</h2>
        <div id="div_contact" className="content_container">
        
          {dataContacts.map((contact, i) => {
            return ( 
              <DivContact
                contactName = {dataContacts[i].contactName}
                contactPerson = {dataContacts[i].contactPerson}
                contactEmail = {dataContacts[i].contactEmail}
                contactWeb = {dataContacts[i].contactWeb}
                contactWebName = {dataContacts[i].contactWebName}
              /> 
            );
          })}
          {social.map((icon, i) => {
            return ( 
              <DivContactSocial 
                name={social[i].name} 
                icon={social[i].icon} 
                link={social[i].link}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class DivContact extends Component {
  render() {
    return (
      <article className="article_contact">
        <h3>{this.props.contactName}</h3>
        <p>{this.props.contactPerson.toUpperCase()}</p>
        <p>{this.props.contactEmail}</p>
        <a href={this.props.contactWeb} target="_blank" rel="noopener noreferrer">
          <p>{this.props.contactWebName}</p>
        </a>

      </article>
    );
  }
}

class DivContactSocial extends Component {
  render() {
    return (
      <article className="article_contact">
        <h3>{this.props.name}</h3>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img src={this.props.icon} alt={this.props.name} />
          <p>{this.props.linkDisplay}</p>
        </a>

      </article>
    );
  }
}

export default App;