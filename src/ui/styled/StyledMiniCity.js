import styled from "styled-components";
import MiniCity from "../MiniCity";

export const StyledMiniCity = styled(MiniCity)`
    width: 100%;
    height: calc(33.3333% - 10px);
    display: flex;
    justifycontent: space-between;
    align-items: center;
    color: #fff;
    > div{
        width: 33.333334%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .temp{
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            font-weight: 600;
            font-size: 50px;
            line-height: 76px;
        }
    }
    img{
        max-width: 85px;
        margin: 0 auto;
        &:hover{
            max-width: 100px;
        }
    }
    .text{
        padding-left: 20px
    }
    .name{
        font-weight: 600;
        font-size: 26px;
        line-height: 39px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .date-string{
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 12px;
    }
    .time-string{
        font-weight: 200;
        font-size: 12px;
        line-height: 18px;
    }
    `