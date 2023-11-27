var clickCount = 0;
function extendCard() {
    if(isOdd(clickCount) == 0){
        var existingElement = document.getElementById('myElementId');
        existingElement.textContent = 'New text content';
        existingElement.innerHTML = 'There’s never been more options to choose from in the world of e-bikes, but which are the best electric bikes of 2023? The team at Electric Bike Report put our heads together and chose 16 e-bikes we’ve deemed the Best Electric Bikes of 2023. Some of these e-bikes are new for this year, but some are ol’ reliables that are tried, tested and still hold true as the best in their class. As with every list of best e-bikes, ours has some nuance as to why a specific bike was picked — ranging from value and componentry to overall ride feel. We’ve also leaned heavily on e-bikes we’ve tested in-house, though there are a few e-bikes here that were picked based on merit and reputation alone. Whether you’re looking for the best e-bike for older riders, the best electric commuter bike or the best electric beach cruiser, this list will point you towards what we think are the best in each category.';
        clickCount++;
    }
    else{
        var existingElement = document.getElementById('myElementId');
        existingElement.textContent = 'New text content';
        existingElement.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ex ut odio luctus cursus.';
        clickCount++;
    }

}

function isOdd(num) { return num % 2;}