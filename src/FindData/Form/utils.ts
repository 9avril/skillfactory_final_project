import React from "react";
import ApiService from "./ApiService.ts";

export const checkINNValidity = (INN: string): boolean => INN.length === 10 || INN.length === 12;

export const isDateValid = (date: Date) => date <= new Date();

export const isStartDateBeforeEndDate = (start: Date, end: Date) => start <= end;

export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, formData: FormData, setFormData: React.Dispatch<React.SetStateAction<FormData>>) => {
    const { name, type, value, checked } = e.target;
    let finalValue: string | Date | boolean | number = value;

    if (name === 'startDate' || name === 'endDate') {
        finalValue = new Date(value);
    } else if (type === "checkbox") {
        finalValue = checked;
    } else if (name === "documentCount") {
        finalValue = parseInt(value, 10);
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
}

export const extractImageFromXML = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const imgTag = xmlDoc.querySelector("img");
    return imgTag ? imgTag.getAttribute("src") : null;
}

export const extractTextFromXML = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    let text = "";
    const getText = (node) => {
        node.childNodes.forEach(child => {
            if (child.nodeType === 3) { // Если это текстовый узел
                text += child.nodeValue.trim() + " ";
            } else if (child.tagName && child.tagName.toLowerCase() !== 'div') { // Исключаем div теги
                getText(child);
            }
        });
    }
    getText(xmlDoc);

    text = text.replace(/<\/?[^>]+(>|$)/g, " ").trim();

    return text;
}


export const handleClick = async (e: React.MouseEvent<HTMLButtonElement>, formData: FormData) => {
    e.preventDefault();
    const response = await ApiService.search(formData);
    if (response && response[0] && response[0].ok) {
        const newsContent = response[0].ok.content.markup;
        const processedText = extractTextFromXML(newsContent);
        const imageUrl = extractImageFromXML(newsContent);
        return {
            title: response[0].ok.title.text,
            content: processedText,
            companyName: response[0].ok.source.name,
            imageUrl: imageUrl
        };
    }
    return null;
};