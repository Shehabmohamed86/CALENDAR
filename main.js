const select = document.querySelector('#select');
const header = document.querySelector('h1');
const list = document.querySelector('ul')

select.addEventListener('change',()=>{
  const choice = select.value;
  let days = 31;
  if (choice === 'February'){
    days = 28
  }else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November'){
    days = 30
  }
  createCalendar(choice,days)
})


function createCalendar (choice,days) {
  list.innerHTML = '';
  header.textContent = choice;
  for (let i = 1; i <= days; i++){
    const  listItem = document.createElement('li')
    listItem.textContent = i;
    list.appendChild(listItem)
  }


}
createCalendar('Junuary',31)


