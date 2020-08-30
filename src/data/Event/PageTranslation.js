import { gql } from '@apollo/client';

export const gqlPageTranslation = gql`
    query PageTranslation($fk_page: uuid, $locale: String) {
        page_translation(
            where: { locale: { _eq: $locale }, fk_page: { _eq: $fk_page } }
        ) {
            id
            bank_transfer_hint_message
            credit_card_hint_message
            error_message
            fk_page
            headline
            title
            page {
                id
                name
                display_name
                page_order
                blocks {
                    id
                    block_order
                    name
                    display_name
                    block_translations(where: { locale: { _eq: $locale } }) {
                        id
                        bottom_text
                        error_message
                        title
                        top_text
                    }
                    fields(order_by: { field_order: asc }) {
                        id
                        name
                        field_order
                        field_type_id
                        other_except_field
                        field_type {
                            id
                            name
                        }
                        field_translations {
                            id
                            fk_field
                            error_message
                            hint_message
                            label
                            locale
                            placeholder
                            options
                            text_after
                            text_before
                        }
                    }
                }
                formular {
                    id
                    go_live_date
                    go_offline_date
                    name
                    banner
                    event {
                        id
                        name
                        mnemonic
                    }
                }
            }
        }
    }
`;
