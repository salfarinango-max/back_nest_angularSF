import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminarMailUser1795676409956 implements MigrationInterface {
    name = 'EliminarMailUser1795676409956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
