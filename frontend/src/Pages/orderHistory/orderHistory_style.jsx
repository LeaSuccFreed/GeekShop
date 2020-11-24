import styled from 'styled-components'
import {device} from '../../components/size_style'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    & h3{
        padding-right: 87%;

        @media ${device.mobileL}{
        padding-right: 68%;
    }

    @media ${device.mobileM}{
        padding-right: 65%;
    }

    @media ${device.mobileS}{
        padding-right: 61%;
    }
    }

`

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    width: 95%;

    & .tr{
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;

        

        &:nth-child(even){
        background-color: #dedede;
    }
}
 & .td-item{
     display: flex;
     width: 16%/*242*/;
     justify-content: flex-start;
 }

 & .th-item{
    display: flex;
    width: 16%/*242*/;
 }

 & thead{
     border-bottom: 2px solid black;
 }

 & .id{
            width: 20%/*250px*/;

    @media ${device.laptop}{
        width: 28%;
    }

     @media ${device.tablet}{
        width: 43%;
    }

    @media ${device.mobileL}{
        width: 80%;
    }
}


& .date, .total, .paid, .delivered{
    
    @media ${device.mobileL}{
        display: none;
    }
}

&{
    .paid, .delivered{

        @media ${device.tablet}{
            display: none;
        }
    }
}

& thead{
    & .id{
        @media ${device.laptop}{
            /* width: 29%; */
        }
    }

    & .date{
        @media ${device.laptop}{
           padding-left: 2%;
        }
    }

    & .total{
        @media ${device.laptop}{
           padding-left: 3.5%;
        }
    }

    & .paid{
        @media ${device.laptop}{
           padding-left: 4.5%;
        }
    }

    & .delivered{
        @media ${device.laptop}{
           padding-left: 5.5%;
        }
    }

    & .actions{
        @media ${device.laptop}{
           padding-left: 6.5%;
        }
    }
}

`