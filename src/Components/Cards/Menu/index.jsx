import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import { COLOR } from "../../../Utils/Colors";
import { STYLES } from "../../../Utils/Styles";

const Menu = ({ tools = [], title }) => {
  return (
    <div style={{}}>
      <div
        style={{
          color: COLOR.gray,
          fontWeight: "500",
          fontSize: "13px",
          padding: "7px 16px",
        }}
        className="mt-1"
      >
        {title}
      </div>
      <div
        style={{
          boxShadow: STYLES.boxShadow,
          borderRadius: STYLES.borderRadius,
          backgroundColor: COLOR.white,
        }}
      >
        {tools.map((tool, count) => {
          return (
            <div
              onClick={() => {
                tool.action.method && tool.action.method();
              }}
              key={count}
              style={{
                padding: "11px 16px",
                borderBottom:
                  tools.length < count - 1
                    ? "none"
                    : `1px solid ${COLOR.border}`,
              }}
              className="d-flex justify-content-between align-items-center"
            >
              <div
                className="d-flex align-items-center"
                style={{ color: COLOR.black }}
              >
                {tool.icon && (
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: tool.color,
                      borderRadius: "100%",
                      marginRight: "12px",
                    }}
                  >
                    {tool.icon}
                  </div>
                )}
                <div>
                  {tool.label}
                  {tool.subLabel && (
                    <div
                      style={{
                        fontSize: "13px",
                        color: COLOR.gray,
                        fontWeight: "400",
                      }}
                    >
                      {tool.subLabel}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex align-items-center">
                {<Action action={tool.action} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Action = ({ action }) => {
  if (action) {
    switch (action.type) {
      case "switch":
        return (
          <Form>
            <Form.Check
              style={{ padding: "0", margin: "0", verticalAlign: "center" }}
              type="switch"
              id="custom-switch"
            />
          </Form>
        );
        break;
      case "go":
        return (
          <div>
            <AiOutlineRight color={COLOR.go} />
          </div>
        );
      case "goLabel":
        return (
          <div className="d-flex align-items-center">
            <p
              style={{
                color: COLOR.grap,
                fontSize: "15px",
                marginRight: "5px",
              }}
            >
              {action.label}
            </p>
            <AiOutlineRight color={COLOR.go} />
          </div>
        );
      default:
        return (
          <div>
            <AiOutlineRight color={COLOR.go} />
          </div>
        );
    }
  }
  return <div></div>;
};

export default Menu;
