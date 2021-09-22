import styled,{ createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100%;
        width: 100%;
    }

    body #root {
        width: 100%;
        height: 100%;
    }

    div #principal{
        width: 100%;
        height: 100%;
    }
    html{
        width: 100%;
        height: 100%;
    }
`

export const Pokedex = styled.div`
    background-color: red;
    padding: 20px;

    width: 100%;
    height: 100%;

    h1{
        text-align: center;
        margin: 10px;
    }

    div#container{
        background-color: white;

        border-radius: 20px;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        width: 99%;
        height: 90%;

        overflow-y: scroll;

        div{
            border: 1px solid black;
            border-radius: 10px;
            margin: 10px;
            padding: 5px;

            width: 200px;
            
            text-align: center;

            box-shadow: 6px 6px 10px black;

            h3{
                text-align: center;

            }
            span{
                color: red;
            }

            a {
                display: block;
                width: 160px;
                height: 40px;
                /* line-height: 40px; */
                padding: 10px 5px;
                margin: 10px auto;
                background-color: #000;
                color: #FFF;
                border-radius: 5px;
                text-decoration: none;
                text-align: center;
                font-weight: bold;
            }
            
            a:visited{
                color: white;
            }
        }
    }

`

export const Detalhes = styled.div`
    background-color: red;
    padding: 20px;

    width: 100%;
    height: 100%;

    h1{
        text-align: center;
        margin: 10px;
    }

    div#img{
        margin: 0px 0px 10px 0px;

       div{
           display: flex;
           align-items: center;
           justify-content: center;
       }
    }

    a {
        color: #FFF;
        border-radius: 5px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }
    
    a:visited{
        color: white;
    }

    div{
        background-color: white;
        border-radius: 20px;

        div{
            padding: 10px;

            h3{
                text-align: center;
            }
        }
    }
   
`
