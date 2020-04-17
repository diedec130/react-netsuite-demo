/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 *@NModuleScope Public
 */
define(['N/search', 'N/file'], (search, file) => {
    const onRequest = (context) => {
        const html = getHtml('react-netsuite-demo')
        context.response.write(html)
    }

    const getHtml = (STATIC_FOLDER_NAME) => {
        try {
            const files = getStaticFiles(STATIC_FOLDER_NAME)
            const htmlId = files.find(f => f.name === 'index.html').id
            const html = file.load({ id: htmlId }).getContents()
                .replace(/\/static\/js\//g, '')
                .replace(/\/static\/css\//g, '')
                .replace(/\/manifest/, 'manifest')
                .replace(/\/favicon/, 'favicon')

            return files.reduce((pre, cur) => {
                return pre = pre.replace(cur.name, cur.url)
            }, html)
        } catch (e) {
            log.error('error', e)
            throw 'Cannot load Client. Please contact app administrator'
        }
    }

    const getStaticFiles = (folderName) => {
        var folderSearch = search.create({
            type: "folder",
            filters: [["name", "startswith", folderName]]
        }).run().getRange(0, 1)[0]

        return search.create({
            type: "file",
            filters:
                [["folder", "anyof", folderSearch.id]],
            columns:
                ["name", "url"]
        }).run().getRange(0, 1000).map(m => {
            return {
                id: m.id,
                name: m.getValue('name'),
                url: m.getValue('url')
            }
        })

    }

    return {
        onRequest
    }
})