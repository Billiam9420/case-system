export default class tdpActorSheet extends ActorSheet
{
    static get defaultOptions()
    {
        return mergeObject(super.defaultOptions,
        {
            width: 1500,
            height: 1000
        });
    }

    get template()
    {
        return `systems/case-system/templates/actors/${this.actor.data.type}-sheet.html`;
    }

    getData()
    {
		let sheetData = super.getData()
		sheetData.data = sheetData.data.data
		return sheetData;
	}

    activateListeners(html)
    {
        super.activateListeners(html);
        html.find('.rollable').click(this._onRoll.bind(this));
    }

    _onRoll(event)
    {
         event.preventDefault();
         const element = event.currentTarget;
         const dataset = element.dataset;

        if (dataset.roll)
        {
            let roll = new Roll(dataset.roll, this.actor.data.data);
            let label = dataset.label ? `Rolling ${dataset.label}` : '';
            roll.roll().toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label
            });
        }
    }
}