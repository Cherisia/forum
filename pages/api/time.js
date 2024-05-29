export default function Time(req, resp) {
    resp.status(200).json(new Date());
}