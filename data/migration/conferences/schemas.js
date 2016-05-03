{
  first_name: String,
  last_name: String,
  tel: String,

  conferences: [
    {
	  title: String,
	  is_visible: Bolean,
	  note: String,
	  school_name: String,
	  school_url: String,
	  image: String,
	  description: String,
	  abstract: String,
	  day_conferences: [
	    {
	      is_full: Boolean,
	      dayStart: Date,
	      dayEnd: Date,
	    }
	  ]
	}]
}