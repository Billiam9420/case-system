export default class tdpItemSheet extends ItemSheet
{
    get template()
    {
    	// point item types to the proper html files
        return `systems/case-system/templates/items/${this.item.data.type}-sheet.html`;
    }
}