import React from "react";
import Menu from "../../Components/Cards/Menu";
import ImageProfile from "../../Components/ImageProfile";
import Layout from "../../Layouts";

const Settings = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <ImageProfile />
      </div>
      <Menu
        title={"Theme"}
        tools={[
          {
            label: "Dark Mode",
            action: {
              type: "switch",
            },
          },
        ]}
      />
      <Menu
        title={"Notifications"}
        tools={[
          {
            label: "Payment Alert",
            subLabel: "Send notification when new payment received",
            action: {
              type: "switch",
            },
          },
          {
            label: "Notification Sound",
            action: {
              type: "goLabel",
              label: "Beep",
            },
          },
        ]}
      />
      <Menu
        title={"Profile Settings"}
        tools={[
          {
            label: "Change Username",
            action: {
              type: "go",
            },
          },
          {
            label: "Update E-mail",
            action: {
              type: "go",
            },
          },
          {
            label: "Address",
            action: {
              type: "goLabel",
              label: "Edit",
            },
          },
          {
            label: "Private Profile",
            action: {
              type: "switch",
            },
          },
        ]}
      />
      <Menu
        title={"Security"}
        tools={[
          {
            label: "Update Password",
            action: {
              type: "go",
            },
          },
          {
            label: "2 Step Verification",
            action: {
              type: "switch",
            },
          },
          {
            label: "Log out all devices",
            action: {
              type: "go",
            },
          },
        ]}
      />
    </Layout>
  );
};

export default Settings;
