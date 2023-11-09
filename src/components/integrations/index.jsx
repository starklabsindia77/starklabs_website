import BreadcrumbFour from "@/src/common/breadcrumbs/breadcrumb-4";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import IntegrationArea from "@/src/common/integration-area";
import FeatureArea from "@/src/common/feature-area";

const Integrations = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFour />
            <FeatureArea style_integraton={true} />
            <IntegrationArea style_integraton={true}/>
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Integrations;
