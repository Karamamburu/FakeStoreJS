export default function Link ({ text, url }) {

    return (
        <a href={url} className="link">
            {text}
        </a>
    )
}