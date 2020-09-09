/*
Statusses:
UPCOMING = _("upcoming")
CURRENT = _("current")
UNKNOWN = _("unknown")
DONE = _("done")
*/

export const containerStatusText = (shipment, container) => {
    //User the Last Shipment.container.update that is not "Location Update"
    if (
        shipment &&
        shipment.blNumber &&
        container &&
        container.updates &&
        container.updates.length > 0
    ) {
        let currentStatus = '-';

        for (let counter = 0; counter < container.updates.length; counter++) {
            if (
                container.updates[counter].status.includes('Status changed to')
            ) {
                currentStatus = container.updates[counter].status
                    .split(':')[1]
                    .trim();

                //First letter uppercase
                currentStatus =
                    currentStatus[0].toUpperCase() + currentStatus.slice(1);
                break;
            }
        }

        // for(let counter = container.updates.length - 1; counter > 0; counter--){
        //     if(container.updates[counter].status.indexOf('Location Update') === -1){
        //         currentStatus = container.updates[counter].status;
        //         break;
        //     }
        // }
        return currentStatus;
    } else {
        return '-';
    }
};

export const containerVesselText = (shipment, container) => {
    if (
        shipment &&
        shipment.blNumber &&
        container &&
        container.segments &&
        container.segments.length > 0
    ) {
        let vesselText = container.segments[container.segments.length - 1].name;
        for (let s = 0; s < container.segments.length; s++) {
            if (container.segments[s].status === 'ShipmentStatus.CURRENT') {
                //find the next one with status "VESSEL_TRANSPORT"
                for (
                    let nextS = s + 1;
                    nextS < container.segments.length;
                    nextS++
                ) {
                    if (
                        container.segments[nextS].segmentType ===
                        'SegmentTypes.VESSEL_TRANSPORT'
                    ) {
                        vesselText = container.segments[nextS].name;
                        break;
                    }
                }
                break;
            }
        }
        return vesselText;
    } else {
        return '-';
    }
};
