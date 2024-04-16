import "./AccordionBox.style.css";
function AccordionBox({ fn, accoOpen, children }) {
    return (
        <div className={`accordionBox ${accoOpen ? "open" : ""}`} onClick={fn}>
            {children}
        </div>
    );
}
export default AccordionBox;
