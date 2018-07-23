import * as React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import ReactTable, {Column} from "react-table";
import {map, isNumber, chain} from "lodash";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

class App extends React.Component {
    private chapterInfo = {
        1: {date: '1/1/2016', average: 86},
        2: {date: '1/1/2016', average: 86},
    };
    private dataList: any[] = [{
        name: {
            first: "Bobby",
            last: "Jenkins"
        },
        average: 90,
        chapter: {
            1: 99,
            2: 90,
            3: null,
        },
    }, {
        name: {
            first: "Bobby",
            last: "Jenkins"
        },
        average: 90,
        chapter: {
            1: 10,
            3: 0
        },
    }];

    constructor(props: any) {
        super(props);

    }

    public render() {
        const data: any[] = map(this.dataList, data => ({
            ...data,
            average: chain(data.chapter).filter(isNumber).mean().value()
        }));

        const chapterColumns: Column[] = map(this.chapterInfo, (chapter, chapterNumber) => {
            const chapterAverage: number = chain(this.dataList)
                .map(`chapter.${chapterNumber}`)
                .filter(isNumber)
                .mean()
                .value();
            return {
                id: `chapter-${chapterNumber}`,
                accessor: `chapter`,
                Header: (props: any) => <div className='chapter'>
                    <div>Chapter {chapterNumber} Test</div>
                    <div>{chapter.date}</div>
                    <div>{chapterAverage}%</div>
                </div>,
                Cell: (props: any) => {
                    const score: number = props.value[chapterNumber];
                    if (isNumber(score)) {
                        return <div>{score.toFixed(0)}%</div>
                    }
                    return;
                }
            };
        });

        return (
            <div>
                <Navbar color="light" expand="md">
                    <NavbarBrand href="/">Codespark</NavbarBrand>
                    <Nav className="ml-auto" navbar={true}>
                        <NavItem eventKey={1} href="#">
                            <NavLink href="https://github.com/afroradiohead/codespark-code-interview" target="_blank">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </NavLink>
                        </NavItem>
                    </Nav>
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
                            Cell: (props: any) => <span>{props.value}%</span>
                        }, ...chapterColumns ]}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
