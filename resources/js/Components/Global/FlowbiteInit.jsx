import React, { useEffect } from "react";
import { initFlowbite } from "flowbite"; // Import Flowbite library

const FlowbiteInit = () => {
    useEffect(() => {
        initFlowbite();
    }, []);

    return null;
};

export default FlowbiteInit;
