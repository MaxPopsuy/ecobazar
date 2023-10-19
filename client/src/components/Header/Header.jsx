import React from "react";
import styles from "./Header.module.scss";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import "@styles/App.css";
import classnames from "classnames";
import { alert, success } from "@pnotify/core";

const options = [
  { value: "eng", label: "🇬🇧 Eng" },
  { value: "rus", label: " Rus" },
  { value: "ukr", label: "🇺🇦 Ukr" },
];

const currencyOptions = [
  { value: "usd", label: "USD" },
  { value: "eur", label: "EURO" },
  { value: "uah", label: "UAH" },
]

const Header = () => {
  const copyHandler = () => {
    navigator.clipboard.writeText("(219) 555-0114");
    alert({text: "Copied to clipboard"})
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header__topbar"]}>
        <p className={styles["topbar__location"]}>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        <div className={styles["topbar__select-wrapper"]}>
          <Select
            defaultValue={{ value: "eng", label: "Eng" }}
            options={options}
            styles={{
              option: (styles, state) => ({
                ...styles,
                cursor: "pointer",
                // backgroundColor: "transparent"
              }),
              control: (styles) => ({
                ...styles,
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                // backgroundColor: "transparent"
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                svg: {
                  fill: "#2B572E",
                },
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                span: {
                  backgroundColor: "#2B572E",
                },
              }),
            }}
            classNames={{
              control: (state) =>
                state.isFocused ? "test testactive" : "test",
            }}
            theme={(theme) => ({
              ...theme,
              // borderRadius: "25px",

              colors: {
                ...theme.colors,
                text: "#ffffff ",
                primary25: "#84d197 ",
                primary: "#2B572E ",
                primary50: "#ffffff",
              },
            })}
          />
          <Select
            defaultValue={{ value: "usd", label: "USD" }}
            options={currencyOptions}
            styles={{
              option: (styles, state) => ({
                ...styles,
                cursor: "pointer",
                // backgroundColor: "transparent"
              }),
              control: (styles) => ({
                ...styles,
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                // backgroundColor: "transparent"
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                svg: {
                  fill: "#2B572E",
                },
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                span: {
                  backgroundColor: "#2B572E",
                },
              }),
            }}
            classNames={{
              control: (state) =>
                state.isFocused ? "test testactive" : "test",
            }}
            theme={(theme) => ({
              ...theme,
              // borderRadius: "25px",

              colors: {
                ...theme.colors,
                text: "#ffffff ",
                primary25: "#84d197 ",
                primary: "#2B572E ",
                primary50: "#ffffff",
              },
            })}
          />
          <div>USD</div>
        </div>
      </div>
      <div className={styles["header__bottombar"]}>
        <div className={styles["bottombar__navigation-wrapper"]}>
          <NavLink className={styles["bottombar_link"]} to={"home"}>
            Home
          </NavLink>
          <NavLink className={styles["bottombar_link"]} to={"home"}>
            Shop
          </NavLink>
          <NavLink className={styles["bottombar_link"]} to={"home"}>
            Pages
          </NavLink>
          <NavLink className={styles["bottombar_link"]} to={"home"}>
            Blog
          </NavLink>
          <NavLink className={styles["bottombar_link"]} to={"home"}>
            About us
          </NavLink>
        </div>
        <div className={styles["bottombar__logo"]}>
          <h2 className={styles["bottombar__logo-text"]}>
            {" "}
            <svg
              className={styles["bottombar__logo-svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M31.2749 4.34279C27.4022 4.34279 21.9311 4.66682 19.1352 7.46125C17.9247 8.67175 17.3202 10.6451 17.4771 12.8787C17.4975 13.1737 17.6937 13.425 17.9756 13.5181C18.256 13.6096 18.5641 13.5239 18.7559 13.2987C20.3108 11.4691 22.2435 10.0029 24.5046 8.94061C24.6964 8.84906 24.9231 8.84177 25.1295 8.91445C25.3111 8.97984 25.4535 9.10334 25.5276 9.26178C25.6816 9.58731 25.6322 10.016 25.1207 10.2572C25.0917 10.2717 25.0655 10.2906 25.0365 10.3037C25.0263 10.3081 25.0147 10.3066 25.006 10.311C19.4346 12.9296 16.6954 17.4983 15.4514 22.1964C14.5446 16.314 12.6294 12.8511 10.8202 10.7251C9.51095 9.02787 8.22341 8.12832 7.47943 7.61976C7.34136 7.52528 6.92435 7.24048 6.7514 7.06753C6.46803 6.78416 6.46803 6.32349 6.7514 6.04012C7.03477 5.75819 7.49687 5.75819 7.81218 6.07207C7.88923 6.14039 8.01272 6.22758 8.16966 6.33221L8.29902 6.4194C9.35108 7.14014 11.31 8.4785 13.0479 11.3601C13.2034 11.6173 13.5042 11.7554 13.7963 11.7002C14.0928 11.6478 14.3252 11.4197 14.3834 11.1247C14.7627 9.18767 14.5927 6.31327 12.8649 4.58549C10.069 1.79249 4.59789 1.46846 0.726671 1.46846C0.32553 1.46839 0 1.79392 0 2.19499C0 6.06764 0.324032 11.5388 3.11846 14.3347C4.28387 15.5001 6.08147 16.0233 7.86736 16.0233C9.32486 16.0233 10.7533 15.6585 11.8476 15.0264C13.3399 18.1187 14.5316 22.7383 14.5316 29.805C14.5316 30.2061 14.8571 30.5316 15.2582 30.5316C15.6592 30.5316 15.9848 30.2061 15.9848 29.805C15.9848 25.8626 16.6605 21.1311 19.173 17.2366C20.18 18.2204 21.9137 18.8439 23.8347 18.902C23.9306 18.9049 24.0251 18.9063 24.1195 18.9063C26.0711 18.9063 27.796 18.2946 28.8815 17.2075C31.6773 14.4117 31.9999 8.94054 31.9999 5.06782C32.0015 4.66682 31.6774 4.34279 31.2749 4.34279Z"
                fill="#00B307"
              />
            </svg>
            Ecobazar
          </h2>
        </div>
        <div className={styles["bottombar__info"]}>
          <button
            className={classnames(
              styles["info__button"],
              styles["info__button--phone"]
            )}
            onClick={copyHandler}
          >
            <svg
              className={styles["info__svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M21.1724 5.3125C22.9736 5.79695 24.6159 6.74617 25.9348 8.06509C27.2538 9.38401 28.203 11.0263 28.6874 12.8276"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.0728 9.41907C21.1533 9.70975 22.1384 10.2792 22.9296 11.0704C23.7208 11.8616 24.2903 12.8468 24.5809 13.9273"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.2825 16.5771C13.3843 18.8305 15.2105 20.6488 17.4686 21.7409C17.6339 21.8192 17.8168 21.853 17.9992 21.8391C18.1817 21.8251 18.3573 21.7638 18.5088 21.6612L21.8344 19.4448C21.9813 19.3467 22.1503 19.2868 22.3262 19.2705C22.502 19.2542 22.6792 19.282 22.8416 19.3513L29.0626 22.0182C29.2739 22.108 29.4503 22.2639 29.5653 22.4627C29.6802 22.6614 29.7275 22.8921 29.7001 23.12C29.5031 24.6585 28.7523 26.0724 27.5881 27.0972C26.4238 28.122 24.926 28.6874 23.375 28.6875C18.5845 28.6875 13.9903 26.7845 10.6029 23.3971C7.21551 20.0097 5.3125 15.4155 5.3125 10.625C5.31264 9.07411 5.87805 7.57643 6.90286 6.41237C7.92767 5.24831 9.34162 4.49767 10.88 4.301C11.1079 4.27351 11.3386 4.32082 11.5373 4.4358C11.7361 4.55077 11.892 4.7272 11.9818 4.9385L14.6508 11.1648C14.7195 11.3256 14.7473 11.501 14.7319 11.6752C14.7166 11.8494 14.6584 12.0171 14.5626 12.1635L12.3526 15.5401C12.2523 15.6922 12.1931 15.8676 12.1809 16.0494C12.1686 16.2311 12.2036 16.413 12.2825 16.5771V16.5771Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            (219) 555-0114
          </button>
          <button
            className={classnames(
              styles["info__button"],
              styles["info__button--search"]
            )}
          >
            <svg
              className={styles["info__svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 28L22.2 22.2"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className={classnames(
              styles["info__button"],
              styles["info__button--favorites"]
            )}
          >
            <svg
              className={styles["info__svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15.9995 28.0722C-10.6667 13.3333 7.99999 -2.66667 15.9995 7.45074C24 -2.66667 42.6666 13.3333 15.9995 28.0722Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
              />
            </svg>
          </button>
          <button
            className={classnames(
              styles["info__button"],
              styles["info__button--cart"]
            )}
          >
            <svg
              className={styles["info__svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M11.3333 14.1667H7.08333L4.25 29.75H29.75L26.9167 14.1667H22.6667M11.3333 14.1667V9.91667C11.3333 6.78705 13.8704 4.25 17 4.25V4.25C20.1296 4.25 22.6667 6.78705 22.6667 9.91667V14.1667M11.3333 14.1667H22.6667M11.3333 14.1667V18.4167M22.6667 14.1667V18.4167"
                stroke="#1A1A1A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className={classnames(
              styles["info__button"],
              styles["info__button--user"]
            )}
          >
            <svg
              className={styles["info__svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
              />
              <path
                d="M20.0001 18.6666H12.0001C8.3174 18.6666 5.02006 22.0666 7.44273 24.8386C9.09073 26.724 11.8161 28 16.0001 28C20.1841 28 22.9081 26.724 24.5561 24.8386C26.9801 22.0653 23.6814 18.6666 20.0001 18.6666Z"
                stroke="#1A1A1A"
                stroke-width="1.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
