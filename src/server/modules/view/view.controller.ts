import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';

import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
	constructor(private viewService: ViewService) {}

	@Get('*')
	static(@Req() req: Request, @Res() res: Response): Promise<void> {
		return this.viewService.handle(req, res);
	}
}
