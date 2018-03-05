$(function() {
    $('[data-toggler-element]').each(function(index, item) {
        item = $(item);
        $.each(item.find('[required]'), (index, requiredItem)=> {
            $(requiredItem).attr('data-required', 'required');
        });
        if (item.attr('data-toggler-default') != 'visible') item.hide();
    });
	$('.js-form-toggler').each(function(index, item) {
		item = $(item);
		if (!item.data('FormToggler')) {
			item.data('FormToggler', new FormToggler(item));
		}
    });
});

class FormToggler {
    constructor(element) {
        this.element = element;
        this.trigger = this.element.find('[data-toggler-trigger]');
        this.element.on('change', this.toggle.bind(this));
        this.toggle();
    }

    toggle() {
        this.target =  $(`[data-toggler-element=${this.trigger.attr('data-toggler-trigger')}]`);
        let show = false;

        if(this.trigger.is(':checked') && this.target.attr('data-toggler-default') != 'visible') {
            show = true;
        }

        if(!this.trigger.is(':checked') &&  this.target.attr('data-toggler-default') == 'visible') {
            show = true;
        }

        if(show) {
            this.target.show();
        } else {
            this.target.hide();
        }
        
        this.target.find('input').prop('checked', false).change();
        this.handleRequired();
    }

    handleRequired() {
        $.each(this.target.find('[data-required]'), (index, item)=> {
            item = $(item);
            if(item.is(':visible')) {
                item.attr('required', 'required');
            } else {
                item.attr('required', false);
            }
        });
    }
}
