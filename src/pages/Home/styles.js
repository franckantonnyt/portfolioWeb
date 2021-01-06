import styled from 'styled-components';

import backgroundGrass from '../../assets/images/background-grama2.png';
import PerfilPessoa2 from '../../assets/images/backgroundProfile1.png';
import PerfilPessoa from '../../assets/images/backgroundProfile2.png';

export const Container = styled.div`
  display: flex;
  background-color: #262626;

  .background-grass {
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${backgroundGrass});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
  }

  .field-marking {
    display: flex;
    animation: ${(props) => props.showAnimationPort && 'sizeDrag 1.5s'};
  }

  .field-marking-left {
    width: ${(props) => (props.showAnimationPort ? '0%' : '100%')};
    height: 100%;
    display: flex;
    align-items: center;
    animation: ${(props) => props.showAnimationPort && 'dragSidesLeft 1.5s'};
    justify-content: space-between;

    .field-marking-area-left {
      width: 100%;
      height: auto;
    }

    .field-marking-center-left {
      width: 185px;
      height: 300px;
      border-top: 1.5px solid #fff;
      border-left: 1.5px solid #fff;
      border-bottom: 1.5px solid #fff;
      border-radius: 150px 0px 0px 150px;
    }
  }

  .field-marking-center {
    opacity: 1;
    width: ${(props) => (props.showAnimationPort ? '100%' : '0%')};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${(props) => props.showAnimationPort && 'dragCenter 1.5s'};
    background-image: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(38, 38, 38, 0.9) 74%
    );

    .child-cirle-container {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .child-circle-center {
        width: 35rem;
        height: 35rem;
        border-radius: 100rem;
        border-top: 0.1px solid #8320a4;
        box-shadow: 10px 5px 10px #2ce8d5;
        background-color: #2ce8d5;
        .child-circle-center-children {
          width: 98%;
          height: 98%;
          border-radius: 100rem;
          box-shadow: 10px 5px 5px #8320a4;
          border-left: 0.1px solid #8320a4;
          border-bottom: 0.1px solid #8320a4;
          background-image: linear-gradient(330deg, #000000 0%, #262626 80%);

          .img-person-perfil {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 100rem;
            justify-content: center;

            background: url(${PerfilPessoa});
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: 45%;

            .img-profile-one {
              opacity: 0;
              width: 100%;
              height: 100%;
              border-radius: 100rem;
              background: url(${PerfilPessoa2});
              
              background-position: center;
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-size: 60%;
            }

            .img-profile-one {
              animation: hideImgOne 1s ease-in-out;
              opacity: 0;
              @keyframes hideImgOne {
                0% {
                  opacity: 1;
                }

                100% {
                  opacity: 0;
                }
              }
            }

            :hover {
              .img-profile-one {
                animation: showImgOne 1.3s ease-in-out;
                opacity: 1;
                @keyframes showImgOne {
                  0% {
                    opacity: 0;
                  }

                  100% {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
    }

    .child-card-container {
      width: 9rem;
      height: 14rem;
      display: flex;
      transition: 1s;
      position: absolute;
      align-items: center;
      justify-content: center;
    }

    .child-card-container:hover {
      width: 13rem;
      height: 21rem;
    }

    .project-one {
      top: 6%;
      left: 15%;
      transition: 1s;
    }

    .project-one:hover {
      top: 6%;
      left: 14%;
    }

    .project-two {
      top: 5%;
      left: 75%;
      transition: 1s;
    }

    .project-two:hover {
      top: 5%;
      left: 72%;
    }

    .project-three {
      top: 63%;
      left: 22%;
      transition: 1s;
    }

    .project-three:hover {
      top: 50%;
      left: 14%;
    }

    .project-four {
      top: 55%;
      left: 71%;
      transition: 1s;
    }

    .project-four:hover {
      top: 45%;
      left: 72%;
    }
  }

  .field-marking-right {
    width: ${(props) => (props.showAnimationPort ? '0%' : '100%')};
    height: 100%;
    display: flex;
    align-items: center;
    animation: ${(props) => props.showAnimationPort && 'dragSidesRight 1.5s'};
    justify-content: space-between;

    .field-marking-area-right {
      width: 100%;
      height: auto;
    }

    .field-marking-center-right {
      width: 185px;
      height: 300px;
      border-top: 1.5px solid #fff;
      border-right: 1.5px solid #fff;
      border-bottom: 1.5px solid #fff;
      border-radius: 0px 150px 150px 0px;
    }
  }

  .loaging-play-animation {
    width: 20rem;
    opacity: 0.4;
    height: 20rem;
    display: flex;
    cursor: pointer;
    transition: 0.5s;
    position: absolute;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    background-color: black;
    box-shadow: 0px 0px 20px 20px black;
    visibility: ${(props) => (props.showAnimationPort ? 'hidden' : 'visible')};
  }

  .loaging-play-animation:hover {
    opacity: 0.6;
  }

  @keyframes dragCenter {
    0% {
      width: 0%;
      opacity: 0;
    }

    100% {
      opacity: 1;
      width: 100%;
    }
  }

  @keyframes dragSidesLeft {
    0% {
      border-right: 1.5px solid #fff;
      width: 100%;
    }

    50% {
      border-right: 1.5px solid #fff;
    }

    100% {
      width: 0%;
      border: none;
    }
  }

  @keyframes dragSidesRight {
    0% {
      border-left: 1.5px solid #fff;
      width: 100%;
    }

    50% {
      border-left: 1.5px solid #fff;
    }

    100% {
      width: 0%;
      border: none;
    }
  }

  @keyframes sizeDrag {
    0% {
      width: 97%;
      height: 95%;
      border: 3px solid #fff;
    }

    50% {
      width: 99%;
      height: 97%;
      border: 3px solid #fff;
    }

    100% {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;
