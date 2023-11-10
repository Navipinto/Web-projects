let str="";
buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value== '=')
        {
            output=document.getElementById('display');
            output.value=eval(str);
            str=eval(str);
        }
        else if(e.target.value=='AC')
        {
            str='';
            output=document.getElementById('display');
            output.value=str;
        }

       else if(e.target.value=='DE')
        {
                let len=str.length;
                str=str.slice(0,len-1);
                output=document.getElementById('display');
                output.value=str;
        }
        else{
        str=str+e.target.value;
        var output=document.getElementById('display');
        output.value=str;
        }
    
    })

})


