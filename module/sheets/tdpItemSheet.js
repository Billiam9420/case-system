export default class tdpItemSheet extends ItemSheet
{
    get template()
    {
        return `systems/case-system/templates/items/${this.item.data.type}-sheet.html`;
    }
}