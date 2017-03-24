import React from 'react';

var Decorators = [
  {
    component: React.createClass({

      shouldComponentUpdate(nextProps, nextState) {
          return this.props.currentSlide !== nextProps.currentSlide;
      },

      render() {
        return (
          <div>
            <i className="fa fa-chevron-circle-left fa-3x" onClick={this.props.previousSlide} aria-hidden="true"></i>
          </div>
        )
      }
    }),
    position: 'CenterLeft',
    style: {
      padding: 20,
      color: '#282828',
    }
  },
  {
    component: React.createClass({

      shouldComponentUpdate(nextProps, nextState) {
          return this.props.currentSlide !== nextProps.currentSlide;
      },

      render() {
        return (
          <div>
            <i className="fa fa-chevron-circle-right fa-3x" onClick={this.props.nextSlide} aria-hidden="true"></i>
          </div>
        )
      }
    }),
    position: 'CenterRight',
    style: {
      padding: 20,
      color: '#282828',
    }
  }
];

export default Decorators
