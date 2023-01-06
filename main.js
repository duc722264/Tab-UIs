const $ = document.querySelector.bind(document)

const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')

const tabActive = $('.tab-item.active')

const panes = $$('.tab-pane')

const line = $('.tabs .line')

tabs.forEach(function (tab, index) {
    const pane = panes[index]
    tab.onclick = function() {
        tabActive.classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active')
        pane.classList.add('active')
    }
})



