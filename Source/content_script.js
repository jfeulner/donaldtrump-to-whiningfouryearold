walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDonald Trump\b/g, "A whining 4 year old");
	v = v.replace(/\bDonald trump\b/g, "A whining 4 year old");
	v = v.replace(/\bdonald Trump\b/g, "A whining 4 year old");
	v = v.replace(/\bdonald trump\b/g, "A whining 4 year old");
	v = v.replace(/\bDonald J. Trump\b/g, "A whining 4 year old");
	v = v.replace(/\bDonald J trump\b/g, "A whining 4 year old");
	
	textNode.nodeValue = v;
}


