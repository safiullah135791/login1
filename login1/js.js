function clicking(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if ((name== 'admin' && password == 'admin' )||(name == 'user' && password == 'user'))
    {
        alert('login succesfully');
        return true;
    }else if ((name=='admin' && password==''))
    {
        alert('Enter Username And Password Please !!!')
    }
}
