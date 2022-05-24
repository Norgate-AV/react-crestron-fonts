import React from "react";
import { BaseComponent } from "../BaseComponent";
import styles from "../../styles/styles.module.css";

export function AddressBook() {
    return <BaseComponent icon={styles["crf-address-book"]} />;
}

export default AddressBook;
export const CfAddressBook = AddressBook;
