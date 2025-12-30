gdjs.InizioCode = {};
gdjs.InizioCode.localVariables = [];
gdjs.InizioCode.idToCallbackMap = new Map();
gdjs.InizioCode.GDSmallWhiteButtonObjects1= [];
gdjs.InizioCode.GDSmallWhiteButtonObjects2= [];
gdjs.InizioCode.GDNewBitmapTextObjects1= [];
gdjs.InizioCode.GDNewBitmapTextObjects2= [];
gdjs.InizioCode.GDNewTiledSpriteObjects1= [];
gdjs.InizioCode.GDNewTiledSpriteObjects2= [];
gdjs.InizioCode.GDNewTiledSprite2Objects1= [];
gdjs.InizioCode.GDNewTiledSprite2Objects2= [];
gdjs.InizioCode.GDNewBitmapText2Objects1= [];
gdjs.InizioCode.GDNewBitmapText2Objects2= [];
gdjs.InizioCode.GDNewBitmapText3Objects1= [];
gdjs.InizioCode.GDNewBitmapText3Objects2= [];
gdjs.InizioCode.GDNewBitmapText4Objects1= [];
gdjs.InizioCode.GDNewBitmapText4Objects2= [];
gdjs.InizioCode.GDNewLightObjects1= [];
gdjs.InizioCode.GDNewLightObjects2= [];
gdjs.InizioCode.GDtavoloObjects1= [];
gdjs.InizioCode.GDtavoloObjects2= [];
gdjs.InizioCode.GDPortalObjects1= [];
gdjs.InizioCode.GDPortalObjects2= [];
gdjs.InizioCode.GDPlayerObjects1= [];
gdjs.InizioCode.GDPlayerObjects2= [];
gdjs.InizioCode.GDScoreTextObjects1= [];
gdjs.InizioCode.GDScoreTextObjects2= [];
gdjs.InizioCode.GDJoystickObjects1= [];
gdjs.InizioCode.GDJoystickObjects2= [];
gdjs.InizioCode.GDJumpButtonObjects1= [];
gdjs.InizioCode.GDJumpButtonObjects2= [];
gdjs.InizioCode.GDCoinObjects1= [];
gdjs.InizioCode.GDCoinObjects2= [];
gdjs.InizioCode.GDTopBoundaryObjects1= [];
gdjs.InizioCode.GDTopBoundaryObjects2= [];
gdjs.InizioCode.GDBottomBoundaryObjects1= [];
gdjs.InizioCode.GDBottomBoundaryObjects2= [];
gdjs.InizioCode.GDLeftBoundaryObjects1= [];
gdjs.InizioCode.GDLeftBoundaryObjects2= [];
gdjs.InizioCode.GDRightBoundaryObjects1= [];
gdjs.InizioCode.GDRightBoundaryObjects2= [];
gdjs.InizioCode.GDBoundaryJumpThroughObjects1= [];
gdjs.InizioCode.GDBoundaryJumpThroughObjects2= [];


gdjs.InizioCode.mapOfGDgdjs_9546InizioCode_9546GDtavoloObjects1Objects = Hashtable.newFrom({"tavolo": gdjs.InizioCode.GDtavoloObjects1});
gdjs.InizioCode.mapOfGDgdjs_9546InizioCode_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.InizioCode.GDNewTiledSprite2Objects1});
gdjs.InizioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallWhiteButton"), gdjs.InizioCode.GDSmallWhiteButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InizioCode.GDSmallWhiteButtonObjects1.length;i<l;++i) {
    if ( gdjs.InizioCode.GDSmallWhiteButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.InizioCode.GDSmallWhiteButtonObjects1[k] = gdjs.InizioCode.GDSmallWhiteButtonObjects1[i];
        ++k;
    }
}
gdjs.InizioCode.GDSmallWhiteButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Piazza", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.InizioCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.InizioCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDNewLightObjects1[i].setRadius(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("tavolo"), gdjs.InizioCode.GDtavoloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InizioCode.mapOfGDgdjs_9546InizioCode_9546GDtavoloObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.InizioCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.InizioCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDNewLightObjects1[i].setRadius(200);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.InizioCode.GDNewTiledSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InizioCode.mapOfGDgdjs_9546InizioCode_9546GDNewTiledSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewLight"), gdjs.InizioCode.GDNewLightObjects1);
{for(var i = 0, len = gdjs.InizioCode.GDNewLightObjects1.length ;i < len;++i) {
    gdjs.InizioCode.GDNewLightObjects1[i].setRadius(0);
}
}
}

}


};

gdjs.InizioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InizioCode.GDSmallWhiteButtonObjects1.length = 0;
gdjs.InizioCode.GDSmallWhiteButtonObjects2.length = 0;
gdjs.InizioCode.GDNewBitmapTextObjects1.length = 0;
gdjs.InizioCode.GDNewBitmapTextObjects2.length = 0;
gdjs.InizioCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InizioCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InizioCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.InizioCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.InizioCode.GDNewBitmapText2Objects1.length = 0;
gdjs.InizioCode.GDNewBitmapText2Objects2.length = 0;
gdjs.InizioCode.GDNewBitmapText3Objects1.length = 0;
gdjs.InizioCode.GDNewBitmapText3Objects2.length = 0;
gdjs.InizioCode.GDNewBitmapText4Objects1.length = 0;
gdjs.InizioCode.GDNewBitmapText4Objects2.length = 0;
gdjs.InizioCode.GDNewLightObjects1.length = 0;
gdjs.InizioCode.GDNewLightObjects2.length = 0;
gdjs.InizioCode.GDtavoloObjects1.length = 0;
gdjs.InizioCode.GDtavoloObjects2.length = 0;
gdjs.InizioCode.GDPortalObjects1.length = 0;
gdjs.InizioCode.GDPortalObjects2.length = 0;
gdjs.InizioCode.GDPlayerObjects1.length = 0;
gdjs.InizioCode.GDPlayerObjects2.length = 0;
gdjs.InizioCode.GDScoreTextObjects1.length = 0;
gdjs.InizioCode.GDScoreTextObjects2.length = 0;
gdjs.InizioCode.GDJoystickObjects1.length = 0;
gdjs.InizioCode.GDJoystickObjects2.length = 0;
gdjs.InizioCode.GDJumpButtonObjects1.length = 0;
gdjs.InizioCode.GDJumpButtonObjects2.length = 0;
gdjs.InizioCode.GDCoinObjects1.length = 0;
gdjs.InizioCode.GDCoinObjects2.length = 0;
gdjs.InizioCode.GDTopBoundaryObjects1.length = 0;
gdjs.InizioCode.GDTopBoundaryObjects2.length = 0;
gdjs.InizioCode.GDBottomBoundaryObjects1.length = 0;
gdjs.InizioCode.GDBottomBoundaryObjects2.length = 0;
gdjs.InizioCode.GDLeftBoundaryObjects1.length = 0;
gdjs.InizioCode.GDLeftBoundaryObjects2.length = 0;
gdjs.InizioCode.GDRightBoundaryObjects1.length = 0;
gdjs.InizioCode.GDRightBoundaryObjects2.length = 0;
gdjs.InizioCode.GDBoundaryJumpThroughObjects1.length = 0;
gdjs.InizioCode.GDBoundaryJumpThroughObjects2.length = 0;

gdjs.InizioCode.eventsList0(runtimeScene);
gdjs.InizioCode.GDSmallWhiteButtonObjects1.length = 0;
gdjs.InizioCode.GDSmallWhiteButtonObjects2.length = 0;
gdjs.InizioCode.GDNewBitmapTextObjects1.length = 0;
gdjs.InizioCode.GDNewBitmapTextObjects2.length = 0;
gdjs.InizioCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InizioCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InizioCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.InizioCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.InizioCode.GDNewBitmapText2Objects1.length = 0;
gdjs.InizioCode.GDNewBitmapText2Objects2.length = 0;
gdjs.InizioCode.GDNewBitmapText3Objects1.length = 0;
gdjs.InizioCode.GDNewBitmapText3Objects2.length = 0;
gdjs.InizioCode.GDNewBitmapText4Objects1.length = 0;
gdjs.InizioCode.GDNewBitmapText4Objects2.length = 0;
gdjs.InizioCode.GDNewLightObjects1.length = 0;
gdjs.InizioCode.GDNewLightObjects2.length = 0;
gdjs.InizioCode.GDtavoloObjects1.length = 0;
gdjs.InizioCode.GDtavoloObjects2.length = 0;
gdjs.InizioCode.GDPortalObjects1.length = 0;
gdjs.InizioCode.GDPortalObjects2.length = 0;
gdjs.InizioCode.GDPlayerObjects1.length = 0;
gdjs.InizioCode.GDPlayerObjects2.length = 0;
gdjs.InizioCode.GDScoreTextObjects1.length = 0;
gdjs.InizioCode.GDScoreTextObjects2.length = 0;
gdjs.InizioCode.GDJoystickObjects1.length = 0;
gdjs.InizioCode.GDJoystickObjects2.length = 0;
gdjs.InizioCode.GDJumpButtonObjects1.length = 0;
gdjs.InizioCode.GDJumpButtonObjects2.length = 0;
gdjs.InizioCode.GDCoinObjects1.length = 0;
gdjs.InizioCode.GDCoinObjects2.length = 0;
gdjs.InizioCode.GDTopBoundaryObjects1.length = 0;
gdjs.InizioCode.GDTopBoundaryObjects2.length = 0;
gdjs.InizioCode.GDBottomBoundaryObjects1.length = 0;
gdjs.InizioCode.GDBottomBoundaryObjects2.length = 0;
gdjs.InizioCode.GDLeftBoundaryObjects1.length = 0;
gdjs.InizioCode.GDLeftBoundaryObjects2.length = 0;
gdjs.InizioCode.GDRightBoundaryObjects1.length = 0;
gdjs.InizioCode.GDRightBoundaryObjects2.length = 0;
gdjs.InizioCode.GDBoundaryJumpThroughObjects1.length = 0;
gdjs.InizioCode.GDBoundaryJumpThroughObjects2.length = 0;


return;

}

gdjs['InizioCode'] = gdjs.InizioCode;
