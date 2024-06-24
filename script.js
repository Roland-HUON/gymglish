// Code goes here

function countOccurence(text, occurence) {
    while (document.scripts.length > 0) {
        document.scripts[0].parentNode.removeChild(document.scripts[0]);
    }
    
    const wordDoc = document.getElementById('text').innerHTML.replace(/<!--\s*<p>Not displayed hello world<\/p>\s*-->/g, ' ');
    // console.log(wordDoc);
    const textWithoutBalises = wordDoc.replace(/<[^>]*>/g, ' | ');
    // console.log(textWithoutBalises);
    const textWithoutSpace = textWithoutBalises.replace(/\s+/g, ' ').trim();
    // console.log(textWithoutSpace);
    const findtext = new RegExp(`(?<!')\\b${text}\\b(?!')`, 'gi');
    console.log(findtext);
    console.log(textWithoutSpace.match(findtext));
    let findall = textWithoutSpace.match(findtext)?.length ?? 0;
    console.log(findall);
    return findall;
}
