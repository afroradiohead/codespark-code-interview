import {Controller, Res, All} from '@nestjs/common';


@Controller()
export class MainController {

    @All()
    async root(@Res() res) {
        return res.status(200).sendFile("index.html");
    }
}