import {createClient} from '@sanity/client';

export const client = createClient({
    projectId: 's54w3u2o',
    dataset: 'production',
    useCdn: 'true',
    apiVersion: '2021-10-21'
})