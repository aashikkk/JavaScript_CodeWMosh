function HTMLElement(){
    this.click = function(){
        console.log('clicked');
    }
}

HTMLElement.prototype.focus = function(){
    console.log('focused');
}

function HTMLSelectElement(items = []){
    this.items = items;

    this.addItem = function(item){
        this.items.push(item);
    }
    this.removeItem = function(item){
        this.items = this.items.filter((e)=> e !== item );
    }
    // or splice method
    // this.items.splice(this.items.indexOf(item), 1)
}

// baseHTMLSelectElement 
// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype); // baseHTMLElement only prototype func mattum than edukum.
HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;