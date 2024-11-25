import React from 'react';

class Preview extends React.Component {
  render() {
    return (
      <div
        className="preview-container"
        // Render HTML safely using dangerouslySetInnerHTML
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      ></div>
    );
  }
}

export default Preview;
