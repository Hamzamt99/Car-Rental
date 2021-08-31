let form = document.getElementById('Form');
let ulEl = document.getElementById('cars');
let cars = [];

function SaveFromStorage(){
    let data = JSON.stringify(cars) 
    localStorage.setItem(model,data);

}
function ReadFromStorage(){
    let stringObj = localStorage.getItem(model);
    let normalObj = JSON.parse(stringObj);

    if(normalObj){
        cars = normalObj;
        render();
    }
    

}
ReadFromStorage();



function model(custName,CarModel,carprice){
    this.custName = custName;
    this.CarModel = CarModel;
    this.carprice = this.carprice;
    cars.push(this);
}
function buycar(event){
    event.preventDefault();
    let custName = event.target.custName.value;
    let CarModel = event.target.CarModel.value;

    new model(custName,CarModel);

    render();
    SaveFromStorage();


}
form.addEventListener('submit',buycar);

model.prototype.carprice = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.carprice = Math.floor(Math.random() * (max - min + 1) + min);

}
function render() {
    ulEl.textContent = '';
    let liEl;
    for (let i = 0; i < cars.length; i++) {
        liEl = document.createElement('li');
        
        liEl.textContent = `${cars[i].custName} ordered  ${cars[i].CarModel} OZ ${cars[i].carprice}`
        ulEl.appendChild(liEl);
    }
}
