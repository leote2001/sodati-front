import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

const ShareButtons = () => {
    const shareUrl = window.location.href; 
    const title = "Sodati"; 
  return (
    <div
      style={{
        background: '#0000',
        height: '100vh',
        width: '100%',
      }}
    >
      <h5>Comparte</h5>
      <FacebookShareButton
        url={shareUrl}
        quote={title}
      >
      Compartir en Facebook
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
      url={shareUrl}
      title={title}
      >
      Compartir en Twitter
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={title}
      >
      Compartir en Whatsapp
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  );
};
export {ShareButtons};