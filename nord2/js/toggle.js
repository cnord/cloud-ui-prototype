/* ============================================================
 * Скрипт для изменения классов кнопок по клику на них.
 * http://stackoverflow.com/questions/11267137/toggle-twitter-bootstrap-button-class-when-active
 * ============================================================ */


$('.btn-group > .btn, .btn[data-toggle="button"]').click(function() {
var buttonClasses = ['btn-primary','btn-danger','btn-warning','btn-success','btn-info','btn-inverse'];
var $this = $(this);
    

    
    if ($(this).attr('class-toggle') != undefined && !$(this).hasClass('disabled')) {
        
        var btnGroup = $this.parent('.btn-group');
        var btnToggleClass = $this.attr('class-toggle');
        var btnCurrentClass = $this.hasAnyClass(buttonClasses);
        
        
        if (btnGroup.attr('data-toggle') == 'buttons-radio') {
                if($this.hasClass('active')) {
                    return false;
                }
            var activeButton = btnGroup.find('.btn.active');
            var activeBtnClass = activeButton.hasAnyClass(buttonClasses);
            
            activeButton.removeClass(activeBtnClass).addClass(activeButton.attr('class-toggle')).attr('class-toggle',activeBtnClass);
            
         
        }

      
            $this.removeClass(btnCurrentClass).addClass(btnToggleClass).attr('class-toggle',btnCurrentClass);
       

    }



});    

$.fn.hasAnyClass = function(classesToCheck) {
        for (var i = 0; i < classesToCheck.length; i++) {
            if (this.hasClass(classesToCheck[i])) {
                return classesToCheck[i];
            }
        }
        return false;
    }