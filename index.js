$(function() {
    $('[data-toggler-element]').each(function(index, item) {
        item = $(item);
        item.find('[required]').attr('data-required', 'required');
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
        this.target =  $(`[data-toggler-element=${this.trigger.attr('data-toggler-trigger')}]`);
        this.element.on('change', this.toggle.bind(this));
        this.toggle();
    }

    toggle() {

        $.each(this.target, (index, item)=> {
            item = $(item);
            let checked = this.trigger.is(':checked');
            let visible = item.attr('data-toggler-default') == 'visible';
            item.toggle((checked && !visible) || (!checked && visible))
        });

        this.target.find('input').prop('checked', false).change();
        this.handleRequired();
    }

    handleRequired() {
        $.each(this.target.find('[data-required]'), (index, item)=> {
            item = $(item);
            item.attr('required', item.is(':visible') ? 'required' : false);
        });
    }
}