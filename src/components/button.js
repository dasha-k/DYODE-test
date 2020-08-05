import React from 'react';

export default function Button({label, color, link}) {
    return <a href={link} className={`button-${color}`}>{label}</a>
}