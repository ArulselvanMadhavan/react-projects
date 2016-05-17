var Comment = React.createClass( {
			rawMarkup: function () {
				var rawMarkup = marked( this.props.children.toString(), {
					sanitize: true
				} );
				return {
					__html: rawMarkup
				};
			},
			render: function () {
				return ( < div className = "comment" >
					< h2 className = "commentAuthor" > {
						this.props.author
					} < /h2> < span dangerouslySetInnerHTML ={this.rawMarkup()}/ > < /div > );
				}
			} );

		var CommentList = React.createClass( {
					render: function () {
						return ( < div className = "commentList" >
							< Comment author = "Arul" > First Comment < /Comment> < Comment author = "Selvan" > *Second* Comment < /Comment > < /div > );
						}
					} );

				var CommentForm = React.createClass( {
							render: function () {
								return ( < div className = "commentForm" > This is a comment form < /div> );
								}
							} );

						var CommentBox = React.createClass( {
							render: function () {
								return ( < div className = "commentBox" >
									< h1 > Comments < /h1> < CommentList / >
									< CommentForm / >
									< /div>
								);
							}
						} );

						ReactDOM.render( < CommentBox / > , document.getElementById( 'content' ) );
