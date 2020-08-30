import { gql } from '@apollo/client';

export const gqlDynamicFormDefinition = gql`
    query DynamicFormDefinition($id: uuid!, $locale: String) {
        abstract_submission_system_by_pk(id: $id) {
            id
            end_time
            mnemonic
            name
            pages_aggregate {
                aggregate {
                    count
                }
            }
            pages(order_by: { page_order: asc }) {
                id
                display_name
                page_order
                blocks(order_by: { block_order: asc }) {
                    id
                    display_name
                    fields(order_by: { field_order: asc }) {
                        id
                        name
                        is_hidden
                        is_required
                        contains_value
                        has_value
                        must_match
                        min_length
                        max_length
                        selections_min
                        selections_max
                        field_type {
                            id
                            name
                        }
                        field_translations(
                            where: { locale: { _eq: $locale } }
                        ) {
                            id
                            fk_field
                            label
                            options
                            placeholder
                            hint_message
                            error_message
                        }
                    }
                    block_translations(where: { locale: { _eq: $locale } }) {
                        id
                        fk_block
                        title
                        error_message
                        bottom_text
                        top_text
                    }
                }
                page_translations(where: { locale: { _eq: $locale } }) {
                    id
                    fk_page
                    headline
                    error_message
                    title
                }
            }
        }
    }
`;
