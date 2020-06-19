window.dom = {
    /**
     * 创建节点
     */
    create(string) {
        const container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    /**
     * 在一个节点后面新增一个节点
     */
    after(node, newNode) {
        node.parentNode.insertBefore(newNode, node.nextSibling)
    },
    /**
     * 在一个节点的前面插入一个节点
     */
    before(node, newNode) {
        node.parentNode.insertBefore(newNode, node)
    },
    /**
     * 在一个父节点里面新增一个子节点
     */
    append(parent, newNode) {
        parent.appendChild(newNode)
    },
    /**
     * 在一个节点外面新增一个父节点，例如:div外面再添加一层div
     * 原理:
     * 先把parent放到node的前面
     * 然后把node放到parent的里面
     */
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    /**
     * 删除节点
     * 这是兼容IE的写法,通过父节点删除子节点
     */
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    /**
     * 删除后代
     */
    empty(node) {
        const { childNodes } = node
        const array = []
            // for (let i = 0; i < childNodes.length - 1; i++) {
            //     dom.remove(childNodes[i])
            //     array.push(childNodes[i])
            // }
            // return array
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    /**
     * 修改节点
     * 如果参数为3个,分别是节点名称、属性名、属性值，则是修改节点
     * 如果参数为2个,分别是节点名称、属性名，则是查询节点
     */
    attr(node, name, value) { //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    /**
     * 设置节点的内容
     */
    text(node, string) { //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    /**
     * 修改节点内容
     */
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    /**
     * 修改节点的style
     */
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(argument1,argument2,argument3)
            node.style[name] = value
        } else if (arguments.length === 2) {
            //dom.style(argument1,argument2)
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(argument1)
                const object = name
                for (let key in name) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    /**
     * 在一个节点里添加一个class
     */
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        /**
         * 在一个节点里删除一个class
         */
        remove(node, className) {
            node.classList.remove(className)
        },
        /**
         * 查询节点里有没有这个class
         */
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    /**
     * 添加on监听
     */
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    /**
     * 移除监听
     */
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    /**
     * 根据选择器查找节点
     */
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    /**
     * 查找父节点
     */
    parent(node) {
        return node.parentNode
    },
    /**
     * 查找子节点
     */
    children(node) {
        return node.children
    },
    /**
     * 查找该节点的兄弟姐妹
     */
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    /**
     * 查找下一个节点
     */
    next(node) { //3表示文本，1表示节点
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    /**
     * 查找上一个节点
     */
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    /**
     * 遍历节点
     */
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    /**
     * 获取元素排行第几
     */
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
}