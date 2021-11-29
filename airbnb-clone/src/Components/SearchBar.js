import React from 'react'

function SearchBar() {
  return (
    <div className="mid__section">
      <div className="mid__form">
        <form className="search__form" action="">
        {/* EXPERIENCIAS */}
          <div className="top__searchbar">
            <div className="search__places">  {/* PLACES TO STAY */}
              <h4>Places to stay</h4>
            </div>
            <div className="search__experiences">  {/* EXPERIENCES */}
              <h4>Experiences</h4>
            </div>
            <div className="search__online">  {/* ONLINE EXPERIENCES */}
              <h4>Online Experiences</h4>
            </div>
          </div>

          {/* BIG SEARCH BAR   */}
          <div className="bottom__searchbar">
            <div className="form__searchbar">
              <div className="search__location">    {/* location */}
                <div className="search_location_form">
                  <label className="search_location_query" htmlFor="bigsearch-query">
                    <div className="search_location_box">
                      <div className="search_location_text">Location</div>
                      <input className="search_location_input" placeholder="Where are you going?" type="text" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="search_horizontal_border"></div>
              <div className="form_search_checkin_checkout">     {/* checkin */}
                <div className="search_checkin_box">
                  <div className="search_checkin_info">
                    <div className="checkin_text">Check in</div>
                    <div className="checkin_dates">Add dates</div>
                  </div>
                </div>
                <div className="search_horizontal_border"></div>
                <div className="search_checkout_box">
                  <div className="search_checkout_info">
                    <div className="checkout_text">Check out</div> {/* checkout */}
                    <div className="checkout_dates">Add dates</div>
                  </div>
                </div>
                <div className="search_horizontal_border"></div>
              </div>
              {/* GUESTS AND SEARCH ICON */}
              <div className="form_add_search_guests">
                <div className="search_add_guests">
                  <div className="checkout_text">Guests</div> {/* add guests */}
                  <div className="checkout_dates">Add guests</div>
                </div>
                <div className="search_icon_form">
                  <button className="search_icon_field" type="button">

                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
