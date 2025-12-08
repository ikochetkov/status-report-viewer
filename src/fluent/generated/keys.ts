import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app.css': {
                        table: 'sys_ux_theme_asset'
                        id: '236ae3732c9a40688f23a502c8939109'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'c203fe1112ce47ecafa741bd825e8257'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '6c4fd9de2cc7474ea321f8ce1f103359'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '911c1724b60b4fb689d831c8cd079e9f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '960e4fcabc264f2d8bbce58de5074e2c'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '924ed856e4594c2993d1872f3bcef673'
                    }
                    'status-report-viewer': {
                        table: 'sys_ui_page'
                        id: '57d20fc36be44e30a7d1d3b9c1734382'
                    }
                    'x_mobit_st_rep_vw/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'f11b47cc09d34a1a948a850e9ef56614'
                    }
                    'x_mobit_st_rep_vw/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '0add3b3abbb3479d9946901ca45da392'
                    }
                }
            }
        }
    }
}
