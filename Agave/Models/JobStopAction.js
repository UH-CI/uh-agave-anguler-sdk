/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function JobStopAction() {
    this.action = new JobActionTypeEnum("STOP")

}

//Make instanceof work
JobStopAction.prototype = new JobAction();

JobStopAction.prototype.constructor = JobStopAction;


/**
 *TODO: Write general description for this method
 *
 * @return: JobActionTypeEnum
 */
JobStopAction.prototype.getAction = function () {

    return this.action;
}


JobStopAction.prototype.setAction = function (value) {
    this.action = value;
}
