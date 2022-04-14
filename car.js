AFRAME.registerComponent('box',{
    schema:{
        moveX:{type:'number', default:2}
    },
    tick:function(){

        windows.addEventListener("click",(e)=>{
            this.data.moveX=this.data.moveX+0.01;
        });
        
        var pos=this.el.getAttribute("position")
        pos.x=this.data.moveX
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})
    }
})