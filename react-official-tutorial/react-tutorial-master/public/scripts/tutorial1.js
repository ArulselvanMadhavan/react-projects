var CommentBox = React.createClass( {
	render: function () {
		return ( < div className = "commentBox" >
			"Hello, I am a comment box" < /div>
		);
	}
} );

ReactDOM.render( < CommentBox / > , document.getElementById( 'content' ) );
