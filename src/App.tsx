import * as React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import ReactTable, {Column} from "react-table";
import {map, isNumber, chain} from "lodash";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import axios from 'axios';
import * as moment from 'moment';

class App extends React.Component {
    state = {
        chapterInfo: {},
        studentInfoList: []
    };

    async componentDidMount(){
        const appResponse: any = await axios.get("/api/app");

        this.setState({
            chapterInfo: appResponse.data.chapterInfo,
            studentInfoList: appResponse.data.studentInfoList,
        });
    }

    public render() {
        const data: any[] = map(this.state.studentInfoList, (data: any) => ({
            ...data,
            average: chain(data.chapter).filter(isNumber).mean().value()
        }));

        const chapterColumns: Column[] = map(this.state.chapterInfo, (chapter: any, chapterNumber) => {
            const chapterAverage: number = chain(this.state.studentInfoList).map(`chapter.${chapterNumber}`)
                .filter(isNumber).mean().value();

            return {
                id: `chapter-${chapterNumber}`,
                accessor: `chapter`,
                Header: (props: any) => <div className='chapter'>
                    <div className="details">
                        <div className="title">Chapter {chapterNumber} Test</div>
                        <div className="date">{moment(chapter.date).format('MM/DD/YYYY')}</div>
                    </div>
                    <div className="average">{chapterAverage}%</div>
                </div>,
                Cell: (props: any) => {
                    const grade: number = props.value[chapterNumber];
                    const text: string =  isNumber(grade) ? `${grade}%` : "-";

                    return (<div className="grade"><div className="grade-text">{text}</div></div>);
                }
            };
        });

        return (
            <div>
                <Navbar color="light" expand="md">
                    <Container>
                        <NavbarBrand href="/">Codespark <small>Christopher Clarke</small></NavbarBrand>
                        <Nav className="ml-auto" navbar={true}>
                            <NavItem eventKey={1} href="#">
                                <NavLink href="https://github.com/afroradiohead/codespark-code-interview" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} /> Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>

                <Container>
                    <ReactTable
                        showPagination={false}
                        minRows={1}
                        data={data}
                        columns={[{
                            Header: "",
                            accessor: 'name',
                            Cell: (props: any) => <div className='name'>
                                <div className="first">{props.value.first}</div>
                                <div className="last">{props.value.last}</div>
                            </div>
                        }, {
                            Header: "",
                            accessor: 'average',
                            Cell: (props: any) => <div className="grade"><div className="average"> {props.value}%</div></div>
                        }, ...chapterColumns ]}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
