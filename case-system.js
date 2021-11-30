import tdpItemSheet from "./module/sheets/tdpItemSheet.js";
import tdpActorSheet from "./module/sheets/tdpActorSheet.js";
Hooks.once("init", function()
{
    console.log("TDP | Initializing CASE System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("case-system", tdpItemSheet, {makeDefault: true});
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("case-system", tdpActorSheet, {makeDefault: true});
});