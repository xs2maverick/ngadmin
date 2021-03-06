﻿

import {HttpHelper} from '../../common/service/http-helper';
import {Injectable} from '@angular/core';
import {Ticket} from './ticket-model';


@Injectable()
export class TicketService {
    
    constructor( private httpHelper: HttpHelper) {
    }
    
    getTickets(appNumber: Number, customerNumber:number,accountNumber:string,businessLine: number,fromDate:string,fromTime:string,toDate:string,toTime:string) {
        return this.httpHelper.makeHttpCall('AngularAdmin/GetTickets', JSON.stringify({ appNumber: appNumber, customerNumber: customerNumber,accountNumber:accountNumber, businessLine:businessLine,fromDate:fromDate,fromTime:fromTime,toDate:toDate,toTime:toTime }), 'POST');
    }
    
    getGridColumnsByAppID(appID: number,accountNumber:string) {
        return this.httpHelper.makeHttpCall('AngularAdmin/GetGridColumnsByAppID', JSON.stringify({ appID: appID,accountNumber:accountNumber }), 'POST');
    }
    
    getReports(appNumber: Number, accountNumber:string, roleID:number) {
        return this.httpHelper.makeHttpCall('AngularAdmin/GetEntityByType', JSON.stringify({ appNumber: appNumber, type:"Reports", roleID: roleID, accountNumber: accountNumber}), 'POST');
    }
    
    getLogo(appNumber: Number, accountNumber:string, roleID:number) {
        return this.httpHelper.makeHttpCall('AngularAdmin/GetEntityByType', JSON.stringify({ appNumber: appNumber, type:"Logo", roleID: roleID, accountNumber: accountNumber}), 'POST');
    }
    
   
    /*deleteMobilePrompt(promptID: number) {
        return this.httpHelper.makeHttpCall('AngularAdmin/DeleteMobilePrompt', JSON.stringify({ promptID: promptID }), 'POST');
    }

    addMobilePrompt(data:Ticket) {
        return this.httpHelper.makeHttpCall('AngularAdmin/AddMobilePrompt', JSON.stringify(data), 'POST');
    }

    editMobilePrompt(data:Ticket) {
        return this.httpHelper.makeHttpCall('AngularAdmin/EditMobilePrompt', JSON.stringify(data), 'POST');
    }*/




    


}