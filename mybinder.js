class mybinder
{
  static bind(elemId, model, prop)
{  

  let e = document.getElementById(elemId);
  if (!model[prop]) 
  {
	  var oldValue = e.value;
    Object.defineProperty(model, prop, {
	get: function() { return oldValue; }
  , set: function(newValue) { oldValue = e.value = newValue; }
  , enumerable: true
  , configurable: true
});
}
  e.onchange = function(){ 
 							if(model[prop]);
							 model[prop] = e.value;
  };
  model.onchange = function(){
	e.value = model[prop];
};

}}
