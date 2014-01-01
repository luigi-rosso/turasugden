function turasGallery()
{
	function setupGallery()
	{
		console.log("SETTING IT UP!");
		var elements = document.getElementsByClassName("image-list");
		if(!elements.length)
		{
			return;
		}

		var element = elements[0];
		element.style.display = "block";
	}

	function hasGallery()
	{
	    if(document.readyState != "complete")
	    {
	      return false;
	    }
		var elements = document.getElementsByClassName("image-list");
		if(elements.length)
		{
			return true;
		}
		return false;
	}

	function checkReady()
	{
		if(!hasGallery())
		{
			console.log("TRYING AGAIN…");
			setTimeout(checkReady, 100);
		}
		else
		{
			setupGallery();
		}
	}

	checkReady();
};
window.___TG = new turasGallery();