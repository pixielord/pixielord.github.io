(function () {
	var NEW_PAGE_COUNT = 1;
	var PREVIOUS = document.getElementById('previous');
	var NEXT = document.getElementById('next');
	var FRAME = document.getElementById('content_frame');
	var limit_start = 1;
	var limit_end = get_limit_end();

	NEXT.addEventListener("click", function() {
 		navigate_page("next");
	});
	PREVIOUS.addEventListener("click", function() {
 		navigate_page("previous");
	});

	FRAME.addEventListener("load", function() {
		var page = document.getElementsByClassName('current-page')[0];
		page.innerHTML = 'Page '+NEW_PAGE_COUNT;
	
		if( NEW_PAGE_COUNT == limit_end ){
			activate_pagination_nav( PREVIOUS );
			deactivate_pagination_nav( NEXT );

		}else if( NEW_PAGE_COUNT == limit_start ){
			activate_pagination_nav( NEXT );
			deactivate_pagination_nav( PREVIOUS );

		}else if( NEW_PAGE_COUNT > limit_start && NEW_PAGE_COUNT < limit_end ){
			activate_pagination_nav( NEXT );
			activate_pagination_nav( PREVIOUS );
		}
	});

	function get_limit_end(){
		checkpoint = is_transliteration() ? 39 : false;
		checkpoint = !checkpoint && is_way_of_cross() ? 34 : checkpoint;
		return checkpoint ? checkpoint : 21;
	}

	function navigate_page( $action ){
		PREVIOUS = document.getElementById('previous');
		NEXT = document.getElementById('next');
		FRAME = document.getElementById('content_frame');
		var page = document.getElementsByClassName('current-page')[0];
		NEW_PAGE_COUNT = page.getAttribute('data-count');
		if( $action == "next" ){
			navigate_next( page );

		}else if( $action == "previous" ){
			navigate_previous( page );
		}
	}

	function get_url(){
		checkpoint = is_transliteration() ? 'holymass/transliteration' : false;
		checkpoint = !checkpoint && is_way_of_cross() ? 'way-of-cross' : checkpoint;
		checkpoint = checkpoint ? checkpoint : 'prayers';
		return './templates/'+checkpoint+'/page'+NEW_PAGE_COUNT+'.html';
	}

	function is_transliteration(){
		var checkpoint = document.getElementById('transliteration');
		return checkpoint ? true : false;
	}

	function is_way_of_cross(){
		var checkpoint = document.getElementById('way_of_cross');
		return checkpoint ? true : false;
	}

	function navigate_next( page ){
		NEW_PAGE_COUNT++;
		if( NEW_PAGE_COUNT <= limit_end && NEW_PAGE_COUNT >= limit_start ){
			FRAME.src = get_url();
			page.setAttribute("data-count", NEW_PAGE_COUNT);
		}else if( NEW_PAGE_COUNT > limit_end ){
			NEW_PAGE_COUNT = limit_end;
			FRAME.src = get_url();
			page.setAttribute("data-count", NEW_PAGE_COUNT);
		}
	}

	function navigate_previous( page ){
		NEW_PAGE_COUNT--;
		if( NEW_PAGE_COUNT >= limit_start &&	 NEW_PAGE_COUNT <= limit_end ){
			FRAME.src = get_url();
			page.setAttribute("data-count", NEW_PAGE_COUNT);
		}else if( NEW_PAGE_COUNT < limit_start ){
			NEW_PAGE_COUNT = limit_start ;
			FRAME.src = get_url();
			page.setAttribute("data-count", NEW_PAGE_COUNT);
		}
	}

	function deactivate_pagination_nav( elm ){
		if( !elm.classList.contains('disabled-nav') ){
	  		elm.classList.add('disabled-nav');
		}
	}

	function activate_pagination_nav( elm ){
		if( elm.classList.contains('disabled-nav') ){
	  	elm.classList.remove('disabled-nav');
		}
	}
})();
