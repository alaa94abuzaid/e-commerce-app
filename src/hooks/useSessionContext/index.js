import React from "react";

import { SessionContext } from "../../components";

export const useSessionContext = () => React.useContext(SessionContext);
