var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		isOpen: React.PropTypes.bool,
		backdropClosesModal: React.PropTypes.bool,
		headerTitle: React.PropTypes.string,
		headerHasCloseButton: React.PropTypes.bool
	},
	render() {
		// classes
		var dialogClass = classNames('modal-dialog', this.props.className);

		// elements
		var header = this.props.headerTitle ? <div className="modal-header">
			{this.props.headerHasCloseButton ? <span onClick={this.props.onChange} className="modal-close" /> : null}
			<h4 className="modal-title">Modal Header</h4>
		</div> : null; 

		var modalBackground = this.props.isOpen ? <div className="modal-backdrop" onClick={this.props.backdropClosesModal ? this.props.onChange : null} /> : null;
		var modalDialog = this.props.isOpen ? <div className={dialogClass}><div className="modal-content">
			{header}
			{this.props.children}
		</div></div> : null;
		
		return (
			<div className="modal">
				<ReactCSSTransitionGroup transitionName="modal-dialog" component="div">
					{modalDialog}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="modal-background" component="div">
					{modalBackground}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
