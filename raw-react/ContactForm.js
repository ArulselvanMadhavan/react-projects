var ContactForm = React.createClass( {
	propTypes: {
		contact: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
	},

	render: function () {
		var oldContact = this.props.contact;
		var onChange = this.props.onChange;

		return (
			React.createElement( 'form', {
					className: 'ContactForm'
				},
				React.createElement( 'input', {
					type: 'text',
					placeholder: 'Name (required)',
					contact: this.props.contact.name,
					onChange: function ( e ) {
						onChange( Object.assign( {}, oldContact, {
							name: e.target.contact
						} ) );
					},
				} ),
				React.createElement( 'input', {
					type: 'email',
					placeholder: 'Email',
					contact: this.props.contact.email,
					onChange: function ( e ) {
						onChange( Object.assign( {}, oldContact, {
							email: e.target.contact
						} ) );
					},
				} ),
				React.createElement( 'textarea', {
					placeholder: 'Description',
					contact: this.props.contact.description,
					onChange: function ( e ) {
						onChange( Object.assign( {}, oldContact, {
							description: e.target.contact
						} ) );
					},
				} ),
				React.createElement( 'button', {
					type: 'submit'
				}, "Add Contact" )
			)
		);
	},
} );

var state = {};

function updateNewContact( contact ) {
	setState( {
		newContact: contact
	} );
}

function setState( changes ) {
	Object.assign( state, changes );
	ReactDOM.render(
		React.createElement( ContactView, Object.assign( {}, state, {
			onNewContactChange: updateNewContact,
		} ), document.getElementById( 'react-app' ) )
	);
}

// Set initial data
setState( {
	contacts: [
		{
			key: 1,
			name: "James K Nelson",
			email: "james@jamesknelson.com",
			description: "Front-end Unicorn"
		},
		{
			key: 2,
			name: "Jim",
			email: "jim@example.com"
		},
  ],
	newContact: {
		name: "",
		email: "",
		description: ""
	},
} );
