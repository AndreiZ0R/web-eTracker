import React from 'react';
import {useEffect, useState} from 'react';

const Btn = (props) => {
    function print () {
        return props.name + props.age
    }
    return (
        <div>
            <button>
                {
                    print()
                }
            </button>

        </div>

    );
}

export default Btn;