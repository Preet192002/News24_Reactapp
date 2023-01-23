import React, { Component } from 'react'

export class NewsItem extends Component {




  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            position: 'absolute',
            justifyContent: 'flex-end',
            right: '0'

          }}>

            <span className=" badge rounded-pill bg-danger">
              {source}  </span>
          </div>





          <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/screenshot_2022-12-31_at_10.12.46_am-sixteen_nine.png?VersionId=7nDUalgvr_oUfeKUNZ70pZgr0s3chiER" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description}</p>
            <p className='card-text' ><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()} </small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
