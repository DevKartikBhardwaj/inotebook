import React from 'react'

function Noteitem(props) {
    const { note } = props;
    return (
        <div className="col-md-3 my-2">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, ex eos expedita explicabo sint eum tempore optio perferendis similique nobis, tempora officiis iste provident accusamus.</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
