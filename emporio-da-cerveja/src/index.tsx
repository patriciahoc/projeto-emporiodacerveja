import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Favicon from "react-favicon";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import Routes from "./routes";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <ReactSVG src=" svg.svg " />
        <Favicon url="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg id='logoEdC_elementoGrafico' transform='translate(13287 7955)'%3E%3Cg id='Group_1802' data-name='Group 1802' transform='translate(-13281.011 -7948.938)'%3E%3Cg id='Group_1801' data-name='Group 1801' transform='translate(0)'%3E%3Cg id='Group_1800' data-name='Group 1800'%3E%3Cpath id='Path_737' data-name='Path 737' d='M16.577,102.686a1.13,1.13,0,0,1-.187-.01,2.155,2.155,0,0,1-1.561-.884l-1.217-1.706-2.185-.8L9.4,99.8a2.114,2.114,0,0,1-1.758-.323,2.173,2.173,0,0,1-.905-1.55l-.208-2.081-1.5-1.779L3.01,93.51a2.14,2.14,0,0,1-1.373-2.944l.864-1.9-.406-2.289-1.457-1.5a2.151,2.151,0,0,1,.281-3.246l1.706-1.207.8-2.185-.52-2.029a2.114,2.114,0,0,1,.323-1.758,2.173,2.173,0,0,1,1.55-.905l2.081-.208,1.769-1.5.562-2.018a2.14,2.14,0,0,1,2.944-1.373l1.9.864,2.289-.406,1.5-1.467a2.151,2.151,0,0,1,3.246.281l1.217,1.706,2.185.8,2.029-.52a2.114,2.114,0,0,1,1.758.323,2.173,2.173,0,0,1,.905,1.55l.208,2.081,1.5,1.779L32.9,76a2.14,2.14,0,0,1,1.373,2.944l-.864,1.9.406,2.289,1.467,1.5A2.151,2.151,0,0,1,35,87.882l-1.7,1.217-.8,2.185.52,2.029A2.114,2.114,0,0,1,32.7,95.07a2.173,2.173,0,0,1-1.55.905l-2.081.208-1.789,1.5L26.72,99.7a2.14,2.14,0,0,1-2.944,1.373l-1.9-.863-2.289.406-1.5,1.467A2.235,2.235,0,0,1,16.577,102.686Zm-5.1-4.588,2.851,1.04,1.425,1.987a1.006,1.006,0,0,0,1.519.135l1.748-1.717,2.986-.531,2.226,1.009a1.01,1.01,0,0,0,.832,0,1.027,1.027,0,0,0,.541-.635l.655-2.362,2.33-1.945,2.434-.239a1,1,0,0,0,.863-1.248l-.6-2.372,1.04-2.851,1.987-1.425a1.006,1.006,0,0,0,.135-1.519l-1.706-1.748-.531-2.986,1.009-2.226a.994.994,0,0,0-.635-1.373l-2.362-.655-1.945-2.32-.239-2.434a1,1,0,0,0-1.248-.864l-2.372.6-2.851-1.04L20.145,68.4a1.012,1.012,0,0,0-.728-.416,1.023,1.023,0,0,0-.791.281h0l-1.748,1.706-2.986.531-2.226-1.009a1.01,1.01,0,0,0-.832,0,1.027,1.027,0,0,0-.541.635l-.655,2.351L7.307,74.44l-2.434.239a1,1,0,0,0-.864,1.248l.6,2.372L3.572,81.15,1.585,82.565a1.006,1.006,0,0,0-.135,1.519l1.706,1.748.531,2.986L2.678,91.044a1.01,1.01,0,0,0,0,.832,1.027,1.027,0,0,0,.635.541l2.351.655,1.956,2.32.239,2.434a1,1,0,0,0,1.248.864Z' transform='translate(-0.027 -66.827)' fill='%23f5ad07'/%3E%3C/g%3E%3Cpath id='Path_738' data-name='Path 738' d='M146.948,175.321l3.777.01a.289.289,0,0,0,.281-.291l.021-8.406a2.769,2.769,0,0,0-.863-1.821l-.3-2.955a.453.453,0,0,0,.073-.062.279.279,0,0,0,.052-.239l-.156-.739a.288.288,0,0,0-.271-.218h-1.352a.289.289,0,0,0-.281.229l-.156.728a.235.235,0,0,0,.062.229.277.277,0,0,0,.062.052l-.323,2.965a2.748,2.748,0,0,0-.874,1.81L146.677,175a.273.273,0,0,0,.052.2.245.245,0,0,0,.218.125' transform='translate(-131.418 -150.844)' fill='%23f5ad07'/%3E%3C/g%3E%3Cpath id='Path_739' data-name='Path 739' d='M66.495,160.241h3.7V162.7h-3.7v5.035h4.661v2.455H63.8V153h7.355v2.455H66.495Z' transform='translate(-57.165 -144.035)' fill='%23f5ad07'/%3E%3Cpath id='Path_740' data-name='Path 740' d='M213.344,164.074V166.3c0,2.674-1.342,4.2-3.922,4.2s-3.922-1.529-3.922-4.2v-8.7c0-2.674,1.332-4.2,3.922-4.2s3.922,1.529,3.922,4.2v1.623h-2.486v-1.789c0-1.2-.531-1.644-1.363-1.644s-1.363.458-1.363,1.644v9.03c0,1.2.52,1.623,1.363,1.623s1.363-.427,1.363-1.623v-2.393Z' transform='translate(-184.123 -144.393)' fill='%23f5ad07'/%3E%3C/g%3E%3Crect id='Rectangle_1096' data-name='Rectangle 1096' width='48' height='48' transform='translate(-13287 -7955)' fill='none'/%3E%3C/g%3E%3C/svg%3E%0A" />
        <BrowserRouter>
          <App />
          <Routes />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
