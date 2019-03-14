import React, { Component } from 'react';
//import ErrorBoundary from '../errorBoundary.js';


const App = () => (
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

// ------------------------------------ 


const SocialIcon = props => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <img className="social_img" alt={props.name} src={props.icon}></img>
  </a>
)



class SocialLine extends Component {

  constructor() {
    super()
    this.state = {
      dataSocial: [],
    }
  }

  componentDidMount() {
    fetch("/json/dataSocial.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataSocial: resp.dataSocial}
      ))
  }

  render() {
    return (
      <div id="headerUpperLine">
        {
          this.state.dataSocial.map((icon, i) => {
            return ( 
              <SocialIcon 
                name={this.state.dataSocial[i].name} 
                icon={this.state.dataSocial[i].icon} 
                link={this.state.dataSocial[i].link}
              />
            );
          })
        }
      </div>
    );
  }
}


class Menu extends Component {

  constructor() {
    super()
    this.state = {
      compMenu: [],
    }
  }

  componentDidMount() {
    fetch("/json/compMenu.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {compMenu: resp.compMenu}
      ))
  }

  render() {
    return (
      <div>
        <nav id="headerMenu">
          <ul id="menu">
            {this.state.compMenu.map((element, i) => {
              return(
                <MenuElement 
                  name = {this.state.compMenu[i].name}
                  link = {this.state.compMenu[i].fill.link}
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

const MenuElement = props => (
  <li id={`menu_${props.name}`} className="menu_link"><a href={`#${props.link}`}>{props.name}</a> </li> 
)

const BandImage = () => (
  <div id="div_band_image">
    <img src="../img/index/band_img_0.png" alt="the band" className="band_image"></img>
  </div>
)


const MainBody = () => (
      <div id="main_container">         
        <div id="main_content">
          <ContentNews /> 
          <ContentBand /> 
          <ContentAlbums /> 
          <ContentLive /> 
          <ContentMedia /> 
          <ContentShop /> 
          <ContentContact />
        </div>
        <SideContent />
      </div>
)

class SideContent extends Component {

  constructor() {
    super()
    this.state = {
      dataLive: [],
      today: new Date (`${new Date().getFullYear()}-${new Date().getMonth()+1 < 10? `0${new Date().getMonth()+1}` : new Date().getMonth()+1}-${new Date().getDate()}`)
    }
  }

  componentDidMount() {
    fetch("/json/dataLive.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataLive: resp.dataLive}
      ));
  }

  render(){
    return (
      <div id="side_content">
        <div class="side_social">
          <h5>Upcoming Shows</h5>
          {this.state.dataLive.map((liveshow, i) => {
            return new Date (this.state.dataLive[i].showDate) > this.state.today ? ( 
              <DivLiveSmall 
                showDate = {this.state.dataLive[i].showDate}
                showCountry = {this.state.dataLive[i].showCountry}
                showCountryAbbr = {this.state.dataLive[i].showCountryAbbr}
                showCity = {this.state.dataLive[i].showCity}                  
                showVenue = {this.state.dataLive[i].showVenue}
                showVenueWeb = {this.state.dataLive[i].showVenueWeb}
                showComment = {this.state.dataLive[i].showComment}
                showTickets = {this.state.dataLive[i].showTickets}                    
                /> 
            ) : null;
          })}
        </div>

        <div class="side_social">
          {/*<h5>Facebook</h5>*/}
          <div class="fb-page" 
            data-tabs="timeline"
            data-show-facepile="false"
            data-small-header="true"
            data-height="750px"
            data-href="https://www.facebook.com/leechermusic"
            data-width="380"></div>
        </div>

        <div class="side_social">
          {/*<h5>Instagram</h5>*/}
          <iframe title="instagram_feed" src="//lightwidget.com/widgets/ff6a1cf069055ddbba5493a76ccbff9f.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width:"100%", border:0, overflow:"hidden"}}></iframe>

        </div>
      </div>
    );
  }
}

const DivLiveSmall = props => (
  <div class="div_live_small"><a className="live_small_link" href={props.showVenueWeb}><span className="live_small_sub">{props.showDate}</span><span className="live_small_sub">{`${props.showCity}, ${props.showCountryAbbr}`}</span></a></div>
)



const Bottom = () => (
  <div id="div_footer">-  © 2016-2019 Leecher  -  coded by kutor  -  contact: <a href="mailto:management@leechermusic.com" target="_blank" rel="noopener noreferrer">management@leechermusic.com</a> -</div>
)

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

const DivNews = props => (
<div className="div_news_small resp">
  <h5>{props.newsTitle}</h5>
  <p dangerouslySetInnerHTML={{ __html: props.newsText }} />
  <h6>{props.newsDate}</h6>
</div>
)


// ---------- BAND

const ContentBand = () => (
  <div id="link_band" className="anchor">
    <h2 className="centered">The Band / A Zenekar</h2>
    <div id="div_band" className="content_container">
      <DivBandBio />
      <DivBandMembers />
    </div>
  </div>
)

class DivBandBio extends Component {

  constructor() {
    super()
    this.state = {
      dataBandBio: [],
    }
  }

  componentDidMount() {
    fetch("/json/dataBandBio.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataBandBio: resp.dataBandBio}
      ))
  }

  render() {
    return (
      this.state.dataBandBio.map((bio, i) => {
        return ( 
            <DivNews 
              newsTitle = {<h4>{this.state.dataBandBio[i].dataBandBioTitle}</h4>}
              newsText = {this.state.dataBandBio[i].dataBandBioText}
            /> 
        );
      })
    );
  }
}

class DivBandMembers extends Component {

  constructor() {
    super()
    this.state = {
      dataBandMembers: [],
    }
  }

  componentDidMount() {
    fetch("/json/dataBandMembers.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataBandMembers: resp.dataBandMembers}
      ))
  }

  render() {
    return (
      <div id="band_members content_container">
        <h2 className="centered">Band Members / Tagok</h2>
        <div id="members">
        {this.state.dataBandMembers.map((member, i) => {
            return ( 
              <div className="band_member_profile resp">
                <img src={this.state.dataBandMembers[i].bandMemberImage} alt={this.state.dataBandMembers[i].bandMemberName}/>
                <h3>{this.state.dataBandMembers[i].bandMemberName}</h3>
                <p>{this.state.dataBandMembers[i].bandMemberTextEn}</p>
                <br />
                <p>{this.state.dataBandMembers[i].bandMemberTextHu}</p>
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

  constructor() {
    super()
    this.state = {
      dataBandAlbums: [],
    }
  }

  componentDidMount() {
    fetch("/json/dataBandAlbums.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataBandAlbums: resp.dataBandAlbums}
      ))
  }

  render() {
    return (
      <div id="link_albums" className="anchor">
        <h2 className="centered">Discography & Lyrics / Lemezek & Szövegek</h2>
        <div id="div_discography" className="content_container">
        
          {this.state.dataBandAlbums.map((album, i) => {
            return ( 
              <div className="div_album">
                <br />
                <h4>{`${this.state.dataBandAlbums[i].albumTitle} (${this.state.dataBandAlbums[i].albumYear})`}</h4>
                <img className="img_album" src={this.state.dataBandAlbums[i].albumCover} alt={this.state.dataBandAlbums[i].albumTitle} />
                {this.state.dataBandAlbums[i].albumSongsAndLyrics.map((song, j) => {
                  return (
                    <Song
                      songNumber = {this.state.dataBandAlbums[i].albumSongsAndLyrics[j].number}
                      songTitle = {this.state.dataBandAlbums[i].albumSongsAndLyrics[j].title}
                      songLyrics = {this.state.dataBandAlbums[i].albumSongsAndLyrics[j].lyrics}
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
      today: new Date (`${new Date().getFullYear()}-${new Date().getMonth()+1 < 10? `0${new Date().getMonth()+1}` : new Date().getMonth()+1}-${new Date().getDate()}`)
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
            return new Date (this.state.dataLive[i].showDate) > this.state.today ? ( 
              <DivLive 
                showDate = {this.state.dataLive[i].showDate}
                showCountry = {this.state.dataLive[i].showCountry}
                showCity = {this.state.dataLive[i].showCity}                  
                showVenue = {this.state.dataLive[i].showVenue}
                showVenueWeb = {this.state.dataLive[i].showVenueWeb}
                showComment = {this.state.dataLive[i].showComment}
                showTickets = {this.state.dataLive[i].showTickets}                    
                /> 
            ) : null;
          })}
          
        </div>
      </div>
    );
  }
}

const DivLive = props => (
      <div className="div_liveshow">
        <div className="div_liveshow_sub">
          <div>{props.showDate}</div>
          <div>{props.showCountry}</div>
          <div>{props.showCity}</div>
          <div><a href={props.showVenueWeb}>{props.showVenue}</a></div>
        </div>
        <div className="div_liveshow_sub">
          <div dangerouslySetInnerHTML={{ __html: props.showComment }}></div>
        </div>
        <div className="div_liveshow_sub">
          <div>{props.showTickets}</div>
        </div>
      </div>
)


// ---------- MEDIA

class ContentMedia extends Component {

  constructor() {
    super()
    this.state = {
      dataMediaPhotos: [],
      dataMediaVideos: []
    }
  }

  componentDidMount() {
    fetch("/json/dataMediaPhotos.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataMediaPhotos: resp.dataMediaPhotos}
      ));

      fetch("/json/dataMediaVideos.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataMediaVideos: resp.dataMediaVideos}
      ))
  }

  render() {
    return (
      <div id="link_media" className="anchor">
        <h2 className="centered">Music & Videos / Zene & Videók</h2>
        <div id="div_media" className="content_container">
          
          <div id="media_videos">
            {this.state.dataMediaVideos.map((video, i) => {
              return ( 
                <DivMediaVideo 
                  videoName = {this.state.dataMediaVideos[i].videoName}
                  videoLink = {this.state.dataMediaVideos[i].videoLink}
                  videoDescription = {this.state.dataMediaVideos[i].videoDescription}
                /> 
              );
            })}
          </div>
            
          <h2 className="centered">Photos / Fotók</h2>
          <div id="div_media_photos">
            {this.state.dataMediaPhotos.map((photo, j) => {
              return ( 
                <DivMediaPhoto
                  photoName = {this.state.dataMediaPhotos[j].photoName}
                  photoLink = {this.state.dataMediaPhotos[j].photoLink}
                  photoDescription = {this.state.dataMediaPhotos[j].photoDescription}
                /> 
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const DivMediaVideo = props => (
      <div className=" div_media_item resp">
        <h3>{props.videoName}</h3>
        <iframe title={props.videoName} className="iframe_youtube" src={props.videoLink}>
        </iframe>
        <p>{props.videoDescription}</p>
      </div>
)

const DivMediaPhoto = props => (
      <div className="div_media_item resp">
        <h3>{props.PhotoName}</h3>
        <a href={props.photoLink} target="_blank" rel="noopener noreferrer"><img src={props.photoLink} alt={props.photoDescription} /></a>
        <p>{props.photoDescription}</p>
      </div>
)

// ---------- SHOP


class ContentShop extends Component {

  constructor() {
    super()
    this.state = {
      dataShop: [],
    }
  }
  
  componentDidMount() {
    fetch("/json/dataShop.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataShop: resp.dataShop}
      ));
  }

  render() {
    return (
      <div id="link_shop" className="anchor">
        <h2 className="centered">Shop / Bolt</h2>
        <div id="div_shop" className="content_container">
          {this.state.dataShop.map((shopItem, i) => {
            return ( 
              <DivShop
                itemName = {this.state.dataShop[i].itemName}
                itemImage = {this.state.dataShop[i].itemImage}
                itemLink = {this.state.dataShop[i].itemLink}
                itemDescriptionEn = {this.state.dataShop[i].itemDescriptionEn}
                itemDescriptionHu = {this.state.dataShop[i].itemDescriptionHu}
              /> 
            );
          })}
        </div>
      </div>
    );
  }
}

const DivShop = props => (
      <article className="article_contact resp">
        <a href={props.itemLink} target="_blank" rel="noopener noreferrer">
          <img src={props.itemImage} alt={props.itemName} />
          <h3>{props.itemName}</h3>
          <br />
          <p>{props.itemDescriptionEn}</p>
          <p>{props.itemDescriptionHu}</p>
        </a>
      </article>
)


// ---------- CONTACT

class ContentContact extends Component {

  constructor() {
    super()
    this.state = {
      dataContacts: [],
      dataSocial: []
    }
  }
  
  componentDidMount() {
    fetch("/json/dataSocial.json")
      .then(response => response.json())
      .then(resp => this.setState(
        {dataContacts: resp.dataContacts,
        dataSocial: resp.dataSocial}
      ));
  }

  render() {
    return (
      <div id="link_contact" className="anchor">
        <h2 className="centered">Contact / Kapcsolat</h2>
        <div id="div_contact" className="content_container">
        
          {this.state.dataContacts.map((contact, i) => {
            return ( 
              <DivContact
                contactName = {this.state.dataContacts[i].contactName}
                contactPerson = {this.state.dataContacts[i].contactPerson}
                contactEmail = {this.state.dataContacts[i].contactEmail}
                contactWeb = {this.state.dataContacts[i].contactWeb}
                contactWebName = {this.state.dataContacts[i].contactWebName}
              /> 
            );
          })}
          {this.state.dataSocial.map((icon, i) => {
            return ( 
              <DivContactSocial 
                name={this.state.dataSocial[i].name} 
                icon={this.state.dataSocial[i].icon} 
                link={this.state.dataSocial[i].link}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const DivContact = props => (
      <article className="article_contact resp">
        <h3>{props.contactName}</h3>
        <p>{props.contactPerson.toUpperCase()}</p>
        <p>{props.contactEmail}</p>
        <a href={props.contactWeb} target="_blank" rel="noopener noreferrer">
          <p>{props.contactWebName}</p>
        </a>

      </article>
)

const DivContactSocial = props => (
      <article className="article_contact resp">
        <h3>{props.name}</h3>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.icon} alt={props.name} />
          <p>{props.linkDisplay}</p>
        </a>

      </article>
)

export default App;