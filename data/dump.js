Yoga: <- courseType
	Du 18 Janvier au 08 Juillet 2016
		Lundi <- scheduleDay
			18:00 à 19:20 <- hours Réserver Complet <- schedule
			19:30 à 20:45 Réserver Complet
		Jeudi
			15:30 à 16:40 Réserver Complet
				(Gratuit le 05 mai 2016 )
		Vendredi
			12:00 à 13:15 Réserver Complet
				(Gratuit le 06 mai 2016 ) <- freeDay

// http://www.bennadel.com/blog/2915-setting-the-state-based-on-rendered-dom-elements-in-reactjs.htm

		// I manage the root component.
		var Demo = React.createClass({

			// I return the initial state of the component.
			getInitialState: function() {

				for ( var items = [], i = 1 ; i <= 50 ; i++ ) {

					items.push( i );

				}

				return({
					items: items,
					width: "full",
					visibleCount: 0
				});

			},


			// ---
			// PUBLIC METHODS.
			// ---


			// Once the list element has been rendered, we can calculate how many items 
			// we can render in the room allotted.
			calculateVisibleCount: function() {

				// Get the available width of the rendered element.
				var containerWidth = this.refs.items.getDOMNode().clientWidth;

				// For the sake of simplicity, we're going to hard-code the width required
				// to render one of the items (including the inter-item margin).
				var itemWidth = ( 50 + 10 ); 

				// Set the state that will be used in the render() method to determine 
				// how many items we can fit and how many items will have to be left in
				// the "+N" teaser.
				this.setState({
					visibleCount: Math.floor( containerWidth / itemWidth )
				});

			},


			// I get called once, on the client, when the component has been rendered
			// in the DOM.
			componentDidMount: function() {

				// Keep track of window-resize event since we'll have to recalculate the
				// number of items we can fit in the new window dimensions.
				window.addEventListener( "resize", this.handleWindowResize );

				// Now that the DOM has been rendered, we can inspect the dimensions.
				this.calculateVisibleCount();

			},


			// I get call after changes to the virtual DOM are flushed to the physical DOM. 
			componentDidUpdate: function() {

				// CAUTION: Do not try to call .setState() in this method. You will 
				// quickly find yourself in an infinite loop.

			},


			// I get called once right before the component is removed from the DOM.
			componentWillUnmount: function() {

				window.removeEventListener( "resize", this.handleWindowResize );

			},


			// I handle a click on the "set full width" link.
			handleFullWidth: function( event ) {

				this.setState(
					{
						width: "full"
					},
					// NOTE: The second argument is a callback that will be invoked when
					// these state changes have been flushed to the DOM. This gives an
					// opportunity to update the state based on the DOM changes without
					// getting into an infinite loop (although, this will cause another
					// call to render(), which is what we want).
					this.calculateVisibleCount
				);

			},


			// I handle a click on the "set half width" link.
			handleHalfWidth: function( event ) {

				this.setState(
					{
						width: "half"
					},
					// NOTE: The second argument is a callback that will be invoked when
					// these state changes have been flushed to the DOM. This gives an
					// opportunity to update the state based on the DOM changes without
					// getting into an infinite loop (although, this will cause another
					// call to render(), which is what we want).
					this.calculateVisibleCount
				);

			},


			// I handle window resize event.
			handleWindowResize: function( event ) {

				// Once the window is resized, it means the items container may have 
				// changed dimensions. As such, we may have to recalculate the number
				// of items that can be rendered.
				this.calculateVisibleCount();

			},


			// I return the virtual DOM based on the current state.
			render: function() {

				// Determine how many items we can render. If we don't have enough 
				// space to render all of the items, we have to account of the space 
				// requirements of the "teaser" as well.
				if ( this.state.visibleCount < this.state.items.length ) {

					var renderCount = ( this.state.visibleCount - 1 );
					var overflowCount = ( this.state.items.length - renderCount );

					var teaser = ( 
						<span key={ "teaser" } className="item teaser">
							+{ overflowCount }
						</span> 
					);

				} else {

					var renderCount = this.visibleCount;
					var teaser = null;

				}

				// Map the items onto react elements.
				var items = this.state.items
					.slice( 0, renderCount )
					.map(
						function operator( id ) {

							return( <span key={ id } className="item">{ id }</span> );

						}
					)
				;

				return(
					<div>

						<p>
							{ "Items: " }
							<a onClick={ this.handleFullWidth }>Full width</a>
							{ " or " }
							<a onClick={ this.handleHalfWidth }>Half width</a>
						</p>

						<div ref="list" className={ ( "list " + this.state.width ) }>
							<div ref="items" className="items">
								{ items }
								{ teaser }
							</div>
						</div>

						<p>
							Showing { renderCount } of { this.state.items.length } items.
						</p>

					</div>
				);

			}

		});


		// --------------------------------------------------------------------------- //
		// --------------------------------------------------------------------------- //


		// Render the root Demo and mount it inside the given element.
		React.render( <Demo />, document.getElementById( "content" ) );

	