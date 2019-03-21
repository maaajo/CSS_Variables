"use strict";

function handleAction() {
    const root = document.documentElement;
    const suffix = this.type === 'range' ? 'px' : '';
    root.style.setProperty(`--${this.name}`, this.value + suffix);
}

function addEventsToInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((item) => item.addEventListener('change', handleAction));
}

addEventsToInputs();