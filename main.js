// choosing Dom elements 
const tagsDom = document.getElementsByClassName("tags")[0];
const textareaDom = document.getElementById("textarea");

textareaDom.focus();

textareaDom.addEventListener("keyup", getValue);

function getValue(e) {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        },10);
        
        randomSelect();
    }
}

function createTags(input) {

    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsDom.innerHTML = ''

    tags.forEach(function(tag) {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag;
        tagsDom.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

