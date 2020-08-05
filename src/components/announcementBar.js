import React from 'react';

const text = 'Free shipping on all orders over $75';

export default function AnnouncementBar () {
    return (
        <aside className="announcement-bar">
            <div><span className="">{text}</span></div>
        </aside>
    )
}