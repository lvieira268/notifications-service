import { Injectable } from '@nestjs/common';

import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
	constructor(private prismaService: PrismaService) {}

	async create(notification: Notification): Promise<void> {
		await this.prismaService.notification.create({
			data: {
				id: notification.id,
				recipientId: notification.recipientId,
				content: notification.content.value,
				category: notification.category,
				createdAt: notification.createdAd,
				readAt: notification.readAt,
			},
		});
	}
}
