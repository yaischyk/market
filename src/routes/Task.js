import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Task () {
    const [logsNoFound, setLogsNoFound] = useState([]);
    const [logsFNP, setLogsFNP] = useState([]);
    const [logsNoData, setLogsNoData] = useState([]);
    const [logsPlaced, setLogsPlaced] = useState([]);

    const SERVER = "https://app-uj28.onrender.com";
    const { id } = useParams();

    useEffect(() => {
        // Get Logs
        axios.get(SERVER + "/logs/get?task_id="+id+"&status=not_found")
        .then((response) => {
            setLogsNoFound(response["data"]);
        });

        axios.get(SERVER + "/logs/get?task_id="+id+"&status=found_not_placed")
        .then((response) => {
            setLogsFNP(response["data"]);
        });

        axios.get(SERVER + "/logs/get?task_id="+id+"&status=no_data")
        .then((response) => {
            setLogsNoData(response["data"]);
        });

        axios.get(SERVER + "/logs/get?task_id="+id+"&status=placed")
        .then((response) => {
            setLogsPlaced(response["data"]);
        });
    }, []);
    return (
        <div>
            <div className="font-monospace title">Не найдены на это время:</div>
            <table className="w-50 table table-bordered"><tbody>
            {logsNoFound.map((data, index) =>
                <tr>
                    <td>{data["link"]}</td>
                </tr>
            )}
            </tbody></table>

            <br/>

            <div className="font-monospace title">Отсутствует информация по этим сообществам.</div>
            <table className="w-50 table table-bordered"><tbody>
                {logsNoData.map((data, index) =>
                    <tr>
                        <td>{data["link"]}</td>
                    </tr>
                )}
            </tbody></table>

            <br/>

            <div className="font-monospace title">Нашёл сообщество, но не удалось разместить.</div>
            <table className="table table-bordered"><tbody>
                {logsFNP.map((data, index) =>
                    <tr>
                        <td>{data["link"]}</td>
                        <td>{data["answer"]}</td>
                    </tr>
                )}
            </tbody></table>

            <br/>

            <div className="font-monospace title">Удалось разместить рекламу.</div>
            <table className="w-50 table table-bordered"><tbody>
                {logsPlaced.map((data, index) =>
                    <tr>
                        <td>{data["link"]}</td>
                        <td>{data["answer"]}</td>
                    </tr>
                )}
            </tbody></table>
        </div>
    );
}

export default Task;