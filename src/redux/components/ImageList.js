const Imagelist = ({ urlList }) => {
    const list = urlList.map((url: string) => {
        return (
            <li>
                <img src={url} alt="" />
            </li>
        )
    })
    return <ul>{list}</ul>
}
export default Imagelist
