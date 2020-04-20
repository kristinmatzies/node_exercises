import fs from 'fs'
import path from 'path'

export default (request, response) => {
    const content = JSON.stringify(request.body)
    const fileNameBase = path.join(
        __dirname,
        '..',
        'data-contact',
        (new Date()).toISOString() + '.json'
    )

    fs.writeFileSync(fileNameBase + 'sync.json', content);
    //fs.writeFileSync(fileNameBase, content)
    response.json(JSON.parse(content))
}

