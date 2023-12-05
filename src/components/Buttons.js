export default function PersonalizedButton(props) {
    return(
        <button type="button" className="personalized-button" onClick={props.myAction}>{props.myActionText}</button>
    );
}