(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{565:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Think of Git as keeping a list of changes to files. So how do we tell Git to record our changes? "),t("strong",[s._v("Each recorded change to a file (or set of files) is called a commit.")])]),s._v(" "),t("h3",{attrs:{id:"tell-git-your-name-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tell-git-your-name-email"}},[s._v("#")]),s._v(" Tell Git Your Name & Email")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your Name"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you@example.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"checking-your-git-setup-name-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-your-git-setup-name-email"}},[s._v("#")]),s._v(" Checking Your Git Setup (Name & Email)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"staging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staging"}},[s._v("#")]),s._v(" Staging")]),s._v(" "),t("p",[s._v("Staging is telling Git what files we want to commit (new untracked files, modified files, or deleted files). We add files to a staging area, and then we commit what has been staged.")]),s._v(" "),t("p",[s._v("git add 将内容写入暂存区")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"File A"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"File D"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("If the file name/path has a space, wrap it in quotes.")]),s._v(" "),t("p",[s._v("修改了4个文件，在不放弃任何修改的情况下，其中一个文件不想提交，如何操作？（没add : git add 已经add: git reset --soft ）\n修改到一半的文件，突然间不需要或者放弃修改了，怎么恢复未修改前文件？ (git checkout)\n代码写一半，被打断去做其他功能开发，未完成代码保存？(git stash)\n代码写一半，发现忘记切换分支了？(git stash & git checkout)\n代码需要回滚了？（git reset）")])])]),s._v(" "),t("h3",{attrs:{id:"check-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-status"}},[s._v("#")]),s._v(" Check Status")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"unstage-a-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unstage-a-file"}},[s._v("#")]),s._v(" Unstage a File")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD example.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"deleting-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deleting-files"}},[s._v("#")]),s._v(" Deleting Files")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" example.html to remove a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("and stage it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r myfolder** to remove a folder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("and stage it"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"git-commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[s._v("#")]),s._v(" git commit")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Message that describes what this change does"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将暂存区内容添加到本地仓库中")]),s._v(" "),t("blockquote",[t("p",[s._v("Do not use past tense. "),t("strong",[s._v('Use language like "Make headings blue"')]),s._v('. When people read the commit messages they will do know what your code will do. Your change will "Make headings blue".')])]),s._v(" "),t("p",[s._v("每次使用git commit 命令我们都会在本地版本库生成一个40位的哈希值，这个哈希值也叫commit-id，")]),s._v(" "),t("p",[s._v("commit-id在版本回退的时候是非常有用的，它相当于一个快照")]),s._v(" "),t("h3",{attrs:{id:"fixing-your-last-commit-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-your-last-commit-message"}},[s._v("#")]),s._v(" Fixing Your Last Commit Message")]),s._v(" "),t("p",[s._v("If you made a mistake in your last commit message, run this command:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Put your corrected message here"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"view-a-list-of-commits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-a-list-of-commits"}},[s._v("#")]),s._v(" View a List of Commits")]),s._v(" "),t("p",[s._v("To see a simplified list of commits:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To see a list of commits with more detail (such who made the commit and when):")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("NOTE:")]),s._v(" If the list is long, use the "),t("strong",[s._v("Down/Up Arrow")]),s._v(" keys to scroll and hit "),t("strong",[s._v("Q")]),s._v(" to quit.")]),s._v(" "),t("p",[s._v("To see a list of commits with even more detail (including which files changed)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --stat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("git checkout")]),s._v("命令加上"),t("code",[s._v("-b")]),s._v("参数表示创建并切换，相当于以下两条命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"在-git-中切换到一个现有分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-git-中切换到一个现有分支"}},[s._v("#")]),s._v(" "),t("strong",[s._v("在 Git 中切换到一个现有分支")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("git checkout")]),s._v("命令用于切换分支或恢复工作树文件。"),t("code",[s._v("git checkout")]),s._v("是git最常用的命令之一，同时也是一个很危险的命令，因为这条命令会重写工作区。")]),s._v(" "),t("h3",{attrs:{id:"修改已经push了的commit信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改已经push了的commit信息"}},[s._v("#")]),s._v(" 修改已经push了的commit信息")]),s._v(" "),t("p",[s._v("使用**【git commit --amend】**命令，会进入到vim编辑器。")]),s._v(" "),t("p",[s._v("输入****【i】****，即进入编辑模式，此时编辑提交信息。")]),s._v(" "),t("p",[s._v("编辑好之后，按键**【Esc】"),t("strong",[s._v("，输入")]),s._v("【:wq】**，即保存和退出。")]),s._v(" "),t("p",[s._v("输入**【git push -f】**强制提交。")]),s._v(" "),t("h2",{attrs:{id:"merge-conflict"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-conflict"}},[s._v("#")]),s._v(" Merge Conflict")]),s._v(" "),t("p",[s._v("Merge conficts occur when two branches modifies the same hunk of the same file. To make merging easier, avoid making a lot of changes over a long period of time without merging. Smaller, frequent merges are usually the best aproach.")]),s._v(" "),t("blockquote",[t("p",[s._v("In some ways, the number and complexity of merge conflicts is a test of how moduler your code is.")])]),s._v(" "),t("p",[s._v("git pull –rebase\na.把你 commit 到本地仓库的内容，取出来放到暂存区(stash)（这时你的工作区是干净的）\nb.然后从远端拉取代码到本地，由于工作区是干净的，所以不会有冲突\nc.从暂存区把你之前提交的内容取出来，跟拉下来的代码合并")]),s._v(" "),t("blockquote",[t("p",[s._v("所以 rebase 在拉代码前要确保你本地工作区是干净的，如果你本地修改的内容没完全 commit 或者 stash，就会 rebase 失败。\n"),t("img",{attrs:{src:"/images/git-pull-rebase.png",alt:""}})])])])}),[],!1,null,null,null);a.default=n.exports}}]);