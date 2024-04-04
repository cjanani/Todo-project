var item = document.getElementById('addbutton'); //get item from input box
var ul = document.getElementById('demo'); //acess the unordered list

function addItem()
{
    var item1 = item.value;
    if(item1 !== '')
    {

        var li = document.createElement('li'); //create a list
        li.textContent = item1; //add the input value to list
        ul.appendChild(li); //add list item to the unordered list
        
        document.getElementById('addbutton').value = " "; //clear the input box
        
        /*****************/

        var delbtn = document.createElement("button"); //create a button element
        // x.textContent = "Delete"; //name it as delete
        delbtn.innerHTML = `<svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M667.8 362.1H304V830c0 28.2 23 51 51.3 51h312.4c28.4 0 51.4-22.8 51.4-51V362.2h-51.3z" fill="#CCCCCC" /><path d="M750.3 295.2c0-8.9-7.6-16.1-17-16.1H289.9c-9.4 0-17 7.2-17 16.1v50.9c0 8.9 7.6 16.1 17 16.1h443.4c9.4 0 17-7.2 17-16.1v-50.9z" fill="#CCCCCC" /><path d="M733.3 258.3H626.6V196c0-11.5-9.3-20.8-20.8-20.8H419.1c-11.5 0-20.8 9.3-20.8 20.8v62.3H289.9c-20.8 0-37.7 16.5-37.7 36.8V346c0 18.1 13.5 33.1 31.1 36.2V830c0 39.6 32.3 71.8 72.1 71.8h312.4c39.8 0 72.1-32.2 72.1-71.8V382.2c17.7-3.1 31.1-18.1 31.1-36.2v-50.9c0.1-20.2-16.9-36.8-37.7-36.8z m-293.5-41.5h145.3v41.5H439.8v-41.5z m-146.2 83.1H729.5v41.5H293.6v-41.5z m404.8 530.2c0 16.7-13.7 30.3-30.6 30.3H355.4c-16.9 0-30.6-13.6-30.6-30.3V382.9h373.6v447.2z" fill="#211F1E" /><path d="M511.6 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.4 9.3 20.7 20.8 20.7zM407.8 798.9c11.5 0 20.8-9.3 20.8-20.8V466.8c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0.1 11.4 9.4 20.7 20.8 20.7zM615.4 799.6c11.5 0 20.8-9.3 20.8-20.8V467.4c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8v311.4c0 11.5 9.3 20.8 20.8 20.8z" fill="#211F1E" /></svg>`;
        delbtn.addEventListener('click', deletefunc); // when clicked go to deletefunc
        li.appendChild(delbtn); //add child to list
        delbtn.className = "delbtn";

        /*****************/


        var donebtn = document.createElement("button"); //create a button element
        // x.textContent = "Delete"; //name it as delete
        donebtn.innerHTML = `<svg width="15px" height="15px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style>
        .cls-1 {
          fill: #699f4c;
          fill-rule: evenodd;
        }
        </style></defs><path class="cls-1" d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z" id="check" transform="translate(-770 -450)"/></svg>`;
        donebtn.addEventListener('click', donefunc); // when clicked go to deletefunc
        li.appendChild(donebtn); //add child to list

        /*****************/
    }

}

function deletefunc(event)
{
var parent = event.currentTarget.parentNode;
console.log(parent);
ul.removeChild(parent);
}


function donefunc(event)
{
    var parent = event.currentTarget.parentNode; //get current node's parent item
    console.log(parent);
    //var list = document.querySelectorAll('ul');
    parent.id ='completed'; //apply strikethrough to the chosen item
}
//li is not defined global, find alternative