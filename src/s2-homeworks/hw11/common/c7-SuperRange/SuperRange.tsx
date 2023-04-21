import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 8,


                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22',

                    '&:focus, &:hover, &$active': {
                        boxShadow: 'inherit',
                    },

                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
