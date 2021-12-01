export default class tdpItemSheet extends ItemSheet
{
    get template()
    {
        return `systems/case-system/templates/items/${this.item.data.type}-sheet.html`;
    }

    getData()
    {
        // simplify access so that we can type ".data" instead of ".data.data"
		let sheetData = super.getData()
		sheetData.data = sheetData.data.data
		return sheetData;
	}
}