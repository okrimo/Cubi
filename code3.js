gdjs.nonfungeCode = {};
gdjs.nonfungeCode.localVariables = [];
gdjs.nonfungeCode.idToCallbackMap = new Map();
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects1= [];
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects2= [];
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects3= [];
gdjs.nonfungeCode.GDTile_95958Objects1= [];
gdjs.nonfungeCode.GDTile_95958Objects2= [];
gdjs.nonfungeCode.GDTile_95958Objects3= [];
gdjs.nonfungeCode.GDWine_9595White3Objects1= [];
gdjs.nonfungeCode.GDWine_9595White3Objects2= [];
gdjs.nonfungeCode.GDWine_9595White3Objects3= [];
gdjs.nonfungeCode.GDWine_9595RedObjects1= [];
gdjs.nonfungeCode.GDWine_9595RedObjects2= [];
gdjs.nonfungeCode.GDWine_9595RedObjects3= [];
gdjs.nonfungeCode.GDSpiked_9595BallObjects1= [];
gdjs.nonfungeCode.GDSpiked_9595BallObjects2= [];
gdjs.nonfungeCode.GDSpiked_9595BallObjects3= [];
gdjs.nonfungeCode.GDSpikesObjects1= [];
gdjs.nonfungeCode.GDSpikesObjects2= [];
gdjs.nonfungeCode.GDSpikesObjects3= [];
gdjs.nonfungeCode.GDCoinParticlesObjects1= [];
gdjs.nonfungeCode.GDCoinParticlesObjects2= [];
gdjs.nonfungeCode.GDCoinParticlesObjects3= [];
gdjs.nonfungeCode.GDStairsObjects1= [];
gdjs.nonfungeCode.GDStairsObjects2= [];
gdjs.nonfungeCode.GDStairsObjects3= [];
gdjs.nonfungeCode.GDLadderObjects1= [];
gdjs.nonfungeCode.GDLadderObjects2= [];
gdjs.nonfungeCode.GDLadderObjects3= [];
gdjs.nonfungeCode.GDEndScreenRetryTextObjects1= [];
gdjs.nonfungeCode.GDEndScreenRetryTextObjects2= [];
gdjs.nonfungeCode.GDEndScreenRetryTextObjects3= [];
gdjs.nonfungeCode.GDGameOverDialogObjects1= [];
gdjs.nonfungeCode.GDGameOverDialogObjects2= [];
gdjs.nonfungeCode.GDGameOverDialogObjects3= [];
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects1= [];
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects2= [];
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects3= [];
gdjs.nonfungeCode.GDDoorParticlesObjects1= [];
gdjs.nonfungeCode.GDDoorParticlesObjects2= [];
gdjs.nonfungeCode.GDDoorParticlesObjects3= [];
gdjs.nonfungeCode.GDPortalObjects1= [];
gdjs.nonfungeCode.GDPortalObjects2= [];
gdjs.nonfungeCode.GDPortalObjects3= [];
gdjs.nonfungeCode.GDPlayerObjects1= [];
gdjs.nonfungeCode.GDPlayerObjects2= [];
gdjs.nonfungeCode.GDPlayerObjects3= [];
gdjs.nonfungeCode.GDScoreTextObjects1= [];
gdjs.nonfungeCode.GDScoreTextObjects2= [];
gdjs.nonfungeCode.GDScoreTextObjects3= [];
gdjs.nonfungeCode.GDJoystickObjects1= [];
gdjs.nonfungeCode.GDJoystickObjects2= [];
gdjs.nonfungeCode.GDJoystickObjects3= [];
gdjs.nonfungeCode.GDJumpButtonObjects1= [];
gdjs.nonfungeCode.GDJumpButtonObjects2= [];
gdjs.nonfungeCode.GDJumpButtonObjects3= [];
gdjs.nonfungeCode.GDCoinObjects1= [];
gdjs.nonfungeCode.GDCoinObjects2= [];
gdjs.nonfungeCode.GDCoinObjects3= [];
gdjs.nonfungeCode.GDTopBoundaryObjects1= [];
gdjs.nonfungeCode.GDTopBoundaryObjects2= [];
gdjs.nonfungeCode.GDTopBoundaryObjects3= [];
gdjs.nonfungeCode.GDBottomBoundaryObjects1= [];
gdjs.nonfungeCode.GDBottomBoundaryObjects2= [];
gdjs.nonfungeCode.GDBottomBoundaryObjects3= [];
gdjs.nonfungeCode.GDLeftBoundaryObjects1= [];
gdjs.nonfungeCode.GDLeftBoundaryObjects2= [];
gdjs.nonfungeCode.GDLeftBoundaryObjects3= [];
gdjs.nonfungeCode.GDRightBoundaryObjects1= [];
gdjs.nonfungeCode.GDRightBoundaryObjects2= [];
gdjs.nonfungeCode.GDRightBoundaryObjects3= [];
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects1= [];
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects2= [];
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects3= [];


gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.nonfungeCode.GDPlayerObjects1});
gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.nonfungeCode.GDSpikesObjects1});
gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.nonfungeCode.GDPlayerObjects1});
gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.nonfungeCode.GDPlayerObjects1});
gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.nonfungeCode.GDCoinObjects1});
gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDCoinParticlesObjects1Objects = Hashtable.newFrom({"CoinParticles": gdjs.nonfungeCode.GDCoinParticlesObjects1});
gdjs.nonfungeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.nonfungeCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nonfungeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects, gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nonfungeCode.GDCoinObjects1 */
gdjs.nonfungeCode.GDCoinParticlesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDCoinParticlesObjects1Objects, (( gdjs.nonfungeCode.GDCoinObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDCoinObjects1[0].getCenterXInScene()), (( gdjs.nonfungeCode.GDCoinObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDCoinObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.nonfungeCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(100);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "coin.mp3", false, 50, 1);
}
}

}


};gdjs.nonfungeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.nonfungeCode.GDJoystickObjects2);
{for(var i = 0, len = gdjs.nonfungeCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.nonfungeCode.GDJoystickObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.nonfungeCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.nonfungeCode.GDJoystickObjects2[i].ActivateControl(false, null);
}
}
}

}


};gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDJoystickObjects2Objects = Hashtable.newFrom({"Joystick": gdjs.nonfungeCode.GDJoystickObjects2});
gdjs.nonfungeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Touch controls", 0, 0, 0);
}

{ //Subevents
gdjs.nonfungeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.nonfungeCode.GDJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDJoystickObjects2Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.nonfungeCode.GDJoystickObjects2 */
{for(var i = 0, len = gdjs.nonfungeCode.GDJoystickObjects2.length ;i < len;++i) {
    gdjs.nonfungeCode.GDJoystickObjects2[i].TeleportAndPress(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.nonfungeCode.GDJumpButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nonfungeCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( gdjs.nonfungeCode.GDJumpButtonObjects2[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.nonfungeCode.GDJumpButtonObjects2[k] = gdjs.nonfungeCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.nonfungeCode.GDJumpButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18742524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.nonfungeCode.GDJumpButtonObjects2 */
{for(var i = 0, len = gdjs.nonfungeCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.nonfungeCode.GDJumpButtonObjects2[i].setColor("74;74;74");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.nonfungeCode.GDJumpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nonfungeCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.nonfungeCode.GDJumpButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.nonfungeCode.GDJumpButtonObjects1[k] = gdjs.nonfungeCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.nonfungeCode.GDJumpButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18743332);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.nonfungeCode.GDJumpButtonObjects1 */
{for(var i = 0, len = gdjs.nonfungeCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDJumpButtonObjects1[i].setColor("255;255;255");
}
}
}

}


};gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPortalObjects1Objects = Hashtable.newFrom({"Portal": gdjs.nonfungeCode.GDPortalObjects1});
gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.nonfungeCode.GDPlayerObjects1});
gdjs.nonfungeCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nonfungeCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.nonfungeCode.GDSpikesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects, gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDSpikesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nonfunge", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nonfungeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nonfungeCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.nonfungeCode.GDPlayerObjects1[i].getY() > gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) + 10 ) {
        isConditionTrue_0 = true;
        gdjs.nonfungeCode.GDPlayerObjects1[k] = gdjs.nonfungeCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.nonfungeCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.nonfungeCode.GDPlayerObjects1 */
{gdjs.evtsExt__Player__TriggerDeath.func(runtimeScene, gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects, null);
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nonfungeCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nonfungeCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.nonfungeCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.nonfungeCode.GDPlayerObjects1[k] = gdjs.nonfungeCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.nonfungeCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18734820);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.mp3", false, 50, 1);
}
}

}


{


gdjs.nonfungeCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.nonfungeCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BottomBoundary"), gdjs.nonfungeCode.GDBottomBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("BoundaryJumpThrough"), gdjs.nonfungeCode.GDBoundaryJumpThroughObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftBoundary"), gdjs.nonfungeCode.GDLeftBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nonfungeCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.nonfungeCode.GDPortalObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightBoundary"), gdjs.nonfungeCode.GDRightBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.nonfungeCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopBoundary"), gdjs.nonfungeCode.GDTopBoundaryObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.nonfungeCode.GDLeftBoundaryObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDLeftBoundaryObjects1[0].getPointX("")) + (( gdjs.nonfungeCode.GDLeftBoundaryObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDLeftBoundaryObjects1[0].getWidth()), (( gdjs.nonfungeCode.GDTopBoundaryObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDTopBoundaryObjects1[0].getPointY("")) + (( gdjs.nonfungeCode.GDTopBoundaryObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDTopBoundaryObjects1[0].getHeight()), (( gdjs.nonfungeCode.GDRightBoundaryObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDRightBoundaryObjects1[0].getPointX("")), (( gdjs.nonfungeCode.GDBottomBoundaryObjects1.length === 0 ) ? 0 :gdjs.nonfungeCode.GDBottomBoundaryObjects1[0].getPointY("")), "", 0);
}
{for(var i = 0, len = gdjs.nonfungeCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Score")));
}
}
{gdjs.evtsExt__VolumeFalloff__SetVolumeFalloff.func(runtimeScene, 0, "Sound", gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPortalObjects1Objects, gdjs.nonfungeCode.mapOfGDgdjs_9546nonfungeCode_9546GDPlayerObjects1Objects, 0, 20, 200, null);
}
{for(var i = 0, len = gdjs.nonfungeCode.GDTopBoundaryObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDTopBoundaryObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nonfungeCode.GDBottomBoundaryObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDBottomBoundaryObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nonfungeCode.GDRightBoundaryObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDRightBoundaryObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nonfungeCode.GDLeftBoundaryObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDLeftBoundaryObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nonfungeCode.GDBoundaryJumpThroughObjects1.length ;i < len;++i) {
    gdjs.nonfungeCode.GDBoundaryJumpThroughObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nonfungeCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.nonfungeCode.GDPlayerObjects1.length !== 0 ? gdjs.nonfungeCode.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.nonfungeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects3.length = 0;
gdjs.nonfungeCode.GDTile_95958Objects1.length = 0;
gdjs.nonfungeCode.GDTile_95958Objects2.length = 0;
gdjs.nonfungeCode.GDTile_95958Objects3.length = 0;
gdjs.nonfungeCode.GDWine_9595White3Objects1.length = 0;
gdjs.nonfungeCode.GDWine_9595White3Objects2.length = 0;
gdjs.nonfungeCode.GDWine_9595White3Objects3.length = 0;
gdjs.nonfungeCode.GDWine_9595RedObjects1.length = 0;
gdjs.nonfungeCode.GDWine_9595RedObjects2.length = 0;
gdjs.nonfungeCode.GDWine_9595RedObjects3.length = 0;
gdjs.nonfungeCode.GDSpiked_9595BallObjects1.length = 0;
gdjs.nonfungeCode.GDSpiked_9595BallObjects2.length = 0;
gdjs.nonfungeCode.GDSpiked_9595BallObjects3.length = 0;
gdjs.nonfungeCode.GDSpikesObjects1.length = 0;
gdjs.nonfungeCode.GDSpikesObjects2.length = 0;
gdjs.nonfungeCode.GDSpikesObjects3.length = 0;
gdjs.nonfungeCode.GDCoinParticlesObjects1.length = 0;
gdjs.nonfungeCode.GDCoinParticlesObjects2.length = 0;
gdjs.nonfungeCode.GDCoinParticlesObjects3.length = 0;
gdjs.nonfungeCode.GDStairsObjects1.length = 0;
gdjs.nonfungeCode.GDStairsObjects2.length = 0;
gdjs.nonfungeCode.GDStairsObjects3.length = 0;
gdjs.nonfungeCode.GDLadderObjects1.length = 0;
gdjs.nonfungeCode.GDLadderObjects2.length = 0;
gdjs.nonfungeCode.GDLadderObjects3.length = 0;
gdjs.nonfungeCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.nonfungeCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.nonfungeCode.GDEndScreenRetryTextObjects3.length = 0;
gdjs.nonfungeCode.GDGameOverDialogObjects1.length = 0;
gdjs.nonfungeCode.GDGameOverDialogObjects2.length = 0;
gdjs.nonfungeCode.GDGameOverDialogObjects3.length = 0;
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.nonfungeCode.GDDoorParticlesObjects1.length = 0;
gdjs.nonfungeCode.GDDoorParticlesObjects2.length = 0;
gdjs.nonfungeCode.GDDoorParticlesObjects3.length = 0;
gdjs.nonfungeCode.GDPortalObjects1.length = 0;
gdjs.nonfungeCode.GDPortalObjects2.length = 0;
gdjs.nonfungeCode.GDPortalObjects3.length = 0;
gdjs.nonfungeCode.GDPlayerObjects1.length = 0;
gdjs.nonfungeCode.GDPlayerObjects2.length = 0;
gdjs.nonfungeCode.GDPlayerObjects3.length = 0;
gdjs.nonfungeCode.GDScoreTextObjects1.length = 0;
gdjs.nonfungeCode.GDScoreTextObjects2.length = 0;
gdjs.nonfungeCode.GDScoreTextObjects3.length = 0;
gdjs.nonfungeCode.GDJoystickObjects1.length = 0;
gdjs.nonfungeCode.GDJoystickObjects2.length = 0;
gdjs.nonfungeCode.GDJoystickObjects3.length = 0;
gdjs.nonfungeCode.GDJumpButtonObjects1.length = 0;
gdjs.nonfungeCode.GDJumpButtonObjects2.length = 0;
gdjs.nonfungeCode.GDJumpButtonObjects3.length = 0;
gdjs.nonfungeCode.GDCoinObjects1.length = 0;
gdjs.nonfungeCode.GDCoinObjects2.length = 0;
gdjs.nonfungeCode.GDCoinObjects3.length = 0;
gdjs.nonfungeCode.GDTopBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDTopBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDTopBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDBottomBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDBottomBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDBottomBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDLeftBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDLeftBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDLeftBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDRightBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDRightBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDRightBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects1.length = 0;
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects2.length = 0;
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects3.length = 0;

gdjs.nonfungeCode.eventsList3(runtimeScene);
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.nonfungeCode.GDGraveyard_9595BackgroundObjects3.length = 0;
gdjs.nonfungeCode.GDTile_95958Objects1.length = 0;
gdjs.nonfungeCode.GDTile_95958Objects2.length = 0;
gdjs.nonfungeCode.GDTile_95958Objects3.length = 0;
gdjs.nonfungeCode.GDWine_9595White3Objects1.length = 0;
gdjs.nonfungeCode.GDWine_9595White3Objects2.length = 0;
gdjs.nonfungeCode.GDWine_9595White3Objects3.length = 0;
gdjs.nonfungeCode.GDWine_9595RedObjects1.length = 0;
gdjs.nonfungeCode.GDWine_9595RedObjects2.length = 0;
gdjs.nonfungeCode.GDWine_9595RedObjects3.length = 0;
gdjs.nonfungeCode.GDSpiked_9595BallObjects1.length = 0;
gdjs.nonfungeCode.GDSpiked_9595BallObjects2.length = 0;
gdjs.nonfungeCode.GDSpiked_9595BallObjects3.length = 0;
gdjs.nonfungeCode.GDSpikesObjects1.length = 0;
gdjs.nonfungeCode.GDSpikesObjects2.length = 0;
gdjs.nonfungeCode.GDSpikesObjects3.length = 0;
gdjs.nonfungeCode.GDCoinParticlesObjects1.length = 0;
gdjs.nonfungeCode.GDCoinParticlesObjects2.length = 0;
gdjs.nonfungeCode.GDCoinParticlesObjects3.length = 0;
gdjs.nonfungeCode.GDStairsObjects1.length = 0;
gdjs.nonfungeCode.GDStairsObjects2.length = 0;
gdjs.nonfungeCode.GDStairsObjects3.length = 0;
gdjs.nonfungeCode.GDLadderObjects1.length = 0;
gdjs.nonfungeCode.GDLadderObjects2.length = 0;
gdjs.nonfungeCode.GDLadderObjects3.length = 0;
gdjs.nonfungeCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.nonfungeCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.nonfungeCode.GDEndScreenRetryTextObjects3.length = 0;
gdjs.nonfungeCode.GDGameOverDialogObjects1.length = 0;
gdjs.nonfungeCode.GDGameOverDialogObjects2.length = 0;
gdjs.nonfungeCode.GDGameOverDialogObjects3.length = 0;
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.nonfungeCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.nonfungeCode.GDDoorParticlesObjects1.length = 0;
gdjs.nonfungeCode.GDDoorParticlesObjects2.length = 0;
gdjs.nonfungeCode.GDDoorParticlesObjects3.length = 0;
gdjs.nonfungeCode.GDPortalObjects1.length = 0;
gdjs.nonfungeCode.GDPortalObjects2.length = 0;
gdjs.nonfungeCode.GDPortalObjects3.length = 0;
gdjs.nonfungeCode.GDPlayerObjects1.length = 0;
gdjs.nonfungeCode.GDPlayerObjects2.length = 0;
gdjs.nonfungeCode.GDPlayerObjects3.length = 0;
gdjs.nonfungeCode.GDScoreTextObjects1.length = 0;
gdjs.nonfungeCode.GDScoreTextObjects2.length = 0;
gdjs.nonfungeCode.GDScoreTextObjects3.length = 0;
gdjs.nonfungeCode.GDJoystickObjects1.length = 0;
gdjs.nonfungeCode.GDJoystickObjects2.length = 0;
gdjs.nonfungeCode.GDJoystickObjects3.length = 0;
gdjs.nonfungeCode.GDJumpButtonObjects1.length = 0;
gdjs.nonfungeCode.GDJumpButtonObjects2.length = 0;
gdjs.nonfungeCode.GDJumpButtonObjects3.length = 0;
gdjs.nonfungeCode.GDCoinObjects1.length = 0;
gdjs.nonfungeCode.GDCoinObjects2.length = 0;
gdjs.nonfungeCode.GDCoinObjects3.length = 0;
gdjs.nonfungeCode.GDTopBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDTopBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDTopBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDBottomBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDBottomBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDBottomBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDLeftBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDLeftBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDLeftBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDRightBoundaryObjects1.length = 0;
gdjs.nonfungeCode.GDRightBoundaryObjects2.length = 0;
gdjs.nonfungeCode.GDRightBoundaryObjects3.length = 0;
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects1.length = 0;
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects2.length = 0;
gdjs.nonfungeCode.GDBoundaryJumpThroughObjects3.length = 0;


return;

}

gdjs['nonfungeCode'] = gdjs.nonfungeCode;
