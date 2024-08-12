module.exports = class Data1723206699043 {
    name = 'Data1723206699043'

    async up(db) {
        await db.query(`CREATE TABLE "account_transfer_sender_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_e552546f78849e8eab40a2abe00" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7f58bc1e58c474d506a3226011" ON "account_transfer_sender_total_count" ("rank") `)
        await db.query(`CREATE TABLE "account_transfer_sender_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_f9289e86e0a038c9a7f0ffd31bb" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c0ebb1a829725be0740f452cdd" ON "account_transfer_sender_total_value" ("rank") `)
        await db.query(`CREATE TABLE "account_transfer_receiver_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_8c4fe4f4df0c2fe09f4add91dc1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b96fa4f9f854baf4964b94c569" ON "account_transfer_receiver_total_count" ("rank") `)
        await db.query(`CREATE TABLE "account_transfer_receiver_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_74b1219748b0947e2c01869330f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1b077103b1bc5a17af2f4a064f" ON "account_transfer_receiver_total_value" ("rank") `)
        await db.query(`CREATE TABLE "account_remark_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_84b4f048b6b0cfe0a91928e3c56" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_935f40ea89724b633a624a746f" ON "account_remark_count" ("rank") `)
        await db.query(`CREATE TABLE "account_extrinsic_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_2d4d99f8fd71e09782e04ce6383" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d5e333e50391ebf70cf6bd8ea2" ON "account_extrinsic_total_count" ("rank") `)
        await db.query(`CREATE TABLE "account_extrinsic_success_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_6347e36b6dab52598920f2bf6d5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1fde147e099f5aaf89014b2637" ON "account_extrinsic_success_total_count" ("rank") `)
        await db.query(`CREATE TABLE "account_extrinsic_failed_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_ad0f35e57a01949e40173e09fc0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_669715a47deb663bbb401be0e1" ON "account_extrinsic_failed_total_count" ("rank") `)
        await db.query(`CREATE TABLE "account_transaction_fee_paid_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_575c98d771f13f9679578f5b9d7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e760a5a18d06dce57c6a7cd2d3" ON "account_transaction_fee_paid_total_value" ("rank") `)
        await db.query(`CREATE TABLE "farmer_vote_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_918f8e2d8e59a98268ff9b90091" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4a9dea9ace21c771d6009945cc" ON "farmer_vote_total_count" ("rank") `)
        await db.query(`CREATE TABLE "farmer_vote_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_d0d5a314e74587ba1d363abada8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38d89f81ab4a9be6af12f20645" ON "farmer_vote_total_value" ("rank") `)
        await db.query(`CREATE TABLE "farmer_block_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_e95044f1288e5ed17d5afbb8d9d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_08887941b347373a2a7df8cf46" ON "farmer_block_total_count" ("rank") `)
        await db.query(`CREATE TABLE "farmer_block_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_9ec5ca1a42210d4b6b81b2c3767" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_88601e3f9c9d6232e3aa8dfeec" ON "farmer_block_total_value" ("rank") `)
        await db.query(`CREATE TABLE "farmer_vote_and_block_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_2ddfe1f33054ae3e6f0bc1d169b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_04f9498f5fb7816da89ce6b74b" ON "farmer_vote_and_block_total_count" ("rank") `)
        await db.query(`CREATE TABLE "farmer_vote_and_block_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_c5e84d1cbe6d35a2be27dce2687" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2caffb1ea17ff11bce5324149c" ON "farmer_vote_and_block_total_value" ("rank") `)
        await db.query(`CREATE TABLE "operator_total_rewards_collected" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_d508f86eb381e877ab636102aac" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_22eff26301c07eb9bdc693b68e" ON "operator_total_rewards_collected" ("rank") `)
        await db.query(`CREATE TABLE "operator_total_tax_collected" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_ac699d330bc0ddf2c1abe2af16b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e87316f3b214f8c2a5390cc290" ON "operator_total_tax_collected" ("rank") `)
        await db.query(`CREATE TABLE "operator_bundle_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_8da0332f9c5fe77654da1ac45aa" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_28690a9d38a0f3e8241e1b0654" ON "operator_bundle_total_count" ("rank") `)
        await db.query(`CREATE TABLE "operator_deposits_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_23ecf13a9c3b7660aafd3482a6a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1f136e1778fa9bf9862c82237d" ON "operator_deposits_total_count" ("rank") `)
        await db.query(`CREATE TABLE "operator_deposits_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_1aafd1c19361ddaf43b519bb9a2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3271ed16cd7ec517f880c2b773" ON "operator_deposits_total_value" ("rank") `)
        await db.query(`CREATE TABLE "operator_withdrawals_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_bb81061cc6ab3d65e5c831a3657" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d2601198dd7c01836974664500" ON "operator_withdrawals_total_count" ("rank") `)
        await db.query(`CREATE TABLE "nominator_deposits_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_4c569d7d27fe43e38f5588ba246" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ff57ac3aa1a0ef318b3a53ca0c" ON "nominator_deposits_total_count" ("rank") `)
        await db.query(`CREATE TABLE "nominator_deposits_total_value" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" numeric NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_4a95edc83e860d25aaa76a03e68" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0a7603f976cedf076553398356" ON "nominator_deposits_total_value" ("rank") `)
        await db.query(`CREATE TABLE "nominator_withdrawals_total_count" ("id" character varying NOT NULL, "rank" integer NOT NULL, "value" integer NOT NULL, "last_contribution_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_at" integer NOT NULL, "updated_at" integer NOT NULL, CONSTRAINT "PK_e983c41d64d1945553ae30a805d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_3ceb44a26459c1c319442e02cb" ON "nominator_withdrawals_total_count" ("rank") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "account_transfer_sender_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_7f58bc1e58c474d506a3226011"`)
        await db.query(`DROP TABLE "account_transfer_sender_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_c0ebb1a829725be0740f452cdd"`)
        await db.query(`DROP TABLE "account_transfer_receiver_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_b96fa4f9f854baf4964b94c569"`)
        await db.query(`DROP TABLE "account_transfer_receiver_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_1b077103b1bc5a17af2f4a064f"`)
        await db.query(`DROP TABLE "account_remark_count"`)
        await db.query(`DROP INDEX "public"."IDX_935f40ea89724b633a624a746f"`)
        await db.query(`DROP TABLE "account_extrinsic_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_d5e333e50391ebf70cf6bd8ea2"`)
        await db.query(`DROP TABLE "account_extrinsic_success_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_1fde147e099f5aaf89014b2637"`)
        await db.query(`DROP TABLE "account_extrinsic_failed_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_669715a47deb663bbb401be0e1"`)
        await db.query(`DROP TABLE "account_transaction_fee_paid_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_e760a5a18d06dce57c6a7cd2d3"`)
        await db.query(`DROP TABLE "farmer_vote_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_4a9dea9ace21c771d6009945cc"`)
        await db.query(`DROP TABLE "farmer_vote_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_38d89f81ab4a9be6af12f20645"`)
        await db.query(`DROP TABLE "farmer_block_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_08887941b347373a2a7df8cf46"`)
        await db.query(`DROP TABLE "farmer_block_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_88601e3f9c9d6232e3aa8dfeec"`)
        await db.query(`DROP TABLE "farmer_vote_and_block_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_04f9498f5fb7816da89ce6b74b"`)
        await db.query(`DROP TABLE "farmer_vote_and_block_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_2caffb1ea17ff11bce5324149c"`)
        await db.query(`DROP TABLE "operator_total_rewards_collected"`)
        await db.query(`DROP INDEX "public"."IDX_22eff26301c07eb9bdc693b68e"`)
        await db.query(`DROP TABLE "operator_total_tax_collected"`)
        await db.query(`DROP INDEX "public"."IDX_e87316f3b214f8c2a5390cc290"`)
        await db.query(`DROP TABLE "operator_bundle_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_28690a9d38a0f3e8241e1b0654"`)
        await db.query(`DROP TABLE "operator_deposits_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_1f136e1778fa9bf9862c82237d"`)
        await db.query(`DROP TABLE "operator_deposits_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_3271ed16cd7ec517f880c2b773"`)
        await db.query(`DROP TABLE "operator_withdrawals_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_d2601198dd7c01836974664500"`)
        await db.query(`DROP TABLE "nominator_deposits_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_ff57ac3aa1a0ef318b3a53ca0c"`)
        await db.query(`DROP TABLE "nominator_deposits_total_value"`)
        await db.query(`DROP INDEX "public"."IDX_0a7603f976cedf076553398356"`)
        await db.query(`DROP TABLE "nominator_withdrawals_total_count"`)
        await db.query(`DROP INDEX "public"."IDX_3ceb44a26459c1c319442e02cb"`)
    }
}
