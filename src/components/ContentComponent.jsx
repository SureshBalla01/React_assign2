import './css/ContentComponent.css';

function ContentComponent(props) {
    return (
        <div className="content">
        <div className="about">About</div>
        <div className="links">
          <div className='quicklink1'>Quick links</div>
          <div className='quicklink2'>Quick links</div>
        </div>
      </div>
    );
}

export default ContentComponent;