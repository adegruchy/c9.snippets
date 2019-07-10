define("plugins/c9.snippets/package.c9.snippets", [], {
    "name": "c9.snippets",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/c9.snippets/__static__"
            }
        ]
    }
});

define("plugins/c9.snippets/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "undefined";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "javascript.snippets",
                    "data": "# scope: javascript\n\nsnippet avery\n\tconsole.log(`${0}`);\n\n"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "c9.snippets", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("c9.snippets.bundle");
        
        register(null, {});
    }
});
