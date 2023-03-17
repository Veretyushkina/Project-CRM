const elements = {
	table: document.querySelector('#tbody'),
    select: document.querySelector('#productSelect'),
    topStatusBar: document.querySelector('#topStatusBar'),
    leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
    leftPenalNav: document.querySelector('.left-panel__navigation'),
    badgeNew: document.querySelector('#badge-new')

};

function renderRequests(requests) {
	elements.table.innerHTML = '';

	const badges = {
		new: 'badge-danger',
		inwork: 'badge-warning',
		complete: 'badge-success'
	}

	for (let request of requests) {
		const template = `<tr>
                <th scope="row">${request.id}</th>
                <td>${request.date}</td>
                <td>${request.productName}</td>
                <td>${request.name}</td>
                <td>${request.email}</td>
                <td>${request.phone}</td>
                <td>
                    <div class="badge badge-pill ${badges[request.status]}">${request.statusName}</div>
                </td>
                <td>
                    <a href="edit.html?id=${request.id}">Редактировать</a>
                </td>
            </tr>`;
			elements.table.insertAdjacentHTML('beforeend', template)
	}
}

function updateStatusLinks(value){
    //top status bar
    elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'))
    elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active')

    //left side bar
    elements.leftStatusLinks.forEach((link) => link.classList.remove('active'))
    elements.leftPenalNav.querySelector(`a[data-value="${value}"]`).classList.add('active')
}

function renderBadgeNew (number){
    elements.badgeNew.innerText = number
}

function updateFilter(filter){

    //фильтр по продукту
elements.select.value = filter.products

//top status bsr
elements.topStatusBar.querySelectorAll('a').forEach((link) => link.classList.remove('active'))
elements.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add('active')

    //left side bar
    elements.leftStatusLinks.forEach((link) => link.classList.remove('active'))
    elements.leftPenalNav.querySelector(`a[data-value="${filter.status}"]`).classList.add('active')
}

export {elements, renderRequests, updateStatusLinks, renderBadgeNew, updateFilter}