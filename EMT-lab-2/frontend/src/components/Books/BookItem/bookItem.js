import React from "react";
import {Link} from "react-router-dom";

const BookItem = (props) => {
    return (
        <tr className={props.book.availableCopies > 0 ? "table-default" : "table-active"}>
            <td>
                <div>
                    <Link
                        className={props.book.availableCopies > 0 ? "btn btn-sm btn-secondary m-1" : "btn btn-sm btn-secondary m-1 disabled"}
                        onClick={() => props.onMarkTaken(props.book.id)}>
                        Select Taken
                    </Link>
                </div>
            </td>
            <td>{props.book.name}</td>
            <td>{props.book.category}</td>
            <td>{props.book.author.name} {props.book.author.surname}</td>
            <td>{props.book.availableCopies}</td>
            <td>
                <div>
                    <Link title={"edit"}
                          className={"btn btn-sm btn-warning m-1"}
                          onClick={() => props.onEdit(props.book.id)}
                          to={`/books/edit/${props.book.id}`}>
                        Edit Book
                    </Link>
                    <a title={"delete"}
                       className={"btn btn-sm btn-danger"}
                       onClick={() => props.onDelete(props.book.id)}>
                        Delete Book
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default BookItem;